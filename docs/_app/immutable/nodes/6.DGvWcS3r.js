function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../chunks/openseadragon.G_8lEz7D.js","../chunks/_commonjsHelpers.Cpj98o6Y.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{m as N}from"../chunks/metadata.IsrnCqoH.js";import{s as S,f as _,a as M,h as p,j as h,d,c as E,r as u,i as v,l as m,n as k,w as z,t as g,k as $,p as b,m as H}from"../chunks/scheduler.D8yfAcz2.js";import{S as P,i as V,c as D,a as A,m as O,t as w,b as y,d as j}from"../chunks/index.BOwWw9MP.js";import{P as R}from"../chunks/Page.C8PINaXE.js";import{_ as x}from"../chunks/preload-helper.BQ24v_F8.js";import{u as B}from"../chunks/helpers.DlV-7bfE.js";import{b as L}from"../chunks/paths.SluPXZFc.js";import{e as T,u as G,d as J,c as U}from"../chunks/Footer.BQvVX6Tf.js";async function K({params:f}){return{itemMetadata:N.find(a=>a.pid===f.id)}}const Q=!0,ve=Object.freeze(Object.defineProperty({__proto__:null,load:K,prerender:Q},Symbol.toStringTag,{value:"Module"}));function W(f){let e,a,t;return{c(){e=_("div"),a=_("a"),t=g("IIIF Manifest"),this.h()},l(s){e=p(s,"DIV",{class:!0});var n=h(e);a=p(n,"A",{href:!0,target:!0});var i=h(a);t=$(i,"IIIF Manifest"),i.forEach(d),n.forEach(d),this.h()},h(){u(a,"href",f[0].manifest),u(a,"target","_blank"),u(e,"class","manifest-link svelte-1wx3wfr")},m(s,n){v(s,e,n),m(e,a),m(a,t)},p:k,d(s){s&&d(e)}}}function X(f){let e,a,t,s=f[0].manifest!==void 0&&W(f);return{c(){e=_("div"),a=_("div"),t=M(),s&&s.c(),this.h()},l(n){e=p(n,"DIV",{class:!0});var i=h(e);a=p(i,"DIV",{id:!0,class:!0}),h(a).forEach(d),t=E(i),s&&s.l(i),i.forEach(d),this.h()},h(){u(a,"id","osd-container-"+f[1]),u(a,"class","osd-container svelte-1wx3wfr"),u(e,"class","viewer-container svelte-1wx3wfr")},m(n,i){v(n,e,i),m(e,a),m(e,t),s&&s.m(e,null)},p(n,[i]){n[0].manifest!==void 0&&s.p(n,i)},i:k,o:k,d(n){n&&d(e),s&&s.d()}}}function Y(f,e,a){let{pid:t}=e;const s=N.find(i=>i.pid===t),n=B();return z(()=>{x(()=>import("../chunks/openseadragon.G_8lEz7D.js").then(i=>i.o),__vite__mapDeps([0,1]),import.meta.url).then(i=>{const r=i.default;r({id:`osd-container-${n}`,preload:!0,prefixUrl:`${L}/openseadragon/images/`,tileSources:`${L}/iiif/${t}/info.json`})}).catch(i=>{console.error("Error loading OpenSeadragon:",i)})}),f.$$set=i=>{"pid"in i&&a(2,t=i.pid)},[s,n,t]}class Z extends P{constructor(e){super(),V(this,e,Y,X,S,{pid:2})}}function F(f,e,a){const t=f.slice();return t[2]=e[a].key,t[3]=e[a].label,t[4]=e[a].type,t}function ee(f){let e,a,t=f[3]+"",s,n;return{c(){e=_("li"),a=_("a"),s=g(t),this.h()},l(i){e=p(i,"LI",{class:!0});var r=h(e);a=p(r,"A",{class:!0,href:!0,target:!0});var o=h(a);s=$(o,t),o.forEach(d),r.forEach(d),this.h()},h(){u(a,"class","metadata-key svelte-imsgxs"),u(a,"href",n=f[0][f[2]]),u(a,"target","_blank"),u(e,"class","metadata-item svelte-imsgxs")},m(i,r){v(i,e,r),m(e,a),m(a,s)},p(i,r){r&1&&n!==(n=i[0][i[2]])&&u(a,"href",n)},d(i){i&&d(e)}}}function te(f){let e,a,t=f[3]+"",s,n,i,r=f[0][f[2]]+"",o;return{c(){e=_("li"),a=_("span"),s=g(t),n=g(":"),i=_("span"),o=g(r),this.h()},l(l){e=p(l,"LI",{class:!0});var c=h(e);a=p(c,"SPAN",{class:!0});var I=h(a);s=$(I,t),n=$(I,":"),I.forEach(d),i=p(c,"SPAN",{});var C=h(i);o=$(C,r),C.forEach(d),c.forEach(d),this.h()},h(){u(a,"class","metadata-key svelte-imsgxs"),u(e,"class","metadata-item svelte-imsgxs")},m(l,c){v(l,e,c),m(e,a),m(a,s),m(a,n),m(e,i),m(i,o)},p(l,c){c&1&&r!==(r=l[0][l[2]]+"")&&H(o,r)},d(l){l&&d(e)}}}function q(f,e){let a,t;function s(r,o){if(r[4]==="text")return te;if(r[4]==="link")return ee}let n=s(e),i=n&&n(e);return{key:f,first:null,c(){a=b(),i&&i.c(),t=b(),this.h()},l(r){a=b(),i&&i.l(r),t=b(),this.h()},h(){this.first=a},m(r,o){v(r,a,o),i&&i.m(r,o),v(r,t,o)},p(r,o){e=r,i&&i.p(e,o)},d(r){r&&(d(a),d(t)),i&&i.d(r)}}}function ae(f){let e,a,t=[],s=new Map,n=T(f[1].metadataToShow);const i=r=>r[2];for(let r=0;r<n.length;r+=1){let o=F(f,n,r),l=i(o);s.set(l,t[r]=q(l,o))}return{c(){e=_("div"),a=_("ul");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=p(r,"DIV",{class:!0});var o=h(e);a=p(o,"UL",{});var l=h(a);for(let c=0;c<t.length;c+=1)t[c].l(l);l.forEach(d),o.forEach(d),this.h()},h(){u(e,"class","metadata-card svelte-imsgxs")},m(r,o){v(r,e,o),m(e,a);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(a,null)},p(r,[o]){o&3&&(n=T(r[1].metadataToShow),t=G(t,o,i,1,r,n,s,a,J,q,null,F))},i:k,o:k,d(r){r&&d(e);for(let o=0;o<t.length;o+=1)t[o].d()}}}function ie(f,e,a){const t=U.pages;let{itemMetadata:s}=e;return f.$$set=n=>{"itemMetadata"in n&&a(0,s=n.itemMetadata)},[s,t]}class re extends P{constructor(e){super(),V(this,e,ie,ae,S,{itemMetadata:0})}}function se(f){let e,a;return e=new Z({props:{pid:f[0].pid}}),{c(){D(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,s){O(e,t,s),a=!0},p:k,i(t){a||(w(e.$$.fragment,t),a=!0)},o(t){y(e.$$.fragment,t),a=!1},d(t){j(e,t)}}}function ne(f){let e,a=f[0].label+"",t,s,n,i,r,o=f[1].iiifViewer&&se(f);return i=new re({props:{itemMetadata:f[0]}}),{c(){e=_("h1"),t=g(a),s=M(),o&&o.c(),n=M(),D(i.$$.fragment)},l(l){e=p(l,"H1",{});var c=h(e);t=$(c,a),c.forEach(d),s=E(l),o&&o.l(l),n=E(l),A(i.$$.fragment,l)},m(l,c){v(l,e,c),m(e,t),v(l,s,c),o&&o.m(l,c),v(l,n,c),O(i,l,c),r=!0},p(l,c){l[1].iiifViewer&&o.p(l,c)},i(l){r||(w(o),w(i.$$.fragment,l),r=!0)},o(l){y(o),y(i.$$.fragment,l),r=!1},d(l){l&&(d(e),d(s),d(n)),o&&o.d(l),j(i,l)}}}function le(f){let e,a;return e=new R({props:{$$slots:{default:[ne]},$$scope:{ctx:f}}}),{c(){D(e.$$.fragment)},l(t){A(e.$$.fragment,t)},m(t,s){O(e,t,s),a=!0},p(t,[s]){const n={};s&8&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){a||(w(e.$$.fragment,t),a=!0)},o(t){y(e.$$.fragment,t),a=!1},d(t){j(e,t)}}}function oe(f,e,a){let{data:t}=e;const s=t.itemMetadata,n=U.pages;return f.$$set=i=>{"data"in i&&a(2,t=i.data)},[s,n,t]}class ge extends P{constructor(e){super(),V(this,e,oe,le,S,{data:2})}}export{ge as component,ve as universal};
