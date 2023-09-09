import{d as M}from"./index-154de5b0.js";(function(){try{var r=typeof $<"u"?$:typeof m<"u"?m:typeof self<"u"?self:{},e=new Error().stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="95501ac1-706b-4ff6-94f2-4c69fcec7ed7",r._sentryDebugIdIdentifier="sentry-dbid-95501ac1-706b-4ff6-94f2-4c69fcec7ed7")}catch{}})();const{global:m}=__STORYBOOK_MODULE_GLOBAL__,{logger:B}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var u="backgrounds",{document:s,window:$}=m,S=()=>$.matchMedia("(prefers-reduced-motion: reduce)").matches,x=(r,e=[],t)=>{if(r==="transparent")return"transparent";if(e.find(a=>a.value===r))return r;let n=e.find(a=>a.name===t);if(n)return n.value;if(t){let a=e.map(i=>i.name).join(", ");B.warn(M`
        Backgrounds Addon: could not find the default color "${t}".
        These are the available colors for your story based on your configuration:
        ${a}.
      `)}return"transparent"},k=r=>{(Array.isArray(r)?r:[r]).forEach(O)},O=r=>{let e=s.getElementById(r);e&&e.parentElement.removeChild(e)},w=(r,e)=>{let t=s.getElementById(r);if(t)t.innerHTML!==e&&(t.innerHTML=e);else{let n=s.createElement("style");n.setAttribute("id",r),n.innerHTML=e,s.head.appendChild(n)}},I=(r,e,t)=>{let n=s.getElementById(r);if(n)n.innerHTML!==e&&(n.innerHTML=e);else{let a=s.createElement("style");a.setAttribute("id",r),a.innerHTML=e;let i=`addon-backgrounds-grid${t?`-docs-${t}`:""}`,d=s.getElementById(i);d?d.parentElement.insertBefore(a,d):s.head.appendChild(a)}};const{useMemo:y,useEffect:E}=__STORYBOOK_MODULE_PREVIEW_API__;var A=(r,e)=>{var c;let{globals:t,parameters:n}=e,a=(c=t[u])==null?void 0:c.value,i=n[u],d=y(()=>i.disable?"transparent":x(a,i.values,i.default),[i,a]),o=y(()=>d&&d!=="transparent",[d]),g=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",p=y(()=>{let l="transition: background-color 0.3s;";return`
      ${g} {
        background: ${d} !important;
        ${S()?"":l}
      }
    `},[d,g]);return E(()=>{let l=e.viewMode==="docs"?`addon-backgrounds-docs-${e.id}`:"addon-backgrounds-color";if(!o){k(l);return}I(l,p,e.viewMode==="docs"?e.id:null)},[o,p,e]),r()},L=(r,e)=>{var _;let{globals:t,parameters:n}=e,a=n[u].grid,i=((_=t[u])==null?void 0:_.grid)===!0&&a.disable!==!0,{cellAmount:d,cellSize:o,opacity:g}=a,p=e.viewMode==="docs",c=n.layout===void 0||n.layout==="padded"?16:0,l=a.offsetX??(p?20:c),f=a.offsetY??(p?20:c),v=y(()=>{let b=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",h=[`${o*d}px ${o*d}px`,`${o*d}px ${o*d}px`,`${o}px ${o}px`,`${o}px ${o}px`].join(", ");return`
      ${b} {
        background-size: ${h} !important;
        background-position: ${l}px ${f}px, ${l}px ${f}px, ${l}px ${f}px, ${l}px ${f}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${g}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${g}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${g/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${g/2}) 1px, transparent 1px) !important;
      }
    `},[o]);return E(()=>{let b=e.viewMode==="docs"?`addon-backgrounds-grid-docs-${e.id}`:"addon-backgrounds-grid";if(!i){k(b);return}w(b,v)},[i,v,e]),r()},C=[L,A],D={[u]:{grid:{cellSize:20,opacity:.5,cellAmount:5},values:[{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}},R={[u]:null};export{C as decorators,R as globals,D as parameters};
//# sourceMappingURL=preview-cc08b82c.js.map
