import 'dart:async';
import 'dart:convert';
import 'dart:io';

/// Handles `GET /api/translate?text=...&direction=en-fi|fi-en` for the
/// website's online translator and forwards it to MyMemory over HTTPS.
///
/// Doing this in Dart avoids WebView CORS problems. Only the text the user
/// typed into the translator is sent; dictionary data never leaves the device.
class TranslationProxy {
  static const path = 'api/translate';

  /// MyMemory's per-request limit for anonymous use.
  static const maxBytes = 500;

  static const _timeout = Duration(seconds: 15);
  static const _languagePairs = {'en-fi': 'en|fi', 'fi-en': 'fi|en'};

  Future<void> handle(HttpRequest request) async {
    final response = request.response;
    response.headers
      ..contentType = ContentType.json
      ..set(HttpHeaders.cacheControlHeader, 'no-store');

    final (status, body) = await _translate(request);
    response.statusCode = status;
    response.add(utf8.encode(jsonEncode(body)));
  }

  Future<(int, Map<String, String>)> _translate(HttpRequest request) async {
    (int, Map<String, String>) error(int status, String message) =>
        (status, {'error': message});

    if (request.method != 'GET') {
      return error(HttpStatus.methodNotAllowed, 'This action is not supported.');
    }

    final text = (request.uri.queryParameters['text'] ?? '').trim();
    final pair = _languagePairs[request.uri.queryParameters['direction'] ?? 'en-fi'];
    if (text.isEmpty) {
      return error(HttpStatus.badRequest, 'Please enter text to translate.');
    }
    if (utf8.encode(text).length > maxBytes) {
      return error(HttpStatus.badRequest,
          'MyMemory allows a maximum of $maxBytes UTF-8 bytes per request.');
    }
    if (pair == null) {
      return error(HttpStatus.badRequest, 'Choose English or Finnish.');
    }

    final uri = Uri.https('api.mymemory.translated.net', '/get', {
      'q': text,
      'langpair': pair,
    });
    final client = HttpClient()..connectionTimeout = const Duration(seconds: 10);
    try {
      final remoteRequest = await client.getUrl(uri).timeout(_timeout);
      remoteRequest.headers.set(HttpHeaders.acceptHeader, 'application/json');
      final remote = await remoteRequest.close().timeout(_timeout);
      if (remote.statusCode != HttpStatus.ok) {
        return error(HttpStatus.badGateway,
            'Translation service is unavailable (${remote.statusCode}).');
      }

      final data = jsonDecode(await utf8.decodeStream(remote).timeout(_timeout));
      if (data is! Map<String, dynamic>) {
        return error(HttpStatus.badGateway, 'Unexpected translation response.');
      }
      final status = data['responseStatus'];
      if (status != 200 && status != '200') {
        final details = data['responseDetails'];
        return error(
          HttpStatus.badGateway,
          details is String && details.isNotEmpty
              ? details
              : 'MyMemory could not translate this text.',
        );
      }

      final result = data['responseData'];
      final translation = result is Map ? result['translatedText'] : null;
      if (translation is! String || translation.trim().isEmpty) {
        return error(HttpStatus.badGateway, 'No translation was returned.');
      }
      if (translation.startsWith('MYMEMORY WARNING:')) {
        return error(HttpStatus.tooManyRequests,
            'The MyMemory free translation limit was reached for today.');
      }
      return (HttpStatus.ok, {'translation': translation});
    } on SocketException {
      return error(HttpStatus.serviceUnavailable,
          'No internet connection. The offline dictionary still works.');
    } on TimeoutException {
      return error(HttpStatus.gatewayTimeout,
          'Translation timed out. Check your connection and try again.');
    } on FormatException {
      return error(HttpStatus.badGateway, 'Unexpected translation response.');
    } catch (_) {
      return error(HttpStatus.badGateway,
          'Could not contact MyMemory. Check your connection and try again.');
    } finally {
      client.close(force: true);
    }
  }
}
