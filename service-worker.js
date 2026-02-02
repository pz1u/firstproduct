const CACHE_NAME = 'asmr-space-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/main.js',
  '/manifest.json',
  '/icon.png',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/lucide@latest'
];

// 설치 (Install): 핵심 리소스 캐싱
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// 요청 (Fetch): 캐시 우선 전략 + 오디오 파일 캐싱
self.addEventListener('fetch', (event) => {
  // GET 요청만 처리
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // 캐시에 있으면 반환
      if (cachedResponse) {
        return cachedResponse;
      }
      // 없으면 네트워크 요청 후 캐싱 (오디오 파일 포함)
      return fetch(event.request).then((response) => {
        // 유효한 응답인지 확인 (Partial Content 206 등은 복잡하므로 여기선 기본 200 OK만 캐싱 시도)
        if (!response || response.status !== 200 || response.type === 'error') {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return response;
      });
    })
  );
});

// 활성화 (Activate): 구버전 캐시 정리
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});