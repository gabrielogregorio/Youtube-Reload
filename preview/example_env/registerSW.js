if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/youtube-reload/preview/example_env/sw.js', { scope: '/youtube-reload/preview/example_env/' })})}