import{S as t,i as s,s as a,b as e,e as n,t as o,x as i,f as r,h as l,c,d as u,g as h,j as f,l as d,m,w as p,n as g}from"./client.992f5db2.js";function v(t){let s,a,v,x,j,b,w=t[0].title+"",y=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),v=n("h1"),x=o(w),j=e(),b=n("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),a=l(t),v=c(t,"H1",{});var s=u(v);x=h(s,w),s.forEach(r),j=l(t),b=c(t,"DIV",{class:!0}),u(b).forEach(r),this.h()},h(){f(b,"class","content svelte-gnxal1")},m(t,s){d(t,a,s),d(t,v,s),m(v,x),d(t,j,s),d(t,b,s),b.innerHTML=y},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&w!==(w=t[0].title+"")&&p(x,w),1&a&&y!==(y=t[0].html+"")&&(b.innerHTML=y)},i:g,o:g,d(t){t&&r(a),t&&r(v),t&&r(j),t&&r(b)}}}async function x({params:t,query:s}){const a=await this.fetch(`blog/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function j(t,s,a){let{post:e}=s;return t.$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,j,v,a,{post:0})}}export{x as preload};
