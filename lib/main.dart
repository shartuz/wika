import 'package:flutter/material.dart';

import 'src/dictionary_page.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const WikaDictionaryApp());
}

class WikaDictionaryApp extends StatelessWidget {
  const WikaDictionaryApp({super.key});

  static const brandGreen = Color(0xFF4FDC9A);
  static const background = Color(0xFF464947);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Wika Dictionary',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        useMaterial3: true,
        colorScheme: ColorScheme.fromSeed(
          seedColor: brandGreen,
          brightness: Brightness.dark,
          surface: background,
        ),
        scaffoldBackgroundColor: background,
        appBarTheme: const AppBarTheme(
          backgroundColor: background,
          foregroundColor: Color(0xFFECECEE),
          surfaceTintColor: Colors.transparent,
          elevation: 0,
          shape: Border(bottom: BorderSide(color: Color(0x24FFFFFF))),
        ),
      ),
      home: const DictionaryPage(),
    );
  }
}
