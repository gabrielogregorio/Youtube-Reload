if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const t=e=>n(e,o),d={module:{uri:o},exports:c,require:t};i[o]=Promise.all(s.map((e=>d[e]||t(e)))).then((e=>(r(...e),c)))}}define(["./workbox-25d99430"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-2bed7e5f.css",revision:null},{url:"assets/index-4999328f.js",revision:null},{url:"index.html",revision:"a711c7a77e0e8147dfb9fa35f82bcf2b"},{url:"registerSW.js",revision:"19d8d5a687a82baf1fc75de03d682b80"},{url:"favicon.ico",revision:"df7700616b500967e2c0f2c2a725d2d8"},{url:"icon.png",revision:"083553530041d487c43298064c832aa4"},{url:"icon-512x512.png",revision:"076cc83bcc5511060ea1b1b32a944c77"},{url:"manifest.webmanifest",revision:"a6880a04e221e383503bc6523aab6ced"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
