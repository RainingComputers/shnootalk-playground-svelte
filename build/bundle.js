var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let c,l;function i(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function u(t,n,e,o){if(t){const r=a(t,n,e,o);return t[0](r)}}function a(t,n,e,o){return t[1]&&o?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](o(n))):e.ctx}function f(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function d(t,n,e,o,r,s){if(r){const c=a(n,e,o,s);t.p(c,r)}}function $(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function p(t,n){t.appendChild(n)}function h(t,n,e){t.insertBefore(n,e||null)}function g(t){t.parentNode.removeChild(t)}function m(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function x(t){return document.createElement(t)}function b(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function w(t){return document.createTextNode(t)}function v(){return w(" ")}function k(){return w("")}function y(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function C(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function E(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function T(t,n,e,o){null===e?t.style.removeProperty(n):t.style.setProperty(n,e,o?"important":"")}function _(t,n,e){t.classList[e?"add":"remove"](n)}function I(t){l=t}function N(){if(!l)throw new Error("Function called outside component initialization");return l}function L(t){N().$$.on_mount.push(t)}function S(t){N().$$.on_destroy.push(t)}function M(){const t=N();return(n,e,{cancelable:o=!1}={})=>{const r=t.$$.callbacks[n];if(r){const s=function(t,n,{bubbles:e=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,o,n),r}(n,e,{cancelable:o});return r.slice().forEach((n=>{n.call(t,s)})),!s.defaultPrevented}return!0}}function j(t){return N().$$.context.get(t)}function O(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t.call(this,n)))}const W=[],D=[],P=[],z=[],A=Promise.resolve();let U=!1;function F(){U||(U=!0,A.then(V))}function H(t){P.push(t)}const R=new Set;let B=0;function V(){const t=l;do{for(;B<W.length;){const t=W[B];B++,I(t),K(t.$$)}for(I(null),W.length=0,B=0;D.length;)D.pop()();for(let t=0;t<P.length;t+=1){const n=P[t];R.has(n)||(R.add(n),n())}P.length=0}while(W.length);for(;z.length;)z.pop()();U=!1,R.clear(),I(t)}function K(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(H)}}const G=new Set;let q;function X(){q={r:0,c:[],p:q}}function J(){q.r||o(q.c),q=q.p}function Q(t,n){t&&t.i&&(G.delete(t),t.i(n))}function Y(t,n,e,o){if(t&&t.o){if(G.has(t))return;G.add(t),q.c.push((()=>{G.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}else o&&o()}function Z(t){t&&t.c()}function tt(t,e,s,c){const{fragment:l,after_update:i}=t.$$;l&&l.m(e,s),c||H((()=>{const e=t.$$.on_mount.map(n).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...e):o(e),t.$$.on_mount=[]})),i.forEach(H)}function nt(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function et(n,r,s,c,i,u,a,f=[-1]){const d=l;I(n);const $=n.$$={fragment:null,ctx:[],props:u,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:e(),dirty:f,skip_bound:!1,root:r.target||d.$$.root};a&&a($.root);let p=!1;if($.ctx=s?s(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return $.ctx&&i($.ctx[t],$.ctx[t]=r)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](r),p&&function(t,n){-1===t.$$.dirty[0]&&(W.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e})):[],$.update(),p=!0,o($.before_update),$.fragment=!!c&&c($.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);$.fragment&&$.fragment.l(t),t.forEach(g)}else $.fragment&&$.fragment.c();r.intro&&Q(n.$$.fragment),tt(n,r.target,r.anchor,r.customElement),V()}I(d)}class ot{$destroy(){nt(this,1),this.$destroy=t}$on(n,e){if(!r(e))return t;const o=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function rt(t){let n,e;const o=t[2].default,r=u(o,t,t[1],null);return{c(){n=x("div"),r&&r.c(),C(n,"class",st),T(n,"height",t[0]+"px")},m(t,o){h(t,n,o),r&&r.m(n,null),e=!0},p(t,[s]){r&&r.p&&(!e||2&s)&&d(r,o,t,t[1],e?f(o,t[1],s,null):$(t[1]),null),(!e||1&s)&&T(n,"height",t[0]+"px")},i(t){e||(Q(r,t),e=!0)},o(t){Y(r,t),e=!1},d(t){t&&g(n),r&&r.d(t)}}}const st=["box","box-arrange-hor","box-width-full","background-25","box-items-center"].join(" ");function ct(t,n,e){let{$$slots:o={},$$scope:r}=n,{height:s=48}=n;return t.$$set=t=>{"height"in t&&e(0,s=t.height),"$$scope"in t&&e(1,r=t.$$scope)},[s,r,o]}class lt extends ot{constructor(t){super(),et(this,t,ct,rt,s,{height:0})}}function it(n){let e,o;return{c(){e=b("svg"),o=b("polygon"),C(o,"points","5 3 19 12 5 21 5 3"),C(e,"xmlns","http://www.w3.org/2000/svg"),C(e,"viewBox","0 0 24 24"),C(e,"fill","none"),C(e,"stroke-width","2"),C(e,"stroke-linecap","round"),C(e,"stroke-linejoin","round"),C(e,"class","feather feather-play")},m(t,n){h(t,e,n),p(e,o)},p:t,i:t,o:t,d(t){t&&g(e)}}}class ut extends ot{constructor(t){super(),et(this,t,null,it,s,{})}}function at(t){let n,e,o,s,c,l,i,u;return o=new ut({}),{c(){var r;n=x("button"),e=x("span"),Z(o.$$.fragment),s=v(),c=x("span"),c.textContent="Run",C(e,"class","box box-items-center"),T(e,"width",t[3]+"px"),C(c,"class","pad-left-small foreground-active"),C(n,"class",(null==(r=ft)?"":r)+" svelte-9eqhlq"),n.disabled=t[1],_(n,"box-width-full",t[2])},m(a,f){h(a,n,f),p(n,e),tt(o,e,null),p(n,s),p(n,c),l=!0,i||(u=y(n,"click",(function(){r(t[0])&&t[0].apply(this,arguments)})),i=!0)},p(o,[r]){t=o,(!l||8&r)&&T(e,"width",t[3]+"px"),(!l||2&r)&&(n.disabled=t[1]),(!l||4&r)&&_(n,"box-width-full",t[2])},i(t){l||(Q(o.$$.fragment,t),l=!0)},o(t){Y(o.$$.fragment,t),l=!1},d(t){t&&g(n),nt(o),i=!1,u()}}}const ft=["box","box-button","box-arrange-hor","box-items-center","box-height-full","pad-vert","pad-hor","box-content-center"].join(" ");function dt(t,n,e){let{onClick:o}=n,{disabled:r=!1}=n,{expandWidth:s=!1}=n,{iconWidth:c=15}=n;return t.$$set=t=>{"onClick"in t&&e(0,o=t.onClick),"disabled"in t&&e(1,r=t.disabled),"expandWidth"in t&&e(2,s=t.expandWidth),"iconWidth"in t&&e(3,c=t.iconWidth)},[o,r,s,c]}class $t extends ot{constructor(t){super(),et(this,t,dt,at,s,{onClick:0,disabled:1,expandWidth:2,iconWidth:3})}}function pt(n){let e,o,s,l,i,u,a;return{c(){var t,n;e=x("div"),o=x("img"),l=v(),i=x("span"),i.innerHTML='<span class="pad-left-small text-no-wrap">ShnooTalk Playground</span>',t=o.src,n=s="icons/logo.svg",c||(c=document.createElement("a")),c.href=n,t!==c.href&&C(o,"src","icons/logo.svg"),C(o,"class",""),C(o,"width","50px"),C(o,"alt",""),C(i,"class","box"),C(e,"class",ht)},m(t,s){h(t,e,s),p(e,o),p(e,l),p(e,i),u||(a=y(e,"click",(function(){r(n[0])&&n[0].apply(this,arguments)})),u=!0)},p(t,[e]){n=t},i:t,o:t,d(t){t&&g(e),u=!1,a()}}}const ht=["box","box-arrange-hor","box-items-center","pad-hor","pad-vert","background-25","foreground-cc","cursor-pointer","hover-background"].join(" ");function gt(t,n,e){let{onClick:o}=n;return t.$$set=t=>{"onClick"in t&&e(0,o=t.onClick)},[o]}class mt extends ot{constructor(t){super(),et(this,t,gt,pt,s,{onClick:0})}}const xt=[];function bt(n,e=t){let o;const r=new Set;function c(t){if(s(n,t)&&(n=t,o)){const t=!xt.length;for(const t of r)t[1](),xt.push(t,n);if(t){for(let t=0;t<xt.length;t+=2)xt[t][0](xt[t+1]);xt.length=0}}}return{set:c,update:function(t){c(t(n))},subscribe:function(s,l=t){const i=[s,l];return r.add(i),1===r.size&&(o=e(c)||t),s(n),()=>{r.delete(i),0===r.size&&(o(),o=null)}}}}class wt{constructor(t){this.tabHistory=[],this.currentTab=bt(void 0),this.tabsList=bt(t)}openTab(t){this.currentTab.set(t),this.tabHistory.push(t)}closeTab(t){const n=n=>n!=t;this.tabHistory=this.tabHistory.filter(n),this.openTab(this.tabHistory.pop()),this.tabsList.update((t=>t.filter(n)))}addTab(t){this.tabsList.update((n=>[...new Set([...n,t])])),this.openTab(t)}}function vt(t){let n,e;const o=t[1].default,r=u(o,t,t[0],null);return{c(){n=x("div"),r&&r.c(),C(n,"class","box scroll-x scroll-hidden box-height-full")},m(t,o){h(t,n,o),r&&r.m(n,null),e=!0},p(t,[n]){r&&r.p&&(!e||1&n)&&d(r,o,t,t[0],e?f(o,t[0],n,null):$(t[0]),null)},i(t){e||(Q(r,t),e=!0)},o(t){Y(r,t),e=!1},d(t){t&&g(n),r&&r.d(t)}}}function kt(t,n,e){let{$$slots:o={},$$scope:r}=n;return t.$$set=t=>{"$$scope"in t&&e(0,r=t.$$scope)},[r,o]}class yt extends ot{constructor(t){super(),et(this,t,kt,vt,s,{})}}function Ct(t){let n,e,o,s,c;const l=t[3].default,i=u(l,t,t[2],null);return{c(){n=x("button"),e=x("span"),i&&i.c(),C(e,"class",Et),T(e,"width",t[1]+"px"),C(n,"class","box-button background-25 box-items-center box-height-full")},m(l,u){h(l,n,u),p(n,e),i&&i.m(e,null),o=!0,s||(c=y(n,"click",(function(){r(t[0])&&t[0].apply(this,arguments)})),s=!0)},p(n,[r]){t=n,i&&i.p&&(!o||4&r)&&d(i,l,t,t[2],o?f(l,t[2],r,null):$(t[2]),null),(!o||2&r)&&T(e,"width",t[1]+"px")},i(t){o||(Q(i,t),o=!0)},o(t){Y(i,t),o=!1},d(t){t&&g(n),i&&i.d(t),s=!1,c()}}}const Et=["box","box-items-center","box-rounded","hover-background","pad-vert-small","pad-hor-small","foreground-f80"].join(" ");function Tt(t,n,e){let{$$slots:o={},$$scope:r}=n,{onClick:s}=n,{iconWidth:c=15}=n;return t.$$set=t=>{"onClick"in t&&e(0,s=t.onClick),"iconWidth"in t&&e(1,c=t.iconWidth),"$$scope"in t&&e(2,r=t.$$scope)},[s,c,r,o]}class _t extends ot{constructor(t){super(),et(this,t,Tt,Ct,s,{onClick:0,iconWidth:1})}}function It(n){let e,o,r;return{c(){e=b("svg"),o=b("polyline"),r=b("polyline"),C(o,"points","16 18 22 12 16 6"),C(r,"points","8 6 2 12 8 18"),C(e,"xmlns","http://www.w3.org/2000/svg"),C(e,"viewBox","0 0 24 24"),C(e,"fill","none"),C(e,"stroke-width","2"),C(e,"stroke-linecap","round"),C(e,"stroke-linejoin","round"),C(e,"class","feather feather-code")},m(t,n){h(t,e,n),p(e,o),p(e,r)},p:t,i:t,o:t,d(t){t&&g(e)}}}class Nt extends ot{constructor(t){super(),et(this,t,null,It,s,{})}}function Lt(n){let e,o,r;return{c(){e=b("svg"),o=b("line"),r=b("line"),C(o,"x1","12"),C(o,"y1","5"),C(o,"x2","12"),C(o,"y2","19"),C(r,"x1","5"),C(r,"y1","12"),C(r,"x2","19"),C(r,"y2","12"),C(e,"xmlns","http://www.w3.org/2000/svg"),C(e,"viewBox","0 0 24 24"),C(e,"fill","none"),C(e,"stroke-width","2"),C(e,"stroke-linecap","round"),C(e,"stroke-linejoin","round"),C(e,"class","feather feather-plus")},m(t,n){h(t,e,n),p(e,o),p(e,r)},p:t,i:t,o:t,d(t){t&&g(e)}}}class St extends ot{constructor(t){super(),et(this,t,null,Lt,s,{})}}function Mt(t){let n;const e=t[2].default,o=u(e,t,t[1],null);return{c(){o&&o.c()},m(t,e){o&&o.m(t,e),n=!0},p(t,[r]){o&&o.p&&(!n||2&r)&&d(o,e,t,t[1],n?f(e,t[1],r,null):$(t[1]),null)},i(t){n||(Q(o,t),n=!0)},o(t){Y(o,t),n=!1},d(t){o&&o.d(t)}}}const jt={};function Ot(t,n,e){let{$$slots:o={},$$scope:r}=n,{ctx:s}=n;var c,l;return c=jt,l=s,N().$$.context.set(c,l),t.$$set=t=>{"ctx"in t&&e(0,s=t.ctx),"$$scope"in t&&e(1,r=t.$$scope)},[s,r,o]}class Wt extends ot{constructor(t){super(),et(this,t,Ot,Mt,s,{ctx:0})}}function Dt(n){let e,o,r;return{c(){e=b("svg"),o=b("line"),r=b("line"),C(o,"x1","18"),C(o,"y1","6"),C(o,"x2","6"),C(o,"y2","18"),C(r,"x1","6"),C(r,"y1","6"),C(r,"x2","18"),C(r,"y2","18"),C(e,"xmlns","http://www.w3.org/2000/svg"),C(e,"viewBox","0 0 24 24"),C(e,"fill","none"),C(e,"stroke-width","2"),C(e,"stroke-linecap","round"),C(e,"stroke-linejoin","round"),C(e,"class","feather feather-x")},m(t,n){h(t,e,n),p(e,o),p(e,r)},p:t,i:t,o:t,d(t){t&&g(e)}}}class Pt extends ot{constructor(t){super(),et(this,t,null,Dt,s,{})}}function zt(t){let n,e,o,r,s,c,l;return r=new Pt({}),{c(){n=x("span"),e=v(),o=x("span"),Z(r.$$.fragment),C(n,"class","box-child-float-right pad-left"),C(o,"class",Ht),T(o,"width",t[0]+"px")},m(i,u){h(i,n,u),h(i,e,u),h(i,o,u),tt(r,o,null),s=!0,c||(l=y(o,"click",t[9]),c=!0)},p(t,n){(!s||1&n)&&T(o,"width",t[0]+"px")},i(t){s||(Q(r.$$.fragment,t),s=!0)},o(t){Y(r.$$.fragment,t),s=!1},d(t){t&&g(n),t&&g(e),t&&g(o),nt(r),c=!1,l()}}}function At(t){let n,e,o,r,s,c,l,i,a;const m=t[8].default,b=u(m,t,t[7],null);let k=t[2]&&zt(t);return{c(){n=x("button"),e=x("span"),b&&b.c(),o=v(),r=x("span"),s=w(t[3]),c=v(),k&&k.c(),C(e,"class",Ft),T(e,"width",t[0]+"px"),_(e,"active",t[4]==t[3]),C(r,"class","text-overflow-ellipses text-no-wrap"),C(n,"class",Ut),T(n,"min-width",t[1]+"px"),_(n,"active",t[4]==t[3])},m(u,f){var d;h(u,n,f),p(n,e),b&&b.m(e,null),p(n,o),p(n,r),p(r,s),p(n,c),k&&k.m(n,null),l=!0,i||(a=y(n,"click",(d=t[10],function(t){return t.preventDefault(),d.call(this,t)})),i=!0)},p(t,[o]){b&&b.p&&(!l||128&o)&&d(b,m,t,t[7],l?f(m,t[7],o,null):$(t[7]),null),(!l||1&o)&&T(e,"width",t[0]+"px"),(!l||24&o)&&_(e,"active",t[4]==t[3]),(!l||8&o)&&E(s,t[3]),t[2]?k?(k.p(t,o),4&o&&Q(k,1)):(k=zt(t),k.c(),Q(k,1),k.m(n,null)):k&&(X(),Y(k,1,1,(()=>{k=null})),J()),(!l||2&o)&&T(n,"min-width",t[1]+"px"),(!l||24&o)&&_(n,"active",t[4]==t[3])},i(t){l||(Q(b,t),Q(k),l=!0)},o(t){Y(b,t),Y(k),l=!1},d(t){t&&g(n),b&&b.d(t),k&&k.d(),i=!1,a()}}}const Ut=["box","box-arrange-hor","box-items-center","box-button","pad-hor","pad-vert","active-background-1e","hover-background-33","background-2d","foreground-f80","active-foreground-cc","box-height-full"].join(" "),Ft=["box","box-items-center","box-child-float-right","pad-right-small","foreground-f80","active-foreground-cc"].join(" "),Ht=["box","box-items-center","box-rounded","foreground-f80","hover-background"].join(" ");function Rt(t,n,e){let o,{$$slots:r={},$$scope:s}=n,{tabIconWidth:c=15}=n,{minWidth:l=120}=n,{onClose:u}=n,{tabName:a}=n;const f=j(jt),d=f.currentTab;i(t,d,(t=>e(4,o=t))),L((()=>{f.openTab(a)})),S((()=>{f.closeTab(a)}));return t.$$set=t=>{"tabIconWidth"in t&&e(0,c=t.tabIconWidth),"minWidth"in t&&e(1,l=t.minWidth),"onClose"in t&&e(2,u=t.onClose),"tabName"in t&&e(3,a=t.tabName),"$$scope"in t&&e(7,s=t.$$scope)},[c,l,u,a,o,f,d,s,r,()=>{u(a)},()=>{f.openTab(a)}]}class Bt extends ot{constructor(t){super(),et(this,t,Rt,At,s,{tabIconWidth:0,minWidth:1,onClose:2,tabName:3})}}function Vt(t,n,e){const o=t.slice();return o[7]=n[e],o}function Kt(t){let n,e;return n=new Nt({}),{c(){Z(n.$$.fragment)},m(t,o){tt(n,t,o),e=!0},i(t){e||(Q(n.$$.fragment,t),e=!0)},o(t){Y(n.$$.fragment,t),e=!1},d(t){nt(n,t)}}}function Gt(t){let n,e,o;return n=new Nt({}),{c(){Z(n.$$.fragment),e=v()},m(t,r){tt(n,t,r),h(t,e,r),o=!0},i(t){o||(Q(n.$$.fragment,t),o=!0)},o(t){Y(n.$$.fragment,t),o=!1},d(t){nt(n,t),t&&g(e)}}}function qt(t){let n,e;function o(){return t[5](t[7])}return n=new Bt({props:{tabName:t[7],onClose:o,$$slots:{default:[Gt]},$$scope:{ctx:t}}}),{c(){Z(n.$$.fragment)},m(t,o){tt(n,t,o),e=!0},p(e,r){t=e;const s={};2&r&&(s.tabName=t[7]),3&r&&(s.onClose=o),1024&r&&(s.$$scope={dirty:r,ctx:t}),n.$set(s)},i(t){e||(Q(n.$$.fragment,t),e=!0)},o(t){Y(n.$$.fragment,t),e=!1},d(t){nt(n,t)}}}function Xt(t){let n,e,o,r;e=new Bt({props:{tabName:t[1][0],$$slots:{default:[Kt]},$$scope:{ctx:t}}});let s=t[1].slice(1),c=[];for(let n=0;n<s.length;n+=1)c[n]=qt(Vt(t,s,n));const l=t=>Y(c[t],1,1,(()=>{c[t]=null}));return{c(){n=x("div"),Z(e.$$.fragment),o=v();for(let t=0;t<c.length;t+=1)c[t].c();C(n,"class","box box-arrange-hor box-height-full bax-arrange-gap")},m(t,s){h(t,n,s),tt(e,n,null),p(n,o);for(let t=0;t<c.length;t+=1)c[t].m(n,null);r=!0},p(t,o){const r={};if(2&o&&(r.tabName=t[1][0]),1024&o&&(r.$$scope={dirty:o,ctx:t}),e.$set(r),3&o){let e;for(s=t[1].slice(1),e=0;e<s.length;e+=1){const r=Vt(t,s,e);c[e]?(c[e].p(r,o),Q(c[e],1)):(c[e]=qt(r),c[e].c(),Q(c[e],1),c[e].m(n,null))}for(X(),e=s.length;e<c.length;e+=1)l(e);J()}},i(t){if(!r){Q(e.$$.fragment,t);for(let t=0;t<s.length;t+=1)Q(c[t]);r=!0}},o(t){Y(e.$$.fragment,t),c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)Y(c[t]);r=!1},d(t){t&&g(n),nt(e),m(c,t)}}}function Jt(t){let n,e;return n=new St({}),{c(){Z(n.$$.fragment)},m(t,o){tt(n,t,o),e=!0},i(t){e||(Q(n.$$.fragment,t),e=!0)},o(t){Y(n.$$.fragment,t),e=!1},d(t){nt(n,t)}}}function Qt(t){let n,e,o,r;return n=new yt({props:{$$slots:{default:[Xt]},$$scope:{ctx:t}}}),o=new _t({props:{onClick:t[6],$$slots:{default:[Jt]},$$scope:{ctx:t}}}),{c(){Z(n.$$.fragment),e=v(),Z(o.$$.fragment)},m(t,s){tt(n,t,s),h(t,e,s),tt(o,t,s),r=!0},p(t,e){const r={};1027&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r);const s={};1024&e&&(s.$$scope={dirty:e,ctx:t}),o.$set(s)},i(t){r||(Q(n.$$.fragment,t),Q(o.$$.fragment,t),r=!0)},o(t){Y(n.$$.fragment,t),Y(o.$$.fragment,t),r=!1},d(t){nt(n,t),t&&g(e),nt(o,t)}}}function Yt(t){let n,e;return n=new Wt({props:{ctx:t[0],$$slots:{default:[Qt]},$$scope:{ctx:t}}}),{c(){Z(n.$$.fragment)},m(t,o){tt(n,t,o),e=!0},p(t,[e]){const o={};1&e&&(o.ctx=t[0]),1027&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(Q(n.$$.fragment,t),e=!0)},o(t){Y(n.$$.fragment,t),e=!1},d(t){nt(n,t)}}}function Zt(t,n,e){let o,{ctx:r}=n;const s=M(),c=r.tabsList;i(t,c,(t=>e(1,o=t)));return t.$$set=t=>{"ctx"in t&&e(0,r=t.ctx)},[r,o,s,c,function(t){r.addTab(t)},t=>r.closeTab(t),()=>s("newTab")]}class tn extends ot{constructor(t){super(),et(this,t,Zt,Yt,s,{ctx:0,addTab:4})}get addTab(){return this.$$.ctx[4]}}function nn(n){let e;return{c(){e=x("div"),C(e,"class","box-height-full box-width-full"),C(e,"id",n[0])},m(t,n){h(t,e,n)},p(t,[n]){1&n&&C(e,"id",t[0])},i:t,o:t,d(t){t&&g(e)}}}function en(t,n,e){let o,{fontSize:r}=n,{editorId:s}=n;return L((()=>{o=window.ace.edit(s),o.setTheme("ace/theme/vscode"),o.session.setMode("ace/mode/shnootalk"),o.setFontSize(r),o.setShowPrintMargin(!1),o.setHighlightActiveLine(!1)})),S((()=>{o&&o.destroy()})),t.$$set=t=>{"fontSize"in t&&e(1,r=t.fontSize),"editorId"in t&&e(0,s=t.editorId)},[s,r,function(){setTimeout((()=>o.focus()),1)},function(){return o.getValue()},function(t){o.setValue(t,1)}]}window.ace.config.set("basePath","/");class on extends ot{constructor(t){super(),et(this,t,en,nn,s,{fontSize:1,editorId:0,focus:2,getValue:3,setValue:4})}get focus(){return this.$$.ctx[2]}get getValue(){return this.$$.ctx[3]}get setValue(){return this.$$.ctx[4]}}function rn(t){let n,e;const o=t[4].default,r=u(o,t,t[3],null);return{c(){n=x("div"),r&&r.c(),C(n,"class","box-child-grow"),_(n,"box-display-none",t[1]!==t[0])},m(t,o){h(t,n,o),r&&r.m(n,null),e=!0},p(t,[s]){r&&r.p&&(!e||8&s)&&d(r,o,t,t[3],e?f(o,t[3],s,null):$(t[3]),null),(!e||3&s)&&_(n,"box-display-none",t[1]!==t[0])},i(t){e||(Q(r,t),e=!0)},o(t){Y(r,t),e=!1},d(t){t&&g(n),r&&r.d(t)}}}function sn(t,n,e){let o,{$$slots:r={},$$scope:s}=n,{tabName:c}=n;const l=M(),u=j(jt).currentTab;var a;return i(t,u,(t=>e(1,o=t))),a=()=>{o===c&&l("appear")},N().$$.after_update.push(a),t.$$set=t=>{"tabName"in t&&e(0,c=t.tabName),"$$scope"in t&&e(3,s=t.$$scope)},[c,o,u,s,r]}class cn extends ot{constructor(t){super(),et(this,t,sn,rn,s,{tabName:0})}}function ln(t,n,e){const o=t.slice();return o[11]=n[e],o[12]=n,o[13]=e,o}function un(t){let n,e,o,r=t[11];const s=()=>t[9](n,r),c=()=>t[9](null,r);let l={fontSize:t[0],editorId:t[11]};return n=new on({props:l}),s(),{c(){Z(n.$$.fragment),e=v()},m(t,r){tt(n,t,r),h(t,e,r),o=!0},p(t,e){r!==t[11]&&(c(),r=t[11],s());const o={};1&e&&(o.fontSize=t[0]),16&e&&(o.editorId=t[11]),n.$set(o)},i(t){o||(Q(n.$$.fragment,t),o=!0)},o(t){Y(n.$$.fragment,t),o=!1},d(t){c(),nt(n,t),t&&g(e)}}}function an(t){let n,e;return n=new cn({props:{tabName:t[11],$$slots:{default:[un]},$$scope:{ctx:t}}}),n.$on("appear",t[2]),{c(){Z(n.$$.fragment)},m(t,o){tt(n,t,o),e=!0},p(t,e){const o={};16&e&&(o.tabName=t[11]),16409&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(Q(n.$$.fragment,t),e=!0)},o(t){Y(n.$$.fragment,t),e=!1},d(t){nt(n,t)}}}function fn(t){let n,e,o=t[4],r=[];for(let n=0;n<o.length;n+=1)r[n]=an(ln(t,o,n));const s=t=>Y(r[t],1,1,(()=>{r[t]=null}));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();n=k()},m(t,o){for(let n=0;n<r.length;n+=1)r[n].m(t,o);h(t,n,o),e=!0},p(t,e){if(29&e){let c;for(o=t[4],c=0;c<o.length;c+=1){const s=ln(t,o,c);r[c]?(r[c].p(s,e),Q(r[c],1)):(r[c]=an(s),r[c].c(),Q(r[c],1),r[c].m(n.parentNode,n))}for(X(),c=o.length;c<r.length;c+=1)s(c);J()}},i(t){if(!e){for(let t=0;t<o.length;t+=1)Q(r[t]);e=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)Y(r[t]);e=!1},d(t){m(r,t),t&&g(n)}}}function dn(t){let n,e;return n=new Wt({props:{ctx:t[1],$$slots:{default:[fn]},$$scope:{ctx:t}}}),{c(){Z(n.$$.fragment)},m(t,o){tt(n,t,o),e=!0},p(t,[e]){const o={};2&e&&(o.ctx=t[1]),16409&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(Q(n.$$.fragment,t),e=!0)},o(t){Y(n.$$.fragment,t),e=!1},d(t){nt(n,t)}}}function $n(t,n,e){let o,r,{fontSize:s=17}=n,{ctx:c}=n;const l=c.tabsList;i(t,l,(t=>e(4,o=t)));const u=c.currentTab;i(t,u,(t=>e(10,r=t)));const a={};return t.$$set=t=>{"fontSize"in t&&e(0,s=t.fontSize),"ctx"in t&&e(1,c=t.ctx)},[s,c,function(){a[r]&&a[r].focus()},a,o,l,u,function(){const t={};for(let n of o)t[n]=a[n].getValue();return t},function(t,n){a[t].setValue(n)},function(t,n){D[t?"unshift":"push"]((()=>{a[n]=t,e(3,a)}))}]}class pn extends ot{constructor(t){super(),et(this,t,$n,dn,s,{fontSize:0,ctx:1,focus:2,getContents:7,setContent:8})}get focus(){return this.$$.ctx[2]}get getContents(){return this.$$.ctx[7]}get setContent(){return this.$$.ctx[8]}}function hn(n){let e;return{c(){e=x("span"),C(e,"class","box-child-grow")},m(t,n){h(t,e,n)},p:t,i:t,o:t,d(t){t&&g(e)}}}class gn extends ot{constructor(t){super(),et(this,t,null,hn,s,{})}}function mn(t){let n,e,r,s,c;const l=t[6].default,i=u(l,t,t[5],null);return{c(){n=x("div"),e=x("div"),i&&i.c(),C(e,"class","box box-modal-window background-25 pad-hor"),T(e,"width",t[0]+"%"),C(n,"class","box box-modal-background box-arrange-hor"),_(n,"box-display-none",!t[2])},m(o,l){var u;h(o,n,l),p(n,e),i&&i.m(e,null),r=!0,s||(c=[y(e,"click",(u=t[7],function(t){return t.stopPropagation(),u.call(this,t)})),y(n,"click",t[1])],s=!0)},p(t,[o]){i&&i.p&&(!r||32&o)&&d(i,l,t,t[5],r?f(l,t[5],o,null):$(t[5]),null),(!r||1&o)&&T(e,"width",t[0]+"%"),(!r||4&o)&&_(n,"box-display-none",!t[2])},i(t){r||(Q(i,t),r=!0)},o(t){Y(i,t),r=!1},d(t){t&&g(n),i&&i.d(t),s=!1,o(c)}}}function xn(t,n,e){let{$$slots:o={},$$scope:r}=n,{width:s}=n,{onClose:c}=n,l=!1;return t.$$set=t=>{"width"in t&&e(0,s=t.width),"onClose"in t&&e(3,c=t.onClose),"$$scope"in t&&e(5,r=t.$$scope)},[s,function(){e(2,l=!1),c()},l,c,function(){e(2,l=!0)},r,o,function(n){O.call(this,t,n)}]}class bn extends ot{constructor(t){super(),et(this,t,xn,mn,s,{width:0,onClose:3,openModal:4,closeModal:1})}get openModal(){return this.$$.ctx[4]}get closeModal(){return this.$$.ctx[1]}}function wn(n){let e,o,r,s,c,l,i;return{c(){e=x("span"),o=w(n[0]),r=v(),s=x("span"),c=x("input"),C(e,"class","foreground-cc font-small pad-vert-small"),C(c,"class","background-1e box-width-full foreground-cc"),C(c,"type","text"),C(s,"class","pad-bottom-small")},m(t,u){h(t,e,u),p(e,o),h(t,r,u),h(t,s,u),p(s,c),n[6](c),l||(i=y(c,"keydown",n[2]),l=!0)},p(t,[n]){1&n&&E(o,t[0])},i:t,o:t,d(t){t&&g(e),t&&g(r),t&&g(s),n[6](null),l=!1,i()}}}function vn(t,n,e){let o,{label:r}=n,{onEnterCallback:s}=n;return t.$$set=t=>{"label"in t&&e(0,r=t.label),"onEnterCallback"in t&&e(3,s=t.onEnterCallback)},[r,o,function(t){"Enter"===t.key&&0!==t.target.value.length&&(s(t.target.value),t.target.value="")},s,async function(){await(F(),A),o.focus()},function(){e(1,o.value="",o)},function(t){D[t?"unshift":"push"]((()=>{o=t,e(1,o)}))}]}class kn extends ot{constructor(t){super(),et(this,t,vn,wn,s,{label:0,onEnterCallback:3,focus:4,clear:5})}get focus(){return this.$$.ctx[4]}get clear(){return this.$$.ctx[5]}}function yn(n){let e;return{c(){e=x("div"),e.innerHTML='<img src="icons/cloud-compile.png" width="128px" alt=""/> \n    <span class="foreground-cc font-small pad-vert font-x-large">ShnooTalk Playground</span> \n    <div class="box font-small box-items-center pad-hor"><a href="https://github.com/RainingComputers/ShnooTalk" class="foreground-cc text-no-wrap" target="_blank">github.com/RainingComputers/ShnooTalk</a> \n\n        <a href="https://github.com/RainingComputers/shnootalk-playground" class="foreground-cc text-no-wrap" target="_blank">github.com/RainingComputers/shnootalk-playground</a> \n\n        <span class="foreground-f80 text-no-wrap foreground-f80 pad-vert" style="font-size: xx-small;">© Copyrights 2021 RainingComputers</span></div>',C(e,"class","box box-items-center background-25 pad-hor pad-vert")},m(t,n){h(t,e,n)},p:t,i:t,o:t,d(t){t&&g(e)}}}class Cn extends ot{constructor(t){super(),et(this,t,null,yn,s,{})}}function En(n){let e,o,r,s,c,l,i;return{c(){e=x("pre"),o=w("    "),r=x("code"),s=w("\n        "),c=w(n[0]),l=w("\n    "),i=w("\n"),C(r,"class","box box-child-grow foreground-cc"),C(e,"class",Tn)},m(t,n){h(t,e,n),p(e,o),p(e,r),p(r,s),p(r,c),p(r,l),p(e,i)},p(t,[n]){1&n&&E(c,t[0])},i:t,o:t,d(t){t&&g(e)}}}const Tn=["box","box-child-grow","pad-hor","scroll-x","scroll-y","scroll-hidden"].join(" ");function _n(t,n,e){let{output:o=""}=n;return t.$$set=t=>{"output"in t&&e(0,o=t.output)},[o]}class In extends ot{constructor(t){super(),et(this,t,_n,En,s,{output:0})}}function Nn(t){let n;return{c(){n=x("span"),n.textContent="OK",C(n,"class","pad-hor pad-vert foreground-green font-small text-bold svelte-j6xj8h")},m(t,e){h(t,n,e)},d(t){t&&g(n)}}}function Ln(t){let n;return{c(){n=x("span"),n.textContent="ERROR",C(n,"class","pad-hor pad-vert foreground-red font-small text-bold svelte-j6xj8h")},m(t,e){h(t,n,e)},d(t){t&&g(n)}}}function Sn(n){let e,o,r=n[1]&&Nn(),s=n[0]&&Ln();return{c(){r&&r.c(),e=v(),s&&s.c(),o=k()},m(t,n){r&&r.m(t,n),h(t,e,n),s&&s.m(t,n),h(t,o,n)},p(t,[n]){t[1]?r||(r=Nn(),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),t[0]?s||(s=Ln(),s.c(),s.m(o.parentNode,o)):s&&(s.d(1),s=null)},i:t,o:t,d(t){r&&r.d(t),t&&g(e),s&&s.d(t),t&&g(o)}}}function Mn(t,n,e){let{error:o=!1}=n,{ok:r=!1}=n;return t.$$set=t=>{"error"in t&&e(0,o=t.error),"ok"in t&&e(1,r=t.ok)},[o,r]}class jn extends ot{constructor(t){super(),et(this,t,Mn,Sn,s,{error:0,ok:1})}}function On(t){let n,e,o,r,s,c;const l=t[3].default,i=u(l,t,t[2],null);return{c(){n=x("div"),e=x("span"),i&&i.c(),o=v(),r=x("span"),s=w(t[1]),C(e,"class","box box-items-center pad-left foreground-f80"),T(e,"width",t[0]+"px"),C(r,"class","pad-hor pad-vert foreground-cc font-small"),C(n,"class","box box-arrange-hor box-items-center")},m(t,l){h(t,n,l),p(n,e),i&&i.m(e,null),p(n,o),p(n,r),p(r,s),c=!0},p(t,[n]){i&&i.p&&(!c||4&n)&&d(i,l,t,t[2],c?f(l,t[2],n,null):$(t[2]),null),(!c||1&n)&&T(e,"width",t[0]+"px"),(!c||2&n)&&E(s,t[1])},i(t){c||(Q(i,t),c=!0)},o(t){Y(i,t),c=!1},d(t){t&&g(n),i&&i.d(t)}}}function Wn(t,n,e){let{$$slots:o={},$$scope:r}=n,{iconWidth:s=16}=n,{label:c}=n;return t.$$set=t=>{"iconWidth"in t&&e(0,s=t.iconWidth),"label"in t&&e(1,c=t.label),"$$scope"in t&&e(2,r=t.$$scope)},[s,c,r,o]}class Dn extends ot{constructor(t){super(),et(this,t,Wn,On,s,{iconWidth:0,label:1})}}function Pn(n){let e,o,r;return{c(){e=b("svg"),o=b("polyline"),r=b("line"),C(o,"points","4 17 10 11 4 5"),C(r,"x1","12"),C(r,"y1","19"),C(r,"x2","20"),C(r,"y2","19"),C(e,"xmlns","http://www.w3.org/2000/svg"),C(e,"viewBox","0 0 24 24"),C(e,"fill","none"),C(e,"stroke-width","2"),C(e,"stroke-linecap","round"),C(e,"stroke-linejoin","round"),C(e,"class","feather feather-terminal")},m(t,n){h(t,e,n),p(e,o),p(e,r)},p:t,i:t,o:t,d(t){t&&g(e)}}}class zn extends ot{constructor(t){super(),et(this,t,null,Pn,s,{})}}function An(n){let e,o;return{c(){e=x("div"),o=x("div"),C(o,"class","loader"),T(o,"width",Un+"px"),T(o,"height",Un+"px"),C(e,"class","pad-vert")},m(t,n){h(t,e,n),p(e,o)},p:t,i:t,o:t,d(t){t&&g(e)}}}let Un=50;class Fn extends ot{constructor(t){super(),et(this,t,null,An,s,{})}}function Hn(t){let n,e;return n=new zn({}),{c(){Z(n.$$.fragment)},m(t,o){tt(n,t,o),e=!0},i(t){e||(Q(n.$$.fragment,t),e=!0)},o(t){Y(n.$$.fragment,t),e=!1},d(t){nt(n,t)}}}function Rn(t){let n,e;return n=new In({props:{output:t[0]}}),{c(){Z(n.$$.fragment)},m(t,o){tt(n,t,o),e=!0},p(t,e){const o={};1&e&&(o.output=t[0]),n.$set(o)},i(t){e||(Q(n.$$.fragment,t),e=!0)},o(t){Y(n.$$.fragment,t),e=!1},d(t){nt(n,t)}}}function Bn(n){let e,o,r,s,c;return o=new Fn({}),{c(){e=x("div"),Z(o.$$.fragment),r=v(),s=x("span"),s.textContent="Compiling",C(s,"class","pad-vert foreground-f80 font-small"),C(e,"class","box box-child-grow box-items-center box-width-full")},m(t,n){h(t,e,n),tt(o,e,null),p(e,r),p(e,s),c=!0},p:t,i(t){c||(Q(o.$$.fragment,t),c=!0)},o(t){Y(o.$$.fragment,t),c=!1},d(t){t&&g(e),nt(o)}}}function Vn(t){let n,e,o,r,s,c,l,i,u,a,f;e=new Dn({props:{label:"OUTPUT",$$slots:{default:[Hn]},$$scope:{ctx:t}}}),c=new jn({props:{error:t[3],ok:t[2]}});const d=[Bn,Rn],$=[];function m(t,n){return t[1]?0:1}return i=m(t),u=$[i]=d[i](t),{c(){n=x("div"),Z(e.$$.fragment),o=v(),r=x("span"),s=v(),Z(c.$$.fragment),l=v(),u.c(),a=k(),C(r,"class","box-child-grow"),C(n,"class","box box-arrange-hor")},m(t,u){h(t,n,u),tt(e,n,null),p(n,o),p(n,r),p(n,s),tt(c,n,null),h(t,l,u),$[i].m(t,u),h(t,a,u),f=!0},p(t,[n]){const o={};16&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o);const r={};8&n&&(r.error=t[3]),4&n&&(r.ok=t[2]),c.$set(r);let s=i;i=m(t),i===s?$[i].p(t,n):(X(),Y($[s],1,1,(()=>{$[s]=null})),J(),u=$[i],u?u.p(t,n):(u=$[i]=d[i](t),u.c()),Q(u,1),u.m(a.parentNode,a))},i(t){f||(Q(e.$$.fragment,t),Q(c.$$.fragment,t),Q(u),f=!0)},o(t){Y(e.$$.fragment,t),Y(c.$$.fragment,t),Y(u),f=!1},d(t){t&&g(n),nt(e),nt(c),t&&g(l),$[i].d(t),t&&g(a)}}}function Kn(t,n,e){let{output:o=""}=n,{loading:r=!1}=n,{ok:s=!1}=n,{error:c=!1}=n;return t.$$set=t=>{"output"in t&&e(0,o=t.output),"loading"in t&&e(1,r=t.loading),"ok"in t&&e(2,s=t.ok),"error"in t&&e(3,c=t.error)},[o,r,s,c]}class Gn extends ot{constructor(t){super(),et(this,t,Kn,Vn,s,{output:0,loading:1,ok:2,error:3})}}function qn(t){let n,e;return n=new zn({}),{c(){Z(n.$$.fragment)},m(t,o){tt(n,t,o),e=!0},i(t){e||(Q(n.$$.fragment,t),e=!0)},o(t){Y(n.$$.fragment,t),e=!1},d(t){nt(n,t)}}}function Xn(t){let n,e,o,r,s;return e=new Dn({props:{label:"INPUT",$$slots:{default:[qn]},$$scope:{ctx:t}}}),{c(){n=x("div"),Z(e.$$.fragment),o=v(),r=x("textarea"),C(r,"class",Jn),C(r,"placeholder","Enter input here"),C(n,"class","box box-width-full border-top-37 box-height-quarter")},m(c,l){h(c,n,l),tt(e,n,null),p(n,o),p(n,r),t[2](r),s=!0},p(t,[n]){const o={};8&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){s||(Q(e.$$.fragment,t),s=!0)},o(t){Y(e.$$.fragment,t),s=!1},d(o){o&&g(n),nt(e),t[2](null)}}}const Jn=["box-height-full","background-2d","foreground-cc","placeholder-foreground-f80","pad-hor"].join(" ");function Qn(t,n,e){let o;return[o,function(){return o.value},function(t){D[t?"unshift":"push"]((()=>{o=t,e(0,o)}))}]}class Yn extends ot{constructor(t){super(),et(this,t,Qn,Xn,s,{getInput:1})}get getInput(){return this.$$.ctx[1]}}var Zn;!function(t){t.EXEC_TIMEDOUT="EXEC_TIMEDOUT",t.CLANG_LINK_TIMEDOUT="CLANG_LINK_TIMEDOUT",t.CLANG_LINK_FAILED="CLANG_LINK_FAILED",t.COMPILE_FAILED="COMPILE_FAILED",t.COMPILE_TIMEDOUT="COMPILE_TIMEDOUT",t.SUCCESS="SUCCESS"}(Zn||(Zn={}));const te={output:"Something went wrong, please try again later",result:Zn.COMPILE_FAILED},ne={output:"Execution has timed out or the server is overloaded",result:Zn.EXEC_TIMEDOUT},ee={output:"File names should end with the extension '.shtk'",result:Zn.COMPILE_FAILED};async function oe(t){try{if(!function(t){for(const n in t)if("input"!=n&&!n.match(/\w+.shtk/))return!1;return!0}(t))return ee;const n=await async function(t,n,e){let o={method:n};e&&(o={method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});const r=await fetch(t,o);return function(t){if(200!==t.status)throw{error:"response not OK",context:t}}(r),r.json()}("https://shnootalk.cc/shnootalk-playground/api/v2/compile","post",t);return n.result===Zn.EXEC_TIMEDOUT||n.result===Zn.CLANG_LINK_TIMEDOUT?ne:n}catch(t){return te}}function re(t){let n,e,o={label:"Enter name",onEnterCallback:t[12]};return n=new kn({props:o}),t[15](n),{c(){Z(n.$$.fragment)},m(t,o){tt(n,t,o),e=!0},p(t,e){n.$set({})},i(t){e||(Q(n.$$.fragment,t),e=!0)},o(t){Y(n.$$.fragment,t),e=!1},d(e){t[15](null),nt(n,e)}}}function se(t){let n,e;return n=new Cn({}),{c(){Z(n.$$.fragment)},m(t,o){tt(n,t,o),e=!0},i(t){e||(Q(n.$$.fragment,t),e=!0)},o(t){Y(n.$$.fragment,t),e=!1},d(t){nt(n,t)}}}function ce(t){let n,e,o,r,s,c,l,i,u={ctx:t[10]};return n=new tn({props:u}),t[20](n),n.$on("newTab",t[11]),o=new gn({}),s=new mt({props:{onClick:t[21]}}),l=new $t({props:{onClick:t[14],disabled:t[1]}}),{c(){Z(n.$$.fragment),e=v(),Z(o.$$.fragment),r=v(),Z(s.$$.fragment),c=v(),Z(l.$$.fragment)},m(t,u){tt(n,t,u),h(t,e,u),tt(o,t,u),h(t,r,u),tt(s,t,u),h(t,c,u),tt(l,t,u),i=!0},p(t,e){n.$set({});const o={};32&e&&(o.onClick=t[21]),s.$set(o);const r={};2&e&&(r.disabled=t[1]),l.$set(r)},i(t){i||(Q(n.$$.fragment,t),Q(o.$$.fragment,t),Q(s.$$.fragment,t),Q(l.$$.fragment,t),i=!0)},o(t){Y(n.$$.fragment,t),Y(o.$$.fragment,t),Y(s.$$.fragment,t),Y(l.$$.fragment,t),i=!1},d(i){t[20](null),nt(n,i),i&&g(e),nt(o,i),i&&g(r),nt(s,i),i&&g(c),nt(l,i)}}}function le(t){let n,e,o,r,s,c,l,i,u,a,f,d,$,m,b,w,k,E={width:25,onClose:t[16],$$slots:{default:[re]},$$scope:{ctx:t}};e=new bn({props:E}),t[17](e);let T={width:30,onClose:t[18],$$slots:{default:[se]},$$scope:{ctx:t}};r=new bn({props:T}),t[19](r),c=new lt({props:{$$slots:{default:[ce]},$$scope:{ctx:t}}});let _={ctx:t[10],fontSize:17};u=new pn({props:_}),t[22](u),d=new Gn({props:{output:t[0],loading:t[1],ok:t[2],error:t[3]}});return m=new Yn({props:{}}),t[23](m),{c(){n=x("main"),Z(e.$$.fragment),o=v(),Z(r.$$.fragment),s=v(),Z(c.$$.fragment),l=v(),i=x("div"),Z(u.$$.fragment),a=v(),f=x("div"),Z(d.$$.fragment),$=v(),Z(m.$$.fragment),C(f,"class","box background-2d box-width-35"),C(i,"class","box box-arrange-hor box-width-full box-height-full"),C(n,"class","box-root")},m(g,x){h(g,n,x),tt(e,n,null),p(n,o),tt(r,n,null),p(n,s),tt(c,n,null),p(n,l),p(n,i),tt(u,i,null),p(i,a),p(i,f),tt(d,f,null),p(f,$),tt(m,f,null),b=!0,w||(k=y(window,"keydown",t[13]),w=!0)},p(t,[n]){const o={};128&n&&(o.onClose=t[16]),16777472&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o);const s={};128&n&&(s.onClose=t[18]),16777216&n&&(s.$$scope={dirty:n,ctx:t}),r.$set(s);const l={};16777314&n&&(l.$$scope={dirty:n,ctx:t}),c.$set(l);u.$set({});const i={};1&n&&(i.output=t[0]),2&n&&(i.loading=t[1]),4&n&&(i.ok=t[2]),8&n&&(i.error=t[3]),d.$set(i);m.$set({})},i(t){b||(Q(e.$$.fragment,t),Q(r.$$.fragment,t),Q(c.$$.fragment,t),Q(u.$$.fragment,t),Q(d.$$.fragment,t),Q(m.$$.fragment,t),b=!0)},o(t){Y(e.$$.fragment,t),Y(r.$$.fragment,t),Y(c.$$.fragment,t),Y(u.$$.fragment,t),Y(d.$$.fragment,t),Y(m.$$.fragment,t),b=!1},d(o){o&&g(n),t[17](null),nt(e),t[19](null),nt(r),nt(c),t[22](null),nt(u),nt(d),t[23](null),nt(m),w=!1,k()}}}function ie(t,n,e){const o=new wt(["main.shtk"]);let r,s,c,l,i,u,a="",f=!1,d=!1,$=!1;L((()=>{l.setContent("main.shtk",'fn main() -> int\n{\n    println("Hello world")\n    return 0\n}\n'),l.focus()}));return[a,f,d,$,r,s,c,l,i,u,o,function(){r.openModal(),i.focus()},function(t){r.closeModal(),c.addTab(t)},function(t){"Escape"===t.key&&(r.closeModal(),s.closeModal(),i.clear(),l.focus(),t.preventDefault())},async function(){const t=Object.assign(Object.assign({},l.getContents()),{input:u.getInput()});e(1,f=!0);const n=await oe(t),o=n.result;e(0,a=n.output),e(2,d=o===Zn.SUCCESS),e(3,$=!d),e(1,f=!1)},function(t){D[t?"unshift":"push"]((()=>{i=t,e(8,i)}))},()=>{l.focus()},function(t){D[t?"unshift":"push"]((()=>{r=t,e(4,r)}))},()=>{l.focus()},function(t){D[t?"unshift":"push"]((()=>{s=t,e(5,s)}))},function(t){D[t?"unshift":"push"]((()=>{c=t,e(6,c)}))},()=>s.openModal(),function(t){D[t?"unshift":"push"]((()=>{l=t,e(7,l)}))},function(t){D[t?"unshift":"push"]((()=>{u=t,e(9,u)}))}]}return new class extends ot{constructor(t){super(),et(this,t,ie,le,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
