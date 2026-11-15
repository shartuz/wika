// Wika Dictionary — English <-> Finnish translator.
//  * Offline: word-by-word lookup in data/english_finnish.json and
//    data/finnish_english.json (works without internet).
//  * Online: sentence translation through MyMemory. Inside the mobile app the
//    request goes through the app's local /api/translate endpoint.
'use strict';

(() => {
  const $ = (id) => document.getElementById(id);

  const modeSwitch = $('trMode');
  const direction = $('trDirection');
  const field = $('trText');
  const button = $('trSend');
  const output = $('trOutput');
  const note = $('trNote');

  const MAX_CHARS = 500;
  const MAX_WORDS = 50;

  const BUTTON_TEXT = 'search';

  /** 'online' when the switch is on, otherwise 'offline'. */
  const currentMode = () =>
    modeSwitch.getAttribute('aria-checked') === 'true' ? 'online' : 'offline';

  const TEXT = {
    offline: {
      placeholder: 'Type a word, or several separate words...',
      note: 'Offline: word-by-word translation only, no sentence translation. Translations may be incorrect.',
      ready: 'Offline translation ready.',
    },
    online: {
      placeholder: 'Type a sentence or short text...',
      note: 'Online: translation via MyMemory. Online translations may be incorrect. Maximum 500 UTF-8 bytes per request.',
      ready: 'MyMemory online translator ready.',
    },
  };

  // ---------- Offline word lists (loaded on first use) ----------

  let vocabulary = null;

  function loadVocabulary() {
    vocabulary ??= Promise.all(
      ['english_finnish', 'finnish_english'].map((name) =>
        fetch(`data/${name}.json`).then((response) => {
          if (!response.ok) throw new Error(`Could not load ${name}.json`);
          return response.json();
        })
      )
    ).then(([enToFi, fiToEn]) => ({
      'en-fi': { words: enToFi, folded: buildCaseIndex(enToFi) },
      'fi-en': { words: fiToEn, folded: buildCaseIndex(fiToEn) },
    }));
    vocabulary.catch(() => { vocabulary = null; }); // allow a retry
    return vocabulary;
  }

  /** Lower-cased headword -> original headword, for case-insensitive lookup. */
  function buildCaseIndex(map) {
    const result = new Map();
    for (const key of Object.keys(map)) {
      const folded = key.normalize('NFC').toLocaleLowerCase();
      if (!result.has(folded)) result.set(folded, key);
    }
    return result;
  }

  function lookup(vocab, input) {
    const term = input.trim().normalize('NFC');
    const key = Object.hasOwn(vocab.words, term)
      ? term
      : vocab.folded.get(term.toLocaleLowerCase());
    return key === undefined ? null : vocab.words[key];
  }

  /** Looks up a whole phrase first, then falls back to word by word. */
  function translateOffline(vocab, text) {
    const exact = lookup(vocab, text);
    if (exact) {
      return { lines: [`${text.trim()} → ${exact.join(' / ')}`], missing: 0, phrase: true };
    }
    const tokens = text.trim().split(/\s+/u).filter(Boolean);
    if (tokens.length > MAX_WORDS) {
      return { error: `Enter no more than ${MAX_WORDS} words at once.` };
    }
    let missing = 0;
    const lines = tokens.map((token) => {
      // Strip surrounding punctuation; letters such as ä and ö are kept.
      const bare = token.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '');
      const found = bare ? lookup(vocab, bare) : null;
      if (found) return `${token} → ${found.join(' / ')}`;
      missing += 1;
      return `${token} → Not found in offline word list`;
    });
    return { lines, missing, phrase: false };
  }

  // ---------- Online translation ----------

  async function translateOnline(text) {
    const query = new URLSearchParams({ text, direction: direction.value });
    let response;
    try {
      response = await fetch(`/api/translate?${query}`, { cache: 'no-store' });
    } catch {
      throw new Error('Cannot translate right now. Check your internet connection.');
    }
    const isJson = response.headers.get('content-type')?.includes('json');
    if (!isJson) throw new Error('Online translation is only available in the Wika app.');
    const json = await response.json();
    if (!response.ok) throw new Error(json.error || 'Translation unavailable.');
    return json.translation || 'No translation returned.';
  }

  // ---------- UI ----------

  function show(message, isError = false) {
    output.textContent = message; // never render results as HTML
    output.classList.toggle('is-error', isError);
  }

  function updateMode() {
    const text = TEXT[currentMode()];
    button.textContent = BUTTON_TEXT;
    field.placeholder = text.placeholder;
    note.textContent = text.note;
    show(text.ready);
  }

  async function onTranslate() {
    const value = field.value.trim();
    if (!value) {
      show('Please enter a word or some text.', true);
      return;
    }

    if (currentMode() === 'offline') {
      if (value.length > MAX_CHARS) {
        show(`Please enter at most ${MAX_CHARS} characters.`, true);
        return;
      }
      try {
        const vocab = (await loadVocabulary())[direction.value];
        const result = translateOffline(vocab, value);
        if (result.error) {
          show(result.error, true);
          return;
        }
        const ending = result.phrase
          ? ''
          : '\n\nWord-by-word lookup only; word order and grammar are not translated.';
        show(result.lines.join('\n') + ending, result.missing === result.lines.length);
      } catch (error) {
        show(error.message, true);
      }
      return;
    }

    if (new TextEncoder().encode(value).length > MAX_CHARS) {
      show('This text is too long. MyMemory accepts up to 500 UTF-8 bytes at a time.', true);
      return;
    }
    button.disabled = true;
    button.textContent = 'Translating...';
    show('Contacting MyMemory...');
    try {
      show(await translateOnline(value));
    } catch (error) {
      show(error.message, true);
    } finally {
      button.disabled = false;
      button.textContent = BUTTON_TEXT;
    }
  }

  modeSwitch.addEventListener('click', () => {
    const on = currentMode() === 'offline';
    modeSwitch.setAttribute('aria-checked', String(on));
    updateMode();
  });
  button.addEventListener('click', onTranslate);
  // Enter searches; Shift+Enter still adds a new line.
  field.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey && !event.isComposing) {
      event.preventDefault();
      if (!button.disabled) onTranslate();
    }
  });
  updateMode();
})();
