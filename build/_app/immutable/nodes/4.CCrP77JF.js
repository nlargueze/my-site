import{s as S,n as b}from"../chunks/scheduler.BvLojk_z.js";import{S as j,i as A,e as p,s as C,b as q,H as P,c as _,m as V,h as E,d as M,f as z,g as i,n as B,o as I,j as k,k as r,l as N}from"../chunks/index.DcdMX2Km.js";import{f as F}from"../chunks/format.cwXK75ha.js";function G(n){let s,u='<a href="/" class="logo svelte-lrzum6">Nick Labs</a>',o,e,l,h=n[1](n[0].post.meta.date)+"",v,y,d,f=n[0].post.meta.title+"",H,w,m,c,g=n[0].post.htmlContent+"";return{c(){s=p("h1"),s.innerHTML=u,o=C(),e=p("main"),l=p("h4"),v=q(h),y=C(),d=p("h2"),H=q(f),w=C(),m=p("div"),c=new P(!1),this.h()},l(t){s=_(t,"H1",{"data-svelte-h":!0}),V(s)!=="svelte-1olpq3p"&&(s.innerHTML=u),o=E(t),e=_(t,"MAIN",{});var a=M(e);l=_(a,"H4",{class:!0});var D=M(l);v=z(D,h),D.forEach(i),y=E(a),d=_(a,"H2",{});var L=M(d);H=z(L,f),L.forEach(i),w=E(a),m=_(a,"DIV",{class:!0});var T=M(m);c=B(T,!1),T.forEach(i),a.forEach(i),this.h()},h(){I(l,"class","post-date svelte-lrzum6"),c.a=null,I(m,"class","markdown")},m(t,a){k(t,s,a),k(t,o,a),k(t,e,a),r(e,l),r(l,v),r(e,y),r(e,d),r(d,H),r(e,w),r(e,m),c.m(g,m)},p(t,[a]){a&1&&h!==(h=t[1](t[0].post.meta.date)+"")&&N(v,h),a&1&&f!==(f=t[0].post.meta.title+"")&&N(H,f),a&1&&g!==(g=t[0].post.htmlContent+"")&&c.p(g)},i:b,o:b,d(t){t&&(i(s),i(o),i(e))}}}function J(n,s,u){let{data:o}=s;function e(l){return F(new Date(l),"yyyy-MMM-dd")}return n.$$set=l=>{"data"in l&&u(0,o=l.data)},[o,e]}class R extends j{constructor(s){super(),A(this,s,J,G,S,{data:0})}}export{R as component};
