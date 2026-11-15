import 'dart:async';
import 'dart:io';

import 'package:flutter/services.dart';

import 'translation_proxy.dart';

/// Serves the bundled website (`assets/web/`) to the WebView over
/// `http://127.0.0.1`.
///
/// A real HTTP origin (instead of `file://`) lets the page `fetch()` its JSON
/// data on both Android and iOS. The server is bound to the loopback address,
/// so nothing on Wi-Fi or the local network can reach it, and it only ever
/// returns files that are packaged inside the app.
class LocalWebServer {
  LocalWebServer._(this._server, this._files);

  static const _webRoot = 'assets/web/';

  final HttpServer _server;

  /// Web paths (relative to [_webRoot]) that exist in the app bundle.
  final Set<String> _files;

  final _translator = TranslationProxy();

  Uri get home => Uri.parse('http://127.0.0.1:${_server.port}/index.html');
  int get port => _server.port;

  static Future<LocalWebServer> start() async {
    final manifest = await AssetManifest.loadFromAssetBundle(rootBundle);
    final files = manifest
        .listAssets()
        .where((asset) => asset.startsWith(_webRoot))
        .map((asset) => asset.substring(_webRoot.length))
        .toSet();

    final server = await HttpServer.bind(InternetAddress.loopbackIPv4, 0);
    final instance = LocalWebServer._(server, files);
    server.listen((request) => unawaited(instance._handle(request)));
    return instance;
  }

  Future<void> close() => _server.close(force: true);

  Future<void> _handle(HttpRequest request) async {
    final response = request.response;
    try {
      final path = request.uri.path == '/'
          ? 'index.html'
          : Uri.decodeComponent(request.uri.path.substring(1));

      if (path == TranslationProxy.path) {
        await _translator.handle(request);
        return;
      }
      if (request.method != 'GET' && request.method != 'HEAD') {
        response.statusCode = HttpStatus.methodNotAllowed;
        return;
      }
      if (!_files.contains(path)) {
        response.statusCode = HttpStatus.notFound;
        return;
      }

      final data = await rootBundle.load('$_webRoot$path');
      final bytes = data.buffer.asUint8List(data.offsetInBytes, data.lengthInBytes);
      response.headers
        ..contentType = _contentType(path)
        ..set(HttpHeaders.cacheControlHeader, 'no-cache');
      response.contentLength = bytes.length;
      if (request.method == 'GET') response.add(bytes);
    } catch (_) {
      response.statusCode = HttpStatus.internalServerError;
    } finally {
      await response.close();
    }
  }

  static ContentType _contentType(String path) {
    final extension = path.substring(path.lastIndexOf('.') + 1).toLowerCase();
    return switch (extension) {
      'html' => ContentType.html,
      'css' => ContentType('text', 'css', charset: 'utf-8'),
      'js' => ContentType('text', 'javascript', charset: 'utf-8'),
      'json' => ContentType.json,
      'png' => ContentType('image', 'png'),
      'jpg' || 'jpeg' => ContentType('image', 'jpeg'),
      'webp' => ContentType('image', 'webp'),
      'gif' => ContentType('image', 'gif'),
      'svg' => ContentType('image', 'svg+xml'),
      'txt' => ContentType.text,
      _ => ContentType.binary,
    };
  }
}
