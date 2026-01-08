const CACHE_NAME = 'dicerpg-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=MedievalSharp&display=swap',
  // Icone App
  'icons/icon-192.png',
  'icons/icon-512.png',
  // Immagini di Gioco (se le hai in img/)
  'img/scudo.png',
  'img/sangue.png',
  'img/sangue1.png', 
  'img/sangue2.png',
  'img/sangue3.png', 
  'img/sangue4.png',
  // Audio
  'fx/spada1.mp3',
  'fx/spada2.mp3',
  'fx/spada3.mp3',
  'fx/spada4.mp3',
  'fx/spada5.mp3',
  'fx/dado.mp3',
  'fx/boss.mp3',
  'fx/endGame.mp3',
  'fx/fight.mp3',
  'fx/parata.mp3',
  'fx/levelUP.mp3',
  'fx/sottofondo.mp3',
  'fx/cesta.mp3',
  'fx/fiamma.mp3',
  'fx/scheletro.mp3',
  'fx/morte.mp3',
];

// Installazione
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Attivazione e Pulizia
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      }));
    })
  );
});

// Fetch Offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
