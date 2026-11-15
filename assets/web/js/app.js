// Wika Dictionary — search and display.
'use strict';

(() => {
  const $ = (id) => document.getElementById(id);

  const form = $('searchForm');
  const input = $('searchInput');
  const suggestionList = $('suggestions');
  const status = $('status');
  const results = $('results');
  const template = $('entryTemplate');
  const viewer = $('imageViewer');
  const viewerImg = $('imageViewerImg');

  /** Lower-cased search word -> every entry that lists it (in file order). */
  const index = new Map();
  /** Entry -> its position in dictionary.json. */
  const entryIds = new Map();

  const ready = fetch('data/dictionary.json', { cache: 'no-cache' })
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .then((entries) => {
      buildIndex(entries);
      prepareSuggestions();
    })
    .catch((error) => {
      showStatus(`Could not load the dictionary (${error.message}). Try refreshing the page.`);
    });

  function buildIndex(entries) {
    entries.forEach((entry, i) => entryIds.set(entry, i));
    for (const entry of entries) {
      for (const word of entry.words) {
        const key = word.toLowerCase().trim();
        const list = index.get(key) ?? [];
        if (!list.includes(entry)) list.push(entry);
        index.set(key, list);
      }
    }
  }

  // ---------- Suggestions ----------

  const MAX_SUGGESTIONS = 5;
  /** [{ word, plain }] where plain is lower-case without accents (ä -> a). */
  let suggestionWords = [];
  let activeSuggestion = -1;

  const plain = (text) =>
    text.toLowerCase().normalize('NFD').replace(/\p{M}/gu, '').trim();

  function prepareSuggestions() {
    suggestionWords = [...index.keys()].map((word) => ({ word, plain: plain(word) }));
  }

  /** Number of single-letter edits needed to turn a into b (typo distance). */
  function editDistance(a, b) {
    let previous = Array.from({ length: b.length + 1 }, (_, i) => i);
    for (let i = 1; i <= a.length; i++) {
      const current = [i];
      for (let j = 1; j <= b.length; j++) {
        current[j] = Math.min(
          previous[j] + 1,
          current[j - 1] + 1,
          previous[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
        );
      }
      previous = current;
    }
    return previous[b.length];
  }

  /** Lower score = better match. Returns null when the word doesn't match. */
  function matchScore(query, word) {
    if (word === query) return 0;
    if (word.startsWith(query)) return 1;
    if (word.split(/[\s\-/,]+/).some((part) => part.startsWith(query))) return 2;
    if (query.length >= 3 && word.includes(query)) return 3;
    if (query.length >= 3) {
      // Typo tolerance: compare with the start of the word, and the whole word.
      const allowed = query.length >= 6 ? 2 : 1;
      const typo = Math.min(
        editDistance(query, word.slice(0, query.length)),
        editDistance(query, word)
      );
      if (typo <= allowed) return 4 + typo;
    }
    return null;
  }

  function findSuggestions(text) {
    const query = plain(text);
    if (!query) return [];
    const ranked = suggestionWords
      .map((item) => ({ ...item, score: matchScore(query, item.plain) }))
      .filter((item) => item.score !== null)
      .sort((a, b) => a.score - b.score || a.word.length - b.word.length || a.word.localeCompare(b.word, 'fi'));

    // Skip words that open exactly the same entries as a word already listed
    // (e.g. "antidote" and "antidotes").
    const seenResults = new Set();
    const picked = [];
    for (const item of ranked) {
      const results = index.get(item.word).map((entry) => entryIds.get(entry)).join(',');
      if (seenResults.has(results)) continue;
      seenResults.add(results);
      picked.push(item);
      if (picked.length === MAX_SUGGESTIONS) break;
    }
    return picked;
  }

  function renderSuggestions() {
    const query = plain(input.value);
    const found = findSuggestions(input.value);
    activeSuggestion = -1;
    suggestionList.replaceChildren(
      ...found.map((item, i) => {
        const li = document.createElement('li');
        li.id = `suggestion-${i}`;
        li.setAttribute('role', 'option');
        li.dataset.word = item.word;
        // Highlight the typed part when the word starts with it.
        if (item.plain.startsWith(query)) {
          const mark = document.createElement('mark');
          mark.textContent = item.word.slice(0, query.length);
          li.append(mark, item.word.slice(query.length));
        } else {
          li.textContent = item.word;
        }
        return li;
      })
    );
    setSuggestionsOpen(found.length > 0);
  }

  function setSuggestionsOpen(open) {
    suggestionList.hidden = !open;
    input.setAttribute('aria-expanded', String(open));
    if (!open) input.removeAttribute('aria-activedescendant');
  }

  function highlightSuggestion(i) {
    const items = suggestionList.children;
    if (!items.length) return;
    activeSuggestion = (i + items.length) % items.length;
    [...items].forEach((li, n) => li.setAttribute('aria-selected', String(n === activeSuggestion)));
    input.setAttribute('aria-activedescendant', items[activeSuggestion].id);
  }

  function chooseSuggestion(word) {
    input.value = word;
    setSuggestionsOpen(false);
    search();
  }

  input.addEventListener('input', renderSuggestions);
  input.addEventListener('keydown', (event) => {
    if (suggestionList.hidden) return;
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      highlightSuggestion(activeSuggestion + (event.key === 'ArrowDown' ? 1 : -1));
    } else if (event.key === 'Enter' && activeSuggestion >= 0) {
      event.preventDefault();
      chooseSuggestion(suggestionList.children[activeSuggestion].dataset.word);
    } else if (event.key === 'Escape') {
      setSuggestionsOpen(false);
    }
  });
  // pointerdown (not click) so it fires before the input loses focus.
  suggestionList.addEventListener('pointerdown', (event) => {
    const li = event.target.closest('li');
    if (!li) return;
    event.preventDefault();
    chooseSuggestion(li.dataset.word);
  });
  input.addEventListener('blur', () => setSuggestionsOpen(false));

  function showStatus(message) {
    status.textContent = message;
  }

  async function search() {
    await ready;
    setSuggestionsOpen(false);
    const query = input.value.toLowerCase().trim();
    results.replaceChildren();
    showStatus('');
    if (!query) return;

    const matches = index.get(query);
    if (!matches) {
      showStatus('Word not found');
      return;
    }
    // When several entries share a picture, show it only once (the first time).
    const shownImages = new Set();
    results.replaceChildren(...matches.map((entry) => renderEntry(entry, shownImages)));
  }

  // Dictionary text is the owner's own content and may contain formatting
  // tags such as <b>, <red> or <strike>, so it is rendered as HTML.
  function renderEntry(entry, shownImages) {
    const node = template.content.firstElementChild.cloneNode(true);
    const part = (selector) => node.querySelector(selector);

    const translation = part('.translation');
    if (entry.translation) translation.textContent = entry.translation;
    else translation.remove();

    renderNotes(entry.englishDefinition, part('.english-notes'), part('.english-title'));
    renderNotes(entry.finnishDefinition, part('.finnish-notes'), part('.finnish-title'));

    const tableBox = part('.table-box');
    if (entry.table?.length) {
      const rows = entry.table
        .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`)
        .join('');
      tableBox.innerHTML = `<table>${rows}</table>`;
    } else {
      tableBox.remove();
    }

    const figure = part('.entry-image');
    if (entry.imageName && !shownImages.has(entry.imageName)) {
      shownImages.add(entry.imageName);
      const img = figure.querySelector('img');
      img.src = `images/${entry.imageName}`;
      img.alt = entry.words[0];
      img.addEventListener('click', () => openImage(img));
    } else {
      figure.remove();
    }
    return node;
  }

  function renderNotes(lines, box, title) {
    if (lines?.length) {
      box.innerHTML = lines.join('<br>');
    } else {
      box.remove();
      title.remove();
    }
  }

  function openImage(img) {
    viewerImg.src = img.src;
    viewerImg.alt = img.alt;
    viewer.showModal();
  }

  // Tap outside the picture to close the viewer.
  viewer.addEventListener('click', (event) => {
    if (event.target === viewer) viewer.close();
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    search();
  });

  // Home: clear the search and go back to the top of the page.
  $('homeButton').addEventListener('click', () => {
    input.value = '';
    setSuggestionsOpen(false);
    results.replaceChildren();
    showStatus('');
    input.blur();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Offline support when hosted as a website. Not needed inside the mobile
  // app, which already serves every file from the device.
  const isLocal = ['localhost', '127.0.0.1'].includes(location.hostname);
  if ('serviceWorker' in navigator && !isLocal) {
    navigator.serviceWorker.register('service-worker.js').catch((error) => {
      console.warn('Service worker registration failed:', error);
    });
  }
})();
