// Service worker mínimo: permite instalar la app y hace que la página
// se pida siempre al servidor (sin copias antiguas), para que los socios
// vean la última versión publicada en cuanto se actualiza.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request, { cache: 'no-store' }).catch(() => fetch(e.request)));
  }
});
