if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/youtube-reload/sw.js', { scope: '/youtube-reload/' })})}