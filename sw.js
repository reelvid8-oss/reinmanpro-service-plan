'use strict';
// The build script changes this identifier whenever the app or its assets change.
const CACHE_PREFIX = 'reinmanpro-pages:' + self.registration.scope + ':';
const CACHE_NAME = CACHE_PREFIX + '2ffc90695a20a4d6';
const APP_URL = new URL('index.html', self.registration.scope).href;
const SHELL = ['index.html', 'manifest.webmanifest', 'pwa.js', 'pwa.css',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png']
  .map(path => new URL(path, self.registration.scope).href);

async function cacheShell() {
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(SHELL.map(url => new Request(url, { cache: 'reload' })));
  return cache;
}

self.addEventListener('install', event => {
  // New versions wait until the user requests an update or closes the app.
  event.waitUntil(cacheShell());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
      .map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', event => {
  if (event.data?.type === 'APPLY_UPDATE') {
    event.waitUntil(self.skipWaiting());
  }
  if (event.data?.type === 'ENSURE_READY') {
    event.waitUntil((async () => {
      try {
        let cache = await caches.open(CACHE_NAME);
        const files = await Promise.all(SHELL.map(url => cache.match(url)));
        if (files.some(file => !file)) cache = await cacheShell();
        event.ports[0]?.postMessage({ ready: true });
      } catch {
        event.ports[0]?.postMessage({ ready: false });
      }
    })());
  }
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  const root = new URL(self.registration.scope);
  if (url.origin !== root.origin || !url.pathname.startsWith(root.pathname)) return;
  const appNavigation = request.mode === 'navigate' &&
    (url.pathname === root.pathname || url.pathname === new URL(APP_URL).pathname);
  const assetUrl = url.origin + url.pathname;
  if (!appNavigation && !SHELL.includes(assetUrl)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(appNavigation ? APP_URL : assetUrl);
    if (cached) return cached;
    try {
      return await fetch(request);
    } catch {
      return new Response('Connect to the internet and reopen ReinmanPro to finish downloading the app.', {
        status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }
  })());
});
