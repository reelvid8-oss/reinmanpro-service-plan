(() => {
  'use strict';
  if (!('serviceWorker' in navigator) || !window.isSecureContext) return;
  const scope = new URL('./', document.baseURI);
  const readyKey = 'reinmanpro-ready:' + scope.pathname;
  const notice = document.createElement('aside');
  notice.className = 'pwa-notice';
  notice.hidden = true;
  notice.setAttribute('aria-label', 'App update');
  notice.innerHTML = '<p role="status"></p><button type="button" class="pwa-update" hidden>Update app</button><button type="button" class="pwa-dismiss">Close</button>';
  document.getElementById('salesApp').append(notice);
  const message = notice.querySelector('p');
  const updateButton = notice.querySelector('.pwa-update');
  const dismiss = notice.querySelector('.pwa-dismiss');
  let registration, updateRequested = false, timer, updateTimer;
  const show = (text, update = false) => {
    clearTimeout(timer);
    message.textContent = text;
    updateButton.hidden = !update;
    dismiss.textContent = update ? 'Later' : 'Close';
    notice.hidden = false;
    if (!update) timer = setTimeout(() => { notice.hidden = true; }, 7000);
  };
  dismiss.addEventListener('click', () => { notice.hidden = true; });
  updateButton.addEventListener('click', () => {
    if (!registration?.waiting) { notice.hidden = true; return; }
    updateRequested = true;
    updateButton.disabled = true;
    message.textContent = 'Updating your app…';
    registration.waiting.postMessage({ type: 'APPLY_UPDATE' });
    updateTimer = setTimeout(() => {
      updateRequested = false;
      updateButton.disabled = false;
      show('The update is taking longer than expected. Try again when you are ready.', true);
    }, 15000);
  });
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (updateRequested) { clearTimeout(updateTimer); location.reload(); }
  });

  async function confirmReady() {
    if (registration?.waiting) return;
    const worker = navigator.serviceWorker.controller || registration?.active;
    if (!worker) return;
    const ready = await new Promise(resolve => {
      const channel = new MessageChannel();
      const timeout = setTimeout(() => { channel.port1.close(); resolve(false); }, 15000);
      channel.port1.onmessage = event => {
        clearTimeout(timeout); channel.port1.close(); resolve(event.data?.ready === true);
      };
      worker.postMessage({ type: 'ENSURE_READY' }, [channel.port2]);
    });
    if (registration?.waiting) return;
    if (!ready) {
      show('Connect to the internet and reopen the app to finish saving it on this device.');
      return;
    }
    let shown = false;
    try { shown = localStorage.getItem(readyKey) === 'yes'; localStorage.setItem(readyKey, 'yes'); } catch {}
    if (!shown) show('Your app is ready on this device. You can now use it without internet.');
  }

  window.addEventListener('load', async () => {
    try {
      registration = await navigator.serviceWorker.register(new URL('sw.js', scope), {
        scope: scope.href, updateViaCache: 'none'
      });
      const offerUpdate = () => {
        if (registration.waiting) show('An app update is ready. Update when you have finished your current plan.', true);
      };
      offerUpdate();
      registration.addEventListener('updatefound', () => {
        const worker = registration.installing;
        worker?.addEventListener('statechange', () => { if (worker.state === 'installed') offerUpdate(); });
      });
      await navigator.serviceWorker.ready;
      await confirmReady();
      window.addEventListener('online', () => {
        registration.update().catch(() => {});
        confirmReady();
      });
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible' && navigator.onLine) registration.update().catch(() => {});
      });
    } catch {
      show('The calculator is available. Reopen it with internet to finish setting up this device.');
    }
  });
})();
