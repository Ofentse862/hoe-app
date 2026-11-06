/* The service worker caches application code only. Personal data is never cached here. */
const CACHE='hoe-static-v4.0';
const ASSETS=['./','./index.html','./app.js','./styles.css','./manifest.webmanifest','./icons/icon-180.png','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('hoe-static-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 const r=event.request,u=new URL(r.url);
 if(r.method!=='GET'||u.origin!==self.location.origin||!u.pathname.startsWith(new URL('./',self.registration.scope).pathname))return;
 if(r.mode==='navigate'){event.respondWith(fetch(r).catch(()=>caches.match('./index.html')));return}
 event.respondWith(caches.match(r).then(c=>c||fetch(r).then(res=>{if(res.ok&&ASSETS.some(path=>new URL(path,self.registration.scope).href===u.href)){let copy=res.clone();caches.open(CACHE).then(cache=>cache.put(r,copy))}return res})));
});
