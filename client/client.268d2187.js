function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function i(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function l(t,e,n,r,o,s,a){const c=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(c){const o=i(e,n,r,a);t.p(o,c)}}function u(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function m(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function g(t){return document.createTextNode(t)}function y(){return g(" ")}function $(){return g("")}function b(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function w(t){return Array.from(t.childNodes)}function E(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?m(e):h(e)}function x(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return g(e)}function _(t){return x(t," ")}function S(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function A(t,e){t.value=null==e?"":e}function R(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function P(t,e){for(let n=0;n<t.options.length;n+=1){const r=t.options[n];if(r.__value===e)return void(r.selected=!0)}}function L(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}let C,q;function I(){if(void 0===C){C=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){C=!0}}return C}function N(t,e){const n=getComputedStyle(t),r=(parseInt(n.zIndex)||0)-1;"static"===n.position&&(t.style.position="relative");const o=h("iframe");o.setAttribute("style",`display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: ${r};`),o.setAttribute("aria-hidden","true"),o.tabIndex=-1;const s=I();let a;return s?(o.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",a=b(window,"message",t=>{t.source===o.contentWindow&&e()})):(o.src="about:blank",o.onload=()=>{a=b(o.contentWindow,"resize",e)}),u(t,o),()=>{(s||a&&o.contentWindow)&&a(),p(o)}}function T(t,e,n){t.classList[n?"add":"remove"](e)}function k(t,e=document.body){return Array.from(e.querySelectorAll(t))}function O(t){q=t}function U(){if(!q)throw new Error("Function called outside component initialization");return q}const j=[],H=[],V=[],D=[],z=Promise.resolve();let B=!1;function J(t){V.push(t)}let M=!1;const G=new Set;function W(){if(!M){M=!0;do{for(let t=0;t<j.length;t+=1){const e=j[t];O(e),F(e.$$)}for(j.length=0;H.length;)H.pop()();for(let t=0;t<V.length;t+=1){const e=V[t];G.has(e)||(G.add(e),e())}V.length=0}while(j.length);for(;D.length;)D.pop()();B=!1,M=!1,G.clear()}}function F(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(J)}}const K=new Set;let Y;function X(){Y={r:0,c:[],p:Y}}function Q(){Y.r||o(Y.c),Y=Y.p}function Z(t,e){t&&t.i&&(K.delete(t),t.i(e))}function tt(t,e,n,r){if(t&&t.o){if(K.has(t))return;K.add(t),Y.c.push(()=>{K.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function et(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function nt(t){return"object"==typeof t&&null!==t?t:{}}function rt(t){t&&t.c()}function ot(t,e){t&&t.l(e)}function st(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),J(()=>{const e=c.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(J)}function at(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ct(t,e){-1===t.$$.dirty[0]&&(j.push(t),B||(B=!0,z.then(W)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function it(e,n,s,a,c,i,l=[-1]){const u=q;O(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let h=!1;if(d.ctx=s?s(e,f,(t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),h&&ct(e,t)),n}):[],d.update(),h=!0,o(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){const t=w(n.target);d.fragment&&d.fragment.l(t),t.forEach(p)}else d.fragment&&d.fragment.c();n.intro&&Z(e.$$.fragment),st(e,n.target,n.anchor),W()}O(u)}class lt{$destroy(){at(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const ut=[];function ft(e,n=t){let r;const o=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!ut.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),ut.push(n,e)}if(t){for(let t=0;t<ut.length;t+=2)ut[t][0](ut[t+1]);ut.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const i=[a,c];return o.push(i),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const pt={},dt=()=>({});function ht(t){let e,n,r,o,s,a,c,d,m,$,b,S,A,R,P,L,C,q,I;const N=t[1].default,T=function(t,e,n,r){if(t){const o=i(t,e,n,r);return t[0](o)}}(N,t,t[0],null);return{c(){e=h("meta"),n=y(),r=h("header"),o=h("h1"),s=g("How They Voted"),a=y(),c=h("main"),T&&T.c(),d=y(),m=h("footer"),$=h("div"),b=g("How They Voted"),S=y(),A=h("div"),R=h("a"),P=g("Github"),L=g(" | \n    "),C=h("a"),q=g("info@howtheyvoted.ie"),this.h()},l(t){const i=k('[data-svelte="svelte-e8xvpl"]',document.head);e=E(i,"META",{name:!0,content:!0}),i.forEach(p),n=_(t),r=E(t,"HEADER",{});var l=w(r);o=E(l,"H1",{});var u=w(o);s=x(u,"How They Voted"),u.forEach(p),l.forEach(p),a=_(t),c=E(t,"MAIN",{});var f=w(c);T&&T.l(f),f.forEach(p),d=_(t),m=E(t,"FOOTER",{});var h=w(m);$=E(h,"DIV",{class:!0});var g=w($);b=x(g,"How They Voted"),g.forEach(p),S=_(h),A=E(h,"DIV",{class:!0});var y=w(A);R=E(y,"A",{href:!0});var v=w(R);P=x(v,"Github"),v.forEach(p),L=x(y," | \n    "),C=E(y,"A",{href:!0});var I=w(C);q=x(I,"info@howtheyvoted.ie"),I.forEach(p),y.forEach(p),h.forEach(p),this.h()},h(){document.title="How They Voted",v(e,"name","description"),v(e,"content","Under development - An app to allow Irish people to easily see how their TDs have voted on bills in the Dáil"),v($,"class","site-name"),v(R,"href","https://github.com/How-They-Voted"),v(C,"href","mailto:info@howtheyvoted.ie"),v(A,"class","site-contact")},m(t,i){u(document.head,e),f(t,n,i),f(t,r,i),u(r,o),u(o,s),f(t,a,i),f(t,c,i),T&&T.m(c,null),f(t,d,i),f(t,m,i),u(m,$),u($,b),u(m,S),u(m,A),u(A,R),u(R,P),u(A,L),u(A,C),u(C,q),I=!0},p(t,[e]){T&&T.p&&1&e&&l(T,N,t,t[0],e,null,null)},i(t){I||(Z(T,t),I=!0)},o(t){tt(T,t),I=!1},d(t){p(e),t&&p(n),t&&p(r),t&&p(a),t&&p(c),T&&T.d(t),t&&p(d),t&&p(m)}}}function mt(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class gt extends lt{constructor(t){super(),it(this,t,mt,ht,a,{})}}function yt(t){let e,n,r=t[1].stack+"";return{c(){e=h("pre"),n=g(r)},l(t){e=E(t,"PRE",{});var o=w(e);n=x(o,r),o.forEach(p)},m(t,r){f(t,e,r),u(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&S(n,r)},d(t){t&&p(e)}}}function $t(e){let n,r,o,s,a,c,i,l,d,m=e[1].message+"";document.title=n=e[0];let b=e[2]&&e[1].stack&&yt(e);return{c(){r=y(),o=h("h1"),s=g(e[0]),a=y(),c=h("p"),i=g(m),l=y(),b&&b.c(),d=$(),this.h()},l(t){k('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(p),r=_(t),o=E(t,"H1",{class:!0});var n=w(o);s=x(n,e[0]),n.forEach(p),a=_(t),c=E(t,"P",{class:!0});var u=w(c);i=x(u,m),u.forEach(p),l=_(t),b&&b.l(t),d=$(),this.h()},h(){v(o,"class","svelte-ibl7am"),v(c,"class","svelte-ibl7am")},m(t,e){f(t,r,e),f(t,o,e),u(o,s),f(t,a,e),f(t,c,e),u(c,i),f(t,l,e),b&&b.m(t,e),f(t,d,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&S(s,t[0]),2&e&&m!==(m=t[1].message+"")&&S(i,m),t[2]&&t[1].stack?b?b.p(t,e):(b=yt(t),b.c(),b.m(d.parentNode,d)):b&&(b.d(1),b=null)},i:t,o:t,d(t){t&&p(r),t&&p(o),t&&p(a),t&&p(c),t&&p(l),b&&b.d(t),t&&p(d)}}}function bt(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}class vt extends lt{constructor(t){super(),it(this,t,bt,$t,a,{status:0,error:1})}}function wt(t){let n,r,o;const s=[t[4].props];var a=t[4].component;function c(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return a&&(n=new a(c())),{c(){n&&rt(n.$$.fragment),r=$()},l(t){n&&ot(n.$$.fragment,t),r=$()},m(t,e){n&&st(n,t,e),f(t,r,e),o=!0},p(t,e){const o=16&e?et(s,[nt(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){X();const t=n;tt(t.$$.fragment,1,0,()=>{at(t,1)}),Q()}a?(n=new a(c()),rt(n.$$.fragment),Z(n.$$.fragment,1),st(n,r.parentNode,r)):n=null}else a&&n.$set(o)},i(t){o||(n&&Z(n.$$.fragment,t),o=!0)},o(t){n&&tt(n.$$.fragment,t),o=!1},d(t){t&&p(r),n&&at(n,t)}}}function Et(t){let e,n;return e=new vt({props:{error:t[0],status:t[1]}}),{c(){rt(e.$$.fragment)},l(t){ot(e.$$.fragment,t)},m(t,r){st(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(Z(e.$$.fragment,t),n=!0)},o(t){tt(e.$$.fragment,t),n=!1},d(t){at(e,t)}}}function xt(t){let e,n,r,o;const s=[Et,wt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=$()},l(t){n.l(t),r=$()},m(t,n){a[e].m(t,n),f(t,r,n),o=!0},p(t,o){let i=e;e=c(t),e===i?a[e].p(t,o):(X(),tt(a[i],1,1,()=>{a[i]=null}),Q(),n=a[e],n||(n=a[e]=s[e](t),n.c()),Z(n,1),n.m(r.parentNode,r))},i(t){o||(Z(n),o=!0)},o(t){tt(n),o=!1},d(t){a[e].d(t),t&&p(r)}}}function _t(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[xt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new gt({props:s}),{c(){rt(n.$$.fragment)},l(t){ot(n.$$.fragment,t)},m(t,e){st(n,t,e),r=!0},p(t,[e]){const r=12&e?et(o,[4&e&&{segment:t[2][0]},8&e&&nt(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(Z(n.$$.fragment,t),r=!0)},o(t){tt(n.$$.fragment,t),r=!1},d(t){at(n,t)}}}function St(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e,{notify:l}=e;var u,f,p;return u=l,U().$$.after_update.push(u),f=pt,p=r,U().$$.context.set(f,p),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,a,c,i,r,l]}class At extends lt{constructor(t){super(),it(this,t,St,_t,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Rt=[],Pt=[{js:()=>import("./index.dad22e7a.js"),css:[]},{js:()=>import("./[memberId].8817187a.js"),css:[]}],Lt=(Ct=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/member\/([^\/]+?)\/?$/,parts:[null,{i:1,params:t=>({memberId:Ct(t[1])})}]}]);var Ct;const qt="undefined"!=typeof __SAPPER__&&__SAPPER__;let It,Nt,Tt,kt=!1,Ot=[],Ut="{}";const jt={page:function(t){const e=ft(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:ft(null),session:ft(qt&&qt.session)};let Ht,Vt;jt.session.subscribe(async t=>{if(Ht=t,!kt)return;Vt=!0;const e=Ft(new URL(location.href)),n=Nt={},{redirect:r,props:o,branch:s}=await Qt(e);n===Nt&&await Xt(r,s,o,e.page)});let Dt,zt=null;let Bt,Jt=1;const Mt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Gt={};function Wt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Ft(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(qt.baseUrl))return null;let e=t.pathname.slice(qt.baseUrl.length);if(""===e&&(e="/"),!Rt.some(t=>t.test(e)))for(let n=0;n<Lt.length;n+=1){const r=Lt[n],o=r.pattern.exec(e);if(o){const n=Wt(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function Kt(){return{x:pageXOffset,y:pageYOffset}}async function Yt(t,e,n,r){if(e)Bt=e;else{const t=Kt();Gt[Bt]=t,e=Bt=++Jt,Gt[Bt]=n?t:{x:0,y:0}}Bt=e,It&&jt.preloading.set(!0);const o=zt&&zt.href===t.href?zt.promise:Qt(t);zt=null;const s=Nt={},{redirect:a,props:c,branch:i}=await o;if(s===Nt&&(await Xt(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Gt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Gt[Bt]=t,t&&scrollTo(t.x,t.y)}}async function Xt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Ft(new URL(t,document.baseURI));return n?(Mt[e.replaceState?"replaceState":"pushState"]({id:Bt},"",t),Yt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(jt.page.set(r),jt.preloading.set(!1),It)It.$set(n);else{n.stores={page:{subscribe:jt.page.subscribe},preloading:{subscribe:jt.preloading.subscribe},session:jt.session},n.level0={props:await Tt},n.notify=jt.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)te(t.nextSibling);te(t),te(e)}It=new At({target:Dt,props:n,hydrate:!0})}Ot=e,Ut=JSON.stringify(r.query),kt=!0,Vt=!1}async function Qt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let c;Tt||(Tt=qt.preloaded[0]||dt.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Ht));let i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Ut)return!0;const o=Ot[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,l,o)&&(u=!0),s.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!Vt&&!u&&Ot[c]&&Ot[c].part===e.i)return Ot[c];u=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Zt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(Pt[e.i]);let m;return m=kt||!qt.preloaded[c+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ht):{}:qt.preloaded[c+1],s["level"+p]={component:d,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}function Zt(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function te(t){t.parentNode.removeChild(t)}function ee(t){const e=Ft(new URL(t,document.baseURI));if(e)return zt&&t===zt.href||function(t,e){zt={href:t,promise:e}}(t,Qt(e)),zt.promise}let ne;function re(t){clearTimeout(ne),ne=setTimeout(()=>{oe(t)},20)}function oe(t){const e=ae(t.target);e&&"prefetch"===e.rel&&ee(e.href)}function se(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=ae(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Ft(o);if(s){Yt(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),Mt.pushState({id:Bt},"",o.href)}}function ae(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function ce(t){if(Gt[Bt]=Kt(),t.state){const e=Ft(new URL(location.href));e?Yt(e,t.state.id):location.href=location.href}else Jt=Jt+1,function(t){Bt=t}(Jt),Mt.replaceState({id:Bt},"",location.href)}var ie;ie={target:document.querySelector("#app")},"scrollRestoration"in Mt&&(Mt.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Mt.scrollRestoration="auto"}),addEventListener("load",()=>{Mt.scrollRestoration="manual"}),function(t){Dt=t}(ie.target),addEventListener("click",se),addEventListener("popstate",ce),addEventListener("touchstart",oe),addEventListener("mousemove",re),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Mt.replaceState({id:Jt},"",e);const n=new URL(location.href);if(qt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:c}=qt;Tt||(Tt=s&&s[0]),Xt(null,[],{error:c,status:a,session:o,level0:{props:Tt},level1:{props:{status:a,error:c},component:vt},segments:s},{host:e,path:n,query:Wt(r),params:{}})}();const r=Ft(n);return r?Yt(r,Jt,!0,t):void 0});export{rt as A,ot as B,st as C,Z as D,tt as E,at as F,N as G,Q as H,X as I,k as J,lt as S,m as a,w as b,E as c,p as d,v as e,f,R as g,u as h,it as i,d as j,c as k,b as l,h as m,t as n,g as o,y as p,x as q,_ as r,a as s,T as t,S as u,J as v,ft as w,P as x,L as y,A as z};