!function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=246)}([function(t,n,e){"use strict";e.d(n,"c",(function(){return r})),e.d(n,"e",(function(){return i})),e.d(n,"d",(function(){return o})),e.d(n,"t",(function(){return d})),e.d(n,"u",(function(){return p})),e.d(n,"fb",(function(){return v})),e.d(n,"L",(function(){return g})),e.d(n,"cb",(function(){return m})),e.d(n,"o",(function(){return y})),e.d(n,"H",(function(){return w})),e.d(n,"a",(function(){return _})),e.d(n,"b",(function(){return x})),e.d(n,"K",(function(){return E})),e.d(n,"N",(function(){return P})),e.d(n,"O",(function(){return L})),e.d(n,"P",(function(){return z})),e.d(n,"Q",(function(){return U})),e.d(n,"gb",(function(){return q})),e.d(n,"hb",(function(){return $})),e.d(n,"ib",(function(){return W})),e.d(n,"jb",(function(){return V})),e.d(n,"S",(function(){return Y})),e.d(n,"db",(function(){return H})),e.d(n,"f",(function(){return G})),e.d(n,"g",(function(){return X})),e.d(n,"h",(function(){return Z})),e.d(n,"i",(function(){return et})),e.d(n,"j",(function(){return rt})),e.d(n,"k",(function(){return c})),e.d(n,"l",(function(){return it})),e.d(n,"m",(function(){return ot})),e.d(n,"n",(function(){return ut})),e.d(n,"p",(function(){return lt})),e.d(n,"q",(function(){return f})),e.d(n,"r",(function(){return ft})),e.d(n,"s",(function(){return st})),e.d(n,"v",(function(){return ht})),e.d(n,"w",(function(){return dt})),e.d(n,"x",(function(){return A})),e.d(n,"y",(function(){return pt})),e.d(n,"z",(function(){return vt})),e.d(n,"A",(function(){return J})),e.d(n,"B",(function(){return gt})),e.d(n,"C",(function(){return O})),e.d(n,"D",(function(){return mt})),e.d(n,"E",(function(){return yt})),e.d(n,"F",(function(){return bt})),e.d(n,"G",(function(){return _t})),e.d(n,"I",(function(){return xt})),e.d(n,"J",(function(){return wt})),e.d(n,"M",(function(){return Ot})),e.d(n,"R",(function(){return S})),e.d(n,"T",(function(){return kt})),e.d(n,"U",(function(){return l})),e.d(n,"V",(function(){return Et})),e.d(n,"W",(function(){return Mt})),e.d(n,"X",(function(){return St})),e.d(n,"Y",(function(){return C})),e.d(n,"ab",(function(){return Ct})),e.d(n,"Z",(function(){return Ft})),e.d(n,"bb",(function(){return Dt})),e.d(n,"eb",(function(){return Nt}));var r=function(t,n,e){return t.fields=n||[],t.fname=e,t};function i(t){return null==t?null:t.fname}function o(t){return null==t?null:t.fields}var u=function(t){return 1===t.length?a(t[0]):s(t)};const a=t=>function(n){return n[t]},s=t=>{const n=t.length;return function(e){for(let r=0;r<n;++r)e=e[t[r]];return e}};var c=function(t){throw Error(t)},l=function(t){var n,e,r,i=[],o=null,u=0,a=t.length,s="";function l(){i.push(s+t.substring(n,e)),s="",n=e+1}for(t+="",n=e=0;e<a;++e)if("\\"===(r=t[e]))s+=t.substring(n,e),s+=t.substring(++e,++e),n=e;else if(r===o)l(),o=null,u=-1;else{if(o)continue;n===u&&'"'===r||n===u&&"'"===r?(n=e+1,o=r):"."!==r||u?"["===r?(e>n&&l(),u=n=e+1):"]"===r&&(u||c("Access path missing open bracket: "+t),u>0&&l(),u=0,n=e+1):e>n?l():n=e+1}return u&&c("Access path missing closing bracket: "+t),o&&c("Access path missing closing quote: "+t),e>n&&(e++,l()),i},f=function(t,n,e){const i=l(t);return t=1===i.length?i[0]:t,r((e&&e.get||u)(i),[t],n||t)},h=[],d=f("id"),p=r((function(t){return t}),h,"identity"),v=r((function(){return 0}),h,"zero"),g=r((function(){return 1}),h,"one"),m=r((function(){return!0}),h,"true"),y=r((function(){return!1}),h,"false");function b(t,n,e){var r=[n].concat([].slice.call(e));console[t].apply(console,r)}var _=1,x=3,w=function(t,n){var e=t||0;return{level:function(t){return arguments.length?(e=+t,this):e},error:function(){return e>=_&&b(n||"error","ERROR",arguments),this},warn:function(){return e>=2&&b(n||"warn","WARN",arguments),this},info:function(){return e>=x&&b(n||"log","INFO",arguments),this},debug:function(){return e>=4&&b(n||"log","DEBUG",arguments),this}}},A=Array.isArray,O=function(t){return t===Object(t)};const k=t=>"__proto__"!==t;function E(...t){return t.reduce((t,n)=>{for(var e in n)if("signals"===e)t.signals=j(t.signals,n.signals);else{var r="legend"===e?{layout:1}:"style"===e||null;M(t,e,n[e],r)}return t},{})}function M(t,n,e,r){var i,o;if(k(n))if(O(e)&&!A(e))for(i in o=O(t[n])?t[n]:t[n]={},e)r&&(!0===r||r[i])?M(o,i,e[i]):k(i)&&(o[i]=e[i]);else t[n]=e}function j(t,n){if(null==t)return n;const e={},r=[];function i(t){e[t.name]||(e[t.name]=1,r.push(t))}return n.forEach(i),t.forEach(i),r}var S=function(t){return t[t.length-1]},C=function(t){return null==t||""===t?null:+t};function F(t){return function(n){return t*Math.exp(n)}}function D(t){return function(n){return Math.log(t*n)}}function N(t){return function(n){return Math.sign(n)*Math.log1p(Math.abs(n/t))}}function R(t){return function(n){return Math.sign(n)*Math.expm1(Math.abs(n))*t}}function T(t){return function(n){return n<0?-Math.pow(-n,t):Math.pow(n,t)}}function B(t,n,e,r){var i=e(t[0]),o=e(S(t)),u=(o-i)*n;return[r(i-u),r(o-u)]}function P(t,n){return B(t,n,C,p)}function L(t,n){var e=Math.sign(t[0]);return B(t,n,D(e),F(e))}function z(t,n,e){return B(t,n,T(e),T(1/e))}function U(t,n,e){return B(t,n,N(e),R(e))}function I(t,n,e,r,i){var o=r(t[0]),u=r(S(t)),a=null!=n?r(n):(o+u)/2;return[i(a+(o-a)*e),i(a+(u-a)*e)]}function q(t,n,e){return I(t,n,e,C,p)}function $(t,n,e){var r=Math.sign(t[0]);return I(t,n,e,D(r),F(r))}function W(t,n,e,r){return I(t,n,e,T(r),T(1/r))}function V(t,n,e,r){return I(t,n,e,N(r),R(r))}function Y(t){return 1+~~(new Date(t).getMonth()/3)}function H(t){return 1+~~(new Date(t).getUTCMonth()/3)}var G=function(t){return null!=t?A(t)?t:[t]:[]},X=function(t,n,e){var r,i=t[0],o=t[1];return o<i&&(r=o,o=i,i=r),(r=o-i)>=e-n?[n,e]:[i=Math.min(Math.max(i,n),e-r),i+r]},J=function(t){return"function"==typeof t};var Z=function(t,n,e){e=e||{},n=G(n)||[];const i=[],u=[],a={},s=e.comparator||Q;return G(t).forEach((t,r)=>{null!=t&&(i.push("descending"===n[r]?-1:1),u.push(t=J(t)?t:f(t,null,e)),(o(t)||[]).forEach(t=>a[t]=1))}),0===u.length?null:r(s(u,i),Object.keys(a))};const K=(t,n)=>(t<n||null==t)&&null!=n?-1:(t>n||null==n)&&null!=t?1:(n=n instanceof Date?+n:n,(t=t instanceof Date?+t:t)!==t&&n==n?-1:n!=n&&t==t?1:0),Q=(t,n)=>1===t.length?tt(t[0],n[0]):nt(t,n,t.length),tt=(t,n)=>function(e,r){return K(t(e),t(r))*n},nt=(t,n,e)=>(n.push(0),function(r,i){let o,u=0,a=-1;for(;0===u&&++a<e;)o=t[a],u=K(o(r),o(i));return u*n[a]});var et=function(t){return J(t)?t:function(){return t}},rt=function(t,n){var e,r;function i(){n(r),e=r=null}return function(n){r=n,e&&clearTimeout(e),e=setTimeout(i,t)}},it=function(t){for(var n,e,r=1,i=arguments.length;r<i;++r)for(e in n=arguments[r])t[e]=n[e];return t},ot=function(t,n){var e,r,i,o,u=0;if(t&&(e=t.length))if(null==n){for(r=t[u];u<e&&(null==r||r!=r);r=t[++u]);for(i=o=r;u<e;++u)null!=(r=t[u])&&(r<i&&(i=r),r>o&&(o=r))}else{for(r=n(t[u]);u<e&&(null==r||r!=r);r=n(t[++u]));for(i=o=r;u<e;++u)null!=(r=n(t[u]))&&(r<i&&(i=r),r>o&&(o=r))}return[i,o]},ut=function(t,n){var e,r,i,o,u,a=-1,s=t.length;if(null==n){for(;++a<s;)if(null!=(r=t[a])&&r>=r){e=i=r;break}if(a===s)return[-1,-1];for(o=u=a;++a<s;)null!=(r=t[a])&&(e>r&&(e=r,o=a),i<r&&(i=r,u=a))}else{for(;++a<s;)if(null!=(r=n(t[a],a,t))&&r>=r){e=i=r;break}if(a===s)return[-1,-1];for(o=u=a;++a<s;)null!=(r=n(t[a],a,t))&&(e>r&&(e=r,o=a),i<r&&(i=r,u=a))}return[o,u]};const at=Object.prototype.hasOwnProperty;var st=function(t,n){return at.call(t,n)},ct={},lt=function(t){var n,e,r={};function i(t){return st(r,t)&&r[t]!==ct}return n={size:0,empty:0,object:r,has:i,get:t=>i(t)?r[t]:void 0,set(t,e){return i(t)||(++n.size,r[t]===ct&&--n.empty),r[t]=e,this},delete(t){return i(t)&&(--n.size,++n.empty,r[t]=ct),this},clear(){n.size=n.empty=0,n.object=r={}},test(t){return arguments.length?(e=t,n):e},clean(){var t,i,o={},u=0;for(t in r)(i=r[t])===ct||e&&e(i)||(o[t]=i,++u);n.size=u,n.empty=0,n.object=r=o}},t&&Object.keys(t).forEach((function(e){n.set(e,t[e])})),n},ft=function(t,n,e,r,i,o){if(!e&&0!==e)return o;var u,a,s=t[0],c=S(t),l=+e;return c<s&&(u=s,s=c,c=u),(u=Math.abs(n-s))<(a=Math.abs(c-n))&&u<=l?r:a<=l?i:o},ht=function(t,n){var e=t.prototype=Object.create(n.prototype);return e.constructor=t,e},dt=function(t,n,e,r){var i,o=n[0],u=n[n.length-1];return o>u&&(i=o,o=u,u=i),r=void 0===r||r,((e=void 0===e||e)?o<=t:o<t)&&(r?t<=u:t<u)},pt=function(t){return"boolean"==typeof t},vt=function(t){return"[object Date]"===Object.prototype.toString.call(t)},gt=function(t){return"number"==typeof t},mt=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},yt=function(t){return"string"==typeof t},bt=function(t,n,e){t&&(t=n?G(t).map(t=>t.replace(/\\(.)/g,"$1")):G(t));const i=t&&t.length,o=e&&e.get||u,a=t=>o(n?[t]:l(t));let s;if(i)if(1===i){const n=a(t[0]);s=function(t){return""+n(t)}}else{const n=t.map(a);s=function(t){let e=""+n[0](t),r=0;for(;++r<i;)e+="|"+n[r](t);return e}}else s=function(){return""};return r(s,t,"key")},_t=function(t,n){const e=t[0],r=S(t),i=+n;return i?1===i?r:e+i*(r-e):e};var xt=function(t){let n,e,r;t=+t||1e4;const i=()=>{n={},e={},r=0},o=(i,o)=>(++r>t&&(e=n,n={},r=1),n[i]=o);return i(),{clear:i,has:t=>st(n,t)||st(e,t),get:t=>st(n,t)?n[t]:st(e,t)?o(t,e[t]):void 0,set:(t,e)=>st(n,t)?n[t]=e:o(t,e)}},wt=function(t,n,e,r){var i=n.length,o=e.length;if(!o)return n;if(!i)return e;for(var u=r||new n.constructor(i+o),a=0,s=0,c=0;a<i&&s<o;++c)u[c]=t(n[a],e[s])>0?e[s++]:n[a++];for(;a<i;++a,++c)u[c]=n[a];for(;s<o;++s,++c)u[c]=e[s];return u},At=function(t,n){for(var e="";--n>=0;)e+=t;return e},Ot=function(t,n,e,r){var i=e||" ",o=t+"",u=n-o.length;return u<=0?o:"left"===r?At(i,u)+o:"center"===r?At(i,~~(u/2))+o+At(i,Math.ceil(u/2)):o+At(i,u)},kt=function(t){return t&&S(t)-t[0]||0};function Et(t){return A(t)?"["+t.map(Et)+"]":O(t)||yt(t)?JSON.stringify(t).replace("\u2028","\\u2028").replace("\u2029","\\u2029"):t}var Mt=function(t){return null==t||""===t?null:!(!t||"false"===t||"0"===t)&&!!t};function jt(t){return gt(t)||vt(t)?t:Date.parse(t)}var St=function(t,n){return n=n||jt,null==t||""===t?null:n(t)},Ct=function(t){return null==t||""===t?null:t+""},Ft=function(t){for(var n={},e=0,r=t.length;e<r;++e)n[t[e]]=!0;return n},Dt=function(t,n,e,r){var i=null!=r?r:"…",o=t+"",u=o.length,a=Math.max(0,n-i.length);return u<=n?o:"left"===e?i+o.slice(u-a):"center"===e?o.slice(0,Math.ceil(a/2))+i+o.slice(u-~~(a/2)):o.slice(0,a)+i},Nt=function(t,n,e){if(t)if(n)for(var r,i=0,o=t.length;i<o;++i)(r=n(t[i]))&&e(r,i,t);else t.forEach(e)}},function(t,n,e){var r=e(2),i=e(9),o=e(19),u=e(16),a=e(25),s=function(t,n,e){var c,l,f,h,d=t&s.F,p=t&s.G,v=t&s.S,g=t&s.P,m=t&s.B,y=p?r:v?r[n]||(r[n]={}):(r[n]||{}).prototype,b=p?i:i[n]||(i[n]={}),_=b.prototype||(b.prototype={});for(c in p&&(e=n),e)f=((l=!d&&y&&void 0!==y[c])?y:e)[c],h=m&&l?a(f,r):g&&"function"==typeof f?a(Function.call,f):f,y&&u(y,c,f,t&s.U),b[c]!=f&&o(b,c,h),g&&_[c]!=f&&(_[c]=f)};r.core=i,s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(5);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},,function(t,n,e){var r=e(86)("wks"),i=e(45),o=e(2).Symbol,u="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=u&&o[t]||(u?o:i)("Symbol."+t))}).store=r},function(t,n,e){var r=e(27),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,n){var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(435);t.exports=r},function(t,n,e){t.exports=!e(3)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(4),i=e(164),o=e(39),u=Object.defineProperty;n.f=e(11)?Object.defineProperty:function(t,n,e){if(r(t),n=o(n,!0),r(e),i)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=e(100),o=e(448),u=e(449);r=i()?u:o,t.exports=r},,function(t,n,e){var r=e(33);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(2),i=e(19),o=e(18),u=e(45)("src"),a=e(251),s=(""+a).split("toString");e(9).inspectSource=function(t){return a.call(t)},(t.exports=function(t,n,e,a){var c="function"==typeof e;c&&(o(e,"name")||i(e,"name",n)),t[n]!==e&&(c&&(o(e,u)||i(e,u,t[n]?""+t[n]:s.join(String(n)))),t===r?t[n]=e:a?t[n]?t[n]=e:i(t,n,e):(delete t[n],i(t,n,e)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[u]||a.call(this)}))},function(t,n,e){var r=e(1),i=e(3),o=e(33),u=/"/g,a=function(t,n,e,r){var i=String(o(t)),a="<"+n;return""!==e&&(a+=" "+e+'="'+String(r).replace(u,"&quot;")+'"'),a+">"+i+"</"+n+">"};t.exports=function(t,n){var e={};e[t]=n(a),r(r.P+r.F*i((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3})),"String",e)}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(12),i=e(44);t.exports=e(11)?function(t,n,e){return r.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(69),i=e(33);t.exports=function(t){return r(i(t))}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(450);t.exports=r},function(t,n,e){"use strict";var r=e(3);t.exports=function(t,n){return!!t&&r((function(){n?t.call(null,(function(){}),1):t.call(null)}))}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=Number.POSITIVE_INFINITY;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(506);t.exports=r},function(t,n,e){var r=e(26);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(70),i=e(44),o=e(20),u=e(39),a=e(18),s=e(164),c=Object.getOwnPropertyDescriptor;n.f=e(11)?c:function(t,n){if(t=o(t),n=u(n,!0),s)try{return c(t,n)}catch(t){}if(a(t,n))return i(!r.f.call(t,n),t[n])}},function(t,n,e){var r=e(1),i=e(9),o=e(3);t.exports=function(t,n){var e=(i.Object||{})[t]||Object[t],u={};u[t]=n(e),r(r.S+r.F*o((function(){e(1)})),"Object",u)}},function(t,n,e){var r=e(25),i=e(69),o=e(15),u=e(8),a=e(180);t.exports=function(t,n){var e=1==t,s=2==t,c=3==t,l=4==t,f=6==t,h=5==t||f,d=n||a;return function(n,a,p){for(var v,g,m=o(n),y=i(m),b=r(a,p,3),_=u(y.length),x=0,w=e?d(n,_):s?d(n,0):void 0;_>x;x++)if((h||x in y)&&(g=b(v=y[x],x,m),t))if(e)w[x]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return x;case 2:w.push(v)}else if(l)return!1;return f?-1:c||l?l:w}}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=e(497),o=e(500),u=e(501);r=i()?o:u,t.exports=r},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){"use strict";if(e(11)){var r=e(46),i=e(2),o=e(3),u=e(1),a=e(97),s=e(141),c=e(25),l=e(64),f=e(44),h=e(19),d=e(65),p=e(27),v=e(8),g=e(191),m=e(48),y=e(39),b=e(18),_=e(71),x=e(5),w=e(15),A=e(133),O=e(49),k=e(51),E=e(50).f,M=e(135),j=e(45),S=e(7),C=e(30),F=e(87),D=e(72),N=e(137),R=e(62),T=e(90),B=e(63),P=e(136),L=e(182),z=e(12),U=e(28),I=z.f,q=U.f,$=i.RangeError,W=i.TypeError,V=i.Uint8Array,Y=Array.prototype,H=s.ArrayBuffer,G=s.DataView,X=C(0),J=C(2),Z=C(3),K=C(4),Q=C(5),tt=C(6),nt=F(!0),et=F(!1),rt=N.values,it=N.keys,ot=N.entries,ut=Y.lastIndexOf,at=Y.reduce,st=Y.reduceRight,ct=Y.join,lt=Y.sort,ft=Y.slice,ht=Y.toString,dt=Y.toLocaleString,pt=S("iterator"),vt=S("toStringTag"),gt=j("typed_constructor"),mt=j("def_constructor"),yt=a.CONSTR,bt=a.TYPED,_t=a.VIEW,xt=C(1,(function(t,n){return Et(D(t,t[mt]),n)})),wt=o((function(){return 1===new V(new Uint16Array([1]).buffer)[0]})),At=!!V&&!!V.prototype.set&&o((function(){new V(1).set({})})),Ot=function(t,n){var e=p(t);if(e<0||e%n)throw $("Wrong offset!");return e},kt=function(t){if(x(t)&&bt in t)return t;throw W(t+" is not a typed array!")},Et=function(t,n){if(!x(t)||!(gt in t))throw W("It is not a typed array constructor!");return new t(n)},Mt=function(t,n){return jt(D(t,t[mt]),n)},jt=function(t,n){for(var e=0,r=n.length,i=Et(t,r);r>e;)i[e]=n[e++];return i},St=function(t,n,e){I(t,n,{get:function(){return this._d[e]}})},Ct=function(t){var n,e,r,i,o,u,a=w(t),s=arguments.length,l=s>1?arguments[1]:void 0,f=void 0!==l,h=M(a);if(null!=h&&!A(h)){for(u=h.call(a),r=[],n=0;!(o=u.next()).done;n++)r.push(o.value);a=r}for(f&&s>2&&(l=c(l,arguments[2],2)),n=0,e=v(a.length),i=Et(this,e);e>n;n++)i[n]=f?l(a[n],n):a[n];return i},Ft=function(){for(var t=0,n=arguments.length,e=Et(this,n);n>t;)e[t]=arguments[t++];return e},Dt=!!V&&o((function(){dt.call(new V(1))})),Nt=function(){return dt.apply(Dt?ft.call(kt(this)):kt(this),arguments)},Rt={copyWithin:function(t,n){return L.call(kt(this),t,n,arguments.length>2?arguments[2]:void 0)},every:function(t){return K(kt(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){return P.apply(kt(this),arguments)},filter:function(t){return Mt(this,J(kt(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return Q(kt(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return tt(kt(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){X(kt(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return et(kt(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return nt(kt(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){return ct.apply(kt(this),arguments)},lastIndexOf:function(t){return ut.apply(kt(this),arguments)},map:function(t){return xt(kt(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){return at.apply(kt(this),arguments)},reduceRight:function(t){return st.apply(kt(this),arguments)},reverse:function(){for(var t,n=kt(this).length,e=Math.floor(n/2),r=0;r<e;)t=this[r],this[r++]=this[--n],this[n]=t;return this},some:function(t){return Z(kt(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return lt.call(kt(this),t)},subarray:function(t,n){var e=kt(this),r=e.length,i=m(t,r);return new(D(e,e[mt]))(e.buffer,e.byteOffset+i*e.BYTES_PER_ELEMENT,v((void 0===n?r:m(n,r))-i))}},Tt=function(t,n){return Mt(this,ft.call(kt(this),t,n))},Bt=function(t){kt(this);var n=Ot(arguments[1],1),e=this.length,r=w(t),i=v(r.length),o=0;if(i+n>e)throw $("Wrong length!");for(;o<i;)this[n+o]=r[o++]},Pt={entries:function(){return ot.call(kt(this))},keys:function(){return it.call(kt(this))},values:function(){return rt.call(kt(this))}},Lt=function(t,n){return x(t)&&t[bt]&&"symbol"!=typeof n&&n in t&&String(+n)==String(n)},zt=function(t,n){return Lt(t,n=y(n,!0))?f(2,t[n]):q(t,n)},Ut=function(t,n,e){return!(Lt(t,n=y(n,!0))&&x(e)&&b(e,"value"))||b(e,"get")||b(e,"set")||e.configurable||b(e,"writable")&&!e.writable||b(e,"enumerable")&&!e.enumerable?I(t,n,e):(t[n]=e.value,t)};yt||(U.f=zt,z.f=Ut),u(u.S+u.F*!yt,"Object",{getOwnPropertyDescriptor:zt,defineProperty:Ut}),o((function(){ht.call({})}))&&(ht=dt=function(){return ct.call(this)});var It=d({},Rt);d(It,Pt),h(It,pt,Pt.values),d(It,{slice:Tt,set:Bt,constructor:function(){},toString:ht,toLocaleString:Nt}),St(It,"buffer","b"),St(It,"byteOffset","o"),St(It,"byteLength","l"),St(It,"length","e"),I(It,vt,{get:function(){return this[bt]}}),t.exports=function(t,n,e,s){var c=t+((s=!!s)?"Clamped":"")+"Array",f="get"+t,d="set"+t,p=i[c],m=p||{},y=p&&k(p),b=!p||!a.ABV,w={},A=p&&p.prototype,M=function(t,e){I(t,e,{get:function(){return function(t,e){var r=t._d;return r.v[f](e*n+r.o,wt)}(this,e)},set:function(t){return function(t,e,r){var i=t._d;s&&(r=(r=Math.round(r))<0?0:r>255?255:255&r),i.v[d](e*n+i.o,r,wt)}(this,e,t)},enumerable:!0})};b?(p=e((function(t,e,r,i){l(t,p,c,"_d");var o,u,a,s,f=0,d=0;if(x(e)){if(!(e instanceof H||"ArrayBuffer"==(s=_(e))||"SharedArrayBuffer"==s))return bt in e?jt(p,e):Ct.call(p,e);o=e,d=Ot(r,n);var m=e.byteLength;if(void 0===i){if(m%n)throw $("Wrong length!");if((u=m-d)<0)throw $("Wrong length!")}else if((u=v(i)*n)+d>m)throw $("Wrong length!");a=u/n}else a=g(e),o=new H(u=a*n);for(h(t,"_d",{b:o,o:d,l:u,e:a,v:new G(o)});f<a;)M(t,f++)})),A=p.prototype=O(It),h(A,"constructor",p)):o((function(){p(1)}))&&o((function(){new p(-1)}))&&T((function(t){new p,new p(null),new p(1.5),new p(t)}),!0)||(p=e((function(t,e,r,i){var o;return l(t,p,c),x(e)?e instanceof H||"ArrayBuffer"==(o=_(e))||"SharedArrayBuffer"==o?void 0!==i?new m(e,Ot(r,n),i):void 0!==r?new m(e,Ot(r,n)):new m(e):bt in e?jt(p,e):Ct.call(p,e):new m(g(e))})),X(y!==Function.prototype?E(m).concat(E(y)):E(m),(function(t){t in p||h(p,t,m[t])})),p.prototype=A,r||(A.constructor=p));var j=A[pt],S=!!j&&("values"==j.name||null==j.name),C=Pt.values;h(p,gt,!0),h(A,bt,c),h(A,_t,!0),h(A,mt,p),(s?new p(1)[vt]==c:vt in A)||I(A,vt,{get:function(){return c}}),w[c]=p,u(u.G+u.W+u.F*(p!=m),w),u(u.S,c,{BYTES_PER_ELEMENT:n}),u(u.S+u.F*o((function(){m.of.call(p,1)})),c,{from:Ct,of:Ft}),"BYTES_PER_ELEMENT"in A||h(A,"BYTES_PER_ELEMENT",n),u(u.P,c,Rt),B(c),u(u.P+u.F*At,c,{set:Bt}),u(u.P+u.F*!S,c,Pt),r||A.toString==ht||(A.toString=ht),u(u.P+u.F*o((function(){new p(1).slice()})),c,{slice:Tt}),u(u.P+u.F*(o((function(){return[1,2].toLocaleString()!=new p([1,2]).toLocaleString()}))||!o((function(){A.toLocaleString.call([1,2])}))),c,{toLocaleString:Nt}),R[c]=S?j:C,r||S||h(A,pt,C)}}else t.exports=function(){}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=e(215),o=e(523),u=e(524);r=i()?o:u,t.exports=r},,,,function(t,n,e){var r=e(5);t.exports=function(t,n){if(!r(t))return t;var e,i;if(n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;if("function"==typeof(e=t.valueOf)&&!r(i=e.call(t)))return i;if(!n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(45)("meta"),i=e(5),o=e(18),u=e(12).f,a=0,s=Object.isExtensible||function(){return!0},c=!e(3)((function(){return s(Object.preventExtensions({}))})),l=function(t){u(t,r,{value:{i:"O"+ ++a,w:{}}})},f=t.exports={KEY:r,NEED:!1,fastKey:function(t,n){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!s(t))return"F";if(!n)return"E";l(t)}return t[r].i},getWeak:function(t,n){if(!o(t,r)){if(!s(t))return!0;if(!n)return!1;l(t)}return t[r].w},onFreeze:function(t){return c&&f.NEED&&s(t)&&!o(t,r)&&l(t),t}}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(456);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(146).NEGATIVE_INFINITY;t.exports=r},,function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports=!1},function(t,n,e){var r=e(166),i=e(120);t.exports=Object.keys||function(t){return r(t,i)}},function(t,n,e){var r=e(27),i=Math.max,o=Math.min;t.exports=function(t,n){return(t=r(t))<0?i(t+n,0):o(t,n)}},function(t,n,e){var r=e(4),i=e(167),o=e(120),u=e(119)("IE_PROTO"),a=function(){},s=function(){var t,n=e(117)("iframe"),r=o.length;for(n.style.display="none",e(121).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[o[r]];return s()};t.exports=Object.create||function(t,n){var e;return null!==t?(a.prototype=r(t),e=new a,a.prototype=null,e[u]=t):e=s(),void 0===n?e:i(e,n)}},function(t,n,e){var r=e(166),i=e(120).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},function(t,n,e){var r=e(18),i=e(15),o=e(119)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){var r=e(7)("unscopables"),i=Array.prototype;null==i[r]&&e(19)(i,r,{}),t.exports=function(t){i[r][t]=!0}},function(t,n,e){var r=e(5);t.exports=function(t,n){if(!r(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(10),i=e(492),o=e(207),u=e(211);r(i,"isPrimitive",o),r(i,"isObject",u),t.exports=i},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(10),i=e(493),o=e(208),u=e(209);r(i,"isPrimitive",o),r(i,"isObject",u),t.exports=i},,,,,function(t,n,e){var r=e(12).f,i=e(18),o=e(7)("toStringTag");t.exports=function(t,n,e){t&&!i(t=e?t:t.prototype,o)&&r(t,o,{configurable:!0,value:n})}},function(t,n,e){var r=e(1),i=e(33),o=e(3),u=e(123),a="["+u+"]",s=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),l=function(t,n,e){var i={},a=o((function(){return!!u[t]()||"​"!="​"[t]()})),s=i[t]=a?n(f):u[t];e&&(i[e]=s),r(r.P+r.F*a,"String",i)},f=l.trim=function(t,n){return t=String(i(t)),1&n&&(t=t.replace(s,"")),2&n&&(t=t.replace(c,"")),t};t.exports=l},function(t,n){t.exports={}},function(t,n,e){"use strict";var r=e(2),i=e(12),o=e(11),u=e(7)("species");t.exports=function(t){var n=r[t];o&&n&&!n[u]&&i.f(n,u,{configurable:!0,get:function(){return this}})}},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){var r=e(16);t.exports=function(t,n,e){for(var i in n)r(t,i,n[i],e);return t}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(486);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(616);t.exports=r},,function(t,n,e){var r=e(32);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(32),i=e(7)("toStringTag"),o="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?e:o?r(n):"Object"==(u=r(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n,e){var r=e(4),i=e(26),o=e(7)("species");t.exports=function(t,n){var e,u=r(t).constructor;return void 0===u||null==(e=r(u)[o])?n:i(e)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(444);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(453);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(454);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(455);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(472);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(477);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(483);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(487);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=4294967295},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(511);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=1023},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(614);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(10),i=e(452);r(i,"factory",e(199)),t.exports=i},function(t,n,e){var r=e(9),i=e(2),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(46)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(20),i=e(8),o=e(48);t.exports=function(t){return function(n,e,u){var a,s=r(n),c=i(s.length),l=o(u,c);if(t&&e!=e){for(;c>l;)if((a=s[l++])!=a)return!0}else for(;c>l;l++)if((t||l in s)&&s[l]===e)return t||l||0;return!t&&-1}}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(32);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(7)("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!i)return!1;var e=!1;try{var o=[7],u=o[r]();u.next=function(){return{done:e=!0}},o[r]=function(){return u},t(o)}catch(t){}return e}},function(t,n,e){"use strict";var r=e(4);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,e){"use strict";var r=e(71),i=RegExp.prototype.exec;t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var o=e.call(t,n);if("object"!=typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,n)}},function(t,n,e){"use strict";e(184);var r=e(16),i=e(19),o=e(3),u=e(33),a=e(7),s=e(138),c=a("species"),l=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();t.exports=function(t,n,e){var h=a(t),d=!o((function(){var n={};return n[h]=function(){return 7},7!=""[t](n)})),p=d?!o((function(){var n=!1,e=/a/;return e.exec=function(){return n=!0,null},"split"===t&&(e.constructor={},e.constructor[c]=function(){return e}),e[h](""),!n})):void 0;if(!d||!p||"replace"===t&&!l||"split"===t&&!f){var v=/./[h],g=e(u,h,""[t],(function(t,n,e,r,i){return n.exec===s?d&&!i?{done:!0,value:v.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}})),m=g[0],y=g[1];r(String.prototype,t,m),i(RegExp.prototype,h,2==n?function(t,n){return y.call(t,this,n)}:function(t){return y.call(t,this)})}}},function(t,n,e){var r=e(25),i=e(179),o=e(133),u=e(4),a=e(8),s=e(135),c={},l={};(n=t.exports=function(t,n,e,f,h){var d,p,v,g,m=h?function(){return t}:s(t),y=r(e,f,n?2:1),b=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(o(m)){for(d=a(t.length);d>b;b++)if((g=n?y(u(p=t[b])[0],p[1]):y(t[b]))===c||g===l)return g}else for(v=m.call(t);!(p=v.next()).done;)if((g=i(v,y,p.value,n))===c||g===l)return g}).BREAK=c,n.RETURN=l},function(t,n,e){var r=e(2).navigator;t.exports=r&&r.userAgent||""},function(t,n,e){"use strict";var r=e(2),i=e(1),o=e(16),u=e(65),a=e(40),s=e(94),c=e(64),l=e(5),f=e(3),h=e(90),d=e(60),p=e(124);t.exports=function(t,n,e,v,g,m){var y=r[t],b=y,_=g?"set":"add",x=b&&b.prototype,w={},A=function(t){var n=x[t];o(x,t,"delete"==t||"has"==t?function(t){return!(m&&!l(t))&&n.call(this,0===t?0:t)}:"get"==t?function(t){return m&&!l(t)?void 0:n.call(this,0===t?0:t)}:"add"==t?function(t){return n.call(this,0===t?0:t),this}:function(t,e){return n.call(this,0===t?0:t,e),this})};if("function"==typeof b&&(m||x.forEach&&!f((function(){(new b).entries().next()})))){var O=new b,k=O[_](m?{}:-0,1)!=O,E=f((function(){O.has(1)})),M=h((function(t){new b(t)})),j=!m&&f((function(){for(var t=new b,n=5;n--;)t[_](n,n);return!t.has(-0)}));M||((b=n((function(n,e){c(n,b,t);var r=p(new y,n,b);return null!=e&&s(e,g,r[_],r),r}))).prototype=x,x.constructor=b),(E||j)&&(A("delete"),A("has"),g&&A("get")),(j||k)&&A(_),m&&x.clear&&delete x.clear}else b=v.getConstructor(n,t,g,_),u(b.prototype,e),a.NEED=!0;return d(b,t),w[t]=b,i(i.G+i.W+i.F*(b!=y),w),m||v.setStrong(b,t,g),b}},function(t,n,e){for(var r,i=e(2),o=e(19),u=e(45),a=u("typed_array"),s=u("view"),c=!(!i.ArrayBuffer||!i.DataView),l=c,f=0,h="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");f<9;)(r=i[h[f++]])?(o(r.prototype,a,!0),o(r.prototype,s,!0)):l=!1;t.exports={ABV:c,CONSTR:l,TYPED:a,VIEW:s}},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=e(436),o=e(439),u=e(440);r=i()?o:u,t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(445);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(10),i=e(462),o=e(200),u=e(201);r(i,"isPrimitive",o),r(i,"isObject",u),t.exports=i},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(471);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(482);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(10),i=e(484);r(i,"factory",e(204)),t.exports=i},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(489);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=e(535),o=e(541),u=e(542);r=i()?o:u,t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=e(559),o=e(565),u=e(566);r=i()?o:u,t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(10),i=e(589),o=e(217),u=e(218);r(i,"isPrimitive",o),r(i,"isObject",u),t.exports=i},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(598);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(642);t.exports=r},function(t,n,e){"use strict";(function(t){e.d(n,"a",(function(){return i}));var r=e(0);function i(n,e){const i=e&&e.property?Object(r.q)(e.property):r.u;return!Object(r.C)(n)||(o=n,"function"==typeof t&&Object(r.A)(t.isBuffer)&&t.isBuffer(o))?i(JSON.parse(n)):function(t,n){return n&&n.copy?JSON.parse(JSON.stringify(t)):t}(i(n));var o}i.responseType="json"}).call(this,e(161).Buffer)},,,,,,function(t,n,e){var r=e(5),i=e(2).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,n,e){n.f=e(7)},function(t,n,e){var r=e(86)("keys"),i=e(45);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(2).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(5),i=e(4),o=function(t,n){if(i(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{(r=e(25)(Function.call,e(28).f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,e){return o(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:o}},function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,n,e){var r=e(5),i=e(122).set;t.exports=function(t,n,e){var o,u=n.constructor;return u!==e&&"function"==typeof u&&(o=u.prototype)!==e.prototype&&r(o)&&i&&i(t,o),t}},function(t,n,e){"use strict";var r=e(27),i=e(33);t.exports=function(t){var n=String(i(this)),e="",o=r(t);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(n+=n))1&o&&(e+=n);return e}},function(t,n){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,n){var e=Math.expm1;t.exports=!e||e(10)>22025.465794806718||e(10)<22025.465794806718||-2e-17!=e(-2e-17)?function(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:e},function(t,n,e){var r=e(27),i=e(33);t.exports=function(t){return function(n,e){var o,u,a=String(i(n)),s=r(e),c=a.length;return s<0||s>=c?t?"":void 0:(o=a.charCodeAt(s))<55296||o>56319||s+1===c||(u=a.charCodeAt(s+1))<56320||u>57343?t?a.charAt(s):o:t?a.slice(s,s+2):u-56320+(o-55296<<10)+65536}}},function(t,n,e){"use strict";var r=e(46),i=e(1),o=e(16),u=e(19),a=e(62),s=e(178),c=e(60),l=e(51),f=e(7)("iterator"),h=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,n,e,p,v,g,m){s(e,n,p);var y,b,_,x=function(t){if(!h&&t in k)return k[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},w=n+" Iterator",A="values"==v,O=!1,k=t.prototype,E=k[f]||k["@@iterator"]||v&&k[v],M=E||x(v),j=v?A?x("entries"):M:void 0,S="Array"==n&&k.entries||E;if(S&&(_=l(S.call(new t)))!==Object.prototype&&_.next&&(c(_,w,!0),r||"function"==typeof _[f]||u(_,f,d)),A&&E&&"values"!==E.name&&(O=!0,M=function(){return E.call(this)}),r&&!m||!h&&!O&&k[f]||u(k,f,M),a[n]=M,a[w]=d,v)if(y={values:A?M:x("values"),keys:g?M:x("keys"),entries:j},m)for(b in y)b in k||o(k,b,y[b]);else i(i.P+i.F*(h||O),n,y);return y}},function(t,n,e){var r=e(131),i=e(33);t.exports=function(t,n,e){if(r(n))throw TypeError("String#"+e+" doesn't accept regex!");return String(i(t))}},function(t,n,e){var r=e(5),i=e(32),o=e(7)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[o])?!!n:"RegExp"==i(t))}},function(t,n,e){var r=e(7)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[r]=!1,!"/./"[t](n)}catch(t){}}return!0}},function(t,n,e){var r=e(62),i=e(7)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},function(t,n,e){"use strict";var r=e(12),i=e(44);t.exports=function(t,n,e){n in t?r.f(t,n,i(0,e)):t[n]=e}},function(t,n,e){var r=e(71),i=e(7)("iterator"),o=e(62);t.exports=e(9).getIteratorMethod=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,n,e){"use strict";var r=e(15),i=e(48),o=e(8);t.exports=function(t){for(var n=r(this),e=o(n.length),u=arguments.length,a=i(u>1?arguments[1]:void 0,e),s=u>2?arguments[2]:void 0,c=void 0===s?e:i(s,e);c>a;)n[a++]=t;return n}},function(t,n,e){"use strict";var r=e(52),i=e(183),o=e(62),u=e(20);t.exports=e(129)(Array,"Array",(function(t,n){this._t=u(t),this._i=0,this._k=n}),(function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,i(1)):i(0,"keys"==n?e:"values"==n?t[e]:[e,t[e]])}),"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(t,n,e){"use strict";var r,i,o=e(91),u=RegExp.prototype.exec,a=String.prototype.replace,s=u,c=(r=/a/,i=/b*/g,u.call(r,"a"),u.call(i,"a"),0!==r.lastIndex||0!==i.lastIndex),l=void 0!==/()??/.exec("")[1];(c||l)&&(s=function(t){var n,e,r,i,s=this;return l&&(e=new RegExp("^"+s.source+"$(?!\\s)",o.call(s))),c&&(n=s.lastIndex),r=u.call(s,t),c&&r&&(s.lastIndex=s.global?r.index+r[0].length:n),l&&r&&r.length>1&&a.call(r[0],e,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)})),r}),t.exports=s},function(t,n,e){"use strict";var r=e(128)(!0);t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},function(t,n,e){var r,i,o,u=e(25),a=e(172),s=e(121),c=e(117),l=e(2),f=l.process,h=l.setImmediate,d=l.clearImmediate,p=l.MessageChannel,v=l.Dispatch,g=0,m={},y=function(){var t=+this;if(m.hasOwnProperty(t)){var n=m[t];delete m[t],n()}},b=function(t){y.call(t.data)};h&&d||(h=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return m[++g]=function(){a("function"==typeof t?t:Function(t),n)},r(g),g},d=function(t){delete m[t]},"process"==e(32)(f)?r=function(t){f.nextTick(u(y,t,1))}:v&&v.now?r=function(t){v.now(u(y,t,1))}:p?(o=(i=new p).port2,i.port1.onmessage=b,r=u(o.postMessage,o,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(r=function(t){l.postMessage(t+"","*")},l.addEventListener("message",b,!1)):r="onreadystatechange"in c("script")?function(t){s.appendChild(c("script")).onreadystatechange=function(){s.removeChild(this),y.call(t)}}:function(t){setTimeout(u(y,t,1),0)}),t.exports={set:h,clear:d}},function(t,n,e){"use strict";var r=e(2),i=e(11),o=e(46),u=e(97),a=e(19),s=e(65),c=e(3),l=e(64),f=e(27),h=e(8),d=e(191),p=e(50).f,v=e(12).f,g=e(136),m=e(60),y=r.ArrayBuffer,b=r.DataView,_=r.Math,x=r.RangeError,w=r.Infinity,A=y,O=_.abs,k=_.pow,E=_.floor,M=_.log,j=_.LN2,S=i?"_b":"buffer",C=i?"_l":"byteLength",F=i?"_o":"byteOffset";function D(t,n,e){var r,i,o,u=new Array(e),a=8*e-n-1,s=(1<<a)-1,c=s>>1,l=23===n?k(2,-24)-k(2,-77):0,f=0,h=t<0||0===t&&1/t<0?1:0;for((t=O(t))!=t||t===w?(i=t!=t?1:0,r=s):(r=E(M(t)/j),t*(o=k(2,-r))<1&&(r--,o*=2),(t+=r+c>=1?l/o:l*k(2,1-c))*o>=2&&(r++,o/=2),r+c>=s?(i=0,r=s):r+c>=1?(i=(t*o-1)*k(2,n),r+=c):(i=t*k(2,c-1)*k(2,n),r=0));n>=8;u[f++]=255&i,i/=256,n-=8);for(r=r<<n|i,a+=n;a>0;u[f++]=255&r,r/=256,a-=8);return u[--f]|=128*h,u}function N(t,n,e){var r,i=8*e-n-1,o=(1<<i)-1,u=o>>1,a=i-7,s=e-1,c=t[s--],l=127&c;for(c>>=7;a>0;l=256*l+t[s],s--,a-=8);for(r=l&(1<<-a)-1,l>>=-a,a+=n;a>0;r=256*r+t[s],s--,a-=8);if(0===l)l=1-u;else{if(l===o)return r?NaN:c?-w:w;r+=k(2,n),l-=u}return(c?-1:1)*r*k(2,l-n)}function R(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function T(t){return[255&t]}function B(t){return[255&t,t>>8&255]}function P(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function L(t){return D(t,52,8)}function z(t){return D(t,23,4)}function U(t,n,e){v(t.prototype,n,{get:function(){return this[e]}})}function I(t,n,e,r){var i=d(+e);if(i+n>t[C])throw x("Wrong index!");var o=t[S]._b,u=i+t[F],a=o.slice(u,u+n);return r?a:a.reverse()}function q(t,n,e,r,i,o){var u=d(+e);if(u+n>t[C])throw x("Wrong index!");for(var a=t[S]._b,s=u+t[F],c=r(+i),l=0;l<n;l++)a[s+l]=c[o?l:n-l-1]}if(u.ABV){if(!c((function(){y(1)}))||!c((function(){new y(-1)}))||c((function(){return new y,new y(1.5),new y(NaN),"ArrayBuffer"!=y.name}))){for(var $,W=(y=function(t){return l(this,y),new A(d(t))}).prototype=A.prototype,V=p(A),Y=0;V.length>Y;)($=V[Y++])in y||a(y,$,A[$]);o||(W.constructor=y)}var H=new b(new y(2)),G=b.prototype.setInt8;H.setInt8(0,2147483648),H.setInt8(1,2147483649),!H.getInt8(0)&&H.getInt8(1)||s(b.prototype,{setInt8:function(t,n){G.call(this,t,n<<24>>24)},setUint8:function(t,n){G.call(this,t,n<<24>>24)}},!0)}else y=function(t){l(this,y,"ArrayBuffer");var n=d(t);this._b=g.call(new Array(n),0),this[C]=n},b=function(t,n,e){l(this,b,"DataView"),l(t,y,"DataView");var r=t[C],i=f(n);if(i<0||i>r)throw x("Wrong offset!");if(i+(e=void 0===e?r-i:h(e))>r)throw x("Wrong length!");this[S]=t,this[F]=i,this[C]=e},i&&(U(y,"byteLength","_l"),U(b,"buffer","_b"),U(b,"byteLength","_l"),U(b,"byteOffset","_o")),s(b.prototype,{getInt8:function(t){return I(this,1,t)[0]<<24>>24},getUint8:function(t){return I(this,1,t)[0]},getInt16:function(t){var n=I(this,2,t,arguments[1]);return(n[1]<<8|n[0])<<16>>16},getUint16:function(t){var n=I(this,2,t,arguments[1]);return n[1]<<8|n[0]},getInt32:function(t){return R(I(this,4,t,arguments[1]))},getUint32:function(t){return R(I(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return N(I(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return N(I(this,8,t,arguments[1]),52,8)},setInt8:function(t,n){q(this,1,t,T,n)},setUint8:function(t,n){q(this,1,t,T,n)},setInt16:function(t,n){q(this,2,t,B,n,arguments[2])},setUint16:function(t,n){q(this,2,t,B,n,arguments[2])},setInt32:function(t,n){q(this,4,t,P,n,arguments[2])},setUint32:function(t,n){q(this,4,t,P,n,arguments[2])},setFloat32:function(t,n){q(this,4,t,z,n,arguments[2])},setFloat64:function(t,n){q(this,8,t,L,n,arguments[2])}});m(y,"ArrayBuffer"),m(b,"DataView"),a(b.prototype,u.VIEW,!0),n.ArrayBuffer=y,n.DataView=b},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){t.exports=!e(196)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(457),i=e(470),o=e(476),u=r()?o:i;t.exports=u},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(494);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=e(526),o=e(533),u=e(534);r=i()?o:u,t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=e(543),o=e(548),u=e(549);r=i()?o:u,t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=e(550),o=e(557),u=e(558);r=i()?o:u,t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=e(567),o=e(574),u=e(575);r=i()?o:u,t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=e(576),o=e(581),u=e(582);r=i()?o:u,t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(609);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(611);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(629);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(630);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(631);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(10),i=e(664),o=e(230),u=e(231);r(i,"isPrimitive",o),r(i,"isObject",u),t.exports=i},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t){return Object.keys(Object(t))}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(675);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=e(696),o=e(702),u=e(703);r=i()?o:u,t.exports=r},function(t,n,e){"use strict";(function(t){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
var r=e(699),i=e(700),o=e(701);function u(){return s.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function a(t,n){if(u()<n)throw new RangeError("Invalid typed array length");return s.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(n)).__proto__=s.prototype:(null===t&&(t=new s(n)),t.length=n),t}function s(t,n,e){if(!(s.TYPED_ARRAY_SUPPORT||this instanceof s))return new s(t,n,e);if("number"==typeof t){if("string"==typeof n)throw new Error("If encoding is specified then the first argument must be a string");return f(this,t)}return c(this,t,n,e)}function c(t,n,e,r){if("number"==typeof n)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&n instanceof ArrayBuffer?function(t,n,e,r){if(n.byteLength,e<0||n.byteLength<e)throw new RangeError("'offset' is out of bounds");if(n.byteLength<e+(r||0))throw new RangeError("'length' is out of bounds");n=void 0===e&&void 0===r?new Uint8Array(n):void 0===r?new Uint8Array(n,e):new Uint8Array(n,e,r);s.TYPED_ARRAY_SUPPORT?(t=n).__proto__=s.prototype:t=h(t,n);return t}(t,n,e,r):"string"==typeof n?function(t,n,e){"string"==typeof e&&""!==e||(e="utf8");if(!s.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var r=0|p(n,e),i=(t=a(t,r)).write(n,e);i!==r&&(t=t.slice(0,i));return t}(t,n,e):function(t,n){if(s.isBuffer(n)){var e=0|d(n.length);return 0===(t=a(t,e)).length||n.copy(t,0,0,e),t}if(n){if("undefined"!=typeof ArrayBuffer&&n.buffer instanceof ArrayBuffer||"length"in n)return"number"!=typeof n.length||(r=n.length)!=r?a(t,0):h(t,n);if("Buffer"===n.type&&o(n.data))return h(t,n.data)}var r;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,n)}function l(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function f(t,n){if(l(n),t=a(t,n<0?0:0|d(n)),!s.TYPED_ARRAY_SUPPORT)for(var e=0;e<n;++e)t[e]=0;return t}function h(t,n){var e=n.length<0?0:0|d(n.length);t=a(t,e);for(var r=0;r<e;r+=1)t[r]=255&n[r];return t}function d(t){if(t>=u())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u().toString(16)+" bytes");return 0|t}function p(t,n){if(s.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var r=!1;;)switch(n){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return U(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return I(t).length;default:if(r)return U(t).length;n=(""+n).toLowerCase(),r=!0}}function v(t,n,e){var r=!1;if((void 0===n||n<0)&&(n=0),n>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if((e>>>=0)<=(n>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return S(this,n,e);case"utf8":case"utf-8":return E(this,n,e);case"ascii":return M(this,n,e);case"latin1":case"binary":return j(this,n,e);case"base64":return k(this,n,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return C(this,n,e);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function g(t,n,e){var r=t[n];t[n]=t[e],t[e]=r}function m(t,n,e,r,i){if(0===t.length)return-1;if("string"==typeof e?(r=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=i?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(i)return-1;e=t.length-1}else if(e<0){if(!i)return-1;e=0}if("string"==typeof n&&(n=s.from(n,r)),s.isBuffer(n))return 0===n.length?-1:y(t,n,e,r,i);if("number"==typeof n)return n&=255,s.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,n,e):Uint8Array.prototype.lastIndexOf.call(t,n,e):y(t,[n],e,r,i);throw new TypeError("val must be string, number or Buffer")}function y(t,n,e,r,i){var o,u=1,a=t.length,s=n.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||n.length<2)return-1;u=2,a/=2,s/=2,e/=2}function c(t,n){return 1===u?t[n]:t.readUInt16BE(n*u)}if(i){var l=-1;for(o=e;o<a;o++)if(c(t,o)===c(n,-1===l?0:o-l)){if(-1===l&&(l=o),o-l+1===s)return l*u}else-1!==l&&(o-=o-l),l=-1}else for(e+s>a&&(e=a-s),o=e;o>=0;o--){for(var f=!0,h=0;h<s;h++)if(c(t,o+h)!==c(n,h)){f=!1;break}if(f)return o}return-1}function b(t,n,e,r){e=Number(e)||0;var i=t.length-e;r?(r=Number(r))>i&&(r=i):r=i;var o=n.length;if(o%2!=0)throw new TypeError("Invalid hex string");r>o/2&&(r=o/2);for(var u=0;u<r;++u){var a=parseInt(n.substr(2*u,2),16);if(isNaN(a))return u;t[e+u]=a}return u}function _(t,n,e,r){return q(U(n,t.length-e),t,e,r)}function x(t,n,e,r){return q(function(t){for(var n=[],e=0;e<t.length;++e)n.push(255&t.charCodeAt(e));return n}(n),t,e,r)}function w(t,n,e,r){return x(t,n,e,r)}function A(t,n,e,r){return q(I(n),t,e,r)}function O(t,n,e,r){return q(function(t,n){for(var e,r,i,o=[],u=0;u<t.length&&!((n-=2)<0);++u)e=t.charCodeAt(u),r=e>>8,i=e%256,o.push(i),o.push(r);return o}(n,t.length-e),t,e,r)}function k(t,n,e){return 0===n&&e===t.length?r.fromByteArray(t):r.fromByteArray(t.slice(n,e))}function E(t,n,e){e=Math.min(t.length,e);for(var r=[],i=n;i<e;){var o,u,a,s,c=t[i],l=null,f=c>239?4:c>223?3:c>191?2:1;if(i+f<=e)switch(f){case 1:c<128&&(l=c);break;case 2:128==(192&(o=t[i+1]))&&(s=(31&c)<<6|63&o)>127&&(l=s);break;case 3:o=t[i+1],u=t[i+2],128==(192&o)&&128==(192&u)&&(s=(15&c)<<12|(63&o)<<6|63&u)>2047&&(s<55296||s>57343)&&(l=s);break;case 4:o=t[i+1],u=t[i+2],a=t[i+3],128==(192&o)&&128==(192&u)&&128==(192&a)&&(s=(15&c)<<18|(63&o)<<12|(63&u)<<6|63&a)>65535&&s<1114112&&(l=s)}null===l?(l=65533,f=1):l>65535&&(l-=65536,r.push(l>>>10&1023|55296),l=56320|1023&l),r.push(l),i+=f}return function(t){var n=t.length;if(n<=4096)return String.fromCharCode.apply(String,t);var e="",r=0;for(;r<n;)e+=String.fromCharCode.apply(String,t.slice(r,r+=4096));return e}(r)}n.Buffer=s,n.SlowBuffer=function(t){+t!=t&&(t=0);return s.alloc(+t)},n.INSPECT_MAX_BYTES=50,s.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),n.kMaxLength=u(),s.poolSize=8192,s._augment=function(t){return t.__proto__=s.prototype,t},s.from=function(t,n,e){return c(null,t,n,e)},s.TYPED_ARRAY_SUPPORT&&(s.prototype.__proto__=Uint8Array.prototype,s.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&s[Symbol.species]===s&&Object.defineProperty(s,Symbol.species,{value:null,configurable:!0})),s.alloc=function(t,n,e){return function(t,n,e,r){return l(n),n<=0?a(t,n):void 0!==e?"string"==typeof r?a(t,n).fill(e,r):a(t,n).fill(e):a(t,n)}(null,t,n,e)},s.allocUnsafe=function(t){return f(null,t)},s.allocUnsafeSlow=function(t){return f(null,t)},s.isBuffer=function(t){return!(null==t||!t._isBuffer)},s.compare=function(t,n){if(!s.isBuffer(t)||!s.isBuffer(n))throw new TypeError("Arguments must be Buffers");if(t===n)return 0;for(var e=t.length,r=n.length,i=0,o=Math.min(e,r);i<o;++i)if(t[i]!==n[i]){e=t[i],r=n[i];break}return e<r?-1:r<e?1:0},s.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(t,n){if(!o(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return s.alloc(0);var e;if(void 0===n)for(n=0,e=0;e<t.length;++e)n+=t[e].length;var r=s.allocUnsafe(n),i=0;for(e=0;e<t.length;++e){var u=t[e];if(!s.isBuffer(u))throw new TypeError('"list" argument must be an Array of Buffers');u.copy(r,i),i+=u.length}return r},s.byteLength=p,s.prototype._isBuffer=!0,s.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var n=0;n<t;n+=2)g(this,n,n+1);return this},s.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var n=0;n<t;n+=4)g(this,n,n+3),g(this,n+1,n+2);return this},s.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var n=0;n<t;n+=8)g(this,n,n+7),g(this,n+1,n+6),g(this,n+2,n+5),g(this,n+3,n+4);return this},s.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?E(this,0,t):v.apply(this,arguments)},s.prototype.equals=function(t){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===s.compare(this,t)},s.prototype.inspect=function(){var t="",e=n.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,e).match(/.{2}/g).join(" "),this.length>e&&(t+=" ... ")),"<Buffer "+t+">"},s.prototype.compare=function(t,n,e,r,i){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===n&&(n=0),void 0===e&&(e=t?t.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),n<0||e>t.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&n>=e)return 0;if(r>=i)return-1;if(n>=e)return 1;if(this===t)return 0;for(var o=(i>>>=0)-(r>>>=0),u=(e>>>=0)-(n>>>=0),a=Math.min(o,u),c=this.slice(r,i),l=t.slice(n,e),f=0;f<a;++f)if(c[f]!==l[f]){o=c[f],u=l[f];break}return o<u?-1:u<o?1:0},s.prototype.includes=function(t,n,e){return-1!==this.indexOf(t,n,e)},s.prototype.indexOf=function(t,n,e){return m(this,t,n,e,!0)},s.prototype.lastIndexOf=function(t,n,e){return m(this,t,n,e,!1)},s.prototype.write=function(t,n,e,r){if(void 0===n)r="utf8",e=this.length,n=0;else if(void 0===e&&"string"==typeof n)r=n,e=this.length,n=0;else{if(!isFinite(n))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");n|=0,isFinite(e)?(e|=0,void 0===r&&(r="utf8")):(r=e,e=void 0)}var i=this.length-n;if((void 0===e||e>i)&&(e=i),t.length>0&&(e<0||n<0)||n>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var o=!1;;)switch(r){case"hex":return b(this,t,n,e);case"utf8":case"utf-8":return _(this,t,n,e);case"ascii":return x(this,t,n,e);case"latin1":case"binary":return w(this,t,n,e);case"base64":return A(this,t,n,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return O(this,t,n,e);default:if(o)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),o=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function M(t,n,e){var r="";e=Math.min(t.length,e);for(var i=n;i<e;++i)r+=String.fromCharCode(127&t[i]);return r}function j(t,n,e){var r="";e=Math.min(t.length,e);for(var i=n;i<e;++i)r+=String.fromCharCode(t[i]);return r}function S(t,n,e){var r=t.length;(!n||n<0)&&(n=0),(!e||e<0||e>r)&&(e=r);for(var i="",o=n;o<e;++o)i+=z(t[o]);return i}function C(t,n,e){for(var r=t.slice(n,e),i="",o=0;o<r.length;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1]);return i}function F(t,n,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+n>e)throw new RangeError("Trying to access beyond buffer length")}function D(t,n,e,r,i,o){if(!s.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(n>i||n<o)throw new RangeError('"value" argument is out of bounds');if(e+r>t.length)throw new RangeError("Index out of range")}function N(t,n,e,r){n<0&&(n=65535+n+1);for(var i=0,o=Math.min(t.length-e,2);i<o;++i)t[e+i]=(n&255<<8*(r?i:1-i))>>>8*(r?i:1-i)}function R(t,n,e,r){n<0&&(n=4294967295+n+1);for(var i=0,o=Math.min(t.length-e,4);i<o;++i)t[e+i]=n>>>8*(r?i:3-i)&255}function T(t,n,e,r,i,o){if(e+r>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function B(t,n,e,r,o){return o||T(t,0,e,4),i.write(t,n,e,r,23,4),e+4}function P(t,n,e,r,o){return o||T(t,0,e,8),i.write(t,n,e,r,52,8),e+8}s.prototype.slice=function(t,n){var e,r=this.length;if((t=~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),(n=void 0===n?r:~~n)<0?(n+=r)<0&&(n=0):n>r&&(n=r),n<t&&(n=t),s.TYPED_ARRAY_SUPPORT)(e=this.subarray(t,n)).__proto__=s.prototype;else{var i=n-t;e=new s(i,void 0);for(var o=0;o<i;++o)e[o]=this[o+t]}return e},s.prototype.readUIntLE=function(t,n,e){t|=0,n|=0,e||F(t,n,this.length);for(var r=this[t],i=1,o=0;++o<n&&(i*=256);)r+=this[t+o]*i;return r},s.prototype.readUIntBE=function(t,n,e){t|=0,n|=0,e||F(t,n,this.length);for(var r=this[t+--n],i=1;n>0&&(i*=256);)r+=this[t+--n]*i;return r},s.prototype.readUInt8=function(t,n){return n||F(t,1,this.length),this[t]},s.prototype.readUInt16LE=function(t,n){return n||F(t,2,this.length),this[t]|this[t+1]<<8},s.prototype.readUInt16BE=function(t,n){return n||F(t,2,this.length),this[t]<<8|this[t+1]},s.prototype.readUInt32LE=function(t,n){return n||F(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},s.prototype.readUInt32BE=function(t,n){return n||F(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},s.prototype.readIntLE=function(t,n,e){t|=0,n|=0,e||F(t,n,this.length);for(var r=this[t],i=1,o=0;++o<n&&(i*=256);)r+=this[t+o]*i;return r>=(i*=128)&&(r-=Math.pow(2,8*n)),r},s.prototype.readIntBE=function(t,n,e){t|=0,n|=0,e||F(t,n,this.length);for(var r=n,i=1,o=this[t+--r];r>0&&(i*=256);)o+=this[t+--r]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*n)),o},s.prototype.readInt8=function(t,n){return n||F(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},s.prototype.readInt16LE=function(t,n){n||F(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},s.prototype.readInt16BE=function(t,n){n||F(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},s.prototype.readInt32LE=function(t,n){return n||F(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},s.prototype.readInt32BE=function(t,n){return n||F(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},s.prototype.readFloatLE=function(t,n){return n||F(t,4,this.length),i.read(this,t,!0,23,4)},s.prototype.readFloatBE=function(t,n){return n||F(t,4,this.length),i.read(this,t,!1,23,4)},s.prototype.readDoubleLE=function(t,n){return n||F(t,8,this.length),i.read(this,t,!0,52,8)},s.prototype.readDoubleBE=function(t,n){return n||F(t,8,this.length),i.read(this,t,!1,52,8)},s.prototype.writeUIntLE=function(t,n,e,r){(t=+t,n|=0,e|=0,r)||D(this,t,n,e,Math.pow(2,8*e)-1,0);var i=1,o=0;for(this[n]=255&t;++o<e&&(i*=256);)this[n+o]=t/i&255;return n+e},s.prototype.writeUIntBE=function(t,n,e,r){(t=+t,n|=0,e|=0,r)||D(this,t,n,e,Math.pow(2,8*e)-1,0);var i=e-1,o=1;for(this[n+i]=255&t;--i>=0&&(o*=256);)this[n+i]=t/o&255;return n+e},s.prototype.writeUInt8=function(t,n,e){return t=+t,n|=0,e||D(this,t,n,1,255,0),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[n]=255&t,n+1},s.prototype.writeUInt16LE=function(t,n,e){return t=+t,n|=0,e||D(this,t,n,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[n]=255&t,this[n+1]=t>>>8):N(this,t,n,!0),n+2},s.prototype.writeUInt16BE=function(t,n,e){return t=+t,n|=0,e||D(this,t,n,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[n]=t>>>8,this[n+1]=255&t):N(this,t,n,!1),n+2},s.prototype.writeUInt32LE=function(t,n,e){return t=+t,n|=0,e||D(this,t,n,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[n+3]=t>>>24,this[n+2]=t>>>16,this[n+1]=t>>>8,this[n]=255&t):R(this,t,n,!0),n+4},s.prototype.writeUInt32BE=function(t,n,e){return t=+t,n|=0,e||D(this,t,n,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[n]=t>>>24,this[n+1]=t>>>16,this[n+2]=t>>>8,this[n+3]=255&t):R(this,t,n,!1),n+4},s.prototype.writeIntLE=function(t,n,e,r){if(t=+t,n|=0,!r){var i=Math.pow(2,8*e-1);D(this,t,n,e,i-1,-i)}var o=0,u=1,a=0;for(this[n]=255&t;++o<e&&(u*=256);)t<0&&0===a&&0!==this[n+o-1]&&(a=1),this[n+o]=(t/u>>0)-a&255;return n+e},s.prototype.writeIntBE=function(t,n,e,r){if(t=+t,n|=0,!r){var i=Math.pow(2,8*e-1);D(this,t,n,e,i-1,-i)}var o=e-1,u=1,a=0;for(this[n+o]=255&t;--o>=0&&(u*=256);)t<0&&0===a&&0!==this[n+o+1]&&(a=1),this[n+o]=(t/u>>0)-a&255;return n+e},s.prototype.writeInt8=function(t,n,e){return t=+t,n|=0,e||D(this,t,n,1,127,-128),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[n]=255&t,n+1},s.prototype.writeInt16LE=function(t,n,e){return t=+t,n|=0,e||D(this,t,n,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[n]=255&t,this[n+1]=t>>>8):N(this,t,n,!0),n+2},s.prototype.writeInt16BE=function(t,n,e){return t=+t,n|=0,e||D(this,t,n,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[n]=t>>>8,this[n+1]=255&t):N(this,t,n,!1),n+2},s.prototype.writeInt32LE=function(t,n,e){return t=+t,n|=0,e||D(this,t,n,4,2147483647,-2147483648),s.TYPED_ARRAY_SUPPORT?(this[n]=255&t,this[n+1]=t>>>8,this[n+2]=t>>>16,this[n+3]=t>>>24):R(this,t,n,!0),n+4},s.prototype.writeInt32BE=function(t,n,e){return t=+t,n|=0,e||D(this,t,n,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),s.TYPED_ARRAY_SUPPORT?(this[n]=t>>>24,this[n+1]=t>>>16,this[n+2]=t>>>8,this[n+3]=255&t):R(this,t,n,!1),n+4},s.prototype.writeFloatLE=function(t,n,e){return B(this,t,n,!0,e)},s.prototype.writeFloatBE=function(t,n,e){return B(this,t,n,!1,e)},s.prototype.writeDoubleLE=function(t,n,e){return P(this,t,n,!0,e)},s.prototype.writeDoubleBE=function(t,n,e){return P(this,t,n,!1,e)},s.prototype.copy=function(t,n,e,r){if(e||(e=0),r||0===r||(r=this.length),n>=t.length&&(n=t.length),n||(n=0),r>0&&r<e&&(r=e),r===e)return 0;if(0===t.length||0===this.length)return 0;if(n<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-n<r-e&&(r=t.length-n+e);var i,o=r-e;if(this===t&&e<n&&n<r)for(i=o-1;i>=0;--i)t[i+n]=this[i+e];else if(o<1e3||!s.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+n]=this[i+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+o),n);return o},s.prototype.fill=function(t,n,e,r){if("string"==typeof t){if("string"==typeof n?(r=n,n=0,e=this.length):"string"==typeof e&&(r=e,e=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!s.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"==typeof t&&(t&=255);if(n<0||this.length<n||this.length<e)throw new RangeError("Out of range index");if(e<=n)return this;var o;if(n>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"==typeof t)for(o=n;o<e;++o)this[o]=t;else{var u=s.isBuffer(t)?t:U(new s(t,r).toString()),a=u.length;for(o=0;o<e-n;++o)this[o+n]=u[o%a]}return this};var L=/[^+\/0-9A-Za-z-_]/g;function z(t){return t<16?"0"+t.toString(16):t.toString(16)}function U(t,n){var e;n=n||1/0;for(var r=t.length,i=null,o=[],u=0;u<r;++u){if((e=t.charCodeAt(u))>55295&&e<57344){if(!i){if(e>56319){(n-=3)>-1&&o.push(239,191,189);continue}if(u+1===r){(n-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(n-=3)>-1&&o.push(239,191,189),i=e;continue}e=65536+(i-55296<<10|e-56320)}else i&&(n-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((n-=1)<0)break;o.push(e)}else if(e<2048){if((n-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((n-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((n-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function I(t){return r.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(L,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function q(t,n,e,r){for(var i=0;i<r&&!(i+e>=n.length||i>=t.length);++i)n[i+e]=t[i];return i}}).call(this,e(98))},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(10),i=e(594);r(i,"factory",e(220)),t.exports=i},,function(t,n,e){t.exports=!e(11)&&!e(3)((function(){return 7!=Object.defineProperty(e(117)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(2),i=e(9),o=e(46),u=e(118),a=e(12).f;t.exports=function(t){var n=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||a(n,t,{value:u.f(t)})}},function(t,n,e){var r=e(18),i=e(20),o=e(87)(!1),u=e(119)("IE_PROTO");t.exports=function(t,n){var e,a=i(t),s=0,c=[];for(e in a)e!=u&&r(a,e)&&c.push(e);for(;n.length>s;)r(a,e=n[s++])&&(~o(c,e)||c.push(e));return c}},function(t,n,e){var r=e(12),i=e(4),o=e(47);t.exports=e(11)?Object.defineProperties:function(t,n){i(t);for(var e,u=o(n),a=u.length,s=0;a>s;)r.f(t,e=u[s++],n[e]);return t}},function(t,n,e){var r=e(20),i=e(50).f,o={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(t){return u.slice()}}(t):i(r(t))}},function(t,n,e){"use strict";var r=e(11),i=e(47),o=e(88),u=e(70),a=e(15),s=e(69),c=Object.assign;t.exports=!c||e(3)((function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach((function(t){n[t]=t})),7!=c({},t)[e]||Object.keys(c({},n)).join("")!=r}))?function(t,n){for(var e=a(t),c=arguments.length,l=1,f=o.f,h=u.f;c>l;)for(var d,p=s(arguments[l++]),v=f?i(p).concat(f(p)):i(p),g=v.length,m=0;g>m;)d=v[m++],r&&!h.call(p,d)||(e[d]=p[d]);return e}:c},function(t,n){t.exports=Object.is||function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}},function(t,n,e){"use strict";var r=e(26),i=e(5),o=e(172),u=[].slice,a={},s=function(t,n,e){if(!(n in a)){for(var r=[],i=0;i<n;i++)r[i]="a["+i+"]";a[n]=Function("F,a","return new F("+r.join(",")+")")}return a[n](t,e)};t.exports=Function.bind||function(t){var n=r(this),e=u.call(arguments,1),a=function(){var r=e.concat(u.call(arguments));return this instanceof a?s(n,r.length,r):o(n,r,t)};return i(n.prototype)&&(a.prototype=n.prototype),a}},function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},function(t,n,e){var r=e(2).parseInt,i=e(61).trim,o=e(123),u=/^[-+]?0[xX]/;t.exports=8!==r(o+"08")||22!==r(o+"0x16")?function(t,n){var e=i(String(t),3);return r(e,n>>>0||(u.test(e)?16:10))}:r},function(t,n,e){var r=e(2).parseFloat,i=e(61).trim;t.exports=1/r(e(123)+"-0")!=-1/0?function(t){var n=i(String(t),3),e=r(n);return 0===e&&"-"==n.charAt(0)?-0:e}:r},function(t,n,e){var r=e(32);t.exports=function(t,n){if("number"!=typeof t&&"Number"!=r(t))throw TypeError(n);return+t}},function(t,n,e){var r=e(5),i=Math.floor;t.exports=function(t){return!r(t)&&isFinite(t)&&i(t)===t}},function(t,n){t.exports=Math.log1p||function(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},function(t,n,e){"use strict";var r=e(49),i=e(44),o=e(60),u={};e(19)(u,e(7)("iterator"),(function(){return this})),t.exports=function(t,n,e){t.prototype=r(u,{next:i(1,e)}),o(t,n+" Iterator")}},function(t,n,e){var r=e(4);t.exports=function(t,n,e,i){try{return i?n(r(e)[0],e[1]):n(e)}catch(n){var o=t.return;throw void 0!==o&&r(o.call(t)),n}}},function(t,n,e){var r=e(341);t.exports=function(t,n){return new(r(t))(n)}},function(t,n,e){var r=e(26),i=e(15),o=e(69),u=e(8);t.exports=function(t,n,e,a,s){r(n);var c=i(t),l=o(c),f=u(c.length),h=s?f-1:0,d=s?-1:1;if(e<2)for(;;){if(h in l){a=l[h],h+=d;break}if(h+=d,s?h<0:f<=h)throw TypeError("Reduce of empty array with no initial value")}for(;s?h>=0:f>h;h+=d)h in l&&(a=n(a,l[h],h,c));return a}},function(t,n,e){"use strict";var r=e(15),i=e(48),o=e(8);t.exports=[].copyWithin||function(t,n){var e=r(this),u=o(e.length),a=i(t,u),s=i(n,u),c=arguments.length>2?arguments[2]:void 0,l=Math.min((void 0===c?u:i(c,u))-s,u-a),f=1;for(s<a&&a<s+l&&(f=-1,s+=l-1,a+=l-1);l-- >0;)s in e?e[a]=e[s]:delete e[a],a+=f,s+=f;return e}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){"use strict";var r=e(138);e(1)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},function(t,n,e){e(11)&&"g"!=/./g.flags&&e(12).f(RegExp.prototype,"flags",{configurable:!0,get:e(91)})},function(t,n,e){"use strict";var r,i,o,u,a=e(46),s=e(2),c=e(25),l=e(71),f=e(1),h=e(5),d=e(26),p=e(64),v=e(94),g=e(72),m=e(140).set,y=e(361)(),b=e(187),_=e(362),x=e(95),w=e(188),A=s.TypeError,O=s.process,k=O&&O.versions,E=k&&k.v8||"",M=s.Promise,j="process"==l(O),S=function(){},C=i=b.f,F=!!function(){try{var t=M.resolve(1),n=(t.constructor={})[e(7)("species")]=function(t){t(S,S)};return(j||"function"==typeof PromiseRejectionEvent)&&t.then(S)instanceof n&&0!==E.indexOf("6.6")&&-1===x.indexOf("Chrome/66")}catch(t){}}(),D=function(t){var n;return!(!h(t)||"function"!=typeof(n=t.then))&&n},N=function(t,n){if(!t._n){t._n=!0;var e=t._c;y((function(){for(var r=t._v,i=1==t._s,o=0,u=function(n){var e,o,u,a=i?n.ok:n.fail,s=n.resolve,c=n.reject,l=n.domain;try{a?(i||(2==t._h&&B(t),t._h=1),!0===a?e=r:(l&&l.enter(),e=a(r),l&&(l.exit(),u=!0)),e===n.promise?c(A("Promise-chain cycle")):(o=D(e))?o.call(e,s,c):s(e)):c(r)}catch(t){l&&!u&&l.exit(),c(t)}};e.length>o;)u(e[o++]);t._c=[],t._n=!1,n&&!t._h&&R(t)}))}},R=function(t){m.call(s,(function(){var n,e,r,i=t._v,o=T(t);if(o&&(n=_((function(){j?O.emit("unhandledRejection",i,t):(e=s.onunhandledrejection)?e({promise:t,reason:i}):(r=s.console)&&r.error&&r.error("Unhandled promise rejection",i)})),t._h=j||T(t)?2:1),t._a=void 0,o&&n.e)throw n.v}))},T=function(t){return 1!==t._h&&0===(t._a||t._c).length},B=function(t){m.call(s,(function(){var n;j?O.emit("rejectionHandled",t):(n=s.onrejectionhandled)&&n({promise:t,reason:t._v})}))},P=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),N(n,!0))},L=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw A("Promise can't be resolved itself");(n=D(t))?y((function(){var r={_w:e,_d:!1};try{n.call(t,c(L,r,1),c(P,r,1))}catch(t){P.call(r,t)}})):(e._v=t,e._s=1,N(e,!1))}catch(t){P.call({_w:e,_d:!1},t)}}};F||(M=function(t){p(this,M,"Promise","_h"),d(t),r.call(this);try{t(c(L,this,1),c(P,this,1))}catch(t){P.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=e(65)(M.prototype,{then:function(t,n){var e=C(g(this,M));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=j?O.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&N(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r;this.promise=t,this.resolve=c(L,t,1),this.reject=c(P,t,1)},b.f=C=function(t){return t===M||t===u?new o(t):i(t)}),f(f.G+f.W+f.F*!F,{Promise:M}),e(60)(M,"Promise"),e(63)("Promise"),u=e(9).Promise,f(f.S+f.F*!F,"Promise",{reject:function(t){var n=C(this);return(0,n.reject)(t),n.promise}}),f(f.S+f.F*(a||!F),"Promise",{resolve:function(t){return w(a&&this===u?M:this,t)}}),f(f.S+f.F*!(F&&e(90)((function(t){M.all(t).catch(S)}))),"Promise",{all:function(t){var n=this,e=C(n),r=e.resolve,i=e.reject,o=_((function(){var e=[],o=0,u=1;v(t,!1,(function(t){var a=o++,s=!1;e.push(void 0),u++,n.resolve(t).then((function(t){s||(s=!0,e[a]=t,--u||r(e))}),i)})),--u||r(e)}));return o.e&&i(o.v),e.promise},race:function(t){var n=this,e=C(n),r=e.reject,i=_((function(){v(t,!1,(function(t){n.resolve(t).then(e.resolve,r)}))}));return i.e&&r(i.v),e.promise}})},function(t,n,e){"use strict";var r=e(26);function i(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=r(n),this.reject=r(e)}t.exports.f=function(t){return new i(t)}},function(t,n,e){var r=e(4),i=e(5),o=e(187);t.exports=function(t,n){if(r(t),i(n)&&n.constructor===t)return n;var e=o.f(t);return(0,e.resolve)(n),e.promise}},function(t,n,e){"use strict";var r=e(12).f,i=e(49),o=e(65),u=e(25),a=e(64),s=e(94),c=e(129),l=e(183),f=e(63),h=e(11),d=e(40).fastKey,p=e(53),v=h?"_s":"size",g=function(t,n){var e,r=d(n);if("F"!==r)return t._i[r];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,c){var l=t((function(t,r){a(t,l,n,"_i"),t._t=n,t._i=i(null),t._f=void 0,t._l=void 0,t[v]=0,null!=r&&s(r,e,t[c],t)}));return o(l.prototype,{clear:function(){for(var t=p(this,n),e=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete e[r.i];t._f=t._l=void 0,t[v]=0},delete:function(t){var e=p(this,n),r=g(e,t);if(r){var i=r.n,o=r.p;delete e._i[r.i],r.r=!0,o&&(o.n=i),i&&(i.p=o),e._f==r&&(e._f=i),e._l==r&&(e._l=o),e[v]--}return!!r},forEach:function(t){p(this,n);for(var e,r=u(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(r(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!g(p(this,n),t)}}),h&&r(l.prototype,"size",{get:function(){return p(this,n)[v]}}),l},def:function(t,n,e){var r,i,o=g(t,n);return o?o.v=e:(t._l=o={i:i=d(n,!0),k:n,v:e,p:r=t._l,n:void 0,r:!1},t._f||(t._f=o),r&&(r.n=o),t[v]++,"F"!==i&&(t._i[i]=o)),t},getEntry:g,setStrong:function(t,n,e){c(t,n,(function(t,e){this._t=p(t,n),this._k=e,this._l=void 0}),(function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?l(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,l(1))}),e?"entries":"values",!e,!0),f(n)}}},function(t,n,e){"use strict";var r=e(65),i=e(40).getWeak,o=e(4),u=e(5),a=e(64),s=e(94),c=e(30),l=e(18),f=e(53),h=c(5),d=c(6),p=0,v=function(t){return t._l||(t._l=new g)},g=function(){this.a=[]},m=function(t,n){return h(t.a,(function(t){return t[0]===n}))};g.prototype={get:function(t){var n=m(this,t);if(n)return n[1]},has:function(t){return!!m(this,t)},set:function(t,n){var e=m(this,t);e?e[1]=n:this.a.push([t,n])},delete:function(t){var n=d(this.a,(function(n){return n[0]===t}));return~n&&this.a.splice(n,1),!!~n}},t.exports={getConstructor:function(t,n,e,o){var c=t((function(t,r){a(t,c,n,"_i"),t._t=n,t._i=p++,t._l=void 0,null!=r&&s(r,e,t[o],t)}));return r(c.prototype,{delete:function(t){if(!u(t))return!1;var e=i(t);return!0===e?v(f(this,n)).delete(t):e&&l(e,this._i)&&delete e[this._i]},has:function(t){if(!u(t))return!1;var e=i(t);return!0===e?v(f(this,n)).has(t):e&&l(e,this._i)}}),c},def:function(t,n,e){var r=i(o(n),!0);return!0===r?v(t).set(n,e):r[t._i]=e,t},ufstore:v}},function(t,n,e){var r=e(27),i=e(8);t.exports=function(t){if(void 0===t)return 0;var n=r(t),e=i(n);if(n!==e)throw RangeError("Wrong length!");return e}},function(t,n,e){var r=e(50),i=e(88),o=e(4),u=e(2).Reflect;t.exports=u&&u.ownKeys||function(t){var n=r.f(o(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(8),i=e(125),o=e(33);t.exports=function(t,n,e,u){var a=String(o(t)),s=a.length,c=void 0===e?" ":String(e),l=r(n);if(l<=s||""==c)return a;var f=l-s,h=i.call(c,Math.ceil(f/c.length));return h.length>f&&(h=h.slice(0,f)),u?h+a:a+h}},function(t,n,e){var r=e(11),i=e(47),o=e(20),u=e(70).f;t.exports=function(t){return function(n){for(var e,a=o(n),s=i(a),c=s.length,l=0,f=[];c>l;)e=s[l++],r&&!u.call(a,e)||f.push(t?[e,a[e]]:a[e]);return f}}},function(t,n){var e=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=e)},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(443);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=Object.prototype.toString;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(10),i=e(74),o=e(75),u=e(76),a=e(41),s=e(21),c=e(103),l=e(79),f=e(104).factory,h=e(24),d=e(82),p=e(588),v=e(590);t.exports=function(){var t,n,e,g,m,y;if(0===arguments.length)n=f();else if(1===arguments.length){if(t=arguments[0],!u(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(s(t,"prng")){if(!a(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");n=t.prng}else n=f(t)}else{if(m=arguments[0],y=arguments[1],g=p(m,y))throw g;if(arguments.length>2){if(t=arguments[2],!u(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(s(t,"prng")){if(!a(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");n=t.prng}else n=f(t)}else n=f()}return r(e=void 0===m?M:E,"NAME","uniform"),t&&t.prng?(r(e,"seed",null),r(e,"seedLength",null),o(e,"state",c(null),l),r(e,"stateLength",null),r(e,"byteLength",null),r(e,"toJSON",c(null)),r(e,"PRNG",n)):(i(e,"seed",b),i(e,"seedLength",_),o(e,"state",A,O),i(e,"stateLength",x),i(e,"byteLength",w),r(e,"toJSON",k),r(e,"PRNG",n),n=n.normalized),e;function b(){return n.seed}function _(){return n.seedLength}function x(){return n.stateLength}function w(){return n.byteLength}function A(){return n.state}function O(t){n.state=t}function k(){var t={type:"PRNG"};return t.name=e.NAME,t.state=d(n.state),t.params=void 0===m?[]:[m,y],t}function E(){return v(n,m,y)}function M(t,e){return h(t)||h(e)||t>=e?NaN:v(n,t,e)}}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t){return"boolean"==typeof t}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(100),i=e(13),o=e(463),u=r();t.exports=function(t){return"object"==typeof t&&(t instanceof Boolean||(u?o(t):"[object Boolean]"===i(t)))}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=/^\s*function\s*([^(]*)/i},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(10),i=e(473),o=e(475);r(o,"isObjectLikeArray",i(o)),t.exports=o},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C code and copyright notice are from the [source implementation]{@link http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/MT2002/CODES/mt19937ar.c}. The implementation has been modified for JavaScript.
*
* ```text
* Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions
* are met:
*
*   1. Redistributions of source code must retain the above copyright
*      notice, this list of conditions and the following disclaimer.
*
*   2. Redistributions in binary form must reproduce the above copyright
*      notice, this list of conditions and the following disclaimer in the
*      documentation and/or other materials provided with the distribution.
*
*   3. The names of its contributors may not be used to endorse or promote
*      products derived from this software without specific prior written
*      permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
* "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
* LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
* A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
* CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
* EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
* PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
* PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
* LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
* NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
* ```
*/var r=e(10),i=e(74),o=e(75),u=e(21),a=e(76),s=e(205),c=e(105),l=e(101).isPrimitive,f=e(490).isPrimitive,h=e(213),d=e(81),p=e(31),v=e(502),g=e(507),m=e(214),y=e(82),b=e(216),_=624,x=d>>>0,w=[0,2567483615],A=1/(h+1),O=h*A;function k(t,n){var e;return e=n?"option":"argument",t.length<631?new RangeError("invalid "+e+". `state` array has insufficient length."):1!==t[0]?new RangeError("invalid "+e+". `state` array has an incompatible schema version. Expected: 1. Actual: "+t[0]+"."):3!==t[1]?new RangeError("invalid "+e+". `state` array has an incompatible number of sections. Expected: 3. Actual: "+t[1]+"."):t[2]!==_?new RangeError("invalid "+e+". `state` array has an incompatible state length. Expected: "+"624. Actual: "+t[2]+"."):1!==t[627]?new RangeError("invalid "+e+". `state` array has an incompatible section length. Expected: "+1..toString()+". Actual: "+t[627]+"."):t[629]!==t.length-630?new RangeError("invalid "+e+". `state` array length is incompatible with seed section length. Expected: "+(t.length-630)+". Actual: "+t[629]+"."):null}function E(t,n,e){var r;for(t[0]=e>>>0,r=1;r<n;r++)e=((e=t[r-1]>>>0)^e>>>30)>>>0,t[r]=g(e,1812433253)+r>>>0;return t}function M(t,n,e,r){var i,o,u,a;for(o=1,u=0,a=v(n,r);a>0;a--)i=t[o-1]>>>0,i=g(i=(i^i>>>30)>>>0,1664525)>>>0,t[o]=(t[o]>>>0^i)+e[u]+u>>>0,u+=1,(o+=1)>=n&&(t[0]=t[n-1],o=1),u>=r&&(u=0);for(a=n-1;a>0;a--)i=t[o-1]>>>0,i=g(i=(i^i>>>30)>>>0,1566083941)>>>0,t[o]=(t[o]>>>0^i)-o>>>0,(o+=1)>=n&&(t[0]=t[n-1],o=1);return t[0]=2147483648,t}function j(t){var n,e;for(227,e=0;e<227;e++)n=2147483648&t[e]|2147483647&t[e+1],t[e]=t[e+397]^n>>>1^w[1&n];for(623;e<623;e++)n=2147483648&t[e]|2147483647&t[e+1],t[e]=t[e-227]^n>>>1^w[1&n];return n=2147483648&t[623]|2147483647&t[0],t[623]=t[396]^n>>>1^w[1&n],t}t.exports=function(t){var n,e,h,v,g,w;if(h={},arguments.length){if(!a(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(u(t,"copy")&&(h.copy=t.copy,!l(t.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+t.copy+"`.");if(u(t,"state")){if(e=t.state,h.state=!0,!c(e))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+e+"`.");if(w=k(e,!0))throw w;!1===h.copy?n=e:(n=new p(e.length),m(e.length,e,1,n,1)),e=new p(n.buffer,n.byteOffset+3*n.BYTES_PER_ELEMENT,_),v=new p(n.buffer,n.byteOffset+630*n.BYTES_PER_ELEMENT,e[629])}if(void 0===v)if(u(t,"seed"))if(v=t.seed,h.seed=!0,f(v)){if(v>x)throw new RangeError("invalid option. `seed` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `"+v+"`.");v>>>=0}else{if(!1===s(v)||v.length<1)throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+v+"`.");if(1===v.length){if(v=v[0],!f(v))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+v+"`.");if(v>x)throw new RangeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+v+"`.");v>>>=0}else g=v.length,(n=new p(630+g))[0]=1,n[1]=3,n[2]=_,n[627]=1,n[628]=_,n[629]=g,m.ndarray(g,v,1,0,n,1,630),e=new p(n.buffer,n.byteOffset+3*n.BYTES_PER_ELEMENT,_),v=new p(n.buffer,n.byteOffset+630*n.BYTES_PER_ELEMENT,g),e=M(e=E(e,_,19650218),_,v,g)}else v=b()>>>0}else v=b()>>>0;return void 0===e&&((n=new p(631))[0]=1,n[1]=3,n[2]=_,n[627]=1,n[628]=_,n[629]=1,n[630]=v,e=new p(n.buffer,n.byteOffset+3*n.BYTES_PER_ELEMENT,_),v=new p(n.buffer,n.byteOffset+630*n.BYTES_PER_ELEMENT,1),e=E(e,_,v)),r(B,"NAME","mt19937"),i(B,"seed",S),i(B,"seedLength",C),o(B,"state",N,R),i(B,"stateLength",F),i(B,"byteLength",D),r(B,"toJSON",T),r(B,"MIN",1),r(B,"MAX",d),r(B,"normalized",P),r(P,"NAME",B.NAME),i(P,"seed",S),i(P,"seedLength",C),o(P,"state",N,R),i(P,"stateLength",F),i(P,"byteLength",D),r(P,"toJSON",T),r(P,"MIN",0),r(P,"MAX",O),B;function S(){var t=n[629];return m(t,v,1,new p(t),1)}function C(){return n[629]}function F(){return n.length}function D(){return n.byteLength}function N(){var t=n.length;return m(t,n,1,new p(t),1)}function R(t){var r;if(!c(t))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+t+"`.");if(r=k(t,!1))throw r;!1===h.copy?h.state&&t.length===n.length?m(t.length,t,1,n,1):(n=t,h.state=!0):(t.length!==n.length&&(n=new p(t.length)),m(t.length,t,1,n,1)),e=new p(n.buffer,n.byteOffset+3*n.BYTES_PER_ELEMENT,_),v=new p(n.buffer,n.byteOffset+630*n.BYTES_PER_ELEMENT,n[629])}function T(){var t={type:"PRNG"};return t.name=B.NAME,t.state=y(n),t.params=[],t}function B(){var t,r;return(r=n[628])>=_&&(e=j(e),r=0),t=e[r],n[628]=r+1,t^=t>>>11,t^=t<<7&2636928640,t^=t<<15&4022730752,(t^=t>>>18)>>>0}function P(){return(67108864*(B()>>>5)+(B()>>>6))*A}}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(485);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(54).isPrimitive;t.exports=function(t){return r(t)&&t>0}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(55).isPrimitive,i=e(210);t.exports=function(t){return r(t)&&i(t)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t){return"number"==typeof t}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(100),i=e(13),o=e(146),u=e(495),a=r();t.exports=function(t){return"object"==typeof t&&(t instanceof o||(a?u(t):"[object Number]"===i(t)))}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(23),i=e(42),o=e(66);t.exports=function(t){return t<r&&t>i&&o(t)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(55).isObject,i=e(210);t.exports=function(t){return r(t)&&i(t.valueOf())}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(54).isObject;t.exports=function(t){return r(t)&&t.valueOf()>0}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=9007199254740991},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(10),i=e(509);r(i,"ndarray",e(510)),t.exports=i},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(519);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(81),i=e(80),o=r-1;t.exports=function(){return i(1+o*Math.random())>>>0}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(55).isPrimitive,i=e(24);t.exports=function(t){return r(t)&&i(t)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(55).isObject,i=e(24);t.exports=function(t){return r(t)&&i(t.valueOf())}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(10),i=e(74),o=e(75),u=e(76),a=e(41),s=e(21),c=e(103),l=e(79),f=e(104).factory,h=e(24),d=e(66),p=e(82),v=e(592),g=e(593);t.exports=function(){var t,n,e,m,y,b;if(0===arguments.length)n=f();else if(1===arguments.length){if(t=arguments[0],!u(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(s(t,"prng")){if(!a(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");if(n=t.prng,!d(n.MIN))throw new TypeError("invalid option. `prng` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.");if(!d(n.MAX))throw new TypeError("invalid option. `prng` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.")}else n=f(t)}else{if(y=arguments[0],b=arguments[1],m=v(y,b))throw m;if(arguments.length>2){if(t=arguments[2],!u(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(s(t,"prng")){if(!a(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");if(n=t.prng,!d(n.MIN))throw new TypeError("invalid option. `prng` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.");if(!d(n.MAX))throw new TypeError("invalid option. `prng` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.")}else n=f(t)}else n=f()}return r(e=void 0===y?j:M,"NAME","discrete-uniform"),t&&t.prng?(r(e,"seed",null),r(e,"seedLength",null),o(e,"state",c(null),l),r(e,"stateLength",null),r(e,"byteLength",null),r(e,"toJSON",c(null)),r(e,"PRNG",n)):(i(e,"seed",_),i(e,"seedLength",x),o(e,"state",O,k),i(e,"stateLength",w),i(e,"byteLength",A),r(e,"toJSON",E),r(e,"PRNG",n)),e;function _(){return n.seed}function x(){return n.seedLength}function w(){return n.stateLength}function A(){return n.byteLength}function O(){return n.state}function k(t){n.state=t}function E(){var t={type:"PRNG"};return t.name=e.NAME,t.state=p(n.state),t.params=void 0===y?[]:[y,b],t}function M(){return g(n,y,b)}function j(t,e){return h(t)||h(e)||!d(t)||!d(e)||t>e?NaN:g(n,t,e)}}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(10),i=e(74),o=e(75),u=e(76),a=e(105),s=e(101).isPrimitive,c=e(41),l=e(21),f=e(103),h=e(79),d=e(595).factory,p=e(104).factory,v=e(24),g=e(154),m=e(637),y=e(214),b=e(31),_=e(82),x=e(655),w=e(707),A=e(710);t.exports=function(){var t,n,e,O,k,E,M,j,S,C,F;if(j=!0,0===arguments.length)E=p(k={copy:!1});else if(1===arguments.length){if(k=arguments[0],!u(k))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+k+"`.");if(l(k,"copy")&&!s(k.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+k.copy+"`.");if(l(k,"prng")){if(!c(k.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+k.prng+"`.");E=k.prng}else{if(l(k,"state")&&!a(k.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+k.state+"`.");!1===(k=x(k,1)).copy?j=!1:k.state&&(k.state=y(k.state.length,k.state,1,new b(k.state.length),1)),k.copy=!1,E=p(k)}}else{if(n=arguments[0],O=arguments[1],S=w(n,O))throw S;if(arguments.length>2){if(k=arguments[2],!u(k))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+k+"`.");if(l(k,"copy")&&!s(k.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+k.copy+"`.");if(l(k,"prng")){if(!c(k.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+k.prng+"`.");E=k.prng}else{if(l(k,"state")&&!a(k.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+k.state+"`.");!1===(k=x(k,1)).copy?j=!1:k.state&&(k.state=y(k.state.length,k.state,1,new b(k.state.length),1)),k.copy=!1,E=p(k)}}else E=p(k={copy:!1})}return k&&k.prng?e=d({prng:k.prng}):(k.state?t=k.state:(t=E.state,E.state=t),e=d({state:t,copy:!1})),void 0===n?M=I:(n>=1?(M=z,F=n-1/3):(M=U,F=n+1-1/3),C=1/g(9*F)),r(M,"NAME","gamma"),k&&k.prng?(r(M,"seed",null),r(M,"seedLength",null),o(M,"state",f(null),h),r(M,"stateLength",null),r(M,"byteLength",null),r(M,"toJSON",f(null)),r(M,"PRNG",E)):(i(M,"seed",D),i(M,"seedLength",N),o(M,"state",B,P),i(M,"stateLength",R),i(M,"byteLength",T),r(M,"toJSON",L),r(M,"PRNG",E),E=E.normalized),M;function D(){return E.seed}function N(){return E.seedLength}function R(){return E.stateLength}function T(){return E.byteLength}function B(){return E.state}function P(t){if(!a(t))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+t+"`.");j&&(t=y(t.length,t,1,new b(t.length),1)),E.state=t}function L(){var t={type:"PRNG"};return t.name=M.NAME,t.state=_(E.state),t.params=void 0===n?[]:[n,O],t}function z(){return A(E,e,O,F,C)}function U(){return A(E,e,O,F,C)*m(E(),1/n)}function I(t,n){var r,i;return v(t)||v(n)||t<=0||n<=0?NaN:t<1?(r=1/g(9*(i=t+1-1/3)),A(E,e,n,i,r)*m(E(),1/t)):(r=1/g(9*(i=t-1/3)),A(E,e,n,i,r))}}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(10),i=e(74),o=e(75),u=e(41),a=e(76),s=e(101).isPrimitive,c=e(21),l=e(105),f=e(104).factory,h=e(103),d=e(79),p=e(80),v=e(81),g=e(82),m=e(597);t.exports=function(t){var n,e,y,b;if(b={copy:!0},arguments.length){if(!a(t))throw new TypeError("invalid argument. Must provide an object. Value: `"+t+"`.");if(c(t,"copy")&&(b.copy=t.copy,!s(t.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+t.copy+"`.");if(c(t,"prng")){if(!u(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");n=t.prng}else if(c(t,"state")){if(b.state=t.state,!l(t.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+t.state+"`.")}else if(c(t,"seed")&&(b.seed=t.seed,void 0===t.seed))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+t.seed+"`.")}return void 0===b.state?void 0===n?n=(e=f(b)).normalized:(e=f({seed:p(1+v*n()),copy:b.copy}),b.seed=null):n=(e=f(b)).normalized,y=m(n,e),r(y,"NAME","improved-ziggurat"),null===b.seed?(r(y,"seed",null),r(y,"seedLength",null)):(i(y,"seed",_),i(y,"seedLength",x)),t&&t.prng?(o(y,"state",h(null),d),r(y,"stateLength",null),r(y,"byteLength",null),r(y,"toJSON",h(null))):(o(y,"state",O,k),i(y,"stateLength",w),i(y,"byteLength",A),r(y,"toJSON",E)),r(y,"PRNG",n),y;function _(){return e.seed}function x(){return e.seedLength}function w(){return e.stateLength}function A(){return e.byteLength}function O(){return e.state}function k(t){e.state=t}function E(){var t={type:"PRNG"};return t.name=y.NAME,t.state=g(e.state),t.params=[],t}}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(599);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(605);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(610);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(618);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(639);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(644);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(54).isPrimitive;t.exports=function(t){return r(t)&&t>=0}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(54).isObject;t.exports=function(t){return r(t)&&t.valueOf()>=0}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t){return"string"==typeof t}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(100),i=e(13),o=e(665),u=r();t.exports=function(t){return"object"==typeof t&&(t instanceof String||(u?o(t):"[object String]"===i(t)))}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(668);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(669);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=e(673),o=e(235),u=e(674);r=i?o:u,t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(13);t.exports=function(t){return"[object Arguments]"===r(t)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=Object.prototype.propertyIsEnumerable;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t){return t.constructor&&t.constructor.prototype===t}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(55).isPrimitive;t.exports=function(t){return r(t)&&t>0}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(55).isObject;t.exports=function(t){return r(t)&&t.valueOf()>0}},function(t){t.exports=JSON.parse("{}")},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(10),i=e(591);r(i,"factory",e(219)),t.exports=i},,,,,function(t,n,e){e(247),t.exports=e(712)},function(t,n,e){"use strict";e(248);var r,i=(r=e(420))&&r.__esModule?r:{default:r};i.default._babelPolyfill&&"undefined"!=typeof console&&console.warn&&console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning."),i.default._babelPolyfill=!0},function(t,n,e){"use strict";e(249),e(392),e(394),e(397),e(399),e(401),e(403),e(405),e(407),e(409),e(411),e(413),e(415),e(419)},function(t,n,e){e(250),e(253),e(254),e(255),e(256),e(257),e(258),e(259),e(260),e(261),e(262),e(263),e(264),e(265),e(266),e(267),e(268),e(269),e(270),e(271),e(272),e(273),e(274),e(275),e(276),e(277),e(278),e(279),e(280),e(281),e(282),e(283),e(284),e(285),e(286),e(287),e(288),e(289),e(290),e(291),e(292),e(293),e(294),e(296),e(297),e(298),e(299),e(300),e(301),e(302),e(303),e(304),e(305),e(306),e(307),e(308),e(309),e(310),e(311),e(312),e(313),e(314),e(315),e(316),e(317),e(318),e(319),e(320),e(321),e(322),e(323),e(324),e(325),e(326),e(327),e(328),e(329),e(331),e(332),e(334),e(335),e(336),e(337),e(338),e(339),e(340),e(342),e(343),e(344),e(345),e(346),e(347),e(348),e(349),e(350),e(351),e(352),e(353),e(354),e(137),e(355),e(184),e(356),e(185),e(357),e(358),e(359),e(360),e(186),e(363),e(364),e(365),e(366),e(367),e(368),e(369),e(370),e(371),e(372),e(373),e(374),e(375),e(376),e(377),e(378),e(379),e(380),e(381),e(382),e(383),e(384),e(385),e(386),e(387),e(388),e(389),e(390),e(391),t.exports=e(9)},function(t,n,e){"use strict";var r=e(2),i=e(18),o=e(11),u=e(1),a=e(16),s=e(40).KEY,c=e(3),l=e(86),f=e(60),h=e(45),d=e(7),p=e(118),v=e(165),g=e(252),m=e(89),y=e(4),b=e(5),_=e(15),x=e(20),w=e(39),A=e(44),O=e(49),k=e(168),E=e(28),M=e(88),j=e(12),S=e(47),C=E.f,F=j.f,D=k.f,N=r.Symbol,R=r.JSON,T=R&&R.stringify,B=d("_hidden"),P=d("toPrimitive"),L={}.propertyIsEnumerable,z=l("symbol-registry"),U=l("symbols"),I=l("op-symbols"),q=Object.prototype,$="function"==typeof N&&!!M.f,W=r.QObject,V=!W||!W.prototype||!W.prototype.findChild,Y=o&&c((function(){return 7!=O(F({},"a",{get:function(){return F(this,"a",{value:7}).a}})).a}))?function(t,n,e){var r=C(q,n);r&&delete q[n],F(t,n,e),r&&t!==q&&F(q,n,r)}:F,H=function(t){var n=U[t]=O(N.prototype);return n._k=t,n},G=$&&"symbol"==typeof N.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof N},X=function(t,n,e){return t===q&&X(I,n,e),y(t),n=w(n,!0),y(e),i(U,n)?(e.enumerable?(i(t,B)&&t[B][n]&&(t[B][n]=!1),e=O(e,{enumerable:A(0,!1)})):(i(t,B)||F(t,B,A(1,{})),t[B][n]=!0),Y(t,n,e)):F(t,n,e)},J=function(t,n){y(t);for(var e,r=g(n=x(n)),i=0,o=r.length;o>i;)X(t,e=r[i++],n[e]);return t},Z=function(t){var n=L.call(this,t=w(t,!0));return!(this===q&&i(U,t)&&!i(I,t))&&(!(n||!i(this,t)||!i(U,t)||i(this,B)&&this[B][t])||n)},K=function(t,n){if(t=x(t),n=w(n,!0),t!==q||!i(U,n)||i(I,n)){var e=C(t,n);return!e||!i(U,n)||i(t,B)&&t[B][n]||(e.enumerable=!0),e}},Q=function(t){for(var n,e=D(x(t)),r=[],o=0;e.length>o;)i(U,n=e[o++])||n==B||n==s||r.push(n);return r},tt=function(t){for(var n,e=t===q,r=D(e?I:x(t)),o=[],u=0;r.length>u;)!i(U,n=r[u++])||e&&!i(q,n)||o.push(U[n]);return o};$||(a((N=function(){if(this instanceof N)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),n=function(e){this===q&&n.call(I,e),i(this,B)&&i(this[B],t)&&(this[B][t]=!1),Y(this,t,A(1,e))};return o&&V&&Y(q,t,{configurable:!0,set:n}),H(t)}).prototype,"toString",(function(){return this._k})),E.f=K,j.f=X,e(50).f=k.f=Q,e(70).f=Z,M.f=tt,o&&!e(46)&&a(q,"propertyIsEnumerable",Z,!0),p.f=function(t){return H(d(t))}),u(u.G+u.W+u.F*!$,{Symbol:N});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;nt.length>et;)d(nt[et++]);for(var rt=S(d.store),it=0;rt.length>it;)v(rt[it++]);u(u.S+u.F*!$,"Symbol",{for:function(t){return i(z,t+="")?z[t]:z[t]=N(t)},keyFor:function(t){if(!G(t))throw TypeError(t+" is not a symbol!");for(var n in z)if(z[n]===t)return n},useSetter:function(){V=!0},useSimple:function(){V=!1}}),u(u.S+u.F*!$,"Object",{create:function(t,n){return void 0===n?O(t):J(O(t),n)},defineProperty:X,defineProperties:J,getOwnPropertyDescriptor:K,getOwnPropertyNames:Q,getOwnPropertySymbols:tt});var ot=c((function(){M.f(1)}));u(u.S+u.F*ot,"Object",{getOwnPropertySymbols:function(t){return M.f(_(t))}}),R&&u(u.S+u.F*(!$||c((function(){var t=N();return"[null]"!=T([t])||"{}"!=T({a:t})||"{}"!=T(Object(t))}))),"JSON",{stringify:function(t){for(var n,e,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);if(e=n=r[1],(b(n)||void 0!==t)&&!G(t))return m(n)||(n=function(t,n){if("function"==typeof e&&(n=e.call(this,t,n)),!G(n))return n}),r[1]=n,T.apply(R,r)}}),N.prototype[P]||e(19)(N.prototype,P,N.prototype.valueOf),f(N,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},function(t,n,e){t.exports=e(86)("native-function-to-string",Function.toString)},function(t,n,e){var r=e(47),i=e(88),o=e(70);t.exports=function(t){var n=r(t),e=i.f;if(e)for(var u,a=e(t),s=o.f,c=0;a.length>c;)s.call(t,u=a[c++])&&n.push(u);return n}},function(t,n,e){var r=e(1);r(r.S,"Object",{create:e(49)})},function(t,n,e){var r=e(1);r(r.S+r.F*!e(11),"Object",{defineProperty:e(12).f})},function(t,n,e){var r=e(1);r(r.S+r.F*!e(11),"Object",{defineProperties:e(167)})},function(t,n,e){var r=e(20),i=e(28).f;e(29)("getOwnPropertyDescriptor",(function(){return function(t,n){return i(r(t),n)}}))},function(t,n,e){var r=e(15),i=e(51);e(29)("getPrototypeOf",(function(){return function(t){return i(r(t))}}))},function(t,n,e){var r=e(15),i=e(47);e(29)("keys",(function(){return function(t){return i(r(t))}}))},function(t,n,e){e(29)("getOwnPropertyNames",(function(){return e(168).f}))},function(t,n,e){var r=e(5),i=e(40).onFreeze;e(29)("freeze",(function(t){return function(n){return t&&r(n)?t(i(n)):n}}))},function(t,n,e){var r=e(5),i=e(40).onFreeze;e(29)("seal",(function(t){return function(n){return t&&r(n)?t(i(n)):n}}))},function(t,n,e){var r=e(5),i=e(40).onFreeze;e(29)("preventExtensions",(function(t){return function(n){return t&&r(n)?t(i(n)):n}}))},function(t,n,e){var r=e(5);e(29)("isFrozen",(function(t){return function(n){return!r(n)||!!t&&t(n)}}))},function(t,n,e){var r=e(5);e(29)("isSealed",(function(t){return function(n){return!r(n)||!!t&&t(n)}}))},function(t,n,e){var r=e(5);e(29)("isExtensible",(function(t){return function(n){return!!r(n)&&(!t||t(n))}}))},function(t,n,e){var r=e(1);r(r.S+r.F,"Object",{assign:e(169)})},function(t,n,e){var r=e(1);r(r.S,"Object",{is:e(170)})},function(t,n,e){var r=e(1);r(r.S,"Object",{setPrototypeOf:e(122).set})},function(t,n,e){"use strict";var r=e(71),i={};i[e(7)("toStringTag")]="z",i+""!="[object z]"&&e(16)(Object.prototype,"toString",(function(){return"[object "+r(this)+"]"}),!0)},function(t,n,e){var r=e(1);r(r.P,"Function",{bind:e(171)})},function(t,n,e){var r=e(12).f,i=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in i||e(11)&&r(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},function(t,n,e){"use strict";var r=e(5),i=e(51),o=e(7)("hasInstance"),u=Function.prototype;o in u||e(12).f(u,o,{value:function(t){if("function"!=typeof this||!r(t))return!1;if(!r(this.prototype))return t instanceof this;for(;t=i(t);)if(this.prototype===t)return!0;return!1}})},function(t,n,e){var r=e(1),i=e(173);r(r.G+r.F*(parseInt!=i),{parseInt:i})},function(t,n,e){var r=e(1),i=e(174);r(r.G+r.F*(parseFloat!=i),{parseFloat:i})},function(t,n,e){"use strict";var r=e(2),i=e(18),o=e(32),u=e(124),a=e(39),s=e(3),c=e(50).f,l=e(28).f,f=e(12).f,h=e(61).trim,d=r.Number,p=d,v=d.prototype,g="Number"==o(e(49)(v)),m="trim"in String.prototype,y=function(t){var n=a(t,!1);if("string"==typeof n&&n.length>2){var e,r,i,o=(n=m?n.trim():h(n,3)).charCodeAt(0);if(43===o||45===o){if(88===(e=n.charCodeAt(2))||120===e)return NaN}else if(48===o){switch(n.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+n}for(var u,s=n.slice(2),c=0,l=s.length;c<l;c++)if((u=s.charCodeAt(c))<48||u>i)return NaN;return parseInt(s,r)}}return+n};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof d&&(g?s((function(){v.valueOf.call(e)})):"Number"!=o(e))?u(new p(y(n)),e,d):y(n)};for(var b,_=e(11)?c(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;_.length>x;x++)i(p,b=_[x])&&!i(d,b)&&f(d,b,l(p,b));d.prototype=v,v.constructor=d,e(16)(r,"Number",d)}},function(t,n,e){"use strict";var r=e(1),i=e(27),o=e(175),u=e(125),a=1..toFixed,s=Math.floor,c=[0,0,0,0,0,0],l="Number.toFixed: incorrect invocation!",f=function(t,n){for(var e=-1,r=n;++e<6;)r+=t*c[e],c[e]=r%1e7,r=s(r/1e7)},h=function(t){for(var n=6,e=0;--n>=0;)e+=c[n],c[n]=s(e/t),e=e%t*1e7},d=function(){for(var t=6,n="";--t>=0;)if(""!==n||0===t||0!==c[t]){var e=String(c[t]);n=""===n?e:n+u.call("0",7-e.length)+e}return n},p=function(t,n,e){return 0===n?e:n%2==1?p(t,n-1,e*t):p(t*t,n/2,e)};r(r.P+r.F*(!!a&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!e(3)((function(){a.call({})}))),"Number",{toFixed:function(t){var n,e,r,a,s=o(this,l),c=i(t),v="",g="0";if(c<0||c>20)throw RangeError(l);if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(v="-",s=-s),s>1e-21)if(e=(n=function(t){for(var n=0,e=t;e>=4096;)n+=12,e/=4096;for(;e>=2;)n+=1,e/=2;return n}(s*p(2,69,1))-69)<0?s*p(2,-n,1):s/p(2,n,1),e*=4503599627370496,(n=52-n)>0){for(f(0,e),r=c;r>=7;)f(1e7,0),r-=7;for(f(p(10,r,1),0),r=n-1;r>=23;)h(1<<23),r-=23;h(1<<r),f(1,1),h(2),g=d()}else f(0,e),f(1<<-n,0),g=d()+u.call("0",c);return g=c>0?v+((a=g.length)<=c?"0."+u.call("0",c-a)+g:g.slice(0,a-c)+"."+g.slice(a-c)):v+g}})},function(t,n,e){"use strict";var r=e(1),i=e(3),o=e(175),u=1..toPrecision;r(r.P+r.F*(i((function(){return"1"!==u.call(1,void 0)}))||!i((function(){u.call({})}))),"Number",{toPrecision:function(t){var n=o(this,"Number#toPrecision: incorrect invocation!");return void 0===t?u.call(n):u.call(n,t)}})},function(t,n,e){var r=e(1);r(r.S,"Number",{EPSILON:Math.pow(2,-52)})},function(t,n,e){var r=e(1),i=e(2).isFinite;r(r.S,"Number",{isFinite:function(t){return"number"==typeof t&&i(t)}})},function(t,n,e){var r=e(1);r(r.S,"Number",{isInteger:e(176)})},function(t,n,e){var r=e(1);r(r.S,"Number",{isNaN:function(t){return t!=t}})},function(t,n,e){var r=e(1),i=e(176),o=Math.abs;r(r.S,"Number",{isSafeInteger:function(t){return i(t)&&o(t)<=9007199254740991}})},function(t,n,e){var r=e(1);r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},function(t,n,e){var r=e(1);r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},function(t,n,e){var r=e(1),i=e(174);r(r.S+r.F*(Number.parseFloat!=i),"Number",{parseFloat:i})},function(t,n,e){var r=e(1),i=e(173);r(r.S+r.F*(Number.parseInt!=i),"Number",{parseInt:i})},function(t,n,e){var r=e(1),i=e(177),o=Math.sqrt,u=Math.acosh;r(r.S+r.F*!(u&&710==Math.floor(u(Number.MAX_VALUE))&&u(1/0)==1/0),"Math",{acosh:function(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:i(t-1+o(t-1)*o(t+1))}})},function(t,n,e){var r=e(1),i=Math.asinh;r(r.S+r.F*!(i&&1/i(0)>0),"Math",{asinh:function t(n){return isFinite(n=+n)&&0!=n?n<0?-t(-n):Math.log(n+Math.sqrt(n*n+1)):n}})},function(t,n,e){var r=e(1),i=Math.atanh;r(r.S+r.F*!(i&&1/i(-0)<0),"Math",{atanh:function(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},function(t,n,e){var r=e(1),i=e(126);r(r.S,"Math",{cbrt:function(t){return i(t=+t)*Math.pow(Math.abs(t),1/3)}})},function(t,n,e){var r=e(1);r(r.S,"Math",{clz32:function(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},function(t,n,e){var r=e(1),i=Math.exp;r(r.S,"Math",{cosh:function(t){return(i(t=+t)+i(-t))/2}})},function(t,n,e){var r=e(1),i=e(127);r(r.S+r.F*(i!=Math.expm1),"Math",{expm1:i})},function(t,n,e){var r=e(1);r(r.S,"Math",{fround:e(295)})},function(t,n,e){var r=e(126),i=Math.pow,o=i(2,-52),u=i(2,-23),a=i(2,127)*(2-u),s=i(2,-126);t.exports=Math.fround||function(t){var n,e,i=Math.abs(t),c=r(t);return i<s?c*(i/s/u+1/o-1/o)*s*u:(e=(n=(1+u/o)*i)-(n-i))>a||e!=e?c*(1/0):c*e}},function(t,n,e){var r=e(1),i=Math.abs;r(r.S,"Math",{hypot:function(t,n){for(var e,r,o=0,u=0,a=arguments.length,s=0;u<a;)s<(e=i(arguments[u++]))?(o=o*(r=s/e)*r+1,s=e):o+=e>0?(r=e/s)*r:e;return s===1/0?1/0:s*Math.sqrt(o)}})},function(t,n,e){var r=e(1),i=Math.imul;r(r.S+r.F*e(3)((function(){return-5!=i(4294967295,5)||2!=i.length})),"Math",{imul:function(t,n){var e=+t,r=+n,i=65535&e,o=65535&r;return 0|i*o+((65535&e>>>16)*o+i*(65535&r>>>16)<<16>>>0)}})},function(t,n,e){var r=e(1);r(r.S,"Math",{log10:function(t){return Math.log(t)*Math.LOG10E}})},function(t,n,e){var r=e(1);r(r.S,"Math",{log1p:e(177)})},function(t,n,e){var r=e(1);r(r.S,"Math",{log2:function(t){return Math.log(t)/Math.LN2}})},function(t,n,e){var r=e(1);r(r.S,"Math",{sign:e(126)})},function(t,n,e){var r=e(1),i=e(127),o=Math.exp;r(r.S+r.F*e(3)((function(){return-2e-17!=!Math.sinh(-2e-17)})),"Math",{sinh:function(t){return Math.abs(t=+t)<1?(i(t)-i(-t))/2:(o(t-1)-o(-t-1))*(Math.E/2)}})},function(t,n,e){var r=e(1),i=e(127),o=Math.exp;r(r.S,"Math",{tanh:function(t){var n=i(t=+t),e=i(-t);return n==1/0?1:e==1/0?-1:(n-e)/(o(t)+o(-t))}})},function(t,n,e){var r=e(1);r(r.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},function(t,n,e){var r=e(1),i=e(48),o=String.fromCharCode,u=String.fromCodePoint;r(r.S+r.F*(!!u&&1!=u.length),"String",{fromCodePoint:function(t){for(var n,e=[],r=arguments.length,u=0;r>u;){if(n=+arguments[u++],i(n,1114111)!==n)throw RangeError(n+" is not a valid code point");e.push(n<65536?o(n):o(55296+((n-=65536)>>10),n%1024+56320))}return e.join("")}})},function(t,n,e){var r=e(1),i=e(20),o=e(8);r(r.S,"String",{raw:function(t){for(var n=i(t.raw),e=o(n.length),r=arguments.length,u=[],a=0;e>a;)u.push(String(n[a++])),a<r&&u.push(String(arguments[a]));return u.join("")}})},function(t,n,e){"use strict";e(61)("trim",(function(t){return function(){return t(this,3)}}))},function(t,n,e){"use strict";var r=e(128)(!0);e(129)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})}))},function(t,n,e){"use strict";var r=e(1),i=e(128)(!1);r(r.P,"String",{codePointAt:function(t){return i(this,t)}})},function(t,n,e){"use strict";var r=e(1),i=e(8),o=e(130),u="".endsWith;r(r.P+r.F*e(132)("endsWith"),"String",{endsWith:function(t){var n=o(this,t,"endsWith"),e=arguments.length>1?arguments[1]:void 0,r=i(n.length),a=void 0===e?r:Math.min(i(e),r),s=String(t);return u?u.call(n,s,a):n.slice(a-s.length,a)===s}})},function(t,n,e){"use strict";var r=e(1),i=e(130);r(r.P+r.F*e(132)("includes"),"String",{includes:function(t){return!!~i(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){var r=e(1);r(r.P,"String",{repeat:e(125)})},function(t,n,e){"use strict";var r=e(1),i=e(8),o=e(130),u="".startsWith;r(r.P+r.F*e(132)("startsWith"),"String",{startsWith:function(t){var n=o(this,t,"startsWith"),e=i(Math.min(arguments.length>1?arguments[1]:void 0,n.length)),r=String(t);return u?u.call(n,r,e):n.slice(e,e+r.length)===r}})},function(t,n,e){"use strict";e(17)("anchor",(function(t){return function(n){return t(this,"a","name",n)}}))},function(t,n,e){"use strict";e(17)("big",(function(t){return function(){return t(this,"big","","")}}))},function(t,n,e){"use strict";e(17)("blink",(function(t){return function(){return t(this,"blink","","")}}))},function(t,n,e){"use strict";e(17)("bold",(function(t){return function(){return t(this,"b","","")}}))},function(t,n,e){"use strict";e(17)("fixed",(function(t){return function(){return t(this,"tt","","")}}))},function(t,n,e){"use strict";e(17)("fontcolor",(function(t){return function(n){return t(this,"font","color",n)}}))},function(t,n,e){"use strict";e(17)("fontsize",(function(t){return function(n){return t(this,"font","size",n)}}))},function(t,n,e){"use strict";e(17)("italics",(function(t){return function(){return t(this,"i","","")}}))},function(t,n,e){"use strict";e(17)("link",(function(t){return function(n){return t(this,"a","href",n)}}))},function(t,n,e){"use strict";e(17)("small",(function(t){return function(){return t(this,"small","","")}}))},function(t,n,e){"use strict";e(17)("strike",(function(t){return function(){return t(this,"strike","","")}}))},function(t,n,e){"use strict";e(17)("sub",(function(t){return function(){return t(this,"sub","","")}}))},function(t,n,e){"use strict";e(17)("sup",(function(t){return function(){return t(this,"sup","","")}}))},function(t,n,e){var r=e(1);r(r.S,"Date",{now:function(){return(new Date).getTime()}})},function(t,n,e){"use strict";var r=e(1),i=e(15),o=e(39);r(r.P+r.F*e(3)((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(t){var n=i(this),e=o(n);return"number"!=typeof e||isFinite(e)?n.toISOString():null}})},function(t,n,e){var r=e(1),i=e(330);r(r.P+r.F*(Date.prototype.toISOString!==i),"Date",{toISOString:i})},function(t,n,e){"use strict";var r=e(3),i=Date.prototype.getTime,o=Date.prototype.toISOString,u=function(t){return t>9?t:"0"+t};t.exports=r((function(){return"0385-07-25T07:06:39.999Z"!=o.call(new Date(-50000000000001))}))||!r((function(){o.call(new Date(NaN))}))?function(){if(!isFinite(i.call(this)))throw RangeError("Invalid time value");var t=this,n=t.getUTCFullYear(),e=t.getUTCMilliseconds(),r=n<0?"-":n>9999?"+":"";return r+("00000"+Math.abs(n)).slice(r?-6:-4)+"-"+u(t.getUTCMonth()+1)+"-"+u(t.getUTCDate())+"T"+u(t.getUTCHours())+":"+u(t.getUTCMinutes())+":"+u(t.getUTCSeconds())+"."+(e>99?e:"0"+u(e))+"Z"}:o},function(t,n,e){var r=Date.prototype,i=r.toString,o=r.getTime;new Date(NaN)+""!="Invalid Date"&&e(16)(r,"toString",(function(){var t=o.call(this);return t==t?i.call(this):"Invalid Date"}))},function(t,n,e){var r=e(7)("toPrimitive"),i=Date.prototype;r in i||e(19)(i,r,e(333))},function(t,n,e){"use strict";var r=e(4),i=e(39);t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return i(r(this),"number"!=t)}},function(t,n,e){var r=e(1);r(r.S,"Array",{isArray:e(89)})},function(t,n,e){"use strict";var r=e(25),i=e(1),o=e(15),u=e(179),a=e(133),s=e(8),c=e(134),l=e(135);i(i.S+i.F*!e(90)((function(t){Array.from(t)})),"Array",{from:function(t){var n,e,i,f,h=o(t),d="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,g=void 0!==v,m=0,y=l(h);if(g&&(v=r(v,p>2?arguments[2]:void 0,2)),null==y||d==Array&&a(y))for(e=new d(n=s(h.length));n>m;m++)c(e,m,g?v(h[m],m):h[m]);else for(f=y.call(h),e=new d;!(i=f.next()).done;m++)c(e,m,g?u(f,v,[i.value,m],!0):i.value);return e.length=m,e}})},function(t,n,e){"use strict";var r=e(1),i=e(134);r(r.S+r.F*e(3)((function(){function t(){}return!(Array.of.call(t)instanceof t)})),"Array",{of:function(){for(var t=0,n=arguments.length,e=new("function"==typeof this?this:Array)(n);n>t;)i(e,t,arguments[t++]);return e.length=n,e}})},function(t,n,e){"use strict";var r=e(1),i=e(20),o=[].join;r(r.P+r.F*(e(69)!=Object||!e(22)(o)),"Array",{join:function(t){return o.call(i(this),void 0===t?",":t)}})},function(t,n,e){"use strict";var r=e(1),i=e(121),o=e(32),u=e(48),a=e(8),s=[].slice;r(r.P+r.F*e(3)((function(){i&&s.call(i)})),"Array",{slice:function(t,n){var e=a(this.length),r=o(this);if(n=void 0===n?e:n,"Array"==r)return s.call(this,t,n);for(var i=u(t,e),c=u(n,e),l=a(c-i),f=new Array(l),h=0;h<l;h++)f[h]="String"==r?this.charAt(i+h):this[i+h];return f}})},function(t,n,e){"use strict";var r=e(1),i=e(26),o=e(15),u=e(3),a=[].sort,s=[1,2,3];r(r.P+r.F*(u((function(){s.sort(void 0)}))||!u((function(){s.sort(null)}))||!e(22)(a)),"Array",{sort:function(t){return void 0===t?a.call(o(this)):a.call(o(this),i(t))}})},function(t,n,e){"use strict";var r=e(1),i=e(30)(0),o=e(22)([].forEach,!0);r(r.P+r.F*!o,"Array",{forEach:function(t){return i(this,t,arguments[1])}})},function(t,n,e){var r=e(5),i=e(89),o=e(7)("species");t.exports=function(t){var n;return i(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!i(n.prototype)||(n=void 0),r(n)&&null===(n=n[o])&&(n=void 0)),void 0===n?Array:n}},function(t,n,e){"use strict";var r=e(1),i=e(30)(1);r(r.P+r.F*!e(22)([].map,!0),"Array",{map:function(t){return i(this,t,arguments[1])}})},function(t,n,e){"use strict";var r=e(1),i=e(30)(2);r(r.P+r.F*!e(22)([].filter,!0),"Array",{filter:function(t){return i(this,t,arguments[1])}})},function(t,n,e){"use strict";var r=e(1),i=e(30)(3);r(r.P+r.F*!e(22)([].some,!0),"Array",{some:function(t){return i(this,t,arguments[1])}})},function(t,n,e){"use strict";var r=e(1),i=e(30)(4);r(r.P+r.F*!e(22)([].every,!0),"Array",{every:function(t){return i(this,t,arguments[1])}})},function(t,n,e){"use strict";var r=e(1),i=e(181);r(r.P+r.F*!e(22)([].reduce,!0),"Array",{reduce:function(t){return i(this,t,arguments.length,arguments[1],!1)}})},function(t,n,e){"use strict";var r=e(1),i=e(181);r(r.P+r.F*!e(22)([].reduceRight,!0),"Array",{reduceRight:function(t){return i(this,t,arguments.length,arguments[1],!0)}})},function(t,n,e){"use strict";var r=e(1),i=e(87)(!1),o=[].indexOf,u=!!o&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(u||!e(22)(o)),"Array",{indexOf:function(t){return u?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},function(t,n,e){"use strict";var r=e(1),i=e(20),o=e(27),u=e(8),a=[].lastIndexOf,s=!!a&&1/[1].lastIndexOf(1,-0)<0;r(r.P+r.F*(s||!e(22)(a)),"Array",{lastIndexOf:function(t){if(s)return a.apply(this,arguments)||0;var n=i(this),e=u(n.length),r=e-1;for(arguments.length>1&&(r=Math.min(r,o(arguments[1]))),r<0&&(r=e+r);r>=0;r--)if(r in n&&n[r]===t)return r||0;return-1}})},function(t,n,e){var r=e(1);r(r.P,"Array",{copyWithin:e(182)}),e(52)("copyWithin")},function(t,n,e){var r=e(1);r(r.P,"Array",{fill:e(136)}),e(52)("fill")},function(t,n,e){"use strict";var r=e(1),i=e(30)(5),o=!0;"find"in[]&&Array(1).find((function(){o=!1})),r(r.P+r.F*o,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),e(52)("find")},function(t,n,e){"use strict";var r=e(1),i=e(30)(6),o="findIndex",u=!0;o in[]&&Array(1)[o]((function(){u=!1})),r(r.P+r.F*u,"Array",{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),e(52)(o)},function(t,n,e){e(63)("Array")},function(t,n,e){var r=e(2),i=e(124),o=e(12).f,u=e(50).f,a=e(131),s=e(91),c=r.RegExp,l=c,f=c.prototype,h=/a/g,d=/a/g,p=new c(h)!==h;if(e(11)&&(!p||e(3)((function(){return d[e(7)("match")]=!1,c(h)!=h||c(d)==d||"/a/i"!=c(h,"i")})))){c=function(t,n){var e=this instanceof c,r=a(t),o=void 0===n;return!e&&r&&t.constructor===c&&o?t:i(p?new l(r&&!o?t.source:t,n):l((r=t instanceof c)?t.source:t,r&&o?s.call(t):n),e?this:f,c)};for(var v=function(t){t in c||o(c,t,{configurable:!0,get:function(){return l[t]},set:function(n){l[t]=n}})},g=u(l),m=0;g.length>m;)v(g[m++]);f.constructor=c,c.prototype=f,e(16)(r,"RegExp",c)}e(63)("RegExp")},function(t,n,e){"use strict";e(185);var r=e(4),i=e(91),o=e(11),u=/./.toString,a=function(t){e(16)(RegExp.prototype,"toString",t,!0)};e(3)((function(){return"/a/b"!=u.call({source:"a",flags:"b"})}))?a((function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)})):"toString"!=u.name&&a((function(){return u.call(this)}))},function(t,n,e){"use strict";var r=e(4),i=e(8),o=e(139),u=e(92);e(93)("match",1,(function(t,n,e,a){return[function(e){var r=t(this),i=null==e?void 0:e[n];return void 0!==i?i.call(e,r):new RegExp(e)[n](String(r))},function(t){var n=a(e,t,this);if(n.done)return n.value;var s=r(t),c=String(this);if(!s.global)return u(s,c);var l=s.unicode;s.lastIndex=0;for(var f,h=[],d=0;null!==(f=u(s,c));){var p=String(f[0]);h[d]=p,""===p&&(s.lastIndex=o(c,i(s.lastIndex),l)),d++}return 0===d?null:h}]}))},function(t,n,e){"use strict";var r=e(4),i=e(15),o=e(8),u=e(27),a=e(139),s=e(92),c=Math.max,l=Math.min,f=Math.floor,h=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g;e(93)("replace",2,(function(t,n,e,p){return[function(r,i){var o=t(this),u=null==r?void 0:r[n];return void 0!==u?u.call(r,o,i):e.call(String(o),r,i)},function(t,n){var i=p(e,t,this,n);if(i.done)return i.value;var f=r(t),h=String(this),d="function"==typeof n;d||(n=String(n));var g=f.global;if(g){var m=f.unicode;f.lastIndex=0}for(var y=[];;){var b=s(f,h);if(null===b)break;if(y.push(b),!g)break;""===String(b[0])&&(f.lastIndex=a(h,o(f.lastIndex),m))}for(var _,x="",w=0,A=0;A<y.length;A++){b=y[A];for(var O=String(b[0]),k=c(l(u(b.index),h.length),0),E=[],M=1;M<b.length;M++)E.push(void 0===(_=b[M])?_:String(_));var j=b.groups;if(d){var S=[O].concat(E,k,h);void 0!==j&&S.push(j);var C=String(n.apply(void 0,S))}else C=v(O,h,k,E,j,n);k>=w&&(x+=h.slice(w,k)+C,w=k+O.length)}return x+h.slice(w)}];function v(t,n,r,o,u,a){var s=r+t.length,c=o.length,l=d;return void 0!==u&&(u=i(u),l=h),e.call(a,l,(function(e,i){var a;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(s);case"<":a=u[i.slice(1,-1)];break;default:var l=+i;if(0===l)return e;if(l>c){var h=f(l/10);return 0===h?e:h<=c?void 0===o[h-1]?i.charAt(1):o[h-1]+i.charAt(1):e}a=o[l-1]}return void 0===a?"":a}))}}))},function(t,n,e){"use strict";var r=e(4),i=e(170),o=e(92);e(93)("search",1,(function(t,n,e,u){return[function(e){var r=t(this),i=null==e?void 0:e[n];return void 0!==i?i.call(e,r):new RegExp(e)[n](String(r))},function(t){var n=u(e,t,this);if(n.done)return n.value;var a=r(t),s=String(this),c=a.lastIndex;i(c,0)||(a.lastIndex=0);var l=o(a,s);return i(a.lastIndex,c)||(a.lastIndex=c),null===l?-1:l.index}]}))},function(t,n,e){"use strict";var r=e(131),i=e(4),o=e(72),u=e(139),a=e(8),s=e(92),c=e(138),l=e(3),f=Math.min,h=[].push,d="length",p=!l((function(){RegExp(4294967295,"y")}));e(93)("split",2,(function(t,n,e,l){var v;return v="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1)[d]||2!="ab".split(/(?:ab)*/)[d]||4!=".".split(/(.?)(.?)/)[d]||".".split(/()()/)[d]>1||"".split(/.?/)[d]?function(t,n){var i=String(this);if(void 0===t&&0===n)return[];if(!r(t))return e.call(i,t,n);for(var o,u,a,s=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,p=void 0===n?4294967295:n>>>0,v=new RegExp(t.source,l+"g");(o=c.call(v,i))&&!((u=v.lastIndex)>f&&(s.push(i.slice(f,o.index)),o[d]>1&&o.index<i[d]&&h.apply(s,o.slice(1)),a=o[0][d],f=u,s[d]>=p));)v.lastIndex===o.index&&v.lastIndex++;return f===i[d]?!a&&v.test("")||s.push(""):s.push(i.slice(f)),s[d]>p?s.slice(0,p):s}:"0".split(void 0,0)[d]?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,r){var i=t(this),o=null==e?void 0:e[n];return void 0!==o?o.call(e,i,r):v.call(String(i),e,r)},function(t,n){var r=l(v,t,this,n,v!==e);if(r.done)return r.value;var c=i(t),h=String(this),d=o(c,RegExp),g=c.unicode,m=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(p?"y":"g"),y=new d(p?c:"^(?:"+c.source+")",m),b=void 0===n?4294967295:n>>>0;if(0===b)return[];if(0===h.length)return null===s(y,h)?[h]:[];for(var _=0,x=0,w=[];x<h.length;){y.lastIndex=p?x:0;var A,O=s(y,p?h:h.slice(x));if(null===O||(A=f(a(y.lastIndex+(p?0:x)),h.length))===_)x=u(h,x,g);else{if(w.push(h.slice(_,x)),w.length===b)return w;for(var k=1;k<=O.length-1;k++)if(w.push(O[k]),w.length===b)return w;x=_=A}}return w.push(h.slice(_)),w}]}))},function(t,n,e){var r=e(2),i=e(140).set,o=r.MutationObserver||r.WebKitMutationObserver,u=r.process,a=r.Promise,s="process"==e(32)(u);t.exports=function(){var t,n,e,c=function(){var r,i;for(s&&(r=u.domain)&&r.exit();t;){i=t.fn,t=t.next;try{i()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(s)e=function(){u.nextTick(c)};else if(!o||r.navigator&&r.navigator.standalone)if(a&&a.resolve){var l=a.resolve(void 0);e=function(){l.then(c)}}else e=function(){i.call(r,c)};else{var f=!0,h=document.createTextNode("");new o(c).observe(h,{characterData:!0}),e=function(){h.data=f=!f}}return function(r){var i={fn:r,next:void 0};n&&(n.next=i),t||(t=i,e()),n=i}}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,e){"use strict";var r=e(189),i=e(53);t.exports=e(96)("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var n=r.getEntry(i(this,"Map"),t);return n&&n.v},set:function(t,n){return r.def(i(this,"Map"),0===t?0:t,n)}},r,!0)},function(t,n,e){"use strict";var r=e(189),i=e(53);t.exports=e(96)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(i(this,"Set"),t=0===t?0:t,t)}},r)},function(t,n,e){"use strict";var r,i=e(2),o=e(30)(0),u=e(16),a=e(40),s=e(169),c=e(190),l=e(5),f=e(53),h=e(53),d=!i.ActiveXObject&&"ActiveXObject"in i,p=a.getWeak,v=Object.isExtensible,g=c.ufstore,m=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},y={get:function(t){if(l(t)){var n=p(t);return!0===n?g(f(this,"WeakMap")).get(t):n?n[this._i]:void 0}},set:function(t,n){return c.def(f(this,"WeakMap"),t,n)}},b=t.exports=e(96)("WeakMap",m,y,c,!0,!0);h&&d&&(s((r=c.getConstructor(m,"WeakMap")).prototype,y),a.NEED=!0,o(["delete","has","get","set"],(function(t){var n=b.prototype,e=n[t];u(n,t,(function(n,i){if(l(n)&&!v(n)){this._f||(this._f=new r);var o=this._f[t](n,i);return"set"==t?this:o}return e.call(this,n,i)}))})))},function(t,n,e){"use strict";var r=e(190),i=e(53);e(96)("WeakSet",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(i(this,"WeakSet"),t,!0)}},r,!1,!0)},function(t,n,e){"use strict";var r=e(1),i=e(97),o=e(141),u=e(4),a=e(48),s=e(8),c=e(5),l=e(2).ArrayBuffer,f=e(72),h=o.ArrayBuffer,d=o.DataView,p=i.ABV&&l.isView,v=h.prototype.slice,g=i.VIEW;r(r.G+r.W+r.F*(l!==h),{ArrayBuffer:h}),r(r.S+r.F*!i.CONSTR,"ArrayBuffer",{isView:function(t){return p&&p(t)||c(t)&&g in t}}),r(r.P+r.U+r.F*e(3)((function(){return!new h(2).slice(1,void 0).byteLength})),"ArrayBuffer",{slice:function(t,n){if(void 0!==v&&void 0===n)return v.call(u(this),t);for(var e=u(this).byteLength,r=a(t,e),i=a(void 0===n?e:n,e),o=new(f(this,h))(s(i-r)),c=new d(this),l=new d(o),p=0;r<i;)l.setUint8(p++,c.getUint8(r++));return o}}),e(63)("ArrayBuffer")},function(t,n,e){var r=e(1);r(r.G+r.W+r.F*!e(97).ABV,{DataView:e(141).DataView})},function(t,n,e){e(34)("Int8",1,(function(t){return function(n,e,r){return t(this,n,e,r)}}))},function(t,n,e){e(34)("Uint8",1,(function(t){return function(n,e,r){return t(this,n,e,r)}}))},function(t,n,e){e(34)("Uint8",1,(function(t){return function(n,e,r){return t(this,n,e,r)}}),!0)},function(t,n,e){e(34)("Int16",2,(function(t){return function(n,e,r){return t(this,n,e,r)}}))},function(t,n,e){e(34)("Uint16",2,(function(t){return function(n,e,r){return t(this,n,e,r)}}))},function(t,n,e){e(34)("Int32",4,(function(t){return function(n,e,r){return t(this,n,e,r)}}))},function(t,n,e){e(34)("Uint32",4,(function(t){return function(n,e,r){return t(this,n,e,r)}}))},function(t,n,e){e(34)("Float32",4,(function(t){return function(n,e,r){return t(this,n,e,r)}}))},function(t,n,e){e(34)("Float64",8,(function(t){return function(n,e,r){return t(this,n,e,r)}}))},function(t,n,e){var r=e(1),i=e(26),o=e(4),u=(e(2).Reflect||{}).apply,a=Function.apply;r(r.S+r.F*!e(3)((function(){u((function(){}))})),"Reflect",{apply:function(t,n,e){var r=i(t),s=o(e);return u?u(r,n,s):a.call(r,n,s)}})},function(t,n,e){var r=e(1),i=e(49),o=e(26),u=e(4),a=e(5),s=e(3),c=e(171),l=(e(2).Reflect||{}).construct,f=s((function(){function t(){}return!(l((function(){}),[],t)instanceof t)})),h=!s((function(){l((function(){}))}));r(r.S+r.F*(f||h),"Reflect",{construct:function(t,n){o(t),u(n);var e=arguments.length<3?t:o(arguments[2]);if(h&&!f)return l(t,n,e);if(t==e){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var r=[null];return r.push.apply(r,n),new(c.apply(t,r))}var s=e.prototype,d=i(a(s)?s:Object.prototype),p=Function.apply.call(t,d,n);return a(p)?p:d}})},function(t,n,e){var r=e(12),i=e(1),o=e(4),u=e(39);i(i.S+i.F*e(3)((function(){Reflect.defineProperty(r.f({},1,{value:1}),1,{value:2})})),"Reflect",{defineProperty:function(t,n,e){o(t),n=u(n,!0),o(e);try{return r.f(t,n,e),!0}catch(t){return!1}}})},function(t,n,e){var r=e(1),i=e(28).f,o=e(4);r(r.S,"Reflect",{deleteProperty:function(t,n){var e=i(o(t),n);return!(e&&!e.configurable)&&delete t[n]}})},function(t,n,e){"use strict";var r=e(1),i=e(4),o=function(t){this._t=i(t),this._i=0;var n,e=this._k=[];for(n in t)e.push(n)};e(178)(o,"Object",(function(){var t,n=this._k;do{if(this._i>=n.length)return{value:void 0,done:!0}}while(!((t=n[this._i++])in this._t));return{value:t,done:!1}})),r(r.S,"Reflect",{enumerate:function(t){return new o(t)}})},function(t,n,e){var r=e(28),i=e(51),o=e(18),u=e(1),a=e(5),s=e(4);u(u.S,"Reflect",{get:function t(n,e){var u,c,l=arguments.length<3?n:arguments[2];return s(n)===l?n[e]:(u=r.f(n,e))?o(u,"value")?u.value:void 0!==u.get?u.get.call(l):void 0:a(c=i(n))?t(c,e,l):void 0}})},function(t,n,e){var r=e(28),i=e(1),o=e(4);i(i.S,"Reflect",{getOwnPropertyDescriptor:function(t,n){return r.f(o(t),n)}})},function(t,n,e){var r=e(1),i=e(51),o=e(4);r(r.S,"Reflect",{getPrototypeOf:function(t){return i(o(t))}})},function(t,n,e){var r=e(1);r(r.S,"Reflect",{has:function(t,n){return n in t}})},function(t,n,e){var r=e(1),i=e(4),o=Object.isExtensible;r(r.S,"Reflect",{isExtensible:function(t){return i(t),!o||o(t)}})},function(t,n,e){var r=e(1);r(r.S,"Reflect",{ownKeys:e(192)})},function(t,n,e){var r=e(1),i=e(4),o=Object.preventExtensions;r(r.S,"Reflect",{preventExtensions:function(t){i(t);try{return o&&o(t),!0}catch(t){return!1}}})},function(t,n,e){var r=e(12),i=e(28),o=e(51),u=e(18),a=e(1),s=e(44),c=e(4),l=e(5);a(a.S,"Reflect",{set:function t(n,e,a){var f,h,d=arguments.length<4?n:arguments[3],p=i.f(c(n),e);if(!p){if(l(h=o(n)))return t(h,e,a,d);p=s(0)}if(u(p,"value")){if(!1===p.writable||!l(d))return!1;if(f=i.f(d,e)){if(f.get||f.set||!1===f.writable)return!1;f.value=a,r.f(d,e,f)}else r.f(d,e,s(0,a));return!0}return void 0!==p.set&&(p.set.call(d,a),!0)}})},function(t,n,e){var r=e(1),i=e(122);i&&r(r.S,"Reflect",{setPrototypeOf:function(t,n){i.check(t,n);try{return i.set(t,n),!0}catch(t){return!1}}})},function(t,n,e){e(393),t.exports=e(9).Array.includes},function(t,n,e){"use strict";var r=e(1),i=e(87)(!0);r(r.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),e(52)("includes")},function(t,n,e){e(395),t.exports=e(9).Array.flatMap},function(t,n,e){"use strict";var r=e(1),i=e(396),o=e(15),u=e(8),a=e(26),s=e(180);r(r.P,"Array",{flatMap:function(t){var n,e,r=o(this);return a(t),n=u(r.length),e=s(r,0),i(e,r,r,n,0,1,t,arguments[1]),e}}),e(52)("flatMap")},function(t,n,e){"use strict";var r=e(89),i=e(5),o=e(8),u=e(25),a=e(7)("isConcatSpreadable");t.exports=function t(n,e,s,c,l,f,h,d){for(var p,v,g=l,m=0,y=!!h&&u(h,d,3);m<c;){if(m in s){if(p=y?y(s[m],m,e):s[m],v=!1,i(p)&&(v=void 0!==(v=p[a])?!!v:r(p)),v&&f>0)g=t(n,e,p,o(p.length),g,f-1)-1;else{if(g>=9007199254740991)throw TypeError();n[g]=p}g++}m++}return g}},function(t,n,e){e(398),t.exports=e(9).String.padStart},function(t,n,e){"use strict";var r=e(1),i=e(193),o=e(95),u=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);r(r.P+r.F*u,"String",{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},function(t,n,e){e(400),t.exports=e(9).String.padEnd},function(t,n,e){"use strict";var r=e(1),i=e(193),o=e(95),u=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);r(r.P+r.F*u,"String",{padEnd:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},function(t,n,e){e(402),t.exports=e(9).String.trimLeft},function(t,n,e){"use strict";e(61)("trimLeft",(function(t){return function(){return t(this,1)}}),"trimStart")},function(t,n,e){e(404),t.exports=e(9).String.trimRight},function(t,n,e){"use strict";e(61)("trimRight",(function(t){return function(){return t(this,2)}}),"trimEnd")},function(t,n,e){e(406),t.exports=e(118).f("asyncIterator")},function(t,n,e){e(165)("asyncIterator")},function(t,n,e){e(408),t.exports=e(9).Object.getOwnPropertyDescriptors},function(t,n,e){var r=e(1),i=e(192),o=e(20),u=e(28),a=e(134);r(r.S,"Object",{getOwnPropertyDescriptors:function(t){for(var n,e,r=o(t),s=u.f,c=i(r),l={},f=0;c.length>f;)void 0!==(e=s(r,n=c[f++]))&&a(l,n,e);return l}})},function(t,n,e){e(410),t.exports=e(9).Object.values},function(t,n,e){var r=e(1),i=e(194)(!1);r(r.S,"Object",{values:function(t){return i(t)}})},function(t,n,e){e(412),t.exports=e(9).Object.entries},function(t,n,e){var r=e(1),i=e(194)(!0);r(r.S,"Object",{entries:function(t){return i(t)}})},function(t,n,e){"use strict";e(186),e(414),t.exports=e(9).Promise.finally},function(t,n,e){"use strict";var r=e(1),i=e(9),o=e(2),u=e(72),a=e(188);r(r.P+r.R,"Promise",{finally:function(t){var n=u(this,i.Promise||o.Promise),e="function"==typeof t;return this.then(e?function(e){return a(n,t()).then((function(){return e}))}:t,e?function(e){return a(n,t()).then((function(){throw e}))}:t)}})},function(t,n,e){e(416),e(417),e(418),t.exports=e(9)},function(t,n,e){var r=e(2),i=e(1),o=e(95),u=[].slice,a=/MSIE .\./.test(o),s=function(t){return function(n,e){var r=arguments.length>2,i=!!r&&u.call(arguments,2);return t(r?function(){("function"==typeof n?n:Function(n)).apply(this,i)}:n,e)}};i(i.G+i.B+i.F*a,{setTimeout:s(r.setTimeout),setInterval:s(r.setInterval)})},function(t,n,e){var r=e(1),i=e(140);r(r.G+r.B,{setImmediate:i.set,clearImmediate:i.clear})},function(t,n,e){for(var r=e(137),i=e(47),o=e(16),u=e(2),a=e(19),s=e(62),c=e(7),l=c("iterator"),f=c("toStringTag"),h=s.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=i(d),v=0;v<p.length;v++){var g,m=p[v],y=d[m],b=u[m],_=b&&b.prototype;if(_&&(_[l]||a(_,l,h),_[f]||a(_,f,m),s[m]=h,y))for(g in r)_[g]||o(_,g,r[g],!0)}},function(t,n,e){var r=function(t){"use strict";var n=Object.prototype,e=n.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",u=r.toStringTag||"@@toStringTag";function a(t,n,e,r){var i=n&&n.prototype instanceof l?n:l,o=Object.create(i.prototype),u=new w(r||[]);return o._invoke=function(t,n,e){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return O()}for(e.method=i,e.arg=o;;){var u=e.delegate;if(u){var a=b(u,e);if(a){if(a===c)continue;return a}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var l=s(t,n,e);if("normal"===l.type){if(r=e.done?"completed":"suspendedYield",l.arg===c)continue;return{value:l.arg,done:e.done}}"throw"===l.type&&(r="completed",e.method="throw",e.arg=l.arg)}}}(t,e,u),o}function s(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=a;var c={};function l(){}function f(){}function h(){}var d={};d[i]=function(){return this};var p=Object.getPrototypeOf,v=p&&p(p(A([])));v&&v!==n&&e.call(v,i)&&(d=v);var g=h.prototype=l.prototype=Object.create(d);function m(t){["next","throw","return"].forEach((function(n){t[n]=function(t){return this._invoke(n,t)}}))}function y(t,n){var r;this._invoke=function(i,o){function u(){return new n((function(r,u){!function r(i,o,u,a){var c=s(t[i],t,o);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&e.call(f,"__await")?n.resolve(f.__await).then((function(t){r("next",t,u,a)}),(function(t){r("throw",t,u,a)})):n.resolve(f).then((function(t){l.value=t,u(l)}),(function(t){return r("throw",t,u,a)}))}a(c.arg)}(i,o,r,u)}))}return r=r?r.then(u,u):u()}}function b(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,b(t,n),"throw"===n.method))return c;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var r=s(e,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,c;var i=r.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,c):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,c)}function _(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function x(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function w(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function A(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=g.constructor=h,h.constructor=f,h[u]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===f||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},m(y.prototype),y.prototype[o]=function(){return this},t.AsyncIterator=y,t.async=function(n,e,r,i,o){void 0===o&&(o=Promise);var u=new y(a(n,e,r,i),o);return t.isGeneratorFunction(e)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},m(g),g[u]="Generator",g[i]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=A,w.prototype={constructor:w,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return u.type="throw",u.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],u=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var a=e.call(o,"catchLoc"),s=e.call(o,"finallyLoc");if(a&&s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&e.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=t,u.arg=n,o?(this.method="next",this.next=o.finallyLoc,c):this.complete(u)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),c},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),x(e),c}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var i=r.arg;x(e)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:A(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),c}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,n,e){e(421),t.exports=e(195).global},function(t,n,e){var r=e(422);r(r.G,{global:e(142)})},function(t,n,e){var r=e(142),i=e(195),o=e(423),u=e(425),a=e(432),s=function(t,n,e){var c,l,f,h=t&s.F,d=t&s.G,p=t&s.S,v=t&s.P,g=t&s.B,m=t&s.W,y=d?i:i[n]||(i[n]={}),b=y.prototype,_=d?r:p?r[n]:(r[n]||{}).prototype;for(c in d&&(e=n),e)(l=!h&&_&&void 0!==_[c])&&a(y,c)||(f=l?_[c]:e[c],y[c]=d&&"function"!=typeof _[c]?e[c]:g&&l?o(f,r):m&&_[c]==f?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(f):v&&"function"==typeof f?o(Function.call,f):f,v&&((y.virtual||(y.virtual={}))[c]=f,t&s.R&&b&&!b[c]&&u(b,c,f)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,n,e){var r=e(424);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(426),i=e(431);t.exports=e(144)?function(t,n,e){return r.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(427),i=e(428),o=e(430),u=Object.defineProperty;n.f=e(144)?Object.defineProperty:function(t,n,e){if(r(t),n=o(n,!0),r(e),i)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(143);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){t.exports=!e(144)&&!e(196)((function(){return 7!=Object.defineProperty(e(429)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(143),i=e(142).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,n,e){var r=e(143);t.exports=function(t,n){if(!r(t))return t;var e,i;if(n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;if("function"==typeof(e=t.valueOf)&&!r(i=e.call(t)))return i;if(!n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){(function(t,r){var i;
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(){var o="Expected a function",u="__lodash_placeholder__",a=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],s="[object Arguments]",c="[object Array]",l="[object Boolean]",f="[object Date]",h="[object Error]",d="[object Function]",p="[object GeneratorFunction]",v="[object Map]",g="[object Number]",m="[object Object]",y="[object RegExp]",b="[object Set]",_="[object String]",x="[object Symbol]",w="[object WeakMap]",A="[object ArrayBuffer]",O="[object DataView]",k="[object Float32Array]",E="[object Float64Array]",M="[object Int8Array]",j="[object Int16Array]",S="[object Int32Array]",C="[object Uint8Array]",F="[object Uint16Array]",D="[object Uint32Array]",N=/\b__p \+= '';/g,R=/\b(__p \+=) '' \+/g,T=/(__e\(.*?\)|\b__t\)) \+\n'';/g,B=/&(?:amp|lt|gt|quot|#39);/g,P=/[&<>"']/g,L=RegExp(B.source),z=RegExp(P.source),U=/<%-([\s\S]+?)%>/g,I=/<%([\s\S]+?)%>/g,q=/<%=([\s\S]+?)%>/g,$=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,W=/^\w*$/,V=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Y=/[\\^$.*+?()[\]{}|]/g,H=RegExp(Y.source),G=/^\s+|\s+$/g,X=/^\s+/,J=/\s+$/,Z=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,K=/\{\n\/\* \[wrapped with (.+)\] \*/,Q=/,? & /,tt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,nt=/\\(\\)?/g,et=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,rt=/\w*$/,it=/^[-+]0x[0-9a-f]+$/i,ot=/^0b[01]+$/i,ut=/^\[object .+?Constructor\]$/,at=/^0o[0-7]+$/i,st=/^(?:0|[1-9]\d*)$/,ct=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,lt=/($^)/,ft=/['\n\r\u2028\u2029\\]/g,ht="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",dt="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",pt="[\\ud800-\\udfff]",vt="["+dt+"]",gt="["+ht+"]",mt="\\d+",yt="[\\u2700-\\u27bf]",bt="[a-z\\xdf-\\xf6\\xf8-\\xff]",_t="[^\\ud800-\\udfff"+dt+mt+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",xt="\\ud83c[\\udffb-\\udfff]",wt="[^\\ud800-\\udfff]",At="(?:\\ud83c[\\udde6-\\uddff]){2}",Ot="[\\ud800-\\udbff][\\udc00-\\udfff]",kt="[A-Z\\xc0-\\xd6\\xd8-\\xde]",Et="(?:"+bt+"|"+_t+")",Mt="(?:"+kt+"|"+_t+")",jt="(?:"+gt+"|"+xt+")"+"?",St="[\\ufe0e\\ufe0f]?"+jt+("(?:\\u200d(?:"+[wt,At,Ot].join("|")+")[\\ufe0e\\ufe0f]?"+jt+")*"),Ct="(?:"+[yt,At,Ot].join("|")+")"+St,Ft="(?:"+[wt+gt+"?",gt,At,Ot,pt].join("|")+")",Dt=RegExp("['’]","g"),Nt=RegExp(gt,"g"),Rt=RegExp(xt+"(?="+xt+")|"+Ft+St,"g"),Tt=RegExp([kt+"?"+bt+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[vt,kt,"$"].join("|")+")",Mt+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[vt,kt+Et,"$"].join("|")+")",kt+"?"+Et+"+(?:['’](?:d|ll|m|re|s|t|ve))?",kt+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",mt,Ct].join("|"),"g"),Bt=RegExp("[\\u200d\\ud800-\\udfff"+ht+"\\ufe0e\\ufe0f]"),Pt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Lt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],zt=-1,Ut={};Ut[k]=Ut[E]=Ut[M]=Ut[j]=Ut[S]=Ut[C]=Ut["[object Uint8ClampedArray]"]=Ut[F]=Ut[D]=!0,Ut[s]=Ut[c]=Ut[A]=Ut[l]=Ut[O]=Ut[f]=Ut[h]=Ut[d]=Ut[v]=Ut[g]=Ut[m]=Ut[y]=Ut[b]=Ut[_]=Ut[w]=!1;var It={};It[s]=It[c]=It[A]=It[O]=It[l]=It[f]=It[k]=It[E]=It[M]=It[j]=It[S]=It[v]=It[g]=It[m]=It[y]=It[b]=It[_]=It[x]=It[C]=It["[object Uint8ClampedArray]"]=It[F]=It[D]=!0,It[h]=It[d]=It[w]=!1;var qt={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},$t=parseFloat,Wt=parseInt,Vt="object"==typeof t&&t&&t.Object===Object&&t,Yt="object"==typeof self&&self&&self.Object===Object&&self,Ht=Vt||Yt||Function("return this")(),Gt=n&&!n.nodeType&&n,Xt=Gt&&"object"==typeof r&&r&&!r.nodeType&&r,Jt=Xt&&Xt.exports===Gt,Zt=Jt&&Vt.process,Kt=function(){try{var t=Xt&&Xt.require&&Xt.require("util").types;return t||Zt&&Zt.binding&&Zt.binding("util")}catch(t){}}(),Qt=Kt&&Kt.isArrayBuffer,tn=Kt&&Kt.isDate,nn=Kt&&Kt.isMap,en=Kt&&Kt.isRegExp,rn=Kt&&Kt.isSet,on=Kt&&Kt.isTypedArray;function un(t,n,e){switch(e.length){case 0:return t.call(n);case 1:return t.call(n,e[0]);case 2:return t.call(n,e[0],e[1]);case 3:return t.call(n,e[0],e[1],e[2])}return t.apply(n,e)}function an(t,n,e,r){for(var i=-1,o=null==t?0:t.length;++i<o;){var u=t[i];n(r,u,e(u),t)}return r}function sn(t,n){for(var e=-1,r=null==t?0:t.length;++e<r&&!1!==n(t[e],e,t););return t}function cn(t,n){for(var e=null==t?0:t.length;e--&&!1!==n(t[e],e,t););return t}function ln(t,n){for(var e=-1,r=null==t?0:t.length;++e<r;)if(!n(t[e],e,t))return!1;return!0}function fn(t,n){for(var e=-1,r=null==t?0:t.length,i=0,o=[];++e<r;){var u=t[e];n(u,e,t)&&(o[i++]=u)}return o}function hn(t,n){return!!(null==t?0:t.length)&&wn(t,n,0)>-1}function dn(t,n,e){for(var r=-1,i=null==t?0:t.length;++r<i;)if(e(n,t[r]))return!0;return!1}function pn(t,n){for(var e=-1,r=null==t?0:t.length,i=Array(r);++e<r;)i[e]=n(t[e],e,t);return i}function vn(t,n){for(var e=-1,r=n.length,i=t.length;++e<r;)t[i+e]=n[e];return t}function gn(t,n,e,r){var i=-1,o=null==t?0:t.length;for(r&&o&&(e=t[++i]);++i<o;)e=n(e,t[i],i,t);return e}function mn(t,n,e,r){var i=null==t?0:t.length;for(r&&i&&(e=t[--i]);i--;)e=n(e,t[i],i,t);return e}function yn(t,n){for(var e=-1,r=null==t?0:t.length;++e<r;)if(n(t[e],e,t))return!0;return!1}var bn=En("length");function _n(t,n,e){var r;return e(t,(function(t,e,i){if(n(t,e,i))return r=e,!1})),r}function xn(t,n,e,r){for(var i=t.length,o=e+(r?1:-1);r?o--:++o<i;)if(n(t[o],o,t))return o;return-1}function wn(t,n,e){return n==n?function(t,n,e){var r=e-1,i=t.length;for(;++r<i;)if(t[r]===n)return r;return-1}(t,n,e):xn(t,On,e)}function An(t,n,e,r){for(var i=e-1,o=t.length;++i<o;)if(r(t[i],n))return i;return-1}function On(t){return t!=t}function kn(t,n){var e=null==t?0:t.length;return e?Sn(t,n)/e:NaN}function En(t){return function(n){return null==n?void 0:n[t]}}function Mn(t){return function(n){return null==t?void 0:t[n]}}function jn(t,n,e,r,i){return i(t,(function(t,i,o){e=r?(r=!1,t):n(e,t,i,o)})),e}function Sn(t,n){for(var e,r=-1,i=t.length;++r<i;){var o=n(t[r]);void 0!==o&&(e=void 0===e?o:e+o)}return e}function Cn(t,n){for(var e=-1,r=Array(t);++e<t;)r[e]=n(e);return r}function Fn(t){return function(n){return t(n)}}function Dn(t,n){return pn(n,(function(n){return t[n]}))}function Nn(t,n){return t.has(n)}function Rn(t,n){for(var e=-1,r=t.length;++e<r&&wn(n,t[e],0)>-1;);return e}function Tn(t,n){for(var e=t.length;e--&&wn(n,t[e],0)>-1;);return e}function Bn(t,n){for(var e=t.length,r=0;e--;)t[e]===n&&++r;return r}var Pn=Mn({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),Ln=Mn({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function zn(t){return"\\"+qt[t]}function Un(t){return Bt.test(t)}function In(t){var n=-1,e=Array(t.size);return t.forEach((function(t,r){e[++n]=[r,t]})),e}function qn(t,n){return function(e){return t(n(e))}}function $n(t,n){for(var e=-1,r=t.length,i=0,o=[];++e<r;){var a=t[e];a!==n&&a!==u||(t[e]=u,o[i++]=e)}return o}function Wn(t){var n=-1,e=Array(t.size);return t.forEach((function(t){e[++n]=t})),e}function Vn(t){var n=-1,e=Array(t.size);return t.forEach((function(t){e[++n]=[t,t]})),e}function Yn(t){return Un(t)?function(t){var n=Rt.lastIndex=0;for(;Rt.test(t);)++n;return n}(t):bn(t)}function Hn(t){return Un(t)?function(t){return t.match(Rt)||[]}(t):function(t){return t.split("")}(t)}var Gn=Mn({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var Xn=function t(n){var e,r=(n=null==n?Ht:Xn.defaults(Ht.Object(),n,Xn.pick(Ht,Lt))).Array,i=n.Date,ht=n.Error,dt=n.Function,pt=n.Math,vt=n.Object,gt=n.RegExp,mt=n.String,yt=n.TypeError,bt=r.prototype,_t=dt.prototype,xt=vt.prototype,wt=n["__core-js_shared__"],At=_t.toString,Ot=xt.hasOwnProperty,kt=0,Et=(e=/[^.]+$/.exec(wt&&wt.keys&&wt.keys.IE_PROTO||""))?"Symbol(src)_1."+e:"",Mt=xt.toString,jt=At.call(vt),St=Ht._,Ct=gt("^"+At.call(Ot).replace(Y,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ft=Jt?n.Buffer:void 0,Rt=n.Symbol,Bt=n.Uint8Array,qt=Ft?Ft.allocUnsafe:void 0,Vt=qn(vt.getPrototypeOf,vt),Yt=vt.create,Gt=xt.propertyIsEnumerable,Xt=bt.splice,Zt=Rt?Rt.isConcatSpreadable:void 0,Kt=Rt?Rt.iterator:void 0,bn=Rt?Rt.toStringTag:void 0,Mn=function(){try{var t=Qi(vt,"defineProperty");return t({},"",{}),t}catch(t){}}(),Jn=n.clearTimeout!==Ht.clearTimeout&&n.clearTimeout,Zn=i&&i.now!==Ht.Date.now&&i.now,Kn=n.setTimeout!==Ht.setTimeout&&n.setTimeout,Qn=pt.ceil,te=pt.floor,ne=vt.getOwnPropertySymbols,ee=Ft?Ft.isBuffer:void 0,re=n.isFinite,ie=bt.join,oe=qn(vt.keys,vt),ue=pt.max,ae=pt.min,se=i.now,ce=n.parseInt,le=pt.random,fe=bt.reverse,he=Qi(n,"DataView"),de=Qi(n,"Map"),pe=Qi(n,"Promise"),ve=Qi(n,"Set"),ge=Qi(n,"WeakMap"),me=Qi(vt,"create"),ye=ge&&new ge,be={},_e=Mo(he),xe=Mo(de),we=Mo(pe),Ae=Mo(ve),Oe=Mo(ge),ke=Rt?Rt.prototype:void 0,Ee=ke?ke.valueOf:void 0,Me=ke?ke.toString:void 0;function je(t){if(Wu(t)&&!Nu(t)&&!(t instanceof De)){if(t instanceof Fe)return t;if(Ot.call(t,"__wrapped__"))return jo(t)}return new Fe(t)}var Se=function(){function t(){}return function(n){if(!$u(n))return{};if(Yt)return Yt(n);t.prototype=n;var e=new t;return t.prototype=void 0,e}}();function Ce(){}function Fe(t,n){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=void 0}function De(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}function Ne(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function Re(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function Te(t){var n=-1,e=null==t?0:t.length;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function Be(t){var n=-1,e=null==t?0:t.length;for(this.__data__=new Te;++n<e;)this.add(t[n])}function Pe(t){var n=this.__data__=new Re(t);this.size=n.size}function Le(t,n){var e=Nu(t),r=!e&&Du(t),i=!e&&!r&&Pu(t),o=!e&&!r&&!i&&Ku(t),u=e||r||i||o,a=u?Cn(t.length,mt):[],s=a.length;for(var c in t)!n&&!Ot.call(t,c)||u&&("length"==c||i&&("offset"==c||"parent"==c)||o&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||uo(c,s))||a.push(c);return a}function ze(t){var n=t.length;return n?t[Br(0,n-1)]:void 0}function Ue(t,n){return Oo(mi(t),Xe(n,0,t.length))}function Ie(t){return Oo(mi(t))}function qe(t,n,e){(void 0!==e&&!Su(t[n],e)||void 0===e&&!(n in t))&&He(t,n,e)}function $e(t,n,e){var r=t[n];Ot.call(t,n)&&Su(r,e)&&(void 0!==e||n in t)||He(t,n,e)}function We(t,n){for(var e=t.length;e--;)if(Su(t[e][0],n))return e;return-1}function Ve(t,n,e,r){return tr(t,(function(t,i,o){n(r,t,e(t),o)})),r}function Ye(t,n){return t&&yi(n,_a(n),t)}function He(t,n,e){"__proto__"==n&&Mn?Mn(t,n,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[n]=e}function Ge(t,n){for(var e=-1,i=n.length,o=r(i),u=null==t;++e<i;)o[e]=u?void 0:va(t,n[e]);return o}function Xe(t,n,e){return t==t&&(void 0!==e&&(t=t<=e?t:e),void 0!==n&&(t=t>=n?t:n)),t}function Je(t,n,e,r,i,o){var u,a=1&n,c=2&n,h=4&n;if(e&&(u=i?e(t,r,i,o):e(t)),void 0!==u)return u;if(!$u(t))return t;var w=Nu(t);if(w){if(u=function(t){var n=t.length,e=new t.constructor(n);n&&"string"==typeof t[0]&&Ot.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!a)return mi(t,u)}else{var N=eo(t),R=N==d||N==p;if(Pu(t))return fi(t,a);if(N==m||N==s||R&&!i){if(u=c||R?{}:io(t),!a)return c?function(t,n){return yi(t,no(t),n)}(t,function(t,n){return t&&yi(n,xa(n),t)}(u,t)):function(t,n){return yi(t,to(t),n)}(t,Ye(u,t))}else{if(!It[N])return i?t:{};u=function(t,n,e){var r=t.constructor;switch(n){case A:return hi(t);case l:case f:return new r(+t);case O:return function(t,n){var e=n?hi(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,e);case k:case E:case M:case j:case S:case C:case"[object Uint8ClampedArray]":case F:case D:return di(t,e);case v:return new r;case g:case _:return new r(t);case y:return function(t){var n=new t.constructor(t.source,rt.exec(t));return n.lastIndex=t.lastIndex,n}(t);case b:return new r;case x:return i=t,Ee?vt(Ee.call(i)):{}}var i}(t,N,a)}}o||(o=new Pe);var T=o.get(t);if(T)return T;o.set(t,u),Xu(t)?t.forEach((function(r){u.add(Je(r,n,e,r,t,o))})):Vu(t)&&t.forEach((function(r,i){u.set(i,Je(r,n,e,i,t,o))}));var B=w?void 0:(h?c?Yi:Vi:c?xa:_a)(t);return sn(B||t,(function(r,i){B&&(r=t[i=r]),$e(u,i,Je(r,n,e,i,t,o))})),u}function Ze(t,n,e){var r=e.length;if(null==t)return!r;for(t=vt(t);r--;){var i=e[r],o=n[i],u=t[i];if(void 0===u&&!(i in t)||!o(u))return!1}return!0}function Ke(t,n,e){if("function"!=typeof t)throw new yt(o);return _o((function(){t.apply(void 0,e)}),n)}function Qe(t,n,e,r){var i=-1,o=hn,u=!0,a=t.length,s=[],c=n.length;if(!a)return s;e&&(n=pn(n,Fn(e))),r?(o=dn,u=!1):n.length>=200&&(o=Nn,u=!1,n=new Be(n));t:for(;++i<a;){var l=t[i],f=null==e?l:e(l);if(l=r||0!==l?l:0,u&&f==f){for(var h=c;h--;)if(n[h]===f)continue t;s.push(l)}else o(n,f,r)||s.push(l)}return s}je.templateSettings={escape:U,evaluate:I,interpolate:q,variable:"",imports:{_:je}},je.prototype=Ce.prototype,je.prototype.constructor=je,Fe.prototype=Se(Ce.prototype),Fe.prototype.constructor=Fe,De.prototype=Se(Ce.prototype),De.prototype.constructor=De,Ne.prototype.clear=function(){this.__data__=me?me(null):{},this.size=0},Ne.prototype.delete=function(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n},Ne.prototype.get=function(t){var n=this.__data__;if(me){var e=n[t];return"__lodash_hash_undefined__"===e?void 0:e}return Ot.call(n,t)?n[t]:void 0},Ne.prototype.has=function(t){var n=this.__data__;return me?void 0!==n[t]:Ot.call(n,t)},Ne.prototype.set=function(t,n){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=me&&void 0===n?"__lodash_hash_undefined__":n,this},Re.prototype.clear=function(){this.__data__=[],this.size=0},Re.prototype.delete=function(t){var n=this.__data__,e=We(n,t);return!(e<0)&&(e==n.length-1?n.pop():Xt.call(n,e,1),--this.size,!0)},Re.prototype.get=function(t){var n=this.__data__,e=We(n,t);return e<0?void 0:n[e][1]},Re.prototype.has=function(t){return We(this.__data__,t)>-1},Re.prototype.set=function(t,n){var e=this.__data__,r=We(e,t);return r<0?(++this.size,e.push([t,n])):e[r][1]=n,this},Te.prototype.clear=function(){this.size=0,this.__data__={hash:new Ne,map:new(de||Re),string:new Ne}},Te.prototype.delete=function(t){var n=Zi(this,t).delete(t);return this.size-=n?1:0,n},Te.prototype.get=function(t){return Zi(this,t).get(t)},Te.prototype.has=function(t){return Zi(this,t).has(t)},Te.prototype.set=function(t,n){var e=Zi(this,t),r=e.size;return e.set(t,n),this.size+=e.size==r?0:1,this},Be.prototype.add=Be.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},Be.prototype.has=function(t){return this.__data__.has(t)},Pe.prototype.clear=function(){this.__data__=new Re,this.size=0},Pe.prototype.delete=function(t){var n=this.__data__,e=n.delete(t);return this.size=n.size,e},Pe.prototype.get=function(t){return this.__data__.get(t)},Pe.prototype.has=function(t){return this.__data__.has(t)},Pe.prototype.set=function(t,n){var e=this.__data__;if(e instanceof Re){var r=e.__data__;if(!de||r.length<199)return r.push([t,n]),this.size=++e.size,this;e=this.__data__=new Te(r)}return e.set(t,n),this.size=e.size,this};var tr=xi(sr),nr=xi(cr,!0);function er(t,n){var e=!0;return tr(t,(function(t,r,i){return e=!!n(t,r,i)})),e}function rr(t,n,e){for(var r=-1,i=t.length;++r<i;){var o=t[r],u=n(o);if(null!=u&&(void 0===a?u==u&&!Zu(u):e(u,a)))var a=u,s=o}return s}function ir(t,n){var e=[];return tr(t,(function(t,r,i){n(t,r,i)&&e.push(t)})),e}function or(t,n,e,r,i){var o=-1,u=t.length;for(e||(e=oo),i||(i=[]);++o<u;){var a=t[o];n>0&&e(a)?n>1?or(a,n-1,e,r,i):vn(i,a):r||(i[i.length]=a)}return i}var ur=wi(),ar=wi(!0);function sr(t,n){return t&&ur(t,n,_a)}function cr(t,n){return t&&ar(t,n,_a)}function lr(t,n){return fn(n,(function(n){return Uu(t[n])}))}function fr(t,n){for(var e=0,r=(n=ai(n,t)).length;null!=t&&e<r;)t=t[Eo(n[e++])];return e&&e==r?t:void 0}function hr(t,n,e){var r=n(t);return Nu(t)?r:vn(r,e(t))}function dr(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":bn&&bn in vt(t)?function(t){var n=Ot.call(t,bn),e=t[bn];try{t[bn]=void 0;var r=!0}catch(t){}var i=Mt.call(t);r&&(n?t[bn]=e:delete t[bn]);return i}(t):function(t){return Mt.call(t)}(t)}function pr(t,n){return t>n}function vr(t,n){return null!=t&&Ot.call(t,n)}function gr(t,n){return null!=t&&n in vt(t)}function mr(t,n,e){for(var i=e?dn:hn,o=t[0].length,u=t.length,a=u,s=r(u),c=1/0,l=[];a--;){var f=t[a];a&&n&&(f=pn(f,Fn(n))),c=ae(f.length,c),s[a]=!e&&(n||o>=120&&f.length>=120)?new Be(a&&f):void 0}f=t[0];var h=-1,d=s[0];t:for(;++h<o&&l.length<c;){var p=f[h],v=n?n(p):p;if(p=e||0!==p?p:0,!(d?Nn(d,v):i(l,v,e))){for(a=u;--a;){var g=s[a];if(!(g?Nn(g,v):i(t[a],v,e)))continue t}d&&d.push(v),l.push(p)}}return l}function yr(t,n,e){var r=null==(t=go(t,n=ai(n,t)))?t:t[Eo(zo(n))];return null==r?void 0:un(r,t,e)}function br(t){return Wu(t)&&dr(t)==s}function _r(t,n,e,r,i){return t===n||(null==t||null==n||!Wu(t)&&!Wu(n)?t!=t&&n!=n:function(t,n,e,r,i,o){var u=Nu(t),a=Nu(n),d=u?c:eo(t),p=a?c:eo(n),w=(d=d==s?m:d)==m,k=(p=p==s?m:p)==m,E=d==p;if(E&&Pu(t)){if(!Pu(n))return!1;u=!0,w=!1}if(E&&!w)return o||(o=new Pe),u||Ku(t)?$i(t,n,e,r,i,o):function(t,n,e,r,i,o,u){switch(e){case O:if(t.byteLength!=n.byteLength||t.byteOffset!=n.byteOffset)return!1;t=t.buffer,n=n.buffer;case A:return!(t.byteLength!=n.byteLength||!o(new Bt(t),new Bt(n)));case l:case f:case g:return Su(+t,+n);case h:return t.name==n.name&&t.message==n.message;case y:case _:return t==n+"";case v:var a=In;case b:var s=1&r;if(a||(a=Wn),t.size!=n.size&&!s)return!1;var c=u.get(t);if(c)return c==n;r|=2,u.set(t,n);var d=$i(a(t),a(n),r,i,o,u);return u.delete(t),d;case x:if(Ee)return Ee.call(t)==Ee.call(n)}return!1}(t,n,d,e,r,i,o);if(!(1&e)){var M=w&&Ot.call(t,"__wrapped__"),j=k&&Ot.call(n,"__wrapped__");if(M||j){var S=M?t.value():t,C=j?n.value():n;return o||(o=new Pe),i(S,C,e,r,o)}}if(!E)return!1;return o||(o=new Pe),function(t,n,e,r,i,o){var u=1&e,a=Vi(t),s=a.length,c=Vi(n).length;if(s!=c&&!u)return!1;var l=s;for(;l--;){var f=a[l];if(!(u?f in n:Ot.call(n,f)))return!1}var h=o.get(t);if(h&&o.get(n))return h==n;var d=!0;o.set(t,n),o.set(n,t);var p=u;for(;++l<s;){f=a[l];var v=t[f],g=n[f];if(r)var m=u?r(g,v,f,n,t,o):r(v,g,f,t,n,o);if(!(void 0===m?v===g||i(v,g,e,r,o):m)){d=!1;break}p||(p="constructor"==f)}if(d&&!p){var y=t.constructor,b=n.constructor;y==b||!("constructor"in t)||!("constructor"in n)||"function"==typeof y&&y instanceof y&&"function"==typeof b&&b instanceof b||(d=!1)}return o.delete(t),o.delete(n),d}(t,n,e,r,i,o)}(t,n,e,r,_r,i))}function xr(t,n,e,r){var i=e.length,o=i,u=!r;if(null==t)return!o;for(t=vt(t);i--;){var a=e[i];if(u&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++i<o;){var s=(a=e[i])[0],c=t[s],l=a[1];if(u&&a[2]){if(void 0===c&&!(s in t))return!1}else{var f=new Pe;if(r)var h=r(c,l,s,t,n,f);if(!(void 0===h?_r(l,c,3,r,f):h))return!1}}return!0}function wr(t){return!(!$u(t)||(n=t,Et&&Et in n))&&(Uu(t)?Ct:ut).test(Mo(t));var n}function Ar(t){return"function"==typeof t?t:null==t?Ya:"object"==typeof t?Nu(t)?Sr(t[0],t[1]):jr(t):ns(t)}function Or(t){if(!fo(t))return oe(t);var n=[];for(var e in vt(t))Ot.call(t,e)&&"constructor"!=e&&n.push(e);return n}function kr(t){if(!$u(t))return function(t){var n=[];if(null!=t)for(var e in vt(t))n.push(e);return n}(t);var n=fo(t),e=[];for(var r in t)("constructor"!=r||!n&&Ot.call(t,r))&&e.push(r);return e}function Er(t,n){return t<n}function Mr(t,n){var e=-1,i=Tu(t)?r(t.length):[];return tr(t,(function(t,r,o){i[++e]=n(t,r,o)})),i}function jr(t){var n=Ki(t);return 1==n.length&&n[0][2]?po(n[0][0],n[0][1]):function(e){return e===t||xr(e,t,n)}}function Sr(t,n){return so(t)&&ho(n)?po(Eo(t),n):function(e){var r=va(e,t);return void 0===r&&r===n?ga(e,t):_r(n,r,3)}}function Cr(t,n,e,r,i){t!==n&&ur(n,(function(o,u){if(i||(i=new Pe),$u(o))!function(t,n,e,r,i,o,u){var a=yo(t,e),s=yo(n,e),c=u.get(s);if(c)return void qe(t,e,c);var l=o?o(a,s,e+"",t,n,u):void 0,f=void 0===l;if(f){var h=Nu(s),d=!h&&Pu(s),p=!h&&!d&&Ku(s);l=s,h||d||p?Nu(a)?l=a:Bu(a)?l=mi(a):d?(f=!1,l=fi(s,!0)):p?(f=!1,l=di(s,!0)):l=[]:Hu(s)||Du(s)?(l=a,Du(a)?l=ua(a):$u(a)&&!Uu(a)||(l=io(s))):f=!1}f&&(u.set(s,l),i(l,s,r,o,u),u.delete(s));qe(t,e,l)}(t,n,u,e,Cr,r,i);else{var a=r?r(yo(t,u),o,u+"",t,n,i):void 0;void 0===a&&(a=o),qe(t,u,a)}}),xa)}function Fr(t,n){var e=t.length;if(e)return uo(n+=n<0?e:0,e)?t[n]:void 0}function Dr(t,n,e){var r=-1;return n=pn(n.length?n:[Ya],Fn(Ji())),function(t,n){var e=t.length;for(t.sort(n);e--;)t[e]=t[e].value;return t}(Mr(t,(function(t,e,i){return{criteria:pn(n,(function(n){return n(t)})),index:++r,value:t}})),(function(t,n){return function(t,n,e){var r=-1,i=t.criteria,o=n.criteria,u=i.length,a=e.length;for(;++r<u;){var s=pi(i[r],o[r]);if(s){if(r>=a)return s;var c=e[r];return s*("desc"==c?-1:1)}}return t.index-n.index}(t,n,e)}))}function Nr(t,n,e){for(var r=-1,i=n.length,o={};++r<i;){var u=n[r],a=fr(t,u);e(a,u)&&Ir(o,ai(u,t),a)}return o}function Rr(t,n,e,r){var i=r?An:wn,o=-1,u=n.length,a=t;for(t===n&&(n=mi(n)),e&&(a=pn(t,Fn(e)));++o<u;)for(var s=0,c=n[o],l=e?e(c):c;(s=i(a,l,s,r))>-1;)a!==t&&Xt.call(a,s,1),Xt.call(t,s,1);return t}function Tr(t,n){for(var e=t?n.length:0,r=e-1;e--;){var i=n[e];if(e==r||i!==o){var o=i;uo(i)?Xt.call(t,i,1):Qr(t,i)}}return t}function Br(t,n){return t+te(le()*(n-t+1))}function Pr(t,n){var e="";if(!t||n<1||n>9007199254740991)return e;do{n%2&&(e+=t),(n=te(n/2))&&(t+=t)}while(n);return e}function Lr(t,n){return xo(vo(t,n,Ya),t+"")}function zr(t){return ze(Sa(t))}function Ur(t,n){var e=Sa(t);return Oo(e,Xe(n,0,e.length))}function Ir(t,n,e,r){if(!$u(t))return t;for(var i=-1,o=(n=ai(n,t)).length,u=o-1,a=t;null!=a&&++i<o;){var s=Eo(n[i]),c=e;if(i!=u){var l=a[s];void 0===(c=r?r(l,s,a):void 0)&&(c=$u(l)?l:uo(n[i+1])?[]:{})}$e(a,s,c),a=a[s]}return t}var qr=ye?function(t,n){return ye.set(t,n),t}:Ya,$r=Mn?function(t,n){return Mn(t,"toString",{configurable:!0,enumerable:!1,value:$a(n),writable:!0})}:Ya;function Wr(t){return Oo(Sa(t))}function Vr(t,n,e){var i=-1,o=t.length;n<0&&(n=-n>o?0:o+n),(e=e>o?o:e)<0&&(e+=o),o=n>e?0:e-n>>>0,n>>>=0;for(var u=r(o);++i<o;)u[i]=t[i+n];return u}function Yr(t,n){var e;return tr(t,(function(t,r,i){return!(e=n(t,r,i))})),!!e}function Hr(t,n,e){var r=0,i=null==t?r:t.length;if("number"==typeof n&&n==n&&i<=2147483647){for(;r<i;){var o=r+i>>>1,u=t[o];null!==u&&!Zu(u)&&(e?u<=n:u<n)?r=o+1:i=o}return i}return Gr(t,n,Ya,e)}function Gr(t,n,e,r){n=e(n);for(var i=0,o=null==t?0:t.length,u=n!=n,a=null===n,s=Zu(n),c=void 0===n;i<o;){var l=te((i+o)/2),f=e(t[l]),h=void 0!==f,d=null===f,p=f==f,v=Zu(f);if(u)var g=r||p;else g=c?p&&(r||h):a?p&&h&&(r||!d):s?p&&h&&!d&&(r||!v):!d&&!v&&(r?f<=n:f<n);g?i=l+1:o=l}return ae(o,4294967294)}function Xr(t,n){for(var e=-1,r=t.length,i=0,o=[];++e<r;){var u=t[e],a=n?n(u):u;if(!e||!Su(a,s)){var s=a;o[i++]=0===u?0:u}}return o}function Jr(t){return"number"==typeof t?t:Zu(t)?NaN:+t}function Zr(t){if("string"==typeof t)return t;if(Nu(t))return pn(t,Zr)+"";if(Zu(t))return Me?Me.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}function Kr(t,n,e){var r=-1,i=hn,o=t.length,u=!0,a=[],s=a;if(e)u=!1,i=dn;else if(o>=200){var c=n?null:Pi(t);if(c)return Wn(c);u=!1,i=Nn,s=new Be}else s=n?[]:a;t:for(;++r<o;){var l=t[r],f=n?n(l):l;if(l=e||0!==l?l:0,u&&f==f){for(var h=s.length;h--;)if(s[h]===f)continue t;n&&s.push(f),a.push(l)}else i(s,f,e)||(s!==a&&s.push(f),a.push(l))}return a}function Qr(t,n){return null==(t=go(t,n=ai(n,t)))||delete t[Eo(zo(n))]}function ti(t,n,e,r){return Ir(t,n,e(fr(t,n)),r)}function ni(t,n,e,r){for(var i=t.length,o=r?i:-1;(r?o--:++o<i)&&n(t[o],o,t););return e?Vr(t,r?0:o,r?o+1:i):Vr(t,r?o+1:0,r?i:o)}function ei(t,n){var e=t;return e instanceof De&&(e=e.value()),gn(n,(function(t,n){return n.func.apply(n.thisArg,vn([t],n.args))}),e)}function ri(t,n,e){var i=t.length;if(i<2)return i?Kr(t[0]):[];for(var o=-1,u=r(i);++o<i;)for(var a=t[o],s=-1;++s<i;)s!=o&&(u[o]=Qe(u[o]||a,t[s],n,e));return Kr(or(u,1),n,e)}function ii(t,n,e){for(var r=-1,i=t.length,o=n.length,u={};++r<i;){var a=r<o?n[r]:void 0;e(u,t[r],a)}return u}function oi(t){return Bu(t)?t:[]}function ui(t){return"function"==typeof t?t:Ya}function ai(t,n){return Nu(t)?t:so(t,n)?[t]:ko(aa(t))}var si=Lr;function ci(t,n,e){var r=t.length;return e=void 0===e?r:e,!n&&e>=r?t:Vr(t,n,e)}var li=Jn||function(t){return Ht.clearTimeout(t)};function fi(t,n){if(n)return t.slice();var e=t.length,r=qt?qt(e):new t.constructor(e);return t.copy(r),r}function hi(t){var n=new t.constructor(t.byteLength);return new Bt(n).set(new Bt(t)),n}function di(t,n){var e=n?hi(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}function pi(t,n){if(t!==n){var e=void 0!==t,r=null===t,i=t==t,o=Zu(t),u=void 0!==n,a=null===n,s=n==n,c=Zu(n);if(!a&&!c&&!o&&t>n||o&&u&&s&&!a&&!c||r&&u&&s||!e&&s||!i)return 1;if(!r&&!o&&!c&&t<n||c&&e&&i&&!r&&!o||a&&e&&i||!u&&i||!s)return-1}return 0}function vi(t,n,e,i){for(var o=-1,u=t.length,a=e.length,s=-1,c=n.length,l=ue(u-a,0),f=r(c+l),h=!i;++s<c;)f[s]=n[s];for(;++o<a;)(h||o<u)&&(f[e[o]]=t[o]);for(;l--;)f[s++]=t[o++];return f}function gi(t,n,e,i){for(var o=-1,u=t.length,a=-1,s=e.length,c=-1,l=n.length,f=ue(u-s,0),h=r(f+l),d=!i;++o<f;)h[o]=t[o];for(var p=o;++c<l;)h[p+c]=n[c];for(;++a<s;)(d||o<u)&&(h[p+e[a]]=t[o++]);return h}function mi(t,n){var e=-1,i=t.length;for(n||(n=r(i));++e<i;)n[e]=t[e];return n}function yi(t,n,e,r){var i=!e;e||(e={});for(var o=-1,u=n.length;++o<u;){var a=n[o],s=r?r(e[a],t[a],a,e,t):void 0;void 0===s&&(s=t[a]),i?He(e,a,s):$e(e,a,s)}return e}function bi(t,n){return function(e,r){var i=Nu(e)?an:Ve,o=n?n():{};return i(e,t,Ji(r,2),o)}}function _i(t){return Lr((function(n,e){var r=-1,i=e.length,o=i>1?e[i-1]:void 0,u=i>2?e[2]:void 0;for(o=t.length>3&&"function"==typeof o?(i--,o):void 0,u&&ao(e[0],e[1],u)&&(o=i<3?void 0:o,i=1),n=vt(n);++r<i;){var a=e[r];a&&t(n,a,r,o)}return n}))}function xi(t,n){return function(e,r){if(null==e)return e;if(!Tu(e))return t(e,r);for(var i=e.length,o=n?i:-1,u=vt(e);(n?o--:++o<i)&&!1!==r(u[o],o,u););return e}}function wi(t){return function(n,e,r){for(var i=-1,o=vt(n),u=r(n),a=u.length;a--;){var s=u[t?a:++i];if(!1===e(o[s],s,o))break}return n}}function Ai(t){return function(n){var e=Un(n=aa(n))?Hn(n):void 0,r=e?e[0]:n.charAt(0),i=e?ci(e,1).join(""):n.slice(1);return r[t]()+i}}function Oi(t){return function(n){return gn(Ua(Da(n).replace(Dt,"")),t,"")}}function ki(t){return function(){var n=arguments;switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3]);case 5:return new t(n[0],n[1],n[2],n[3],n[4]);case 6:return new t(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new t(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var e=Se(t.prototype),r=t.apply(e,n);return $u(r)?r:e}}function Ei(t){return function(n,e,r){var i=vt(n);if(!Tu(n)){var o=Ji(e,3);n=_a(n),e=function(t){return o(i[t],t,i)}}var u=t(n,e,r);return u>-1?i[o?n[u]:u]:void 0}}function Mi(t){return Wi((function(n){var e=n.length,r=e,i=Fe.prototype.thru;for(t&&n.reverse();r--;){var u=n[r];if("function"!=typeof u)throw new yt(o);if(i&&!a&&"wrapper"==Gi(u))var a=new Fe([],!0)}for(r=a?r:e;++r<e;){var s=Gi(u=n[r]),c="wrapper"==s?Hi(u):void 0;a=c&&co(c[0])&&424==c[1]&&!c[4].length&&1==c[9]?a[Gi(c[0])].apply(a,c[3]):1==u.length&&co(u)?a[s]():a.thru(u)}return function(){var t=arguments,r=t[0];if(a&&1==t.length&&Nu(r))return a.plant(r).value();for(var i=0,o=e?n[i].apply(this,t):r;++i<e;)o=n[i].call(this,o);return o}}))}function ji(t,n,e,i,o,u,a,s,c,l){var f=128&n,h=1&n,d=2&n,p=24&n,v=512&n,g=d?void 0:ki(t);return function m(){for(var y=arguments.length,b=r(y),_=y;_--;)b[_]=arguments[_];if(p)var x=Xi(m),w=Bn(b,x);if(i&&(b=vi(b,i,o,p)),u&&(b=gi(b,u,a,p)),y-=w,p&&y<l){var A=$n(b,x);return Ti(t,n,ji,m.placeholder,e,b,A,s,c,l-y)}var O=h?e:this,k=d?O[t]:t;return y=b.length,s?b=mo(b,s):v&&y>1&&b.reverse(),f&&c<y&&(b.length=c),this&&this!==Ht&&this instanceof m&&(k=g||ki(k)),k.apply(O,b)}}function Si(t,n){return function(e,r){return function(t,n,e,r){return sr(t,(function(t,i,o){n(r,e(t),i,o)})),r}(e,t,n(r),{})}}function Ci(t,n){return function(e,r){var i;if(void 0===e&&void 0===r)return n;if(void 0!==e&&(i=e),void 0!==r){if(void 0===i)return r;"string"==typeof e||"string"==typeof r?(e=Zr(e),r=Zr(r)):(e=Jr(e),r=Jr(r)),i=t(e,r)}return i}}function Fi(t){return Wi((function(n){return n=pn(n,Fn(Ji())),Lr((function(e){var r=this;return t(n,(function(t){return un(t,r,e)}))}))}))}function Di(t,n){var e=(n=void 0===n?" ":Zr(n)).length;if(e<2)return e?Pr(n,t):n;var r=Pr(n,Qn(t/Yn(n)));return Un(n)?ci(Hn(r),0,t).join(""):r.slice(0,t)}function Ni(t){return function(n,e,i){return i&&"number"!=typeof i&&ao(n,e,i)&&(e=i=void 0),n=ea(n),void 0===e?(e=n,n=0):e=ea(e),function(t,n,e,i){for(var o=-1,u=ue(Qn((n-t)/(e||1)),0),a=r(u);u--;)a[i?u:++o]=t,t+=e;return a}(n,e,i=void 0===i?n<e?1:-1:ea(i),t)}}function Ri(t){return function(n,e){return"string"==typeof n&&"string"==typeof e||(n=oa(n),e=oa(e)),t(n,e)}}function Ti(t,n,e,r,i,o,u,a,s,c){var l=8&n;n|=l?32:64,4&(n&=~(l?64:32))||(n&=-4);var f=[t,n,i,l?o:void 0,l?u:void 0,l?void 0:o,l?void 0:u,a,s,c],h=e.apply(void 0,f);return co(t)&&bo(h,f),h.placeholder=r,wo(h,t,n)}function Bi(t){var n=pt[t];return function(t,e){if(t=oa(t),(e=null==e?0:ae(ra(e),292))&&re(t)){var r=(aa(t)+"e").split("e");return+((r=(aa(n(r[0]+"e"+(+r[1]+e)))+"e").split("e"))[0]+"e"+(+r[1]-e))}return n(t)}}var Pi=ve&&1/Wn(new ve([,-0]))[1]==1/0?function(t){return new ve(t)}:Za;function Li(t){return function(n){var e=eo(n);return e==v?In(n):e==b?Vn(n):function(t,n){return pn(n,(function(n){return[n,t[n]]}))}(n,t(n))}}function zi(t,n,e,i,a,s,c,l){var f=2&n;if(!f&&"function"!=typeof t)throw new yt(o);var h=i?i.length:0;if(h||(n&=-97,i=a=void 0),c=void 0===c?c:ue(ra(c),0),l=void 0===l?l:ra(l),h-=a?a.length:0,64&n){var d=i,p=a;i=a=void 0}var v=f?void 0:Hi(t),g=[t,n,e,i,a,d,p,s,c,l];if(v&&function(t,n){var e=t[1],r=n[1],i=e|r,o=i<131,a=128==r&&8==e||128==r&&256==e&&t[7].length<=n[8]||384==r&&n[7].length<=n[8]&&8==e;if(!o&&!a)return t;1&r&&(t[2]=n[2],i|=1&e?0:4);var s=n[3];if(s){var c=t[3];t[3]=c?vi(c,s,n[4]):s,t[4]=c?$n(t[3],u):n[4]}(s=n[5])&&(c=t[5],t[5]=c?gi(c,s,n[6]):s,t[6]=c?$n(t[5],u):n[6]);(s=n[7])&&(t[7]=s);128&r&&(t[8]=null==t[8]?n[8]:ae(t[8],n[8]));null==t[9]&&(t[9]=n[9]);t[0]=n[0],t[1]=i}(g,v),t=g[0],n=g[1],e=g[2],i=g[3],a=g[4],!(l=g[9]=void 0===g[9]?f?0:t.length:ue(g[9]-h,0))&&24&n&&(n&=-25),n&&1!=n)m=8==n||16==n?function(t,n,e){var i=ki(t);return function o(){for(var u=arguments.length,a=r(u),s=u,c=Xi(o);s--;)a[s]=arguments[s];var l=u<3&&a[0]!==c&&a[u-1]!==c?[]:$n(a,c);if((u-=l.length)<e)return Ti(t,n,ji,o.placeholder,void 0,a,l,void 0,void 0,e-u);var f=this&&this!==Ht&&this instanceof o?i:t;return un(f,this,a)}}(t,n,l):32!=n&&33!=n||a.length?ji.apply(void 0,g):function(t,n,e,i){var o=1&n,u=ki(t);return function n(){for(var a=-1,s=arguments.length,c=-1,l=i.length,f=r(l+s),h=this&&this!==Ht&&this instanceof n?u:t;++c<l;)f[c]=i[c];for(;s--;)f[c++]=arguments[++a];return un(h,o?e:this,f)}}(t,n,e,i);else var m=function(t,n,e){var r=1&n,i=ki(t);return function n(){var o=this&&this!==Ht&&this instanceof n?i:t;return o.apply(r?e:this,arguments)}}(t,n,e);return wo((v?qr:bo)(m,g),t,n)}function Ui(t,n,e,r){return void 0===t||Su(t,xt[e])&&!Ot.call(r,e)?n:t}function Ii(t,n,e,r,i,o){return $u(t)&&$u(n)&&(o.set(n,t),Cr(t,n,void 0,Ii,o),o.delete(n)),t}function qi(t){return Hu(t)?void 0:t}function $i(t,n,e,r,i,o){var u=1&e,a=t.length,s=n.length;if(a!=s&&!(u&&s>a))return!1;var c=o.get(t);if(c&&o.get(n))return c==n;var l=-1,f=!0,h=2&e?new Be:void 0;for(o.set(t,n),o.set(n,t);++l<a;){var d=t[l],p=n[l];if(r)var v=u?r(p,d,l,n,t,o):r(d,p,l,t,n,o);if(void 0!==v){if(v)continue;f=!1;break}if(h){if(!yn(n,(function(t,n){if(!Nn(h,n)&&(d===t||i(d,t,e,r,o)))return h.push(n)}))){f=!1;break}}else if(d!==p&&!i(d,p,e,r,o)){f=!1;break}}return o.delete(t),o.delete(n),f}function Wi(t){return xo(vo(t,void 0,Ro),t+"")}function Vi(t){return hr(t,_a,to)}function Yi(t){return hr(t,xa,no)}var Hi=ye?function(t){return ye.get(t)}:Za;function Gi(t){for(var n=t.name+"",e=be[n],r=Ot.call(be,n)?e.length:0;r--;){var i=e[r],o=i.func;if(null==o||o==t)return i.name}return n}function Xi(t){return(Ot.call(je,"placeholder")?je:t).placeholder}function Ji(){var t=je.iteratee||Ha;return t=t===Ha?Ar:t,arguments.length?t(arguments[0],arguments[1]):t}function Zi(t,n){var e,r,i=t.__data__;return("string"==(r=typeof(e=n))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e)?i["string"==typeof n?"string":"hash"]:i.map}function Ki(t){for(var n=_a(t),e=n.length;e--;){var r=n[e],i=t[r];n[e]=[r,i,ho(i)]}return n}function Qi(t,n){var e=function(t,n){return null==t?void 0:t[n]}(t,n);return wr(e)?e:void 0}var to=ne?function(t){return null==t?[]:(t=vt(t),fn(ne(t),(function(n){return Gt.call(t,n)})))}:is,no=ne?function(t){for(var n=[];t;)vn(n,to(t)),t=Vt(t);return n}:is,eo=dr;function ro(t,n,e){for(var r=-1,i=(n=ai(n,t)).length,o=!1;++r<i;){var u=Eo(n[r]);if(!(o=null!=t&&e(t,u)))break;t=t[u]}return o||++r!=i?o:!!(i=null==t?0:t.length)&&qu(i)&&uo(u,i)&&(Nu(t)||Du(t))}function io(t){return"function"!=typeof t.constructor||fo(t)?{}:Se(Vt(t))}function oo(t){return Nu(t)||Du(t)||!!(Zt&&t&&t[Zt])}function uo(t,n){var e=typeof t;return!!(n=null==n?9007199254740991:n)&&("number"==e||"symbol"!=e&&st.test(t))&&t>-1&&t%1==0&&t<n}function ao(t,n,e){if(!$u(e))return!1;var r=typeof n;return!!("number"==r?Tu(e)&&uo(n,e.length):"string"==r&&n in e)&&Su(e[n],t)}function so(t,n){if(Nu(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!Zu(t))||(W.test(t)||!$.test(t)||null!=n&&t in vt(n))}function co(t){var n=Gi(t),e=je[n];if("function"!=typeof e||!(n in De.prototype))return!1;if(t===e)return!0;var r=Hi(e);return!!r&&t===r[0]}(he&&eo(new he(new ArrayBuffer(1)))!=O||de&&eo(new de)!=v||pe&&"[object Promise]"!=eo(pe.resolve())||ve&&eo(new ve)!=b||ge&&eo(new ge)!=w)&&(eo=function(t){var n=dr(t),e=n==m?t.constructor:void 0,r=e?Mo(e):"";if(r)switch(r){case _e:return O;case xe:return v;case we:return"[object Promise]";case Ae:return b;case Oe:return w}return n});var lo=wt?Uu:os;function fo(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||xt)}function ho(t){return t==t&&!$u(t)}function po(t,n){return function(e){return null!=e&&(e[t]===n&&(void 0!==n||t in vt(e)))}}function vo(t,n,e){return n=ue(void 0===n?t.length-1:n,0),function(){for(var i=arguments,o=-1,u=ue(i.length-n,0),a=r(u);++o<u;)a[o]=i[n+o];o=-1;for(var s=r(n+1);++o<n;)s[o]=i[o];return s[n]=e(a),un(t,this,s)}}function go(t,n){return n.length<2?t:fr(t,Vr(n,0,-1))}function mo(t,n){for(var e=t.length,r=ae(n.length,e),i=mi(t);r--;){var o=n[r];t[r]=uo(o,e)?i[o]:void 0}return t}function yo(t,n){if(("constructor"!==n||"function"!=typeof t[n])&&"__proto__"!=n)return t[n]}var bo=Ao(qr),_o=Kn||function(t,n){return Ht.setTimeout(t,n)},xo=Ao($r);function wo(t,n,e){var r=n+"";return xo(t,function(t,n){var e=n.length;if(!e)return t;var r=e-1;return n[r]=(e>1?"& ":"")+n[r],n=n.join(e>2?", ":" "),t.replace(Z,"{\n/* [wrapped with "+n+"] */\n")}(r,function(t,n){return sn(a,(function(e){var r="_."+e[0];n&e[1]&&!hn(t,r)&&t.push(r)})),t.sort()}(function(t){var n=t.match(K);return n?n[1].split(Q):[]}(r),e)))}function Ao(t){var n=0,e=0;return function(){var r=se(),i=16-(r-e);if(e=r,i>0){if(++n>=800)return arguments[0]}else n=0;return t.apply(void 0,arguments)}}function Oo(t,n){var e=-1,r=t.length,i=r-1;for(n=void 0===n?r:n;++e<n;){var o=Br(e,i),u=t[o];t[o]=t[e],t[e]=u}return t.length=n,t}var ko=function(t){var n=Au(t,(function(t){return 500===e.size&&e.clear(),t})),e=n.cache;return n}((function(t){var n=[];return 46===t.charCodeAt(0)&&n.push(""),t.replace(V,(function(t,e,r,i){n.push(r?i.replace(nt,"$1"):e||t)})),n}));function Eo(t){if("string"==typeof t||Zu(t))return t;var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}function Mo(t){if(null!=t){try{return At.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function jo(t){if(t instanceof De)return t.clone();var n=new Fe(t.__wrapped__,t.__chain__);return n.__actions__=mi(t.__actions__),n.__index__=t.__index__,n.__values__=t.__values__,n}var So=Lr((function(t,n){return Bu(t)?Qe(t,or(n,1,Bu,!0)):[]})),Co=Lr((function(t,n){var e=zo(n);return Bu(e)&&(e=void 0),Bu(t)?Qe(t,or(n,1,Bu,!0),Ji(e,2)):[]})),Fo=Lr((function(t,n){var e=zo(n);return Bu(e)&&(e=void 0),Bu(t)?Qe(t,or(n,1,Bu,!0),void 0,e):[]}));function Do(t,n,e){var r=null==t?0:t.length;if(!r)return-1;var i=null==e?0:ra(e);return i<0&&(i=ue(r+i,0)),xn(t,Ji(n,3),i)}function No(t,n,e){var r=null==t?0:t.length;if(!r)return-1;var i=r-1;return void 0!==e&&(i=ra(e),i=e<0?ue(r+i,0):ae(i,r-1)),xn(t,Ji(n,3),i,!0)}function Ro(t){return(null==t?0:t.length)?or(t,1):[]}function To(t){return t&&t.length?t[0]:void 0}var Bo=Lr((function(t){var n=pn(t,oi);return n.length&&n[0]===t[0]?mr(n):[]})),Po=Lr((function(t){var n=zo(t),e=pn(t,oi);return n===zo(e)?n=void 0:e.pop(),e.length&&e[0]===t[0]?mr(e,Ji(n,2)):[]})),Lo=Lr((function(t){var n=zo(t),e=pn(t,oi);return(n="function"==typeof n?n:void 0)&&e.pop(),e.length&&e[0]===t[0]?mr(e,void 0,n):[]}));function zo(t){var n=null==t?0:t.length;return n?t[n-1]:void 0}var Uo=Lr(Io);function Io(t,n){return t&&t.length&&n&&n.length?Rr(t,n):t}var qo=Wi((function(t,n){var e=null==t?0:t.length,r=Ge(t,n);return Tr(t,pn(n,(function(t){return uo(t,e)?+t:t})).sort(pi)),r}));function $o(t){return null==t?t:fe.call(t)}var Wo=Lr((function(t){return Kr(or(t,1,Bu,!0))})),Vo=Lr((function(t){var n=zo(t);return Bu(n)&&(n=void 0),Kr(or(t,1,Bu,!0),Ji(n,2))})),Yo=Lr((function(t){var n=zo(t);return n="function"==typeof n?n:void 0,Kr(or(t,1,Bu,!0),void 0,n)}));function Ho(t){if(!t||!t.length)return[];var n=0;return t=fn(t,(function(t){if(Bu(t))return n=ue(t.length,n),!0})),Cn(n,(function(n){return pn(t,En(n))}))}function Go(t,n){if(!t||!t.length)return[];var e=Ho(t);return null==n?e:pn(e,(function(t){return un(n,void 0,t)}))}var Xo=Lr((function(t,n){return Bu(t)?Qe(t,n):[]})),Jo=Lr((function(t){return ri(fn(t,Bu))})),Zo=Lr((function(t){var n=zo(t);return Bu(n)&&(n=void 0),ri(fn(t,Bu),Ji(n,2))})),Ko=Lr((function(t){var n=zo(t);return n="function"==typeof n?n:void 0,ri(fn(t,Bu),void 0,n)})),Qo=Lr(Ho);var tu=Lr((function(t){var n=t.length,e=n>1?t[n-1]:void 0;return e="function"==typeof e?(t.pop(),e):void 0,Go(t,e)}));function nu(t){var n=je(t);return n.__chain__=!0,n}function eu(t,n){return n(t)}var ru=Wi((function(t){var n=t.length,e=n?t[0]:0,r=this.__wrapped__,i=function(n){return Ge(n,t)};return!(n>1||this.__actions__.length)&&r instanceof De&&uo(e)?((r=r.slice(e,+e+(n?1:0))).__actions__.push({func:eu,args:[i],thisArg:void 0}),new Fe(r,this.__chain__).thru((function(t){return n&&!t.length&&t.push(void 0),t}))):this.thru(i)}));var iu=bi((function(t,n,e){Ot.call(t,e)?++t[e]:He(t,e,1)}));var ou=Ei(Do),uu=Ei(No);function au(t,n){return(Nu(t)?sn:tr)(t,Ji(n,3))}function su(t,n){return(Nu(t)?cn:nr)(t,Ji(n,3))}var cu=bi((function(t,n,e){Ot.call(t,e)?t[e].push(n):He(t,e,[n])}));var lu=Lr((function(t,n,e){var i=-1,o="function"==typeof n,u=Tu(t)?r(t.length):[];return tr(t,(function(t){u[++i]=o?un(n,t,e):yr(t,n,e)})),u})),fu=bi((function(t,n,e){He(t,e,n)}));function hu(t,n){return(Nu(t)?pn:Mr)(t,Ji(n,3))}var du=bi((function(t,n,e){t[e?0:1].push(n)}),(function(){return[[],[]]}));var pu=Lr((function(t,n){if(null==t)return[];var e=n.length;return e>1&&ao(t,n[0],n[1])?n=[]:e>2&&ao(n[0],n[1],n[2])&&(n=[n[0]]),Dr(t,or(n,1),[])})),vu=Zn||function(){return Ht.Date.now()};function gu(t,n,e){return n=e?void 0:n,zi(t,128,void 0,void 0,void 0,void 0,n=t&&null==n?t.length:n)}function mu(t,n){var e;if("function"!=typeof n)throw new yt(o);return t=ra(t),function(){return--t>0&&(e=n.apply(this,arguments)),t<=1&&(n=void 0),e}}var yu=Lr((function(t,n,e){var r=1;if(e.length){var i=$n(e,Xi(yu));r|=32}return zi(t,r,n,e,i)})),bu=Lr((function(t,n,e){var r=3;if(e.length){var i=$n(e,Xi(bu));r|=32}return zi(n,r,t,e,i)}));function _u(t,n,e){var r,i,u,a,s,c,l=0,f=!1,h=!1,d=!0;if("function"!=typeof t)throw new yt(o);function p(n){var e=r,o=i;return r=i=void 0,l=n,a=t.apply(o,e)}function v(t){return l=t,s=_o(m,n),f?p(t):a}function g(t){var e=t-c;return void 0===c||e>=n||e<0||h&&t-l>=u}function m(){var t=vu();if(g(t))return y(t);s=_o(m,function(t){var e=n-(t-c);return h?ae(e,u-(t-l)):e}(t))}function y(t){return s=void 0,d&&r?p(t):(r=i=void 0,a)}function b(){var t=vu(),e=g(t);if(r=arguments,i=this,c=t,e){if(void 0===s)return v(c);if(h)return li(s),s=_o(m,n),p(c)}return void 0===s&&(s=_o(m,n)),a}return n=oa(n)||0,$u(e)&&(f=!!e.leading,u=(h="maxWait"in e)?ue(oa(e.maxWait)||0,n):u,d="trailing"in e?!!e.trailing:d),b.cancel=function(){void 0!==s&&li(s),l=0,r=c=i=s=void 0},b.flush=function(){return void 0===s?a:y(vu())},b}var xu=Lr((function(t,n){return Ke(t,1,n)})),wu=Lr((function(t,n,e){return Ke(t,oa(n)||0,e)}));function Au(t,n){if("function"!=typeof t||null!=n&&"function"!=typeof n)throw new yt(o);var e=function(){var r=arguments,i=n?n.apply(this,r):r[0],o=e.cache;if(o.has(i))return o.get(i);var u=t.apply(this,r);return e.cache=o.set(i,u)||o,u};return e.cache=new(Au.Cache||Te),e}function Ou(t){if("function"!=typeof t)throw new yt(o);return function(){var n=arguments;switch(n.length){case 0:return!t.call(this);case 1:return!t.call(this,n[0]);case 2:return!t.call(this,n[0],n[1]);case 3:return!t.call(this,n[0],n[1],n[2])}return!t.apply(this,n)}}Au.Cache=Te;var ku=si((function(t,n){var e=(n=1==n.length&&Nu(n[0])?pn(n[0],Fn(Ji())):pn(or(n,1),Fn(Ji()))).length;return Lr((function(r){for(var i=-1,o=ae(r.length,e);++i<o;)r[i]=n[i].call(this,r[i]);return un(t,this,r)}))})),Eu=Lr((function(t,n){return zi(t,32,void 0,n,$n(n,Xi(Eu)))})),Mu=Lr((function(t,n){return zi(t,64,void 0,n,$n(n,Xi(Mu)))})),ju=Wi((function(t,n){return zi(t,256,void 0,void 0,void 0,n)}));function Su(t,n){return t===n||t!=t&&n!=n}var Cu=Ri(pr),Fu=Ri((function(t,n){return t>=n})),Du=br(function(){return arguments}())?br:function(t){return Wu(t)&&Ot.call(t,"callee")&&!Gt.call(t,"callee")},Nu=r.isArray,Ru=Qt?Fn(Qt):function(t){return Wu(t)&&dr(t)==A};function Tu(t){return null!=t&&qu(t.length)&&!Uu(t)}function Bu(t){return Wu(t)&&Tu(t)}var Pu=ee||os,Lu=tn?Fn(tn):function(t){return Wu(t)&&dr(t)==f};function zu(t){if(!Wu(t))return!1;var n=dr(t);return n==h||"[object DOMException]"==n||"string"==typeof t.message&&"string"==typeof t.name&&!Hu(t)}function Uu(t){if(!$u(t))return!1;var n=dr(t);return n==d||n==p||"[object AsyncFunction]"==n||"[object Proxy]"==n}function Iu(t){return"number"==typeof t&&t==ra(t)}function qu(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}function $u(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}function Wu(t){return null!=t&&"object"==typeof t}var Vu=nn?Fn(nn):function(t){return Wu(t)&&eo(t)==v};function Yu(t){return"number"==typeof t||Wu(t)&&dr(t)==g}function Hu(t){if(!Wu(t)||dr(t)!=m)return!1;var n=Vt(t);if(null===n)return!0;var e=Ot.call(n,"constructor")&&n.constructor;return"function"==typeof e&&e instanceof e&&At.call(e)==jt}var Gu=en?Fn(en):function(t){return Wu(t)&&dr(t)==y};var Xu=rn?Fn(rn):function(t){return Wu(t)&&eo(t)==b};function Ju(t){return"string"==typeof t||!Nu(t)&&Wu(t)&&dr(t)==_}function Zu(t){return"symbol"==typeof t||Wu(t)&&dr(t)==x}var Ku=on?Fn(on):function(t){return Wu(t)&&qu(t.length)&&!!Ut[dr(t)]};var Qu=Ri(Er),ta=Ri((function(t,n){return t<=n}));function na(t){if(!t)return[];if(Tu(t))return Ju(t)?Hn(t):mi(t);if(Kt&&t[Kt])return function(t){for(var n,e=[];!(n=t.next()).done;)e.push(n.value);return e}(t[Kt]());var n=eo(t);return(n==v?In:n==b?Wn:Sa)(t)}function ea(t){return t?(t=oa(t))===1/0||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}function ra(t){var n=ea(t),e=n%1;return n==n?e?n-e:n:0}function ia(t){return t?Xe(ra(t),0,4294967295):0}function oa(t){if("number"==typeof t)return t;if(Zu(t))return NaN;if($u(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=$u(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(G,"");var e=ot.test(t);return e||at.test(t)?Wt(t.slice(2),e?2:8):it.test(t)?NaN:+t}function ua(t){return yi(t,xa(t))}function aa(t){return null==t?"":Zr(t)}var sa=_i((function(t,n){if(fo(n)||Tu(n))yi(n,_a(n),t);else for(var e in n)Ot.call(n,e)&&$e(t,e,n[e])})),ca=_i((function(t,n){yi(n,xa(n),t)})),la=_i((function(t,n,e,r){yi(n,xa(n),t,r)})),fa=_i((function(t,n,e,r){yi(n,_a(n),t,r)})),ha=Wi(Ge);var da=Lr((function(t,n){t=vt(t);var e=-1,r=n.length,i=r>2?n[2]:void 0;for(i&&ao(n[0],n[1],i)&&(r=1);++e<r;)for(var o=n[e],u=xa(o),a=-1,s=u.length;++a<s;){var c=u[a],l=t[c];(void 0===l||Su(l,xt[c])&&!Ot.call(t,c))&&(t[c]=o[c])}return t})),pa=Lr((function(t){return t.push(void 0,Ii),un(Aa,void 0,t)}));function va(t,n,e){var r=null==t?void 0:fr(t,n);return void 0===r?e:r}function ga(t,n){return null!=t&&ro(t,n,gr)}var ma=Si((function(t,n,e){null!=n&&"function"!=typeof n.toString&&(n=Mt.call(n)),t[n]=e}),$a(Ya)),ya=Si((function(t,n,e){null!=n&&"function"!=typeof n.toString&&(n=Mt.call(n)),Ot.call(t,n)?t[n].push(e):t[n]=[e]}),Ji),ba=Lr(yr);function _a(t){return Tu(t)?Le(t):Or(t)}function xa(t){return Tu(t)?Le(t,!0):kr(t)}var wa=_i((function(t,n,e){Cr(t,n,e)})),Aa=_i((function(t,n,e,r){Cr(t,n,e,r)})),Oa=Wi((function(t,n){var e={};if(null==t)return e;var r=!1;n=pn(n,(function(n){return n=ai(n,t),r||(r=n.length>1),n})),yi(t,Yi(t),e),r&&(e=Je(e,7,qi));for(var i=n.length;i--;)Qr(e,n[i]);return e}));var ka=Wi((function(t,n){return null==t?{}:function(t,n){return Nr(t,n,(function(n,e){return ga(t,e)}))}(t,n)}));function Ea(t,n){if(null==t)return{};var e=pn(Yi(t),(function(t){return[t]}));return n=Ji(n),Nr(t,e,(function(t,e){return n(t,e[0])}))}var Ma=Li(_a),ja=Li(xa);function Sa(t){return null==t?[]:Dn(t,_a(t))}var Ca=Oi((function(t,n,e){return n=n.toLowerCase(),t+(e?Fa(n):n)}));function Fa(t){return za(aa(t).toLowerCase())}function Da(t){return(t=aa(t))&&t.replace(ct,Pn).replace(Nt,"")}var Na=Oi((function(t,n,e){return t+(e?"-":"")+n.toLowerCase()})),Ra=Oi((function(t,n,e){return t+(e?" ":"")+n.toLowerCase()})),Ta=Ai("toLowerCase");var Ba=Oi((function(t,n,e){return t+(e?"_":"")+n.toLowerCase()}));var Pa=Oi((function(t,n,e){return t+(e?" ":"")+za(n)}));var La=Oi((function(t,n,e){return t+(e?" ":"")+n.toUpperCase()})),za=Ai("toUpperCase");function Ua(t,n,e){return t=aa(t),void 0===(n=e?void 0:n)?function(t){return Pt.test(t)}(t)?function(t){return t.match(Tt)||[]}(t):function(t){return t.match(tt)||[]}(t):t.match(n)||[]}var Ia=Lr((function(t,n){try{return un(t,void 0,n)}catch(t){return zu(t)?t:new ht(t)}})),qa=Wi((function(t,n){return sn(n,(function(n){n=Eo(n),He(t,n,yu(t[n],t))})),t}));function $a(t){return function(){return t}}var Wa=Mi(),Va=Mi(!0);function Ya(t){return t}function Ha(t){return Ar("function"==typeof t?t:Je(t,1))}var Ga=Lr((function(t,n){return function(e){return yr(e,t,n)}})),Xa=Lr((function(t,n){return function(e){return yr(t,e,n)}}));function Ja(t,n,e){var r=_a(n),i=lr(n,r);null!=e||$u(n)&&(i.length||!r.length)||(e=n,n=t,t=this,i=lr(n,_a(n)));var o=!($u(e)&&"chain"in e&&!e.chain),u=Uu(t);return sn(i,(function(e){var r=n[e];t[e]=r,u&&(t.prototype[e]=function(){var n=this.__chain__;if(o||n){var e=t(this.__wrapped__),i=e.__actions__=mi(this.__actions__);return i.push({func:r,args:arguments,thisArg:t}),e.__chain__=n,e}return r.apply(t,vn([this.value()],arguments))})})),t}function Za(){}var Ka=Fi(pn),Qa=Fi(ln),ts=Fi(yn);function ns(t){return so(t)?En(Eo(t)):function(t){return function(n){return fr(n,t)}}(t)}var es=Ni(),rs=Ni(!0);function is(){return[]}function os(){return!1}var us=Ci((function(t,n){return t+n}),0),as=Bi("ceil"),ss=Ci((function(t,n){return t/n}),1),cs=Bi("floor");var ls,fs=Ci((function(t,n){return t*n}),1),hs=Bi("round"),ds=Ci((function(t,n){return t-n}),0);return je.after=function(t,n){if("function"!=typeof n)throw new yt(o);return t=ra(t),function(){if(--t<1)return n.apply(this,arguments)}},je.ary=gu,je.assign=sa,je.assignIn=ca,je.assignInWith=la,je.assignWith=fa,je.at=ha,je.before=mu,je.bind=yu,je.bindAll=qa,je.bindKey=bu,je.castArray=function(){if(!arguments.length)return[];var t=arguments[0];return Nu(t)?t:[t]},je.chain=nu,je.chunk=function(t,n,e){n=(e?ao(t,n,e):void 0===n)?1:ue(ra(n),0);var i=null==t?0:t.length;if(!i||n<1)return[];for(var o=0,u=0,a=r(Qn(i/n));o<i;)a[u++]=Vr(t,o,o+=n);return a},je.compact=function(t){for(var n=-1,e=null==t?0:t.length,r=0,i=[];++n<e;){var o=t[n];o&&(i[r++]=o)}return i},je.concat=function(){var t=arguments.length;if(!t)return[];for(var n=r(t-1),e=arguments[0],i=t;i--;)n[i-1]=arguments[i];return vn(Nu(e)?mi(e):[e],or(n,1))},je.cond=function(t){var n=null==t?0:t.length,e=Ji();return t=n?pn(t,(function(t){if("function"!=typeof t[1])throw new yt(o);return[e(t[0]),t[1]]})):[],Lr((function(e){for(var r=-1;++r<n;){var i=t[r];if(un(i[0],this,e))return un(i[1],this,e)}}))},je.conforms=function(t){return function(t){var n=_a(t);return function(e){return Ze(e,t,n)}}(Je(t,1))},je.constant=$a,je.countBy=iu,je.create=function(t,n){var e=Se(t);return null==n?e:Ye(e,n)},je.curry=function t(n,e,r){var i=zi(n,8,void 0,void 0,void 0,void 0,void 0,e=r?void 0:e);return i.placeholder=t.placeholder,i},je.curryRight=function t(n,e,r){var i=zi(n,16,void 0,void 0,void 0,void 0,void 0,e=r?void 0:e);return i.placeholder=t.placeholder,i},je.debounce=_u,je.defaults=da,je.defaultsDeep=pa,je.defer=xu,je.delay=wu,je.difference=So,je.differenceBy=Co,je.differenceWith=Fo,je.drop=function(t,n,e){var r=null==t?0:t.length;return r?Vr(t,(n=e||void 0===n?1:ra(n))<0?0:n,r):[]},je.dropRight=function(t,n,e){var r=null==t?0:t.length;return r?Vr(t,0,(n=r-(n=e||void 0===n?1:ra(n)))<0?0:n):[]},je.dropRightWhile=function(t,n){return t&&t.length?ni(t,Ji(n,3),!0,!0):[]},je.dropWhile=function(t,n){return t&&t.length?ni(t,Ji(n,3),!0):[]},je.fill=function(t,n,e,r){var i=null==t?0:t.length;return i?(e&&"number"!=typeof e&&ao(t,n,e)&&(e=0,r=i),function(t,n,e,r){var i=t.length;for((e=ra(e))<0&&(e=-e>i?0:i+e),(r=void 0===r||r>i?i:ra(r))<0&&(r+=i),r=e>r?0:ia(r);e<r;)t[e++]=n;return t}(t,n,e,r)):[]},je.filter=function(t,n){return(Nu(t)?fn:ir)(t,Ji(n,3))},je.flatMap=function(t,n){return or(hu(t,n),1)},je.flatMapDeep=function(t,n){return or(hu(t,n),1/0)},je.flatMapDepth=function(t,n,e){return e=void 0===e?1:ra(e),or(hu(t,n),e)},je.flatten=Ro,je.flattenDeep=function(t){return(null==t?0:t.length)?or(t,1/0):[]},je.flattenDepth=function(t,n){return(null==t?0:t.length)?or(t,n=void 0===n?1:ra(n)):[]},je.flip=function(t){return zi(t,512)},je.flow=Wa,je.flowRight=Va,je.fromPairs=function(t){for(var n=-1,e=null==t?0:t.length,r={};++n<e;){var i=t[n];r[i[0]]=i[1]}return r},je.functions=function(t){return null==t?[]:lr(t,_a(t))},je.functionsIn=function(t){return null==t?[]:lr(t,xa(t))},je.groupBy=cu,je.initial=function(t){return(null==t?0:t.length)?Vr(t,0,-1):[]},je.intersection=Bo,je.intersectionBy=Po,je.intersectionWith=Lo,je.invert=ma,je.invertBy=ya,je.invokeMap=lu,je.iteratee=Ha,je.keyBy=fu,je.keys=_a,je.keysIn=xa,je.map=hu,je.mapKeys=function(t,n){var e={};return n=Ji(n,3),sr(t,(function(t,r,i){He(e,n(t,r,i),t)})),e},je.mapValues=function(t,n){var e={};return n=Ji(n,3),sr(t,(function(t,r,i){He(e,r,n(t,r,i))})),e},je.matches=function(t){return jr(Je(t,1))},je.matchesProperty=function(t,n){return Sr(t,Je(n,1))},je.memoize=Au,je.merge=wa,je.mergeWith=Aa,je.method=Ga,je.methodOf=Xa,je.mixin=Ja,je.negate=Ou,je.nthArg=function(t){return t=ra(t),Lr((function(n){return Fr(n,t)}))},je.omit=Oa,je.omitBy=function(t,n){return Ea(t,Ou(Ji(n)))},je.once=function(t){return mu(2,t)},je.orderBy=function(t,n,e,r){return null==t?[]:(Nu(n)||(n=null==n?[]:[n]),Nu(e=r?void 0:e)||(e=null==e?[]:[e]),Dr(t,n,e))},je.over=Ka,je.overArgs=ku,je.overEvery=Qa,je.overSome=ts,je.partial=Eu,je.partialRight=Mu,je.partition=du,je.pick=ka,je.pickBy=Ea,je.property=ns,je.propertyOf=function(t){return function(n){return null==t?void 0:fr(t,n)}},je.pull=Uo,je.pullAll=Io,je.pullAllBy=function(t,n,e){return t&&t.length&&n&&n.length?Rr(t,n,Ji(e,2)):t},je.pullAllWith=function(t,n,e){return t&&t.length&&n&&n.length?Rr(t,n,void 0,e):t},je.pullAt=qo,je.range=es,je.rangeRight=rs,je.rearg=ju,je.reject=function(t,n){return(Nu(t)?fn:ir)(t,Ou(Ji(n,3)))},je.remove=function(t,n){var e=[];if(!t||!t.length)return e;var r=-1,i=[],o=t.length;for(n=Ji(n,3);++r<o;){var u=t[r];n(u,r,t)&&(e.push(u),i.push(r))}return Tr(t,i),e},je.rest=function(t,n){if("function"!=typeof t)throw new yt(o);return Lr(t,n=void 0===n?n:ra(n))},je.reverse=$o,je.sampleSize=function(t,n,e){return n=(e?ao(t,n,e):void 0===n)?1:ra(n),(Nu(t)?Ue:Ur)(t,n)},je.set=function(t,n,e){return null==t?t:Ir(t,n,e)},je.setWith=function(t,n,e,r){return r="function"==typeof r?r:void 0,null==t?t:Ir(t,n,e,r)},je.shuffle=function(t){return(Nu(t)?Ie:Wr)(t)},je.slice=function(t,n,e){var r=null==t?0:t.length;return r?(e&&"number"!=typeof e&&ao(t,n,e)?(n=0,e=r):(n=null==n?0:ra(n),e=void 0===e?r:ra(e)),Vr(t,n,e)):[]},je.sortBy=pu,je.sortedUniq=function(t){return t&&t.length?Xr(t):[]},je.sortedUniqBy=function(t,n){return t&&t.length?Xr(t,Ji(n,2)):[]},je.split=function(t,n,e){return e&&"number"!=typeof e&&ao(t,n,e)&&(n=e=void 0),(e=void 0===e?4294967295:e>>>0)?(t=aa(t))&&("string"==typeof n||null!=n&&!Gu(n))&&!(n=Zr(n))&&Un(t)?ci(Hn(t),0,e):t.split(n,e):[]},je.spread=function(t,n){if("function"!=typeof t)throw new yt(o);return n=null==n?0:ue(ra(n),0),Lr((function(e){var r=e[n],i=ci(e,0,n);return r&&vn(i,r),un(t,this,i)}))},je.tail=function(t){var n=null==t?0:t.length;return n?Vr(t,1,n):[]},je.take=function(t,n,e){return t&&t.length?Vr(t,0,(n=e||void 0===n?1:ra(n))<0?0:n):[]},je.takeRight=function(t,n,e){var r=null==t?0:t.length;return r?Vr(t,(n=r-(n=e||void 0===n?1:ra(n)))<0?0:n,r):[]},je.takeRightWhile=function(t,n){return t&&t.length?ni(t,Ji(n,3),!1,!0):[]},je.takeWhile=function(t,n){return t&&t.length?ni(t,Ji(n,3)):[]},je.tap=function(t,n){return n(t),t},je.throttle=function(t,n,e){var r=!0,i=!0;if("function"!=typeof t)throw new yt(o);return $u(e)&&(r="leading"in e?!!e.leading:r,i="trailing"in e?!!e.trailing:i),_u(t,n,{leading:r,maxWait:n,trailing:i})},je.thru=eu,je.toArray=na,je.toPairs=Ma,je.toPairsIn=ja,je.toPath=function(t){return Nu(t)?pn(t,Eo):Zu(t)?[t]:mi(ko(aa(t)))},je.toPlainObject=ua,je.transform=function(t,n,e){var r=Nu(t),i=r||Pu(t)||Ku(t);if(n=Ji(n,4),null==e){var o=t&&t.constructor;e=i?r?new o:[]:$u(t)&&Uu(o)?Se(Vt(t)):{}}return(i?sn:sr)(t,(function(t,r,i){return n(e,t,r,i)})),e},je.unary=function(t){return gu(t,1)},je.union=Wo,je.unionBy=Vo,je.unionWith=Yo,je.uniq=function(t){return t&&t.length?Kr(t):[]},je.uniqBy=function(t,n){return t&&t.length?Kr(t,Ji(n,2)):[]},je.uniqWith=function(t,n){return n="function"==typeof n?n:void 0,t&&t.length?Kr(t,void 0,n):[]},je.unset=function(t,n){return null==t||Qr(t,n)},je.unzip=Ho,je.unzipWith=Go,je.update=function(t,n,e){return null==t?t:ti(t,n,ui(e))},je.updateWith=function(t,n,e,r){return r="function"==typeof r?r:void 0,null==t?t:ti(t,n,ui(e),r)},je.values=Sa,je.valuesIn=function(t){return null==t?[]:Dn(t,xa(t))},je.without=Xo,je.words=Ua,je.wrap=function(t,n){return Eu(ui(n),t)},je.xor=Jo,je.xorBy=Zo,je.xorWith=Ko,je.zip=Qo,je.zipObject=function(t,n){return ii(t||[],n||[],$e)},je.zipObjectDeep=function(t,n){return ii(t||[],n||[],Ir)},je.zipWith=tu,je.entries=Ma,je.entriesIn=ja,je.extend=ca,je.extendWith=la,Ja(je,je),je.add=us,je.attempt=Ia,je.camelCase=Ca,je.capitalize=Fa,je.ceil=as,je.clamp=function(t,n,e){return void 0===e&&(e=n,n=void 0),void 0!==e&&(e=(e=oa(e))==e?e:0),void 0!==n&&(n=(n=oa(n))==n?n:0),Xe(oa(t),n,e)},je.clone=function(t){return Je(t,4)},je.cloneDeep=function(t){return Je(t,5)},je.cloneDeepWith=function(t,n){return Je(t,5,n="function"==typeof n?n:void 0)},je.cloneWith=function(t,n){return Je(t,4,n="function"==typeof n?n:void 0)},je.conformsTo=function(t,n){return null==n||Ze(t,n,_a(n))},je.deburr=Da,je.defaultTo=function(t,n){return null==t||t!=t?n:t},je.divide=ss,je.endsWith=function(t,n,e){t=aa(t),n=Zr(n);var r=t.length,i=e=void 0===e?r:Xe(ra(e),0,r);return(e-=n.length)>=0&&t.slice(e,i)==n},je.eq=Su,je.escape=function(t){return(t=aa(t))&&z.test(t)?t.replace(P,Ln):t},je.escapeRegExp=function(t){return(t=aa(t))&&H.test(t)?t.replace(Y,"\\$&"):t},je.every=function(t,n,e){var r=Nu(t)?ln:er;return e&&ao(t,n,e)&&(n=void 0),r(t,Ji(n,3))},je.find=ou,je.findIndex=Do,je.findKey=function(t,n){return _n(t,Ji(n,3),sr)},je.findLast=uu,je.findLastIndex=No,je.findLastKey=function(t,n){return _n(t,Ji(n,3),cr)},je.floor=cs,je.forEach=au,je.forEachRight=su,je.forIn=function(t,n){return null==t?t:ur(t,Ji(n,3),xa)},je.forInRight=function(t,n){return null==t?t:ar(t,Ji(n,3),xa)},je.forOwn=function(t,n){return t&&sr(t,Ji(n,3))},je.forOwnRight=function(t,n){return t&&cr(t,Ji(n,3))},je.get=va,je.gt=Cu,je.gte=Fu,je.has=function(t,n){return null!=t&&ro(t,n,vr)},je.hasIn=ga,je.head=To,je.identity=Ya,je.includes=function(t,n,e,r){t=Tu(t)?t:Sa(t),e=e&&!r?ra(e):0;var i=t.length;return e<0&&(e=ue(i+e,0)),Ju(t)?e<=i&&t.indexOf(n,e)>-1:!!i&&wn(t,n,e)>-1},je.indexOf=function(t,n,e){var r=null==t?0:t.length;if(!r)return-1;var i=null==e?0:ra(e);return i<0&&(i=ue(r+i,0)),wn(t,n,i)},je.inRange=function(t,n,e){return n=ea(n),void 0===e?(e=n,n=0):e=ea(e),function(t,n,e){return t>=ae(n,e)&&t<ue(n,e)}(t=oa(t),n,e)},je.invoke=ba,je.isArguments=Du,je.isArray=Nu,je.isArrayBuffer=Ru,je.isArrayLike=Tu,je.isArrayLikeObject=Bu,je.isBoolean=function(t){return!0===t||!1===t||Wu(t)&&dr(t)==l},je.isBuffer=Pu,je.isDate=Lu,je.isElement=function(t){return Wu(t)&&1===t.nodeType&&!Hu(t)},je.isEmpty=function(t){if(null==t)return!0;if(Tu(t)&&(Nu(t)||"string"==typeof t||"function"==typeof t.splice||Pu(t)||Ku(t)||Du(t)))return!t.length;var n=eo(t);if(n==v||n==b)return!t.size;if(fo(t))return!Or(t).length;for(var e in t)if(Ot.call(t,e))return!1;return!0},je.isEqual=function(t,n){return _r(t,n)},je.isEqualWith=function(t,n,e){var r=(e="function"==typeof e?e:void 0)?e(t,n):void 0;return void 0===r?_r(t,n,void 0,e):!!r},je.isError=zu,je.isFinite=function(t){return"number"==typeof t&&re(t)},je.isFunction=Uu,je.isInteger=Iu,je.isLength=qu,je.isMap=Vu,je.isMatch=function(t,n){return t===n||xr(t,n,Ki(n))},je.isMatchWith=function(t,n,e){return e="function"==typeof e?e:void 0,xr(t,n,Ki(n),e)},je.isNaN=function(t){return Yu(t)&&t!=+t},je.isNative=function(t){if(lo(t))throw new ht("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return wr(t)},je.isNil=function(t){return null==t},je.isNull=function(t){return null===t},je.isNumber=Yu,je.isObject=$u,je.isObjectLike=Wu,je.isPlainObject=Hu,je.isRegExp=Gu,je.isSafeInteger=function(t){return Iu(t)&&t>=-9007199254740991&&t<=9007199254740991},je.isSet=Xu,je.isString=Ju,je.isSymbol=Zu,je.isTypedArray=Ku,je.isUndefined=function(t){return void 0===t},je.isWeakMap=function(t){return Wu(t)&&eo(t)==w},je.isWeakSet=function(t){return Wu(t)&&"[object WeakSet]"==dr(t)},je.join=function(t,n){return null==t?"":ie.call(t,n)},je.kebabCase=Na,je.last=zo,je.lastIndexOf=function(t,n,e){var r=null==t?0:t.length;if(!r)return-1;var i=r;return void 0!==e&&(i=(i=ra(e))<0?ue(r+i,0):ae(i,r-1)),n==n?function(t,n,e){for(var r=e+1;r--;)if(t[r]===n)return r;return r}(t,n,i):xn(t,On,i,!0)},je.lowerCase=Ra,je.lowerFirst=Ta,je.lt=Qu,je.lte=ta,je.max=function(t){return t&&t.length?rr(t,Ya,pr):void 0},je.maxBy=function(t,n){return t&&t.length?rr(t,Ji(n,2),pr):void 0},je.mean=function(t){return kn(t,Ya)},je.meanBy=function(t,n){return kn(t,Ji(n,2))},je.min=function(t){return t&&t.length?rr(t,Ya,Er):void 0},je.minBy=function(t,n){return t&&t.length?rr(t,Ji(n,2),Er):void 0},je.stubArray=is,je.stubFalse=os,je.stubObject=function(){return{}},je.stubString=function(){return""},je.stubTrue=function(){return!0},je.multiply=fs,je.nth=function(t,n){return t&&t.length?Fr(t,ra(n)):void 0},je.noConflict=function(){return Ht._===this&&(Ht._=St),this},je.noop=Za,je.now=vu,je.pad=function(t,n,e){t=aa(t);var r=(n=ra(n))?Yn(t):0;if(!n||r>=n)return t;var i=(n-r)/2;return Di(te(i),e)+t+Di(Qn(i),e)},je.padEnd=function(t,n,e){t=aa(t);var r=(n=ra(n))?Yn(t):0;return n&&r<n?t+Di(n-r,e):t},je.padStart=function(t,n,e){t=aa(t);var r=(n=ra(n))?Yn(t):0;return n&&r<n?Di(n-r,e)+t:t},je.parseInt=function(t,n,e){return e||null==n?n=0:n&&(n=+n),ce(aa(t).replace(X,""),n||0)},je.random=function(t,n,e){if(e&&"boolean"!=typeof e&&ao(t,n,e)&&(n=e=void 0),void 0===e&&("boolean"==typeof n?(e=n,n=void 0):"boolean"==typeof t&&(e=t,t=void 0)),void 0===t&&void 0===n?(t=0,n=1):(t=ea(t),void 0===n?(n=t,t=0):n=ea(n)),t>n){var r=t;t=n,n=r}if(e||t%1||n%1){var i=le();return ae(t+i*(n-t+$t("1e-"+((i+"").length-1))),n)}return Br(t,n)},je.reduce=function(t,n,e){var r=Nu(t)?gn:jn,i=arguments.length<3;return r(t,Ji(n,4),e,i,tr)},je.reduceRight=function(t,n,e){var r=Nu(t)?mn:jn,i=arguments.length<3;return r(t,Ji(n,4),e,i,nr)},je.repeat=function(t,n,e){return n=(e?ao(t,n,e):void 0===n)?1:ra(n),Pr(aa(t),n)},je.replace=function(){var t=arguments,n=aa(t[0]);return t.length<3?n:n.replace(t[1],t[2])},je.result=function(t,n,e){var r=-1,i=(n=ai(n,t)).length;for(i||(i=1,t=void 0);++r<i;){var o=null==t?void 0:t[Eo(n[r])];void 0===o&&(r=i,o=e),t=Uu(o)?o.call(t):o}return t},je.round=hs,je.runInContext=t,je.sample=function(t){return(Nu(t)?ze:zr)(t)},je.size=function(t){if(null==t)return 0;if(Tu(t))return Ju(t)?Yn(t):t.length;var n=eo(t);return n==v||n==b?t.size:Or(t).length},je.snakeCase=Ba,je.some=function(t,n,e){var r=Nu(t)?yn:Yr;return e&&ao(t,n,e)&&(n=void 0),r(t,Ji(n,3))},je.sortedIndex=function(t,n){return Hr(t,n)},je.sortedIndexBy=function(t,n,e){return Gr(t,n,Ji(e,2))},je.sortedIndexOf=function(t,n){var e=null==t?0:t.length;if(e){var r=Hr(t,n);if(r<e&&Su(t[r],n))return r}return-1},je.sortedLastIndex=function(t,n){return Hr(t,n,!0)},je.sortedLastIndexBy=function(t,n,e){return Gr(t,n,Ji(e,2),!0)},je.sortedLastIndexOf=function(t,n){if(null==t?0:t.length){var e=Hr(t,n,!0)-1;if(Su(t[e],n))return e}return-1},je.startCase=Pa,je.startsWith=function(t,n,e){return t=aa(t),e=null==e?0:Xe(ra(e),0,t.length),n=Zr(n),t.slice(e,e+n.length)==n},je.subtract=ds,je.sum=function(t){return t&&t.length?Sn(t,Ya):0},je.sumBy=function(t,n){return t&&t.length?Sn(t,Ji(n,2)):0},je.template=function(t,n,e){var r=je.templateSettings;e&&ao(t,n,e)&&(n=void 0),t=aa(t),n=la({},n,r,Ui);var i,o,u=la({},n.imports,r.imports,Ui),a=_a(u),s=Dn(u,a),c=0,l=n.interpolate||lt,f="__p += '",h=gt((n.escape||lt).source+"|"+l.source+"|"+(l===q?et:lt).source+"|"+(n.evaluate||lt).source+"|$","g"),d="//# sourceURL="+(Ot.call(n,"sourceURL")?(n.sourceURL+"").replace(/[\r\n]/g," "):"lodash.templateSources["+ ++zt+"]")+"\n";t.replace(h,(function(n,e,r,u,a,s){return r||(r=u),f+=t.slice(c,s).replace(ft,zn),e&&(i=!0,f+="' +\n__e("+e+") +\n'"),a&&(o=!0,f+="';\n"+a+";\n__p += '"),r&&(f+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),c=s+n.length,n})),f+="';\n";var p=Ot.call(n,"variable")&&n.variable;p||(f="with (obj) {\n"+f+"\n}\n"),f=(o?f.replace(N,""):f).replace(R,"$1").replace(T,"$1;"),f="function("+(p||"obj")+") {\n"+(p?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(i?", __e = _.escape":"")+(o?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+f+"return __p\n}";var v=Ia((function(){return dt(a,d+"return "+f).apply(void 0,s)}));if(v.source=f,zu(v))throw v;return v},je.times=function(t,n){if((t=ra(t))<1||t>9007199254740991)return[];var e=4294967295,r=ae(t,4294967295);t-=4294967295;for(var i=Cn(r,n=Ji(n));++e<t;)n(e);return i},je.toFinite=ea,je.toInteger=ra,je.toLength=ia,je.toLower=function(t){return aa(t).toLowerCase()},je.toNumber=oa,je.toSafeInteger=function(t){return t?Xe(ra(t),-9007199254740991,9007199254740991):0===t?t:0},je.toString=aa,je.toUpper=function(t){return aa(t).toUpperCase()},je.trim=function(t,n,e){if((t=aa(t))&&(e||void 0===n))return t.replace(G,"");if(!t||!(n=Zr(n)))return t;var r=Hn(t),i=Hn(n);return ci(r,Rn(r,i),Tn(r,i)+1).join("")},je.trimEnd=function(t,n,e){if((t=aa(t))&&(e||void 0===n))return t.replace(J,"");if(!t||!(n=Zr(n)))return t;var r=Hn(t);return ci(r,0,Tn(r,Hn(n))+1).join("")},je.trimStart=function(t,n,e){if((t=aa(t))&&(e||void 0===n))return t.replace(X,"");if(!t||!(n=Zr(n)))return t;var r=Hn(t);return ci(r,Rn(r,Hn(n))).join("")},je.truncate=function(t,n){var e=30,r="...";if($u(n)){var i="separator"in n?n.separator:i;e="length"in n?ra(n.length):e,r="omission"in n?Zr(n.omission):r}var o=(t=aa(t)).length;if(Un(t)){var u=Hn(t);o=u.length}if(e>=o)return t;var a=e-Yn(r);if(a<1)return r;var s=u?ci(u,0,a).join(""):t.slice(0,a);if(void 0===i)return s+r;if(u&&(a+=s.length-a),Gu(i)){if(t.slice(a).search(i)){var c,l=s;for(i.global||(i=gt(i.source,aa(rt.exec(i))+"g")),i.lastIndex=0;c=i.exec(l);)var f=c.index;s=s.slice(0,void 0===f?a:f)}}else if(t.indexOf(Zr(i),a)!=a){var h=s.lastIndexOf(i);h>-1&&(s=s.slice(0,h))}return s+r},je.unescape=function(t){return(t=aa(t))&&L.test(t)?t.replace(B,Gn):t},je.uniqueId=function(t){var n=++kt;return aa(t)+n},je.upperCase=La,je.upperFirst=za,je.each=au,je.eachRight=su,je.first=To,Ja(je,(ls={},sr(je,(function(t,n){Ot.call(je.prototype,n)||(ls[n]=t)})),ls),{chain:!1}),je.VERSION="4.17.15",sn(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(t){je[t].placeholder=je})),sn(["drop","take"],(function(t,n){De.prototype[t]=function(e){e=void 0===e?1:ue(ra(e),0);var r=this.__filtered__&&!n?new De(this):this.clone();return r.__filtered__?r.__takeCount__=ae(e,r.__takeCount__):r.__views__.push({size:ae(e,4294967295),type:t+(r.__dir__<0?"Right":"")}),r},De.prototype[t+"Right"]=function(n){return this.reverse()[t](n).reverse()}})),sn(["filter","map","takeWhile"],(function(t,n){var e=n+1,r=1==e||3==e;De.prototype[t]=function(t){var n=this.clone();return n.__iteratees__.push({iteratee:Ji(t,3),type:e}),n.__filtered__=n.__filtered__||r,n}})),sn(["head","last"],(function(t,n){var e="take"+(n?"Right":"");De.prototype[t]=function(){return this[e](1).value()[0]}})),sn(["initial","tail"],(function(t,n){var e="drop"+(n?"":"Right");De.prototype[t]=function(){return this.__filtered__?new De(this):this[e](1)}})),De.prototype.compact=function(){return this.filter(Ya)},De.prototype.find=function(t){return this.filter(t).head()},De.prototype.findLast=function(t){return this.reverse().find(t)},De.prototype.invokeMap=Lr((function(t,n){return"function"==typeof t?new De(this):this.map((function(e){return yr(e,t,n)}))})),De.prototype.reject=function(t){return this.filter(Ou(Ji(t)))},De.prototype.slice=function(t,n){t=ra(t);var e=this;return e.__filtered__&&(t>0||n<0)?new De(e):(t<0?e=e.takeRight(-t):t&&(e=e.drop(t)),void 0!==n&&(e=(n=ra(n))<0?e.dropRight(-n):e.take(n-t)),e)},De.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},De.prototype.toArray=function(){return this.take(4294967295)},sr(De.prototype,(function(t,n){var e=/^(?:filter|find|map|reject)|While$/.test(n),r=/^(?:head|last)$/.test(n),i=je[r?"take"+("last"==n?"Right":""):n],o=r||/^find/.test(n);i&&(je.prototype[n]=function(){var n=this.__wrapped__,u=r?[1]:arguments,a=n instanceof De,s=u[0],c=a||Nu(n),l=function(t){var n=i.apply(je,vn([t],u));return r&&f?n[0]:n};c&&e&&"function"==typeof s&&1!=s.length&&(a=c=!1);var f=this.__chain__,h=!!this.__actions__.length,d=o&&!f,p=a&&!h;if(!o&&c){n=p?n:new De(this);var v=t.apply(n,u);return v.__actions__.push({func:eu,args:[l],thisArg:void 0}),new Fe(v,f)}return d&&p?t.apply(this,u):(v=this.thru(l),d?r?v.value()[0]:v.value():v)})})),sn(["pop","push","shift","sort","splice","unshift"],(function(t){var n=bt[t],e=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",r=/^(?:pop|shift)$/.test(t);je.prototype[t]=function(){var t=arguments;if(r&&!this.__chain__){var i=this.value();return n.apply(Nu(i)?i:[],t)}return this[e]((function(e){return n.apply(Nu(e)?e:[],t)}))}})),sr(De.prototype,(function(t,n){var e=je[n];if(e){var r=e.name+"";Ot.call(be,r)||(be[r]=[]),be[r].push({name:n,func:e})}})),be[ji(void 0,2).name]=[{name:"wrapper",func:void 0}],De.prototype.clone=function(){var t=new De(this.__wrapped__);return t.__actions__=mi(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=mi(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=mi(this.__views__),t},De.prototype.reverse=function(){if(this.__filtered__){var t=new De(this);t.__dir__=-1,t.__filtered__=!0}else(t=this.clone()).__dir__*=-1;return t},De.prototype.value=function(){var t=this.__wrapped__.value(),n=this.__dir__,e=Nu(t),r=n<0,i=e?t.length:0,o=function(t,n,e){var r=-1,i=e.length;for(;++r<i;){var o=e[r],u=o.size;switch(o.type){case"drop":t+=u;break;case"dropRight":n-=u;break;case"take":n=ae(n,t+u);break;case"takeRight":t=ue(t,n-u)}}return{start:t,end:n}}(0,i,this.__views__),u=o.start,a=o.end,s=a-u,c=r?a:u-1,l=this.__iteratees__,f=l.length,h=0,d=ae(s,this.__takeCount__);if(!e||!r&&i==s&&d==s)return ei(t,this.__actions__);var p=[];t:for(;s--&&h<d;){for(var v=-1,g=t[c+=n];++v<f;){var m=l[v],y=m.iteratee,b=m.type,_=y(g);if(2==b)g=_;else if(!_){if(1==b)continue t;break t}}p[h++]=g}return p},je.prototype.at=ru,je.prototype.chain=function(){return nu(this)},je.prototype.commit=function(){return new Fe(this.value(),this.__chain__)},je.prototype.next=function(){void 0===this.__values__&&(this.__values__=na(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?void 0:this.__values__[this.__index__++]}},je.prototype.plant=function(t){for(var n,e=this;e instanceof Ce;){var r=jo(e);r.__index__=0,r.__values__=void 0,n?i.__wrapped__=r:n=r;var i=r;e=e.__wrapped__}return i.__wrapped__=t,n},je.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof De){var n=t;return this.__actions__.length&&(n=new De(this)),(n=n.reverse()).__actions__.push({func:eu,args:[$o],thisArg:void 0}),new Fe(n,this.__chain__)}return this.thru($o)},je.prototype.toJSON=je.prototype.valueOf=je.prototype.value=function(){return ei(this.__wrapped__,this.__actions__)},je.prototype.first=je.prototype.head,Kt&&(je.prototype[Kt]=function(){return this}),je}();Ht._=Xn,void 0===(i=function(){return Xn}.call(n,e,n,r))||(r.exports=i)}).call(this)}).call(this,e(98),e(434)(t))},function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(99);t.exports=function(t,n,e){r(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(437);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(438);t.exports=function(){var t;if("function"!=typeof r)return!1;try{r({},"x",{}),t=!0}catch(n){t=!1}return t}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Object.defineProperty?Object.defineProperty:null;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=Object.defineProperty;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(441),i=e(197),o=Object.prototype,u=o.__defineGetter__,a=o.__defineSetter__,s=o.__lookupGetter__,c=o.__lookupSetter__;t.exports=function(t,n,e){var l,f,h,d;if(!i(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if(!i(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((f=r(e,"value"))&&(s.call(t,n)||c.call(t,n)?(l=t.__proto__,t.__proto__=o,delete t[n],t[n]=e.value,t.__proto__=l):t[n]=e.value),h=r(e,"get"),d=r(e,"set"),f&&(h||d))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return h&&u&&u.call(t,n,e.get),d&&a&&a.call(t,n,e.set),t}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(442);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t,n){return null!=t&&("symbol"==typeof n?n in Object(t):String(n)in Object(t))}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(73);t.exports=function(t){return"object"==typeof t&&null!==t&&!r(t)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=e(13);r=Array.isArray?Array.isArray:function(t){return"[object Array]"===i(t)},t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(446)();t.exports=function(){return r&&"symbol"==typeof Symbol.toStringTag}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(447);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(198);t.exports=function(t){return r.call(t)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(21),i=e(451),o=e(198);t.exports=function(t){var n,e,u;if(null==t)return o.call(t);e=t[i],n=r(t,i);try{t[i]=void 0}catch(n){return o.call(t)}return u=o.call(t),n?t[i]=e:delete t[i],u}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=Object.prototype.hasOwnProperty;t.exports=function(t,n){return null!=t&&r.call(t,n)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Symbol?Symbol.toStringTag:"";t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(199)();t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(99);t.exports=function(t,n,e){r(t,n,{configurable:!1,enumerable:!1,get:e})}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(99);t.exports=function(t,n,e,i){r(t,n,{configurable:!1,enumerable:!1,get:e,set:i})}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(197),i=e(41),o=e(78),u=e(21),a=e(13),s=Object.prototype;t.exports=function(t){var n;return!!r(t)&&(!(n=o(t))||!u(t,"constructor")&&u(n,"constructor")&&i(n.constructor)&&"[object Function]"===a(n.constructor)&&u(n,"isPrototypeOf")&&i(n.isPrototypeOf)&&(n===s||function(t){var n;for(n in t)if(!u(t,n))return!1;return!0}(t)))}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(145);t.exports=function(t){return"function"===r(t)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(458),i=e(459),o=e(469);t.exports=function(){return"function"==typeof r||"object"==typeof o||"function"==typeof i}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=/./},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(460)(),i=r.document&&r.document.childNodes;t.exports=i},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(461);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(101).isPrimitive,i=e(465),o=e(466),u=e(467),a=e(468);t.exports=function(t){if(arguments.length){if(!r(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return i()}if(o)return o;if(u)return u;if(a)return a;throw new Error("unexpected error. Unable to resolve global object.")}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(200),i=e(201);t.exports=function(t){return r(t)||i(t)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(464);t.exports=function(t){try{return r.call(t),!0}catch(t){return!1}}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=Boolean.prototype.toString;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(){return new Function("return this;")()}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="object"==typeof self?self:null;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="object"==typeof window?window:null;t.exports=r},function(t,n,e){"use strict";(function(n){
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var e="object"==typeof n?n:null;t.exports=e}).call(this,e(98))},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=Int8Array;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(102);t.exports=function(t){var n;return null===t?"null":"object"===(n=typeof t)?r(t).toLowerCase():n}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(13),i=e(202),o=e(77);t.exports=function(t){var n,e,u;if(("Object"===(e=r(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(u=t.constructor).name)return u.name;if(n=i.exec(u.toString()))return n[1]}return o(t)?"Buffer":e}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(203);t.exports=function(t){return r(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(474);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(73);t.exports=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,i;if(!r(n))return!1;if(0===(e=n.length))return!1;for(i=0;i<e;i++)if(!1===t(n[i]))return!1;return!0}}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t){return null!==t&&"object"==typeof t}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(102);t.exports=function(t){return r(t).toLowerCase()}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(478);t.exports=function(t){return null==t?null:(t=Object(t),r(t))}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=e(41),o=e(479),u=e(480);r=i(Object.getPrototypeOf)?o:u,t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=Object.getPrototypeOf;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(13),i=e(481);t.exports=function(t){var n=i(t);return n||null===n?n:"[object Function]"===r(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t){return t.__proto__}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t){return function(){return t}}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(){}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(204)({seed:e(216)()});t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(66),i=e(488);t.exports=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&r(t.length)&&t.length>=0&&t.length<=i}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(80);t.exports=function(t){return r(t)===t}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=Math.floor;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=9007199254740991},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(13),i="function"==typeof Uint32Array;t.exports=function(t){return i&&t instanceof Uint32Array||"[object Uint32Array]"===r(t)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(10),i=e(491),o=e(206),u=e(212);r(i,"isPrimitive",o),r(i,"isObject",u),t.exports=i},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(206),i=e(212);t.exports=function(t){return r(t)||i(t)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(207),i=e(211);t.exports=function(t){return r(t)||i(t)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(208),i=e(209);t.exports=function(t){return r(t)||i(t)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=Number},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(496);t.exports=function(t){try{return r.call(t),!0}catch(t){return!1}}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(146).prototype.toString;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(498);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(105),i=e(81),o=e(499);t.exports=function(){var t,n;if("function"!=typeof o)return!1;try{n=new o(n=[1,3.14,-3.14,i+1,i+2]),t=r(n)&&1===n[0]&&3===n[1]&&n[2]===i-2&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Uint32Array?Uint32Array:null;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Uint32Array?Uint32Array:null;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(){throw new Error("not implemented")}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(503);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(504),i=e(24),o=e(42),u=e(23);t.exports=function(t,n){var e,a,s,c;if(2===(e=arguments.length))return i(t)||i(n)?NaN:t===u||n===u?u:t===n&&0===t?r(t)?t:n:t>n?t:n;for(a=o,c=0;c<e;c++){if(s=arguments[c],i(s)||s===u)return s;(s>a||s===a&&0===s&&r(s))&&(a=s)}return a}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(505);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(23);t.exports=function(t){return 0===t&&1/t===r}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t){return t!=t}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(508);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t,n){var e,r;return((e=(65535&(t>>>=0))>>>0)*(r=(65535&(n>>>=0))>>>0)>>>0)+((t>>>16>>>0)*r+e*(n>>>16>>>0)<<16>>>0)>>>0}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t,n,e,r,i){var o,u,a,s;if(t<=0)return r;if(1===e&&1===i){if((a=t%8)>0)for(s=0;s<a;s++)r[s]=n[s];if(t<8)return r;for(s=a;s<t;s+=8)r[s]=n[s],r[s+1]=n[s+1],r[s+2]=n[s+2],r[s+3]=n[s+3],r[s+4]=n[s+4],r[s+5]=n[s+5],r[s+6]=n[s+6],r[s+7]=n[s+7];return r}for(o=e<0?(1-t)*e:0,u=i<0?(1-t)*i:0,s=0;s<t;s++)r[u]=n[o],o+=e,u+=i;return r}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t,n,e,r,i,o,u){var a,s,c,l;if(t<=0)return i;if(a=r,s=u,1===e&&1===o){if((c=t%8)>0)for(l=0;l<c;l++)i[s]=n[a],a+=e,s+=o;if(t<8)return i;for(l=c;l<t;l+=8)i[s]=n[a],i[s+1]=n[a+1],i[s+2]=n[a+2],i[s+3]=n[a+3],i[s+4]=n[a+4],i[s+5]=n[a+5],i[s+6]=n[a+6],i[s+7]=n[a+7],a+=8,s+=8;return i}for(l=0;l<t;l++)i[s]=n[a],a+=e,s+=o;return i}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(512),i=e(584);t.exports=function(t){var n,e;if(!r(t))throw new TypeError("invalid argument. Must provide a typed array. Value: `"+t+"`.");for((n={}).type=i(t),n.data=[],e=0;e<t.length;e++)n.data.push(t[e]);return n}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(513);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(102),i=e(514),o=e(78),u=e(215),a=e(35),s=e(525),c=e(583),l=u()?o(a):f;function f(){}l="TypedArray"===i(l)?l:f,t.exports=function(t){var n,e;if("object"!=typeof t||null===t)return!1;if(t instanceof l)return!0;for(e=0;e<s.length;e++)if(t instanceof s[e])return!0;for(;t;){for(n=r(t),e=0;e<c.length;e++)if(c[e]===n)return!0;t=o(t)}return!1}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(515);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(41),i=e(516),o=e(202),u=i();t.exports=function(t){if(!1===r(t))throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return u?t.name:o.exec(t.toString())[1]}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(517);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(518);t.exports=function(){return"foo"===r.name}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(){}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(520),i=e(522);t.exports=function(){var t,n;if("function"!=typeof i)return!1;try{n=new i([1,3.14,-3.14,NaN]),t=r(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(521);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(13),i="function"==typeof Float64Array;t.exports=function(t){return i&&t instanceof Float64Array||"[object Float64Array]"===r(t)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Float64Array?Float64Array:null;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Float64Array?Float64Array:null;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(){throw new Error("not implemented")}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(147),i=e(106),o=e(148),u=e(149),a=e(107),s=e(150),c=e(31),l=e(151),f=[e(35),l,s,c,u,a,r,i,o];t.exports=f},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(527);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(528),i=e(530),o=e(531),u=e(532);t.exports=function(){var t,n;if("function"!=typeof u)return!1;try{n=new u([1,3.14,-3.14,i+1]),t=r(n)&&1===n[0]&&3===n[1]&&-3===n[2]&&n[3]===o}catch(n){t=!1}return t}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(529);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(13),i="function"==typeof Int8Array;t.exports=function(t){return i&&t instanceof Int8Array||"[object Int8Array]"===r(t)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=127},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=-128},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Int8Array?Int8Array:null;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Int8Array?Int8Array:null;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(){throw new Error("not implemented")}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(536);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(537),i=e(539),o=e(540);t.exports=function(){var t,n;if("function"!=typeof o)return!1;try{n=new o(n=[1,3.14,-3.14,i+1,i+2]),t=r(n)&&1===n[0]&&3===n[1]&&n[2]===i-2&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(538);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(13),i="function"==typeof Uint8Array;t.exports=function(t){return i&&t instanceof Uint8Array||"[object Uint8Array]"===r(t)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=255},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Uint8Array?Uint8Array:null;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Uint8Array?Uint8Array:null;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(){throw new Error("not implemented")}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(544);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(545),i=e(547);t.exports=function(){var t,n;if("function"!=typeof i)return!1;try{n=new i([-1,0,1,3.14,4.99,255,256]),t=r(n)&&0===n[0]&&0===n[1]&&1===n[2]&&3===n[3]&&5===n[4]&&255===n[5]&&255===n[6]}catch(n){t=!1}return t}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(546);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(13),i="function"==typeof Uint8ClampedArray;t.exports=function(t){return i&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===r(t)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(){throw new Error("not implemented")}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(551);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(552),i=e(554),o=e(555),u=e(556);t.exports=function(){var t,n;if("function"!=typeof u)return!1;try{n=new u([1,3.14,-3.14,i+1]),t=r(n)&&1===n[0]&&3===n[1]&&-3===n[2]&&n[3]===o}catch(n){t=!1}return t}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(553);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(13),i="function"==typeof Int16Array;t.exports=function(t){return i&&t instanceof Int16Array||"[object Int16Array]"===r(t)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=32767},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=-32768},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Int16Array?Int16Array:null;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Int16Array?Int16Array:null;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(){throw new Error("not implemented")}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(560);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(561),i=e(563),o=e(564);t.exports=function(){var t,n;if("function"!=typeof o)return!1;try{n=new o(n=[1,3.14,-3.14,i+1,i+2]),t=r(n)&&1===n[0]&&3===n[1]&&n[2]===i-2&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(562);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(13),i="function"==typeof Uint16Array;t.exports=function(t){return i&&t instanceof Uint16Array||"[object Uint16Array]"===r(t)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=65535},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Uint16Array?Uint16Array:null;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Uint16Array?Uint16Array:null;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(){throw new Error("not implemented")}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(568);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(569),i=e(571),o=e(572),u=e(573);t.exports=function(){var t,n;if("function"!=typeof u)return!1;try{n=new u([1,3.14,-3.14,i+1]),t=r(n)&&1===n[0]&&3===n[1]&&-3===n[2]&&n[3]===o}catch(n){t=!1}return t}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(570);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(13),i="function"==typeof Int32Array;t.exports=function(t){return i&&t instanceof Int32Array||"[object Int32Array]"===r(t)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=2147483647},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=-2147483648},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Int32Array?Int32Array:null;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Int32Array?Int32Array:null;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(){throw new Error("not implemented")}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(577);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(578),i=e(23),o=e(580);t.exports=function(){var t,n;if("function"!=typeof o)return!1;try{n=new o([1,3.14,-3.14,5e40]),t=r(n)&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===i}catch(n){t=!1}return t}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(579);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(13),i="function"==typeof Float32Array;t.exports=function(t){return i&&t instanceof Float32Array||"[object Float32Array]"===r(t)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Float32Array?Float32Array:null;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="function"==typeof Float32Array?Float32Array:null;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(){throw new Error("not implemented")}},function(t){t.exports=JSON.parse('["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]')},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(585),i=e(102),o=e(78),u=e(587);t.exports=function(t){var n,e;for(e=0;e<u.length;e++)if(r(t,u[e][0]))return u[e][1];for(;t;){for(n=i(t),e=0;e<u.length;e++)if(n===u[e][1])return u[e][1];t=o(t)}}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(586);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t,n){if("function"!=typeof n)throw new TypeError("invalid argument. `constructor` argument must be callable. Value: `"+n+"`.");return t instanceof n}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(147),i=e(106),o=e(148),u=e(149),a=e(107),s=e(150),c=e(31),l=e(151),f=[[e(35),"Float64Array"],[l,"Float32Array"],[s,"Int32Array"],[c,"Uint32Array"],[u,"Int16Array"],[a,"Uint16Array"],[r,"Int8Array"],[i,"Uint8Array"],[o,"Uint8ClampedArray"]];t.exports=f},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(55).isPrimitive,i=e(108);t.exports=function(t,n){return!r(t)||i(t)?new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+t+"`."):!r(n)||i(n)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+n+"`."):t>=n?new RangeError("invalid argument. Minimum support `a` must be less than maximum support `b`. Value: `["+t+","+n+"]`."):null}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(217),i=e(218);t.exports=function(t){return r(t)||i(t)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t,n,e){var r=t();return e*r+(1-r)*n}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(219)();t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(54).isPrimitive,i=e(108);t.exports=function(t,n){return!r(t)||i(t)?new TypeError("invalid argument. First argument must be an integer and not `NaN`. Value: `"+t+"`."):!r(n)||i(n)?new TypeError("invalid argument. Second argument must be an integer and not `NaN`. Value: `"+n+"`."):t>n?new RangeError("invalid argument. Minimum support `a` must be less than or equal to maximum support `b`. Value: `["+t+","+n+"]`."):null}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{http://www.boost.org/doc/libs/1_65_1/doc/html/boost/random/uniform_int_distribution.html}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
* (C) Copyright Steven Watanabe 2011.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/var r=e(213),i=e(80);t.exports=function t(n,e,o){var u,a,s,c,l,f,h,d;if(0===(s=o-e))return e;if(h=n.MIN,(a=n.MAX-h)===s)return n()-h+e;if(a<s)for(c=0;;){for(s===r?(c=i(s/(a+1)),s%(a+1)===a&&(c+=1)):c=i((s+1)/(a+1)),u=0,f=1;f<=c;){if(u+=(n()-h)*f,f*a==s-f+1)return u;f*=a+1}if(!((d=t(n,0,i(s/f)))>r/f||(u+=d*=f)>s))return u+e}for(a===r?(l=i(a/(s+1)),a%(s+1)===s&&(l+=1)):l=i((a+1)/(s+1));;)if(u=n()-h,(u=i(u/l))<=s)return u+e}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(220)();t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(10),i=e(596);r(i,"factory",e(221)),t.exports=i},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(221)();t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(109),i=e(222),o=e(628),u=e(635),a=e(636),s=o(128,3.442619855899),c=u(s);t.exports=function(t,n){return function(){var e,o,u,l,f,h,d;for(;;){if(f=2*t()-1,h=127&n(),r(f)<c[h])return f*s[h];if(0===h)return a(t,3.442619855899,f<0);if(l=f*s[h],u=l*l,d=h+1,e=i(-.5*(s[h]*s[h]-u)),(o=i(-.5*(s[d]*s[d]-u)))+t()*(e-o)<1)return l}}}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t){return t<0?-t:0===t?0:t}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_exp.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var r=e(24),i=e(600),o=e(42),u=e(23),a=e(604);t.exports=function(t){var n;return r(t)||t===u?t:t===o?0:t>709.782712893384?u:t<-745.1332191019411?0:t>-1/(1<<28)&&t<1/(1<<28)?1+t:(n=i(t<0?1.4426950408889634*t-.5:1.4426950408889634*t+.5),a(t-.6931471803691238*n,1.9082149292705877e-10*n,n))}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(601);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(80),i=e(602);t.exports=function(t){return t<0?i(t):r(t)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(603);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=Math.ceil;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright, license, and long comment were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_exp.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var r=e(223),i=e(627);t.exports=function(t,n,e){var o,u,a;return a=(o=t-n)-(u=o*o)*i(u),r(1-(n-o*a/(2-a)-t),e)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(23),i=e(42),o=e(83),u=e(606),a=e(607),s=e(608),c=e(24),l=e(152),f=e(224),h=e(620),d=e(624),p=e(153),v=e(225),g=[0,0],m=[0,0];t.exports=function(t,n){var e,y;return 0===t||c(t)||l(t)?t:(h(g,t),n+=g[1],(n+=d(t=g[0]))<s?f(0,t):n>u?t<0?i:r:(n<=a?(n+=52,y=2220446049250313e-31):y=1,p(m,t),e=m[0],e&=2148532223,y*v(e|=n+o<<20,m[1])))}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=1023},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=-1023},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=-1074},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(23),i=e(42);t.exports=function(t){return t===r||t===i}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(153),i=e(67),o=e(225),u=[0,0];t.exports=function(t,n){var e,a;return r(u,t),e=u[0],e&=2147483647,a=i(n),o(e|=a&=2147483648,u[1])}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(612);t.exports=function(t,n){return 1===arguments.length?r([0,0],t):r(t,n)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(31),i=e(35),o=e(613),u=new i(1),a=new r(u.buffer),s=o.HIGH,c=o.LOW;t.exports=function(t,n){return u[0]=n,t[0]=a[s],t[1]=a[c],t}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i,o;!0===e(84)?(i=1,o=0):(i=0,o=1),r={HIGH:i,LOW:o},t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i,o=e(615);(i=new o.uint16(1))[0]=4660,r=52===new o.uint8(i.buffer)[0],t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(106),i={uint16:e(107),uint8:r};t.exports=i},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(31),i=e(35),o=e(617),u=new i(1),a=new r(u.buffer);t.exports=function(t){return u[0]=t,a[o]}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r;r=!0===e(84)?1:0,t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(31),i=e(35),o=e(619),u=new i(1),a=new r(u.buffer),s=o.HIGH,c=o.LOW;t.exports=function(t,n){return a[s]=t,a[c]=n,u[0]}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i,o;!0===e(84)?(i=1,o=0):(i=0,o=1),r={HIGH:i,LOW:o},t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(621);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(622);t.exports=function(t,n){return 1===arguments.length?r([0,0],t):r(t,n)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(623),i=e(152),o=e(24),u=e(109);t.exports=function(t,n){return o(n)||i(n)?(t[0]=n,t[1]=0,t):0!==n&&u(n)<r?(t[0]=4503599627370496*n,t[1]=-52,t):(t[0]=n,t[1]=0,t)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=22250738585072014e-324},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(625);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(67),i=e(626),o=e(83);t.exports=function(t){var n=r(t);return(n=(n&i)>>>20)-o|0}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=2146435072},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t){return 0===t?.16666666666666602:.16666666666666602+t*(t*(6613756321437934e-20+t*(4.1381367970572385e-8*t-16533902205465252e-22))-.0027777777777015593)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(154),i=e(222),o=e(155),u=.00991256303526217;t.exports=function(t,n){var e,a,s;for(e=new Array(t+1),a=i(-.5*n*n),e[0]=u/a,e[1]=n,e[t]=0,s=2;s<t;s++)e[s]=r(-2*o(u/e[s-1]+a)),a=i(-.5*e[s]*e[s]);return e}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=Math.sqrt;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_log.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var r=e(67),i=e(156),o=e(24),u=e(83),a=e(42),s=e(633),c=e(634),l=.6931471803691238,f=1.9082149292705877e-10;t.exports=function(t){var n,e,h,d,p,v,g,m,y,b,_;return 0===t?a:o(t)||t<0?NaN:(d=0,(e=r(t))<1048576&&(d-=54,e=r(t*=0x40000000000000)),e>=2146435072?t+t:(d+=(e>>20)-u|0,d+=(g=(e&=1048575)+614244&1048576|0)>>20|0,v=(t=i(t,e|1072693248^g))-1,(1048575&2+e)<3?0===v?0===d?0:d*l+d*f:(p=v*v*(.5-.3333333333333333*v),0===d?v-p:d*l-(p-d*f-v)):(g=e-398458|0,m=440401-e|0,h=(b=(_=(y=v/(2+v))*y)*_)*s(b),p=_*c(b)+h,(g|=m)>0?(n=.5*v*v,0===d?v-(n-y*(n+p)):d*l-(n-(y*(n+p)+d*f)-v)):0===d?v-y*(v-p):d*l-(y*(v-p)-d*f-v))))}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(31),i=e(35),o=e(632),u=new i(1),a=new r(u.buffer);t.exports=function(t,n){return u[0]=t,a[o]=n>>>0,u[0]}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r;r=!0===e(84)?1:0,t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t){var n,e;for(n=[],e=0;e<t.length-1;e++)n.push(t[e+1]/t[e]);return n}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(155);t.exports=function(t,n,e){var i,o;do{i=r(t())/n,o=r(t())}while(-2*o<i*i);return e?i-n:n-i}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(638);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var r=e(24),i=e(226),o=e(152),u=e(66),a=e(154),s=e(109),c=e(153),l=e(110),f=e(227),h=e(42),d=e(23),p=e(645),v=e(646),g=e(647),m=e(648),y=e(650),b=e(652),_=1e300,x=1e-300,w=[0,0],A=[0,0];t.exports=function t(n,e){var O,k,E,M,j,S,C,F,D,N,R,T,B,P;if(r(n)||r(e))return NaN;if(c(w,e),j=w[0],0===w[1]){if(0===e)return 1;if(1===e)return n;if(-1===e)return 1/n;if(.5===e)return a(n);if(-.5===e)return 1/a(n);if(2===e)return n*n;if(3===e)return n*n*n;if(4===e)return(n*=n)*n;if(o(e))return g(n,e)}if(c(w,n),M=w[0],0===w[1]){if(0===M)return p(n,e);if(1===n)return 1;if(-1===n&&i(e))return-1;if(o(n))return n===h?t(-0,-e):e<0?0:d}if(n<0&&!1===u(e))return(n-n)/(n-n);if(E=s(n),O=2147483647&M|0,k=2147483647&j|0,C=j>>>31|0,S=(S=M>>>31|0)&&i(e)?-1:1,k>1105199104){if(k>1139802112)return v(n,e);if(O<1072693247)return 1===C?S*_*_:S*x*x;if(O>1072693248)return 0===C?S*_*_:S*x*x;R=y(A,E)}else R=m(A,E,O);if(N=(e-(F=l(e,0)))*R[0]+e*R[1],D=F*R[0],c(w,T=N+D),B=f(w[0]),P=f(w[1]),B>=1083179008){if(0!=(B-1083179008|P))return S*_*_;if(N+8008566259537294e-32>T-D)return S*_*_}else if((2147483647&B)>=1083231232){if(0!=(B-3230714880|P))return S*x*x;if(N<=T-D)return S*x*x}return S*(T=b(B,D,N))}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(640);t.exports=function(t){return r(t>0?t-1:t+1)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(641);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(66);t.exports=function(t){return r(t/2)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(31),i=e(35),o=e(643),u=new i(1),a=new r(u.buffer);t.exports=function(t,n){return u[0]=t,a[o]=n>>>0,u[0]}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r;r=!0===e(84)?0:1,t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t){return 0|t}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var r=e(226),i=e(224),o=e(42),u=e(23);t.exports=function(t,n){return n===o?u:n===u?0:n>0?r(n)?t:0:r(n)?i(u,t):u}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var r=e(67);t.exports=function(t,n){return(2147483647&r(t))<=1072693247?n<0?1/0:0:n>0?1/0:0}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(109),i=e(23);t.exports=function(t,n){return-1===t?(t-t)/(t-t):1===t?1:r(t)<1==(n===i)?0:i}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var r=e(67),i=e(110),o=e(156),u=e(83),a=e(649),s=[1,1.5],c=[0,.5849624872207642],l=[0,1.350039202129749e-8];t.exports=function(t,n,e){var f,h,d,p,v,g,m,y,b,_,x,w,A,O,k,E,M,j,S,C;return j=0,e<1048576&&(j-=53,e=r(n*=9007199254740992)),j+=(e>>20)-u|0,e=1072693248|(S=1048575&e|0),S<=235662?C=0:S<767610?C=1:(C=0,j+=1,e-=1048576),f=524288+(e>>1|536870912),v=(M=1/((n=o(n,e))+(m=s[C])))*((E=n-m)-(p=i(h=E*M,0))*(g=o(0,f+=C<<18))-p*(n-(g-m))),k=(d=h*h)*d*a(d),g=i(g=3+(d=p*p)+(k+=v*(p+h)),0),A=(x=-7.028461650952758e-9*(b=i(b=(E=p*g)+(M=v*g+(k-(g-3-d))*h),0))+.9617966939259756*(M-(b-E))+l[C])-((w=i(w=(_=.9617967009544373*b)+x+(y=c[C])+(O=j),0))-O-y-_),t[0]=w,t[1]=A,t}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t){return 0===t?.5999999999999946:.5999999999999946+t*(.4285714285785502+t*(.33333332981837743+t*(.272728123808534+t*(.23066074577556175+.20697501780033842*t))))}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var r=e(110),i=e(651);t.exports=function(t,n){var e,o,u,a,s;return e=(s=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*i(u)))-((o=r(o=(a=1.4426950216293335*u)+s,0))-a),t[0]=o,t[1]=e,t}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t){return 0===t?.5:.5+t*(.25*t-.3333333333333333)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
*
* ## Notice
*
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/s_pow.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 2004 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var r=e(67),i=e(156),o=e(110),u=e(227),a=e(223),s=e(653),c=e(83),l=e(654);t.exports=function(t,n,e){var f,h,d,p,v,g,m,y,b,_;return _=((b=2147483647&t|0)>>20)-c|0,y=0,b>1071644672&&(f=((y=t+(1048576>>_+1)>>>0)&~(1048575>>(_=((2147483647&y)>>20)-c|0)))>>>0,y=(1048575&y|1048576)>>20-_>>>0,t<0&&(y=-y),n-=d=i(0,f)),g=(v=(e-((d=o(d=e+n,0))-n))*s+-1.904654299957768e-9*d)-((m=(p=.6931471824645996*d)+v)-p),h=m-(d=m*m)*l(d),t=r(m=1-(m*h/(h-2)-(g+m*g)-m)),t=u(t),m=(t+=y<<20>>>0)>>20<=0?a(m,y):i(m,t)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=.6931471805599453},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t){return 0===t?.16666666666666602:.16666666666666602+t*(t*(6613756321437934e-20+t*(4.1381367970572385e-8*t-16533902205465252e-22))-.0027777777777015593)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(656);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(73),i=e(657).isPrimitive,o=e(23),u=e(659);t.exports=function(t,n){var e;if(arguments.length>1){if(!i(n))throw new TypeError("invalid argument. `level` must be a nonnegative integer. Value: `"+n+"`.");if(0===n)return t}else n=o;return e=r(t)?new Array(t.length):{},u(t,e,[t],[e],n)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(10),i=e(658),o=e(228),u=e(229);r(i,"isPrimitive",o),r(i,"isObject",u),t.exports=i},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(228),i=e(229);t.exports=function(t){return r(t)||i(t)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(21),i=e(73),o=e(77),u=e(660),a=e(145),s=e(662),c=e(232),l=e(233),f=e(686),h=e(690),d=e(78),p=e(99),v=e(694),g=e(706);function m(t,n,e,y,b){var _,x,w,A,O,k,E,M,j,S;if(b-=1,"object"!=typeof t||null===t)return t;if(o(t))return v(t);if(u(t))return function(t){var n,e,o,u,a,s,c=[],f=[];for(a=new t.constructor(t.message),c.push(t),f.push(a),t.stack&&(a.stack=t.stack),t.code&&(a.code=t.code),t.errno&&(a.errno=t.errno),t.syscall&&(a.syscall=t.syscall),n=l(t),s=0;s<n.length;s++)u=n[s],e=h(t,u),r(e,"value")&&(o=i(t[u])?[]:{},e.value=m(t[u],o,c,f,-1)),p(a,u,e);return a}(t);if("date"===(w=a(t)))return new Date(+t);if("regexp"===w)return s(t.toString());if("set"===w)return new Set(t);if("map"===w)return new Map(t);if("string"===w||"boolean"===w||"number"===w)return t.valueOf();if(O=g[w])return O(t);if("array"!==w&&"object"!==w)return"function"==typeof Object.freeze?function(t){var n,e,o,u,a,s,c,l;for(n=[],u=[],c=Object.create(d(t)),n.push(t),u.push(c),e=f(t),l=0;l<e.length;l++)o=e[l],a=h(t,o),r(a,"value")&&(s=i(t[o])?[]:{},a.value=m(t[o],s,n,u,-1)),p(c,o,a);return Object.isExtensible(t)||Object.preventExtensions(c),Object.isSealed(t)&&Object.seal(c),Object.isFrozen(t)&&Object.freeze(c),c}(t):{};if(x=l(t),b>0)for(_=w,S=0;S<x.length;S++)M=t[k=x[S]],w=a(M),"object"!=typeof M||null===M||"array"!==w&&"object"!==w||o(M)?"object"===_?(A=h(t,k),r(A,"value")&&(A.value=m(M)),p(n,k,A)):n[k]=m(M):-1===(j=c(e,M))?(E=i(M)?new Array(M.length):{},e.push(M),y.push(E),"array"===_?n[k]=m(M,E,e,y,b):(A=h(t,k),r(A,"value")&&(A.value=m(M,E,e,y,b)),p(n,k,A))):n[k]=y[j];else if("array"===w)for(S=0;S<x.length;S++)n[k=x[S]]=t[k];else for(S=0;S<x.length;S++)k=x[S],A=h(t,k),p(n,k,A);return Object.isExtensible(t)||Object.preventExtensions(n),Object.isSealed(t)&&Object.seal(n),Object.isFrozen(t)&&Object.freeze(n),n}t.exports=m},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(661);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(78),i=e(13);t.exports=function(t){if("object"!=typeof t||null===t)return!1;if(t instanceof Error)return!0;for(;t;){if("[object Error]"===i(t))return!0;t=r(t)}return!1}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(663);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(157).isPrimitive,i=e(667);t.exports=function(t){if(!r(t))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+t+"`.");return(t=i.exec(t))?new RegExp(t[1],t[2]):null}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(230),i=e(231);t.exports=function(t){return r(t)||i(t)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(666);t.exports=function(t){try{return r.call(t),!0}catch(t){return!1}}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=String.prototype.valueOf;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(108),i=e(205),o=e(157).isPrimitive,u=e(54).isPrimitive;t.exports=function(t,n,e){var a,s;if(!i(t)&&!o(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(a=t.length))return-1;if(3===arguments.length){if(!u(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=a)return-1;s=e}else(s=a+e)<0&&(s=0)}else s=0;if(r(n)){for(;s<a;s++)if(r(t[s]))return s}else for(;s<a;s++)if(t[s]===n)return s;return-1}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=e(670),o=e(671),u=e(158),a=e(672),s=e(677);r=o?i()?a:u:s,t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(158);t.exports=function(){return function(){return 2!==(r(arguments)||"").length}(1,2)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=void 0!==Object.keys;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(234),i=e(158),o=Array.prototype.slice;t.exports=function(t){return r(t)?i(o.call(t)):i(t)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=e(235);r=function(){return i(arguments)}(),t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(21),i=e(159),o=e(73),u=e(66),a=e(81);t.exports=function(t){return null!==t&&"object"==typeof t&&!o(t)&&"number"==typeof t.length&&u(t.length)&&t.length>=0&&t.length<=a&&r(t,"callee")&&!i(t,"callee")}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(157),i=e(108).isPrimitive,o=e(54).isPrimitive,u=e(236),a=e(676);t.exports=function(t,n){var e;return null!=t&&(!(e=u.call(t,n))&&a&&r(t)?!i(n=+n)&&o(n)&&n>=0&&n<t.length:e)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r;r=!e(236).call("beep","0"),t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(203),i=e(21),o=e(234),u=e(678),a=e(679),s=e(680),c=e(685);t.exports=function(t){var n,e,l,f,h,d,p;if(f=[],o(t)){for(p=0;p<t.length;p++)f.push(p.toString());return f}if("string"==typeof t){if(t.length>0&&!i(t,"0"))for(p=0;p<t.length;p++)f.push(p.toString())}else{if(!1===(l="function"==typeof t)&&!r(t))return f;e=u&&l}for(h in t)e&&"prototype"===h||!i(t,h)||f.push(String(h));if(a)for(n=s(t),p=0;p<c.length;p++)d=c[p],n&&"constructor"===d||!i(t,d)||f.push(String(d));return f}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(159)(e(79),"prototype");t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=!e(159)({toString:null},"toString");t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(681),i=e(237),o=e(684);t.exports=function(t){if(!1===o&&!r)return i(t);try{return i(t)}catch(t){return!1}}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=e(21),o=e(232),u=e(145),a=e(237),s=e(682),c=e(683);r=function(){var t;if("undefined"===u(c))return!1;for(t in c)try{-1===o(s,t)&&i(c,t)&&null!==c[t]&&"object"===u(c[t])&&a(c[t])}catch(t){return!0}return!1}(),t.exports=r},function(t){t.exports=JSON.parse('["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]')},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="undefined"==typeof window?void 0:window;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r="undefined"!=typeof window;t.exports=r},function(t){t.exports=JSON.parse('["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]')},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=e(687),o=e(688),u=e(689);r=i?o:u,t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=void 0!==Object.getOwnPropertyNames;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=Object.getOwnPropertyNames;t.exports=function(t){return r(Object(t))}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(233);t.exports=function(t){return r(Object(t))}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=e(691),o=e(692),u=e(693);r=i?o:u,t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=void 0!==Object.getOwnPropertyDescriptor;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=Object.getOwnPropertyDescriptor;t.exports=function(t,n){var e;return null==t||void 0===(e=r(t,n))?null:e}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(21);t.exports=function(t,n){return r(t,n)?{configurable:!0,enumerable:!0,writable:!0,value:t[n]}:null}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=e(695),o=e(704),u=e(705);r=i?o:u,t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(41)(e(160).from);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(697);t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(77),i=e(698);t.exports=function(){var t,n;if("function"!=typeof i)return!1;try{n="function"==typeof i.from?i.from([1,2,3,4]):new i([1,2,3,4]),t=r(n)&&1===n[0]&&2===n[1]&&3===n[2]&&4===n[3]}catch(n){t=!1}return t}},function(t,n,e){"use strict";(function(n){
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var e="function"==typeof n?n:null;t.exports=e}).call(this,e(161).Buffer)},function(t,n,e){"use strict";n.byteLength=function(t){var n=c(t),e=n[0],r=n[1];return 3*(e+r)/4-r},n.toByteArray=function(t){var n,e,r=c(t),u=r[0],a=r[1],s=new o(function(t,n,e){return 3*(n+e)/4-e}(0,u,a)),l=0,f=a>0?u-4:u;for(e=0;e<f;e+=4)n=i[t.charCodeAt(e)]<<18|i[t.charCodeAt(e+1)]<<12|i[t.charCodeAt(e+2)]<<6|i[t.charCodeAt(e+3)],s[l++]=n>>16&255,s[l++]=n>>8&255,s[l++]=255&n;2===a&&(n=i[t.charCodeAt(e)]<<2|i[t.charCodeAt(e+1)]>>4,s[l++]=255&n);1===a&&(n=i[t.charCodeAt(e)]<<10|i[t.charCodeAt(e+1)]<<4|i[t.charCodeAt(e+2)]>>2,s[l++]=n>>8&255,s[l++]=255&n);return s},n.fromByteArray=function(t){for(var n,e=t.length,i=e%3,o=[],u=0,a=e-i;u<a;u+=16383)o.push(l(t,u,u+16383>a?a:u+16383));1===i?(n=t[e-1],o.push(r[n>>2]+r[n<<4&63]+"==")):2===i&&(n=(t[e-2]<<8)+t[e-1],o.push(r[n>>10]+r[n>>4&63]+r[n<<2&63]+"="));return o.join("")};for(var r=[],i=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,s=u.length;a<s;++a)r[a]=u[a],i[u.charCodeAt(a)]=a;function c(t){var n=t.length;if(n%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=t.indexOf("=");return-1===e&&(e=n),[e,e===n?0:4-e%4]}function l(t,n,e){for(var i,o,u=[],a=n;a<e;a+=3)i=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]),u.push(r[(o=i)>>18&63]+r[o>>12&63]+r[o>>6&63]+r[63&o]);return u.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},function(t,n){n.read=function(t,n,e,r,i){var o,u,a=8*i-r-1,s=(1<<a)-1,c=s>>1,l=-7,f=e?i-1:0,h=e?-1:1,d=t[n+f];for(f+=h,o=d&(1<<-l)-1,d>>=-l,l+=a;l>0;o=256*o+t[n+f],f+=h,l-=8);for(u=o&(1<<-l)-1,o>>=-l,l+=r;l>0;u=256*u+t[n+f],f+=h,l-=8);if(0===o)o=1-c;else{if(o===s)return u?NaN:1/0*(d?-1:1);u+=Math.pow(2,r),o-=c}return(d?-1:1)*u*Math.pow(2,o-r)},n.write=function(t,n,e,r,i,o){var u,a,s,c=8*o-i-1,l=(1<<c)-1,f=l>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=r?0:o-1,p=r?1:-1,v=n<0||0===n&&1/n<0?1:0;for(n=Math.abs(n),isNaN(n)||n===1/0?(a=isNaN(n)?1:0,u=l):(u=Math.floor(Math.log(n)/Math.LN2),n*(s=Math.pow(2,-u))<1&&(u--,s*=2),(n+=u+f>=1?h/s:h*Math.pow(2,1-f))*s>=2&&(u++,s/=2),u+f>=l?(a=0,u=l):u+f>=1?(a=(n*s-1)*Math.pow(2,i),u+=f):(a=n*Math.pow(2,f-1)*Math.pow(2,i),u=0));i>=8;t[e+d]=255&a,d+=p,a/=256,i-=8);for(u=u<<i|a,c+=i;c>0;t[e+d]=255&u,d+=p,u/=256,c-=8);t[e+d-p]|=128*v}},function(t,n){var e={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==e.call(t)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(161).Buffer;t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(){throw new Error("not implemented")}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(77),i=e(160);t.exports=function(t){if(!r(t))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+t+"`");return i.from(t)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(77),i=e(160);t.exports=function(t){if(!r(t))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+t+"`");return new i(t)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r,i=e(147),o=e(106),u=e(148),a=e(149),s=e(107),c=e(150),l=e(31),f=e(151),h=e(35);function d(t){return new i(t)}function p(t){return new o(t)}function v(t){return new u(t)}function g(t){return new a(t)}function m(t){return new s(t)}function y(t){return new c(t)}function b(t){return new l(t)}function _(t){return new f(t)}function x(t){return new h(t)}r={int8array:d,uint8array:p,uint8clampedarray:v,int16array:g,uint16array:m,int32array:y,uint32array:b,float32array:_,float64array:x},t.exports=r},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(708).isPrimitive;t.exports=function(t,n){return r(t)?r(n)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+n+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+t+"`.")}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(10),i=e(709),o=e(238),u=e(239);r(i,"isPrimitive",o),r(i,"isObject",u),t.exports=i},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r=e(238),i=e(239);t.exports=function(t){return r(t)||i(t)}},function(t,n,e){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.