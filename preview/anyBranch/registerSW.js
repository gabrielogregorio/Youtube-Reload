if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/youtube-reload/anyBranchsw.js', { scope: '/youtube-reload/anyBranch' })})}