// Mobile display adapter. Leaves dictionary.json and the original app.js untouched.
// Some user-authored notes are strings; the original displayEntry expects arrays.
// Adapt only the entry passed to the renderer. Do not correct or rewrite text.
(function () {
  'use strict';
  const originalDisplayEntry = displayEntry;
  displayEntry = function (entry) {
    const renderable = Object.assign({}, entry);
    for (const field of ['englishDefinition', 'finnishDefinition']) {
      if (typeof renderable[field] === 'string') {
        renderable[field] = renderable[field] ? [renderable[field]] : [];
      }
    }
    return originalDisplayEntry(renderable);
  };
})();
