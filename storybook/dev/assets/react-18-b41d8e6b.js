import{R as c,r as a}from"./index-f3746b7b.js";import"./iframe-d6e3ee77.js";import{r as u}from"./index-68182980.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="77b5c7d4-caa8-4c3e-87c3-860ef31bd5b8",e._sentryDebugIdIdentifier="sentry-dbid-77b5c7d4-caa8-4c3e-87c3-860ef31bd5b8")}catch{}})();var n={},s=u;n.createRoot=s.createRoot,n.hydrateRoot=s.hydrateRoot;var o=new Map,f=({callback:e,children:t})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},b=async(e,t)=>{let r=await i(t);return new Promise(d=>{r.render(c.createElement(f,{callback:()=>d(null)},e))})},p=(e,t)=>{let r=o.get(e);r&&(r.unmount(),o.delete(e))},i=async e=>{let t=o.get(e);return t||(t=n.createRoot(e),o.set(e,t)),t};export{b as r,p as u};
//# sourceMappingURL=react-18-b41d8e6b.js.map
