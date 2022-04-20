(()=>{"use strict";function t(n){var o="function"==typeof Map?new Map:void 0;return t=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==o){if(o.has(t))return o.get(t);o.set(t,i)}function i(){return e(t,arguments,l(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),r(i,t)},t(n)}function e(t,n,o){return e=c()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&r(i,n.prototype),i},e.apply(null,arguments)}function n(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||p(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&r(t,e)}function r(t,e){return r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(t,e)}function i(t){var e=c();return function(){var n,o=l(t);if(e){var r=l(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return u(this,n)}}function u(t,e){if(e&&("object"===v(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function l(t){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},l(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&f(t.prototype,e),n&&f(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function p(t,e){if(t){if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function m(){}function h(t){return t()}function y(){return Object.create(null)}function b(t){t.forEach(h)}function g(t){return"function"==typeof t}function w(t,e){return t!=t?e==e:t!==e||t&&"object"===v(t)||"function"==typeof t}function x(t){return 0===Object.keys(t).length}new Set;function $(){!0}function O(){!1}function j(t,e){t.appendChild(e)}function _(t){if(!t)return document;var e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function k(t,e){j(t.head||t,e)}function S(t,e,n){t.insertBefore(e,n||null)}function C(t){t.parentNode.removeChild(t)}function T(t,e){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function E(t){return document.createElement(t)}function A(t){return document.createTextNode(t)}function R(){return A(" ")}function P(t,e,n,o){return t.addEventListener(e,n,o),function(){return t.removeEventListener(e,n,o)}}function L(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function I(t){return Array.from(t.childNodes)}function B(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function N(t,e){t.value=null==e?"":e}var M;new Map;function U(t){M=t}var D=[],z=[],W=[],F=[],q=Promise.resolve(),H=!1;function J(){H||(H=!0,q.then(Q))}function Z(t){W.push(t)}var K=new Set,G=0;function Q(){var t=M;do{for(;G<D.length;){var e=D[G];G++,U(e),V(e.$$)}for(U(null),D.length=0,G=0;z.length;)z.pop()();for(var n=0;n<W.length;n+=1){var o=W[n];K.has(o)||(K.add(o),o())}W.length=0}while(D.length);for(;F.length;)F.pop()();H=!1,K.clear(),U(t)}function V(t){if(null!==t.fragment){t.update(),b(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Z)}}var X,Y=new Set;function tt(){X={r:0,c:[],p:X}}function et(){X.r||b(X.c),X=X.p}function nt(t,e){t&&t.i&&(Y.delete(t),t.i(e))}function ot(t,e,n,o){if(t&&t.o){if(Y.has(t))return;Y.add(t),X.c.push((function(){Y.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);function rt(t){t&&t.c()}function it(t,e,o,r){var i=t.$$,u=i.fragment,c=i.on_mount,l=i.on_destroy,a=i.after_update;u&&u.m(e,o),r||Z((function(){var e=c.map(h).filter(g);l?l.push.apply(l,n(e)):b(e),t.$$.on_mount=[]})),a.forEach(Z)}function ut(t,e){var n=t.$$;null!==n.fragment&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ct(t,e){-1===t.$$.dirty[0]&&(D.push(t),J(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function lt(t,e,n,o,r,i,u){var c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:[-1],l=M;U(t);var a=t.$$={fragment:null,ctx:null,props:i,update:m,not_equal:r,bound:y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:y(),dirty:c,skip_bound:!1,root:e.target||l.$$.root};u&&u(a.root);var f=!1;if(a.ctx=n?n(t,e.props||{},(function(e,n){var o=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return a.ctx&&r(a.ctx[e],a.ctx[e]=o)&&(!a.skip_bound&&a.bound[e]&&a.bound[e](o),f&&ct(t,e)),n})):[],a.update(),f=!0,b(a.before_update),a.fragment=!!o&&o(a.ctx),e.target){if(e.hydrate){$();var s=I(e.target);a.fragment&&a.fragment.l(s),s.forEach(C)}else a.fragment&&a.fragment.c();e.intro&&nt(t.$$.fragment),it(t,e.target,e.anchor,e.customElement),O(),Q()}U(l)}"function"==typeof HTMLElement&&HTMLElement;var at=function(){function t(){a(this,t)}return s(t,[{key:"$destroy",value:function(){ut(this,1),this.$destroy=m}},{key:"$on",value:function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}}},{key:"$set",value:function(t){this.$$set&&!x(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}]),t}();function ft(t){return ft="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ft(t)}function st(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function pt(t,e){return pt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},pt(t,e)}function dt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=ht(t);if(e){var r=ht(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return vt(this,n)}}function vt(t,e){if(e&&("object"===ft(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return mt(t)}function mt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ht(t){return ht=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},ht(t)}function yt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var o,r,i=[],u=!0,c=!1;try{for(n=n.call(t);!(u=(o=n.next()).done)&&(i.push(o.value),!e||i.length!==e);u=!0);}catch(t){c=!0,r=t}finally{try{u||null==n.return||n.return()}finally{if(c)throw r}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return bt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return bt(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function bt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function gt(t){var e;return{c:function(){e=A("📋")},m:function(t,n){S(t,e,n)},d:function(t){t&&C(e)}}}function wt(t){var e;return{c:function(){e=A("Copied!")},m:function(t,n){S(t,e,n)},d:function(t){t&&C(e)}}}function xt(t){var e,n,o;function r(t,e){return t[0]?wt:gt}var i=r(t),u=i(t);return{c:function(){e=E("a"),u.c(),L(e,"class","copy"),L(e,"title","Copy link to clipboard"),L(e,"href","")},m:function(r,i){var c;S(r,e,i),u.m(e,null),n||(o=P(e,"click",(c=t[1],function(t){return t.preventDefault(),c.call(this,t)})),n=!0)},p:function(t,n){yt(n,1)[0];i!==(i=r(t))&&(u.d(1),(u=i(t))&&(u.c(),u.m(e,null)))},i:m,o:m,d:function(t){t&&C(e),u.d(),n=!1,o()}}}function $t(t,e,n){var o,r=e.textToCopy,i=void 0===r?"":r;return t.$$set=function(t){"textToCopy"in t&&n(2,i=t.textToCopy)},[o,function(){var t=document.createElement("input");t.value=i,document.body.appendChild(t),t.select(),t.setSelectionRange(0,i.length),document.execCommand("copy"),document.body.removeChild(t),console.log("should have copied ",i),clearTimeout(o),n(0,o=setTimeout((function(){n(0,o=null)}),1e3))},i]}const Ot=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&pt(t,e)}(i,t);var e,n,o,r=dt(i);function i(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),lt(mt(e=r.call(this)),t,$t,xt,w,{textToCopy:2}),e}return e=i,n&&st(e.prototype,n),o&&st(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}(at);function jt(t){return jt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},jt(t)}function _t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function kt(t,e){return kt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},kt(t,e)}function St(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Et(t);if(e){var r=Et(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Ct(this,n)}}function Ct(t,e){if(e&&("object"===jt(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return Tt(t)}function Tt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Et(t){return Et=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Et(t)}function At(t){!function(t,e,n){var o=_(t);if(!o.getElementById(e)){var r=E("style");r.id=e,r.textContent=n,k(o,r)}}(t,"svelte-54p2dv",".sl-app.svelte-54p2dv.svelte-54p2dv{margin:2rem auto;max-width:120ch;padding:2rem;background:white;font-family:Lato, sans-serif;box-sizing:border-box;display:flex;flex-wrap:wrap}.sl-app.svelte-54p2dv h1.svelte-54p2dv{flex:0 0 100%}.sl-app.svelte-54p2dv form.svelte-54p2dv{flex:1 0 50ch;padding:2rem}.sl-app.svelte-54p2dv .outputs.svelte-54p2dv{flex:1 0 50ch;padding:2rem}p.smallprint.svelte-54p2dv.svelte-54p2dv{font-size:0.875rem;color:#444;margin:0}h1.svelte-54p2dv.svelte-54p2dv{margin:0;text-align:center;font-family:Lato, sans-serif;font-weight:lighter;font-size:2rem;color:#1577d9}h2.svelte-54p2dv.svelte-54p2dv{font-size:1rem;color:#555;margin:0 0 0.5rem;font-family:Lato, sans-serif;font-weight:normal}ul.errors.svelte-54p2dv.svelte-54p2dv{color:#a00}ul.warnings.svelte-54p2dv.svelte-54p2dv{color:#a80}.form-item.svelte-54p2dv label.svelte-54p2dv{display:block;color:#1577d9}.form-item.svelte-54p2dv input.svelte-54p2dv,.form-item.svelte-54p2dv textarea.svelte-54p2dv{width:100%;padding:0.5ch 1ch;border:solid 1px #ebf5ff;background:#ebf5ff;margin:0 0 1rem;border-radius:5px}.output.svelte-54p2dv.svelte-54p2dv{margin-bottom:1rem}a.button.svelte-54p2dv.svelte-54p2dv{background:#1577d9;width:12ch;margin-right:1.4ch;color:white;text-align:center;padding:0.5ch 1ch;border:none;display:inline-block;border-radius:5px;text-decoration:none}a.button.svelte-54p2dv.svelte-54p2dv:hover,a.button.svelte-54p2dv.svelte-54p2dv:active{text-decoration:none;background-color:#0764c1}")}function Rt(t,e,n){var o=t.slice();return o[22]=e[n],o}function Pt(t,e,n){var o=t.slice();return o[22]=e[n],o}function Lt(t,e,n){var o=t.slice();return o[22]=e[n],o}function It(t,e,n){var o=t.slice();return o[22]=e[n],o}function Bt(t,e,n){var o=t.slice();return o[22]=e[n],o}function Nt(t){for(var e,n=t[6],o=[],r=0;r<n.length;r+=1)o[r]=Ut(Bt(t,n,r));return{c:function(){e=E("ul");for(var t=0;t<o.length;t+=1)o[t].c();L(e,"class","errors svelte-54p2dv")},m:function(t,n){S(t,e,n);for(var r=0;r<o.length;r+=1)o[r].m(e,null)},p:function(t,r){if(64&r[0]){var i;for(n=t[6],i=0;i<n.length;i+=1){var u=Bt(t,n,i);o[i]?o[i].p(u,r):(o[i]=Ut(u),o[i].c(),o[i].m(e,null))}for(;i<o.length;i+=1)o[i].d(1);o.length=n.length}},i:m,o:m,d:function(t){t&&C(e),T(o,t)}}}function Mt(t){var e,n,o,r,i;return r=new Ot({props:{textToCopy:t[11]}}),{c:function(){e=E("a"),n=A("Tweet"),o=R(),rt(r.$$.fragment),L(e,"class","button svelte-54p2dv"),L(e,"href",t[11]),L(e,"target","_blank"),L(e,"title","Tweet")},m:function(t,u){S(t,e,u),j(e,n),S(t,o,u),it(r,t,u),i=!0},p:function(t,n){(!i||2048&n[0])&&L(e,"href",t[11]);var o={};2048&n[0]&&(o.textToCopy=t[11]),r.$set(o)},i:function(t){i||(nt(r.$$.fragment,t),i=!0)},o:function(t){ot(r.$$.fragment,t),i=!1},d:function(t){t&&C(e),t&&C(o),ut(r,t)}}}function Ut(t){var e,n,o=t[22]+"";return{c:function(){e=E("li"),n=A(o)},m:function(t,o){S(t,e,o),j(e,n)},p:function(t,e){64&e[0]&&o!==(o=t[22]+"")&&B(n,o)},d:function(t){t&&C(e)}}}function Dt(t){for(var e,n=t[7],o=[],r=0;r<n.length;r+=1)o[r]=Wt(It(t,n,r));return{c:function(){e=E("ul");for(var t=0;t<o.length;t+=1)o[t].c();L(e,"class","errors svelte-54p2dv")},m:function(t,n){S(t,e,n);for(var r=0;r<o.length;r+=1)o[r].m(e,null)},p:function(t,r){if(128&r[0]){var i;for(n=t[7],i=0;i<n.length;i+=1){var u=It(t,n,i);o[i]?o[i].p(u,r):(o[i]=Wt(u),o[i].c(),o[i].m(e,null))}for(;i<o.length;i+=1)o[i].d(1);o.length=n.length}},i:m,o:m,d:function(t){t&&C(e),T(o,t)}}}function zt(t){var e,n,o,r,i;return r=new Ot({props:{textToCopy:t[12]}}),{c:function(){e=E("a"),n=A("Facebook"),o=R(),rt(r.$$.fragment),L(e,"class","button svelte-54p2dv"),L(e,"href",t[12]),L(e,"target","_blank"),L(e,"title","Share on Facebook")},m:function(t,u){S(t,e,u),j(e,n),S(t,o,u),it(r,t,u),i=!0},p:function(t,n){(!i||4096&n[0])&&L(e,"href",t[12]);var o={};4096&n[0]&&(o.textToCopy=t[12]),r.$set(o)},i:function(t){i||(nt(r.$$.fragment,t),i=!0)},o:function(t){ot(r.$$.fragment,t),i=!1},d:function(t){t&&C(e),t&&C(o),ut(r,t)}}}function Wt(t){var e,n,o=t[22]+"";return{c:function(){e=E("li"),n=A(o)},m:function(t,o){S(t,e,o),j(e,n)},p:function(t,e){128&e[0]&&o!==(o=t[22]+"")&&B(n,o)},d:function(t){t&&C(e)}}}function Ft(t){for(var e,n=t[8],o=[],r=0;r<n.length;r+=1)o[r]=Ht(Lt(t,n,r));return{c:function(){e=E("ul");for(var t=0;t<o.length;t+=1)o[t].c();L(e,"class","errors svelte-54p2dv")},m:function(t,n){S(t,e,n);for(var r=0;r<o.length;r+=1)o[r].m(e,null)},p:function(t,r){if(256&r[0]){var i;for(n=t[8],i=0;i<n.length;i+=1){var u=Lt(t,n,i);o[i]?o[i].p(u,r):(o[i]=Ht(u),o[i].c(),o[i].m(e,null))}for(;i<o.length;i+=1)o[i].d(1);o.length=n.length}},i:m,o:m,d:function(t){t&&C(e),T(o,t)}}}function qt(t){var e,n,o,r,i,u,c;return r=new Ot({props:{textToCopy:t[13]}}),{c:function(){e=E("a"),n=A("WhatsApp"),o=R(),rt(r.$$.fragment),i=R(),(u=E("p")).textContent="(note: only works on a device with WhatsApp installed)",L(e,"class","button svelte-54p2dv"),L(e,"href",t[13]),L(e,"target","_blank"),L(e,"title","Share on whatsapp"),L(u,"class","smallprint svelte-54p2dv")},m:function(t,l){S(t,e,l),j(e,n),S(t,o,l),it(r,t,l),S(t,i,l),S(t,u,l),c=!0},p:function(t,n){(!c||8192&n[0])&&L(e,"href",t[13]);var o={};8192&n[0]&&(o.textToCopy=t[13]),r.$set(o)},i:function(t){c||(nt(r.$$.fragment,t),c=!0)},o:function(t){ot(r.$$.fragment,t),c=!1},d:function(t){t&&C(e),t&&C(o),ut(r,t),t&&C(i),t&&C(u)}}}function Ht(t){var e,n,o=t[22]+"";return{c:function(){e=E("li"),n=A(o)},m:function(t,o){S(t,e,o),j(e,n)},p:function(t,e){256&e[0]&&o!==(o=t[22]+"")&&B(n,o)},d:function(t){t&&C(e)}}}function Jt(t){for(var e,n=t[9],o=[],r=0;r<n.length;r+=1)o[r]=Kt(Pt(t,n,r));return{c:function(){e=E("ul");for(var t=0;t<o.length;t+=1)o[t].c();L(e,"class","errors svelte-54p2dv")},m:function(t,n){S(t,e,n);for(var r=0;r<o.length;r+=1)o[r].m(e,null)},p:function(t,r){if(512&r[0]){var i;for(n=t[9],i=0;i<n.length;i+=1){var u=Pt(t,n,i);o[i]?o[i].p(u,r):(o[i]=Kt(u),o[i].c(),o[i].m(e,null))}for(;i<o.length;i+=1)o[i].d(1);o.length=n.length}},i:m,o:m,d:function(t){t&&C(e),T(o,t)}}}function Zt(t){var e,n,o,r,i;return r=new Ot({props:{textToCopy:t[14]}}),{c:function(){e=E("a"),n=A("Email"),o=R(),rt(r.$$.fragment),L(e,"class","button svelte-54p2dv"),L(e,"href",t[14]),L(e,"target","_blank"),L(e,"title","Share by Email")},m:function(t,u){S(t,e,u),j(e,n),S(t,o,u),it(r,t,u),i=!0},p:function(t,n){(!i||16384&n[0])&&L(e,"href",t[14]);var o={};16384&n[0]&&(o.textToCopy=t[14]),r.$set(o)},i:function(t){i||(nt(r.$$.fragment,t),i=!0)},o:function(t){ot(r.$$.fragment,t),i=!1},d:function(t){t&&C(e),t&&C(o),ut(r,t)}}}function Kt(t){var e,n,o=t[22]+"";return{c:function(){e=E("li"),n=A(o)},m:function(t,o){S(t,e,o),j(e,n)},p:function(t,e){512&e[0]&&o!==(o=t[22]+"")&&B(n,o)},d:function(t){t&&C(e)}}}function Gt(t){for(var e,n,o,r,i=t[10],u=[],c=0;c<i.length;c+=1)u[c]=Qt(Rt(t,i,c));return{c:function(){e=E("div"),(n=E("h2")).textContent="Warnings",o=R(),r=E("ul");for(var t=0;t<u.length;t+=1)u[t].c();L(n,"class","svelte-54p2dv"),L(r,"class","warnings svelte-54p2dv"),L(e,"class","output svelte-54p2dv")},m:function(t,i){S(t,e,i),j(e,n),j(e,o),j(e,r);for(var c=0;c<u.length;c+=1)u[c].m(r,null)},p:function(t,e){if(1024&e[0]){var n;for(i=t[10],n=0;n<i.length;n+=1){var o=Rt(t,i,n);u[n]?u[n].p(o,e):(u[n]=Qt(o),u[n].c(),u[n].m(r,null))}for(;n<u.length;n+=1)u[n].d(1);u.length=i.length}},d:function(t){t&&C(e),T(u,t)}}}function Qt(t){var e,n,o=t[22]+"";return{c:function(){e=E("li"),n=A(o)},m:function(t,o){S(t,e,o),j(e,n)},p:function(t,e){1024&e[0]&&o!==(o=t[22]+"")&&B(n,o)},d:function(t){t&&C(e)}}}function Vt(t){var e,n,o,r,i,u,c,l,a,f,s,p,d,v,m,h,y,g,w,x,$,O,_,k,T,A,I,B,M,U,D,z,W,F,q,H,J,Z,K,G,Q,V,X,Y,rt,it,ut,ct,lt,at,ft,st,pt,dt,vt,mt,ht,yt,bt,gt,wt,xt,$t=[Mt,Nt],Ot=[];function jt(t,e){return t[11]?0:1}K=jt(t),G=Ot[K]=$t[K](t);var _t=[zt,Dt],kt=[];function St(t,e){return t[12]?0:1}rt=St(t),it=kt[rt]=_t[rt](t);var Ct=[qt,Ft],Tt=[];function Et(t,e){return t[13]?0:1}ft=Et(t),st=Tt[ft]=Ct[ft](t);var At=[Zt,Jt],Rt=[];function Pt(t,e){return t[14]?0:1}ht=Pt(t),yt=Rt[ht]=At[ht](t);var Lt=t[10].length&&Gt(t);return{c:function(){e=E("div"),(n=E("h1")).textContent="Social Links generator",o=R(),r=E("form"),i=E("div"),(u=E("label")).textContent="Primary Link URL",c=R(),l=E("input"),a=R(),f=E("div"),(s=E("label")).textContent="Tweet text",p=R(),d=E("textarea"),v=R(),m=E("div"),(h=E("label")).textContent="Twitter @account (without the @)",y=R(),g=E("input"),w=R(),x=E("div"),($=E("label")).textContent="WhatsApp text",O=R(),_=E("textarea"),k=R(),T=E("div"),(A=E("label")).textContent="Email subject",I=R(),B=E("input"),M=R(),U=E("div"),(D=E("label")).textContent="Email body (plain text only! Keep it short.)",z=R(),W=E("textarea"),F=R(),q=E("div"),H=E("div"),(J=E("h2")).textContent="Twitter",Z=R(),G.c(),Q=R(),V=E("div"),(X=E("h2")).textContent="Facebook",Y=R(),it.c(),ut=R(),ct=E("div"),(lt=E("h2")).textContent="WhatsApp",at=R(),st.c(),pt=R(),dt=E("div"),(vt=E("h2")).textContent="Email",mt=R(),yt.c(),bt=R(),Lt&&Lt.c(),L(n,"class","svelte-54p2dv"),L(u,"for","the-link"),L(u,"class","svelte-54p2dv"),L(l,"type","url"),L(l,"id","the-link"),L(l,"class","svelte-54p2dv"),L(i,"class","form-item svelte-54p2dv"),L(s,"for","twitter-tweet"),L(s,"class","svelte-54p2dv"),L(d,"rows","5"),L(d,"id","twitter-tweet"),L(d,"class","svelte-54p2dv"),L(f,"class","form-item svelte-54p2dv"),L(h,"for","twitter-at"),L(h,"class","svelte-54p2dv"),L(g,"type","text"),L(g,"id","twitter-at"),L(g,"class","svelte-54p2dv"),L(m,"class","form-item svelte-54p2dv"),L($,"for","wa-text"),L($,"class","svelte-54p2dv"),L(_,"rows","5"),L(_,"id","wa-text"),L(_,"class","svelte-54p2dv"),L(x,"class","form-item svelte-54p2dv"),L(A,"for","email-subject-text"),L(A,"class","svelte-54p2dv"),L(B,"type","text"),L(B,"id","email-subject-text"),L(B,"class","svelte-54p2dv"),L(T,"class","form-item svelte-54p2dv"),L(D,"for","email-body"),L(D,"class","svelte-54p2dv"),L(W,"rows","5"),L(W,"id","email-body"),L(W,"class","svelte-54p2dv"),L(U,"class","form-item svelte-54p2dv"),L(r,"class","svelte-54p2dv"),L(J,"class","svelte-54p2dv"),L(H,"class","output svelte-54p2dv"),L(X,"class","svelte-54p2dv"),L(V,"class","output svelte-54p2dv"),L(lt,"class","svelte-54p2dv"),L(ct,"class","output svelte-54p2dv"),L(vt,"class","svelte-54p2dv"),L(dt,"class","output svelte-54p2dv"),L(q,"class","outputs svelte-54p2dv"),L(e,"class","sl-app svelte-54p2dv")},m:function(b,C){S(b,e,C),j(e,n),j(e,o),j(e,r),j(r,i),j(i,u),j(i,c),j(i,l),N(l,t[2]),j(r,a),j(r,f),j(f,s),j(f,p),j(f,d),N(d,t[0]),j(r,v),j(r,m),j(m,h),j(m,y),j(m,g),N(g,t[1]),j(r,w),j(r,x),j(x,$),j(x,O),j(x,_),N(_,t[5]),j(r,k),j(r,T),j(T,A),j(T,I),j(T,B),N(B,t[3]),j(r,M),j(r,U),j(U,D),j(U,z),j(U,W),N(W,t[4]),j(e,F),j(e,q),j(q,H),j(H,J),j(H,Z),Ot[K].m(H,null),j(q,Q),j(q,V),j(V,X),j(V,Y),kt[rt].m(V,null),j(q,ut),j(q,ct),j(ct,lt),j(ct,at),Tt[ft].m(ct,null),j(q,pt),j(q,dt),j(dt,vt),j(dt,mt),Rt[ht].m(dt,null),j(q,bt),Lt&&Lt.m(q,null),gt=!0,wt||(xt=[P(l,"input",t[16]),P(d,"input",t[17]),P(g,"input",t[18]),P(_,"input",t[19]),P(B,"input",t[20]),P(W,"input",t[21])],wt=!0)},p:function(t,e){4&e[0]&&N(l,t[2]),1&e[0]&&N(d,t[0]),2&e[0]&&g.value!==t[1]&&N(g,t[1]),32&e[0]&&N(_,t[5]),8&e[0]&&B.value!==t[3]&&N(B,t[3]),16&e[0]&&N(W,t[4]);var n=K;(K=jt(t))===n?Ot[K].p(t,e):(tt(),ot(Ot[n],1,1,(function(){Ot[n]=null})),et(),(G=Ot[K])?G.p(t,e):(G=Ot[K]=$t[K](t)).c(),nt(G,1),G.m(H,null));var o=rt;(rt=St(t))===o?kt[rt].p(t,e):(tt(),ot(kt[o],1,1,(function(){kt[o]=null})),et(),(it=kt[rt])?it.p(t,e):(it=kt[rt]=_t[rt](t)).c(),nt(it,1),it.m(V,null));var r=ft;(ft=Et(t))===r?Tt[ft].p(t,e):(tt(),ot(Tt[r],1,1,(function(){Tt[r]=null})),et(),(st=Tt[ft])?st.p(t,e):(st=Tt[ft]=Ct[ft](t)).c(),nt(st,1),st.m(ct,null));var i=ht;(ht=Pt(t))===i?Rt[ht].p(t,e):(tt(),ot(Rt[i],1,1,(function(){Rt[i]=null})),et(),(yt=Rt[ht])?yt.p(t,e):(yt=Rt[ht]=At[ht](t)).c(),nt(yt,1),yt.m(dt,null)),t[10].length?Lt?Lt.p(t,e):((Lt=Gt(t)).c(),Lt.m(q,null)):Lt&&(Lt.d(1),Lt=null)},i:function(t){gt||(nt(G),nt(it),nt(st),nt(yt),gt=!0)},o:function(t){ot(G),ot(it),ot(st),ot(yt),gt=!1},d:function(t){t&&C(e),Ot[K].d(),kt[rt].d(),Tt[ft].d(),Rt[ht].d(),Lt&&Lt.d(),wt=!1,b(xt)}}}function Xt(t,e,n){var o,r,i,u,c,l,a,f,s,p,d=e.tweet,v=void 0===d?"":d,m=e.twitterAt,h=void 0===m?"":m,y=e.primaryLink,b=void 0===y?"":y,g=e.emailSubject,w=void 0===g?"":g,x=e.emailBody,$=void 0===x?"":x,O=e.waText,j=void 0===O?"":O;return t.$$set=function(t){"tweet"in t&&n(0,v=t.tweet),"twitterAt"in t&&n(1,h=t.twitterAt),"primaryLink"in t&&n(2,b=t.primaryLink),"emailSubject"in t&&n(3,w=t.emailSubject),"emailBody"in t&&n(4,$=t.emailBody),"waText"in t&&n(5,j=t.waText)},t.$$.update=function(){if(34815&t.$$.dirty[0]){n(15,s=encodeURIComponent(b)),n(6,r=[]),n(7,i=[]),n(8,l=[]),n(9,f=[]),n(10,p=[]),n(14,a=""),n(12,u=""),n(13,c=""),n(14,a=""),b.match(/^https:\/\/./)||(r.push("Need link"),i.push("Need link"),l.push("Need link")),v||r.push("Need tweet text");var e=v;e.length>280&&r.push("Tweet is "+(e-280)+" characters too long."),h&&!h.match(/^@?[a-zA-Z0-9_]+$/)&&r.push("Username invalid."),n(11,o=0===r.length?"https://twitter.com/intent/tweet?text="+encodeURIComponent(v)+"&url="+s+(h.match(/^@?[a-zA-Z0-9_]+$/)?"&via="+encodeURIComponent(h.replace(/^@/,"")):""):null),j||l.push("Need WhatsApp text"),n(12,u=0===i.length?"https://facebook.com/sharer/sharer.php?u="+s:null),n(13,c=0===l.length?"whatsapp://send?text="+encodeURIComponent(j+" "+b):null),w||f.push("Need email subject"),$||f.push("Need short email body"),-1===$.indexOf(b)&&p.push("Link is not included in email body."),0===f.length&&n(14,a="mailto:?subject="+encodeURIComponent(w)+"&body="+encodeURIComponent($)),localStorage.setItem("config",JSON.stringify({primaryLink:b,tweet:v,twitterAt:h,waText:j,emailSubject:w,emailBody:$}))}},[v,h,b,w,$,j,r,i,l,f,p,o,u,c,a,s,function(){b=this.value,n(2,b)},function(){v=this.value,n(0,v)},function(){h=this.value,n(1,h)},function(){j=this.value,n(5,j)},function(){w=this.value,n(3,w)},function(){$=this.value,n(4,$)}]}var Yt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&kt(t,e)}(i,t);var e,n,o,r=St(i);function i(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),lt(Tt(e=r.call(this)),t,Xt,Vt,w,{tweet:0,twitterAt:1,primaryLink:2,emailSubject:3,emailBody:4,waText:5},At,[-1,-1]),e}return e=i,n&&_t(e.prototype,n),o&&_t(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}(at);const te=Yt;document.addEventListener("DOMContentLoaded",(function(){var t=localStorage.getItem("config");t=t?JSON.parse(t):{};var e=document.getElementById("sociallinks");e?e.innerHTML="":console.error('Missing <div id="sociallinks"></div> on page');new te({target:document.getElementById("sociallinks"),props:t})}))})();