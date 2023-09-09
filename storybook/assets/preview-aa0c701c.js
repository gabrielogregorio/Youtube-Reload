(function(){try{var e=typeof window<"u"?window:typeof o<"u"?o:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="2ebdc3e4-bcb9-40d1-a8de-75dfbbcc9388",e._sentryDebugIdIdentifier="sentry-dbid-2ebdc3e4-bcb9-40d1-a8de-75dfbbcc9388")}catch{}})();var s="storybook/highlight",_="storybookHighlight",a=`${s}/add`,b=`${s}/reset`;const{global:o}=__STORYBOOK_MODULE_GLOBAL__,{addons:g}=__STORYBOOK_MODULE_PREVIEW_API__,{STORY_CHANGED:c}=__STORYBOOK_MODULE_CORE_EVENTS__;var{document:i}=o,O=(e="#FF4785",t="dashed")=>`
  outline: 2px ${t} ${e};
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);
`,I=e=>({outline:`2px dashed ${e}`,outlineOffset:2,boxShadow:"0 0 0 6px rgba(255,255,255,0.6)"}),l=g.getChannel(),y=e=>{let t=_;r();let d=Array.from(new Set(e.elements)),n=i.createElement("style");n.setAttribute("id",t),n.innerHTML=d.map(h=>`${h}{
          ${O(e.color,e.style)}
         }`).join(" "),i.head.appendChild(n)},r=()=>{var d;let e=_,t=i.getElementById(e);t&&((d=t.parentNode)==null||d.removeChild(t))};l.on(c,r);l.on(b,r);l.on(a,y);export{I as highlightObject,O as highlightStyle};
//# sourceMappingURL=preview-aa0c701c.js.map
