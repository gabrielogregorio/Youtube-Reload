if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const t=e=>n(e,c),d={module:{uri:c},exports:o,require:t};i[c]=Promise.all(s.map((e=>d[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-25d99430"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-3b1a45db.css",revision:null},{url:"assets/index-975c9742.js",revision:null},{url:"index.html",revision:"212c89c2fac3383f73a59f580bd5cafb"},{url:"registerSW.js",revision:"19d8d5a687a82baf1fc75de03d682b80"},{url:"favicon.ico",revision:"df7700616b500967e2c0f2c2a725d2d8"},{url:"icon.png",revision:"083553530041d487c43298064c832aa4"},{url:"icon-512x512.png",revision:"076cc83bcc5511060ea1b1b32a944c77"},{url:"manifest.webmanifest",revision:"a6880a04e221e383503bc6523aab6ced"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
