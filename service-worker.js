console.log('Hello from service-worker.js');

// To load Workbox from our CDN, update your service worker file to import the workbox-sw.js file via the importScripts() method.

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
