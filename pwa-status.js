(function () {
  'use strict';
  const status = document.getElementById('wika-pwa-status');
  if (!status) return;
  if (!('serviceWorker' in navigator)) {
    status.textContent = 'This browser does not support offline installation.';
    return;
  }
  navigator.serviceWorker.ready.then(function () {
    status.textContent = 'Offline ready — dictionary and word translations saved on this device.';
  }).catch(function () {
    status.textContent = 'Offline setup could not finish. Open the app over HTTPS and retry.';
  });
  if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') {
    status.textContent = 'Offline installation requires HTTPS. Publish the app to an HTTPS website first.';
  }
})();
