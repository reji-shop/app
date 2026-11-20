const C = 'reji-v3';
const FILES = ['./', 'index.html', 'manifest.json', 'icon-192.png', 'icon-512.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(C).then(c => c.addAll(FILES)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))));
  self.clients.claim();
});
// 自分のファイルと Firebase の部品だけを扱う。Firestore の通信（常時接続）には触れない
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const u = new URL(e.request.url);
  if (u.origin !== location.origin && u.hostname !== 'www.gstatic.com') return;
  e.respondWith(
    fetch(e.request,{cache:'no-cache'}).then(r => {
      if (r.ok) { const copy = r.clone(); caches.open(C).then(c => c.put(e.request, copy)); }
      return r;
    }).catch(() => caches.match(e.request).then(r => r || caches.match('index.html')))
  );
});
