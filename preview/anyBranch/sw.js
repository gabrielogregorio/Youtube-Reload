if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const d=e=>n(e,o),t={module:{uri:o},exports:c,require:d};i[o]=Promise.all(s.map((e=>t[e]||d(e)))).then((e=>(r(...e),c)))}}define(["./workbox-25d99430"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-144fbed3.css",revision:null},{url:"assets/index-b4b3d7e9.js",revision:null},{url:"index.html",revision:"f4beb4de04ffba7692b6e2a42d7ccad2"},{url:"registerSW.js",revision:"c472d9f551f79714db8891b4396d2ac9"},{url:"favicon.ico",revision:"df7700616b500967e2c0f2c2a725d2d8"},{url:"icon.png",revision:"083553530041d487c43298064c832aa4"},{url:"icon-512x512.png",revision:"076cc83bcc5511060ea1b1b32a944c77"},{url:"manifest.webmanifest",revision:"dc7656ddde767182837d2702d4fa72c2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
