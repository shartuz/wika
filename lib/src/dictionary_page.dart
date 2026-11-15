import 'dart:async';

import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

import 'local_server.dart';

/// Shows the bundled Wika website in a WebView.
class DictionaryPage extends StatefulWidget {
  const DictionaryPage({super.key});

  @override
  State<DictionaryPage> createState() => _DictionaryPageState();
}

class _DictionaryPageState extends State<DictionaryPage> {
  LocalWebServer? _server;
  WebViewController? _controller;
  String? _error;
  bool _isLoading = true;

  @override
  void initState() {
    super.initState();
    unawaited(_open());
  }

  @override
  void dispose() {
    unawaited(_server?.close());
    super.dispose();
  }

  Future<void> _open() async {
    try {
      final server = await LocalWebServer.start();
      if (!mounted) {
        await server.close();
        return;
      }
      _server = server;

      final controller = WebViewController();
      await controller.setJavaScriptMode(JavaScriptMode.unrestricted);
      await controller.setBackgroundColor(const Color(0xFF464947));
      await controller.setNavigationDelegate(
        NavigationDelegate(
          onPageStarted: (_) => _setLoading(true),
          onPageFinished: (_) => _setLoading(false),
          onWebResourceError: (error) {
            if (error.isForMainFrame ?? false) {
              _showError('The dictionary could not be displayed: ${error.description}');
            }
          },
          // Stay inside the bundled site; block every outside link.
          onNavigationRequest: (request) {
            final uri = Uri.tryParse(request.url);
            final isLocal = uri != null &&
                uri.scheme == 'http' &&
                uri.host == '127.0.0.1' &&
                uri.port == server.port;
            return isLocal ? NavigationDecision.navigate : NavigationDecision.prevent;
          },
        ),
      );

      if (!mounted) return;
      setState(() => _controller = controller);
      await controller.loadRequest(server.home);
    } catch (e) {
      _showError('Could not start the offline dictionary: $e');
    }
  }

  void _setLoading(bool value) {
    if (mounted) setState(() => _isLoading = value);
  }

  void _showError(String message) {
    if (!mounted) return;
    setState(() {
      _isLoading = false;
      _error = message;
    });
  }

  void _reload() {
    final controller = _controller;
    if (controller == null) return;
    setState(() {
      _error = null;
      _isLoading = true;
    });
    unawaited(controller.reload());
  }

  @override
  Widget build(BuildContext context) {
    final controller = _controller;
    return Scaffold(
      appBar: AppBar(
        title: const Text('Wika Dictionary'),
        actions: [
          IconButton(
            tooltip: 'Reload dictionary',
            icon: const Icon(Icons.refresh),
            onPressed: controller == null ? null : _reload,
          ),
        ],
      ),
      body: switch ((_error, controller)) {
        (final String error, _) => Center(
            child: Padding(
              padding: const EdgeInsets.all(24),
              child: SelectableText(error, textAlign: TextAlign.center),
            ),
          ),
        (null, null) => const Center(child: CircularProgressIndicator()),
        (null, final WebViewController controller) => Stack(
            children: [
              WebViewWidget(controller: controller),
              if (_isLoading) const LinearProgressIndicator(minHeight: 3),
            ],
          ),
      },
    );
  }
}
