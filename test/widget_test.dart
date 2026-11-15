import 'dart:convert';
import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:wika_dictionary/main.dart';

void main() {
  testWidgets('App starts with the Wika Dictionary title', (tester) async {
    await tester.pumpWidget(const WikaDictionaryApp());
    expect(find.text('Wika Dictionary'), findsOneWidget);
    expect(find.byIcon(Icons.refresh), findsOneWidget);
  });

  group('dictionary.json', () {
    final entries = jsonDecode(
      File('assets/web/data/dictionary.json').readAsStringSync(),
    ) as List<dynamic>;

    test('every entry has the expected fields', () {
      for (final entry in entries.cast<Map<String, dynamic>>()) {
        expect(entry['words'], isA<List<dynamic>>());
        expect(entry['translation'], isA<String>());
        expect(entry['englishDefinition'], isA<List<dynamic>>());
        expect(entry['finnishDefinition'], isA<List<dynamic>>());
        expect(entry['table'], isA<List<dynamic>>());
        expect(entry['imageName'], isA<String>());
      }
    });

    test('every image referenced by an entry exists', () {
      for (final entry in entries.cast<Map<String, dynamic>>()) {
        final image = entry['imageName'] as String;
        if (image.isEmpty) continue;
        expect(File('assets/web/images/$image').existsSync(), isTrue,
            reason: 'Missing image "$image" for ${entry['words']}');
      }
    });
  });
}
