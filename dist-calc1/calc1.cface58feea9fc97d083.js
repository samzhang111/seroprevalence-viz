!function(t){var n={};function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)r.d(e,i,function(n){return t[n]}.bind(null,i));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=263)}([function(t,n,r){var e=r(1),i=r(7),o=r(18),u=r(15),a=r(21),c=function(t,n,r){var f,s,l,h,p=t&c.F,v=t&c.G,d=t&c.S,g=t&c.P,y=t&c.B,m=v?e:d?e[n]||(e[n]={}):(e[n]||{}).prototype,_=v?i:i[n]||(i[n]={}),x=_.prototype||(_.prototype={});for(f in v&&(r=n),r)l=((s=!p&&m&&void 0!==m[f])?m:r)[f],h=y&&s?a(l,e):g&&"function"==typeof l?a(Function.call,l):l,m&&u(m,f,l,t&c.U),_[f]!=l&&o(_,f,h),g&&x[f]!=l&&(x[f]=l)};e.core=i,c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,r){var e=r(4);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(69)("wks"),i=r(37),o=r(1).Symbol,u="function"==typeof o;(t.exports=function(t){return e[t]||(e[t]=u&&o[t]||(u?o:i)("Symbol."+t))}).store=e},function(t,n,r){var e=r(23),i=Math.min;t.exports=function(t){return t>0?i(e(t),9007199254740991):0}},function(t,n){var r=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=r)},function(t,n,r){t.exports=!r(2)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(3),i=r(145),o=r(31),u=Object.defineProperty;n.f=r(8)?Object.defineProperty:function(t,n,r){if(e(t),n=o(n,!0),e(r),i)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(29);t.exports=function(t){return Object(e(t))}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(453);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e,i=r(122),o=r(463),u=r(464);e=i()?u:o,t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=Number.POSITIVE_INFINITY;t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(505);t.exports=e},function(t,n,r){var e=r(1),i=r(18),o=r(17),u=r(37)("src"),a=r(268),c=(""+a).split("toString");r(7).inspectSource=function(t){return a.call(t)},(t.exports=function(t,n,r,a){var f="function"==typeof r;f&&(o(r,"name")||i(r,"name",n)),t[n]!==r&&(f&&(o(r,u)||i(r,u,t[n]?""+t[n]:c.join(String(n)))),t===e?t[n]=r:a?t[n]?t[n]=r:i(t,n,r):(delete t[n],i(t,n,r)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[u]||a.call(this)}))},function(t,n,r){var e=r(0),i=r(2),o=r(29),u=/"/g,a=function(t,n,r,e){var i=String(o(t)),a="<"+n;return""!==r&&(a+=" "+r+'="'+String(e).replace(u,"&quot;")+'"'),a+">"+i+"</"+n+">"};t.exports=function(t,n){var r={};r[t]=n(a),e(e.P+e.F*i((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3})),"String",r)}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(9),i=r(36);t.exports=r(8)?function(t,n,r){return e.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(57),i=r(29);t.exports=function(t){return e(i(t))}},function(t,n,r){"use strict";var e=r(2);t.exports=function(t,n){return!!t&&e((function(){n?t.call(null,(function(){}),1):t.call(null)}))}},function(t,n,r){var e=r(22);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,i){return t.call(n,r,e,i)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(58),i=r(36),o=r(19),u=r(31),a=r(17),c=r(145),f=Object.getOwnPropertyDescriptor;n.f=r(8)?f:function(t,n){if(t=o(t),n=u(n,!0),c)try{return f(t,n)}catch(t){}if(a(t,n))return i(!e.f.call(t,n),t[n])}},function(t,n,r){var e=r(0),i=r(7),o=r(2);t.exports=function(t,n){var r=(i.Object||{})[t]||Object[t],u={};u[t]=n(r),e(e.S+e.F*o((function(){r(1)})),"Object",u)}},function(t,n,r){var e=r(21),i=r(57),o=r(10),u=r(6),a=r(161);t.exports=function(t,n){var r=1==t,c=2==t,f=3==t,s=4==t,l=6==t,h=5==t||l,p=n||a;return function(n,a,v){for(var d,g,y=o(n),m=i(y),_=e(a,v,3),x=u(m.length),w=0,b=r?p(n,x):c?p(n,0):void 0;x>w;w++)if((h||w in m)&&(g=_(d=m[w],w,y),t))if(r)b[w]=g;else if(g)switch(t){case 3:return!0;case 5:return d;case 6:return w;case 2:b.push(d)}else if(s)return!1;return l?-1:f||s?s:b}}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(121).NEGATIVE_INFINITY;t.exports=e},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){"use strict";if(r(8)){var e=r(38),i=r(1),o=r(2),u=r(0),a=r(80),c=r(117),f=r(21),s=r(53),l=r(36),h=r(18),p=r(54),v=r(23),d=r(6),g=r(172),y=r(40),m=r(31),_=r(17),x=r(59),w=r(4),b=r(10),A=r(109),M=r(41),S=r(43),E=r(42).f,N=r(111),j=r(37),T=r(5),O=r(26),k=r(70),P=r(60),C=r(113),L=r(51),F=r(73),I=r(52),R=r(112),U=r(163),D=r(9),q=r(24),z=D.f,B=q.f,W=i.RangeError,V=i.TypeError,Y=i.Uint8Array,H=Array.prototype,$=c.ArrayBuffer,G=c.DataView,X=O(0),Z=O(2),J=O(3),K=O(4),Q=O(5),tt=O(6),nt=k(!0),rt=k(!1),et=C.values,it=C.keys,ot=C.entries,ut=H.lastIndexOf,at=H.reduce,ct=H.reduceRight,ft=H.join,st=H.sort,lt=H.slice,ht=H.toString,pt=H.toLocaleString,vt=T("iterator"),dt=T("toStringTag"),gt=j("typed_constructor"),yt=j("def_constructor"),mt=a.CONSTR,_t=a.TYPED,xt=a.VIEW,wt=O(1,(function(t,n){return Et(P(t,t[yt]),n)})),bt=o((function(){return 1===new Y(new Uint16Array([1]).buffer)[0]})),At=!!Y&&!!Y.prototype.set&&o((function(){new Y(1).set({})})),Mt=function(t,n){var r=v(t);if(r<0||r%n)throw W("Wrong offset!");return r},St=function(t){if(w(t)&&_t in t)return t;throw V(t+" is not a typed array!")},Et=function(t,n){if(!w(t)||!(gt in t))throw V("It is not a typed array constructor!");return new t(n)},Nt=function(t,n){return jt(P(t,t[yt]),n)},jt=function(t,n){for(var r=0,e=n.length,i=Et(t,e);e>r;)i[r]=n[r++];return i},Tt=function(t,n,r){z(t,n,{get:function(){return this._d[r]}})},Ot=function(t){var n,r,e,i,o,u,a=b(t),c=arguments.length,s=c>1?arguments[1]:void 0,l=void 0!==s,h=N(a);if(null!=h&&!A(h)){for(u=h.call(a),e=[],n=0;!(o=u.next()).done;n++)e.push(o.value);a=e}for(l&&c>2&&(s=f(s,arguments[2],2)),n=0,r=d(a.length),i=Et(this,r);r>n;n++)i[n]=l?s(a[n],n):a[n];return i},kt=function(){for(var t=0,n=arguments.length,r=Et(this,n);n>t;)r[t]=arguments[t++];return r},Pt=!!Y&&o((function(){pt.call(new Y(1))})),Ct=function(){return pt.apply(Pt?lt.call(St(this)):St(this),arguments)},Lt={copyWithin:function(t,n){return U.call(St(this),t,n,arguments.length>2?arguments[2]:void 0)},every:function(t){return K(St(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){return R.apply(St(this),arguments)},filter:function(t){return Nt(this,Z(St(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return Q(St(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return tt(St(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){X(St(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return rt(St(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return nt(St(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){return ft.apply(St(this),arguments)},lastIndexOf:function(t){return ut.apply(St(this),arguments)},map:function(t){return wt(St(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){return at.apply(St(this),arguments)},reduceRight:function(t){return ct.apply(St(this),arguments)},reverse:function(){for(var t,n=St(this).length,r=Math.floor(n/2),e=0;e<r;)t=this[e],this[e++]=this[--n],this[n]=t;return this},some:function(t){return J(St(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return st.call(St(this),t)},subarray:function(t,n){var r=St(this),e=r.length,i=y(t,e);return new(P(r,r[yt]))(r.buffer,r.byteOffset+i*r.BYTES_PER_ELEMENT,d((void 0===n?e:y(n,e))-i))}},Ft=function(t,n){return Nt(this,lt.call(St(this),t,n))},It=function(t){St(this);var n=Mt(arguments[1],1),r=this.length,e=b(t),i=d(e.length),o=0;if(i+n>r)throw W("Wrong length!");for(;o<i;)this[n+o]=e[o++]},Rt={entries:function(){return ot.call(St(this))},keys:function(){return it.call(St(this))},values:function(){return et.call(St(this))}},Ut=function(t,n){return w(t)&&t[_t]&&"symbol"!=typeof n&&n in t&&String(+n)==String(n)},Dt=function(t,n){return Ut(t,n=m(n,!0))?l(2,t[n]):B(t,n)},qt=function(t,n,r){return!(Ut(t,n=m(n,!0))&&w(r)&&_(r,"value"))||_(r,"get")||_(r,"set")||r.configurable||_(r,"writable")&&!r.writable||_(r,"enumerable")&&!r.enumerable?z(t,n,r):(t[n]=r.value,t)};mt||(q.f=Dt,D.f=qt),u(u.S+u.F*!mt,"Object",{getOwnPropertyDescriptor:Dt,defineProperty:qt}),o((function(){ht.call({})}))&&(ht=pt=function(){return ft.call(this)});var zt=p({},Lt);p(zt,Rt),h(zt,vt,Rt.values),p(zt,{slice:Ft,set:It,constructor:function(){},toString:ht,toLocaleString:Ct}),Tt(zt,"buffer","b"),Tt(zt,"byteOffset","o"),Tt(zt,"byteLength","l"),Tt(zt,"length","e"),z(zt,dt,{get:function(){return this[_t]}}),t.exports=function(t,n,r,c){var f=t+((c=!!c)?"Clamped":"")+"Array",l="get"+t,p="set"+t,v=i[f],y=v||{},m=v&&S(v),_=!v||!a.ABV,b={},A=v&&v.prototype,N=function(t,r){z(t,r,{get:function(){return function(t,r){var e=t._d;return e.v[l](r*n+e.o,bt)}(this,r)},set:function(t){return function(t,r,e){var i=t._d;c&&(e=(e=Math.round(e))<0?0:e>255?255:255&e),i.v[p](r*n+i.o,e,bt)}(this,r,t)},enumerable:!0})};_?(v=r((function(t,r,e,i){s(t,v,f,"_d");var o,u,a,c,l=0,p=0;if(w(r)){if(!(r instanceof $||"ArrayBuffer"==(c=x(r))||"SharedArrayBuffer"==c))return _t in r?jt(v,r):Ot.call(v,r);o=r,p=Mt(e,n);var y=r.byteLength;if(void 0===i){if(y%n)throw W("Wrong length!");if((u=y-p)<0)throw W("Wrong length!")}else if((u=d(i)*n)+p>y)throw W("Wrong length!");a=u/n}else a=g(r),o=new $(u=a*n);for(h(t,"_d",{b:o,o:p,l:u,e:a,v:new G(o)});l<a;)N(t,l++)})),A=v.prototype=M(zt),h(A,"constructor",v)):o((function(){v(1)}))&&o((function(){new v(-1)}))&&F((function(t){new v,new v(null),new v(1.5),new v(t)}),!0)||(v=r((function(t,r,e,i){var o;return s(t,v,f),w(r)?r instanceof $||"ArrayBuffer"==(o=x(r))||"SharedArrayBuffer"==o?void 0!==i?new y(r,Mt(e,n),i):void 0!==e?new y(r,Mt(e,n)):new y(r):_t in r?jt(v,r):Ot.call(v,r):new y(g(r))})),X(m!==Function.prototype?E(y).concat(E(m)):E(y),(function(t){t in v||h(v,t,y[t])})),v.prototype=A,e||(A.constructor=v));var j=A[vt],T=!!j&&("values"==j.name||null==j.name),O=Rt.values;h(v,gt,!0),h(A,_t,f),h(A,xt,!0),h(A,yt,v),(c?new v(1)[dt]==f:dt in A)||z(A,dt,{get:function(){return f}}),b[f]=v,u(u.G+u.W+u.F*(v!=y),b),u(u.S,f,{BYTES_PER_ELEMENT:n}),u(u.S+u.F*o((function(){y.of.call(v,1)})),f,{from:Ot,of:kt}),"BYTES_PER_ELEMENT"in A||h(A,"BYTES_PER_ELEMENT",n),u(u.P,f,Lt),I(f),u(u.P+u.F*At,f,{set:It}),u(u.P+u.F*!T,f,Rt),e||A.toString==ht||(A.toString=ht),u(u.P+u.F*o((function(){new v(1).slice()})),f,{slice:Ft}),u(u.P+u.F*(o((function(){return[1,2].toLocaleString()!=new v([1,2]).toLocaleString()}))||!o((function(){A.toLocaleString.call([1,2])}))),f,{toLocaleString:Ct}),L[f]=T?j:O,e||T||h(A,vt,O)}}else t.exports=function(){}},function(t,n,r){var e=r(4);t.exports=function(t,n){if(!e(t))return t;var r,i;if(n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!e(i=r.call(t)))return i;if(!n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,n,r){var e=r(37)("meta"),i=r(4),o=r(17),u=r(9).f,a=0,c=Object.isExtensible||function(){return!0},f=!r(2)((function(){return c(Object.preventExtensions({}))})),s=function(t){u(t,e,{value:{i:"O"+ ++a,w:{}}})},l=t.exports={KEY:e,NEED:!1,fastKey:function(t,n){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,e)){if(!c(t))return"F";if(!n)return"E";s(t)}return t[e].i},getWeak:function(t,n){if(!o(t,e)){if(!c(t))return!0;if(!n)return!1;s(t)}return t[e].w},onFreeze:function(t){return f&&l.NEED&&c(t)&&!o(t,e)&&s(t),t}}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e,i=r(457),o=r(468),u=r(469);e=i()?o:u,t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e,i=r(180),o=r(474),u=r(475);e=i()?o:u,t.exports=e},,function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n){t.exports=!1},function(t,n,r){var e=r(147),i=r(96);t.exports=Object.keys||function(t){return e(t,i)}},function(t,n,r){var e=r(23),i=Math.max,o=Math.min;t.exports=function(t,n){return(t=e(t))<0?i(t+n,0):o(t,n)}},function(t,n,r){var e=r(3),i=r(148),o=r(96),u=r(95)("IE_PROTO"),a=function(){},c=function(){var t,n=r(93)("iframe"),e=o.length;for(n.style.display="none",r(97).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;e--;)delete c.prototype[o[e]];return c()};t.exports=Object.create||function(t,n){var r;return null!==t?(a.prototype=e(t),r=new a,a.prototype=null,r[u]=t):r=c(),void 0===n?r:i(r,n)}},function(t,n,r){var e=r(147),i=r(96).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,i)}},function(t,n,r){var e=r(17),i=r(10),o=r(95)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),e(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,r){var e=r(5)("unscopables"),i=Array.prototype;null==i[e]&&r(18)(i,e,{}),t.exports=function(t){i[e][t]=!0}},function(t,n,r){var e=r(4);t.exports=function(t,n){if(!e(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(456);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(465);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(14),i=r(561),o=r(195),u=r(196);e(i,"isPrimitive",o),e(i,"isObject",u),t.exports=i},function(t,n,r){var e=r(9).f,i=r(17),o=r(5)("toStringTag");t.exports=function(t,n,r){t&&!i(t=r?t:t.prototype,o)&&e(t,o,{configurable:!0,value:n})}},function(t,n,r){var e=r(0),i=r(29),o=r(2),u=r(99),a="["+u+"]",c=RegExp("^"+a+a+"*"),f=RegExp(a+a+"*$"),s=function(t,n,r){var i={},a=o((function(){return!!u[t]()||"​"!="​"[t]()})),c=i[t]=a?n(l):u[t];r&&(i[r]=c),e(e.P+e.F*a,"String",i)},l=s.trim=function(t,n){return t=String(i(t)),1&n&&(t=t.replace(c,"")),2&n&&(t=t.replace(f,"")),t};t.exports=s},function(t,n){t.exports={}},function(t,n,r){"use strict";var e=r(1),i=r(9),o=r(8),u=r(5)("species");t.exports=function(t){var n=e[t];o&&n&&!n[u]&&i.f(n,u,{configurable:!0,get:function(){return this}})}},function(t,n){t.exports=function(t,n,r,e){if(!(t instanceof n)||void 0!==e&&e in t)throw TypeError(r+": incorrect invocation!");return t}},function(t,n,r){var e=r(15);t.exports=function(t,n,r){for(var i in n)e(t,i,n[i],r);return t}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(519);t.exports=e},,function(t,n,r){var e=r(28);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,r){var e=r(28),i=r(5)("toStringTag"),o="Arguments"==e(function(){return arguments}());t.exports=function(t){var n,r,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),i))?r:o?e(n):"Object"==(u=e(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n,r){var e=r(3),i=r(22),o=r(5)("species");t.exports=function(t,n){var r,u=e(t).constructor;return void 0===u||null==(r=e(u)[o])?n:i(r)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(477);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(497);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=1023},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(555);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(450);t.exports=e},,,,function(t,n,r){var e=r(7),i=r(1),o=i["__core-js_shared__"]||(i["__core-js_shared__"]={});(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:e.version,mode:r(38)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,r){var e=r(19),i=r(6),o=r(40);t.exports=function(t){return function(n,r,u){var a,c=e(n),f=i(c.length),s=o(u,f);if(t&&r!=r){for(;f>s;)if((a=c[s++])!=a)return!0}else for(;f>s;s++)if((t||s in c)&&c[s]===r)return t||s||0;return!t&&-1}}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(28);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){var e=r(5)("iterator"),i=!1;try{var o=[7][e]();o.return=function(){i=!0},Array.from(o,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!i)return!1;var r=!1;try{var o=[7],u=o[e]();u.next=function(){return{done:r=!0}},o[e]=function(){return u},t(o)}catch(t){}return r}},function(t,n,r){"use strict";var e=r(3);t.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,r){"use strict";var e=r(59),i=RegExp.prototype.exec;t.exports=function(t,n){var r=t.exec;if("function"==typeof r){var o=r.call(t,n);if("object"!=typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==e(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,n)}},function(t,n,r){"use strict";r(165);var e=r(15),i=r(18),o=r(2),u=r(29),a=r(5),c=r(114),f=a("species"),s=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var r="ab".split(t);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();t.exports=function(t,n,r){var h=a(t),p=!o((function(){var n={};return n[h]=function(){return 7},7!=""[t](n)})),v=p?!o((function(){var n=!1,r=/a/;return r.exec=function(){return n=!0,null},"split"===t&&(r.constructor={},r.constructor[f]=function(){return r}),r[h](""),!n})):void 0;if(!p||!v||"replace"===t&&!s||"split"===t&&!l){var d=/./[h],g=r(u,h,""[t],(function(t,n,r,e,i){return n.exec===c?p&&!i?{done:!0,value:d.call(n,r,e)}:{done:!0,value:t.call(r,n,e)}:{done:!1}})),y=g[0],m=g[1];e(String.prototype,t,y),i(RegExp.prototype,h,2==n?function(t,n){return m.call(t,this,n)}:function(t){return m.call(t,this)})}}},function(t,n,r){var e=r(21),i=r(160),o=r(109),u=r(3),a=r(6),c=r(111),f={},s={};(n=t.exports=function(t,n,r,l,h){var p,v,d,g,y=h?function(){return t}:c(t),m=e(r,l,n?2:1),_=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(o(y)){for(p=a(t.length);p>_;_++)if((g=n?m(u(v=t[_])[0],v[1]):m(t[_]))===f||g===s)return g}else for(d=y.call(t);!(v=d.next()).done;)if((g=i(d,m,v.value,n))===f||g===s)return g}).BREAK=f,n.RETURN=s},function(t,n,r){var e=r(1).navigator;t.exports=e&&e.userAgent||""},function(t,n,r){"use strict";var e=r(1),i=r(0),o=r(15),u=r(54),a=r(32),c=r(77),f=r(53),s=r(4),l=r(2),h=r(73),p=r(49),v=r(100);t.exports=function(t,n,r,d,g,y){var m=e[t],_=m,x=g?"set":"add",w=_&&_.prototype,b={},A=function(t){var n=w[t];o(w,t,"delete"==t||"has"==t?function(t){return!(y&&!s(t))&&n.call(this,0===t?0:t)}:"get"==t?function(t){return y&&!s(t)?void 0:n.call(this,0===t?0:t)}:"add"==t?function(t){return n.call(this,0===t?0:t),this}:function(t,r){return n.call(this,0===t?0:t,r),this})};if("function"==typeof _&&(y||w.forEach&&!l((function(){(new _).entries().next()})))){var M=new _,S=M[x](y?{}:-0,1)!=M,E=l((function(){M.has(1)})),N=h((function(t){new _(t)})),j=!y&&l((function(){for(var t=new _,n=5;n--;)t[x](n,n);return!t.has(-0)}));N||((_=n((function(n,r){f(n,_,t);var e=v(new m,n,_);return null!=r&&c(r,g,e[x],e),e}))).prototype=w,w.constructor=_),(E||j)&&(A("delete"),A("has"),g&&A("get")),(j||S)&&A(x),y&&w.clear&&delete w.clear}else _=d.getConstructor(n,t,g,x),u(_.prototype,r),a.NEED=!0;return p(_,t),b[t]=_,i(i.G+i.W+i.F*(_!=m),b),y||d.setStrong(_,t,g),_}},function(t,n,r){for(var e,i=r(1),o=r(18),u=r(37),a=u("typed_array"),c=u("view"),f=!(!i.ArrayBuffer||!i.DataView),s=f,l=0,h="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");l<9;)(e=i[h[l++]])?(o(e.prototype,a,!0),o(e.prototype,c,!0)):s=!1;t.exports={ABV:f,CONSTR:s,TYPED:a,VIEW:c}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(499);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(535);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(638);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(455);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(633);t.exports=e},,,,,,,,function(t,n,r){var e=r(4),i=r(1).document,o=e(i)&&e(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,n,r){n.f=r(5)},function(t,n,r){var e=r(69)("keys"),i=r(37);t.exports=function(t){return e[t]||(e[t]=i(t))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,r){var e=r(1).document;t.exports=e&&e.documentElement},function(t,n,r){var e=r(4),i=r(3),o=function(t,n){if(i(t),!e(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,e){try{(e=r(21)(Function.call,r(24).f(Object.prototype,"__proto__").set,2))(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,r){return o(t,r),n?t.__proto__=r:e(t,r),t}}({},!1):void 0),check:o}},function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,n,r){var e=r(4),i=r(98).set;t.exports=function(t,n,r){var o,u=n.constructor;return u!==r&&"function"==typeof u&&(o=u.prototype)!==r.prototype&&e(o)&&i&&i(t,o),t}},function(t,n,r){"use strict";var e=r(23),i=r(29);t.exports=function(t){var n=String(i(this)),r="",o=e(t);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(n+=n))1&o&&(r+=n);return r}},function(t,n){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,n){var r=Math.expm1;t.exports=!r||r(10)>22025.465794806718||r(10)<22025.465794806718||-2e-17!=r(-2e-17)?function(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:r},function(t,n,r){var e=r(23),i=r(29);t.exports=function(t){return function(n,r){var o,u,a=String(i(n)),c=e(r),f=a.length;return c<0||c>=f?t?"":void 0:(o=a.charCodeAt(c))<55296||o>56319||c+1===f||(u=a.charCodeAt(c+1))<56320||u>57343?t?a.charAt(c):o:t?a.slice(c,c+2):u-56320+(o-55296<<10)+65536}}},function(t,n,r){"use strict";var e=r(38),i=r(0),o=r(15),u=r(18),a=r(51),c=r(159),f=r(49),s=r(43),l=r(5)("iterator"),h=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,n,r,v,d,g,y){c(r,n,v);var m,_,x,w=function(t){if(!h&&t in S)return S[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},b=n+" Iterator",A="values"==d,M=!1,S=t.prototype,E=S[l]||S["@@iterator"]||d&&S[d],N=E||w(d),j=d?A?w("entries"):N:void 0,T="Array"==n&&S.entries||E;if(T&&(x=s(T.call(new t)))!==Object.prototype&&x.next&&(f(x,b,!0),e||"function"==typeof x[l]||u(x,l,p)),A&&E&&"values"!==E.name&&(M=!0,N=function(){return E.call(this)}),e&&!y||!h&&!M&&S[l]||u(S,l,N),a[n]=N,a[b]=p,d)if(m={values:A?N:w("values"),keys:g?N:w("keys"),entries:j},y)for(_ in m)_ in S||o(S,_,m[_]);else i(i.P+i.F*(h||M),n,m);return m}},function(t,n,r){var e=r(107),i=r(29);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(t))}},function(t,n,r){var e=r(4),i=r(28),o=r(5)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[o])?!!n:"RegExp"==i(t))}},function(t,n,r){var e=r(5)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(r){try{return n[e]=!1,!"/./"[t](n)}catch(t){}}return!0}},function(t,n,r){var e=r(51),i=r(5)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(e.Array===t||o[i]===t)}},function(t,n,r){"use strict";var e=r(9),i=r(36);t.exports=function(t,n,r){n in t?e.f(t,n,i(0,r)):t[n]=r}},function(t,n,r){var e=r(59),i=r(5)("iterator"),o=r(51);t.exports=r(7).getIteratorMethod=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[e(t)]}},function(t,n,r){"use strict";var e=r(10),i=r(40),o=r(6);t.exports=function(t){for(var n=e(this),r=o(n.length),u=arguments.length,a=i(u>1?arguments[1]:void 0,r),c=u>2?arguments[2]:void 0,f=void 0===c?r:i(c,r);f>a;)n[a++]=t;return n}},function(t,n,r){"use strict";var e=r(44),i=r(164),o=r(51),u=r(19);t.exports=r(105)(Array,"Array",(function(t,n){this._t=u(t),this._i=0,this._k=n}),(function(){var t=this._t,n=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,i(1)):i(0,"keys"==n?r:"values"==n?t[r]:[r,t[r]])}),"values"),o.Arguments=o.Array,e("keys"),e("values"),e("entries")},function(t,n,r){"use strict";var e,i,o=r(74),u=RegExp.prototype.exec,a=String.prototype.replace,c=u,f=(e=/a/,i=/b*/g,u.call(e,"a"),u.call(i,"a"),0!==e.lastIndex||0!==i.lastIndex),s=void 0!==/()??/.exec("")[1];(f||s)&&(c=function(t){var n,r,e,i,c=this;return s&&(r=new RegExp("^"+c.source+"$(?!\\s)",o.call(c))),f&&(n=c.lastIndex),e=u.call(c,t),f&&e&&(c.lastIndex=c.global?e.index+e[0].length:n),s&&e&&e.length>1&&a.call(e[0],r,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(e[i]=void 0)})),e}),t.exports=c},function(t,n,r){"use strict";var e=r(104)(!0);t.exports=function(t,n,r){return n+(r?e(t,n).length:1)}},function(t,n,r){var e,i,o,u=r(21),a=r(153),c=r(97),f=r(93),s=r(1),l=s.process,h=s.setImmediate,p=s.clearImmediate,v=s.MessageChannel,d=s.Dispatch,g=0,y={},m=function(){var t=+this;if(y.hasOwnProperty(t)){var n=y[t];delete y[t],n()}},_=function(t){m.call(t.data)};h&&p||(h=function(t){for(var n=[],r=1;arguments.length>r;)n.push(arguments[r++]);return y[++g]=function(){a("function"==typeof t?t:Function(t),n)},e(g),g},p=function(t){delete y[t]},"process"==r(28)(l)?e=function(t){l.nextTick(u(m,t,1))}:d&&d.now?e=function(t){d.now(u(m,t,1))}:v?(o=(i=new v).port2,i.port1.onmessage=_,e=u(o.postMessage,o,1)):s.addEventListener&&"function"==typeof postMessage&&!s.importScripts?(e=function(t){s.postMessage(t+"","*")},s.addEventListener("message",_,!1)):e="onreadystatechange"in f("script")?function(t){c.appendChild(f("script")).onreadystatechange=function(){c.removeChild(this),m.call(t)}}:function(t){setTimeout(u(m,t,1),0)}),t.exports={set:h,clear:p}},function(t,n,r){"use strict";var e=r(1),i=r(8),o=r(38),u=r(80),a=r(18),c=r(54),f=r(2),s=r(53),l=r(23),h=r(6),p=r(172),v=r(42).f,d=r(9).f,g=r(112),y=r(49),m=e.ArrayBuffer,_=e.DataView,x=e.Math,w=e.RangeError,b=e.Infinity,A=m,M=x.abs,S=x.pow,E=x.floor,N=x.log,j=x.LN2,T=i?"_b":"buffer",O=i?"_l":"byteLength",k=i?"_o":"byteOffset";function P(t,n,r){var e,i,o,u=new Array(r),a=8*r-n-1,c=(1<<a)-1,f=c>>1,s=23===n?S(2,-24)-S(2,-77):0,l=0,h=t<0||0===t&&1/t<0?1:0;for((t=M(t))!=t||t===b?(i=t!=t?1:0,e=c):(e=E(N(t)/j),t*(o=S(2,-e))<1&&(e--,o*=2),(t+=e+f>=1?s/o:s*S(2,1-f))*o>=2&&(e++,o/=2),e+f>=c?(i=0,e=c):e+f>=1?(i=(t*o-1)*S(2,n),e+=f):(i=t*S(2,f-1)*S(2,n),e=0));n>=8;u[l++]=255&i,i/=256,n-=8);for(e=e<<n|i,a+=n;a>0;u[l++]=255&e,e/=256,a-=8);return u[--l]|=128*h,u}function C(t,n,r){var e,i=8*r-n-1,o=(1<<i)-1,u=o>>1,a=i-7,c=r-1,f=t[c--],s=127&f;for(f>>=7;a>0;s=256*s+t[c],c--,a-=8);for(e=s&(1<<-a)-1,s>>=-a,a+=n;a>0;e=256*e+t[c],c--,a-=8);if(0===s)s=1-u;else{if(s===o)return e?NaN:f?-b:b;e+=S(2,n),s-=u}return(f?-1:1)*e*S(2,s-n)}function L(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function F(t){return[255&t]}function I(t){return[255&t,t>>8&255]}function R(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function U(t){return P(t,52,8)}function D(t){return P(t,23,4)}function q(t,n,r){d(t.prototype,n,{get:function(){return this[r]}})}function z(t,n,r,e){var i=p(+r);if(i+n>t[O])throw w("Wrong index!");var o=t[T]._b,u=i+t[k],a=o.slice(u,u+n);return e?a:a.reverse()}function B(t,n,r,e,i,o){var u=p(+r);if(u+n>t[O])throw w("Wrong index!");for(var a=t[T]._b,c=u+t[k],f=e(+i),s=0;s<n;s++)a[c+s]=f[o?s:n-s-1]}if(u.ABV){if(!f((function(){m(1)}))||!f((function(){new m(-1)}))||f((function(){return new m,new m(1.5),new m(NaN),"ArrayBuffer"!=m.name}))){for(var W,V=(m=function(t){return s(this,m),new A(p(t))}).prototype=A.prototype,Y=v(A),H=0;Y.length>H;)(W=Y[H++])in m||a(m,W,A[W]);o||(V.constructor=m)}var $=new _(new m(2)),G=_.prototype.setInt8;$.setInt8(0,2147483648),$.setInt8(1,2147483649),!$.getInt8(0)&&$.getInt8(1)||c(_.prototype,{setInt8:function(t,n){G.call(this,t,n<<24>>24)},setUint8:function(t,n){G.call(this,t,n<<24>>24)}},!0)}else m=function(t){s(this,m,"ArrayBuffer");var n=p(t);this._b=g.call(new Array(n),0),this[O]=n},_=function(t,n,r){s(this,_,"DataView"),s(t,m,"DataView");var e=t[O],i=l(n);if(i<0||i>e)throw w("Wrong offset!");if(i+(r=void 0===r?e-i:h(r))>e)throw w("Wrong length!");this[T]=t,this[k]=i,this[O]=r},i&&(q(m,"byteLength","_l"),q(_,"buffer","_b"),q(_,"byteLength","_l"),q(_,"byteOffset","_o")),c(_.prototype,{getInt8:function(t){return z(this,1,t)[0]<<24>>24},getUint8:function(t){return z(this,1,t)[0]},getInt16:function(t){var n=z(this,2,t,arguments[1]);return(n[1]<<8|n[0])<<16>>16},getUint16:function(t){var n=z(this,2,t,arguments[1]);return n[1]<<8|n[0]},getInt32:function(t){return L(z(this,4,t,arguments[1]))},getUint32:function(t){return L(z(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return C(z(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return C(z(this,8,t,arguments[1]),52,8)},setInt8:function(t,n){B(this,1,t,F,n)},setUint8:function(t,n){B(this,1,t,F,n)},setInt16:function(t,n){B(this,2,t,I,n,arguments[2])},setUint16:function(t,n){B(this,2,t,I,n,arguments[2])},setInt32:function(t,n){B(this,4,t,R,n,arguments[2])},setUint32:function(t,n){B(this,4,t,R,n,arguments[2])},setFloat32:function(t,n){B(this,4,t,D,n,arguments[2])},setFloat64:function(t,n){B(this,8,t,U,n,arguments[2])}});y(m,"ArrayBuffer"),y(_,"DataView"),a(_.prototype,u.VIEW,!0),n.ArrayBuffer=m,n.DataView=_},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){t.exports=!r(177)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(454);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(460);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=4294967295},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e,i=r(479),o=r(485),u=r(486);e=i()?o:u,t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e,i=r(487),o=r(493),u=r(494);e=i()?o:u,t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(495);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e,i=r(506),o=r(509),u=r(510);e=i()?o:u,t.exports=e},function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(543);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(548);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(556);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(661);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(669);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(14),i=r(515);e(i,"factory",r(183)),t.exports=i},function(t,n,r){(function(t,e){var i;
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(){var o="Expected a function",u="__lodash_placeholder__",a=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],c="[object Arguments]",f="[object Array]",s="[object Boolean]",l="[object Date]",h="[object Error]",p="[object Function]",v="[object GeneratorFunction]",d="[object Map]",g="[object Number]",y="[object Object]",m="[object RegExp]",_="[object Set]",x="[object String]",w="[object Symbol]",b="[object WeakMap]",A="[object ArrayBuffer]",M="[object DataView]",S="[object Float32Array]",E="[object Float64Array]",N="[object Int8Array]",j="[object Int16Array]",T="[object Int32Array]",O="[object Uint8Array]",k="[object Uint16Array]",P="[object Uint32Array]",C=/\b__p \+= '';/g,L=/\b(__p \+=) '' \+/g,F=/(__e\(.*?\)|\b__t\)) \+\n'';/g,I=/&(?:amp|lt|gt|quot|#39);/g,R=/[&<>"']/g,U=RegExp(I.source),D=RegExp(R.source),q=/<%-([\s\S]+?)%>/g,z=/<%([\s\S]+?)%>/g,B=/<%=([\s\S]+?)%>/g,W=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,V=/^\w*$/,Y=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,H=/[\\^$.*+?()[\]{}|]/g,$=RegExp(H.source),G=/^\s+|\s+$/g,X=/^\s+/,Z=/\s+$/,J=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,K=/\{\n\/\* \[wrapped with (.+)\] \*/,Q=/,? & /,tt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,nt=/\\(\\)?/g,rt=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,et=/\w*$/,it=/^[-+]0x[0-9a-f]+$/i,ot=/^0b[01]+$/i,ut=/^\[object .+?Constructor\]$/,at=/^0o[0-7]+$/i,ct=/^(?:0|[1-9]\d*)$/,ft=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,st=/($^)/,lt=/['\n\r\u2028\u2029\\]/g,ht="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",pt="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",vt="[\\ud800-\\udfff]",dt="["+pt+"]",gt="["+ht+"]",yt="\\d+",mt="[\\u2700-\\u27bf]",_t="[a-z\\xdf-\\xf6\\xf8-\\xff]",xt="[^\\ud800-\\udfff"+pt+yt+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",wt="\\ud83c[\\udffb-\\udfff]",bt="[^\\ud800-\\udfff]",At="(?:\\ud83c[\\udde6-\\uddff]){2}",Mt="[\\ud800-\\udbff][\\udc00-\\udfff]",St="[A-Z\\xc0-\\xd6\\xd8-\\xde]",Et="(?:"+_t+"|"+xt+")",Nt="(?:"+St+"|"+xt+")",jt="(?:"+gt+"|"+wt+")"+"?",Tt="[\\ufe0e\\ufe0f]?"+jt+("(?:\\u200d(?:"+[bt,At,Mt].join("|")+")[\\ufe0e\\ufe0f]?"+jt+")*"),Ot="(?:"+[mt,At,Mt].join("|")+")"+Tt,kt="(?:"+[bt+gt+"?",gt,At,Mt,vt].join("|")+")",Pt=RegExp("['’]","g"),Ct=RegExp(gt,"g"),Lt=RegExp(wt+"(?="+wt+")|"+kt+Tt,"g"),Ft=RegExp([St+"?"+_t+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[dt,St,"$"].join("|")+")",Nt+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[dt,St+Et,"$"].join("|")+")",St+"?"+Et+"+(?:['’](?:d|ll|m|re|s|t|ve))?",St+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",yt,Ot].join("|"),"g"),It=RegExp("[\\u200d\\ud800-\\udfff"+ht+"\\ufe0e\\ufe0f]"),Rt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Ut=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Dt=-1,qt={};qt[S]=qt[E]=qt[N]=qt[j]=qt[T]=qt[O]=qt["[object Uint8ClampedArray]"]=qt[k]=qt[P]=!0,qt[c]=qt[f]=qt[A]=qt[s]=qt[M]=qt[l]=qt[h]=qt[p]=qt[d]=qt[g]=qt[y]=qt[m]=qt[_]=qt[x]=qt[b]=!1;var zt={};zt[c]=zt[f]=zt[A]=zt[M]=zt[s]=zt[l]=zt[S]=zt[E]=zt[N]=zt[j]=zt[T]=zt[d]=zt[g]=zt[y]=zt[m]=zt[_]=zt[x]=zt[w]=zt[O]=zt["[object Uint8ClampedArray]"]=zt[k]=zt[P]=!0,zt[h]=zt[p]=zt[b]=!1;var Bt={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Wt=parseFloat,Vt=parseInt,Yt="object"==typeof t&&t&&t.Object===Object&&t,Ht="object"==typeof self&&self&&self.Object===Object&&self,$t=Yt||Ht||Function("return this")(),Gt=n&&!n.nodeType&&n,Xt=Gt&&"object"==typeof e&&e&&!e.nodeType&&e,Zt=Xt&&Xt.exports===Gt,Jt=Zt&&Yt.process,Kt=function(){try{var t=Xt&&Xt.require&&Xt.require("util").types;return t||Jt&&Jt.binding&&Jt.binding("util")}catch(t){}}(),Qt=Kt&&Kt.isArrayBuffer,tn=Kt&&Kt.isDate,nn=Kt&&Kt.isMap,rn=Kt&&Kt.isRegExp,en=Kt&&Kt.isSet,on=Kt&&Kt.isTypedArray;function un(t,n,r){switch(r.length){case 0:return t.call(n);case 1:return t.call(n,r[0]);case 2:return t.call(n,r[0],r[1]);case 3:return t.call(n,r[0],r[1],r[2])}return t.apply(n,r)}function an(t,n,r,e){for(var i=-1,o=null==t?0:t.length;++i<o;){var u=t[i];n(e,u,r(u),t)}return e}function cn(t,n){for(var r=-1,e=null==t?0:t.length;++r<e&&!1!==n(t[r],r,t););return t}function fn(t,n){for(var r=null==t?0:t.length;r--&&!1!==n(t[r],r,t););return t}function sn(t,n){for(var r=-1,e=null==t?0:t.length;++r<e;)if(!n(t[r],r,t))return!1;return!0}function ln(t,n){for(var r=-1,e=null==t?0:t.length,i=0,o=[];++r<e;){var u=t[r];n(u,r,t)&&(o[i++]=u)}return o}function hn(t,n){return!!(null==t?0:t.length)&&bn(t,n,0)>-1}function pn(t,n,r){for(var e=-1,i=null==t?0:t.length;++e<i;)if(r(n,t[e]))return!0;return!1}function vn(t,n){for(var r=-1,e=null==t?0:t.length,i=Array(e);++r<e;)i[r]=n(t[r],r,t);return i}function dn(t,n){for(var r=-1,e=n.length,i=t.length;++r<e;)t[i+r]=n[r];return t}function gn(t,n,r,e){var i=-1,o=null==t?0:t.length;for(e&&o&&(r=t[++i]);++i<o;)r=n(r,t[i],i,t);return r}function yn(t,n,r,e){var i=null==t?0:t.length;for(e&&i&&(r=t[--i]);i--;)r=n(r,t[i],i,t);return r}function mn(t,n){for(var r=-1,e=null==t?0:t.length;++r<e;)if(n(t[r],r,t))return!0;return!1}var _n=En("length");function xn(t,n,r){var e;return r(t,(function(t,r,i){if(n(t,r,i))return e=r,!1})),e}function wn(t,n,r,e){for(var i=t.length,o=r+(e?1:-1);e?o--:++o<i;)if(n(t[o],o,t))return o;return-1}function bn(t,n,r){return n==n?function(t,n,r){var e=r-1,i=t.length;for(;++e<i;)if(t[e]===n)return e;return-1}(t,n,r):wn(t,Mn,r)}function An(t,n,r,e){for(var i=r-1,o=t.length;++i<o;)if(e(t[i],n))return i;return-1}function Mn(t){return t!=t}function Sn(t,n){var r=null==t?0:t.length;return r?Tn(t,n)/r:NaN}function En(t){return function(n){return null==n?void 0:n[t]}}function Nn(t){return function(n){return null==t?void 0:t[n]}}function jn(t,n,r,e,i){return i(t,(function(t,i,o){r=e?(e=!1,t):n(r,t,i,o)})),r}function Tn(t,n){for(var r,e=-1,i=t.length;++e<i;){var o=n(t[e]);void 0!==o&&(r=void 0===r?o:r+o)}return r}function On(t,n){for(var r=-1,e=Array(t);++r<t;)e[r]=n(r);return e}function kn(t){return function(n){return t(n)}}function Pn(t,n){return vn(n,(function(n){return t[n]}))}function Cn(t,n){return t.has(n)}function Ln(t,n){for(var r=-1,e=t.length;++r<e&&bn(n,t[r],0)>-1;);return r}function Fn(t,n){for(var r=t.length;r--&&bn(n,t[r],0)>-1;);return r}function In(t,n){for(var r=t.length,e=0;r--;)t[r]===n&&++e;return e}var Rn=Nn({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),Un=Nn({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function Dn(t){return"\\"+Bt[t]}function qn(t){return It.test(t)}function zn(t){var n=-1,r=Array(t.size);return t.forEach((function(t,e){r[++n]=[e,t]})),r}function Bn(t,n){return function(r){return t(n(r))}}function Wn(t,n){for(var r=-1,e=t.length,i=0,o=[];++r<e;){var a=t[r];a!==n&&a!==u||(t[r]=u,o[i++]=r)}return o}function Vn(t){var n=-1,r=Array(t.size);return t.forEach((function(t){r[++n]=t})),r}function Yn(t){var n=-1,r=Array(t.size);return t.forEach((function(t){r[++n]=[t,t]})),r}function Hn(t){return qn(t)?function(t){var n=Lt.lastIndex=0;for(;Lt.test(t);)++n;return n}(t):_n(t)}function $n(t){return qn(t)?function(t){return t.match(Lt)||[]}(t):function(t){return t.split("")}(t)}var Gn=Nn({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var Xn=function t(n){var r,e=(n=null==n?$t:Xn.defaults($t.Object(),n,Xn.pick($t,Ut))).Array,i=n.Date,ht=n.Error,pt=n.Function,vt=n.Math,dt=n.Object,gt=n.RegExp,yt=n.String,mt=n.TypeError,_t=e.prototype,xt=pt.prototype,wt=dt.prototype,bt=n["__core-js_shared__"],At=xt.toString,Mt=wt.hasOwnProperty,St=0,Et=(r=/[^.]+$/.exec(bt&&bt.keys&&bt.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"",Nt=wt.toString,jt=At.call(dt),Tt=$t._,Ot=gt("^"+At.call(Mt).replace(H,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),kt=Zt?n.Buffer:void 0,Lt=n.Symbol,It=n.Uint8Array,Bt=kt?kt.allocUnsafe:void 0,Yt=Bn(dt.getPrototypeOf,dt),Ht=dt.create,Gt=wt.propertyIsEnumerable,Xt=_t.splice,Jt=Lt?Lt.isConcatSpreadable:void 0,Kt=Lt?Lt.iterator:void 0,_n=Lt?Lt.toStringTag:void 0,Nn=function(){try{var t=Qi(dt,"defineProperty");return t({},"",{}),t}catch(t){}}(),Zn=n.clearTimeout!==$t.clearTimeout&&n.clearTimeout,Jn=i&&i.now!==$t.Date.now&&i.now,Kn=n.setTimeout!==$t.setTimeout&&n.setTimeout,Qn=vt.ceil,tr=vt.floor,nr=dt.getOwnPropertySymbols,rr=kt?kt.isBuffer:void 0,er=n.isFinite,ir=_t.join,or=Bn(dt.keys,dt),ur=vt.max,ar=vt.min,cr=i.now,fr=n.parseInt,sr=vt.random,lr=_t.reverse,hr=Qi(n,"DataView"),pr=Qi(n,"Map"),vr=Qi(n,"Promise"),dr=Qi(n,"Set"),gr=Qi(n,"WeakMap"),yr=Qi(dt,"create"),mr=gr&&new gr,_r={},xr=No(hr),wr=No(pr),br=No(vr),Ar=No(dr),Mr=No(gr),Sr=Lt?Lt.prototype:void 0,Er=Sr?Sr.valueOf:void 0,Nr=Sr?Sr.toString:void 0;function jr(t){if(Vu(t)&&!Cu(t)&&!(t instanceof Pr)){if(t instanceof kr)return t;if(Mt.call(t,"__wrapped__"))return jo(t)}return new kr(t)}var Tr=function(){function t(){}return function(n){if(!Wu(n))return{};if(Ht)return Ht(n);t.prototype=n;var r=new t;return t.prototype=void 0,r}}();function Or(){}function kr(t,n){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=void 0}function Pr(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}function Cr(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function Lr(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function Fr(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}function Ir(t){var n=-1,r=null==t?0:t.length;for(this.__data__=new Fr;++n<r;)this.add(t[n])}function Rr(t){var n=this.__data__=new Lr(t);this.size=n.size}function Ur(t,n){var r=Cu(t),e=!r&&Pu(t),i=!r&&!e&&Ru(t),o=!r&&!e&&!i&&Ku(t),u=r||e||i||o,a=u?On(t.length,yt):[],c=a.length;for(var f in t)!n&&!Mt.call(t,f)||u&&("length"==f||i&&("offset"==f||"parent"==f)||o&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||uo(f,c))||a.push(f);return a}function Dr(t){var n=t.length;return n?t[Ie(0,n-1)]:void 0}function qr(t,n){return Mo(yi(t),Xr(n,0,t.length))}function zr(t){return Mo(yi(t))}function Br(t,n,r){(void 0!==r&&!Tu(t[n],r)||void 0===r&&!(n in t))&&$r(t,n,r)}function Wr(t,n,r){var e=t[n];Mt.call(t,n)&&Tu(e,r)&&(void 0!==r||n in t)||$r(t,n,r)}function Vr(t,n){for(var r=t.length;r--;)if(Tu(t[r][0],n))return r;return-1}function Yr(t,n,r,e){return te(t,(function(t,i,o){n(e,t,r(t),o)})),e}function Hr(t,n){return t&&mi(n,xa(n),t)}function $r(t,n,r){"__proto__"==n&&Nn?Nn(t,n,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[n]=r}function Gr(t,n){for(var r=-1,i=n.length,o=e(i),u=null==t;++r<i;)o[r]=u?void 0:da(t,n[r]);return o}function Xr(t,n,r){return t==t&&(void 0!==r&&(t=t<=r?t:r),void 0!==n&&(t=t>=n?t:n)),t}function Zr(t,n,r,e,i,o){var u,a=1&n,f=2&n,h=4&n;if(r&&(u=i?r(t,e,i,o):r(t)),void 0!==u)return u;if(!Wu(t))return t;var b=Cu(t);if(b){if(u=function(t){var n=t.length,r=new t.constructor(n);n&&"string"==typeof t[0]&&Mt.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!a)return yi(t,u)}else{var C=ro(t),L=C==p||C==v;if(Ru(t))return li(t,a);if(C==y||C==c||L&&!i){if(u=f||L?{}:io(t),!a)return f?function(t,n){return mi(t,no(t),n)}(t,function(t,n){return t&&mi(n,wa(n),t)}(u,t)):function(t,n){return mi(t,to(t),n)}(t,Hr(u,t))}else{if(!zt[C])return i?t:{};u=function(t,n,r){var e=t.constructor;switch(n){case A:return hi(t);case s:case l:return new e(+t);case M:return function(t,n){var r=n?hi(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,r);case S:case E:case N:case j:case T:case O:case"[object Uint8ClampedArray]":case k:case P:return pi(t,r);case d:return new e;case g:case x:return new e(t);case m:return function(t){var n=new t.constructor(t.source,et.exec(t));return n.lastIndex=t.lastIndex,n}(t);case _:return new e;case w:return i=t,Er?dt(Er.call(i)):{}}var i}(t,C,a)}}o||(o=new Rr);var F=o.get(t);if(F)return F;o.set(t,u),Xu(t)?t.forEach((function(e){u.add(Zr(e,n,r,e,t,o))})):Yu(t)&&t.forEach((function(e,i){u.set(i,Zr(e,n,r,i,t,o))}));var I=b?void 0:(h?f?Hi:Yi:f?wa:xa)(t);return cn(I||t,(function(e,i){I&&(e=t[i=e]),Wr(u,i,Zr(e,n,r,i,t,o))})),u}function Jr(t,n,r){var e=r.length;if(null==t)return!e;for(t=dt(t);e--;){var i=r[e],o=n[i],u=t[i];if(void 0===u&&!(i in t)||!o(u))return!1}return!0}function Kr(t,n,r){if("function"!=typeof t)throw new mt(o);return xo((function(){t.apply(void 0,r)}),n)}function Qr(t,n,r,e){var i=-1,o=hn,u=!0,a=t.length,c=[],f=n.length;if(!a)return c;r&&(n=vn(n,kn(r))),e?(o=pn,u=!1):n.length>=200&&(o=Cn,u=!1,n=new Ir(n));t:for(;++i<a;){var s=t[i],l=null==r?s:r(s);if(s=e||0!==s?s:0,u&&l==l){for(var h=f;h--;)if(n[h]===l)continue t;c.push(s)}else o(n,l,e)||c.push(s)}return c}jr.templateSettings={escape:q,evaluate:z,interpolate:B,variable:"",imports:{_:jr}},jr.prototype=Or.prototype,jr.prototype.constructor=jr,kr.prototype=Tr(Or.prototype),kr.prototype.constructor=kr,Pr.prototype=Tr(Or.prototype),Pr.prototype.constructor=Pr,Cr.prototype.clear=function(){this.__data__=yr?yr(null):{},this.size=0},Cr.prototype.delete=function(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n},Cr.prototype.get=function(t){var n=this.__data__;if(yr){var r=n[t];return"__lodash_hash_undefined__"===r?void 0:r}return Mt.call(n,t)?n[t]:void 0},Cr.prototype.has=function(t){var n=this.__data__;return yr?void 0!==n[t]:Mt.call(n,t)},Cr.prototype.set=function(t,n){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=yr&&void 0===n?"__lodash_hash_undefined__":n,this},Lr.prototype.clear=function(){this.__data__=[],this.size=0},Lr.prototype.delete=function(t){var n=this.__data__,r=Vr(n,t);return!(r<0)&&(r==n.length-1?n.pop():Xt.call(n,r,1),--this.size,!0)},Lr.prototype.get=function(t){var n=this.__data__,r=Vr(n,t);return r<0?void 0:n[r][1]},Lr.prototype.has=function(t){return Vr(this.__data__,t)>-1},Lr.prototype.set=function(t,n){var r=this.__data__,e=Vr(r,t);return e<0?(++this.size,r.push([t,n])):r[e][1]=n,this},Fr.prototype.clear=function(){this.size=0,this.__data__={hash:new Cr,map:new(pr||Lr),string:new Cr}},Fr.prototype.delete=function(t){var n=Ji(this,t).delete(t);return this.size-=n?1:0,n},Fr.prototype.get=function(t){return Ji(this,t).get(t)},Fr.prototype.has=function(t){return Ji(this,t).has(t)},Fr.prototype.set=function(t,n){var r=Ji(this,t),e=r.size;return r.set(t,n),this.size+=r.size==e?0:1,this},Ir.prototype.add=Ir.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},Ir.prototype.has=function(t){return this.__data__.has(t)},Rr.prototype.clear=function(){this.__data__=new Lr,this.size=0},Rr.prototype.delete=function(t){var n=this.__data__,r=n.delete(t);return this.size=n.size,r},Rr.prototype.get=function(t){return this.__data__.get(t)},Rr.prototype.has=function(t){return this.__data__.has(t)},Rr.prototype.set=function(t,n){var r=this.__data__;if(r instanceof Lr){var e=r.__data__;if(!pr||e.length<199)return e.push([t,n]),this.size=++r.size,this;r=this.__data__=new Fr(e)}return r.set(t,n),this.size=r.size,this};var te=wi(ce),ne=wi(fe,!0);function re(t,n){var r=!0;return te(t,(function(t,e,i){return r=!!n(t,e,i)})),r}function ee(t,n,r){for(var e=-1,i=t.length;++e<i;){var o=t[e],u=n(o);if(null!=u&&(void 0===a?u==u&&!Ju(u):r(u,a)))var a=u,c=o}return c}function ie(t,n){var r=[];return te(t,(function(t,e,i){n(t,e,i)&&r.push(t)})),r}function oe(t,n,r,e,i){var o=-1,u=t.length;for(r||(r=oo),i||(i=[]);++o<u;){var a=t[o];n>0&&r(a)?n>1?oe(a,n-1,r,e,i):dn(i,a):e||(i[i.length]=a)}return i}var ue=bi(),ae=bi(!0);function ce(t,n){return t&&ue(t,n,xa)}function fe(t,n){return t&&ae(t,n,xa)}function se(t,n){return ln(n,(function(n){return qu(t[n])}))}function le(t,n){for(var r=0,e=(n=ai(n,t)).length;null!=t&&r<e;)t=t[Eo(n[r++])];return r&&r==e?t:void 0}function he(t,n,r){var e=n(t);return Cu(t)?e:dn(e,r(t))}function pe(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":_n&&_n in dt(t)?function(t){var n=Mt.call(t,_n),r=t[_n];try{t[_n]=void 0;var e=!0}catch(t){}var i=Nt.call(t);e&&(n?t[_n]=r:delete t[_n]);return i}(t):function(t){return Nt.call(t)}(t)}function ve(t,n){return t>n}function de(t,n){return null!=t&&Mt.call(t,n)}function ge(t,n){return null!=t&&n in dt(t)}function ye(t,n,r){for(var i=r?pn:hn,o=t[0].length,u=t.length,a=u,c=e(u),f=1/0,s=[];a--;){var l=t[a];a&&n&&(l=vn(l,kn(n))),f=ar(l.length,f),c[a]=!r&&(n||o>=120&&l.length>=120)?new Ir(a&&l):void 0}l=t[0];var h=-1,p=c[0];t:for(;++h<o&&s.length<f;){var v=l[h],d=n?n(v):v;if(v=r||0!==v?v:0,!(p?Cn(p,d):i(s,d,r))){for(a=u;--a;){var g=c[a];if(!(g?Cn(g,d):i(t[a],d,r)))continue t}p&&p.push(d),s.push(v)}}return s}function me(t,n,r){var e=null==(t=go(t,n=ai(n,t)))?t:t[Eo(Do(n))];return null==e?void 0:un(e,t,r)}function _e(t){return Vu(t)&&pe(t)==c}function xe(t,n,r,e,i){return t===n||(null==t||null==n||!Vu(t)&&!Vu(n)?t!=t&&n!=n:function(t,n,r,e,i,o){var u=Cu(t),a=Cu(n),p=u?f:ro(t),v=a?f:ro(n),b=(p=p==c?y:p)==y,S=(v=v==c?y:v)==y,E=p==v;if(E&&Ru(t)){if(!Ru(n))return!1;u=!0,b=!1}if(E&&!b)return o||(o=new Rr),u||Ku(t)?Wi(t,n,r,e,i,o):function(t,n,r,e,i,o,u){switch(r){case M:if(t.byteLength!=n.byteLength||t.byteOffset!=n.byteOffset)return!1;t=t.buffer,n=n.buffer;case A:return!(t.byteLength!=n.byteLength||!o(new It(t),new It(n)));case s:case l:case g:return Tu(+t,+n);case h:return t.name==n.name&&t.message==n.message;case m:case x:return t==n+"";case d:var a=zn;case _:var c=1&e;if(a||(a=Vn),t.size!=n.size&&!c)return!1;var f=u.get(t);if(f)return f==n;e|=2,u.set(t,n);var p=Wi(a(t),a(n),e,i,o,u);return u.delete(t),p;case w:if(Er)return Er.call(t)==Er.call(n)}return!1}(t,n,p,r,e,i,o);if(!(1&r)){var N=b&&Mt.call(t,"__wrapped__"),j=S&&Mt.call(n,"__wrapped__");if(N||j){var T=N?t.value():t,O=j?n.value():n;return o||(o=new Rr),i(T,O,r,e,o)}}if(!E)return!1;return o||(o=new Rr),function(t,n,r,e,i,o){var u=1&r,a=Yi(t),c=a.length,f=Yi(n).length;if(c!=f&&!u)return!1;var s=c;for(;s--;){var l=a[s];if(!(u?l in n:Mt.call(n,l)))return!1}var h=o.get(t);if(h&&o.get(n))return h==n;var p=!0;o.set(t,n),o.set(n,t);var v=u;for(;++s<c;){l=a[s];var d=t[l],g=n[l];if(e)var y=u?e(g,d,l,n,t,o):e(d,g,l,t,n,o);if(!(void 0===y?d===g||i(d,g,r,e,o):y)){p=!1;break}v||(v="constructor"==l)}if(p&&!v){var m=t.constructor,_=n.constructor;m==_||!("constructor"in t)||!("constructor"in n)||"function"==typeof m&&m instanceof m&&"function"==typeof _&&_ instanceof _||(p=!1)}return o.delete(t),o.delete(n),p}(t,n,r,e,i,o)}(t,n,r,e,xe,i))}function we(t,n,r,e){var i=r.length,o=i,u=!e;if(null==t)return!o;for(t=dt(t);i--;){var a=r[i];if(u&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++i<o;){var c=(a=r[i])[0],f=t[c],s=a[1];if(u&&a[2]){if(void 0===f&&!(c in t))return!1}else{var l=new Rr;if(e)var h=e(f,s,c,t,n,l);if(!(void 0===h?xe(s,f,3,e,l):h))return!1}}return!0}function be(t){return!(!Wu(t)||(n=t,Et&&Et in n))&&(qu(t)?Ot:ut).test(No(t));var n}function Ae(t){return"function"==typeof t?t:null==t?Ha:"object"==typeof t?Cu(t)?Te(t[0],t[1]):je(t):nc(t)}function Me(t){if(!lo(t))return or(t);var n=[];for(var r in dt(t))Mt.call(t,r)&&"constructor"!=r&&n.push(r);return n}function Se(t){if(!Wu(t))return function(t){var n=[];if(null!=t)for(var r in dt(t))n.push(r);return n}(t);var n=lo(t),r=[];for(var e in t)("constructor"!=e||!n&&Mt.call(t,e))&&r.push(e);return r}function Ee(t,n){return t<n}function Ne(t,n){var r=-1,i=Fu(t)?e(t.length):[];return te(t,(function(t,e,o){i[++r]=n(t,e,o)})),i}function je(t){var n=Ki(t);return 1==n.length&&n[0][2]?po(n[0][0],n[0][1]):function(r){return r===t||we(r,t,n)}}function Te(t,n){return co(t)&&ho(n)?po(Eo(t),n):function(r){var e=da(r,t);return void 0===e&&e===n?ga(r,t):xe(n,e,3)}}function Oe(t,n,r,e,i){t!==n&&ue(n,(function(o,u){if(i||(i=new Rr),Wu(o))!function(t,n,r,e,i,o,u){var a=mo(t,r),c=mo(n,r),f=u.get(c);if(f)return void Br(t,r,f);var s=o?o(a,c,r+"",t,n,u):void 0,l=void 0===s;if(l){var h=Cu(c),p=!h&&Ru(c),v=!h&&!p&&Ku(c);s=c,h||p||v?Cu(a)?s=a:Iu(a)?s=yi(a):p?(l=!1,s=li(c,!0)):v?(l=!1,s=pi(c,!0)):s=[]:$u(c)||Pu(c)?(s=a,Pu(a)?s=ua(a):Wu(a)&&!qu(a)||(s=io(c))):l=!1}l&&(u.set(c,s),i(s,c,e,o,u),u.delete(c));Br(t,r,s)}(t,n,u,r,Oe,e,i);else{var a=e?e(mo(t,u),o,u+"",t,n,i):void 0;void 0===a&&(a=o),Br(t,u,a)}}),wa)}function ke(t,n){var r=t.length;if(r)return uo(n+=n<0?r:0,r)?t[n]:void 0}function Pe(t,n,r){var e=-1;return n=vn(n.length?n:[Ha],kn(Zi())),function(t,n){var r=t.length;for(t.sort(n);r--;)t[r]=t[r].value;return t}(Ne(t,(function(t,r,i){return{criteria:vn(n,(function(n){return n(t)})),index:++e,value:t}})),(function(t,n){return function(t,n,r){var e=-1,i=t.criteria,o=n.criteria,u=i.length,a=r.length;for(;++e<u;){var c=vi(i[e],o[e]);if(c){if(e>=a)return c;var f=r[e];return c*("desc"==f?-1:1)}}return t.index-n.index}(t,n,r)}))}function Ce(t,n,r){for(var e=-1,i=n.length,o={};++e<i;){var u=n[e],a=le(t,u);r(a,u)&&ze(o,ai(u,t),a)}return o}function Le(t,n,r,e){var i=e?An:bn,o=-1,u=n.length,a=t;for(t===n&&(n=yi(n)),r&&(a=vn(t,kn(r)));++o<u;)for(var c=0,f=n[o],s=r?r(f):f;(c=i(a,s,c,e))>-1;)a!==t&&Xt.call(a,c,1),Xt.call(t,c,1);return t}function Fe(t,n){for(var r=t?n.length:0,e=r-1;r--;){var i=n[r];if(r==e||i!==o){var o=i;uo(i)?Xt.call(t,i,1):Qe(t,i)}}return t}function Ie(t,n){return t+tr(sr()*(n-t+1))}function Re(t,n){var r="";if(!t||n<1||n>9007199254740991)return r;do{n%2&&(r+=t),(n=tr(n/2))&&(t+=t)}while(n);return r}function Ue(t,n){return wo(vo(t,n,Ha),t+"")}function De(t){return Dr(Ta(t))}function qe(t,n){var r=Ta(t);return Mo(r,Xr(n,0,r.length))}function ze(t,n,r,e){if(!Wu(t))return t;for(var i=-1,o=(n=ai(n,t)).length,u=o-1,a=t;null!=a&&++i<o;){var c=Eo(n[i]),f=r;if(i!=u){var s=a[c];void 0===(f=e?e(s,c,a):void 0)&&(f=Wu(s)?s:uo(n[i+1])?[]:{})}Wr(a,c,f),a=a[c]}return t}var Be=mr?function(t,n){return mr.set(t,n),t}:Ha,We=Nn?function(t,n){return Nn(t,"toString",{configurable:!0,enumerable:!1,value:Wa(n),writable:!0})}:Ha;function Ve(t){return Mo(Ta(t))}function Ye(t,n,r){var i=-1,o=t.length;n<0&&(n=-n>o?0:o+n),(r=r>o?o:r)<0&&(r+=o),o=n>r?0:r-n>>>0,n>>>=0;for(var u=e(o);++i<o;)u[i]=t[i+n];return u}function He(t,n){var r;return te(t,(function(t,e,i){return!(r=n(t,e,i))})),!!r}function $e(t,n,r){var e=0,i=null==t?e:t.length;if("number"==typeof n&&n==n&&i<=2147483647){for(;e<i;){var o=e+i>>>1,u=t[o];null!==u&&!Ju(u)&&(r?u<=n:u<n)?e=o+1:i=o}return i}return Ge(t,n,Ha,r)}function Ge(t,n,r,e){n=r(n);for(var i=0,o=null==t?0:t.length,u=n!=n,a=null===n,c=Ju(n),f=void 0===n;i<o;){var s=tr((i+o)/2),l=r(t[s]),h=void 0!==l,p=null===l,v=l==l,d=Ju(l);if(u)var g=e||v;else g=f?v&&(e||h):a?v&&h&&(e||!p):c?v&&h&&!p&&(e||!d):!p&&!d&&(e?l<=n:l<n);g?i=s+1:o=s}return ar(o,4294967294)}function Xe(t,n){for(var r=-1,e=t.length,i=0,o=[];++r<e;){var u=t[r],a=n?n(u):u;if(!r||!Tu(a,c)){var c=a;o[i++]=0===u?0:u}}return o}function Ze(t){return"number"==typeof t?t:Ju(t)?NaN:+t}function Je(t){if("string"==typeof t)return t;if(Cu(t))return vn(t,Je)+"";if(Ju(t))return Nr?Nr.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}function Ke(t,n,r){var e=-1,i=hn,o=t.length,u=!0,a=[],c=a;if(r)u=!1,i=pn;else if(o>=200){var f=n?null:Ri(t);if(f)return Vn(f);u=!1,i=Cn,c=new Ir}else c=n?[]:a;t:for(;++e<o;){var s=t[e],l=n?n(s):s;if(s=r||0!==s?s:0,u&&l==l){for(var h=c.length;h--;)if(c[h]===l)continue t;n&&c.push(l),a.push(s)}else i(c,l,r)||(c!==a&&c.push(l),a.push(s))}return a}function Qe(t,n){return null==(t=go(t,n=ai(n,t)))||delete t[Eo(Do(n))]}function ti(t,n,r,e){return ze(t,n,r(le(t,n)),e)}function ni(t,n,r,e){for(var i=t.length,o=e?i:-1;(e?o--:++o<i)&&n(t[o],o,t););return r?Ye(t,e?0:o,e?o+1:i):Ye(t,e?o+1:0,e?i:o)}function ri(t,n){var r=t;return r instanceof Pr&&(r=r.value()),gn(n,(function(t,n){return n.func.apply(n.thisArg,dn([t],n.args))}),r)}function ei(t,n,r){var i=t.length;if(i<2)return i?Ke(t[0]):[];for(var o=-1,u=e(i);++o<i;)for(var a=t[o],c=-1;++c<i;)c!=o&&(u[o]=Qr(u[o]||a,t[c],n,r));return Ke(oe(u,1),n,r)}function ii(t,n,r){for(var e=-1,i=t.length,o=n.length,u={};++e<i;){var a=e<o?n[e]:void 0;r(u,t[e],a)}return u}function oi(t){return Iu(t)?t:[]}function ui(t){return"function"==typeof t?t:Ha}function ai(t,n){return Cu(t)?t:co(t,n)?[t]:So(aa(t))}var ci=Ue;function fi(t,n,r){var e=t.length;return r=void 0===r?e:r,!n&&r>=e?t:Ye(t,n,r)}var si=Zn||function(t){return $t.clearTimeout(t)};function li(t,n){if(n)return t.slice();var r=t.length,e=Bt?Bt(r):new t.constructor(r);return t.copy(e),e}function hi(t){var n=new t.constructor(t.byteLength);return new It(n).set(new It(t)),n}function pi(t,n){var r=n?hi(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}function vi(t,n){if(t!==n){var r=void 0!==t,e=null===t,i=t==t,o=Ju(t),u=void 0!==n,a=null===n,c=n==n,f=Ju(n);if(!a&&!f&&!o&&t>n||o&&u&&c&&!a&&!f||e&&u&&c||!r&&c||!i)return 1;if(!e&&!o&&!f&&t<n||f&&r&&i&&!e&&!o||a&&r&&i||!u&&i||!c)return-1}return 0}function di(t,n,r,i){for(var o=-1,u=t.length,a=r.length,c=-1,f=n.length,s=ur(u-a,0),l=e(f+s),h=!i;++c<f;)l[c]=n[c];for(;++o<a;)(h||o<u)&&(l[r[o]]=t[o]);for(;s--;)l[c++]=t[o++];return l}function gi(t,n,r,i){for(var o=-1,u=t.length,a=-1,c=r.length,f=-1,s=n.length,l=ur(u-c,0),h=e(l+s),p=!i;++o<l;)h[o]=t[o];for(var v=o;++f<s;)h[v+f]=n[f];for(;++a<c;)(p||o<u)&&(h[v+r[a]]=t[o++]);return h}function yi(t,n){var r=-1,i=t.length;for(n||(n=e(i));++r<i;)n[r]=t[r];return n}function mi(t,n,r,e){var i=!r;r||(r={});for(var o=-1,u=n.length;++o<u;){var a=n[o],c=e?e(r[a],t[a],a,r,t):void 0;void 0===c&&(c=t[a]),i?$r(r,a,c):Wr(r,a,c)}return r}function _i(t,n){return function(r,e){var i=Cu(r)?an:Yr,o=n?n():{};return i(r,t,Zi(e,2),o)}}function xi(t){return Ue((function(n,r){var e=-1,i=r.length,o=i>1?r[i-1]:void 0,u=i>2?r[2]:void 0;for(o=t.length>3&&"function"==typeof o?(i--,o):void 0,u&&ao(r[0],r[1],u)&&(o=i<3?void 0:o,i=1),n=dt(n);++e<i;){var a=r[e];a&&t(n,a,e,o)}return n}))}function wi(t,n){return function(r,e){if(null==r)return r;if(!Fu(r))return t(r,e);for(var i=r.length,o=n?i:-1,u=dt(r);(n?o--:++o<i)&&!1!==e(u[o],o,u););return r}}function bi(t){return function(n,r,e){for(var i=-1,o=dt(n),u=e(n),a=u.length;a--;){var c=u[t?a:++i];if(!1===r(o[c],c,o))break}return n}}function Ai(t){return function(n){var r=qn(n=aa(n))?$n(n):void 0,e=r?r[0]:n.charAt(0),i=r?fi(r,1).join(""):n.slice(1);return e[t]()+i}}function Mi(t){return function(n){return gn(qa(Pa(n).replace(Pt,"")),t,"")}}function Si(t){return function(){var n=arguments;switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3]);case 5:return new t(n[0],n[1],n[2],n[3],n[4]);case 6:return new t(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new t(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var r=Tr(t.prototype),e=t.apply(r,n);return Wu(e)?e:r}}function Ei(t){return function(n,r,e){var i=dt(n);if(!Fu(n)){var o=Zi(r,3);n=xa(n),r=function(t){return o(i[t],t,i)}}var u=t(n,r,e);return u>-1?i[o?n[u]:u]:void 0}}function Ni(t){return Vi((function(n){var r=n.length,e=r,i=kr.prototype.thru;for(t&&n.reverse();e--;){var u=n[e];if("function"!=typeof u)throw new mt(o);if(i&&!a&&"wrapper"==Gi(u))var a=new kr([],!0)}for(e=a?e:r;++e<r;){var c=Gi(u=n[e]),f="wrapper"==c?$i(u):void 0;a=f&&fo(f[0])&&424==f[1]&&!f[4].length&&1==f[9]?a[Gi(f[0])].apply(a,f[3]):1==u.length&&fo(u)?a[c]():a.thru(u)}return function(){var t=arguments,e=t[0];if(a&&1==t.length&&Cu(e))return a.plant(e).value();for(var i=0,o=r?n[i].apply(this,t):e;++i<r;)o=n[i].call(this,o);return o}}))}function ji(t,n,r,i,o,u,a,c,f,s){var l=128&n,h=1&n,p=2&n,v=24&n,d=512&n,g=p?void 0:Si(t);return function y(){for(var m=arguments.length,_=e(m),x=m;x--;)_[x]=arguments[x];if(v)var w=Xi(y),b=In(_,w);if(i&&(_=di(_,i,o,v)),u&&(_=gi(_,u,a,v)),m-=b,v&&m<s){var A=Wn(_,w);return Fi(t,n,ji,y.placeholder,r,_,A,c,f,s-m)}var M=h?r:this,S=p?M[t]:t;return m=_.length,c?_=yo(_,c):d&&m>1&&_.reverse(),l&&f<m&&(_.length=f),this&&this!==$t&&this instanceof y&&(S=g||Si(S)),S.apply(M,_)}}function Ti(t,n){return function(r,e){return function(t,n,r,e){return ce(t,(function(t,i,o){n(e,r(t),i,o)})),e}(r,t,n(e),{})}}function Oi(t,n){return function(r,e){var i;if(void 0===r&&void 0===e)return n;if(void 0!==r&&(i=r),void 0!==e){if(void 0===i)return e;"string"==typeof r||"string"==typeof e?(r=Je(r),e=Je(e)):(r=Ze(r),e=Ze(e)),i=t(r,e)}return i}}function ki(t){return Vi((function(n){return n=vn(n,kn(Zi())),Ue((function(r){var e=this;return t(n,(function(t){return un(t,e,r)}))}))}))}function Pi(t,n){var r=(n=void 0===n?" ":Je(n)).length;if(r<2)return r?Re(n,t):n;var e=Re(n,Qn(t/Hn(n)));return qn(n)?fi($n(e),0,t).join(""):e.slice(0,t)}function Ci(t){return function(n,r,i){return i&&"number"!=typeof i&&ao(n,r,i)&&(r=i=void 0),n=ra(n),void 0===r?(r=n,n=0):r=ra(r),function(t,n,r,i){for(var o=-1,u=ur(Qn((n-t)/(r||1)),0),a=e(u);u--;)a[i?u:++o]=t,t+=r;return a}(n,r,i=void 0===i?n<r?1:-1:ra(i),t)}}function Li(t){return function(n,r){return"string"==typeof n&&"string"==typeof r||(n=oa(n),r=oa(r)),t(n,r)}}function Fi(t,n,r,e,i,o,u,a,c,f){var s=8&n;n|=s?32:64,4&(n&=~(s?64:32))||(n&=-4);var l=[t,n,i,s?o:void 0,s?u:void 0,s?void 0:o,s?void 0:u,a,c,f],h=r.apply(void 0,l);return fo(t)&&_o(h,l),h.placeholder=e,bo(h,t,n)}function Ii(t){var n=vt[t];return function(t,r){if(t=oa(t),(r=null==r?0:ar(ea(r),292))&&er(t)){var e=(aa(t)+"e").split("e");return+((e=(aa(n(e[0]+"e"+(+e[1]+r)))+"e").split("e"))[0]+"e"+(+e[1]-r))}return n(t)}}var Ri=dr&&1/Vn(new dr([,-0]))[1]==1/0?function(t){return new dr(t)}:Ja;function Ui(t){return function(n){var r=ro(n);return r==d?zn(n):r==_?Yn(n):function(t,n){return vn(n,(function(n){return[n,t[n]]}))}(n,t(n))}}function Di(t,n,r,i,a,c,f,s){var l=2&n;if(!l&&"function"!=typeof t)throw new mt(o);var h=i?i.length:0;if(h||(n&=-97,i=a=void 0),f=void 0===f?f:ur(ea(f),0),s=void 0===s?s:ea(s),h-=a?a.length:0,64&n){var p=i,v=a;i=a=void 0}var d=l?void 0:$i(t),g=[t,n,r,i,a,p,v,c,f,s];if(d&&function(t,n){var r=t[1],e=n[1],i=r|e,o=i<131,a=128==e&&8==r||128==e&&256==r&&t[7].length<=n[8]||384==e&&n[7].length<=n[8]&&8==r;if(!o&&!a)return t;1&e&&(t[2]=n[2],i|=1&r?0:4);var c=n[3];if(c){var f=t[3];t[3]=f?di(f,c,n[4]):c,t[4]=f?Wn(t[3],u):n[4]}(c=n[5])&&(f=t[5],t[5]=f?gi(f,c,n[6]):c,t[6]=f?Wn(t[5],u):n[6]);(c=n[7])&&(t[7]=c);128&e&&(t[8]=null==t[8]?n[8]:ar(t[8],n[8]));null==t[9]&&(t[9]=n[9]);t[0]=n[0],t[1]=i}(g,d),t=g[0],n=g[1],r=g[2],i=g[3],a=g[4],!(s=g[9]=void 0===g[9]?l?0:t.length:ur(g[9]-h,0))&&24&n&&(n&=-25),n&&1!=n)y=8==n||16==n?function(t,n,r){var i=Si(t);return function o(){for(var u=arguments.length,a=e(u),c=u,f=Xi(o);c--;)a[c]=arguments[c];var s=u<3&&a[0]!==f&&a[u-1]!==f?[]:Wn(a,f);if((u-=s.length)<r)return Fi(t,n,ji,o.placeholder,void 0,a,s,void 0,void 0,r-u);var l=this&&this!==$t&&this instanceof o?i:t;return un(l,this,a)}}(t,n,s):32!=n&&33!=n||a.length?ji.apply(void 0,g):function(t,n,r,i){var o=1&n,u=Si(t);return function n(){for(var a=-1,c=arguments.length,f=-1,s=i.length,l=e(s+c),h=this&&this!==$t&&this instanceof n?u:t;++f<s;)l[f]=i[f];for(;c--;)l[f++]=arguments[++a];return un(h,o?r:this,l)}}(t,n,r,i);else var y=function(t,n,r){var e=1&n,i=Si(t);return function n(){var o=this&&this!==$t&&this instanceof n?i:t;return o.apply(e?r:this,arguments)}}(t,n,r);return bo((d?Be:_o)(y,g),t,n)}function qi(t,n,r,e){return void 0===t||Tu(t,wt[r])&&!Mt.call(e,r)?n:t}function zi(t,n,r,e,i,o){return Wu(t)&&Wu(n)&&(o.set(n,t),Oe(t,n,void 0,zi,o),o.delete(n)),t}function Bi(t){return $u(t)?void 0:t}function Wi(t,n,r,e,i,o){var u=1&r,a=t.length,c=n.length;if(a!=c&&!(u&&c>a))return!1;var f=o.get(t);if(f&&o.get(n))return f==n;var s=-1,l=!0,h=2&r?new Ir:void 0;for(o.set(t,n),o.set(n,t);++s<a;){var p=t[s],v=n[s];if(e)var d=u?e(v,p,s,n,t,o):e(p,v,s,t,n,o);if(void 0!==d){if(d)continue;l=!1;break}if(h){if(!mn(n,(function(t,n){if(!Cn(h,n)&&(p===t||i(p,t,r,e,o)))return h.push(n)}))){l=!1;break}}else if(p!==v&&!i(p,v,r,e,o)){l=!1;break}}return o.delete(t),o.delete(n),l}function Vi(t){return wo(vo(t,void 0,Lo),t+"")}function Yi(t){return he(t,xa,to)}function Hi(t){return he(t,wa,no)}var $i=mr?function(t){return mr.get(t)}:Ja;function Gi(t){for(var n=t.name+"",r=_r[n],e=Mt.call(_r,n)?r.length:0;e--;){var i=r[e],o=i.func;if(null==o||o==t)return i.name}return n}function Xi(t){return(Mt.call(jr,"placeholder")?jr:t).placeholder}function Zi(){var t=jr.iteratee||$a;return t=t===$a?Ae:t,arguments.length?t(arguments[0],arguments[1]):t}function Ji(t,n){var r,e,i=t.__data__;return("string"==(e=typeof(r=n))||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==r:null===r)?i["string"==typeof n?"string":"hash"]:i.map}function Ki(t){for(var n=xa(t),r=n.length;r--;){var e=n[r],i=t[e];n[r]=[e,i,ho(i)]}return n}function Qi(t,n){var r=function(t,n){return null==t?void 0:t[n]}(t,n);return be(r)?r:void 0}var to=nr?function(t){return null==t?[]:(t=dt(t),ln(nr(t),(function(n){return Gt.call(t,n)})))}:ic,no=nr?function(t){for(var n=[];t;)dn(n,to(t)),t=Yt(t);return n}:ic,ro=pe;function eo(t,n,r){for(var e=-1,i=(n=ai(n,t)).length,o=!1;++e<i;){var u=Eo(n[e]);if(!(o=null!=t&&r(t,u)))break;t=t[u]}return o||++e!=i?o:!!(i=null==t?0:t.length)&&Bu(i)&&uo(u,i)&&(Cu(t)||Pu(t))}function io(t){return"function"!=typeof t.constructor||lo(t)?{}:Tr(Yt(t))}function oo(t){return Cu(t)||Pu(t)||!!(Jt&&t&&t[Jt])}function uo(t,n){var r=typeof t;return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&ct.test(t))&&t>-1&&t%1==0&&t<n}function ao(t,n,r){if(!Wu(r))return!1;var e=typeof n;return!!("number"==e?Fu(r)&&uo(n,r.length):"string"==e&&n in r)&&Tu(r[n],t)}function co(t,n){if(Cu(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!Ju(t))||(V.test(t)||!W.test(t)||null!=n&&t in dt(n))}function fo(t){var n=Gi(t),r=jr[n];if("function"!=typeof r||!(n in Pr.prototype))return!1;if(t===r)return!0;var e=$i(r);return!!e&&t===e[0]}(hr&&ro(new hr(new ArrayBuffer(1)))!=M||pr&&ro(new pr)!=d||vr&&"[object Promise]"!=ro(vr.resolve())||dr&&ro(new dr)!=_||gr&&ro(new gr)!=b)&&(ro=function(t){var n=pe(t),r=n==y?t.constructor:void 0,e=r?No(r):"";if(e)switch(e){case xr:return M;case wr:return d;case br:return"[object Promise]";case Ar:return _;case Mr:return b}return n});var so=bt?qu:oc;function lo(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||wt)}function ho(t){return t==t&&!Wu(t)}function po(t,n){return function(r){return null!=r&&(r[t]===n&&(void 0!==n||t in dt(r)))}}function vo(t,n,r){return n=ur(void 0===n?t.length-1:n,0),function(){for(var i=arguments,o=-1,u=ur(i.length-n,0),a=e(u);++o<u;)a[o]=i[n+o];o=-1;for(var c=e(n+1);++o<n;)c[o]=i[o];return c[n]=r(a),un(t,this,c)}}function go(t,n){return n.length<2?t:le(t,Ye(n,0,-1))}function yo(t,n){for(var r=t.length,e=ar(n.length,r),i=yi(t);e--;){var o=n[e];t[e]=uo(o,r)?i[o]:void 0}return t}function mo(t,n){if(("constructor"!==n||"function"!=typeof t[n])&&"__proto__"!=n)return t[n]}var _o=Ao(Be),xo=Kn||function(t,n){return $t.setTimeout(t,n)},wo=Ao(We);function bo(t,n,r){var e=n+"";return wo(t,function(t,n){var r=n.length;if(!r)return t;var e=r-1;return n[e]=(r>1?"& ":"")+n[e],n=n.join(r>2?", ":" "),t.replace(J,"{\n/* [wrapped with "+n+"] */\n")}(e,function(t,n){return cn(a,(function(r){var e="_."+r[0];n&r[1]&&!hn(t,e)&&t.push(e)})),t.sort()}(function(t){var n=t.match(K);return n?n[1].split(Q):[]}(e),r)))}function Ao(t){var n=0,r=0;return function(){var e=cr(),i=16-(e-r);if(r=e,i>0){if(++n>=800)return arguments[0]}else n=0;return t.apply(void 0,arguments)}}function Mo(t,n){var r=-1,e=t.length,i=e-1;for(n=void 0===n?e:n;++r<n;){var o=Ie(r,i),u=t[o];t[o]=t[r],t[r]=u}return t.length=n,t}var So=function(t){var n=Au(t,(function(t){return 500===r.size&&r.clear(),t})),r=n.cache;return n}((function(t){var n=[];return 46===t.charCodeAt(0)&&n.push(""),t.replace(Y,(function(t,r,e,i){n.push(e?i.replace(nt,"$1"):r||t)})),n}));function Eo(t){if("string"==typeof t||Ju(t))return t;var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}function No(t){if(null!=t){try{return At.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function jo(t){if(t instanceof Pr)return t.clone();var n=new kr(t.__wrapped__,t.__chain__);return n.__actions__=yi(t.__actions__),n.__index__=t.__index__,n.__values__=t.__values__,n}var To=Ue((function(t,n){return Iu(t)?Qr(t,oe(n,1,Iu,!0)):[]})),Oo=Ue((function(t,n){var r=Do(n);return Iu(r)&&(r=void 0),Iu(t)?Qr(t,oe(n,1,Iu,!0),Zi(r,2)):[]})),ko=Ue((function(t,n){var r=Do(n);return Iu(r)&&(r=void 0),Iu(t)?Qr(t,oe(n,1,Iu,!0),void 0,r):[]}));function Po(t,n,r){var e=null==t?0:t.length;if(!e)return-1;var i=null==r?0:ea(r);return i<0&&(i=ur(e+i,0)),wn(t,Zi(n,3),i)}function Co(t,n,r){var e=null==t?0:t.length;if(!e)return-1;var i=e-1;return void 0!==r&&(i=ea(r),i=r<0?ur(e+i,0):ar(i,e-1)),wn(t,Zi(n,3),i,!0)}function Lo(t){return(null==t?0:t.length)?oe(t,1):[]}function Fo(t){return t&&t.length?t[0]:void 0}var Io=Ue((function(t){var n=vn(t,oi);return n.length&&n[0]===t[0]?ye(n):[]})),Ro=Ue((function(t){var n=Do(t),r=vn(t,oi);return n===Do(r)?n=void 0:r.pop(),r.length&&r[0]===t[0]?ye(r,Zi(n,2)):[]})),Uo=Ue((function(t){var n=Do(t),r=vn(t,oi);return(n="function"==typeof n?n:void 0)&&r.pop(),r.length&&r[0]===t[0]?ye(r,void 0,n):[]}));function Do(t){var n=null==t?0:t.length;return n?t[n-1]:void 0}var qo=Ue(zo);function zo(t,n){return t&&t.length&&n&&n.length?Le(t,n):t}var Bo=Vi((function(t,n){var r=null==t?0:t.length,e=Gr(t,n);return Fe(t,vn(n,(function(t){return uo(t,r)?+t:t})).sort(vi)),e}));function Wo(t){return null==t?t:lr.call(t)}var Vo=Ue((function(t){return Ke(oe(t,1,Iu,!0))})),Yo=Ue((function(t){var n=Do(t);return Iu(n)&&(n=void 0),Ke(oe(t,1,Iu,!0),Zi(n,2))})),Ho=Ue((function(t){var n=Do(t);return n="function"==typeof n?n:void 0,Ke(oe(t,1,Iu,!0),void 0,n)}));function $o(t){if(!t||!t.length)return[];var n=0;return t=ln(t,(function(t){if(Iu(t))return n=ur(t.length,n),!0})),On(n,(function(n){return vn(t,En(n))}))}function Go(t,n){if(!t||!t.length)return[];var r=$o(t);return null==n?r:vn(r,(function(t){return un(n,void 0,t)}))}var Xo=Ue((function(t,n){return Iu(t)?Qr(t,n):[]})),Zo=Ue((function(t){return ei(ln(t,Iu))})),Jo=Ue((function(t){var n=Do(t);return Iu(n)&&(n=void 0),ei(ln(t,Iu),Zi(n,2))})),Ko=Ue((function(t){var n=Do(t);return n="function"==typeof n?n:void 0,ei(ln(t,Iu),void 0,n)})),Qo=Ue($o);var tu=Ue((function(t){var n=t.length,r=n>1?t[n-1]:void 0;return r="function"==typeof r?(t.pop(),r):void 0,Go(t,r)}));function nu(t){var n=jr(t);return n.__chain__=!0,n}function ru(t,n){return n(t)}var eu=Vi((function(t){var n=t.length,r=n?t[0]:0,e=this.__wrapped__,i=function(n){return Gr(n,t)};return!(n>1||this.__actions__.length)&&e instanceof Pr&&uo(r)?((e=e.slice(r,+r+(n?1:0))).__actions__.push({func:ru,args:[i],thisArg:void 0}),new kr(e,this.__chain__).thru((function(t){return n&&!t.length&&t.push(void 0),t}))):this.thru(i)}));var iu=_i((function(t,n,r){Mt.call(t,r)?++t[r]:$r(t,r,1)}));var ou=Ei(Po),uu=Ei(Co);function au(t,n){return(Cu(t)?cn:te)(t,Zi(n,3))}function cu(t,n){return(Cu(t)?fn:ne)(t,Zi(n,3))}var fu=_i((function(t,n,r){Mt.call(t,r)?t[r].push(n):$r(t,r,[n])}));var su=Ue((function(t,n,r){var i=-1,o="function"==typeof n,u=Fu(t)?e(t.length):[];return te(t,(function(t){u[++i]=o?un(n,t,r):me(t,n,r)})),u})),lu=_i((function(t,n,r){$r(t,r,n)}));function hu(t,n){return(Cu(t)?vn:Ne)(t,Zi(n,3))}var pu=_i((function(t,n,r){t[r?0:1].push(n)}),(function(){return[[],[]]}));var vu=Ue((function(t,n){if(null==t)return[];var r=n.length;return r>1&&ao(t,n[0],n[1])?n=[]:r>2&&ao(n[0],n[1],n[2])&&(n=[n[0]]),Pe(t,oe(n,1),[])})),du=Jn||function(){return $t.Date.now()};function gu(t,n,r){return n=r?void 0:n,Di(t,128,void 0,void 0,void 0,void 0,n=t&&null==n?t.length:n)}function yu(t,n){var r;if("function"!=typeof n)throw new mt(o);return t=ea(t),function(){return--t>0&&(r=n.apply(this,arguments)),t<=1&&(n=void 0),r}}var mu=Ue((function(t,n,r){var e=1;if(r.length){var i=Wn(r,Xi(mu));e|=32}return Di(t,e,n,r,i)})),_u=Ue((function(t,n,r){var e=3;if(r.length){var i=Wn(r,Xi(_u));e|=32}return Di(n,e,t,r,i)}));function xu(t,n,r){var e,i,u,a,c,f,s=0,l=!1,h=!1,p=!0;if("function"!=typeof t)throw new mt(o);function v(n){var r=e,o=i;return e=i=void 0,s=n,a=t.apply(o,r)}function d(t){return s=t,c=xo(y,n),l?v(t):a}function g(t){var r=t-f;return void 0===f||r>=n||r<0||h&&t-s>=u}function y(){var t=du();if(g(t))return m(t);c=xo(y,function(t){var r=n-(t-f);return h?ar(r,u-(t-s)):r}(t))}function m(t){return c=void 0,p&&e?v(t):(e=i=void 0,a)}function _(){var t=du(),r=g(t);if(e=arguments,i=this,f=t,r){if(void 0===c)return d(f);if(h)return si(c),c=xo(y,n),v(f)}return void 0===c&&(c=xo(y,n)),a}return n=oa(n)||0,Wu(r)&&(l=!!r.leading,u=(h="maxWait"in r)?ur(oa(r.maxWait)||0,n):u,p="trailing"in r?!!r.trailing:p),_.cancel=function(){void 0!==c&&si(c),s=0,e=f=i=c=void 0},_.flush=function(){return void 0===c?a:m(du())},_}var wu=Ue((function(t,n){return Kr(t,1,n)})),bu=Ue((function(t,n,r){return Kr(t,oa(n)||0,r)}));function Au(t,n){if("function"!=typeof t||null!=n&&"function"!=typeof n)throw new mt(o);var r=function(){var e=arguments,i=n?n.apply(this,e):e[0],o=r.cache;if(o.has(i))return o.get(i);var u=t.apply(this,e);return r.cache=o.set(i,u)||o,u};return r.cache=new(Au.Cache||Fr),r}function Mu(t){if("function"!=typeof t)throw new mt(o);return function(){var n=arguments;switch(n.length){case 0:return!t.call(this);case 1:return!t.call(this,n[0]);case 2:return!t.call(this,n[0],n[1]);case 3:return!t.call(this,n[0],n[1],n[2])}return!t.apply(this,n)}}Au.Cache=Fr;var Su=ci((function(t,n){var r=(n=1==n.length&&Cu(n[0])?vn(n[0],kn(Zi())):vn(oe(n,1),kn(Zi()))).length;return Ue((function(e){for(var i=-1,o=ar(e.length,r);++i<o;)e[i]=n[i].call(this,e[i]);return un(t,this,e)}))})),Eu=Ue((function(t,n){return Di(t,32,void 0,n,Wn(n,Xi(Eu)))})),Nu=Ue((function(t,n){return Di(t,64,void 0,n,Wn(n,Xi(Nu)))})),ju=Vi((function(t,n){return Di(t,256,void 0,void 0,void 0,n)}));function Tu(t,n){return t===n||t!=t&&n!=n}var Ou=Li(ve),ku=Li((function(t,n){return t>=n})),Pu=_e(function(){return arguments}())?_e:function(t){return Vu(t)&&Mt.call(t,"callee")&&!Gt.call(t,"callee")},Cu=e.isArray,Lu=Qt?kn(Qt):function(t){return Vu(t)&&pe(t)==A};function Fu(t){return null!=t&&Bu(t.length)&&!qu(t)}function Iu(t){return Vu(t)&&Fu(t)}var Ru=rr||oc,Uu=tn?kn(tn):function(t){return Vu(t)&&pe(t)==l};function Du(t){if(!Vu(t))return!1;var n=pe(t);return n==h||"[object DOMException]"==n||"string"==typeof t.message&&"string"==typeof t.name&&!$u(t)}function qu(t){if(!Wu(t))return!1;var n=pe(t);return n==p||n==v||"[object AsyncFunction]"==n||"[object Proxy]"==n}function zu(t){return"number"==typeof t&&t==ea(t)}function Bu(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}function Wu(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}function Vu(t){return null!=t&&"object"==typeof t}var Yu=nn?kn(nn):function(t){return Vu(t)&&ro(t)==d};function Hu(t){return"number"==typeof t||Vu(t)&&pe(t)==g}function $u(t){if(!Vu(t)||pe(t)!=y)return!1;var n=Yt(t);if(null===n)return!0;var r=Mt.call(n,"constructor")&&n.constructor;return"function"==typeof r&&r instanceof r&&At.call(r)==jt}var Gu=rn?kn(rn):function(t){return Vu(t)&&pe(t)==m};var Xu=en?kn(en):function(t){return Vu(t)&&ro(t)==_};function Zu(t){return"string"==typeof t||!Cu(t)&&Vu(t)&&pe(t)==x}function Ju(t){return"symbol"==typeof t||Vu(t)&&pe(t)==w}var Ku=on?kn(on):function(t){return Vu(t)&&Bu(t.length)&&!!qt[pe(t)]};var Qu=Li(Ee),ta=Li((function(t,n){return t<=n}));function na(t){if(!t)return[];if(Fu(t))return Zu(t)?$n(t):yi(t);if(Kt&&t[Kt])return function(t){for(var n,r=[];!(n=t.next()).done;)r.push(n.value);return r}(t[Kt]());var n=ro(t);return(n==d?zn:n==_?Vn:Ta)(t)}function ra(t){return t?(t=oa(t))===1/0||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}function ea(t){var n=ra(t),r=n%1;return n==n?r?n-r:n:0}function ia(t){return t?Xr(ea(t),0,4294967295):0}function oa(t){if("number"==typeof t)return t;if(Ju(t))return NaN;if(Wu(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=Wu(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(G,"");var r=ot.test(t);return r||at.test(t)?Vt(t.slice(2),r?2:8):it.test(t)?NaN:+t}function ua(t){return mi(t,wa(t))}function aa(t){return null==t?"":Je(t)}var ca=xi((function(t,n){if(lo(n)||Fu(n))mi(n,xa(n),t);else for(var r in n)Mt.call(n,r)&&Wr(t,r,n[r])})),fa=xi((function(t,n){mi(n,wa(n),t)})),sa=xi((function(t,n,r,e){mi(n,wa(n),t,e)})),la=xi((function(t,n,r,e){mi(n,xa(n),t,e)})),ha=Vi(Gr);var pa=Ue((function(t,n){t=dt(t);var r=-1,e=n.length,i=e>2?n[2]:void 0;for(i&&ao(n[0],n[1],i)&&(e=1);++r<e;)for(var o=n[r],u=wa(o),a=-1,c=u.length;++a<c;){var f=u[a],s=t[f];(void 0===s||Tu(s,wt[f])&&!Mt.call(t,f))&&(t[f]=o[f])}return t})),va=Ue((function(t){return t.push(void 0,zi),un(Aa,void 0,t)}));function da(t,n,r){var e=null==t?void 0:le(t,n);return void 0===e?r:e}function ga(t,n){return null!=t&&eo(t,n,ge)}var ya=Ti((function(t,n,r){null!=n&&"function"!=typeof n.toString&&(n=Nt.call(n)),t[n]=r}),Wa(Ha)),ma=Ti((function(t,n,r){null!=n&&"function"!=typeof n.toString&&(n=Nt.call(n)),Mt.call(t,n)?t[n].push(r):t[n]=[r]}),Zi),_a=Ue(me);function xa(t){return Fu(t)?Ur(t):Me(t)}function wa(t){return Fu(t)?Ur(t,!0):Se(t)}var ba=xi((function(t,n,r){Oe(t,n,r)})),Aa=xi((function(t,n,r,e){Oe(t,n,r,e)})),Ma=Vi((function(t,n){var r={};if(null==t)return r;var e=!1;n=vn(n,(function(n){return n=ai(n,t),e||(e=n.length>1),n})),mi(t,Hi(t),r),e&&(r=Zr(r,7,Bi));for(var i=n.length;i--;)Qe(r,n[i]);return r}));var Sa=Vi((function(t,n){return null==t?{}:function(t,n){return Ce(t,n,(function(n,r){return ga(t,r)}))}(t,n)}));function Ea(t,n){if(null==t)return{};var r=vn(Hi(t),(function(t){return[t]}));return n=Zi(n),Ce(t,r,(function(t,r){return n(t,r[0])}))}var Na=Ui(xa),ja=Ui(wa);function Ta(t){return null==t?[]:Pn(t,xa(t))}var Oa=Mi((function(t,n,r){return n=n.toLowerCase(),t+(r?ka(n):n)}));function ka(t){return Da(aa(t).toLowerCase())}function Pa(t){return(t=aa(t))&&t.replace(ft,Rn).replace(Ct,"")}var Ca=Mi((function(t,n,r){return t+(r?"-":"")+n.toLowerCase()})),La=Mi((function(t,n,r){return t+(r?" ":"")+n.toLowerCase()})),Fa=Ai("toLowerCase");var Ia=Mi((function(t,n,r){return t+(r?"_":"")+n.toLowerCase()}));var Ra=Mi((function(t,n,r){return t+(r?" ":"")+Da(n)}));var Ua=Mi((function(t,n,r){return t+(r?" ":"")+n.toUpperCase()})),Da=Ai("toUpperCase");function qa(t,n,r){return t=aa(t),void 0===(n=r?void 0:n)?function(t){return Rt.test(t)}(t)?function(t){return t.match(Ft)||[]}(t):function(t){return t.match(tt)||[]}(t):t.match(n)||[]}var za=Ue((function(t,n){try{return un(t,void 0,n)}catch(t){return Du(t)?t:new ht(t)}})),Ba=Vi((function(t,n){return cn(n,(function(n){n=Eo(n),$r(t,n,mu(t[n],t))})),t}));function Wa(t){return function(){return t}}var Va=Ni(),Ya=Ni(!0);function Ha(t){return t}function $a(t){return Ae("function"==typeof t?t:Zr(t,1))}var Ga=Ue((function(t,n){return function(r){return me(r,t,n)}})),Xa=Ue((function(t,n){return function(r){return me(t,r,n)}}));function Za(t,n,r){var e=xa(n),i=se(n,e);null!=r||Wu(n)&&(i.length||!e.length)||(r=n,n=t,t=this,i=se(n,xa(n)));var o=!(Wu(r)&&"chain"in r&&!r.chain),u=qu(t);return cn(i,(function(r){var e=n[r];t[r]=e,u&&(t.prototype[r]=function(){var n=this.__chain__;if(o||n){var r=t(this.__wrapped__),i=r.__actions__=yi(this.__actions__);return i.push({func:e,args:arguments,thisArg:t}),r.__chain__=n,r}return e.apply(t,dn([this.value()],arguments))})})),t}function Ja(){}var Ka=ki(vn),Qa=ki(sn),tc=ki(mn);function nc(t){return co(t)?En(Eo(t)):function(t){return function(n){return le(n,t)}}(t)}var rc=Ci(),ec=Ci(!0);function ic(){return[]}function oc(){return!1}var uc=Oi((function(t,n){return t+n}),0),ac=Ii("ceil"),cc=Oi((function(t,n){return t/n}),1),fc=Ii("floor");var sc,lc=Oi((function(t,n){return t*n}),1),hc=Ii("round"),pc=Oi((function(t,n){return t-n}),0);return jr.after=function(t,n){if("function"!=typeof n)throw new mt(o);return t=ea(t),function(){if(--t<1)return n.apply(this,arguments)}},jr.ary=gu,jr.assign=ca,jr.assignIn=fa,jr.assignInWith=sa,jr.assignWith=la,jr.at=ha,jr.before=yu,jr.bind=mu,jr.bindAll=Ba,jr.bindKey=_u,jr.castArray=function(){if(!arguments.length)return[];var t=arguments[0];return Cu(t)?t:[t]},jr.chain=nu,jr.chunk=function(t,n,r){n=(r?ao(t,n,r):void 0===n)?1:ur(ea(n),0);var i=null==t?0:t.length;if(!i||n<1)return[];for(var o=0,u=0,a=e(Qn(i/n));o<i;)a[u++]=Ye(t,o,o+=n);return a},jr.compact=function(t){for(var n=-1,r=null==t?0:t.length,e=0,i=[];++n<r;){var o=t[n];o&&(i[e++]=o)}return i},jr.concat=function(){var t=arguments.length;if(!t)return[];for(var n=e(t-1),r=arguments[0],i=t;i--;)n[i-1]=arguments[i];return dn(Cu(r)?yi(r):[r],oe(n,1))},jr.cond=function(t){var n=null==t?0:t.length,r=Zi();return t=n?vn(t,(function(t){if("function"!=typeof t[1])throw new mt(o);return[r(t[0]),t[1]]})):[],Ue((function(r){for(var e=-1;++e<n;){var i=t[e];if(un(i[0],this,r))return un(i[1],this,r)}}))},jr.conforms=function(t){return function(t){var n=xa(t);return function(r){return Jr(r,t,n)}}(Zr(t,1))},jr.constant=Wa,jr.countBy=iu,jr.create=function(t,n){var r=Tr(t);return null==n?r:Hr(r,n)},jr.curry=function t(n,r,e){var i=Di(n,8,void 0,void 0,void 0,void 0,void 0,r=e?void 0:r);return i.placeholder=t.placeholder,i},jr.curryRight=function t(n,r,e){var i=Di(n,16,void 0,void 0,void 0,void 0,void 0,r=e?void 0:r);return i.placeholder=t.placeholder,i},jr.debounce=xu,jr.defaults=pa,jr.defaultsDeep=va,jr.defer=wu,jr.delay=bu,jr.difference=To,jr.differenceBy=Oo,jr.differenceWith=ko,jr.drop=function(t,n,r){var e=null==t?0:t.length;return e?Ye(t,(n=r||void 0===n?1:ea(n))<0?0:n,e):[]},jr.dropRight=function(t,n,r){var e=null==t?0:t.length;return e?Ye(t,0,(n=e-(n=r||void 0===n?1:ea(n)))<0?0:n):[]},jr.dropRightWhile=function(t,n){return t&&t.length?ni(t,Zi(n,3),!0,!0):[]},jr.dropWhile=function(t,n){return t&&t.length?ni(t,Zi(n,3),!0):[]},jr.fill=function(t,n,r,e){var i=null==t?0:t.length;return i?(r&&"number"!=typeof r&&ao(t,n,r)&&(r=0,e=i),function(t,n,r,e){var i=t.length;for((r=ea(r))<0&&(r=-r>i?0:i+r),(e=void 0===e||e>i?i:ea(e))<0&&(e+=i),e=r>e?0:ia(e);r<e;)t[r++]=n;return t}(t,n,r,e)):[]},jr.filter=function(t,n){return(Cu(t)?ln:ie)(t,Zi(n,3))},jr.flatMap=function(t,n){return oe(hu(t,n),1)},jr.flatMapDeep=function(t,n){return oe(hu(t,n),1/0)},jr.flatMapDepth=function(t,n,r){return r=void 0===r?1:ea(r),oe(hu(t,n),r)},jr.flatten=Lo,jr.flattenDeep=function(t){return(null==t?0:t.length)?oe(t,1/0):[]},jr.flattenDepth=function(t,n){return(null==t?0:t.length)?oe(t,n=void 0===n?1:ea(n)):[]},jr.flip=function(t){return Di(t,512)},jr.flow=Va,jr.flowRight=Ya,jr.fromPairs=function(t){for(var n=-1,r=null==t?0:t.length,e={};++n<r;){var i=t[n];e[i[0]]=i[1]}return e},jr.functions=function(t){return null==t?[]:se(t,xa(t))},jr.functionsIn=function(t){return null==t?[]:se(t,wa(t))},jr.groupBy=fu,jr.initial=function(t){return(null==t?0:t.length)?Ye(t,0,-1):[]},jr.intersection=Io,jr.intersectionBy=Ro,jr.intersectionWith=Uo,jr.invert=ya,jr.invertBy=ma,jr.invokeMap=su,jr.iteratee=$a,jr.keyBy=lu,jr.keys=xa,jr.keysIn=wa,jr.map=hu,jr.mapKeys=function(t,n){var r={};return n=Zi(n,3),ce(t,(function(t,e,i){$r(r,n(t,e,i),t)})),r},jr.mapValues=function(t,n){var r={};return n=Zi(n,3),ce(t,(function(t,e,i){$r(r,e,n(t,e,i))})),r},jr.matches=function(t){return je(Zr(t,1))},jr.matchesProperty=function(t,n){return Te(t,Zr(n,1))},jr.memoize=Au,jr.merge=ba,jr.mergeWith=Aa,jr.method=Ga,jr.methodOf=Xa,jr.mixin=Za,jr.negate=Mu,jr.nthArg=function(t){return t=ea(t),Ue((function(n){return ke(n,t)}))},jr.omit=Ma,jr.omitBy=function(t,n){return Ea(t,Mu(Zi(n)))},jr.once=function(t){return yu(2,t)},jr.orderBy=function(t,n,r,e){return null==t?[]:(Cu(n)||(n=null==n?[]:[n]),Cu(r=e?void 0:r)||(r=null==r?[]:[r]),Pe(t,n,r))},jr.over=Ka,jr.overArgs=Su,jr.overEvery=Qa,jr.overSome=tc,jr.partial=Eu,jr.partialRight=Nu,jr.partition=pu,jr.pick=Sa,jr.pickBy=Ea,jr.property=nc,jr.propertyOf=function(t){return function(n){return null==t?void 0:le(t,n)}},jr.pull=qo,jr.pullAll=zo,jr.pullAllBy=function(t,n,r){return t&&t.length&&n&&n.length?Le(t,n,Zi(r,2)):t},jr.pullAllWith=function(t,n,r){return t&&t.length&&n&&n.length?Le(t,n,void 0,r):t},jr.pullAt=Bo,jr.range=rc,jr.rangeRight=ec,jr.rearg=ju,jr.reject=function(t,n){return(Cu(t)?ln:ie)(t,Mu(Zi(n,3)))},jr.remove=function(t,n){var r=[];if(!t||!t.length)return r;var e=-1,i=[],o=t.length;for(n=Zi(n,3);++e<o;){var u=t[e];n(u,e,t)&&(r.push(u),i.push(e))}return Fe(t,i),r},jr.rest=function(t,n){if("function"!=typeof t)throw new mt(o);return Ue(t,n=void 0===n?n:ea(n))},jr.reverse=Wo,jr.sampleSize=function(t,n,r){return n=(r?ao(t,n,r):void 0===n)?1:ea(n),(Cu(t)?qr:qe)(t,n)},jr.set=function(t,n,r){return null==t?t:ze(t,n,r)},jr.setWith=function(t,n,r,e){return e="function"==typeof e?e:void 0,null==t?t:ze(t,n,r,e)},jr.shuffle=function(t){return(Cu(t)?zr:Ve)(t)},jr.slice=function(t,n,r){var e=null==t?0:t.length;return e?(r&&"number"!=typeof r&&ao(t,n,r)?(n=0,r=e):(n=null==n?0:ea(n),r=void 0===r?e:ea(r)),Ye(t,n,r)):[]},jr.sortBy=vu,jr.sortedUniq=function(t){return t&&t.length?Xe(t):[]},jr.sortedUniqBy=function(t,n){return t&&t.length?Xe(t,Zi(n,2)):[]},jr.split=function(t,n,r){return r&&"number"!=typeof r&&ao(t,n,r)&&(n=r=void 0),(r=void 0===r?4294967295:r>>>0)?(t=aa(t))&&("string"==typeof n||null!=n&&!Gu(n))&&!(n=Je(n))&&qn(t)?fi($n(t),0,r):t.split(n,r):[]},jr.spread=function(t,n){if("function"!=typeof t)throw new mt(o);return n=null==n?0:ur(ea(n),0),Ue((function(r){var e=r[n],i=fi(r,0,n);return e&&dn(i,e),un(t,this,i)}))},jr.tail=function(t){var n=null==t?0:t.length;return n?Ye(t,1,n):[]},jr.take=function(t,n,r){return t&&t.length?Ye(t,0,(n=r||void 0===n?1:ea(n))<0?0:n):[]},jr.takeRight=function(t,n,r){var e=null==t?0:t.length;return e?Ye(t,(n=e-(n=r||void 0===n?1:ea(n)))<0?0:n,e):[]},jr.takeRightWhile=function(t,n){return t&&t.length?ni(t,Zi(n,3),!1,!0):[]},jr.takeWhile=function(t,n){return t&&t.length?ni(t,Zi(n,3)):[]},jr.tap=function(t,n){return n(t),t},jr.throttle=function(t,n,r){var e=!0,i=!0;if("function"!=typeof t)throw new mt(o);return Wu(r)&&(e="leading"in r?!!r.leading:e,i="trailing"in r?!!r.trailing:i),xu(t,n,{leading:e,maxWait:n,trailing:i})},jr.thru=ru,jr.toArray=na,jr.toPairs=Na,jr.toPairsIn=ja,jr.toPath=function(t){return Cu(t)?vn(t,Eo):Ju(t)?[t]:yi(So(aa(t)))},jr.toPlainObject=ua,jr.transform=function(t,n,r){var e=Cu(t),i=e||Ru(t)||Ku(t);if(n=Zi(n,4),null==r){var o=t&&t.constructor;r=i?e?new o:[]:Wu(t)&&qu(o)?Tr(Yt(t)):{}}return(i?cn:ce)(t,(function(t,e,i){return n(r,t,e,i)})),r},jr.unary=function(t){return gu(t,1)},jr.union=Vo,jr.unionBy=Yo,jr.unionWith=Ho,jr.uniq=function(t){return t&&t.length?Ke(t):[]},jr.uniqBy=function(t,n){return t&&t.length?Ke(t,Zi(n,2)):[]},jr.uniqWith=function(t,n){return n="function"==typeof n?n:void 0,t&&t.length?Ke(t,void 0,n):[]},jr.unset=function(t,n){return null==t||Qe(t,n)},jr.unzip=$o,jr.unzipWith=Go,jr.update=function(t,n,r){return null==t?t:ti(t,n,ui(r))},jr.updateWith=function(t,n,r,e){return e="function"==typeof e?e:void 0,null==t?t:ti(t,n,ui(r),e)},jr.values=Ta,jr.valuesIn=function(t){return null==t?[]:Pn(t,wa(t))},jr.without=Xo,jr.words=qa,jr.wrap=function(t,n){return Eu(ui(n),t)},jr.xor=Zo,jr.xorBy=Jo,jr.xorWith=Ko,jr.zip=Qo,jr.zipObject=function(t,n){return ii(t||[],n||[],Wr)},jr.zipObjectDeep=function(t,n){return ii(t||[],n||[],ze)},jr.zipWith=tu,jr.entries=Na,jr.entriesIn=ja,jr.extend=fa,jr.extendWith=sa,Za(jr,jr),jr.add=uc,jr.attempt=za,jr.camelCase=Oa,jr.capitalize=ka,jr.ceil=ac,jr.clamp=function(t,n,r){return void 0===r&&(r=n,n=void 0),void 0!==r&&(r=(r=oa(r))==r?r:0),void 0!==n&&(n=(n=oa(n))==n?n:0),Xr(oa(t),n,r)},jr.clone=function(t){return Zr(t,4)},jr.cloneDeep=function(t){return Zr(t,5)},jr.cloneDeepWith=function(t,n){return Zr(t,5,n="function"==typeof n?n:void 0)},jr.cloneWith=function(t,n){return Zr(t,4,n="function"==typeof n?n:void 0)},jr.conformsTo=function(t,n){return null==n||Jr(t,n,xa(n))},jr.deburr=Pa,jr.defaultTo=function(t,n){return null==t||t!=t?n:t},jr.divide=cc,jr.endsWith=function(t,n,r){t=aa(t),n=Je(n);var e=t.length,i=r=void 0===r?e:Xr(ea(r),0,e);return(r-=n.length)>=0&&t.slice(r,i)==n},jr.eq=Tu,jr.escape=function(t){return(t=aa(t))&&D.test(t)?t.replace(R,Un):t},jr.escapeRegExp=function(t){return(t=aa(t))&&$.test(t)?t.replace(H,"\\$&"):t},jr.every=function(t,n,r){var e=Cu(t)?sn:re;return r&&ao(t,n,r)&&(n=void 0),e(t,Zi(n,3))},jr.find=ou,jr.findIndex=Po,jr.findKey=function(t,n){return xn(t,Zi(n,3),ce)},jr.findLast=uu,jr.findLastIndex=Co,jr.findLastKey=function(t,n){return xn(t,Zi(n,3),fe)},jr.floor=fc,jr.forEach=au,jr.forEachRight=cu,jr.forIn=function(t,n){return null==t?t:ue(t,Zi(n,3),wa)},jr.forInRight=function(t,n){return null==t?t:ae(t,Zi(n,3),wa)},jr.forOwn=function(t,n){return t&&ce(t,Zi(n,3))},jr.forOwnRight=function(t,n){return t&&fe(t,Zi(n,3))},jr.get=da,jr.gt=Ou,jr.gte=ku,jr.has=function(t,n){return null!=t&&eo(t,n,de)},jr.hasIn=ga,jr.head=Fo,jr.identity=Ha,jr.includes=function(t,n,r,e){t=Fu(t)?t:Ta(t),r=r&&!e?ea(r):0;var i=t.length;return r<0&&(r=ur(i+r,0)),Zu(t)?r<=i&&t.indexOf(n,r)>-1:!!i&&bn(t,n,r)>-1},jr.indexOf=function(t,n,r){var e=null==t?0:t.length;if(!e)return-1;var i=null==r?0:ea(r);return i<0&&(i=ur(e+i,0)),bn(t,n,i)},jr.inRange=function(t,n,r){return n=ra(n),void 0===r?(r=n,n=0):r=ra(r),function(t,n,r){return t>=ar(n,r)&&t<ur(n,r)}(t=oa(t),n,r)},jr.invoke=_a,jr.isArguments=Pu,jr.isArray=Cu,jr.isArrayBuffer=Lu,jr.isArrayLike=Fu,jr.isArrayLikeObject=Iu,jr.isBoolean=function(t){return!0===t||!1===t||Vu(t)&&pe(t)==s},jr.isBuffer=Ru,jr.isDate=Uu,jr.isElement=function(t){return Vu(t)&&1===t.nodeType&&!$u(t)},jr.isEmpty=function(t){if(null==t)return!0;if(Fu(t)&&(Cu(t)||"string"==typeof t||"function"==typeof t.splice||Ru(t)||Ku(t)||Pu(t)))return!t.length;var n=ro(t);if(n==d||n==_)return!t.size;if(lo(t))return!Me(t).length;for(var r in t)if(Mt.call(t,r))return!1;return!0},jr.isEqual=function(t,n){return xe(t,n)},jr.isEqualWith=function(t,n,r){var e=(r="function"==typeof r?r:void 0)?r(t,n):void 0;return void 0===e?xe(t,n,void 0,r):!!e},jr.isError=Du,jr.isFinite=function(t){return"number"==typeof t&&er(t)},jr.isFunction=qu,jr.isInteger=zu,jr.isLength=Bu,jr.isMap=Yu,jr.isMatch=function(t,n){return t===n||we(t,n,Ki(n))},jr.isMatchWith=function(t,n,r){return r="function"==typeof r?r:void 0,we(t,n,Ki(n),r)},jr.isNaN=function(t){return Hu(t)&&t!=+t},jr.isNative=function(t){if(so(t))throw new ht("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return be(t)},jr.isNil=function(t){return null==t},jr.isNull=function(t){return null===t},jr.isNumber=Hu,jr.isObject=Wu,jr.isObjectLike=Vu,jr.isPlainObject=$u,jr.isRegExp=Gu,jr.isSafeInteger=function(t){return zu(t)&&t>=-9007199254740991&&t<=9007199254740991},jr.isSet=Xu,jr.isString=Zu,jr.isSymbol=Ju,jr.isTypedArray=Ku,jr.isUndefined=function(t){return void 0===t},jr.isWeakMap=function(t){return Vu(t)&&ro(t)==b},jr.isWeakSet=function(t){return Vu(t)&&"[object WeakSet]"==pe(t)},jr.join=function(t,n){return null==t?"":ir.call(t,n)},jr.kebabCase=Ca,jr.last=Do,jr.lastIndexOf=function(t,n,r){var e=null==t?0:t.length;if(!e)return-1;var i=e;return void 0!==r&&(i=(i=ea(r))<0?ur(e+i,0):ar(i,e-1)),n==n?function(t,n,r){for(var e=r+1;e--;)if(t[e]===n)return e;return e}(t,n,i):wn(t,Mn,i,!0)},jr.lowerCase=La,jr.lowerFirst=Fa,jr.lt=Qu,jr.lte=ta,jr.max=function(t){return t&&t.length?ee(t,Ha,ve):void 0},jr.maxBy=function(t,n){return t&&t.length?ee(t,Zi(n,2),ve):void 0},jr.mean=function(t){return Sn(t,Ha)},jr.meanBy=function(t,n){return Sn(t,Zi(n,2))},jr.min=function(t){return t&&t.length?ee(t,Ha,Ee):void 0},jr.minBy=function(t,n){return t&&t.length?ee(t,Zi(n,2),Ee):void 0},jr.stubArray=ic,jr.stubFalse=oc,jr.stubObject=function(){return{}},jr.stubString=function(){return""},jr.stubTrue=function(){return!0},jr.multiply=lc,jr.nth=function(t,n){return t&&t.length?ke(t,ea(n)):void 0},jr.noConflict=function(){return $t._===this&&($t._=Tt),this},jr.noop=Ja,jr.now=du,jr.pad=function(t,n,r){t=aa(t);var e=(n=ea(n))?Hn(t):0;if(!n||e>=n)return t;var i=(n-e)/2;return Pi(tr(i),r)+t+Pi(Qn(i),r)},jr.padEnd=function(t,n,r){t=aa(t);var e=(n=ea(n))?Hn(t):0;return n&&e<n?t+Pi(n-e,r):t},jr.padStart=function(t,n,r){t=aa(t);var e=(n=ea(n))?Hn(t):0;return n&&e<n?Pi(n-e,r)+t:t},jr.parseInt=function(t,n,r){return r||null==n?n=0:n&&(n=+n),fr(aa(t).replace(X,""),n||0)},jr.random=function(t,n,r){if(r&&"boolean"!=typeof r&&ao(t,n,r)&&(n=r=void 0),void 0===r&&("boolean"==typeof n?(r=n,n=void 0):"boolean"==typeof t&&(r=t,t=void 0)),void 0===t&&void 0===n?(t=0,n=1):(t=ra(t),void 0===n?(n=t,t=0):n=ra(n)),t>n){var e=t;t=n,n=e}if(r||t%1||n%1){var i=sr();return ar(t+i*(n-t+Wt("1e-"+((i+"").length-1))),n)}return Ie(t,n)},jr.reduce=function(t,n,r){var e=Cu(t)?gn:jn,i=arguments.length<3;return e(t,Zi(n,4),r,i,te)},jr.reduceRight=function(t,n,r){var e=Cu(t)?yn:jn,i=arguments.length<3;return e(t,Zi(n,4),r,i,ne)},jr.repeat=function(t,n,r){return n=(r?ao(t,n,r):void 0===n)?1:ea(n),Re(aa(t),n)},jr.replace=function(){var t=arguments,n=aa(t[0]);return t.length<3?n:n.replace(t[1],t[2])},jr.result=function(t,n,r){var e=-1,i=(n=ai(n,t)).length;for(i||(i=1,t=void 0);++e<i;){var o=null==t?void 0:t[Eo(n[e])];void 0===o&&(e=i,o=r),t=qu(o)?o.call(t):o}return t},jr.round=hc,jr.runInContext=t,jr.sample=function(t){return(Cu(t)?Dr:De)(t)},jr.size=function(t){if(null==t)return 0;if(Fu(t))return Zu(t)?Hn(t):t.length;var n=ro(t);return n==d||n==_?t.size:Me(t).length},jr.snakeCase=Ia,jr.some=function(t,n,r){var e=Cu(t)?mn:He;return r&&ao(t,n,r)&&(n=void 0),e(t,Zi(n,3))},jr.sortedIndex=function(t,n){return $e(t,n)},jr.sortedIndexBy=function(t,n,r){return Ge(t,n,Zi(r,2))},jr.sortedIndexOf=function(t,n){var r=null==t?0:t.length;if(r){var e=$e(t,n);if(e<r&&Tu(t[e],n))return e}return-1},jr.sortedLastIndex=function(t,n){return $e(t,n,!0)},jr.sortedLastIndexBy=function(t,n,r){return Ge(t,n,Zi(r,2),!0)},jr.sortedLastIndexOf=function(t,n){if(null==t?0:t.length){var r=$e(t,n,!0)-1;if(Tu(t[r],n))return r}return-1},jr.startCase=Ra,jr.startsWith=function(t,n,r){return t=aa(t),r=null==r?0:Xr(ea(r),0,t.length),n=Je(n),t.slice(r,r+n.length)==n},jr.subtract=pc,jr.sum=function(t){return t&&t.length?Tn(t,Ha):0},jr.sumBy=function(t,n){return t&&t.length?Tn(t,Zi(n,2)):0},jr.template=function(t,n,r){var e=jr.templateSettings;r&&ao(t,n,r)&&(n=void 0),t=aa(t),n=sa({},n,e,qi);var i,o,u=sa({},n.imports,e.imports,qi),a=xa(u),c=Pn(u,a),f=0,s=n.interpolate||st,l="__p += '",h=gt((n.escape||st).source+"|"+s.source+"|"+(s===B?rt:st).source+"|"+(n.evaluate||st).source+"|$","g"),p="//# sourceURL="+(Mt.call(n,"sourceURL")?(n.sourceURL+"").replace(/[\r\n]/g," "):"lodash.templateSources["+ ++Dt+"]")+"\n";t.replace(h,(function(n,r,e,u,a,c){return e||(e=u),l+=t.slice(f,c).replace(lt,Dn),r&&(i=!0,l+="' +\n__e("+r+") +\n'"),a&&(o=!0,l+="';\n"+a+";\n__p += '"),e&&(l+="' +\n((__t = ("+e+")) == null ? '' : __t) +\n'"),f=c+n.length,n})),l+="';\n";var v=Mt.call(n,"variable")&&n.variable;v||(l="with (obj) {\n"+l+"\n}\n"),l=(o?l.replace(C,""):l).replace(L,"$1").replace(F,"$1;"),l="function("+(v||"obj")+") {\n"+(v?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(i?", __e = _.escape":"")+(o?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+l+"return __p\n}";var d=za((function(){return pt(a,p+"return "+l).apply(void 0,c)}));if(d.source=l,Du(d))throw d;return d},jr.times=function(t,n){if((t=ea(t))<1||t>9007199254740991)return[];var r=4294967295,e=ar(t,4294967295);t-=4294967295;for(var i=On(e,n=Zi(n));++r<t;)n(r);return i},jr.toFinite=ra,jr.toInteger=ea,jr.toLength=ia,jr.toLower=function(t){return aa(t).toLowerCase()},jr.toNumber=oa,jr.toSafeInteger=function(t){return t?Xr(ea(t),-9007199254740991,9007199254740991):0===t?t:0},jr.toString=aa,jr.toUpper=function(t){return aa(t).toUpperCase()},jr.trim=function(t,n,r){if((t=aa(t))&&(r||void 0===n))return t.replace(G,"");if(!t||!(n=Je(n)))return t;var e=$n(t),i=$n(n);return fi(e,Ln(e,i),Fn(e,i)+1).join("")},jr.trimEnd=function(t,n,r){if((t=aa(t))&&(r||void 0===n))return t.replace(Z,"");if(!t||!(n=Je(n)))return t;var e=$n(t);return fi(e,0,Fn(e,$n(n))+1).join("")},jr.trimStart=function(t,n,r){if((t=aa(t))&&(r||void 0===n))return t.replace(X,"");if(!t||!(n=Je(n)))return t;var e=$n(t);return fi(e,Ln(e,$n(n))).join("")},jr.truncate=function(t,n){var r=30,e="...";if(Wu(n)){var i="separator"in n?n.separator:i;r="length"in n?ea(n.length):r,e="omission"in n?Je(n.omission):e}var o=(t=aa(t)).length;if(qn(t)){var u=$n(t);o=u.length}if(r>=o)return t;var a=r-Hn(e);if(a<1)return e;var c=u?fi(u,0,a).join(""):t.slice(0,a);if(void 0===i)return c+e;if(u&&(a+=c.length-a),Gu(i)){if(t.slice(a).search(i)){var f,s=c;for(i.global||(i=gt(i.source,aa(et.exec(i))+"g")),i.lastIndex=0;f=i.exec(s);)var l=f.index;c=c.slice(0,void 0===l?a:l)}}else if(t.indexOf(Je(i),a)!=a){var h=c.lastIndexOf(i);h>-1&&(c=c.slice(0,h))}return c+e},jr.unescape=function(t){return(t=aa(t))&&U.test(t)?t.replace(I,Gn):t},jr.uniqueId=function(t){var n=++St;return aa(t)+n},jr.upperCase=Ua,jr.upperFirst=Da,jr.each=au,jr.eachRight=cu,jr.first=Fo,Za(jr,(sc={},ce(jr,(function(t,n){Mt.call(jr.prototype,n)||(sc[n]=t)})),sc),{chain:!1}),jr.VERSION="4.17.15",cn(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(t){jr[t].placeholder=jr})),cn(["drop","take"],(function(t,n){Pr.prototype[t]=function(r){r=void 0===r?1:ur(ea(r),0);var e=this.__filtered__&&!n?new Pr(this):this.clone();return e.__filtered__?e.__takeCount__=ar(r,e.__takeCount__):e.__views__.push({size:ar(r,4294967295),type:t+(e.__dir__<0?"Right":"")}),e},Pr.prototype[t+"Right"]=function(n){return this.reverse()[t](n).reverse()}})),cn(["filter","map","takeWhile"],(function(t,n){var r=n+1,e=1==r||3==r;Pr.prototype[t]=function(t){var n=this.clone();return n.__iteratees__.push({iteratee:Zi(t,3),type:r}),n.__filtered__=n.__filtered__||e,n}})),cn(["head","last"],(function(t,n){var r="take"+(n?"Right":"");Pr.prototype[t]=function(){return this[r](1).value()[0]}})),cn(["initial","tail"],(function(t,n){var r="drop"+(n?"":"Right");Pr.prototype[t]=function(){return this.__filtered__?new Pr(this):this[r](1)}})),Pr.prototype.compact=function(){return this.filter(Ha)},Pr.prototype.find=function(t){return this.filter(t).head()},Pr.prototype.findLast=function(t){return this.reverse().find(t)},Pr.prototype.invokeMap=Ue((function(t,n){return"function"==typeof t?new Pr(this):this.map((function(r){return me(r,t,n)}))})),Pr.prototype.reject=function(t){return this.filter(Mu(Zi(t)))},Pr.prototype.slice=function(t,n){t=ea(t);var r=this;return r.__filtered__&&(t>0||n<0)?new Pr(r):(t<0?r=r.takeRight(-t):t&&(r=r.drop(t)),void 0!==n&&(r=(n=ea(n))<0?r.dropRight(-n):r.take(n-t)),r)},Pr.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},Pr.prototype.toArray=function(){return this.take(4294967295)},ce(Pr.prototype,(function(t,n){var r=/^(?:filter|find|map|reject)|While$/.test(n),e=/^(?:head|last)$/.test(n),i=jr[e?"take"+("last"==n?"Right":""):n],o=e||/^find/.test(n);i&&(jr.prototype[n]=function(){var n=this.__wrapped__,u=e?[1]:arguments,a=n instanceof Pr,c=u[0],f=a||Cu(n),s=function(t){var n=i.apply(jr,dn([t],u));return e&&l?n[0]:n};f&&r&&"function"==typeof c&&1!=c.length&&(a=f=!1);var l=this.__chain__,h=!!this.__actions__.length,p=o&&!l,v=a&&!h;if(!o&&f){n=v?n:new Pr(this);var d=t.apply(n,u);return d.__actions__.push({func:ru,args:[s],thisArg:void 0}),new kr(d,l)}return p&&v?t.apply(this,u):(d=this.thru(s),p?e?d.value()[0]:d.value():d)})})),cn(["pop","push","shift","sort","splice","unshift"],(function(t){var n=_t[t],r=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",e=/^(?:pop|shift)$/.test(t);jr.prototype[t]=function(){var t=arguments;if(e&&!this.__chain__){var i=this.value();return n.apply(Cu(i)?i:[],t)}return this[r]((function(r){return n.apply(Cu(r)?r:[],t)}))}})),ce(Pr.prototype,(function(t,n){var r=jr[n];if(r){var e=r.name+"";Mt.call(_r,e)||(_r[e]=[]),_r[e].push({name:n,func:r})}})),_r[ji(void 0,2).name]=[{name:"wrapper",func:void 0}],Pr.prototype.clone=function(){var t=new Pr(this.__wrapped__);return t.__actions__=yi(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=yi(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=yi(this.__views__),t},Pr.prototype.reverse=function(){if(this.__filtered__){var t=new Pr(this);t.__dir__=-1,t.__filtered__=!0}else(t=this.clone()).__dir__*=-1;return t},Pr.prototype.value=function(){var t=this.__wrapped__.value(),n=this.__dir__,r=Cu(t),e=n<0,i=r?t.length:0,o=function(t,n,r){var e=-1,i=r.length;for(;++e<i;){var o=r[e],u=o.size;switch(o.type){case"drop":t+=u;break;case"dropRight":n-=u;break;case"take":n=ar(n,t+u);break;case"takeRight":t=ur(t,n-u)}}return{start:t,end:n}}(0,i,this.__views__),u=o.start,a=o.end,c=a-u,f=e?a:u-1,s=this.__iteratees__,l=s.length,h=0,p=ar(c,this.__takeCount__);if(!r||!e&&i==c&&p==c)return ri(t,this.__actions__);var v=[];t:for(;c--&&h<p;){for(var d=-1,g=t[f+=n];++d<l;){var y=s[d],m=y.iteratee,_=y.type,x=m(g);if(2==_)g=x;else if(!x){if(1==_)continue t;break t}}v[h++]=g}return v},jr.prototype.at=eu,jr.prototype.chain=function(){return nu(this)},jr.prototype.commit=function(){return new kr(this.value(),this.__chain__)},jr.prototype.next=function(){void 0===this.__values__&&(this.__values__=na(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?void 0:this.__values__[this.__index__++]}},jr.prototype.plant=function(t){for(var n,r=this;r instanceof Or;){var e=jo(r);e.__index__=0,e.__values__=void 0,n?i.__wrapped__=e:n=e;var i=e;r=r.__wrapped__}return i.__wrapped__=t,n},jr.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof Pr){var n=t;return this.__actions__.length&&(n=new Pr(this)),(n=n.reverse()).__actions__.push({func:ru,args:[Wo],thisArg:void 0}),new kr(n,this.__chain__)}return this.thru(Wo)},jr.prototype.toJSON=jr.prototype.valueOf=jr.prototype.value=function(){return ri(this.__wrapped__,this.__actions__)},jr.prototype.first=jr.prototype.head,Kt&&(jr.prototype[Kt]=function(){return this}),jr}();$t._=Xn,void 0===(i=function(){return Xn}.call(n,r,n,e))||(e.exports=i)}).call(this)}).call(this,r(128),r(629)(t))},function(t,n,r){var e;t.exports=(function(t,n){var r=t.utils.isFunction;function e(t,n){return t-n}function i(t,r,e){return n.max(r,n.min(t,e))}t.sum=function(t){for(var n=0,r=t.length;--r>=0;)n+=t[r];return n},t.sumsqrd=function(t){for(var n=0,r=t.length;--r>=0;)n+=t[r]*t[r];return n},t.sumsqerr=function(n){for(var r,e=t.mean(n),i=0,o=n.length;--o>=0;)i+=(r=n[o]-e)*r;return i},t.sumrow=function(t){for(var n=0,r=t.length;--r>=0;)n+=t[r];return n},t.product=function(t){for(var n=1,r=t.length;--r>=0;)n*=t[r];return n},t.min=function(t){for(var n=t[0],r=0;++r<t.length;)t[r]<n&&(n=t[r]);return n},t.max=function(t){for(var n=t[0],r=0;++r<t.length;)t[r]>n&&(n=t[r]);return n},t.unique=function(t){for(var n={},r=[],e=0;e<t.length;e++)n[t[e]]||(n[t[e]]=!0,r.push(t[e]));return r},t.mean=function(n){return t.sum(n)/n.length},t.meansqerr=function(n){return t.sumsqerr(n)/n.length},t.geomean=function(r){return n.pow(t.product(r),1/r.length)},t.median=function(t){var n=t.length,r=t.slice().sort(e);return 1&n?r[n/2|0]:(r[n/2-1]+r[n/2])/2},t.cumsum=function(n){return t.cumreduce(n,(function(t,n){return t+n}))},t.cumprod=function(n){return t.cumreduce(n,(function(t,n){return t*n}))},t.diff=function(t){var n,r=[],e=t.length;for(n=1;n<e;n++)r.push(t[n]-t[n-1]);return r},t.rank=function(t){for(var n,r=t.length,i=t.slice().sort(e),o=new Array(r),u=0;u<r;u++){var a=i.indexOf(t[u]),c=i.lastIndexOf(t[u]);n=a===c?a:(a+c)/2,o[u]=n+1}return o},t.mode=function(t){var n,r=t.length,i=t.slice().sort(e),o=1,u=0,a=0,c=[];for(n=0;n<r;n++)i[n]===i[n+1]?o++:(o>u?(c=[i[n]],u=o,a=0):o===u&&(c.push(i[n]),a++),o=1);return 0===a?c[0]:c},t.range=function(n){return t.max(n)-t.min(n)},t.variance=function(n,r){return t.sumsqerr(n)/(n.length-(r?1:0))},t.pooledvariance=function(n){return n.reduce((function(n,r){return n+t.sumsqerr(r)}),0)/(n.reduce((function(t,n){return t+n.length}),0)-n.length)},t.deviation=function(n){for(var r=t.mean(n),e=n.length,i=new Array(e),o=0;o<e;o++)i[o]=n[o]-r;return i},t.stdev=function(r,e){return n.sqrt(t.variance(r,e))},t.pooledstdev=function(r){return n.sqrt(t.pooledvariance(r))},t.meandev=function(r){for(var e=t.mean(r),i=[],o=r.length-1;o>=0;o--)i.push(n.abs(r[o]-e));return t.mean(i)},t.meddev=function(r){for(var e=t.median(r),i=[],o=r.length-1;o>=0;o--)i.push(n.abs(r[o]-e));return t.median(i)},t.coeffvar=function(n){return t.stdev(n)/t.mean(n)},t.quartiles=function(t){var r=t.length,i=t.slice().sort(e);return[i[n.round(r/4)-1],i[n.round(r/2)-1],i[n.round(3*r/4)-1]]},t.quantiles=function(t,r,o,u){var a,c,f,s,l,h=t.slice().sort(e),p=[r.length],v=t.length;for(void 0===o&&(o=3/8),void 0===u&&(u=3/8),a=0;a<r.length;a++)f=v*(c=r[a])+(o+c*(1-o-u)),s=n.floor(i(f,1,v-1)),l=i(f-s,0,1),p[a]=(1-l)*h[s-1]+l*h[s];return p},t.percentile=function(t,n,r){var i=t.slice().sort(e),o=n*(i.length+(r?1:-1))+(r?0:1),u=parseInt(o),a=o-u;return u+1<i.length?i[u-1]+a*(i[u]-i[u-1]):i[u-1]},t.percentileOfScore=function(t,n,r){var e,i,o=0,u=t.length,a=!1;for("strict"===r&&(a=!0),i=0;i<u;i++)e=t[i],(a&&e<n||!a&&e<=n)&&o++;return o/u},t.histogram=function(r,e){e=e||4;var i,o=t.min(r),u=(t.max(r)-o)/e,a=r.length,c=[];for(i=0;i<e;i++)c[i]=0;for(i=0;i<a;i++)c[n.min(n.floor((r[i]-o)/u),e-1)]+=1;return c},t.covariance=function(n,r){var e,i=t.mean(n),o=t.mean(r),u=n.length,a=new Array(u);for(e=0;e<u;e++)a[e]=(n[e]-i)*(r[e]-o);return t.sum(a)/(u-1)},t.corrcoeff=function(n,r){return t.covariance(n,r)/t.stdev(n,1)/t.stdev(r,1)},t.spearmancoeff=function(n,r){return n=t.rank(n),r=t.rank(r),t.corrcoeff(n,r)},t.stanMoment=function(r,e){for(var i=t.mean(r),o=t.stdev(r),u=r.length,a=0,c=0;c<u;c++)a+=n.pow((r[c]-i)/o,e);return a/r.length},t.skewness=function(n){return t.stanMoment(n,3)},t.kurtosis=function(n){return t.stanMoment(n,4)-3};var o=t.prototype;!function(n){for(var e=0;e<n.length;e++)!function(n){o[n]=function(e,i){var u=[],a=0,c=this;if(r(e)&&(i=e,e=!1),i)return setTimeout((function(){i.call(c,o[n].call(c,e))})),this;if(this.length>1){for(c=!0===e?this:this.transpose();a<c.length;a++)u[a]=t[n](c[a]);return u}return t[n](this[0],e)}}(n[e])}("cumsum cumprod".split(" ")),function(n){for(var e=0;e<n.length;e++)!function(n){o[n]=function(e,i){var u=[],a=0,c=this;if(r(e)&&(i=e,e=!1),i)return setTimeout((function(){i.call(c,o[n].call(c,e))})),this;if(this.length>1){for("sumrow"!==n&&(c=!0===e?this:this.transpose());a<c.length;a++)u[a]=t[n](c[a]);return!0===e?t[n](t.utils.toVector(u)):u}return t[n](this[0],e)}}(n[e])}("sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr geomean median diff rank mode range variance deviation stdev meandev meddev coeffvar quartiles histogram skewness kurtosis".split(" ")),function(n){for(var e=0;e<n.length;e++)!function(n){o[n]=function(){var e,i=[],u=0,a=this,c=Array.prototype.slice.call(arguments);if(r(c[c.length-1])){e=c[c.length-1];var f=c.slice(0,c.length-1);return setTimeout((function(){e.call(a,o[n].apply(a,f))})),this}e=void 0;var s=function(r){return t[n].apply(a,[r].concat(c))};if(this.length>1){for(a=a.transpose();u<a.length;u++)i[u]=s(a[u]);return i}return s(this[0])}}(n[e])}("quantiles percentileOfScore".split(" "))}(e=function(t,n){var r=Array.prototype.concat,e=Array.prototype.slice,i=Object.prototype.toString;function o(n,r){var e=n>r?n:r;return t.pow(10,17-~~(t.log(e>0?e:-e)*t.LOG10E))}var u=Array.isArray||function(t){return"[object Array]"===i.call(t)};function a(t){return"[object Function]"===i.call(t)}function c(t){return"number"==typeof t&&t-t==0}function f(){return new f._init(arguments)}function s(){return 0}function l(){return 1}function h(t,n){return t===n?1:0}f.fn=f.prototype,f._init=function(t){if(u(t[0]))if(u(t[0][0])){a(t[1])&&(t[0]=f.map(t[0],t[1]));for(var n=0;n<t[0].length;n++)this[n]=t[0][n];this.length=t[0].length}else this[0]=a(t[1])?f.map(t[0],t[1]):t[0],this.length=1;else if(c(t[0]))this[0]=f.seq.apply(null,t),this.length=1;else{if(t[0]instanceof f)return f(t[0].toArray());this[0]=[],this.length=1}return this},f._init.prototype=f.prototype,f._init.constructor=f,f.utils={calcRdx:o,isArray:u,isFunction:a,isNumber:c,toVector:function(t){return r.apply([],t)}},f._random_fn=t.random,f.setRandom=function(t){if("function"!=typeof t)throw new TypeError("fn is not a function");f._random_fn=t},f.extend=function(t){var n,r;if(1===arguments.length){for(r in t)f[r]=t[r];return this}for(n=1;n<arguments.length;n++)for(r in arguments[n])t[r]=arguments[n][r];return t},f.rows=function(t){return t.length||1},f.cols=function(t){return t[0].length||1},f.dimensions=function(t){return{rows:f.rows(t),cols:f.cols(t)}},f.row=function(t,n){return u(n)?n.map((function(n){return f.row(t,n)})):t[n]},f.rowa=function(t,n){return f.row(t,n)},f.col=function(t,n){if(u(n)){var r=f.arange(t.length).map((function(){return new Array(n.length)}));return n.forEach((function(n,e){f.arange(t.length).forEach((function(i){r[i][e]=t[i][n]}))})),r}for(var e=new Array(t.length),i=0;i<t.length;i++)e[i]=[t[i][n]];return e},f.cola=function(t,n){return f.col(t,n).map((function(t){return t[0]}))},f.diag=function(t){for(var n=f.rows(t),r=new Array(n),e=0;e<n;e++)r[e]=[t[e][e]];return r},f.antidiag=function(t){for(var n=f.rows(t)-1,r=new Array(n),e=0;n>=0;n--,e++)r[e]=[t[e][n]];return r},f.transpose=function(t){var n,r,e,i,o,a=[];for(u(t[0])||(t=[t]),r=t.length,e=t[0].length,o=0;o<e;o++){for(n=new Array(r),i=0;i<r;i++)n[i]=t[i][o];a.push(n)}return 1===a.length?a[0]:a},f.map=function(t,n,r){var e,i,o,a,c;for(u(t[0])||(t=[t]),i=t.length,o=t[0].length,a=r?t:new Array(i),e=0;e<i;e++)for(a[e]||(a[e]=new Array(o)),c=0;c<o;c++)a[e][c]=n(t[e][c],e,c);return 1===a.length?a[0]:a},f.cumreduce=function(t,n,r){var e,i,o,a,c;for(u(t[0])||(t=[t]),i=t.length,o=t[0].length,a=r?t:new Array(i),e=0;e<i;e++)for(a[e]||(a[e]=new Array(o)),o>0&&(a[e][0]=t[e][0]),c=1;c<o;c++)a[e][c]=n(a[e][c-1],t[e][c]);return 1===a.length?a[0]:a},f.alter=function(t,n){return f.map(t,n,!0)},f.create=function(t,n,r){var e,i,o=new Array(t);for(a(n)&&(r=n,n=t),e=0;e<t;e++)for(o[e]=new Array(n),i=0;i<n;i++)o[e][i]=r(e,i);return o},f.zeros=function(t,n){return c(n)||(n=t),f.create(t,n,s)},f.ones=function(t,n){return c(n)||(n=t),f.create(t,n,l)},f.rand=function(t,n){return c(n)||(n=t),f.create(t,n,f._random_fn)},f.identity=function(t,n){return c(n)||(n=t),f.create(t,n,h)},f.symmetric=function(t){var n,r,e=t.length;if(t.length!==t[0].length)return!1;for(n=0;n<e;n++)for(r=0;r<e;r++)if(t[r][n]!==t[n][r])return!1;return!0},f.clear=function(t){return f.alter(t,s)},f.seq=function(t,n,r,e){a(e)||(e=!1);var i,u=[],c=o(t,n),f=(n*c-t*c)/((r-1)*c),s=t;for(i=0;s<=n&&i<r;s=(t*c+f*c*++i)/c)u.push(e?e(s,i):s);return u},f.arange=function(t,n,r){var e,i=[];if(r=r||1,void 0===n&&(n=t,t=0),t===n||0===r)return[];if(t<n&&r<0)return[];if(t>n&&r>0)return[];if(r>0)for(e=t;e<n;e+=r)i.push(e);else for(e=t;e>n;e+=r)i.push(e);return i},f.slice=function(){function t(t,n,r,e){var i,o=[],u=t.length;if(void 0===n&&void 0===r&&void 0===e)return f.copy(t);if(e=e||1,(n=(n=n||0)>=0?n:u+n)===(r=(r=r||t.length)>=0?r:u+r)||0===e)return[];if(n<r&&e<0)return[];if(n>r&&e>0)return[];if(e>0)for(i=n;i<r;i+=e)o.push(t[i]);else for(i=n;i>r;i+=e)o.push(t[i]);return o}return function(n,r){var e,i;return c((r=r||{}).row)?c(r.col)?n[r.row][r.col]:t(f.rowa(n,r.row),(e=r.col||{}).start,e.end,e.step):c(r.col)?t(f.cola(n,r.col),(i=r.row||{}).start,i.end,i.step):(i=r.row||{},e=r.col||{},t(n,i.start,i.end,i.step).map((function(n){return t(n,e.start,e.end,e.step)})))}}(),f.sliceAssign=function(n,r,e){var i,o;if(c(r.row)){if(c(r.col))return n[r.row][r.col]=e;r.col=r.col||{},r.col.start=r.col.start||0,r.col.end=r.col.end||n[0].length,r.col.step=r.col.step||1,i=f.arange(r.col.start,t.min(n.length,r.col.end),r.col.step);var u=r.row;return i.forEach((function(t,r){n[u][t]=e[r]})),n}if(c(r.col)){r.row=r.row||{},r.row.start=r.row.start||0,r.row.end=r.row.end||n.length,r.row.step=r.row.step||1,o=f.arange(r.row.start,t.min(n[0].length,r.row.end),r.row.step);var a=r.col;return o.forEach((function(t,r){n[t][a]=e[r]})),n}return void 0===e[0].length&&(e=[e]),r.row.start=r.row.start||0,r.row.end=r.row.end||n.length,r.row.step=r.row.step||1,r.col.start=r.col.start||0,r.col.end=r.col.end||n[0].length,r.col.step=r.col.step||1,o=f.arange(r.row.start,t.min(n.length,r.row.end),r.row.step),i=f.arange(r.col.start,t.min(n[0].length,r.col.end),r.col.step),o.forEach((function(t,r){i.forEach((function(i,o){n[t][i]=e[r][o]}))})),n},f.diagonal=function(t){var n=f.zeros(t.length,t.length);return t.forEach((function(t,r){n[r][r]=t})),n},f.copy=function(t){return t.map((function(t){return c(t)?t:t.map((function(t){return t}))}))};var p=f.prototype;return p.length=0,p.push=Array.prototype.push,p.sort=Array.prototype.sort,p.splice=Array.prototype.splice,p.slice=Array.prototype.slice,p.toArray=function(){return this.length>1?e.call(this):e.call(this)[0]},p.map=function(t,n){return f(f.map(this,t,n))},p.cumreduce=function(t,n){return f(f.cumreduce(this,t,n))},p.alter=function(t){return f.alter(this,t),this},function(t){for(var n=0;n<t.length;n++)!function(t){p[t]=function(n){var r,e=this;return n?(setTimeout((function(){n.call(e,p[t].call(e))})),this):(r=f[t](this),u(r)?f(r):r)}}(t[n])}("transpose clear symmetric rows cols dimensions diag antidiag".split(" ")),function(t){for(var n=0;n<t.length;n++)!function(t){p[t]=function(n,r){var e=this;return r?(setTimeout((function(){r.call(e,p[t].call(e,n))})),this):f(f[t](this,n))}}(t[n])}("row col".split(" ")),function(t){for(var n=0;n<t.length;n++)!function(t){p[t]=function(){return f(f[t].apply(null,arguments))}}(t[n])}("create zeros ones rand identity".split(" ")),f}(Math),Math),function(t,n){t.gammaln=function(t){var r,e,i,o=0,u=[76.18009172947146,-86.50532032941678,24.01409824083091,-1.231739572450155,.001208650973866179,-5395239384953e-18],a=1.000000000190015;for(i=(e=r=t)+5.5,i-=(r+.5)*n.log(i);o<6;o++)a+=u[o]/++e;return n.log(2.5066282746310007*a/r)-i},t.loggam=function(t){var r,e,i,o,u,a,c,f=[.08333333333333333,-.002777777777777778,.0007936507936507937,-.0005952380952380952,.0008417508417508418,-.001917526917526918,.00641025641025641,-.02955065359477124,.1796443723688307,-1.3924322169059];if(r=t,c=0,1==t||2==t)return 0;for(t<=7&&(r=t+(c=n.floor(7-t))),e=1/(r*r),i=2*n.PI,u=f[9],a=8;a>=0;a--)u*=e,u+=f[a];if(o=u/r+.5*n.log(i)+(r-.5)*n.log(r)-r,t<=7)for(a=1;a<=c;a++)o-=n.log(r-1),r-=1;return o},t.gammafn=function(t){var r,e,i,o,u=[-1.716185138865495,24.76565080557592,-379.80425647094563,629.3311553128184,866.9662027904133,-31451.272968848367,-36144.413418691176,66456.14382024054],a=[-30.8402300119739,315.35062697960416,-1015.1563674902192,-3107.771671572311,22538.11842098015,4755.846277527881,-134659.9598649693,-115132.2596755535],c=!1,f=0,s=0,l=0,h=t;if(h<=0){if(!(o=h%1+36e-17))return 1/0;c=(1&h?-1:1)*n.PI/n.sin(n.PI*o),h=1-h}for(i=h,e=h<1?h++:(h-=f=(0|h)-1)-1,r=0;r<8;++r)l=(l+u[r])*e,s=s*e+a[r];if(o=l/s+1,i<h)o/=i;else if(i>h)for(r=0;r<f;++r)o*=h,h++;return c&&(o=c/o),o},t.gammap=function(n,r){return t.lowRegGamma(n,r)*t.gammafn(n)},t.lowRegGamma=function(r,e){var i,o=t.gammaln(r),u=r,a=1/r,c=a,f=e+1-r,s=1/1e-30,l=1/f,h=l,p=1,v=-~(8.5*n.log(r>=1?r:1/r)+.4*r+17);if(e<0||r<=0)return NaN;if(e<r+1){for(;p<=v;p++)a+=c*=e/++u;return a*n.exp(-e+r*n.log(e)-o)}for(;p<=v;p++)h*=(l=1/(l=(i=-p*(p-r))*l+(f+=2)))*(s=f+i/s);return 1-h*n.exp(-e+r*n.log(e)-o)},t.factorialln=function(n){return n<0?NaN:t.gammaln(n+1)},t.factorial=function(n){return n<0?NaN:t.gammafn(n+1)},t.combination=function(r,e){return r>170||e>170?n.exp(t.combinationln(r,e)):t.factorial(r)/t.factorial(e)/t.factorial(r-e)},t.combinationln=function(n,r){return t.factorialln(n)-t.factorialln(r)-t.factorialln(n-r)},t.permutation=function(n,r){return t.factorial(n)/t.factorial(n-r)},t.betafn=function(r,e){if(!(r<=0||e<=0))return r+e>170?n.exp(t.betaln(r,e)):t.gammafn(r)*t.gammafn(e)/t.gammafn(r+e)},t.betaln=function(n,r){return t.gammaln(n)+t.gammaln(r)-t.gammaln(n+r)},t.betacf=function(t,r,e){var i,o,u,a,c=1,f=r+e,s=r+1,l=r-1,h=1,p=1-f*t/s;for(n.abs(p)<1e-30&&(p=1e-30),a=p=1/p;c<=100&&(p=1+(o=c*(e-c)*t/((l+(i=2*c))*(r+i)))*p,n.abs(p)<1e-30&&(p=1e-30),h=1+o/h,n.abs(h)<1e-30&&(h=1e-30),a*=(p=1/p)*h,p=1+(o=-(r+c)*(f+c)*t/((r+i)*(s+i)))*p,n.abs(p)<1e-30&&(p=1e-30),h=1+o/h,n.abs(h)<1e-30&&(h=1e-30),a*=u=(p=1/p)*h,!(n.abs(u-1)<3e-7));c++);return a},t.gammapinv=function(r,e){var i,o,u,a,c,f,s=0,l=e-1,h=t.gammaln(e);if(r>=1)return n.max(100,e+100*n.sqrt(e));if(r<=0)return 0;for(e>1?(c=n.log(l),f=n.exp(l*(c-1)-h),a=r<.5?r:1-r,i=(2.30753+.27061*(o=n.sqrt(-2*n.log(a))))/(1+o*(.99229+.04481*o))-o,r<.5&&(i=-i),i=n.max(.001,e*n.pow(1-1/(9*e)-i/(3*n.sqrt(e)),3))):i=r<(o=1-e*(.253+.12*e))?n.pow(r/o,1/e):1-n.log(1-(r-o)/(1-o));s<12;s++){if(i<=0)return 0;if((i-=o=(u=(t.lowRegGamma(e,i)-r)/(o=e>1?f*n.exp(-(i-l)+l*(n.log(i)-c)):n.exp(-i+l*n.log(i)-h)))/(1-.5*n.min(1,u*((e-1)/i-1))))<=0&&(i=.5*(i+o)),n.abs(o)<1e-8*i)break}return i},t.erf=function(t){var r,e,i,o,u=[-1.3026537197817094,.6419697923564902,.019476473204185836,-.00956151478680863,-.000946595344482036,.000366839497852761,42523324806907e-18,-20278578112534e-18,-1624290004647e-18,130365583558e-17,1.5626441722e-8,-8.5238095915e-8,6.529054439e-9,5.059343495e-9,-9.91364156e-10,-2.27365122e-10,96467911e-18,2394038e-18,-6886027e-18,894487e-18,313092e-18,-112708e-18,381e-18,7106e-18,-1523e-18,-94e-18,121e-18,-28e-18],a=u.length-1,c=!1,f=0,s=0;for(t<0&&(t=-t,c=!0),e=4*(r=2/(2+t))-2;a>0;a--)i=f,f=e*f-s+u[a],s=i;return o=r*n.exp(-t*t+.5*(u[0]+e*f)-s),c?o-1:1-o},t.erfc=function(n){return 1-t.erf(n)},t.erfcinv=function(r){var e,i,o,u,a=0;if(r>=2)return-100;if(r<=0)return 100;for(u=r<1?r:2-r,e=-.70711*((2.30753+.27061*(o=n.sqrt(-2*n.log(u/2))))/(1+o*(.99229+.04481*o))-o);a<2;a++)e+=(i=t.erfc(e)-u)/(1.1283791670955126*n.exp(-e*e)-e*i);return r<1?e:-e},t.ibetainv=function(r,e,i){var o,u,a,c,f,s,l,h,p,v,d=e-1,g=i-1,y=0;if(r<=0)return 0;if(r>=1)return 1;for(e>=1&&i>=1?(a=r<.5?r:1-r,s=(2.30753+.27061*(c=n.sqrt(-2*n.log(a))))/(1+c*(.99229+.04481*c))-c,r<.5&&(s=-s),l=(s*s-3)/6,h=2/(1/(2*e-1)+1/(2*i-1)),p=s*n.sqrt(l+h)/h-(1/(2*i-1)-1/(2*e-1))*(l+5/6-2/(3*h)),s=e/(e+i*n.exp(2*p))):(o=n.log(e/(e+i)),u=n.log(i/(e+i)),s=r<(c=n.exp(e*o)/e)/(p=c+(f=n.exp(i*u)/i))?n.pow(e*p*r,1/e):1-n.pow(i*p*(1-r),1/i)),v=-t.gammaln(e)-t.gammaln(i)+t.gammaln(e+i);y<10;y++){if(0===s||1===s)return s;if((s-=c=(f=(t.ibeta(s,e,i)-r)/(c=n.exp(d*n.log(s)+g*n.log(1-s)+v)))/(1-.5*n.min(1,f*(d/s-g/(1-s)))))<=0&&(s=.5*(s+c)),s>=1&&(s=.5*(s+c+1)),n.abs(c)<1e-8*s&&y>0)break}return s},t.ibeta=function(r,e,i){var o=0===r||1===r?0:n.exp(t.gammaln(e+i)-t.gammaln(e)-t.gammaln(i)+e*n.log(r)+i*n.log(1-r));return!(r<0||r>1)&&(r<(e+1)/(e+i+2)?o*t.betacf(r,e,i)/e:1-o*t.betacf(1-r,i,e)/i)},t.randn=function(r,e){var i,o,u,a,c;if(e||(e=r),r)return t.create(r,e,(function(){return t.randn()}));do{i=t._random_fn(),o=1.7156*(t._random_fn()-.5),c=(u=i-.449871)*u+(a=n.abs(o)+.386595)*(.196*a-.25472*u)}while(c>.27597&&(c>.27846||o*o>-4*n.log(i)*i*i));return o/i},t.randg=function(r,e,i){var o,u,a,c,f,s,l=r;if(i||(i=e),r||(r=1),e)return(s=t.zeros(e,i)).alter((function(){return t.randg(r)})),s;r<1&&(r+=1),o=r-1/3,u=1/n.sqrt(9*o);do{do{c=1+u*(f=t.randn())}while(c<=0);c*=c*c,a=t._random_fn()}while(a>1-.331*n.pow(f,4)&&n.log(a)>.5*f*f+o*(1-c+n.log(c)));if(r==l)return o*c;do{a=t._random_fn()}while(0===a);return n.pow(a,1/l)*o*c},function(n){for(var r=0;r<n.length;r++)!function(n){t.fn[n]=function(){return t(t.map(this,(function(r){return t[n](r)})))}}(n[r])}("gammaln gammafn factorial factorialln".split(" ")),function(n){for(var r=0;r<n.length;r++)!function(n){t.fn[n]=function(){return t(t[n].apply(null,arguments))}}(n[r])}("randn".split(" "))}(e,Math),function(t,n){function r(t,r,e,i){for(var o,u=0,a=1,c=1,f=1,s=0,l=0;n.abs((c-l)/c)>i;)l=c,a=f+(o=-(r+s)*(r+e+s)*t/(r+2*s)/(r+2*s+1))*a,c=(u=c+o*u)+(o=(s+=1)*(e-s)*t/(r+2*s-1)/(r+2*s))*c,u/=f=a+o*f,a/=f,c/=f,f=1;return c/r}function e(r,e,i){var o=[.9815606342467192,.9041172563704749,.7699026741943047,.5873179542866175,.3678314989981802,.1252334085114689],u=[.04717533638651183,.10693932599531843,.16007832854334622,.20316742672306592,.2334925365383548,.24914704581340277],a=.5*r;if(a>=8)return 1;var c,f=2*t.normal.cdf(a,0,1,1,0)-1;f=f>=n.exp(-50/i)?n.pow(f,i):0;for(var s=a,l=(8-a)/(c=r>3?2:3),h=s+l,p=0,v=i-1,d=1;d<=c;d++){for(var g=0,y=.5*(h+s),m=.5*(h-s),_=1;_<=12;_++){var x,w=y+m*(6<_?o[(x=12-_+1)-1]:-o[(x=_)-1]),b=w*w;if(b>60)break;var A=2*t.normal.cdf(w,0,1,1,0)*.5-2*t.normal.cdf(w,r,1,1,0)*.5;A>=n.exp(-30/v)&&(g+=A=u[x-1]*n.exp(-.5*b)*n.pow(A,v))}p+=g*=2*m*i/n.sqrt(2*n.PI),s=h,h+=l}return(f+=p)<=n.exp(-30/e)?0:(f=n.pow(f,e))>=1?1:f}!function(n){for(var r=0;r<n.length;r++)!function(n){t[n]=function(t,n,r){return this instanceof arguments.callee?(this._a=t,this._b=n,this._c=r,this):new arguments.callee(t,n,r)},t.fn[n]=function(r,e,i){var o=t[n](r,e,i);return o.data=this,o},t[n].prototype.sample=function(r){var e=this._a,i=this._b,o=this._c;return r?t.alter(r,(function(){return t[n].sample(e,i,o)})):t[n].sample(e,i,o)},function(r){for(var e=0;e<r.length;e++)!function(r){t[n].prototype[r]=function(e){var i=this._a,o=this._b,u=this._c;return e||0===e||(e=this.data),"number"!=typeof e?t.fn.map.call(e,(function(e){return t[n][r](e,i,o,u)})):t[n][r](e,i,o,u)}}(r[e])}("pdf cdf inv".split(" ")),function(r){for(var e=0;e<r.length;e++)!function(r){t[n].prototype[r]=function(){return t[n][r](this._a,this._b,this._c)}}(r[e])}("mean median mode variance".split(" "))}(n[r])}("beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy laplace lognormal noncentralt normal pareto studentt weibull uniform binomial negbin hypgeom poisson triangular tukey arcsine".split(" ")),t.extend(t.beta,{pdf:function(r,e,i){return r>1||r<0?0:1==e&&1==i?1:e<512&&i<512?n.pow(r,e-1)*n.pow(1-r,i-1)/t.betafn(e,i):n.exp((e-1)*n.log(r)+(i-1)*n.log(1-r)-t.betaln(e,i))},cdf:function(n,r,e){return n>1||n<0?1*(n>1):t.ibeta(n,r,e)},inv:function(n,r,e){return t.ibetainv(n,r,e)},mean:function(t,n){return t/(t+n)},median:function(n,r){return t.ibetainv(.5,n,r)},mode:function(t,n){return(t-1)/(t+n-2)},sample:function(n,r){var e=t.randg(n);return e/(e+t.randg(r))},variance:function(t,r){return t*r/(n.pow(t+r,2)*(t+r+1))}}),t.extend(t.centralF,{pdf:function(r,e,i){var o;return r<0?0:e<=2?0===r&&e<2?1/0:0===r&&2===e?1:1/t.betafn(e/2,i/2)*n.pow(e/i,e/2)*n.pow(r,e/2-1)*n.pow(1+e/i*r,-(e+i)/2):(o=e*r/(i+r*e),e*(i/(i+r*e))/2*t.binomial.pdf((e-2)/2,(e+i-2)/2,o))},cdf:function(n,r,e){return n<0?0:t.ibeta(r*n/(r*n+e),r/2,e/2)},inv:function(n,r,e){return e/(r*(1/t.ibetainv(n,r/2,e/2)-1))},mean:function(t,n){return n>2?n/(n-2):void 0},mode:function(t,n){return t>2?n*(t-2)/(t*(n+2)):void 0},sample:function(n,r){return 2*t.randg(n/2)/n/(2*t.randg(r/2)/r)},variance:function(t,n){if(!(n<=4))return 2*n*n*(t+n-2)/(t*(n-2)*(n-2)*(n-4))}}),t.extend(t.cauchy,{pdf:function(t,r,e){return e<0?0:e/(n.pow(t-r,2)+n.pow(e,2))/n.PI},cdf:function(t,r,e){return n.atan((t-r)/e)/n.PI+.5},inv:function(t,r,e){return r+e*n.tan(n.PI*(t-.5))},median:function(t){return t},mode:function(t){return t},sample:function(r,e){return t.randn()*n.sqrt(1/(2*t.randg(.5)))*e+r}}),t.extend(t.chisquare,{pdf:function(r,e){return r<0?0:0===r&&2===e?.5:n.exp((e/2-1)*n.log(r)-r/2-e/2*n.log(2)-t.gammaln(e/2))},cdf:function(n,r){return n<0?0:t.lowRegGamma(r/2,n/2)},inv:function(n,r){return 2*t.gammapinv(n,.5*r)},mean:function(t){return t},median:function(t){return t*n.pow(1-2/(9*t),3)},mode:function(t){return t-2>0?t-2:0},sample:function(n){return 2*t.randg(n/2)},variance:function(t){return 2*t}}),t.extend(t.exponential,{pdf:function(t,r){return t<0?0:r*n.exp(-r*t)},cdf:function(t,r){return t<0?0:1-n.exp(-r*t)},inv:function(t,r){return-n.log(1-t)/r},mean:function(t){return 1/t},median:function(t){return 1/t*n.log(2)},mode:function(){return 0},sample:function(r){return-1/r*n.log(t._random_fn())},variance:function(t){return n.pow(t,-2)}}),t.extend(t.gamma,{pdf:function(r,e,i){return r<0?0:0===r&&1===e?1/i:n.exp((e-1)*n.log(r)-r/i-t.gammaln(e)-e*n.log(i))},cdf:function(n,r,e){return n<0?0:t.lowRegGamma(r,n/e)},inv:function(n,r,e){return t.gammapinv(n,r)*e},mean:function(t,n){return t*n},mode:function(t,n){if(t>1)return(t-1)*n},sample:function(n,r){return t.randg(n)*r},variance:function(t,n){return t*n*n}}),t.extend(t.invgamma,{pdf:function(r,e,i){return r<=0?0:n.exp(-(e+1)*n.log(r)-i/r-t.gammaln(e)+e*n.log(i))},cdf:function(n,r,e){return n<=0?0:1-t.lowRegGamma(r,e/n)},inv:function(n,r,e){return e/t.gammapinv(1-n,r)},mean:function(t,n){return t>1?n/(t-1):void 0},mode:function(t,n){return n/(t+1)},sample:function(n,r){return r/t.randg(n)},variance:function(t,n){if(!(t<=2))return n*n/((t-1)*(t-1)*(t-2))}}),t.extend(t.kumaraswamy,{pdf:function(t,r,e){return 0===t&&1===r?e:1===t&&1===e?r:n.exp(n.log(r)+n.log(e)+(r-1)*n.log(t)+(e-1)*n.log(1-n.pow(t,r)))},cdf:function(t,r,e){return t<0?0:t>1?1:1-n.pow(1-n.pow(t,r),e)},inv:function(t,r,e){return n.pow(1-n.pow(1-t,1/e),1/r)},mean:function(n,r){return r*t.gammafn(1+1/n)*t.gammafn(r)/t.gammafn(1+1/n+r)},median:function(t,r){return n.pow(1-n.pow(2,-1/r),1/t)},mode:function(t,r){if(t>=1&&r>=1&&1!==t&&1!==r)return n.pow((t-1)/(t*r-1),1/t)},variance:function(){throw new Error("variance not yet implemented")}}),t.extend(t.lognormal,{pdf:function(t,r,e){return t<=0?0:n.exp(-n.log(t)-.5*n.log(2*n.PI)-n.log(e)-n.pow(n.log(t)-r,2)/(2*e*e))},cdf:function(r,e,i){return r<0?0:.5+.5*t.erf((n.log(r)-e)/n.sqrt(2*i*i))},inv:function(r,e,i){return n.exp(-1.4142135623730951*i*t.erfcinv(2*r)+e)},mean:function(t,r){return n.exp(t+r*r/2)},median:function(t){return n.exp(t)},mode:function(t,r){return n.exp(t-r*r)},sample:function(r,e){return n.exp(t.randn()*e+r)},variance:function(t,r){return(n.exp(r*r)-1)*n.exp(2*t+r*r)}}),t.extend(t.noncentralt,{pdf:function(r,e,i){return n.abs(i)<1e-14?t.studentt.pdf(r,e):n.abs(r)<1e-14?n.exp(t.gammaln((e+1)/2)-i*i/2-.5*n.log(n.PI*e)-t.gammaln(e/2)):e/r*(t.noncentralt.cdf(r*n.sqrt(1+2/e),e+2,i)-t.noncentralt.cdf(r,e,i))},cdf:function(r,e,i){if(n.abs(i)<1e-14)return t.studentt.cdf(r,e);var o=!1;r<0&&(o=!0,i=-i);for(var u=t.normal.cdf(-i,0,1),a=1e-14+1,c=a,f=r*r/(r*r+e),s=0,l=n.exp(-i*i/2),h=n.exp(-i*i/2-.5*n.log(2)-t.gammaln(1.5))*i;s<200||c>1e-14||a>1e-14;)c=a,s>0&&(l*=i*i/(2*s),h*=i*i/(2*(s+.5))),u+=.5*(a=l*t.beta.cdf(f,s+.5,e/2)+h*t.beta.cdf(f,s+1,e/2)),s++;return o?1-u:u}}),t.extend(t.normal,{pdf:function(t,r,e){return n.exp(-.5*n.log(2*n.PI)-n.log(e)-n.pow(t-r,2)/(2*e*e))},cdf:function(r,e,i){return.5*(1+t.erf((r-e)/n.sqrt(2*i*i)))},inv:function(n,r,e){return-1.4142135623730951*e*t.erfcinv(2*n)+r},mean:function(t){return t},median:function(t){return t},mode:function(t){return t},sample:function(n,r){return t.randn()*r+n},variance:function(t,n){return n*n}}),t.extend(t.pareto,{pdf:function(t,r,e){return t<r?0:e*n.pow(r,e)/n.pow(t,e+1)},cdf:function(t,r,e){return t<r?0:1-n.pow(r/t,e)},inv:function(t,r,e){return r/n.pow(1-t,1/e)},mean:function(t,r){if(!(r<=1))return r*n.pow(t,r)/(r-1)},median:function(t,r){return t*(r*n.SQRT2)},mode:function(t){return t},variance:function(t,r){if(!(r<=2))return t*t*r/(n.pow(r-1,2)*(r-2))}}),t.extend(t.studentt,{pdf:function(r,e){return e=e>1e100?1e100:e,1/(n.sqrt(e)*t.betafn(.5,e/2))*n.pow(1+r*r/e,-(e+1)/2)},cdf:function(r,e){var i=e/2;return t.ibeta((r+n.sqrt(r*r+e))/(2*n.sqrt(r*r+e)),i,i)},inv:function(r,e){var i=t.ibetainv(2*n.min(r,1-r),.5*e,.5);return i=n.sqrt(e*(1-i)/i),r>.5?i:-i},mean:function(t){return t>1?0:void 0},median:function(){return 0},mode:function(){return 0},sample:function(r){return t.randn()*n.sqrt(r/(2*t.randg(r/2)))},variance:function(t){return t>2?t/(t-2):t>1?1/0:void 0}}),t.extend(t.weibull,{pdf:function(t,r,e){return t<0||r<0||e<0?0:e/r*n.pow(t/r,e-1)*n.exp(-n.pow(t/r,e))},cdf:function(t,r,e){return t<0?0:1-n.exp(-n.pow(t/r,e))},inv:function(t,r,e){return r*n.pow(-n.log(1-t),1/e)},mean:function(n,r){return n*t.gammafn(1+1/r)},median:function(t,r){return t*n.pow(n.log(2),1/r)},mode:function(t,r){return r<=1?0:t*n.pow((r-1)/r,1/r)},sample:function(r,e){return r*n.pow(-n.log(t._random_fn()),1/e)},variance:function(r,e){return r*r*t.gammafn(1+2/e)-n.pow(t.weibull.mean(r,e),2)}}),t.extend(t.uniform,{pdf:function(t,n,r){return t<n||t>r?0:1/(r-n)},cdf:function(t,n,r){return t<n?0:t<r?(t-n)/(r-n):1},inv:function(t,n,r){return n+t*(r-n)},mean:function(t,n){return.5*(t+n)},median:function(n,r){return t.mean(n,r)},mode:function(){throw new Error("mode is not yet implemented")},sample:function(n,r){return n/2+r/2+(r/2-n/2)*(2*t._random_fn()-1)},variance:function(t,r){return n.pow(r-t,2)/12}}),t.extend(t.binomial,{pdf:function(r,e,i){return 0===i||1===i?e*i===r?1:0:t.combination(e,r)*n.pow(i,r)*n.pow(1-i,e-r)},cdf:function(e,i,o){var u;if(e<0)return 0;if(e>=i)return 1;if(o<0||o>1||i<=0)return NaN;var a=o,c=(e=n.floor(e))+1,f=i-e,s=c+f,l=n.exp(t.gammaln(s)-t.gammaln(f)-t.gammaln(c)+c*n.log(a)+f*n.log(1-a));return u=a<(c+1)/(s+2)?l*r(a,c,f,1e-10):1-l*r(1-a,f,c,1e-10),n.round(1/1e-10*(1-u))/(1/1e-10)}}),t.extend(t.negbin,{pdf:function(r,e,i){return r===r>>>0&&(r<0?0:t.combination(r+e-1,e-1)*n.pow(1-i,r)*n.pow(i,e))},cdf:function(n,r,e){var i=0,o=0;if(n<0)return 0;for(;o<=n;o++)i+=t.negbin.pdf(o,r,e);return i}}),t.extend(t.hypgeom,{pdf:function(r,e,i,o){if(r!=r|0)return!1;if(r<0||r<i-(e-o))return 0;if(r>o||r>i)return 0;if(2*i>e)return 2*o>e?t.hypgeom.pdf(e-i-o+r,e,e-i,e-o):t.hypgeom.pdf(o-r,e,e-i,o);if(2*o>e)return t.hypgeom.pdf(i-r,e,i,e-o);if(i<o)return t.hypgeom.pdf(r,e,o,i);for(var u=1,a=0,c=0;c<r;c++){for(;u>1&&a<o;)u*=1-i/(e-a),a++;u*=(o-c)*(i-c)/((c+1)*(e-i-o+c+1))}for(;a<o;a++)u*=1-i/(e-a);return n.min(1,n.max(0,u))},cdf:function(r,e,i,o){if(r<0||r<i-(e-o))return 0;if(r>=o||r>=i)return 1;if(2*i>e)return 2*o>e?t.hypgeom.cdf(e-i-o+r,e,e-i,e-o):1-t.hypgeom.cdf(o-r-1,e,e-i,o);if(2*o>e)return 1-t.hypgeom.cdf(i-r-1,e,i,e-o);if(i<o)return t.hypgeom.cdf(r,e,o,i);for(var u=1,a=1,c=0,f=0;f<r;f++){for(;u>1&&c<o;){var s=1-i/(e-c);a*=s,u*=s,c++}u+=a*=(o-f)*(i-f)/((f+1)*(e-i-o+f+1))}for(;c<o;c++)u*=1-i/(e-c);return n.min(1,n.max(0,u))}}),t.extend(t.poisson,{pdf:function(r,e){return e<0||r%1!=0||r<0?0:n.pow(e,r)*n.exp(-e)/t.factorial(r)},cdf:function(n,r){var e=[],i=0;if(n<0)return 0;for(;i<=n;i++)e.push(t.poisson.pdf(i,r));return t.sum(e)},mean:function(t){return t},variance:function(t){return t},sampleSmall:function(r){var e=1,i=0,o=n.exp(-r);do{i++,e*=t._random_fn()}while(e>o);return i-1},sampleLarge:function(r){var e,i,o,u,a,c,f,s,l,h,p=r;for(u=n.sqrt(p),a=n.log(p),c=.02483*(f=.931+2.53*u)-.059,s=1.1239+1.1328/(f-3.4),l=.9277-3.6224/(f-2);;){if(i=n.random()-.5,o=n.random(),h=.5-n.abs(i),e=n.floor((2*c/h+f)*i+p+.43),h>=.07&&o<=l)return e;if(!(e<0||h<.013&&o>h)&&n.log(o)+n.log(s)-n.log(c/(h*h)+f)<=e*a-p-t.loggam(e+1))return e}},sample:function(t){return t<10?this.sampleSmall(t):this.sampleLarge(t)}}),t.extend(t.triangular,{pdf:function(t,n,r,e){return r<=n||e<n||e>r?NaN:t<n||t>r?0:t<e?2*(t-n)/((r-n)*(e-n)):t===e?2/(r-n):2*(r-t)/((r-n)*(r-e))},cdf:function(t,r,e,i){return e<=r||i<r||i>e?NaN:t<=r?0:t>=e?1:t<=i?n.pow(t-r,2)/((e-r)*(i-r)):1-n.pow(e-t,2)/((e-r)*(e-i))},inv:function(t,r,e,i){return e<=r||i<r||i>e?NaN:t<=(i-r)/(e-r)?r+(e-r)*n.sqrt(t*((i-r)/(e-r))):r+(e-r)*(1-n.sqrt((1-t)*(1-(i-r)/(e-r))))},mean:function(t,n,r){return(t+n+r)/3},median:function(t,r,e){return e<=(t+r)/2?r-n.sqrt((r-t)*(r-e))/n.sqrt(2):e>(t+r)/2?t+n.sqrt((r-t)*(e-t))/n.sqrt(2):void 0},mode:function(t,n,r){return r},sample:function(r,e,i){var o=t._random_fn();return o<(i-r)/(e-r)?r+n.sqrt(o*(e-r)*(i-r)):e-n.sqrt((1-o)*(e-r)*(e-i))},variance:function(t,n,r){return(t*t+n*n+r*r-t*n-t*r-n*r)/18}}),t.extend(t.arcsine,{pdf:function(t,r,e){return e<=r?NaN:t<=r||t>=e?0:2/n.PI*n.pow(n.pow(e-r,2)-n.pow(2*t-r-e,2),-.5)},cdf:function(t,r,e){return t<r?0:t<e?2/n.PI*n.asin(n.sqrt((t-r)/(e-r))):1},inv:function(t,r,e){return r+(.5-.5*n.cos(n.PI*t))*(e-r)},mean:function(t,n){return n<=t?NaN:(t+n)/2},median:function(t,n){return n<=t?NaN:(t+n)/2},mode:function(){throw new Error("mode is not yet implemented")},sample:function(r,e){return(r+e)/2+(e-r)/2*n.sin(2*n.PI*t.uniform.sample(0,1))},variance:function(t,r){return r<=t?NaN:n.pow(r-t,2)/8}}),t.extend(t.laplace,{pdf:function(t,r,e){return e<=0?0:n.exp(-n.abs(t-r)/e)/(2*e)},cdf:function(t,r,e){return e<=0?0:t<r?.5*n.exp((t-r)/e):1-.5*n.exp(-(t-r)/e)},mean:function(t){return t},median:function(t){return t},mode:function(t){return t},variance:function(t,n){return 2*n*n},sample:function(r,e){var i,o=t._random_fn()-.5;return r-e*((i=o)/n.abs(i))*n.log(1-2*n.abs(o))}}),t.extend(t.tukey,{cdf:function(r,i,o){var u=i,a=[.9894009349916499,.9445750230732326,.8656312023878318,.755404408355003,.6178762444026438,.45801677765722737,.2816035507792589,.09501250983763744],c=[.027152459411754096,.062253523938647894,.09515851168249279,.12462897125553388,.14959598881657674,.16915651939500254,.18260341504492358,.1894506104550685];if(r<=0)return 0;if(o<2||u<2)return NaN;if(!Number.isFinite(r))return 1;if(o>25e3)return e(r,1,u);var f,s=.5*o,l=s*n.log(o)-o*n.log(2)-t.gammaln(s),h=s-1,p=.25*o;f=o<=100?1:o<=800?.5:o<=5e3?.25:.125,l+=n.log(f);for(var v=0,d=1;d<=50;d++){for(var g=0,y=(2*d-1)*f,m=1;m<=16;m++){var _,x;8<m?(_=m-8-1,x=l+h*n.log(y+a[_]*f)-(a[_]*f+y)*p):(_=m-1,x=l+h*n.log(y-a[_]*f)+(a[_]*f-y)*p),x>=-30&&(g+=e(8<m?r*n.sqrt(.5*(a[_]*f+y)):r*n.sqrt(.5*(-a[_]*f+y)),1,u)*c[_]*n.exp(x))}if(d*f>=1&&g<=1e-14)break;v+=g}if(g>1e-14)throw new Error("tukey.cdf failed to converge");return v>1&&(v=1),v},inv:function(r,e,i){if(i<2||e<2)return NaN;if(r<0||r>1)return NaN;if(0===r)return 0;if(1===r)return 1/0;var o,u=function(t,r,e){var i=.5-.5*t,o=n.sqrt(n.log(1/(i*i))),u=o+((((-453642210148e-16*o-.204231210125)*o-.342242088547)*o-1)*o+.322232421088)/((((.0038560700634*o+.10353775285)*o+.531103462366)*o+.588581570495)*o+.099348462606);e<120&&(u+=(u*u*u+u)/e/4);var a=.8832-.2368*u;return e<120&&(a+=-1.214/e+1.208*u/e),u*(a*n.log(r-1)+1.4142)}(r,e,i),a=t.tukey.cdf(u,e,i)-r;o=a>0?n.max(0,u-1):u+1;for(var c,f=t.tukey.cdf(o,e,i)-r,s=1;s<50;s++)if(c=o-f*(o-u)/(f-a),a=f,u=o,c<0&&(c=0,f=-r),f=t.tukey.cdf(c,e,i)-r,o=c,n.abs(o-u)<1e-4)return c;throw new Error("tukey.inv failed to converge")}})}(e,Math),function(t,n){var r,e,i=Array.prototype.push,o=t.utils.isArray;function u(n){return o(n)||n instanceof t}t.extend({add:function(n,r){return u(r)?(u(r[0])||(r=[r]),t.map(n,(function(t,n,e){return t+r[n][e]}))):t.map(n,(function(t){return t+r}))},subtract:function(n,r){return u(r)?(u(r[0])||(r=[r]),t.map(n,(function(t,n,e){return t-r[n][e]||0}))):t.map(n,(function(t){return t-r}))},divide:function(n,r){return u(r)?(u(r[0])||(r=[r]),t.multiply(n,t.inv(r))):t.map(n,(function(t){return t/r}))},multiply:function(n,r){var e,i,o,a,c,f,s,l;if(void 0===n.length&&void 0===r.length)return n*r;if(c=n.length,f=n[0].length,s=t.zeros(c,o=u(r)?r[0].length:f),l=0,u(r)){for(;l<o;l++)for(e=0;e<c;e++){for(a=0,i=0;i<f;i++)a+=n[e][i]*r[i][l];s[e][l]=a}return 1===c&&1===l?s[0][0]:s}return t.map(n,(function(t){return t*r}))},outer:function(n,r){return t.multiply(n.map((function(t){return[t]})),[r])},dot:function(n,r){u(n[0])||(n=[n]),u(r[0])||(r=[r]);for(var e,i,o=1===n[0].length&&1!==n.length?t.transpose(n):n,a=1===r[0].length&&1!==r.length?t.transpose(r):r,c=[],f=0,s=o.length,l=o[0].length;f<s;f++){for(c[f]=[],e=0,i=0;i<l;i++)e+=o[f][i]*a[f][i];c[f]=e}return 1===c.length?c[0]:c},pow:function(r,e){return t.map(r,(function(t){return n.pow(t,e)}))},exp:function(r){return t.map(r,(function(t){return n.exp(t)}))},log:function(r){return t.map(r,(function(t){return n.log(t)}))},abs:function(r){return t.map(r,(function(t){return n.abs(t)}))},norm:function(t,r){var e=0,i=0;for(isNaN(r)&&(r=2),u(t[0])&&(t=t[0]);i<t.length;i++)e+=n.pow(n.abs(t[i]),r);return n.pow(e,1/r)},angle:function(r,e){return n.acos(t.dot(r,e)/(t.norm(r)*t.norm(e)))},aug:function(t,n){var r,e=[];for(r=0;r<t.length;r++)e.push(t[r].slice());for(r=0;r<e.length;r++)i.apply(e[r],n[r]);return e},inv:function(n){for(var r,e=n.length,i=n[0].length,o=t.identity(e,i),u=t.gauss_jordan(n,o),a=[],c=0;c<e;c++)for(a[c]=[],r=i;r<u[0].length;r++)a[c][r-i]=u[c][r];return a},det:function(t){var n,r=t.length,e=2*r,i=new Array(e),o=r-1,u=e-1,a=o-r+1,c=u,f=0,s=0;if(2===r)return t[0][0]*t[1][1]-t[0][1]*t[1][0];for(;f<e;f++)i[f]=1;for(f=0;f<r;f++){for(n=0;n<r;n++)i[a<0?a+r:a]*=t[f][n],i[c<r?c+r:c]*=t[f][n],a++,c--;a=--o-r+1,c=--u}for(f=0;f<r;f++)s+=i[f];for(;f<e;f++)s-=i[f];return s},gauss_elimination:function(r,e){var i,o,u,a,c=0,f=0,s=r.length,l=r[0].length,h=1,p=0,v=[];for(i=(r=t.aug(r,e))[0].length,c=0;c<s;c++){for(o=r[c][c],f=c,a=c+1;a<l;a++)o<n.abs(r[a][c])&&(o=r[a][c],f=a);if(f!=c)for(a=0;a<i;a++)u=r[c][a],r[c][a]=r[f][a],r[f][a]=u;for(f=c+1;f<s;f++)for(h=r[f][c]/r[c][c],a=c;a<i;a++)r[f][a]=r[f][a]-h*r[c][a]}for(c=s-1;c>=0;c--){for(p=0,f=c+1;f<=s-1;f++)p+=v[f]*r[c][f];v[c]=(r[c][i-1]-p)/r[c][c]}return v},gauss_jordan:function(r,e){var i,o,u,a=t.aug(r,e),c=a.length,f=a[0].length,s=0;for(o=0;o<c;o++){var l=o;for(u=o+1;u<c;u++)n.abs(a[u][o])>n.abs(a[l][o])&&(l=u);var h=a[o];for(a[o]=a[l],a[l]=h,u=o+1;u<c;u++)for(s=a[u][o]/a[o][o],i=o;i<f;i++)a[u][i]-=a[o][i]*s}for(o=c-1;o>=0;o--){for(s=a[o][o],u=0;u<o;u++)for(i=f-1;i>o-1;i--)a[u][i]-=a[o][i]*a[u][o]/s;for(a[o][o]/=s,i=c;i<f;i++)a[o][i]/=s}return a},triaUpSolve:function(n,r){var e,i=n[0].length,o=t.zeros(1,i)[0],u=!1;return null!=r[0].length&&(r=r.map((function(t){return t[0]})),u=!0),t.arange(i-1,-1,-1).forEach((function(u){e=t.arange(u+1,i).map((function(t){return o[t]*n[u][t]})),o[u]=(r[u]-t.sum(e))/n[u][u]})),u?o.map((function(t){return[t]})):o},triaLowSolve:function(n,r){var e,i=n[0].length,o=t.zeros(1,i)[0],u=!1;return null!=r[0].length&&(r=r.map((function(t){return t[0]})),u=!0),t.arange(i).forEach((function(i){e=t.arange(i).map((function(t){return n[i][t]*o[t]})),o[i]=(r[i]-t.sum(e))/n[i][i]})),u?o.map((function(t){return[t]})):o},lu:function(n){var r,e=n.length,i=t.identity(e),o=t.zeros(n.length,n[0].length);return t.arange(e).forEach((function(t){o[0][t]=n[0][t]})),t.arange(1,e).forEach((function(u){t.arange(u).forEach((function(e){r=t.arange(e).map((function(t){return i[u][t]*o[t][e]})),i[u][e]=(n[u][e]-t.sum(r))/o[e][e]})),t.arange(u,e).forEach((function(e){r=t.arange(u).map((function(t){return i[u][t]*o[t][e]})),o[u][e]=n[r.length][e]-t.sum(r)}))})),[i,o]},cholesky:function(r){var e,i=r.length,o=t.zeros(r.length,r[0].length);return t.arange(i).forEach((function(u){e=t.arange(u).map((function(t){return n.pow(o[u][t],2)})),o[u][u]=n.sqrt(r[u][u]-t.sum(e)),t.arange(u+1,i).forEach((function(n){e=t.arange(u).map((function(t){return o[u][t]*o[n][t]})),o[n][u]=(r[u][n]-t.sum(e))/o[u][u]}))})),o},gauss_jacobi:function(r,e,i,o){for(var u,a,c,f,s=0,l=0,h=r.length,p=[],v=[],d=[];s<h;s++)for(p[s]=[],v[s]=[],d[s]=[],l=0;l<h;l++)s>l?(p[s][l]=r[s][l],v[s][l]=d[s][l]=0):s<l?(v[s][l]=r[s][l],p[s][l]=d[s][l]=0):(d[s][l]=r[s][l],p[s][l]=v[s][l]=0);for(c=t.multiply(t.multiply(t.inv(d),t.add(p,v)),-1),a=t.multiply(t.inv(d),e),u=i,f=t.add(t.multiply(c,i),a),s=2;n.abs(t.norm(t.subtract(f,u)))>o;)u=f,f=t.add(t.multiply(c,u),a),s++;return f},gauss_seidel:function(r,e,i,o){for(var u,a,c,f,s,l=0,h=r.length,p=[],v=[],d=[];l<h;l++)for(p[l]=[],v[l]=[],d[l]=[],u=0;u<h;u++)l>u?(p[l][u]=r[l][u],v[l][u]=d[l][u]=0):l<u?(v[l][u]=r[l][u],p[l][u]=d[l][u]=0):(d[l][u]=r[l][u],p[l][u]=v[l][u]=0);for(f=t.multiply(t.multiply(t.inv(t.add(d,p)),v),-1),c=t.multiply(t.inv(t.add(d,p)),e),a=i,s=t.add(t.multiply(f,i),c),l=2;n.abs(t.norm(t.subtract(s,a)))>o;)a=s,s=t.add(t.multiply(f,a),c),l+=1;return s},SOR:function(r,e,i,o,u){for(var a,c,f,s,l,h=0,p=r.length,v=[],d=[],g=[];h<p;h++)for(v[h]=[],d[h]=[],g[h]=[],a=0;a<p;a++)h>a?(v[h][a]=r[h][a],d[h][a]=g[h][a]=0):h<a?(d[h][a]=r[h][a],v[h][a]=g[h][a]=0):(g[h][a]=r[h][a],v[h][a]=d[h][a]=0);for(s=t.multiply(t.inv(t.add(g,t.multiply(v,u))),t.subtract(t.multiply(g,1-u),t.multiply(d,u))),f=t.multiply(t.multiply(t.inv(t.add(g,t.multiply(v,u))),e),u),c=i,l=t.add(t.multiply(s,i),f),h=2;n.abs(t.norm(t.subtract(l,c)))>o;)c=l,l=t.add(t.multiply(s,c),f),h++;return l},householder:function(r){for(var e,i,o,u,a=r.length,c=r[0].length,f=0,s=[],l=[];f<a-1;f++){for(e=0,u=f+1;u<c;u++)e+=r[u][f]*r[u][f];for(e=(r[f+1][f]>0?-1:1)*n.sqrt(e),i=n.sqrt((e*e-r[f+1][f]*e)/2),(s=t.zeros(a,1))[f+1][0]=(r[f+1][f]-e)/(2*i),o=f+2;o<a;o++)s[o][0]=r[o][f]/(2*i);l=t.subtract(t.identity(a,c),t.multiply(t.multiply(s,t.transpose(s)),2)),r=t.multiply(l,t.multiply(r,l))}return r},QR:(r=t.sum,e=t.arange,function(i){var o,u,a,c=i.length,f=i[0].length,s=t.zeros(f,f);for(i=t.copy(i),u=0;u<f;u++){for(s[u][u]=n.sqrt(r(e(c).map((function(t){return i[t][u]*i[t][u]})))),o=0;o<c;o++)i[o][u]=i[o][u]/s[u][u];for(a=u+1;a<f;a++)for(s[u][a]=r(e(c).map((function(t){return i[t][u]*i[t][a]}))),o=0;o<c;o++)i[o][a]=i[o][a]-i[o][u]*s[u][a]}return[i,s]}),lstsq:function(n,r){var e=!1;void 0===r[0].length&&(r=r.map((function(t){return[t]})),e=!0);var i=t.QR(n),o=i[0],u=i[1],a=n[0].length,c=t.slice(o,{col:{end:a}}),f=function(n){var r=(n=t.copy(n)).length,e=t.identity(r);return t.arange(r-1,-1,-1).forEach((function(r){t.sliceAssign(e,{row:r},t.divide(t.slice(e,{row:r}),n[r][r])),t.sliceAssign(n,{row:r},t.divide(t.slice(n,{row:r}),n[r][r])),t.arange(r).forEach((function(i){var o=t.multiply(n[i][r],-1),u=t.slice(n,{row:i}),a=t.multiply(t.slice(n,{row:r}),o);t.sliceAssign(n,{row:i},t.add(u,a));var c=t.slice(e,{row:i}),f=t.multiply(t.slice(e,{row:r}),o);t.sliceAssign(e,{row:i},t.add(c,f))}))})),e}(t.slice(u,{row:{end:a}})),s=t.transpose(c);void 0===s[0].length&&(s=[s]);var l=t.multiply(t.multiply(f,s),r);return void 0===l.length&&(l=[[l]]),e?l.map((function(t){return t[0]})):l},jacobi:function(r){for(var e,i,o,u,a,c,f,s=1,l=r.length,h=t.identity(l,l),p=[];1===s;){for(a=r[0][1],o=0,u=1,e=0;e<l;e++)for(i=0;i<l;i++)e!=i&&a<n.abs(r[e][i])&&(a=n.abs(r[e][i]),o=e,u=i);for(c=r[o][o]===r[u][u]?r[o][u]>0?n.PI/4:-n.PI/4:n.atan(2*r[o][u]/(r[o][o]-r[u][u]))/2,(f=t.identity(l,l))[o][o]=n.cos(c),f[o][u]=-n.sin(c),f[u][o]=n.sin(c),f[u][u]=n.cos(c),h=t.multiply(h,f),r=t.multiply(t.multiply(t.inv(f),r),f),s=0,e=1;e<l;e++)for(i=1;i<l;i++)e!=i&&n.abs(r[e][i])>.001&&(s=1)}for(e=0;e<l;e++)p.push(r[e][e]);return[h,p]},rungekutta:function(t,n,r,e,i,o){var u,a,c;if(2===o)for(;e<=r;)i+=((u=n*t(e,i))+(a=n*t(e+n,i+u)))/2,e+=n;if(4===o)for(;e<=r;)i+=((u=n*t(e,i))+2*(a=n*t(e+n/2,i+u/2))+2*(c=n*t(e+n/2,i+a/2))+n*t(e+n,i+c))/6,e+=n;return i},romberg:function(t,r,e,i){for(var o,u,a,c,f,s=0,l=(e-r)/2,h=[],p=[],v=[];s<i/2;){for(f=t(r),a=r,c=0;a<=e;a+=l,c++)h[c]=a;for(o=h.length,a=1;a<o-1;a++)f+=(a%2!=0?4:2)*t(h[a]);f=l/3*(f+t(e)),v[s]=f,l/=2,s++}for(u=v.length,o=1;1!==u;){for(a=0;a<u-1;a++)p[a]=(n.pow(4,o)*v[a+1]-v[a])/(n.pow(4,o)-1);u=p.length,v=p,p=[],o++}return v},richardson:function(t,r,e,i){function o(t,n){for(var r,e=0,i=t.length;e<i;e++)t[e]===n&&(r=e);return r}for(var u,a,c,f,s,l=n.abs(e-t[o(t,e)+1]),h=0,p=[],v=[];i>=l;)u=o(t,e+i),a=o(t,e),p[h]=(r[u]-2*r[a]+r[2*a-u])/(i*i),i/=2,h++;for(f=p.length,c=1;1!=f;){for(s=0;s<f-1;s++)v[s]=(n.pow(4,c)*p[s+1]-p[s])/(n.pow(4,c)-1);f=v.length,p=v,v=[],c++}return p},simpson:function(t,n,r,e){for(var i,o=(r-n)/e,u=t(n),a=[],c=n,f=0,s=1;c<=r;c+=o,f++)a[f]=c;for(i=a.length;s<i-1;s++)u+=(s%2!=0?4:2)*t(a[s]);return o/3*(u+t(r))},hermite:function(t,n,r,e){for(var i,o=t.length,u=0,a=0,c=[],f=[],s=[],l=[];a<o;a++){for(c[a]=1,i=0;i<o;i++)a!=i&&(c[a]*=(e-t[i])/(t[a]-t[i]));for(f[a]=0,i=0;i<o;i++)a!=i&&(f[a]+=1/(t[a]-t[i]));s[a]=(1-2*(e-t[a])*f[a])*(c[a]*c[a]),l[a]=(e-t[a])*(c[a]*c[a]),u+=s[a]*n[a]+l[a]*r[a]}return u},lagrange:function(t,n,r){for(var e,i,o=0,u=0,a=t.length;u<a;u++){for(i=n[u],e=0;e<a;e++)u!=e&&(i*=(r-t[e])/(t[u]-t[e]));o+=i}return o},cubic_spline:function(n,r,e){for(var i,o,u=n.length,a=0,c=[],f=[],s=[],l=[],h=[],p=[];a<u-1;a++)l[a]=n[a+1]-n[a];for(s[0]=0,a=1;a<u-1;a++)s[a]=3/l[a]*(r[a+1]-r[a])-3/l[a-1]*(r[a]-r[a-1]);for(a=1;a<u-1;a++)c[a]=[],f[a]=[],c[a][a-1]=l[a-1],c[a][a]=2*(l[a-1]+l[a]),c[a][a+1]=l[a],f[a][0]=s[a];for(o=t.multiply(t.inv(c),f),i=0;i<u-1;i++)h[i]=(r[i+1]-r[i])/l[i]-l[i]*(o[i+1][0]+2*o[i][0])/3,p[i]=(o[i+1][0]-o[i][0])/(3*l[i]);for(i=0;i<u&&!(n[i]>e);i++);return r[i-=1]+(e-n[i])*h[i]+t.sq(e-n[i])*o[i]+(e-n[i])*t.sq(e-n[i])*p[i]},gauss_quadrature:function(){throw new Error("gauss_quadrature not yet implemented")},PCA:function(n){var r,e,i,o,u,a=n.length,c=n[0].length,f=0,s=[],l=[],h=[],p=[],v=[],d=[],g=[];for(f=0;f<a;f++)s[f]=t.sum(n[f])/c;for(f=0;f<c;f++)for(v[f]=[],r=0;r<a;r++)v[f][r]=n[r][f]-s[r];for(v=t.transpose(v),f=0;f<a;f++)for(d[f]=[],r=0;r<a;r++)d[f][r]=t.dot([v[f]],[v[r]])/(c-1);for(u=(i=t.jacobi(d))[0],l=i[1],g=t.transpose(u),f=0;f<l.length;f++)for(r=f;r<l.length;r++)l[f]<l[r]&&(e=l[f],l[f]=l[r],l[r]=e,h=g[f],g[f]=g[r],g[r]=h);for(o=t.transpose(v),f=0;f<a;f++)for(p[f]=[],r=0;r<o.length;r++)p[f][r]=t.dot([g[f]],[o[r]]);return[n,l,g,p]}}),function(n){for(var r=0;r<n.length;r++)!function(n){t.fn[n]=function(r,e){var i=this;return e?(setTimeout((function(){e.call(i,t.fn[n].call(i,r))}),15),this):"number"==typeof t[n](this,r)?t[n](this,r):t(t[n](this,r))}}(n[r])}("add divide multiply subtract dot pow exp log abs norm angle".split(" "))}(e,Math),function(t,n){var r=[].slice,e=t.utils.isNumber,i=t.utils.isArray;function o(t,r,e,i){if(t>1||e>1||t<=0||e<=0)throw new Error("Proportions should be greater than 0 and less than 1");var o=(t*r+e*i)/(r+i);return(t-e)/n.sqrt(o*(1-o)*(1/r+1/i))}t.extend({zscore:function(){var n=r.call(arguments);return e(n[1])?(n[0]-n[1])/n[2]:(n[0]-t.mean(n[1]))/t.stdev(n[1],n[2])},ztest:function(){var e,o=r.call(arguments);return i(o[1])?(e=t.zscore(o[0],o[1],o[3]),1===o[2]?t.normal.cdf(-n.abs(e),0,1):2*t.normal.cdf(-n.abs(e),0,1)):o.length>2?(e=t.zscore(o[0],o[1],o[2]),1===o[3]?t.normal.cdf(-n.abs(e),0,1):2*t.normal.cdf(-n.abs(e),0,1)):(e=o[0],1===o[1]?t.normal.cdf(-n.abs(e),0,1):2*t.normal.cdf(-n.abs(e),0,1))}}),t.extend(t.fn,{zscore:function(t,n){return(t-this.mean())/this.stdev(n)},ztest:function(r,e,i){var o=n.abs(this.zscore(r,i));return 1===e?t.normal.cdf(-o,0,1):2*t.normal.cdf(-o,0,1)}}),t.extend({tscore:function(){var e=r.call(arguments);return 4===e.length?(e[0]-e[1])/(e[2]/n.sqrt(e[3])):(e[0]-t.mean(e[1]))/(t.stdev(e[1],!0)/n.sqrt(e[1].length))},ttest:function(){var i,o=r.call(arguments);return 5===o.length?(i=n.abs(t.tscore(o[0],o[1],o[2],o[3])),1===o[4]?t.studentt.cdf(-i,o[3]-1):2*t.studentt.cdf(-i,o[3]-1)):e(o[1])?(i=n.abs(o[0]),1==o[2]?t.studentt.cdf(-i,o[1]-1):2*t.studentt.cdf(-i,o[1]-1)):(i=n.abs(t.tscore(o[0],o[1])),1==o[2]?t.studentt.cdf(-i,o[1].length-1):2*t.studentt.cdf(-i,o[1].length-1))}}),t.extend(t.fn,{tscore:function(t){return(t-this.mean())/(this.stdev(!0)/n.sqrt(this.cols()))},ttest:function(r,e){return 1===e?1-t.studentt.cdf(n.abs(this.tscore(r)),this.cols()-1):2*t.studentt.cdf(-n.abs(this.tscore(r)),this.cols()-1)}}),t.extend({anovafscore:function(){var e,i,o,u,a,c,f,s,l=r.call(arguments);if(1===l.length){for(a=new Array(l[0].length),f=0;f<l[0].length;f++)a[f]=l[0][f];l=a}for(i=new Array,f=0;f<l.length;f++)i=i.concat(l[f]);for(o=t.mean(i),e=0,f=0;f<l.length;f++)e+=l[f].length*n.pow(t.mean(l[f])-o,2);for(e/=l.length-1,c=0,f=0;f<l.length;f++)for(u=t.mean(l[f]),s=0;s<l[f].length;s++)c+=n.pow(l[f][s]-u,2);return e/(c/=i.length-l.length)},anovaftest:function(){var n,i,o,u,a=r.call(arguments);if(e(a[0]))return 1-t.centralF.cdf(a[0],a[1],a[2]);var c=t.anovafscore(a);for(n=a.length-1,o=0,u=0;u<a.length;u++)o+=a[u].length;return i=o-n-1,1-t.centralF.cdf(c,n,i)},ftest:function(n,r,e){return 1-t.centralF.cdf(n,r,e)}}),t.extend(t.fn,{anovafscore:function(){return t.anovafscore(this.toArray())},anovaftes:function(){var n,r=0;for(n=0;n<this.length;n++)r+=this[n].length;return t.ftest(this.anovafscore(),this.length-1,r-this.length)}}),t.extend({qscore:function(){var i,o,u,a,c,f=r.call(arguments);return e(f[0])?(i=f[0],o=f[1],u=f[2],a=f[3],c=f[4]):(i=t.mean(f[0]),o=t.mean(f[1]),u=f[0].length,a=f[1].length,c=f[2]),n.abs(i-o)/(c*n.sqrt((1/u+1/a)/2))},qtest:function(){var n,e=r.call(arguments);3===e.length?(n=e[0],e=e.slice(1)):7===e.length?(n=t.qscore(e[0],e[1],e[2],e[3],e[4]),e=e.slice(5)):(n=t.qscore(e[0],e[1],e[2]),e=e.slice(3));var i=e[0],o=e[1];return 1-t.tukey.cdf(n,o,i-o)},tukeyhsd:function(n){for(var r=t.pooledstdev(n),e=n.map((function(n){return t.mean(n)})),i=n.reduce((function(t,n){return t+n.length}),0),o=[],u=0;u<n.length;++u)for(var a=u+1;a<n.length;++a){var c=t.qtest(e[u],e[a],n[u].length,n[a].length,r,i,n.length);o.push([[u,a],c])}return o}}),t.extend({normalci:function(){var e,i=r.call(arguments),o=new Array(2);return e=4===i.length?n.abs(t.normal.inv(i[1]/2,0,1)*i[2]/n.sqrt(i[3])):n.abs(t.normal.inv(i[1]/2,0,1)*t.stdev(i[2])/n.sqrt(i[2].length)),o[0]=i[0]-e,o[1]=i[0]+e,o},tci:function(){var e,i=r.call(arguments),o=new Array(2);return e=4===i.length?n.abs(t.studentt.inv(i[1]/2,i[3]-1)*i[2]/n.sqrt(i[3])):n.abs(t.studentt.inv(i[1]/2,i[2].length-1)*t.stdev(i[2],!0)/n.sqrt(i[2].length)),o[0]=i[0]-e,o[1]=i[0]+e,o},significant:function(t,n){return t<n}}),t.extend(t.fn,{normalci:function(n,r){return t.normalci(n,r,this.toArray())},tci:function(n,r){return t.tci(n,r,this.toArray())}}),t.extend(t.fn,{oneSidedDifferenceOfProportions:function(n,r,e,i){var u=o(n,r,e,i);return t.ztest(u,1)},twoSidedDifferenceOfProportions:function(n,r,e,i){var u=o(n,r,e,i);return t.ztest(u,2)}})}(e,Math),e.models=function(){function t(t,n){var r=t.length,i=n[0].length-1,o=r-i-1,u=e.lstsq(n,t),a=e.multiply(n,u.map((function(t){return[t]}))).map((function(t){return t[0]})),c=e.subtract(t,a),f=e.mean(t),s=e.sum(a.map((function(t){return Math.pow(t-f,2)}))),l=e.sum(t.map((function(t,n){return Math.pow(t-a[n],2)}))),h=s+l;return{exog:n,endog:t,nobs:r,df_model:i,df_resid:o,coef:u,predict:a,resid:c,ybar:f,SST:h,SSE:s,SSR:l,R2:s/h}}function n(n){var r,i,o=(r=n.exog,i=r[0].length,e.arange(i).map((function(n){var o=e.arange(i).filter((function(t){return t!==n}));return t(e.col(r,n).map((function(t){return t[0]})),e.col(r,o))}))),u=Math.sqrt(n.SSR/n.df_resid),a=o.map((function(t){var n=t.SST,r=t.R2;return u/Math.sqrt(n*(1-r))})),c=n.coef.map((function(t,n){return(t-0)/a[n]})),f=c.map((function(t){var r=e.studentt.cdf(t,n.df_resid);return 2*(r>.5?1-r:r)})),s=e.studentt.inv(.975,n.df_resid),l=n.coef.map((function(t,n){var r=s*a[n];return[t-r,t+r]}));return{se:a,t:c,p:f,sigmaHat:u,interval95:l}}return{ols:function(r,i){var o=t(r,i),u=n(o),a=function(t){var n,r,i,o=t.R2/t.df_model/((1-t.R2)/t.df_resid);return{F_statistic:o,pvalue:1-(n=o,r=t.df_model,i=t.df_resid,e.beta.cdf(n/(i/r+n),r/2,i/2))}}(o),c=1-(1-o.R2)*((o.nobs-1)/o.df_resid);return o.t=u,o.f=a,o.adjust_R2=c,o}}}(),e.extend({buildxmatrix:function(){for(var t=new Array(arguments.length),n=0;n<arguments.length;n++){var r=[1];t[n]=r.concat(arguments[n])}return e(t)},builddxmatrix:function(){for(var t=new Array(arguments[0].length),n=0;n<arguments[0].length;n++){var r=[1];t[n]=r.concat(arguments[0][n])}return e(t)},buildjxmatrix:function(t){for(var n=new Array(t.length),r=0;r<t.length;r++)n[r]=t[r];return e.builddxmatrix(n)},buildymatrix:function(t){return e(t).transpose()},buildjymatrix:function(t){return t.transpose()},matrixmult:function(t,n){var r,i,o,u,a;if(t.cols()==n.rows()){if(n.rows()>1){for(u=[],r=0;r<t.rows();r++)for(u[r]=[],i=0;i<n.cols();i++){for(a=0,o=0;o<t.cols();o++)a+=t.toArray()[r][o]*n.toArray()[o][i];u[r][i]=a}return e(u)}for(u=[],r=0;r<t.rows();r++)for(u[r]=[],i=0;i<n.cols();i++){for(a=0,o=0;o<t.cols();o++)a+=t.toArray()[r][o]*n.toArray()[i];u[r][i]=a}return e(u)}},regress:function(t,n){var r=e.xtranspxinv(t),i=t.transpose(),o=e.matrixmult(e(r),i);return e.matrixmult(o,n)},regresst:function(t,n,r){var i=e.regress(t,n),o={anova:{}},u=e.jMatYBar(t,i);o.yBar=u;var a=n.mean();o.anova.residuals=e.residuals(n,u),o.anova.ssr=e.ssr(u,a),o.anova.msr=o.anova.ssr/(t[0].length-1),o.anova.sse=e.sse(n,u),o.anova.mse=o.anova.sse/(n.length-(t[0].length-1)-1),o.anova.sst=e.sst(n,a),o.anova.mst=o.anova.sst/(n.length-1),o.anova.r2=1-o.anova.sse/o.anova.sst,o.anova.r2<0&&(o.anova.r2=0),o.anova.fratio=o.anova.msr/o.anova.mse,o.anova.pvalue=e.anovaftest(o.anova.fratio,t[0].length-1,n.length-(t[0].length-1)-1),o.anova.rmse=Math.sqrt(o.anova.mse),o.anova.r2adj=1-o.anova.mse/o.anova.mst,o.anova.r2adj<0&&(o.anova.r2adj=0),o.stats=new Array(t[0].length);for(var c,f,s,l=e.xtranspxinv(t),h=0;h<i.length;h++)c=Math.sqrt(o.anova.mse*Math.abs(l[h][h])),f=Math.abs(i[h]/c),s=e.ttest(f,n.length-t[0].length-1,r),o.stats[h]=[i[h],c,f,s];return o.regress=i,o},xtranspx:function(t){return e.matrixmult(t.transpose(),t)},xtranspxinv:function(t){var n=e.matrixmult(t.transpose(),t);return e.inv(n)},jMatYBar:function(t,n){var r=e.matrixmult(t,n);return new e(r)},residuals:function(t,n){return e.matrixsubtract(t,n)},ssr:function(t,n){for(var r=0,e=0;e<t.length;e++)r+=Math.pow(t[e]-n,2);return r},sse:function(t,n){for(var r=0,e=0;e<t.length;e++)r+=Math.pow(t[e]-n[e],2);return r},sst:function(t,n){for(var r=0,e=0;e<t.length;e++)r+=Math.pow(t[e]-n,2);return r},matrixsubtract:function(t,n){for(var r=new Array(t.length),i=0;i<t.length;i++){r[i]=new Array(t[i].length);for(var o=0;o<t[i].length;o++)r[i][o]=t[i][o]-n[i][o]}return e(r)}}),e.jStat=e,e)},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(630);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(639);t.exports=e},,,,,,,function(t,n,r){t.exports=!r(8)&&!r(2)((function(){return 7!=Object.defineProperty(r(93)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(1),i=r(7),o=r(38),u=r(94),a=r(9).f;t.exports=function(t){var n=i.Symbol||(i.Symbol=o?{}:e.Symbol||{});"_"==t.charAt(0)||t in n||a(n,t,{value:u.f(t)})}},function(t,n,r){var e=r(17),i=r(19),o=r(70)(!1),u=r(95)("IE_PROTO");t.exports=function(t,n){var r,a=i(t),c=0,f=[];for(r in a)r!=u&&e(a,r)&&f.push(r);for(;n.length>c;)e(a,r=n[c++])&&(~o(f,r)||f.push(r));return f}},function(t,n,r){var e=r(9),i=r(3),o=r(39);t.exports=r(8)?Object.defineProperties:function(t,n){i(t);for(var r,u=o(n),a=u.length,c=0;a>c;)e.f(t,r=u[c++],n[r]);return t}},function(t,n,r){var e=r(19),i=r(42).f,o={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(t){return u.slice()}}(t):i(e(t))}},function(t,n,r){"use strict";var e=r(8),i=r(39),o=r(71),u=r(58),a=r(10),c=r(57),f=Object.assign;t.exports=!f||r(2)((function(){var t={},n={},r=Symbol(),e="abcdefghijklmnopqrst";return t[r]=7,e.split("").forEach((function(t){n[t]=t})),7!=f({},t)[r]||Object.keys(f({},n)).join("")!=e}))?function(t,n){for(var r=a(t),f=arguments.length,s=1,l=o.f,h=u.f;f>s;)for(var p,v=c(arguments[s++]),d=l?i(v).concat(l(v)):i(v),g=d.length,y=0;g>y;)p=d[y++],e&&!h.call(v,p)||(r[p]=v[p]);return r}:f},function(t,n){t.exports=Object.is||function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}},function(t,n,r){"use strict";var e=r(22),i=r(4),o=r(153),u=[].slice,a={},c=function(t,n,r){if(!(n in a)){for(var e=[],i=0;i<n;i++)e[i]="a["+i+"]";a[n]=Function("F,a","return new F("+e.join(",")+")")}return a[n](t,r)};t.exports=Function.bind||function(t){var n=e(this),r=u.call(arguments,1),a=function(){var e=r.concat(u.call(arguments));return this instanceof a?c(n,e.length,e):o(n,e,t)};return i(n.prototype)&&(a.prototype=n.prototype),a}},function(t,n){t.exports=function(t,n,r){var e=void 0===r;switch(n.length){case 0:return e?t():t.call(r);case 1:return e?t(n[0]):t.call(r,n[0]);case 2:return e?t(n[0],n[1]):t.call(r,n[0],n[1]);case 3:return e?t(n[0],n[1],n[2]):t.call(r,n[0],n[1],n[2]);case 4:return e?t(n[0],n[1],n[2],n[3]):t.call(r,n[0],n[1],n[2],n[3])}return t.apply(r,n)}},function(t,n,r){var e=r(1).parseInt,i=r(50).trim,o=r(99),u=/^[-+]?0[xX]/;t.exports=8!==e(o+"08")||22!==e(o+"0x16")?function(t,n){var r=i(String(t),3);return e(r,n>>>0||(u.test(r)?16:10))}:e},function(t,n,r){var e=r(1).parseFloat,i=r(50).trim;t.exports=1/e(r(99)+"-0")!=-1/0?function(t){var n=i(String(t),3),r=e(n);return 0===r&&"-"==n.charAt(0)?-0:r}:e},function(t,n,r){var e=r(28);t.exports=function(t,n){if("number"!=typeof t&&"Number"!=e(t))throw TypeError(n);return+t}},function(t,n,r){var e=r(4),i=Math.floor;t.exports=function(t){return!e(t)&&isFinite(t)&&i(t)===t}},function(t,n){t.exports=Math.log1p||function(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},function(t,n,r){"use strict";var e=r(41),i=r(36),o=r(49),u={};r(18)(u,r(5)("iterator"),(function(){return this})),t.exports=function(t,n,r){t.prototype=e(u,{next:i(1,r)}),o(t,n+" Iterator")}},function(t,n,r){var e=r(3);t.exports=function(t,n,r,i){try{return i?n(e(r)[0],r[1]):n(r)}catch(n){var o=t.return;throw void 0!==o&&e(o.call(t)),n}}},function(t,n,r){var e=r(358);t.exports=function(t,n){return new(e(t))(n)}},function(t,n,r){var e=r(22),i=r(10),o=r(57),u=r(6);t.exports=function(t,n,r,a,c){e(n);var f=i(t),s=o(f),l=u(f.length),h=c?l-1:0,p=c?-1:1;if(r<2)for(;;){if(h in s){a=s[h],h+=p;break}if(h+=p,c?h<0:l<=h)throw TypeError("Reduce of empty array with no initial value")}for(;c?h>=0:l>h;h+=p)h in s&&(a=n(a,s[h],h,f));return a}},function(t,n,r){"use strict";var e=r(10),i=r(40),o=r(6);t.exports=[].copyWithin||function(t,n){var r=e(this),u=o(r.length),a=i(t,u),c=i(n,u),f=arguments.length>2?arguments[2]:void 0,s=Math.min((void 0===f?u:i(f,u))-c,u-a),l=1;for(c<a&&a<c+s&&(l=-1,c+=s-1,a+=s-1);s-- >0;)c in r?r[a]=r[c]:delete r[a],a+=l,c+=l;return r}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,r){"use strict";var e=r(114);r(0)({target:"RegExp",proto:!0,forced:e!==/./.exec},{exec:e})},function(t,n,r){r(8)&&"g"!=/./g.flags&&r(9).f(RegExp.prototype,"flags",{configurable:!0,get:r(74)})},function(t,n,r){"use strict";var e,i,o,u,a=r(38),c=r(1),f=r(21),s=r(59),l=r(0),h=r(4),p=r(22),v=r(53),d=r(77),g=r(60),y=r(116).set,m=r(378)(),_=r(168),x=r(379),w=r(78),b=r(169),A=c.TypeError,M=c.process,S=M&&M.versions,E=S&&S.v8||"",N=c.Promise,j="process"==s(M),T=function(){},O=i=_.f,k=!!function(){try{var t=N.resolve(1),n=(t.constructor={})[r(5)("species")]=function(t){t(T,T)};return(j||"function"==typeof PromiseRejectionEvent)&&t.then(T)instanceof n&&0!==E.indexOf("6.6")&&-1===w.indexOf("Chrome/66")}catch(t){}}(),P=function(t){var n;return!(!h(t)||"function"!=typeof(n=t.then))&&n},C=function(t,n){if(!t._n){t._n=!0;var r=t._c;m((function(){for(var e=t._v,i=1==t._s,o=0,u=function(n){var r,o,u,a=i?n.ok:n.fail,c=n.resolve,f=n.reject,s=n.domain;try{a?(i||(2==t._h&&I(t),t._h=1),!0===a?r=e:(s&&s.enter(),r=a(e),s&&(s.exit(),u=!0)),r===n.promise?f(A("Promise-chain cycle")):(o=P(r))?o.call(r,c,f):c(r)):f(e)}catch(t){s&&!u&&s.exit(),f(t)}};r.length>o;)u(r[o++]);t._c=[],t._n=!1,n&&!t._h&&L(t)}))}},L=function(t){y.call(c,(function(){var n,r,e,i=t._v,o=F(t);if(o&&(n=x((function(){j?M.emit("unhandledRejection",i,t):(r=c.onunhandledrejection)?r({promise:t,reason:i}):(e=c.console)&&e.error&&e.error("Unhandled promise rejection",i)})),t._h=j||F(t)?2:1),t._a=void 0,o&&n.e)throw n.v}))},F=function(t){return 1!==t._h&&0===(t._a||t._c).length},I=function(t){y.call(c,(function(){var n;j?M.emit("rejectionHandled",t):(n=c.onrejectionhandled)&&n({promise:t,reason:t._v})}))},R=function(t){var n=this;n._d||(n._d=!0,(n=n._w||n)._v=t,n._s=2,n._a||(n._a=n._c.slice()),C(n,!0))},U=function(t){var n,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===t)throw A("Promise can't be resolved itself");(n=P(t))?m((function(){var e={_w:r,_d:!1};try{n.call(t,f(U,e,1),f(R,e,1))}catch(t){R.call(e,t)}})):(r._v=t,r._s=1,C(r,!1))}catch(t){R.call({_w:r,_d:!1},t)}}};k||(N=function(t){v(this,N,"Promise","_h"),p(t),e.call(this);try{t(f(U,this,1),f(R,this,1))}catch(t){R.call(this,t)}},(e=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=r(54)(N.prototype,{then:function(t,n){var r=O(g(this,N));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=j?M.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&C(this,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new e;this.promise=t,this.resolve=f(U,t,1),this.reject=f(R,t,1)},_.f=O=function(t){return t===N||t===u?new o(t):i(t)}),l(l.G+l.W+l.F*!k,{Promise:N}),r(49)(N,"Promise"),r(52)("Promise"),u=r(7).Promise,l(l.S+l.F*!k,"Promise",{reject:function(t){var n=O(this);return(0,n.reject)(t),n.promise}}),l(l.S+l.F*(a||!k),"Promise",{resolve:function(t){return b(a&&this===u?N:this,t)}}),l(l.S+l.F*!(k&&r(73)((function(t){N.all(t).catch(T)}))),"Promise",{all:function(t){var n=this,r=O(n),e=r.resolve,i=r.reject,o=x((function(){var r=[],o=0,u=1;d(t,!1,(function(t){var a=o++,c=!1;r.push(void 0),u++,n.resolve(t).then((function(t){c||(c=!0,r[a]=t,--u||e(r))}),i)})),--u||e(r)}));return o.e&&i(o.v),r.promise},race:function(t){var n=this,r=O(n),e=r.reject,i=x((function(){d(t,!1,(function(t){n.resolve(t).then(r.resolve,e)}))}));return i.e&&e(i.v),r.promise}})},function(t,n,r){"use strict";var e=r(22);function i(t){var n,r;this.promise=new t((function(t,e){if(void 0!==n||void 0!==r)throw TypeError("Bad Promise constructor");n=t,r=e})),this.resolve=e(n),this.reject=e(r)}t.exports.f=function(t){return new i(t)}},function(t,n,r){var e=r(3),i=r(4),o=r(168);t.exports=function(t,n){if(e(t),i(n)&&n.constructor===t)return n;var r=o.f(t);return(0,r.resolve)(n),r.promise}},function(t,n,r){"use strict";var e=r(9).f,i=r(41),o=r(54),u=r(21),a=r(53),c=r(77),f=r(105),s=r(164),l=r(52),h=r(8),p=r(32).fastKey,v=r(45),d=h?"_s":"size",g=function(t,n){var r,e=p(n);if("F"!==e)return t._i[e];for(r=t._f;r;r=r.n)if(r.k==n)return r};t.exports={getConstructor:function(t,n,r,f){var s=t((function(t,e){a(t,s,n,"_i"),t._t=n,t._i=i(null),t._f=void 0,t._l=void 0,t[d]=0,null!=e&&c(e,r,t[f],t)}));return o(s.prototype,{clear:function(){for(var t=v(this,n),r=t._i,e=t._f;e;e=e.n)e.r=!0,e.p&&(e.p=e.p.n=void 0),delete r[e.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var r=v(this,n),e=g(r,t);if(e){var i=e.n,o=e.p;delete r._i[e.i],e.r=!0,o&&(o.n=i),i&&(i.p=o),r._f==e&&(r._f=i),r._l==e&&(r._l=o),r[d]--}return!!e},forEach:function(t){v(this,n);for(var r,e=u(t,arguments.length>1?arguments[1]:void 0,3);r=r?r.n:this._f;)for(e(r.v,r.k,this);r&&r.r;)r=r.p},has:function(t){return!!g(v(this,n),t)}}),h&&e(s.prototype,"size",{get:function(){return v(this,n)[d]}}),s},def:function(t,n,r){var e,i,o=g(t,n);return o?o.v=r:(t._l=o={i:i=p(n,!0),k:n,v:r,p:e=t._l,n:void 0,r:!1},t._f||(t._f=o),e&&(e.n=o),t[d]++,"F"!==i&&(t._i[i]=o)),t},getEntry:g,setStrong:function(t,n,r){f(t,n,(function(t,r){this._t=v(t,n),this._k=r,this._l=void 0}),(function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?s(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,s(1))}),r?"entries":"values",!r,!0),l(n)}}},function(t,n,r){"use strict";var e=r(54),i=r(32).getWeak,o=r(3),u=r(4),a=r(53),c=r(77),f=r(26),s=r(17),l=r(45),h=f(5),p=f(6),v=0,d=function(t){return t._l||(t._l=new g)},g=function(){this.a=[]},y=function(t,n){return h(t.a,(function(t){return t[0]===n}))};g.prototype={get:function(t){var n=y(this,t);if(n)return n[1]},has:function(t){return!!y(this,t)},set:function(t,n){var r=y(this,t);r?r[1]=n:this.a.push([t,n])},delete:function(t){var n=p(this.a,(function(n){return n[0]===t}));return~n&&this.a.splice(n,1),!!~n}},t.exports={getConstructor:function(t,n,r,o){var f=t((function(t,e){a(t,f,n,"_i"),t._t=n,t._i=v++,t._l=void 0,null!=e&&c(e,r,t[o],t)}));return e(f.prototype,{delete:function(t){if(!u(t))return!1;var r=i(t);return!0===r?d(l(this,n)).delete(t):r&&s(r,this._i)&&delete r[this._i]},has:function(t){if(!u(t))return!1;var r=i(t);return!0===r?d(l(this,n)).has(t):r&&s(r,this._i)}}),f},def:function(t,n,r){var e=i(o(n),!0);return!0===e?d(t).set(n,r):e[t._i]=r,t},ufstore:d}},function(t,n,r){var e=r(23),i=r(6);t.exports=function(t){if(void 0===t)return 0;var n=e(t),r=i(n);if(n!==r)throw RangeError("Wrong length!");return r}},function(t,n,r){var e=r(42),i=r(71),o=r(3),u=r(1).Reflect;t.exports=u&&u.ownKeys||function(t){var n=e.f(o(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){var e=r(6),i=r(101),o=r(29);t.exports=function(t,n,r,u){var a=String(o(t)),c=a.length,f=void 0===r?" ":String(r),s=e(n);if(s<=c||""==f)return a;var l=s-c,h=i.call(f,Math.ceil(l/f.length));return h.length>l&&(h=h.slice(0,l)),u?h+a:a+h}},function(t,n,r){var e=r(8),i=r(39),o=r(19),u=r(58).f;t.exports=function(t){return function(n){for(var r,a=o(n),c=i(a),f=c.length,s=0,l=[];f>s;)r=c[s++],e&&!u.call(a,r)||l.push(t?[r,a[r]]:a[r]);return l}}},function(t,n){var r=t.exports={version:"2.6.11"};"number"==typeof __e&&(__e=r)},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(459);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=Object.prototype.toString;t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(470);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(513);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(514);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(14),i=r(184),o=r(185),u=r(186),a=r(55),c=r(47),f=r(130),s=r(549),l=r(551).factory,h=r(11),p=r(200),v=r(625),d=r(628);t.exports=function(){var t,n,r,g,y,m;if(0===arguments.length)n=l();else if(1===arguments.length){if(t=arguments[0],!u(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(c(t,"prng")){if(!a(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");n=t.prng}else n=l(t)}else{if(y=arguments[0],m=arguments[1],g=v(y,m))throw g;if(arguments.length>2){if(t=arguments[2],!u(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(c(t,"prng")){if(!a(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");n=t.prng}else n=l(t)}else n=l()}return e(r=void 0===y?N:E,"NAME","uniform"),t&&t.prng?(e(r,"seed",null),e(r,"seedLength",null),o(r,"state",f(null),s),e(r,"stateLength",null),e(r,"byteLength",null),e(r,"toJSON",f(null)),e(r,"PRNG",n)):(i(r,"seed",_),i(r,"seedLength",x),o(r,"state",A,M),i(r,"stateLength",w),i(r,"byteLength",b),e(r,"toJSON",S),e(r,"PRNG",n),n=n.normalized),r;function _(){return n.seed}function x(){return n.seedLength}function w(){return n.stateLength}function b(){return n.byteLength}function A(){return n.state}function M(t){n.state=t}function S(){var t={type:"PRNG"};return t.name=r.NAME,t.state=p(n.state),t.params=void 0===y?[]:[y,m],t}function E(){return d(n,y,m)}function N(t,r){return h(t)||h(r)||t>=r?NaN:d(n,t,r)}}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(516);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(517);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(518);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(14),i=r(526),o=r(188),u=r(189);e(i,"isPrimitive",o),e(i,"isObject",u),t.exports=i},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t){return"boolean"==typeof t}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(122),i=r(12),o=r(527),u=e();t.exports=function(t){return"object"==typeof t&&(t instanceof Boolean||(u?o(t):"[object Boolean]"===i(t)))}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=/^\s*function\s*([^(]*)/i},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var e=r(14),i=r(184),o=r(185),u=r(47),a=r(186),c=r(553),f=r(178),s=r(187).isPrimitive,l=r(558).isPrimitive,h=r(564),p=r(123),v=r(33),d=r(65),g=r(565),y=r(567),m=r(200),_=r(206),x=624,w=p>>>0,b=[0,2567483615],A=1/(h+1),M=h*A;function S(t,n){var r;return r=n?"option":"argument",t.length<631?new RangeError("invalid "+r+". `state` array has insufficient length."):1!==t[0]?new RangeError("invalid "+r+". `state` array has an incompatible schema version. Expected: 1. Actual: "+t[0]+"."):3!==t[1]?new RangeError("invalid "+r+". `state` array has an incompatible number of sections. Expected: 3. Actual: "+t[1]+"."):t[2]!==x?new RangeError("invalid "+r+". `state` array has an incompatible state length. Expected: "+"624. Actual: "+t[2]+"."):1!==t[627]?new RangeError("invalid "+r+". `state` array has an incompatible section length. Expected: "+1..toString()+". Actual: "+t[627]+"."):t[629]!==t.length-630?new RangeError("invalid "+r+". `state` array length is incompatible with seed section length. Expected: "+(t.length-630)+". Actual: "+t[629]+"."):null}function E(t,n,r){var e;for(t[0]=r>>>0,e=1;e<n;e++)r=((r=t[e-1]>>>0)^r>>>30)>>>0,t[e]=g(r,1812433253)+e>>>0;return t}function N(t,n,r,e){var i,o,u,a;for(o=1,u=0,a=d(n,e);a>0;a--)i=t[o-1]>>>0,i=g(i=(i^i>>>30)>>>0,1664525)>>>0,t[o]=(t[o]>>>0^i)+r[u]+u>>>0,u+=1,(o+=1)>=n&&(t[0]=t[n-1],o=1),u>=e&&(u=0);for(a=n-1;a>0;a--)i=t[o-1]>>>0,i=g(i=(i^i>>>30)>>>0,1566083941)>>>0,t[o]=(t[o]>>>0^i)-o>>>0,(o+=1)>=n&&(t[0]=t[n-1],o=1);return t[0]=2147483648,t}function j(t){var n,r;for(227,r=0;r<227;r++)n=2147483648&t[r]|2147483647&t[r+1],t[r]=t[r+397]^n>>>1^b[1&n];for(623;r<623;r++)n=2147483648&t[r]|2147483647&t[r+1],t[r]=t[r-227]^n>>>1^b[1&n];return n=2147483648&t[623]|2147483647&t[0],t[623]=t[396]^n>>>1^b[1&n],t}t.exports=function(t){var n,r,h,d,g,b;if(h={},arguments.length){if(!a(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(u(t,"copy")&&(h.copy=t.copy,!s(t.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+t.copy+"`.");if(u(t,"state")){if(r=t.state,h.state=!0,!f(r))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+r+"`.");if(b=S(r,!0))throw b;!1===h.copy?n=r:(n=new v(r.length),y(r.length,r,1,n,1)),r=new v(n.buffer,n.byteOffset+3*n.BYTES_PER_ELEMENT,x),d=new v(n.buffer,n.byteOffset+630*n.BYTES_PER_ELEMENT,r[629])}if(void 0===d)if(u(t,"seed"))if(d=t.seed,h.seed=!0,l(d)){if(d>w)throw new RangeError("invalid option. `seed` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `"+d+"`.");d>>>=0}else{if(!1===c(d)||d.length<1)throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+d+"`.");if(1===d.length){if(d=d[0],!l(d))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+d+"`.");if(d>w)throw new RangeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+d+"`.");d>>>=0}else g=d.length,(n=new v(630+g))[0]=1,n[1]=3,n[2]=x,n[627]=1,n[628]=x,n[629]=g,y.ndarray(g,d,1,0,n,1,630),r=new v(n.buffer,n.byteOffset+3*n.BYTES_PER_ELEMENT,x),d=new v(n.buffer,n.byteOffset+630*n.BYTES_PER_ELEMENT,g),r=N(r=E(r,x,19650218),x,d,g)}else d=_()>>>0}else d=_()>>>0;return void 0===r&&((n=new v(631))[0]=1,n[1]=3,n[2]=x,n[627]=1,n[628]=x,n[629]=1,n[630]=d,r=new v(n.buffer,n.byteOffset+3*n.BYTES_PER_ELEMENT,x),d=new v(n.buffer,n.byteOffset+630*n.BYTES_PER_ELEMENT,1),r=E(r,x,d)),e(I,"NAME","mt19937"),i(I,"seed",T),i(I,"seedLength",O),o(I,"state",C,L),i(I,"stateLength",k),i(I,"byteLength",P),e(I,"toJSON",F),e(I,"MIN",1),e(I,"MAX",p),e(I,"normalized",R),e(R,"NAME",I.NAME),i(R,"seed",T),i(R,"seedLength",O),o(R,"state",C,L),i(R,"stateLength",k),i(R,"byteLength",P),e(R,"toJSON",F),e(R,"MIN",0),e(R,"MAX",M),I;function T(){var t=n[629];return y(t,d,1,new v(t),1)}function O(){return n[629]}function k(){return n.length}function P(){return n.byteLength}function C(){var t=n.length;return y(t,n,1,new v(t),1)}function L(t){var e;if(!f(t))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+t+"`.");if(e=S(t,!1))throw e;!1===h.copy?h.state&&t.length===n.length?y(t.length,t,1,n,1):(n=t,h.state=!0):(t.length!==n.length&&(n=new v(t.length)),y(t.length,t,1,n,1)),r=new v(n.buffer,n.byteOffset+3*n.BYTES_PER_ELEMENT,x),d=new v(n.buffer,n.byteOffset+630*n.BYTES_PER_ELEMENT,n[629])}function F(){var t={type:"PRNG"};return t.name=I.NAME,t.state=m(n),t.params=[],t}function I(){var t,e;return(e=n[628])>=x&&(r=j(r),e=0),t=r[e],n[628]=e+1,t^=t>>>11,t^=t<<7&2636928640,t^=t<<15&4022730752,(t^=t>>>18)>>>0}function R(){return(67108864*(I()>>>5)+(I()>>>6))*A}}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(193).isPrimitive;t.exports=function(t){return e(t)&&t>0}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(14),i=r(560),o=r(194),u=r(198);e(i,"isPrimitive",o),e(i,"isObject",u),t.exports=i},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(48).isPrimitive,i=r(197);t.exports=function(t){return e(t)&&i(t)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t){return"number"==typeof t}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(122),i=r(12),o=r(121),u=r(562),a=e();t.exports=function(t){return"object"==typeof t&&(t instanceof o||(a?u(t):"[object Number]"===i(t)))}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(13),i=r(27),o=r(64);t.exports=function(t){return t<e&&t>i&&o(t)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(48).isObject,i=r(197);t.exports=function(t){return e(t)&&i(t.valueOf())}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(193).isObject;t.exports=function(t){return e(t)&&t.valueOf()>0}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(570);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e,i=r(579),o=r(586),u=r(587);e=i()?o:u,t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e,i=r(588),o=r(593),u=r(594);e=i()?o:u,t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e,i=r(595),o=r(602),u=r(603);e=i()?o:u,t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e,i=r(604),o=r(611),u=r(612);e=i()?o:u,t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e,i=r(613),o=r(618),u=r(619);e=i()?o:u,t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(123),i=r(131),o=e-1;t.exports=function(){return i(1+o*Math.random())>>>0}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(48).isPrimitive,i=r(11);t.exports=function(t){return e(t)&&i(t)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(48).isObject,i=r(11);t.exports=function(t){return e(t)&&i(t.valueOf())}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(635);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(651);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(657);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(662);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(663);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(674);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(675);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(678);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=6.283185307179586},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(634);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(647);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(14),i=r(650);e(i,"factory",r(689)),t.exports=i},function(t,n,r){(function(r){var e,i,o;i=[],void 0===(o="function"==typeof(e=function(){"use strict";function n(t,n,r){var e=new XMLHttpRequest;e.open("GET",t),e.responseType="blob",e.onload=function(){u(e.response,n,r)},e.onerror=function(){console.error("could not download file")},e.send()}function e(t){var n=new XMLHttpRequest;n.open("HEAD",t,!1);try{n.send()}catch(t){}return 200<=n.status&&299>=n.status}function i(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(r){var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(n)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof r&&r.global===r?r:void 0,u=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype?function(t,r,u){var a=o.URL||o.webkitURL,c=document.createElement("a");r=r||t.name||"download",c.download=r,c.rel="noopener","string"==typeof t?(c.href=t,c.origin===location.origin?i(c):e(c.href)?n(t,r,u):i(c,c.target="_blank")):(c.href=a.createObjectURL(t),setTimeout((function(){a.revokeObjectURL(c.href)}),4e4),setTimeout((function(){i(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,r,o){if(r=r||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,n){return void 0===n?n={autoBom:!1}:"object"!=typeof n&&(console.warn("Deprecated: Expected third argument to be a object"),n={autoBom:!n}),n.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,o),r);else if(e(t))n(t,r,o);else{var u=document.createElement("a");u.href=t,u.target="_blank",setTimeout((function(){i(u)}))}}:function(t,r,e,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof t)return n(t,r,e);var u="application/octet-stream"===t.type,a=/constructor/i.test(o.HTMLElement)||o.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||u&&a)&&"object"==typeof FileReader){var f=new FileReader;f.onloadend=function(){var t=f.result;t=c?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=t:location=t,i=null},f.readAsDataURL(t)}else{var s=o.URL||o.webkitURL,l=s.createObjectURL(t);i?i.location=l:location.href=l,i=null,setTimeout((function(){s.revokeObjectURL(l)}),4e4)}});o.saveAs=u.saveAs=u,t.exports=u})?e.apply(n,i):e)||(t.exports=o)}).call(this,r(128))},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,r){r(264),t.exports=r(693)},function(t,n,r){"use strict";r(265);var e,i=(e=r(437))&&e.__esModule?e:{default:e};i.default._babelPolyfill&&"undefined"!=typeof console&&console.warn&&console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning."),i.default._babelPolyfill=!0},function(t,n,r){"use strict";r(266),r(409),r(411),r(414),r(416),r(418),r(420),r(422),r(424),r(426),r(428),r(430),r(432),r(436)},function(t,n,r){r(267),r(270),r(271),r(272),r(273),r(274),r(275),r(276),r(277),r(278),r(279),r(280),r(281),r(282),r(283),r(284),r(285),r(286),r(287),r(288),r(289),r(290),r(291),r(292),r(293),r(294),r(295),r(296),r(297),r(298),r(299),r(300),r(301),r(302),r(303),r(304),r(305),r(306),r(307),r(308),r(309),r(310),r(311),r(313),r(314),r(315),r(316),r(317),r(318),r(319),r(320),r(321),r(322),r(323),r(324),r(325),r(326),r(327),r(328),r(329),r(330),r(331),r(332),r(333),r(334),r(335),r(336),r(337),r(338),r(339),r(340),r(341),r(342),r(343),r(344),r(345),r(346),r(348),r(349),r(351),r(352),r(353),r(354),r(355),r(356),r(357),r(359),r(360),r(361),r(362),r(363),r(364),r(365),r(366),r(367),r(368),r(369),r(370),r(371),r(113),r(372),r(165),r(373),r(166),r(374),r(375),r(376),r(377),r(167),r(380),r(381),r(382),r(383),r(384),r(385),r(386),r(387),r(388),r(389),r(390),r(391),r(392),r(393),r(394),r(395),r(396),r(397),r(398),r(399),r(400),r(401),r(402),r(403),r(404),r(405),r(406),r(407),r(408),t.exports=r(7)},function(t,n,r){"use strict";var e=r(1),i=r(17),o=r(8),u=r(0),a=r(15),c=r(32).KEY,f=r(2),s=r(69),l=r(49),h=r(37),p=r(5),v=r(94),d=r(146),g=r(269),y=r(72),m=r(3),_=r(4),x=r(10),w=r(19),b=r(31),A=r(36),M=r(41),S=r(149),E=r(24),N=r(71),j=r(9),T=r(39),O=E.f,k=j.f,P=S.f,C=e.Symbol,L=e.JSON,F=L&&L.stringify,I=p("_hidden"),R=p("toPrimitive"),U={}.propertyIsEnumerable,D=s("symbol-registry"),q=s("symbols"),z=s("op-symbols"),B=Object.prototype,W="function"==typeof C&&!!N.f,V=e.QObject,Y=!V||!V.prototype||!V.prototype.findChild,H=o&&f((function(){return 7!=M(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a}))?function(t,n,r){var e=O(B,n);e&&delete B[n],k(t,n,r),e&&t!==B&&k(B,n,e)}:k,$=function(t){var n=q[t]=M(C.prototype);return n._k=t,n},G=W&&"symbol"==typeof C.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof C},X=function(t,n,r){return t===B&&X(z,n,r),m(t),n=b(n,!0),m(r),i(q,n)?(r.enumerable?(i(t,I)&&t[I][n]&&(t[I][n]=!1),r=M(r,{enumerable:A(0,!1)})):(i(t,I)||k(t,I,A(1,{})),t[I][n]=!0),H(t,n,r)):k(t,n,r)},Z=function(t,n){m(t);for(var r,e=g(n=w(n)),i=0,o=e.length;o>i;)X(t,r=e[i++],n[r]);return t},J=function(t){var n=U.call(this,t=b(t,!0));return!(this===B&&i(q,t)&&!i(z,t))&&(!(n||!i(this,t)||!i(q,t)||i(this,I)&&this[I][t])||n)},K=function(t,n){if(t=w(t),n=b(n,!0),t!==B||!i(q,n)||i(z,n)){var r=O(t,n);return!r||!i(q,n)||i(t,I)&&t[I][n]||(r.enumerable=!0),r}},Q=function(t){for(var n,r=P(w(t)),e=[],o=0;r.length>o;)i(q,n=r[o++])||n==I||n==c||e.push(n);return e},tt=function(t){for(var n,r=t===B,e=P(r?z:w(t)),o=[],u=0;e.length>u;)!i(q,n=e[u++])||r&&!i(B,n)||o.push(q[n]);return o};W||(a((C=function(){if(this instanceof C)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),n=function(r){this===B&&n.call(z,r),i(this,I)&&i(this[I],t)&&(this[I][t]=!1),H(this,t,A(1,r))};return o&&Y&&H(B,t,{configurable:!0,set:n}),$(t)}).prototype,"toString",(function(){return this._k})),E.f=K,j.f=X,r(42).f=S.f=Q,r(58).f=J,N.f=tt,o&&!r(38)&&a(B,"propertyIsEnumerable",J,!0),v.f=function(t){return $(p(t))}),u(u.G+u.W+u.F*!W,{Symbol:C});for(var nt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),rt=0;nt.length>rt;)p(nt[rt++]);for(var et=T(p.store),it=0;et.length>it;)d(et[it++]);u(u.S+u.F*!W,"Symbol",{for:function(t){return i(D,t+="")?D[t]:D[t]=C(t)},keyFor:function(t){if(!G(t))throw TypeError(t+" is not a symbol!");for(var n in D)if(D[n]===t)return n},useSetter:function(){Y=!0},useSimple:function(){Y=!1}}),u(u.S+u.F*!W,"Object",{create:function(t,n){return void 0===n?M(t):Z(M(t),n)},defineProperty:X,defineProperties:Z,getOwnPropertyDescriptor:K,getOwnPropertyNames:Q,getOwnPropertySymbols:tt});var ot=f((function(){N.f(1)}));u(u.S+u.F*ot,"Object",{getOwnPropertySymbols:function(t){return N.f(x(t))}}),L&&u(u.S+u.F*(!W||f((function(){var t=C();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))}))),"JSON",{stringify:function(t){for(var n,r,e=[t],i=1;arguments.length>i;)e.push(arguments[i++]);if(r=n=e[1],(_(n)||void 0!==t)&&!G(t))return y(n)||(n=function(t,n){if("function"==typeof r&&(n=r.call(this,t,n)),!G(n))return n}),e[1]=n,F.apply(L,e)}}),C.prototype[R]||r(18)(C.prototype,R,C.prototype.valueOf),l(C,"Symbol"),l(Math,"Math",!0),l(e.JSON,"JSON",!0)},function(t,n,r){t.exports=r(69)("native-function-to-string",Function.toString)},function(t,n,r){var e=r(39),i=r(71),o=r(58);t.exports=function(t){var n=e(t),r=i.f;if(r)for(var u,a=r(t),c=o.f,f=0;a.length>f;)c.call(t,u=a[f++])&&n.push(u);return n}},function(t,n,r){var e=r(0);e(e.S,"Object",{create:r(41)})},function(t,n,r){var e=r(0);e(e.S+e.F*!r(8),"Object",{defineProperty:r(9).f})},function(t,n,r){var e=r(0);e(e.S+e.F*!r(8),"Object",{defineProperties:r(148)})},function(t,n,r){var e=r(19),i=r(24).f;r(25)("getOwnPropertyDescriptor",(function(){return function(t,n){return i(e(t),n)}}))},function(t,n,r){var e=r(10),i=r(43);r(25)("getPrototypeOf",(function(){return function(t){return i(e(t))}}))},function(t,n,r){var e=r(10),i=r(39);r(25)("keys",(function(){return function(t){return i(e(t))}}))},function(t,n,r){r(25)("getOwnPropertyNames",(function(){return r(149).f}))},function(t,n,r){var e=r(4),i=r(32).onFreeze;r(25)("freeze",(function(t){return function(n){return t&&e(n)?t(i(n)):n}}))},function(t,n,r){var e=r(4),i=r(32).onFreeze;r(25)("seal",(function(t){return function(n){return t&&e(n)?t(i(n)):n}}))},function(t,n,r){var e=r(4),i=r(32).onFreeze;r(25)("preventExtensions",(function(t){return function(n){return t&&e(n)?t(i(n)):n}}))},function(t,n,r){var e=r(4);r(25)("isFrozen",(function(t){return function(n){return!e(n)||!!t&&t(n)}}))},function(t,n,r){var e=r(4);r(25)("isSealed",(function(t){return function(n){return!e(n)||!!t&&t(n)}}))},function(t,n,r){var e=r(4);r(25)("isExtensible",(function(t){return function(n){return!!e(n)&&(!t||t(n))}}))},function(t,n,r){var e=r(0);e(e.S+e.F,"Object",{assign:r(150)})},function(t,n,r){var e=r(0);e(e.S,"Object",{is:r(151)})},function(t,n,r){var e=r(0);e(e.S,"Object",{setPrototypeOf:r(98).set})},function(t,n,r){"use strict";var e=r(59),i={};i[r(5)("toStringTag")]="z",i+""!="[object z]"&&r(15)(Object.prototype,"toString",(function(){return"[object "+e(this)+"]"}),!0)},function(t,n,r){var e=r(0);e(e.P,"Function",{bind:r(152)})},function(t,n,r){var e=r(9).f,i=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in i||r(8)&&e(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},function(t,n,r){"use strict";var e=r(4),i=r(43),o=r(5)("hasInstance"),u=Function.prototype;o in u||r(9).f(u,o,{value:function(t){if("function"!=typeof this||!e(t))return!1;if(!e(this.prototype))return t instanceof this;for(;t=i(t);)if(this.prototype===t)return!0;return!1}})},function(t,n,r){var e=r(0),i=r(154);e(e.G+e.F*(parseInt!=i),{parseInt:i})},function(t,n,r){var e=r(0),i=r(155);e(e.G+e.F*(parseFloat!=i),{parseFloat:i})},function(t,n,r){"use strict";var e=r(1),i=r(17),o=r(28),u=r(100),a=r(31),c=r(2),f=r(42).f,s=r(24).f,l=r(9).f,h=r(50).trim,p=e.Number,v=p,d=p.prototype,g="Number"==o(r(41)(d)),y="trim"in String.prototype,m=function(t){var n=a(t,!1);if("string"==typeof n&&n.length>2){var r,e,i,o=(n=y?n.trim():h(n,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=n.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(n.charCodeAt(1)){case 66:case 98:e=2,i=49;break;case 79:case 111:e=8,i=55;break;default:return+n}for(var u,c=n.slice(2),f=0,s=c.length;f<s;f++)if((u=c.charCodeAt(f))<48||u>i)return NaN;return parseInt(c,e)}}return+n};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var n=arguments.length<1?0:t,r=this;return r instanceof p&&(g?c((function(){d.valueOf.call(r)})):"Number"!=o(r))?u(new v(m(n)),r,p):m(n)};for(var _,x=r(8)?f(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;x.length>w;w++)i(v,_=x[w])&&!i(p,_)&&l(p,_,s(v,_));p.prototype=d,d.constructor=p,r(15)(e,"Number",p)}},function(t,n,r){"use strict";var e=r(0),i=r(23),o=r(156),u=r(101),a=1..toFixed,c=Math.floor,f=[0,0,0,0,0,0],s="Number.toFixed: incorrect invocation!",l=function(t,n){for(var r=-1,e=n;++r<6;)e+=t*f[r],f[r]=e%1e7,e=c(e/1e7)},h=function(t){for(var n=6,r=0;--n>=0;)r+=f[n],f[n]=c(r/t),r=r%t*1e7},p=function(){for(var t=6,n="";--t>=0;)if(""!==n||0===t||0!==f[t]){var r=String(f[t]);n=""===n?r:n+u.call("0",7-r.length)+r}return n},v=function(t,n,r){return 0===n?r:n%2==1?v(t,n-1,r*t):v(t*t,n/2,r)};e(e.P+e.F*(!!a&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r(2)((function(){a.call({})}))),"Number",{toFixed:function(t){var n,r,e,a,c=o(this,s),f=i(t),d="",g="0";if(f<0||f>20)throw RangeError(s);if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(d="-",c=-c),c>1e-21)if(r=(n=function(t){for(var n=0,r=t;r>=4096;)n+=12,r/=4096;for(;r>=2;)n+=1,r/=2;return n}(c*v(2,69,1))-69)<0?c*v(2,-n,1):c/v(2,n,1),r*=4503599627370496,(n=52-n)>0){for(l(0,r),e=f;e>=7;)l(1e7,0),e-=7;for(l(v(10,e,1),0),e=n-1;e>=23;)h(1<<23),e-=23;h(1<<e),l(1,1),h(2),g=p()}else l(0,r),l(1<<-n,0),g=p()+u.call("0",f);return g=f>0?d+((a=g.length)<=f?"0."+u.call("0",f-a)+g:g.slice(0,a-f)+"."+g.slice(a-f)):d+g}})},function(t,n,r){"use strict";var e=r(0),i=r(2),o=r(156),u=1..toPrecision;e(e.P+e.F*(i((function(){return"1"!==u.call(1,void 0)}))||!i((function(){u.call({})}))),"Number",{toPrecision:function(t){var n=o(this,"Number#toPrecision: incorrect invocation!");return void 0===t?u.call(n):u.call(n,t)}})},function(t,n,r){var e=r(0);e(e.S,"Number",{EPSILON:Math.pow(2,-52)})},function(t,n,r){var e=r(0),i=r(1).isFinite;e(e.S,"Number",{isFinite:function(t){return"number"==typeof t&&i(t)}})},function(t,n,r){var e=r(0);e(e.S,"Number",{isInteger:r(157)})},function(t,n,r){var e=r(0);e(e.S,"Number",{isNaN:function(t){return t!=t}})},function(t,n,r){var e=r(0),i=r(157),o=Math.abs;e(e.S,"Number",{isSafeInteger:function(t){return i(t)&&o(t)<=9007199254740991}})},function(t,n,r){var e=r(0);e(e.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},function(t,n,r){var e=r(0);e(e.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},function(t,n,r){var e=r(0),i=r(155);e(e.S+e.F*(Number.parseFloat!=i),"Number",{parseFloat:i})},function(t,n,r){var e=r(0),i=r(154);e(e.S+e.F*(Number.parseInt!=i),"Number",{parseInt:i})},function(t,n,r){var e=r(0),i=r(158),o=Math.sqrt,u=Math.acosh;e(e.S+e.F*!(u&&710==Math.floor(u(Number.MAX_VALUE))&&u(1/0)==1/0),"Math",{acosh:function(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:i(t-1+o(t-1)*o(t+1))}})},function(t,n,r){var e=r(0),i=Math.asinh;e(e.S+e.F*!(i&&1/i(0)>0),"Math",{asinh:function t(n){return isFinite(n=+n)&&0!=n?n<0?-t(-n):Math.log(n+Math.sqrt(n*n+1)):n}})},function(t,n,r){var e=r(0),i=Math.atanh;e(e.S+e.F*!(i&&1/i(-0)<0),"Math",{atanh:function(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},function(t,n,r){var e=r(0),i=r(102);e(e.S,"Math",{cbrt:function(t){return i(t=+t)*Math.pow(Math.abs(t),1/3)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{clz32:function(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},function(t,n,r){var e=r(0),i=Math.exp;e(e.S,"Math",{cosh:function(t){return(i(t=+t)+i(-t))/2}})},function(t,n,r){var e=r(0),i=r(103);e(e.S+e.F*(i!=Math.expm1),"Math",{expm1:i})},function(t,n,r){var e=r(0);e(e.S,"Math",{fround:r(312)})},function(t,n,r){var e=r(102),i=Math.pow,o=i(2,-52),u=i(2,-23),a=i(2,127)*(2-u),c=i(2,-126);t.exports=Math.fround||function(t){var n,r,i=Math.abs(t),f=e(t);return i<c?f*(i/c/u+1/o-1/o)*c*u:(r=(n=(1+u/o)*i)-(n-i))>a||r!=r?f*(1/0):f*r}},function(t,n,r){var e=r(0),i=Math.abs;e(e.S,"Math",{hypot:function(t,n){for(var r,e,o=0,u=0,a=arguments.length,c=0;u<a;)c<(r=i(arguments[u++]))?(o=o*(e=c/r)*e+1,c=r):o+=r>0?(e=r/c)*e:r;return c===1/0?1/0:c*Math.sqrt(o)}})},function(t,n,r){var e=r(0),i=Math.imul;e(e.S+e.F*r(2)((function(){return-5!=i(4294967295,5)||2!=i.length})),"Math",{imul:function(t,n){var r=+t,e=+n,i=65535&r,o=65535&e;return 0|i*o+((65535&r>>>16)*o+i*(65535&e>>>16)<<16>>>0)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{log10:function(t){return Math.log(t)*Math.LOG10E}})},function(t,n,r){var e=r(0);e(e.S,"Math",{log1p:r(158)})},function(t,n,r){var e=r(0);e(e.S,"Math",{log2:function(t){return Math.log(t)/Math.LN2}})},function(t,n,r){var e=r(0);e(e.S,"Math",{sign:r(102)})},function(t,n,r){var e=r(0),i=r(103),o=Math.exp;e(e.S+e.F*r(2)((function(){return-2e-17!=!Math.sinh(-2e-17)})),"Math",{sinh:function(t){return Math.abs(t=+t)<1?(i(t)-i(-t))/2:(o(t-1)-o(-t-1))*(Math.E/2)}})},function(t,n,r){var e=r(0),i=r(103),o=Math.exp;e(e.S,"Math",{tanh:function(t){var n=i(t=+t),r=i(-t);return n==1/0?1:r==1/0?-1:(n-r)/(o(t)+o(-t))}})},function(t,n,r){var e=r(0);e(e.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},function(t,n,r){var e=r(0),i=r(40),o=String.fromCharCode,u=String.fromCodePoint;e(e.S+e.F*(!!u&&1!=u.length),"String",{fromCodePoint:function(t){for(var n,r=[],e=arguments.length,u=0;e>u;){if(n=+arguments[u++],i(n,1114111)!==n)throw RangeError(n+" is not a valid code point");r.push(n<65536?o(n):o(55296+((n-=65536)>>10),n%1024+56320))}return r.join("")}})},function(t,n,r){var e=r(0),i=r(19),o=r(6);e(e.S,"String",{raw:function(t){for(var n=i(t.raw),r=o(n.length),e=arguments.length,u=[],a=0;r>a;)u.push(String(n[a++])),a<e&&u.push(String(arguments[a]));return u.join("")}})},function(t,n,r){"use strict";r(50)("trim",(function(t){return function(){return t(this,3)}}))},function(t,n,r){"use strict";var e=r(104)(!0);r(105)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,n=this._t,r=this._i;return r>=n.length?{value:void 0,done:!0}:(t=e(n,r),this._i+=t.length,{value:t,done:!1})}))},function(t,n,r){"use strict";var e=r(0),i=r(104)(!1);e(e.P,"String",{codePointAt:function(t){return i(this,t)}})},function(t,n,r){"use strict";var e=r(0),i=r(6),o=r(106),u="".endsWith;e(e.P+e.F*r(108)("endsWith"),"String",{endsWith:function(t){var n=o(this,t,"endsWith"),r=arguments.length>1?arguments[1]:void 0,e=i(n.length),a=void 0===r?e:Math.min(i(r),e),c=String(t);return u?u.call(n,c,a):n.slice(a-c.length,a)===c}})},function(t,n,r){"use strict";var e=r(0),i=r(106);e(e.P+e.F*r(108)("includes"),"String",{includes:function(t){return!!~i(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,r){var e=r(0);e(e.P,"String",{repeat:r(101)})},function(t,n,r){"use strict";var e=r(0),i=r(6),o=r(106),u="".startsWith;e(e.P+e.F*r(108)("startsWith"),"String",{startsWith:function(t){var n=o(this,t,"startsWith"),r=i(Math.min(arguments.length>1?arguments[1]:void 0,n.length)),e=String(t);return u?u.call(n,e,r):n.slice(r,r+e.length)===e}})},function(t,n,r){"use strict";r(16)("anchor",(function(t){return function(n){return t(this,"a","name",n)}}))},function(t,n,r){"use strict";r(16)("big",(function(t){return function(){return t(this,"big","","")}}))},function(t,n,r){"use strict";r(16)("blink",(function(t){return function(){return t(this,"blink","","")}}))},function(t,n,r){"use strict";r(16)("bold",(function(t){return function(){return t(this,"b","","")}}))},function(t,n,r){"use strict";r(16)("fixed",(function(t){return function(){return t(this,"tt","","")}}))},function(t,n,r){"use strict";r(16)("fontcolor",(function(t){return function(n){return t(this,"font","color",n)}}))},function(t,n,r){"use strict";r(16)("fontsize",(function(t){return function(n){return t(this,"font","size",n)}}))},function(t,n,r){"use strict";r(16)("italics",(function(t){return function(){return t(this,"i","","")}}))},function(t,n,r){"use strict";r(16)("link",(function(t){return function(n){return t(this,"a","href",n)}}))},function(t,n,r){"use strict";r(16)("small",(function(t){return function(){return t(this,"small","","")}}))},function(t,n,r){"use strict";r(16)("strike",(function(t){return function(){return t(this,"strike","","")}}))},function(t,n,r){"use strict";r(16)("sub",(function(t){return function(){return t(this,"sub","","")}}))},function(t,n,r){"use strict";r(16)("sup",(function(t){return function(){return t(this,"sup","","")}}))},function(t,n,r){var e=r(0);e(e.S,"Date",{now:function(){return(new Date).getTime()}})},function(t,n,r){"use strict";var e=r(0),i=r(10),o=r(31);e(e.P+e.F*r(2)((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(t){var n=i(this),r=o(n);return"number"!=typeof r||isFinite(r)?n.toISOString():null}})},function(t,n,r){var e=r(0),i=r(347);e(e.P+e.F*(Date.prototype.toISOString!==i),"Date",{toISOString:i})},function(t,n,r){"use strict";var e=r(2),i=Date.prototype.getTime,o=Date.prototype.toISOString,u=function(t){return t>9?t:"0"+t};t.exports=e((function(){return"0385-07-25T07:06:39.999Z"!=o.call(new Date(-50000000000001))}))||!e((function(){o.call(new Date(NaN))}))?function(){if(!isFinite(i.call(this)))throw RangeError("Invalid time value");var t=this,n=t.getUTCFullYear(),r=t.getUTCMilliseconds(),e=n<0?"-":n>9999?"+":"";return e+("00000"+Math.abs(n)).slice(e?-6:-4)+"-"+u(t.getUTCMonth()+1)+"-"+u(t.getUTCDate())+"T"+u(t.getUTCHours())+":"+u(t.getUTCMinutes())+":"+u(t.getUTCSeconds())+"."+(r>99?r:"0"+u(r))+"Z"}:o},function(t,n,r){var e=Date.prototype,i=e.toString,o=e.getTime;new Date(NaN)+""!="Invalid Date"&&r(15)(e,"toString",(function(){var t=o.call(this);return t==t?i.call(this):"Invalid Date"}))},function(t,n,r){var e=r(5)("toPrimitive"),i=Date.prototype;e in i||r(18)(i,e,r(350))},function(t,n,r){"use strict";var e=r(3),i=r(31);t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return i(e(this),"number"!=t)}},function(t,n,r){var e=r(0);e(e.S,"Array",{isArray:r(72)})},function(t,n,r){"use strict";var e=r(21),i=r(0),o=r(10),u=r(160),a=r(109),c=r(6),f=r(110),s=r(111);i(i.S+i.F*!r(73)((function(t){Array.from(t)})),"Array",{from:function(t){var n,r,i,l,h=o(t),p="function"==typeof this?this:Array,v=arguments.length,d=v>1?arguments[1]:void 0,g=void 0!==d,y=0,m=s(h);if(g&&(d=e(d,v>2?arguments[2]:void 0,2)),null==m||p==Array&&a(m))for(r=new p(n=c(h.length));n>y;y++)f(r,y,g?d(h[y],y):h[y]);else for(l=m.call(h),r=new p;!(i=l.next()).done;y++)f(r,y,g?u(l,d,[i.value,y],!0):i.value);return r.length=y,r}})},function(t,n,r){"use strict";var e=r(0),i=r(110);e(e.S+e.F*r(2)((function(){function t(){}return!(Array.of.call(t)instanceof t)})),"Array",{of:function(){for(var t=0,n=arguments.length,r=new("function"==typeof this?this:Array)(n);n>t;)i(r,t,arguments[t++]);return r.length=n,r}})},function(t,n,r){"use strict";var e=r(0),i=r(19),o=[].join;e(e.P+e.F*(r(57)!=Object||!r(20)(o)),"Array",{join:function(t){return o.call(i(this),void 0===t?",":t)}})},function(t,n,r){"use strict";var e=r(0),i=r(97),o=r(28),u=r(40),a=r(6),c=[].slice;e(e.P+e.F*r(2)((function(){i&&c.call(i)})),"Array",{slice:function(t,n){var r=a(this.length),e=o(this);if(n=void 0===n?r:n,"Array"==e)return c.call(this,t,n);for(var i=u(t,r),f=u(n,r),s=a(f-i),l=new Array(s),h=0;h<s;h++)l[h]="String"==e?this.charAt(i+h):this[i+h];return l}})},function(t,n,r){"use strict";var e=r(0),i=r(22),o=r(10),u=r(2),a=[].sort,c=[1,2,3];e(e.P+e.F*(u((function(){c.sort(void 0)}))||!u((function(){c.sort(null)}))||!r(20)(a)),"Array",{sort:function(t){return void 0===t?a.call(o(this)):a.call(o(this),i(t))}})},function(t,n,r){"use strict";var e=r(0),i=r(26)(0),o=r(20)([].forEach,!0);e(e.P+e.F*!o,"Array",{forEach:function(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(4),i=r(72),o=r(5)("species");t.exports=function(t){var n;return i(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!i(n.prototype)||(n=void 0),e(n)&&null===(n=n[o])&&(n=void 0)),void 0===n?Array:n}},function(t,n,r){"use strict";var e=r(0),i=r(26)(1);e(e.P+e.F*!r(20)([].map,!0),"Array",{map:function(t){return i(this,t,arguments[1])}})},function(t,n,r){"use strict";var e=r(0),i=r(26)(2);e(e.P+e.F*!r(20)([].filter,!0),"Array",{filter:function(t){return i(this,t,arguments[1])}})},function(t,n,r){"use strict";var e=r(0),i=r(26)(3);e(e.P+e.F*!r(20)([].some,!0),"Array",{some:function(t){return i(this,t,arguments[1])}})},function(t,n,r){"use strict";var e=r(0),i=r(26)(4);e(e.P+e.F*!r(20)([].every,!0),"Array",{every:function(t){return i(this,t,arguments[1])}})},function(t,n,r){"use strict";var e=r(0),i=r(162);e(e.P+e.F*!r(20)([].reduce,!0),"Array",{reduce:function(t){return i(this,t,arguments.length,arguments[1],!1)}})},function(t,n,r){"use strict";var e=r(0),i=r(162);e(e.P+e.F*!r(20)([].reduceRight,!0),"Array",{reduceRight:function(t){return i(this,t,arguments.length,arguments[1],!0)}})},function(t,n,r){"use strict";var e=r(0),i=r(70)(!1),o=[].indexOf,u=!!o&&1/[1].indexOf(1,-0)<0;e(e.P+e.F*(u||!r(20)(o)),"Array",{indexOf:function(t){return u?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},function(t,n,r){"use strict";var e=r(0),i=r(19),o=r(23),u=r(6),a=[].lastIndexOf,c=!!a&&1/[1].lastIndexOf(1,-0)<0;e(e.P+e.F*(c||!r(20)(a)),"Array",{lastIndexOf:function(t){if(c)return a.apply(this,arguments)||0;var n=i(this),r=u(n.length),e=r-1;for(arguments.length>1&&(e=Math.min(e,o(arguments[1]))),e<0&&(e=r+e);e>=0;e--)if(e in n&&n[e]===t)return e||0;return-1}})},function(t,n,r){var e=r(0);e(e.P,"Array",{copyWithin:r(163)}),r(44)("copyWithin")},function(t,n,r){var e=r(0);e(e.P,"Array",{fill:r(112)}),r(44)("fill")},function(t,n,r){"use strict";var e=r(0),i=r(26)(5),o=!0;"find"in[]&&Array(1).find((function(){o=!1})),e(e.P+e.F*o,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(44)("find")},function(t,n,r){"use strict";var e=r(0),i=r(26)(6),o="findIndex",u=!0;o in[]&&Array(1)[o]((function(){u=!1})),e(e.P+e.F*u,"Array",{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(44)(o)},function(t,n,r){r(52)("Array")},function(t,n,r){var e=r(1),i=r(100),o=r(9).f,u=r(42).f,a=r(107),c=r(74),f=e.RegExp,s=f,l=f.prototype,h=/a/g,p=/a/g,v=new f(h)!==h;if(r(8)&&(!v||r(2)((function(){return p[r(5)("match")]=!1,f(h)!=h||f(p)==p||"/a/i"!=f(h,"i")})))){f=function(t,n){var r=this instanceof f,e=a(t),o=void 0===n;return!r&&e&&t.constructor===f&&o?t:i(v?new s(e&&!o?t.source:t,n):s((e=t instanceof f)?t.source:t,e&&o?c.call(t):n),r?this:l,f)};for(var d=function(t){t in f||o(f,t,{configurable:!0,get:function(){return s[t]},set:function(n){s[t]=n}})},g=u(s),y=0;g.length>y;)d(g[y++]);l.constructor=f,f.prototype=l,r(15)(e,"RegExp",f)}r(52)("RegExp")},function(t,n,r){"use strict";r(166);var e=r(3),i=r(74),o=r(8),u=/./.toString,a=function(t){r(15)(RegExp.prototype,"toString",t,!0)};r(2)((function(){return"/a/b"!=u.call({source:"a",flags:"b"})}))?a((function(){var t=e(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)})):"toString"!=u.name&&a((function(){return u.call(this)}))},function(t,n,r){"use strict";var e=r(3),i=r(6),o=r(115),u=r(75);r(76)("match",1,(function(t,n,r,a){return[function(r){var e=t(this),i=null==r?void 0:r[n];return void 0!==i?i.call(r,e):new RegExp(r)[n](String(e))},function(t){var n=a(r,t,this);if(n.done)return n.value;var c=e(t),f=String(this);if(!c.global)return u(c,f);var s=c.unicode;c.lastIndex=0;for(var l,h=[],p=0;null!==(l=u(c,f));){var v=String(l[0]);h[p]=v,""===v&&(c.lastIndex=o(f,i(c.lastIndex),s)),p++}return 0===p?null:h}]}))},function(t,n,r){"use strict";var e=r(3),i=r(10),o=r(6),u=r(23),a=r(115),c=r(75),f=Math.max,s=Math.min,l=Math.floor,h=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g;r(76)("replace",2,(function(t,n,r,v){return[function(e,i){var o=t(this),u=null==e?void 0:e[n];return void 0!==u?u.call(e,o,i):r.call(String(o),e,i)},function(t,n){var i=v(r,t,this,n);if(i.done)return i.value;var l=e(t),h=String(this),p="function"==typeof n;p||(n=String(n));var g=l.global;if(g){var y=l.unicode;l.lastIndex=0}for(var m=[];;){var _=c(l,h);if(null===_)break;if(m.push(_),!g)break;""===String(_[0])&&(l.lastIndex=a(h,o(l.lastIndex),y))}for(var x,w="",b=0,A=0;A<m.length;A++){_=m[A];for(var M=String(_[0]),S=f(s(u(_.index),h.length),0),E=[],N=1;N<_.length;N++)E.push(void 0===(x=_[N])?x:String(x));var j=_.groups;if(p){var T=[M].concat(E,S,h);void 0!==j&&T.push(j);var O=String(n.apply(void 0,T))}else O=d(M,h,S,E,j,n);S>=b&&(w+=h.slice(b,S)+O,b=S+M.length)}return w+h.slice(b)}];function d(t,n,e,o,u,a){var c=e+t.length,f=o.length,s=p;return void 0!==u&&(u=i(u),s=h),r.call(a,s,(function(r,i){var a;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,e);case"'":return n.slice(c);case"<":a=u[i.slice(1,-1)];break;default:var s=+i;if(0===s)return r;if(s>f){var h=l(s/10);return 0===h?r:h<=f?void 0===o[h-1]?i.charAt(1):o[h-1]+i.charAt(1):r}a=o[s-1]}return void 0===a?"":a}))}}))},function(t,n,r){"use strict";var e=r(3),i=r(151),o=r(75);r(76)("search",1,(function(t,n,r,u){return[function(r){var e=t(this),i=null==r?void 0:r[n];return void 0!==i?i.call(r,e):new RegExp(r)[n](String(e))},function(t){var n=u(r,t,this);if(n.done)return n.value;var a=e(t),c=String(this),f=a.lastIndex;i(f,0)||(a.lastIndex=0);var s=o(a,c);return i(a.lastIndex,f)||(a.lastIndex=f),null===s?-1:s.index}]}))},function(t,n,r){"use strict";var e=r(107),i=r(3),o=r(60),u=r(115),a=r(6),c=r(75),f=r(114),s=r(2),l=Math.min,h=[].push,p="length",v=!s((function(){RegExp(4294967295,"y")}));r(76)("split",2,(function(t,n,r,s){var d;return d="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1)[p]||2!="ab".split(/(?:ab)*/)[p]||4!=".".split(/(.?)(.?)/)[p]||".".split(/()()/)[p]>1||"".split(/.?/)[p]?function(t,n){var i=String(this);if(void 0===t&&0===n)return[];if(!e(t))return r.call(i,t,n);for(var o,u,a,c=[],s=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),l=0,v=void 0===n?4294967295:n>>>0,d=new RegExp(t.source,s+"g");(o=f.call(d,i))&&!((u=d.lastIndex)>l&&(c.push(i.slice(l,o.index)),o[p]>1&&o.index<i[p]&&h.apply(c,o.slice(1)),a=o[0][p],l=u,c[p]>=v));)d.lastIndex===o.index&&d.lastIndex++;return l===i[p]?!a&&d.test("")||c.push(""):c.push(i.slice(l)),c[p]>v?c.slice(0,v):c}:"0".split(void 0,0)[p]?function(t,n){return void 0===t&&0===n?[]:r.call(this,t,n)}:r,[function(r,e){var i=t(this),o=null==r?void 0:r[n];return void 0!==o?o.call(r,i,e):d.call(String(i),r,e)},function(t,n){var e=s(d,t,this,n,d!==r);if(e.done)return e.value;var f=i(t),h=String(this),p=o(f,RegExp),g=f.unicode,y=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(v?"y":"g"),m=new p(v?f:"^(?:"+f.source+")",y),_=void 0===n?4294967295:n>>>0;if(0===_)return[];if(0===h.length)return null===c(m,h)?[h]:[];for(var x=0,w=0,b=[];w<h.length;){m.lastIndex=v?w:0;var A,M=c(m,v?h:h.slice(w));if(null===M||(A=l(a(m.lastIndex+(v?0:w)),h.length))===x)w=u(h,w,g);else{if(b.push(h.slice(x,w)),b.length===_)return b;for(var S=1;S<=M.length-1;S++)if(b.push(M[S]),b.length===_)return b;w=x=A}}return b.push(h.slice(x)),b}]}))},function(t,n,r){var e=r(1),i=r(116).set,o=e.MutationObserver||e.WebKitMutationObserver,u=e.process,a=e.Promise,c="process"==r(28)(u);t.exports=function(){var t,n,r,f=function(){var e,i;for(c&&(e=u.domain)&&e.exit();t;){i=t.fn,t=t.next;try{i()}catch(e){throw t?r():n=void 0,e}}n=void 0,e&&e.enter()};if(c)r=function(){u.nextTick(f)};else if(!o||e.navigator&&e.navigator.standalone)if(a&&a.resolve){var s=a.resolve(void 0);r=function(){s.then(f)}}else r=function(){i.call(e,f)};else{var l=!0,h=document.createTextNode("");new o(f).observe(h,{characterData:!0}),r=function(){h.data=l=!l}}return function(e){var i={fn:e,next:void 0};n&&(n.next=i),t||(t=i,r()),n=i}}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,r){"use strict";var e=r(170),i=r(45);t.exports=r(79)("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var n=e.getEntry(i(this,"Map"),t);return n&&n.v},set:function(t,n){return e.def(i(this,"Map"),0===t?0:t,n)}},e,!0)},function(t,n,r){"use strict";var e=r(170),i=r(45);t.exports=r(79)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return e.def(i(this,"Set"),t=0===t?0:t,t)}},e)},function(t,n,r){"use strict";var e,i=r(1),o=r(26)(0),u=r(15),a=r(32),c=r(150),f=r(171),s=r(4),l=r(45),h=r(45),p=!i.ActiveXObject&&"ActiveXObject"in i,v=a.getWeak,d=Object.isExtensible,g=f.ufstore,y=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},m={get:function(t){if(s(t)){var n=v(t);return!0===n?g(l(this,"WeakMap")).get(t):n?n[this._i]:void 0}},set:function(t,n){return f.def(l(this,"WeakMap"),t,n)}},_=t.exports=r(79)("WeakMap",y,m,f,!0,!0);h&&p&&(c((e=f.getConstructor(y,"WeakMap")).prototype,m),a.NEED=!0,o(["delete","has","get","set"],(function(t){var n=_.prototype,r=n[t];u(n,t,(function(n,i){if(s(n)&&!d(n)){this._f||(this._f=new e);var o=this._f[t](n,i);return"set"==t?this:o}return r.call(this,n,i)}))})))},function(t,n,r){"use strict";var e=r(171),i=r(45);r(79)("WeakSet",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return e.def(i(this,"WeakSet"),t,!0)}},e,!1,!0)},function(t,n,r){"use strict";var e=r(0),i=r(80),o=r(117),u=r(3),a=r(40),c=r(6),f=r(4),s=r(1).ArrayBuffer,l=r(60),h=o.ArrayBuffer,p=o.DataView,v=i.ABV&&s.isView,d=h.prototype.slice,g=i.VIEW;e(e.G+e.W+e.F*(s!==h),{ArrayBuffer:h}),e(e.S+e.F*!i.CONSTR,"ArrayBuffer",{isView:function(t){return v&&v(t)||f(t)&&g in t}}),e(e.P+e.U+e.F*r(2)((function(){return!new h(2).slice(1,void 0).byteLength})),"ArrayBuffer",{slice:function(t,n){if(void 0!==d&&void 0===n)return d.call(u(this),t);for(var r=u(this).byteLength,e=a(t,r),i=a(void 0===n?r:n,r),o=new(l(this,h))(c(i-e)),f=new p(this),s=new p(o),v=0;e<i;)s.setUint8(v++,f.getUint8(e++));return o}}),r(52)("ArrayBuffer")},function(t,n,r){var e=r(0);e(e.G+e.W+e.F*!r(80).ABV,{DataView:r(117).DataView})},function(t,n,r){r(30)("Int8",1,(function(t){return function(n,r,e){return t(this,n,r,e)}}))},function(t,n,r){r(30)("Uint8",1,(function(t){return function(n,r,e){return t(this,n,r,e)}}))},function(t,n,r){r(30)("Uint8",1,(function(t){return function(n,r,e){return t(this,n,r,e)}}),!0)},function(t,n,r){r(30)("Int16",2,(function(t){return function(n,r,e){return t(this,n,r,e)}}))},function(t,n,r){r(30)("Uint16",2,(function(t){return function(n,r,e){return t(this,n,r,e)}}))},function(t,n,r){r(30)("Int32",4,(function(t){return function(n,r,e){return t(this,n,r,e)}}))},function(t,n,r){r(30)("Uint32",4,(function(t){return function(n,r,e){return t(this,n,r,e)}}))},function(t,n,r){r(30)("Float32",4,(function(t){return function(n,r,e){return t(this,n,r,e)}}))},function(t,n,r){r(30)("Float64",8,(function(t){return function(n,r,e){return t(this,n,r,e)}}))},function(t,n,r){var e=r(0),i=r(22),o=r(3),u=(r(1).Reflect||{}).apply,a=Function.apply;e(e.S+e.F*!r(2)((function(){u((function(){}))})),"Reflect",{apply:function(t,n,r){var e=i(t),c=o(r);return u?u(e,n,c):a.call(e,n,c)}})},function(t,n,r){var e=r(0),i=r(41),o=r(22),u=r(3),a=r(4),c=r(2),f=r(152),s=(r(1).Reflect||{}).construct,l=c((function(){function t(){}return!(s((function(){}),[],t)instanceof t)})),h=!c((function(){s((function(){}))}));e(e.S+e.F*(l||h),"Reflect",{construct:function(t,n){o(t),u(n);var r=arguments.length<3?t:o(arguments[2]);if(h&&!l)return s(t,n,r);if(t==r){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var e=[null];return e.push.apply(e,n),new(f.apply(t,e))}var c=r.prototype,p=i(a(c)?c:Object.prototype),v=Function.apply.call(t,p,n);return a(v)?v:p}})},function(t,n,r){var e=r(9),i=r(0),o=r(3),u=r(31);i(i.S+i.F*r(2)((function(){Reflect.defineProperty(e.f({},1,{value:1}),1,{value:2})})),"Reflect",{defineProperty:function(t,n,r){o(t),n=u(n,!0),o(r);try{return e.f(t,n,r),!0}catch(t){return!1}}})},function(t,n,r){var e=r(0),i=r(24).f,o=r(3);e(e.S,"Reflect",{deleteProperty:function(t,n){var r=i(o(t),n);return!(r&&!r.configurable)&&delete t[n]}})},function(t,n,r){"use strict";var e=r(0),i=r(3),o=function(t){this._t=i(t),this._i=0;var n,r=this._k=[];for(n in t)r.push(n)};r(159)(o,"Object",(function(){var t,n=this._k;do{if(this._i>=n.length)return{value:void 0,done:!0}}while(!((t=n[this._i++])in this._t));return{value:t,done:!1}})),e(e.S,"Reflect",{enumerate:function(t){return new o(t)}})},function(t,n,r){var e=r(24),i=r(43),o=r(17),u=r(0),a=r(4),c=r(3);u(u.S,"Reflect",{get:function t(n,r){var u,f,s=arguments.length<3?n:arguments[2];return c(n)===s?n[r]:(u=e.f(n,r))?o(u,"value")?u.value:void 0!==u.get?u.get.call(s):void 0:a(f=i(n))?t(f,r,s):void 0}})},function(t,n,r){var e=r(24),i=r(0),o=r(3);i(i.S,"Reflect",{getOwnPropertyDescriptor:function(t,n){return e.f(o(t),n)}})},function(t,n,r){var e=r(0),i=r(43),o=r(3);e(e.S,"Reflect",{getPrototypeOf:function(t){return i(o(t))}})},function(t,n,r){var e=r(0);e(e.S,"Reflect",{has:function(t,n){return n in t}})},function(t,n,r){var e=r(0),i=r(3),o=Object.isExtensible;e(e.S,"Reflect",{isExtensible:function(t){return i(t),!o||o(t)}})},function(t,n,r){var e=r(0);e(e.S,"Reflect",{ownKeys:r(173)})},function(t,n,r){var e=r(0),i=r(3),o=Object.preventExtensions;e(e.S,"Reflect",{preventExtensions:function(t){i(t);try{return o&&o(t),!0}catch(t){return!1}}})},function(t,n,r){var e=r(9),i=r(24),o=r(43),u=r(17),a=r(0),c=r(36),f=r(3),s=r(4);a(a.S,"Reflect",{set:function t(n,r,a){var l,h,p=arguments.length<4?n:arguments[3],v=i.f(f(n),r);if(!v){if(s(h=o(n)))return t(h,r,a,p);v=c(0)}if(u(v,"value")){if(!1===v.writable||!s(p))return!1;if(l=i.f(p,r)){if(l.get||l.set||!1===l.writable)return!1;l.value=a,e.f(p,r,l)}else e.f(p,r,c(0,a));return!0}return void 0!==v.set&&(v.set.call(p,a),!0)}})},function(t,n,r){var e=r(0),i=r(98);i&&e(e.S,"Reflect",{setPrototypeOf:function(t,n){i.check(t,n);try{return i.set(t,n),!0}catch(t){return!1}}})},function(t,n,r){r(410),t.exports=r(7).Array.includes},function(t,n,r){"use strict";var e=r(0),i=r(70)(!0);e(e.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(44)("includes")},function(t,n,r){r(412),t.exports=r(7).Array.flatMap},function(t,n,r){"use strict";var e=r(0),i=r(413),o=r(10),u=r(6),a=r(22),c=r(161);e(e.P,"Array",{flatMap:function(t){var n,r,e=o(this);return a(t),n=u(e.length),r=c(e,0),i(r,e,e,n,0,1,t,arguments[1]),r}}),r(44)("flatMap")},function(t,n,r){"use strict";var e=r(72),i=r(4),o=r(6),u=r(21),a=r(5)("isConcatSpreadable");t.exports=function t(n,r,c,f,s,l,h,p){for(var v,d,g=s,y=0,m=!!h&&u(h,p,3);y<f;){if(y in c){if(v=m?m(c[y],y,r):c[y],d=!1,i(v)&&(d=void 0!==(d=v[a])?!!d:e(v)),d&&l>0)g=t(n,r,v,o(v.length),g,l-1)-1;else{if(g>=9007199254740991)throw TypeError();n[g]=v}g++}y++}return g}},function(t,n,r){r(415),t.exports=r(7).String.padStart},function(t,n,r){"use strict";var e=r(0),i=r(174),o=r(78),u=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);e(e.P+e.F*u,"String",{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},function(t,n,r){r(417),t.exports=r(7).String.padEnd},function(t,n,r){"use strict";var e=r(0),i=r(174),o=r(78),u=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(o);e(e.P+e.F*u,"String",{padEnd:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},function(t,n,r){r(419),t.exports=r(7).String.trimLeft},function(t,n,r){"use strict";r(50)("trimLeft",(function(t){return function(){return t(this,1)}}),"trimStart")},function(t,n,r){r(421),t.exports=r(7).String.trimRight},function(t,n,r){"use strict";r(50)("trimRight",(function(t){return function(){return t(this,2)}}),"trimEnd")},function(t,n,r){r(423),t.exports=r(94).f("asyncIterator")},function(t,n,r){r(146)("asyncIterator")},function(t,n,r){r(425),t.exports=r(7).Object.getOwnPropertyDescriptors},function(t,n,r){var e=r(0),i=r(173),o=r(19),u=r(24),a=r(110);e(e.S,"Object",{getOwnPropertyDescriptors:function(t){for(var n,r,e=o(t),c=u.f,f=i(e),s={},l=0;f.length>l;)void 0!==(r=c(e,n=f[l++]))&&a(s,n,r);return s}})},function(t,n,r){r(427),t.exports=r(7).Object.values},function(t,n,r){var e=r(0),i=r(175)(!1);e(e.S,"Object",{values:function(t){return i(t)}})},function(t,n,r){r(429),t.exports=r(7).Object.entries},function(t,n,r){var e=r(0),i=r(175)(!0);e(e.S,"Object",{entries:function(t){return i(t)}})},function(t,n,r){"use strict";r(167),r(431),t.exports=r(7).Promise.finally},function(t,n,r){"use strict";var e=r(0),i=r(7),o=r(1),u=r(60),a=r(169);e(e.P+e.R,"Promise",{finally:function(t){var n=u(this,i.Promise||o.Promise),r="function"==typeof t;return this.then(r?function(r){return a(n,t()).then((function(){return r}))}:t,r?function(r){return a(n,t()).then((function(){throw r}))}:t)}})},function(t,n,r){r(433),r(434),r(435),t.exports=r(7)},function(t,n,r){var e=r(1),i=r(0),o=r(78),u=[].slice,a=/MSIE .\./.test(o),c=function(t){return function(n,r){var e=arguments.length>2,i=!!e&&u.call(arguments,2);return t(e?function(){("function"==typeof n?n:Function(n)).apply(this,i)}:n,r)}};i(i.G+i.B+i.F*a,{setTimeout:c(e.setTimeout),setInterval:c(e.setInterval)})},function(t,n,r){var e=r(0),i=r(116);e(e.G+e.B,{setImmediate:i.set,clearImmediate:i.clear})},function(t,n,r){for(var e=r(113),i=r(39),o=r(15),u=r(1),a=r(18),c=r(51),f=r(5),s=f("iterator"),l=f("toStringTag"),h=c.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=i(p),d=0;d<v.length;d++){var g,y=v[d],m=p[y],_=u[y],x=_&&_.prototype;if(x&&(x[s]||a(x,s,h),x[l]||a(x,l,y),c[y]=h,m))for(g in e)x[g]||o(x,g,e[g],!0)}},function(t,n,r){var e=function(t){"use strict";var n=Object.prototype,r=n.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},i=e.iterator||"@@iterator",o=e.asyncIterator||"@@asyncIterator",u=e.toStringTag||"@@toStringTag";function a(t,n,r,e){var i=n&&n.prototype instanceof s?n:s,o=Object.create(i.prototype),u=new b(e||[]);return o._invoke=function(t,n,r){var e="suspendedStart";return function(i,o){if("executing"===e)throw new Error("Generator is already running");if("completed"===e){if("throw"===i)throw o;return M()}for(r.method=i,r.arg=o;;){var u=r.delegate;if(u){var a=_(u,r);if(a){if(a===f)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===e)throw e="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);e="executing";var s=c(t,n,r);if("normal"===s.type){if(e=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(e="completed",r.method="throw",r.arg=s.arg)}}}(t,r,u),o}function c(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=a;var f={};function s(){}function l(){}function h(){}var p={};p[i]=function(){return this};var v=Object.getPrototypeOf,d=v&&v(v(A([])));d&&d!==n&&r.call(d,i)&&(p=d);var g=h.prototype=s.prototype=Object.create(p);function y(t){["next","throw","return"].forEach((function(n){t[n]=function(t){return this._invoke(n,t)}}))}function m(t,n){var e;this._invoke=function(i,o){function u(){return new n((function(e,u){!function e(i,o,u,a){var f=c(t[i],t,o);if("throw"!==f.type){var s=f.arg,l=s.value;return l&&"object"==typeof l&&r.call(l,"__await")?n.resolve(l.__await).then((function(t){e("next",t,u,a)}),(function(t){e("throw",t,u,a)})):n.resolve(l).then((function(t){s.value=t,u(s)}),(function(t){return e("throw",t,u,a)}))}a(f.arg)}(i,o,e,u)}))}return e=e?e.then(u,u):u()}}function _(t,n){var r=t.iterator[n.method];if(void 0===r){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,_(t,n),"throw"===n.method))return f;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var e=c(r,t.iterator,n.arg);if("throw"===e.type)return n.method="throw",n.arg=e.arg,n.delegate=null,f;var i=e.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,f):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function x(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function w(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function b(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function A(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,o=function n(){for(;++e<t.length;)if(r.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:M}}function M(){return{value:void 0,done:!0}}return l.prototype=g.constructor=h,h.constructor=l,h[u]=l.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===l||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(m.prototype),m.prototype[o]=function(){return this},t.AsyncIterator=m,t.async=function(n,r,e,i,o){void 0===o&&(o=Promise);var u=new m(a(n,r,e,i),o);return t.isGeneratorFunction(r)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},y(g),g[u]="Generator",g[i]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var r in t)n.push(r);return n.reverse(),function r(){for(;n.length;){var e=n.pop();if(e in t)return r.value=e,r.done=!1,r}return r.done=!0,r}},t.values=A,b.prototype={constructor:b,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(r,e){return u.type="throw",u.arg=t,n.next=r,e&&(n.method="next",n.arg=void 0),!!e}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],u=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=t,u.arg=n,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(u)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),f},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),w(r),f}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var i=e.arg;w(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:A(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}},function(t,n,r){r(438),t.exports=r(176).global},function(t,n,r){var e=r(439);e(e.G,{global:r(118)})},function(t,n,r){var e=r(118),i=r(176),o=r(440),u=r(442),a=r(449),c=function(t,n,r){var f,s,l,h=t&c.F,p=t&c.G,v=t&c.S,d=t&c.P,g=t&c.B,y=t&c.W,m=p?i:i[n]||(i[n]={}),_=m.prototype,x=p?e:v?e[n]:(e[n]||{}).prototype;for(f in p&&(r=n),r)(s=!h&&x&&void 0!==x[f])&&a(m,f)||(l=s?x[f]:r[f],m[f]=p&&"function"!=typeof x[f]?r[f]:g&&s?o(l,e):y&&x[f]==l?function(t){var n=function(n,r,e){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,r)}return new t(n,r,e)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):d&&"function"==typeof l?o(Function.call,l):l,d&&((m.virtual||(m.virtual={}))[f]=l,t&c.R&&_&&!_[f]&&u(_,f,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n,r){var e=r(441);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,i){return t.call(n,r,e,i)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,r){var e=r(443),i=r(448);t.exports=r(120)?function(t,n,r){return e.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(444),i=r(445),o=r(447),u=Object.defineProperty;n.f=r(120)?Object.defineProperty:function(t,n,r){if(e(t),n=o(n,!0),e(r),i)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(119);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,n,r){t.exports=!r(120)&&!r(177)((function(){return 7!=Object.defineProperty(r(446)("div"),"a",{get:function(){return 7}}).a}))},function(t,n,r){var e=r(119),i=r(118).document,o=e(i)&&e(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,n,r){var e=r(119);t.exports=function(t,n){if(!e(t))return t;var r,i;if(n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!e(i=r.call(t)))return i;if(!n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(451),i=r(11),o=r(27),u=r(13);t.exports=function(t,n){var r,a,c,f;if(2===(r=arguments.length))return i(t)||i(n)?NaN:t===u||n===u?u:t===n&&0===t?e(t)?t:n:t>n?t:n;for(a=o,f=0;f<r;f++){if(c=arguments[f],i(c)||c===u)return c;(c>a||c===a&&0===c&&e(c))&&(a=c)}return a}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(452);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(13);t.exports=function(t){return 0===t&&1/t===e}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t){return t!=t}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=Number},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/e_log2.c}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var e=r(46),i=r(126),o=r(62),u=r(81),a=r(11),c=r(63),f=r(27),s=r(502),l=[0,0];t.exports=function(t){var n,r,h,p,v;if(a(t)||t<0)return NaN;if(u(l,t),v=0,(r=l[0])<1048576){if(0==(2147483647&r|l[1]))return f;v-=54,r=e(t*=0x40000000000000)}return r>=2146435072?t+t:(v+=(r>>20)-c|0,t=i(t,(r&=1048575)|1072693248^(p=r+614244&1048576|0)),v+=p>>20|0,h=s(t),1.6751713164886512e-10*((t-=1)+h)+1.4426950407214463*(t-(n=o(t,0))+h)+1.4426950407214463*n+v)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(33),i=r(34),o=r(476),u=new i(1),a=new e(u.buffer);t.exports=function(t){return u[0]=t,a[o]}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(458);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(178),i=r(123),o=r(467);t.exports=function(){var t,n;if("function"!=typeof o)return!1;try{n=new o(n=[1,3.14,-3.14,i+1,i+2]),t=e(n)&&1===n[0]&&3===n[1]&&n[2]===i-2&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(12),i="function"==typeof Uint32Array;t.exports=function(t){return i&&t instanceof Uint32Array||"[object Uint32Array]"===e(t)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(461)();t.exports=function(){return e&&"symbol"==typeof Symbol.toStringTag}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(462);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(179);t.exports=function(t){return e.call(t)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(47),i=r(466),o=r(179);t.exports=function(t){var n,r,u;if(null==t)return o.call(t);r=t[i],n=e(t,i);try{t[i]=void 0}catch(n){return o.call(t)}return u=o.call(t),n?t[i]=r:delete t[i],u}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=Object.prototype.hasOwnProperty;t.exports=function(t,n){return null!=t&&e.call(t,n)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e="function"==typeof Symbol?Symbol.toStringTag:"";t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e="function"==typeof Uint32Array?Uint32Array:null;t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e="function"==typeof Uint32Array?Uint32Array:null;t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(){throw new Error("not implemented")}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(471),i=r(473);t.exports=function(){var t,n;if("function"!=typeof i)return!1;try{n=new i([1,3.14,-3.14,NaN]),t=e(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(472);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(12),i="function"==typeof Float64Array;t.exports=function(t){return i&&t instanceof Float64Array||"[object Float64Array]"===e(t)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e="function"==typeof Float64Array?Float64Array:null;t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e="function"==typeof Float64Array?Float64Array:null;t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(){throw new Error("not implemented")}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e;e=!0===r(61)?1:0,t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e,i,o=r(478);(i=new o.uint16(1))[0]=4660,e=52===new o.uint8(i.buffer)[0],t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(124),i={uint16:r(125),uint8:e};t.exports=i},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(480);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(481),i=r(483),o=r(484);t.exports=function(){var t,n;if("function"!=typeof o)return!1;try{n=new o(n=[1,3.14,-3.14,i+1,i+2]),t=e(n)&&1===n[0]&&3===n[1]&&n[2]===i-2&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(482);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(12),i="function"==typeof Uint8Array;t.exports=function(t){return i&&t instanceof Uint8Array||"[object Uint8Array]"===e(t)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=255},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e="function"==typeof Uint8Array?Uint8Array:null;t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e="function"==typeof Uint8Array?Uint8Array:null;t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(){throw new Error("not implemented")}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(488);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(489),i=r(491),o=r(492);t.exports=function(){var t,n;if("function"!=typeof o)return!1;try{n=new o(n=[1,3.14,-3.14,i+1,i+2]),t=e(n)&&1===n[0]&&3===n[1]&&n[2]===i-2&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(490);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(12),i="function"==typeof Uint16Array;t.exports=function(t){return i&&t instanceof Uint16Array||"[object Uint16Array]"===e(t)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=65535},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e="function"==typeof Uint16Array?Uint16Array:null;t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e="function"==typeof Uint16Array?Uint16Array:null;t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(){throw new Error("not implemented")}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(33),i=r(34),o=r(496),u=new i(1),a=new e(u.buffer);t.exports=function(t,n){return u[0]=t,a[o]=n>>>0,u[0]}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e;e=!0===r(61)?1:0,t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(33),i=r(34),o=r(498),u=new i(1),a=new e(u.buffer);t.exports=function(t,n){return u[0]=t,a[o]=n>>>0,u[0]}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e;e=!0===r(61)?0:1,t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(500);t.exports=function(t,n){return 1===arguments.length?e([0,0],t):e(t,n)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(33),i=r(34),o=r(501),u=new i(1),a=new e(u.buffer),c=o.HIGH,f=o.LOW;t.exports=function(t,n){return u[0]=n,t[0]=a[c],t[1]=a[f],t}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e,i,o;!0===r(61)?(i=1,o=0):(i=0,o=1),e={HIGH:i,LOW:o},t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
* The following copyright and license were part of the original implementation available as part of [FreeBSD]{@link https://svnweb.freebsd.org/base/release/9.3.0/lib/msun/src/k_log.h}. The implementation follows the original, but has been modified for JavaScript.
*
* ```text
* Copyright (C) 1993 by Sun Microsystems, Inc. All rights reserved.
*
* Developed at SunPro, a Sun Microsystems, Inc. business.
* Permission to use, copy, modify, and distribute this
* software is freely granted, provided that this notice
* is preserved.
* ```
*/var e=r(46),i=r(503),o=r(504);t.exports=function(t){var n,r,u,a,c,f,s,l,h,p;return a=t-1,(1048575&2+(u=e(t)))<3?0===a?0:a*a*(.3333333333333333*a-.5):(h=(u&=1048575)-398458|0,p=440401-u|0,r=(l=(f=(c=a/(2+a))*c)*f)*i(l),s=f*o(l)+r,(h|=p)>0?c*((n=.5*a*a)+s)-n:c*(s-a))}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(127);t.exports=function(t,n,r){e(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(507);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(508);t.exports=function(){var t;if("function"!=typeof e)return!1;try{e({},"x",{}),t=!0}catch(n){t=!1}return t}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e="function"==typeof Object.defineProperty?Object.defineProperty:null;t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=Object.defineProperty;t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(511),i=r(181),o=Object.prototype,u=o.__defineGetter__,a=o.__defineSetter__,c=o.__lookupGetter__,f=o.__lookupSetter__;t.exports=function(t,n,r){var s,l,h,p;if(!i(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if(!i(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l=e(r,"value"))&&(c.call(t,n)||f.call(t,n)?(s=t.__proto__,t.__proto__=o,delete t[n],t[n]=r.value,t.__proto__=s):t[n]=r.value),h=e(r,"get"),p=e(r,"set"),l&&(h||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return h&&u&&u.call(t,n,r.get),p&&a&&a.call(t,n,r.set),t}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(512);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t,n){return null!=t&&("symbol"==typeof n?n in Object(t):String(n)in Object(t))}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(182);t.exports=function(t){return"object"==typeof t&&null!==t&&!e(t)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e,i=r(12);e=Array.isArray?Array.isArray:function(t){return"[object Array]"===i(t)},t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(183)();t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(127);t.exports=function(t,n,r){e(t,n,{configurable:!1,enumerable:!1,get:r})}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(127);t.exports=function(t,n,r,i){e(t,n,{configurable:!1,enumerable:!1,get:r,set:i})}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(181),i=r(55),o=r(129),u=r(47),a=r(12),c=Object.prototype;t.exports=function(t){var n;return!!e(t)&&(!(n=o(t))||!u(t,"constructor")&&u(n,"constructor")&&i(n.constructor)&&"[object Function]"===a(n.constructor)&&u(n,"isPrototypeOf")&&i(n.isPrototypeOf)&&(n===c||function(t){var n;for(n in t)if(!u(t,n))return!1;return!0}(t)))}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(520);t.exports=function(t){return"function"===e(t)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(521),i=r(534),o=r(542),u=e()?o:i;t.exports=u},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(522),i=r(523),o=r(533);t.exports=function(){return"function"==typeof e||"object"==typeof o||"function"==typeof i}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=/./},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(524)(),i=e.document&&e.document.childNodes;t.exports=i},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(525);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(187).isPrimitive,i=r(529),o=r(530),u=r(531),a=r(532);t.exports=function(t){if(arguments.length){if(!e(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return i()}if(o)return o;if(u)return u;if(a)return a;throw new Error("unexpected error. Unable to resolve global object.")}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(188),i=r(189);t.exports=function(t){return e(t)||i(t)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(528);t.exports=function(t){try{return e.call(t),!0}catch(t){return!1}}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=Boolean.prototype.toString;t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(){return new Function("return this;")()}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e="object"==typeof self?self:null;t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e="object"==typeof window?window:null;t.exports=e},function(t,n,r){"use strict";(function(n){
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
var r="object"==typeof n?n:null;t.exports=r}).call(this,r(128))},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=Int8Array;t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(82);t.exports=function(t){var n;return null===t?"null":"object"===(n=typeof t)?e(t).toLowerCase():n}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(12),i=r(190),o=r(536);t.exports=function(t){var n,r,u;if(("Object"===(r=e(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(u=t.constructor).name)return u.name;if(n=i.exec(u.toString()))return n[1]}return o(t)?"Buffer":r}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(537);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(538);t.exports=function(t){return e(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(14),i=r(539),o=r(541);e(o,"isObjectLikeArray",i(o)),t.exports=o},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(540);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(182);t.exports=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var r,i;if(!e(n))return!1;if(0===(r=n.length))return!1;for(i=0;i<r;i++)if(!1===t(n[i]))return!1;return!0}}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t){return null!==t&&"object"==typeof t}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(82);t.exports=function(t){return e(t).toLowerCase()}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(544);t.exports=function(t){return null==t?null:(t=Object(t),e(t))}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e,i=r(55),o=r(545),u=r(546);e=i(Object.getPrototypeOf)?o:u,t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=Object.getPrototypeOf;t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(12),i=r(547);t.exports=function(t){var n=i(t);return n||null===n?n:"[object Function]"===e(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t){return t.__proto__}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t){return function(){return t}}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(550);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(){}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(14),i=r(552);e(i,"factory",r(191)),t.exports=i},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(191)({seed:r(206)()});t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(554);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(64),i=r(557);t.exports=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&e(t.length)&&t.length>=0&&t.length<=i}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(131);t.exports=function(t){return e(t)===t}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=Math.floor;t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=9007199254740991},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(14),i=r(559),o=r(192),u=r(199);e(i,"isPrimitive",o),e(i,"isObject",u),t.exports=i},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(192),i=r(199);t.exports=function(t){return e(t)||i(t)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(194),i=r(198);t.exports=function(t){return e(t)||i(t)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(195),i=r(196);t.exports=function(t){return e(t)||i(t)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(563);t.exports=function(t){try{return e.call(t),!0}catch(t){return!1}}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(121).prototype.toString;t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=9007199254740991},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(566);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t,n){var r,e;return((r=(65535&(t>>>=0))>>>0)*(e=(65535&(n>>>=0))>>>0)>>>0)+((t>>>16>>>0)*e+r*(n>>>16>>>0)<<16>>>0)>>>0}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(14),i=r(568);e(i,"ndarray",r(569)),t.exports=i},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t,n,r,e,i){var o,u,a,c;if(t<=0)return e;if(1===r&&1===i){if((a=t%8)>0)for(c=0;c<a;c++)e[c]=n[c];if(t<8)return e;for(c=a;c<t;c+=8)e[c]=n[c],e[c+1]=n[c+1],e[c+2]=n[c+2],e[c+3]=n[c+3],e[c+4]=n[c+4],e[c+5]=n[c+5],e[c+6]=n[c+6],e[c+7]=n[c+7];return e}for(o=r<0?(1-t)*r:0,u=i<0?(1-t)*i:0,c=0;c<t;c++)e[u]=n[o],o+=r,u+=i;return e}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t,n,r,e,i,o,u){var a,c,f,s;if(t<=0)return i;if(a=e,c=u,1===r&&1===o){if((f=t%8)>0)for(s=0;s<f;s++)i[c]=n[a],a+=r,c+=o;if(t<8)return i;for(s=f;s<t;s+=8)i[c]=n[a],i[c+1]=n[a+1],i[c+2]=n[a+2],i[c+3]=n[a+3],i[c+4]=n[a+4],i[c+5]=n[a+5],i[c+6]=n[a+6],i[c+7]=n[a+7],a+=8,c+=8;return i}for(s=0;s<t;s++)i[c]=n[a],a+=r,c+=o;return i}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(571),i=r(621);t.exports=function(t){var n,r;if(!e(t))throw new TypeError("invalid argument. Must provide a typed array. Value: `"+t+"`.");for((n={}).type=i(t),n.data=[],r=0;r<t.length;r++)n.data.push(t[r]);return n}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(572);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(82),i=r(573),o=r(129),u=r(180),a=r(34),c=r(578),f=r(620),s=u()?o(a):l;function l(){}s="TypedArray"===i(s)?s:l,t.exports=function(t){var n,r;if("object"!=typeof t||null===t)return!1;if(t instanceof s)return!0;for(r=0;r<c.length;r++)if(t instanceof c[r])return!0;for(;t;){for(n=e(t),r=0;r<f.length;r++)if(f[r]===n)return!0;t=o(t)}return!1}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(574);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(55),i=r(575),o=r(190),u=i();t.exports=function(t){if(!1===e(t))throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return u?t.name:o.exec(t.toString())[1]}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(576);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(577);t.exports=function(){return"foo"===e.name}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(){}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(201),i=r(124),o=r(202),u=r(203),a=r(125),c=r(204),f=r(33),s=r(205),l=[r(34),s,c,f,u,a,e,i,o];t.exports=l},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(580);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(581),i=r(583),o=r(584),u=r(585);t.exports=function(){var t,n;if("function"!=typeof u)return!1;try{n=new u([1,3.14,-3.14,i+1]),t=e(n)&&1===n[0]&&3===n[1]&&-3===n[2]&&n[3]===o}catch(n){t=!1}return t}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(582);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(12),i="function"==typeof Int8Array;t.exports=function(t){return i&&t instanceof Int8Array||"[object Int8Array]"===e(t)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=127},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=-128},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e="function"==typeof Int8Array?Int8Array:null;t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e="function"==typeof Int8Array?Int8Array:null;t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(){throw new Error("not implemented")}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(589);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(590),i=r(592);t.exports=function(){var t,n;if("function"!=typeof i)return!1;try{n=new i([-1,0,1,3.14,4.99,255,256]),t=e(n)&&0===n[0]&&0===n[1]&&1===n[2]&&3===n[3]&&5===n[4]&&255===n[5]&&255===n[6]}catch(n){t=!1}return t}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(591);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(12),i="function"==typeof Uint8ClampedArray;t.exports=function(t){return i&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===e(t)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(){throw new Error("not implemented")}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(596);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(597),i=r(599),o=r(600),u=r(601);t.exports=function(){var t,n;if("function"!=typeof u)return!1;try{n=new u([1,3.14,-3.14,i+1]),t=e(n)&&1===n[0]&&3===n[1]&&-3===n[2]&&n[3]===o}catch(n){t=!1}return t}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(598);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(12),i="function"==typeof Int16Array;t.exports=function(t){return i&&t instanceof Int16Array||"[object Int16Array]"===e(t)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=32767},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=-32768},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e="function"==typeof Int16Array?Int16Array:null;t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e="function"==typeof Int16Array?Int16Array:null;t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(){throw new Error("not implemented")}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(605);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(606),i=r(608),o=r(609),u=r(610);t.exports=function(){var t,n;if("function"!=typeof u)return!1;try{n=new u([1,3.14,-3.14,i+1]),t=e(n)&&1===n[0]&&3===n[1]&&-3===n[2]&&n[3]===o}catch(n){t=!1}return t}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(607);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(12),i="function"==typeof Int32Array;t.exports=function(t){return i&&t instanceof Int32Array||"[object Int32Array]"===e(t)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=2147483647},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=-2147483648},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e="function"==typeof Int32Array?Int32Array:null;t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e="function"==typeof Int32Array?Int32Array:null;t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(){throw new Error("not implemented")}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(614);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(615),i=r(13),o=r(617);t.exports=function(){var t,n;if("function"!=typeof o)return!1;try{n=new o([1,3.14,-3.14,5e40]),t=e(n)&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===i}catch(n){t=!1}return t}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(616);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(12),i="function"==typeof Float32Array;t.exports=function(t){return i&&t instanceof Float32Array||"[object Float32Array]"===e(t)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e="function"==typeof Float32Array?Float32Array:null;t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e="function"==typeof Float32Array?Float32Array:null;t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(){throw new Error("not implemented")}},function(t){t.exports=JSON.parse('["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]')},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(622),i=r(82),o=r(129),u=r(624);t.exports=function(t){var n,r;for(r=0;r<u.length;r++)if(e(t,u[r][0]))return u[r][1];for(;t;){for(n=i(t),r=0;r<u.length;r++)if(n===u[r][1])return u[r][1];t=o(t)}}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(623);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t,n){if("function"!=typeof n)throw new TypeError("invalid argument. `constructor` argument must be callable. Value: `"+n+"`.");return t instanceof n}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(201),i=r(124),o=r(202),u=r(203),a=r(125),c=r(204),f=r(33),s=r(205),l=[[r(34),"Float64Array"],[s,"Float32Array"],[c,"Int32Array"],[f,"Uint32Array"],[u,"Int16Array"],[a,"Uint16Array"],[e,"Int8Array"],[i,"Uint8Array"],[o,"Uint8ClampedArray"]];t.exports=l},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(48).isPrimitive,i=r(626);t.exports=function(t,n){return!e(t)||i(t)?new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+t+"`."):!e(n)||i(n)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+n+"`."):t>=n?new RangeError("invalid argument. Minimum support `a` must be less than maximum support `b`. Value: `["+t+","+n+"]`."):null}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(14),i=r(627),o=r(207),u=r(208);e(i,"isPrimitive",o),e(i,"isObject",u),t.exports=i},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(207),i=r(208);t.exports=function(t){return e(t)||i(t)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t,n,r){var e=t();return r*e+(1-e)*n}},function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(631),i=r(11),o=r(27),u=r(13);t.exports=function(t,n){var r,a,c,f;if(2===(r=arguments.length))return i(t)||i(n)?NaN:t===o||n===o?o:t===n&&0===t?e(t)?t:n:t<n?t:n;for(a=u,f=0;f<r;f++){if(c=arguments[f],i(c)||c===o)return c;(c<a||c===a&&0===c&&e(c))&&(a=c)}return a}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(632);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(27);t.exports=function(t){return 0===t&&1/t===e}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=Math.round;t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(209),i=r(47),o=r(48).isPrimitive,u=r(636);t.exports=function(t,n){var r,a;if(!e(t))throw new TypeError("invalid argument. First argument must be an iterator. Value: `"+t+"`.");if(arguments.length>1){if(!o(n))throw new TypeError("invalid argument. Second argument must be a number primitive. Value: `"+n+"`.");r=u(n)}else r=u();for(;"number"==typeof(a=t.next()).value?r(a.value):i(a,"value")&&r(NaN),!a.done;);return r()}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(55);t.exports=function(t){return null!==t&&"object"==typeof t&&e(t.next)&&0===t.next.length}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(637);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(48).isPrimitive,i=r(83),o=r(11);t.exports=function(t){var n,r,u,a;if(u=0,a=0,arguments.length){if(!e(t))throw new TypeError("invalid argument. Must provide a number primitive. Value: `"+t+"`.");return r=t,f}return r=0,c;function c(t){return 0===arguments.length?0===a?null:1===a?o(u)?NaN:0:i(u/(a-1)):(u+=(n=t-r)*(t-(r+=n/(a+=1))),a<2?o(u)?NaN:0:i(u/(a-1)))}function f(t){return 0===arguments.length?0===a?null:i(u/a):i((u+=(n=t-r)*n)/(a+=1))}}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=Math.sqrt;t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(14),i=r(55),o=r(640),u=r(643);t.exports=function t(n){var r,a,c,f,s;if(!o(n))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+n+"`.");if(arguments.length>1){if(f=arguments[1],!i(f))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+f+"`.");r=arguments[2]}return s=-1,e(a={},"next",f?l:h),e(a,"return",p),u&&e(a,u,v),a;function l(){return s+=1,c||s>=n.length?{done:!0}:{value:f.call(r,n[s],s,n),done:!1}}function h(){return s+=1,c||s>=n.length?{done:!0}:{value:n[s],done:!1}}function p(t){return c=!0,arguments.length?{value:t,done:!0}:{done:!0}}function v(){return f?t(n,f,r):t(n)}}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(641);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(64),i=r(642);t.exports=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&e(t.length)&&t.length>=0&&t.length<=i}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=4294967295},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(644);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(645)()?Symbol.iterator:null;t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(646);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(47);t.exports=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&e(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(209),i=r(47),o=r(648);t.exports=function(t){var n,r;if(!e(t))throw new TypeError("invalid argument. Must provide an iterator. Value: `"+t+"`.");for(n=o();"number"==typeof(r=t.next()).value?n(r.value):i(r,"value")&&n(NaN),!r.done;);return n()}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(649);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(){var t,n;return t=0,n=0,function(r){if(0===arguments.length)return 0===n?null:t;return t+=(r-t)/(n+=1)}}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(210),i=r(214),o=r(83),u=r(217),a=r(13),c=r(11);t.exports=function(t,n,r){var f;return c(t)||c(n)||c(r)||r<0?NaN:0===r?t===n?a:0:(f=i(r,2),1/o(f*u)*e(-1/(2*f)*i(t-n,2)))}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var e=r(11),i=r(652),o=r(27),u=r(13),a=r(656);t.exports=function(t){var n;return e(t)||t===u?t:t===o?0:t>709.782712893384?u:t<-745.1332191019411?0:t>-1/(1<<28)&&t<1/(1<<28)?1+t:(n=i(t<0?1.4426950408889634*t-.5:1.4426950408889634*t+.5),a(t-.6931471803691238*n,1.9082149292705877e-10*n,n))}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(653);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(131),i=r(654);t.exports=function(t){return t<0?i(t):e(t)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(655);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=Math.ceil;t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var e=r(211),i=r(673);t.exports=function(t,n,r){var o,u,a;return a=(o=t-n)-(u=o*o)*i(u),e(1-(n-o*a/(2-a)-t),r)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(13),i=r(27),o=r(63),u=r(658),a=r(659),c=r(660),f=r(11),s=r(132),l=r(212),h=r(665),p=r(670),v=r(81),d=r(213),g=[0,0],y=[0,0];t.exports=function(t,n){var r,m;return 0===t||f(t)||s(t)?t:(h(g,t),n+=g[1],(n+=p(t=g[0]))<c?l(0,t):n>u?t<0?i:e:(n<=a?(n+=52,m=2220446049250313e-31):m=1,v(y,t),r=y[0],r&=2148532223,m*d(r|=n+o<<20,y[1])))}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=1023},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=-1023},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=-1074},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(13),i=r(27);t.exports=function(t){return t===e||t===i}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(81),i=r(46),o=r(213),u=[0,0];t.exports=function(t,n){var r,a;return e(u,t),r=u[0],r&=2147483647,a=i(n),o(r|=a&=2147483648,u[1])}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(33),i=r(34),o=r(664),u=new i(1),a=new e(u.buffer),c=o.HIGH,f=o.LOW;t.exports=function(t,n){return a[c]=t,a[f]=n,u[0]}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e,i,o;!0===r(61)?(i=1,o=0):(i=0,o=1),e={HIGH:i,LOW:o},t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(666);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(667);t.exports=function(t,n){return 1===arguments.length?e([0,0],t):e(t,n)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(668),i=r(132),o=r(11),u=r(133);t.exports=function(t,n){return o(n)||i(n)?(t[0]=n,t[1]=0,t):0!==n&&u(n)<e?(t[0]=4503599627370496*n,t[1]=-52,t):(t[0]=n,t[1]=0,t)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=22250738585072014e-324},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t){return t<0?-t:0===t?0:t}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(671);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(46),i=r(672),o=r(63);t.exports=function(t){var n=e(t);return(n=(n&i)>>>20)-o|0}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=2146435072},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t){return 0===t?.16666666666666602:.16666666666666602+t*(t*(6613756321437934e-20+t*(4.1381367970572385e-8*t-16533902205465252e-22))-.0027777777777015593)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var e=r(11),i=r(215),o=r(132),u=r(64),a=r(83),c=r(133),f=r(81),s=r(62),l=r(216),h=r(27),p=r(13),v=r(679),d=r(680),g=r(681),y=r(682),m=r(684),_=r(686),x=1e300,w=1e-300,b=[0,0],A=[0,0];t.exports=function t(n,r){var M,S,E,N,j,T,O,k,P,C,L,F,I,R;if(e(n)||e(r))return NaN;if(f(b,r),j=b[0],0===b[1]){if(0===r)return 1;if(1===r)return n;if(-1===r)return 1/n;if(.5===r)return a(n);if(-.5===r)return 1/a(n);if(2===r)return n*n;if(3===r)return n*n*n;if(4===r)return(n*=n)*n;if(o(r))return g(n,r)}if(f(b,n),N=b[0],0===b[1]){if(0===N)return v(n,r);if(1===n)return 1;if(-1===n&&i(r))return-1;if(o(n))return n===h?t(-0,-r):r<0?0:p}if(n<0&&!1===u(r))return(n-n)/(n-n);if(E=c(n),M=2147483647&N|0,S=2147483647&j|0,O=j>>>31|0,T=(T=N>>>31|0)&&i(r)?-1:1,S>1105199104){if(S>1139802112)return d(n,r);if(M<1072693247)return 1===O?T*x*x:T*w*w;if(M>1072693248)return 0===O?T*x*x:T*w*w;L=m(A,E)}else L=y(A,E,M);if(C=(r-(k=s(r,0)))*L[0]+r*L[1],P=k*L[0],f(b,F=C+P),I=l(b[0]),R=l(b[1]),I>=1083179008){if(0!=(I-1083179008|R))return T*x*x;if(C+8008566259537294e-32>F-P)return T*x*x}else if((2147483647&I)>=1083231232){if(0!=(I-3230714880|R))return T*w*w;if(C<=F-P)return T*w*w}return T*(F=_(I,P,C))}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(676);t.exports=function(t){return e(t>0?t-1:t+1)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(677);t.exports=e},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(64);t.exports=function(t){return e(t/2)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t){return 0|t}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var e=r(215),i=r(212),o=r(27),u=r(13);t.exports=function(t,n){return n===o?u:n===u?0:n>0?e(n)?t:0:e(n)?i(u,t):u}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var e=r(46);t.exports=function(t,n){return(2147483647&e(t))<=1072693247?n<0?1/0:0:n>0?1/0:0}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(133),i=r(13);t.exports=function(t,n){return-1===t?(t-t)/(t-t):1===t?1:e(t)<1==(n===i)?0:i}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var e=r(46),i=r(62),o=r(126),u=r(63),a=r(683),c=[1,1.5],f=[0,.5849624872207642],s=[0,1.350039202129749e-8];t.exports=function(t,n,r){var l,h,p,v,d,g,y,m,_,x,w,b,A,M,S,E,N,j,T,O;return j=0,r<1048576&&(j-=53,r=e(n*=9007199254740992)),j+=(r>>20)-u|0,r=1072693248|(T=1048575&r|0),T<=235662?O=0:T<767610?O=1:(O=0,j+=1,r-=1048576),l=524288+(r>>1|536870912),d=(N=1/((n=o(n,r))+(y=c[O])))*((E=n-y)-(v=i(h=E*N,0))*(g=o(0,l+=O<<18))-v*(n-(g-y))),S=(p=h*h)*p*a(p),g=i(g=3+(p=v*v)+(S+=d*(v+h)),0),A=(w=-7.028461650952758e-9*(_=i(_=(E=v*g)+(N=d*g+(S-(g-3-p))*h),0))+.9617966939259756*(N-(_-E))+s[O])-((b=i(b=(x=.9617967009544373*_)+w+(m=f[O])+(M=j),0))-M-m-x),t[0]=b,t[1]=A,t}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t){return 0===t?.5999999999999946:.5999999999999946+t*(.4285714285785502+t*(.33333332981837743+t*(.272728123808534+t*(.23066074577556175+.20697501780033842*t))))}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var e=r(62),i=r(685);t.exports=function(t,n){var r,o,u,a,c;return r=(c=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*i(u)))-((o=e(o=(a=1.4426950216293335*u)+c,0))-a),t[0]=o,t[1]=r,t}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t){return 0===t?.5:.5+t*(.25*t-.3333333333333333)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
*/var e=r(46),i=r(126),o=r(62),u=r(216),a=r(211),c=r(687),f=r(63),s=r(688);t.exports=function(t,n,r){var l,h,p,v,d,g,y,m,_,x;return x=((_=2147483647&t|0)>>20)-f|0,m=0,_>1071644672&&(l=((m=t+(1048576>>x+1)>>>0)&~(1048575>>(x=((2147483647&m)>>20)-f|0)))>>>0,m=(1048575&m|1048576)>>20-x>>>0,t<0&&(m=-m),n-=p=i(0,l)),g=(d=(r-((p=o(p=r+n,0))-n))*c+-1.904654299957768e-9*p)-((y=(v=.6931471824645996*p)+d)-v),h=y-(p=y*y)*s(p),t=e(y=1-(y*h/(h-2)-(g+y*g)-y)),t=u(t),y=(t+=m<<20>>>0)>>20<=0?a(y,m):i(y,t)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=.6931471805599453},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/t.exports=function(t){return 0===t?.16666666666666602:.16666666666666602+t*(t*(6613756321437934e-20+t*(4.1381367970572385e-8*t-16533902205465252e-22))-.0027777777777015593)}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(130),i=r(690).factory,o=r(11),u=r(83),a=r(210),c=r(214),f=r(217);t.exports=function(t,n){var r,s,l;return o(t)||o(n)||n<0?e(NaN):0===n?i(t):(r=c(n,2),s=1/u(r*f),l=-1/(2*r),function(n){if(o(n))return NaN;return s*a(l*c(n-t,2))})}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(14),i=r(691);e(i,"factory",r(692)),t.exports=i},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(13),i=r(11);t.exports=function(t,n){return i(t)||i(n)?NaN:t===n?e:0}},function(t,n,r){"use strict";
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e=r(130),i=r(13),o=r(11);t.exports=function(t){return o(t)?e(NaN):function(n){if(o(n))return NaN;return n===t?i:0}}},function(t,n,r){"use strict";r.r(n);var e=function(t,n){return t<n?-1:t>n?1:t>=n?0:NaN},i=function(t){var n;return 1===t.length&&(n=t,t=function(t,r){return e(n(t),r)}),{left:function(n,r,e,i){for(null==e&&(e=0),null==i&&(i=n.length);e<i;){var o=e+i>>>1;t(n[o],r)<0?e=o+1:i=o}return e},right:function(n,r,e,i){for(null==e&&(e=0),null==i&&(i=n.length);e<i;){var o=e+i>>>1;t(n[o],r)>0?i=o:e=o+1}return e}}};var o=i(e),u=o.right,a=(o.left,u);var c=function(t){return null===t?NaN:+t},f=function(t,n){var r,e,i,o=t.length,u=-1;if(null==n){for(;++u<o;)if(null!=(r=t[u])&&r>=r)for(e=i=r;++u<o;)null!=(r=t[u])&&(e>r&&(e=r),i<r&&(i=r))}else for(;++u<o;)if(null!=(r=n(t[u],u,t))&&r>=r)for(e=i=r;++u<o;)null!=(r=n(t[u],u,t))&&(e>r&&(e=r),i<r&&(i=r));return[e,i]},s=Array.prototype,l=s.slice,h=(s.map,function(t){return function(){return t}}),p=function(t){return t},v=function(t,n,r){t=+t,n=+n,r=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+r;for(var e=-1,i=0|Math.max(0,Math.ceil((n-t)/r)),o=new Array(i);++e<i;)o[e]=t+e*r;return o},d=Math.sqrt(50),g=Math.sqrt(10),y=Math.sqrt(2),m=function(t,n,r){var e,i,o,u,a=-1;if(r=+r,(t=+t)===(n=+n)&&r>0)return[t];if((e=n<t)&&(i=t,t=n,n=i),0===(u=_(t,n,r))||!isFinite(u))return[];if(u>0)for(t=Math.ceil(t/u),n=Math.floor(n/u),o=new Array(i=Math.ceil(n-t+1));++a<i;)o[a]=(t+a)*u;else for(t=Math.floor(t*u),n=Math.ceil(n*u),o=new Array(i=Math.ceil(t-n+1));++a<i;)o[a]=(t-a)/u;return e&&o.reverse(),o};function _(t,n,r){var e=(n-t)/Math.max(0,r),i=Math.floor(Math.log(e)/Math.LN10),o=e/Math.pow(10,i);return i>=0?(o>=d?10:o>=g?5:o>=y?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(o>=d?10:o>=g?5:o>=y?2:1)}function x(t,n,r){var e=Math.abs(n-t)/Math.max(0,r),i=Math.pow(10,Math.floor(Math.log(e)/Math.LN10)),o=e/i;return o>=d?i*=10:o>=g?i*=5:o>=y&&(i*=2),n<t?-i:i}var w=function(t){return Math.ceil(Math.log(t.length)/Math.LN2)+1},b=function(t,n){var r,e,i=t.length,o=-1;if(null==n){for(;++o<i;)if(null!=(r=t[o])&&r>=r)for(e=r;++o<i;)null!=(r=t[o])&&r>e&&(e=r)}else for(;++o<i;)if(null!=(r=n(t[o],o,t))&&r>=r)for(e=r;++o<i;)null!=(r=n(t[o],o,t))&&r>e&&(e=r);return e},A=function(t,n){var r,e=t.length,i=e,o=-1,u=0;if(null==n)for(;++o<e;)isNaN(r=c(t[o]))?--i:u+=r;else for(;++o<e;)isNaN(r=c(n(t[o],o,t)))?--i:u+=r;if(i)return u/i};var M=Array.prototype.slice,S=function(t){return t};function E(t){return"translate("+(t+.5)+",0)"}function N(t){return"translate(0,"+(t+.5)+")"}function j(t){return function(n){return+t(n)}}function T(t){var n=Math.max(0,t.bandwidth()-1)/2;return t.round()&&(n=Math.round(n)),function(r){return+t(r)+n}}function O(){return!this.__axis}function k(t,n){var r=[],e=null,i=null,o=6,u=6,a=3,c=1===t||4===t?-1:1,f=4===t||2===t?"x":"y",s=1===t||3===t?E:N;function l(l){var h=null==e?n.ticks?n.ticks.apply(n,r):n.domain():e,p=null==i?n.tickFormat?n.tickFormat.apply(n,r):S:i,v=Math.max(o,0)+a,d=n.range(),g=+d[0]+.5,y=+d[d.length-1]+.5,m=(n.bandwidth?T:j)(n.copy()),_=l.selection?l.selection():l,x=_.selectAll(".domain").data([null]),w=_.selectAll(".tick").data(h,n).order(),b=w.exit(),A=w.enter().append("g").attr("class","tick"),M=w.select("line"),E=w.select("text");x=x.merge(x.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),w=w.merge(A),M=M.merge(A.append("line").attr("stroke","currentColor").attr(f+"2",c*o)),E=E.merge(A.append("text").attr("fill","currentColor").attr(f,c*v).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),l!==_&&(x=x.transition(l),w=w.transition(l),M=M.transition(l),E=E.transition(l),b=b.transition(l).attr("opacity",1e-6).attr("transform",(function(t){return isFinite(t=m(t))?s(t):this.getAttribute("transform")})),A.attr("opacity",1e-6).attr("transform",(function(t){var n=this.parentNode.__axis;return s(n&&isFinite(n=n(t))?n:m(t))}))),b.remove(),x.attr("d",4===t||2==t?u?"M"+c*u+","+g+"H0.5V"+y+"H"+c*u:"M0.5,"+g+"V"+y:u?"M"+g+","+c*u+"V0.5H"+y+"V"+c*u:"M"+g+",0.5H"+y),w.attr("opacity",1).attr("transform",(function(t){return s(m(t))})),M.attr(f+"2",c*o),E.attr(f,c*v).text(p),_.filter(O).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),_.each((function(){this.__axis=m}))}return l.scale=function(t){return arguments.length?(n=t,l):n},l.ticks=function(){return r=M.call(arguments),l},l.tickArguments=function(t){return arguments.length?(r=null==t?[]:M.call(t),l):r.slice()},l.tickValues=function(t){return arguments.length?(e=null==t?null:M.call(t),l):e&&e.slice()},l.tickFormat=function(t){return arguments.length?(i=t,l):i},l.tickSize=function(t){return arguments.length?(o=u=+t,l):o},l.tickSizeInner=function(t){return arguments.length?(o=+t,l):o},l.tickSizeOuter=function(t){return arguments.length?(u=+t,l):u},l.tickPadding=function(t){return arguments.length?(a=+t,l):a},l}var P={value:function(){}};function C(){for(var t,n=0,r=arguments.length,e={};n<r;++n){if(!(t=arguments[n]+"")||t in e||/[\s.]/.test(t))throw new Error("illegal type: "+t);e[t]=[]}return new L(e)}function L(t){this._=t}function F(t,n){return t.trim().split(/^|\s+/).map((function(t){var r="",e=t.indexOf(".");if(e>=0&&(r=t.slice(e+1),t=t.slice(0,e)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:r}}))}function I(t,n){for(var r,e=0,i=t.length;e<i;++e)if((r=t[e]).name===n)return r.value}function R(t,n,r){for(var e=0,i=t.length;e<i;++e)if(t[e].name===n){t[e]=P,t=t.slice(0,e).concat(t.slice(e+1));break}return null!=r&&t.push({name:n,value:r}),t}L.prototype=C.prototype={constructor:L,on:function(t,n){var r,e=this._,i=F(t+"",e),o=-1,u=i.length;if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++o<u;)if(r=(t=i[o]).type)e[r]=R(e[r],t.name,n);else if(null==n)for(r in e)e[r]=R(e[r],t.name,null);return this}for(;++o<u;)if((r=(t=i[o]).type)&&(r=I(e[r],t.name)))return r},copy:function(){var t={},n=this._;for(var r in n)t[r]=n[r].slice();return new L(t)},call:function(t,n){if((r=arguments.length-2)>0)for(var r,e,i=new Array(r),o=0;o<r;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=0,r=(e=this._[t]).length;o<r;++o)e[o].value.apply(n,i)},apply:function(t,n,r){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var e=this._[t],i=0,o=e.length;i<o;++i)e[i].value.apply(n,r)}};var U=C;function D(){}var q=function(t){return null==t?D:function(){return this.querySelector(t)}};function z(){return[]}var B=function(t){return null==t?z:function(){return this.querySelectorAll(t)}},W=function(t){return function(){return this.matches(t)}},V=function(t){return new Array(t.length)};function Y(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}Y.prototype={constructor:Y,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function H(t,n,r,e,i,o){for(var u,a=0,c=n.length,f=o.length;a<f;++a)(u=n[a])?(u.__data__=o[a],e[a]=u):r[a]=new Y(t,o[a]);for(;a<c;++a)(u=n[a])&&(i[a]=u)}function $(t,n,r,e,i,o,u){var a,c,f,s={},l=n.length,h=o.length,p=new Array(l);for(a=0;a<l;++a)(c=n[a])&&(p[a]=f="$"+u.call(c,c.__data__,a,n),f in s?i[a]=c:s[f]=c);for(a=0;a<h;++a)(c=s[f="$"+u.call(t,o[a],a,o)])?(e[a]=c,c.__data__=o[a],s[f]=null):r[a]=new Y(t,o[a]);for(a=0;a<l;++a)(c=n[a])&&s[p[a]]===c&&(i[a]=c)}function G(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}var X="http://www.w3.org/1999/xhtml",Z={svg:"http://www.w3.org/2000/svg",xhtml:X,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},J=function(t){var n=t+="",r=n.indexOf(":");return r>=0&&"xmlns"!==(n=t.slice(0,r))&&(t=t.slice(r+1)),Z.hasOwnProperty(n)?{space:Z[n],local:t}:t};function K(t){return function(){this.removeAttribute(t)}}function Q(t){return function(){this.removeAttributeNS(t.space,t.local)}}function tt(t,n){return function(){this.setAttribute(t,n)}}function nt(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function rt(t,n){return function(){var r=n.apply(this,arguments);null==r?this.removeAttribute(t):this.setAttribute(t,r)}}function et(t,n){return function(){var r=n.apply(this,arguments);null==r?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,r)}}var it=function(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView};function ot(t){return function(){this.style.removeProperty(t)}}function ut(t,n,r){return function(){this.style.setProperty(t,n,r)}}function at(t,n,r){return function(){var e=n.apply(this,arguments);null==e?this.style.removeProperty(t):this.style.setProperty(t,e,r)}}function ct(t,n){return t.style.getPropertyValue(n)||it(t).getComputedStyle(t,null).getPropertyValue(n)}function ft(t){return function(){delete this[t]}}function st(t,n){return function(){this[t]=n}}function lt(t,n){return function(){var r=n.apply(this,arguments);null==r?delete this[t]:this[t]=r}}function ht(t){return t.trim().split(/^|\s+/)}function pt(t){return t.classList||new vt(t)}function vt(t){this._node=t,this._names=ht(t.getAttribute("class")||"")}function dt(t,n){for(var r=pt(t),e=-1,i=n.length;++e<i;)r.add(n[e])}function gt(t,n){for(var r=pt(t),e=-1,i=n.length;++e<i;)r.remove(n[e])}function yt(t){return function(){dt(this,t)}}function mt(t){return function(){gt(this,t)}}function _t(t,n){return function(){(n.apply(this,arguments)?dt:gt)(this,t)}}vt.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function xt(){this.textContent=""}function wt(t){return function(){this.textContent=t}}function bt(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}function At(){this.innerHTML=""}function Mt(t){return function(){this.innerHTML=t}}function St(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}function Et(){this.nextSibling&&this.parentNode.appendChild(this)}function Nt(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function jt(t){return function(){var n=this.ownerDocument,r=this.namespaceURI;return r===X&&n.documentElement.namespaceURI===X?n.createElement(t):n.createElementNS(r,t)}}function Tt(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}var Ot=function(t){var n=J(t);return(n.local?Tt:jt)(n)};function kt(){return null}function Pt(){var t=this.parentNode;t&&t.removeChild(this)}function Ct(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function Lt(){var t=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}var Ft={},It=null;"undefined"!=typeof document&&("onmouseenter"in document.documentElement||(Ft={mouseenter:"mouseover",mouseleave:"mouseout"}));function Rt(t,n,r){return t=Ut(t,n,r),function(n){var r=n.relatedTarget;r&&(r===this||8&r.compareDocumentPosition(this))||t.call(this,n)}}function Ut(t,n,r){return function(e){var i=It;It=e;try{t.call(this,this.__data__,n,r)}finally{It=i}}}function Dt(t){return t.trim().split(/^|\s+/).map((function(t){var n="",r=t.indexOf(".");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{type:t,name:n}}))}function qt(t){return function(){var n=this.__on;if(n){for(var r,e=0,i=-1,o=n.length;e<o;++e)r=n[e],t.type&&r.type!==t.type||r.name!==t.name?n[++i]=r:this.removeEventListener(r.type,r.listener,r.capture);++i?n.length=i:delete this.__on}}}function zt(t,n,r){var e=Ft.hasOwnProperty(t.type)?Rt:Ut;return function(i,o,u){var a,c=this.__on,f=e(n,o,u);if(c)for(var s=0,l=c.length;s<l;++s)if((a=c[s]).type===t.type&&a.name===t.name)return this.removeEventListener(a.type,a.listener,a.capture),this.addEventListener(a.type,a.listener=f,a.capture=r),void(a.value=n);this.addEventListener(t.type,f,r),a={type:t.type,name:t.name,value:n,listener:f,capture:r},c?c.push(a):this.__on=[a]}}function Bt(t,n,r){var e=it(t),i=e.CustomEvent;"function"==typeof i?i=new i(n,r):(i=e.document.createEvent("Event"),r?(i.initEvent(n,r.bubbles,r.cancelable),i.detail=r.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function Wt(t,n){return function(){return Bt(this,t,n)}}function Vt(t,n){return function(){return Bt(this,t,n.apply(this,arguments))}}var Yt=[null];function Ht(t,n){this._groups=t,this._parents=n}function $t(){return new Ht([[document.documentElement]],Yt)}Ht.prototype=$t.prototype={constructor:Ht,select:function(t){"function"!=typeof t&&(t=q(t));for(var n=this._groups,r=n.length,e=new Array(r),i=0;i<r;++i)for(var o,u,a=n[i],c=a.length,f=e[i]=new Array(c),s=0;s<c;++s)(o=a[s])&&(u=t.call(o,o.__data__,s,a))&&("__data__"in o&&(u.__data__=o.__data__),f[s]=u);return new Ht(e,this._parents)},selectAll:function(t){"function"!=typeof t&&(t=B(t));for(var n=this._groups,r=n.length,e=[],i=[],o=0;o<r;++o)for(var u,a=n[o],c=a.length,f=0;f<c;++f)(u=a[f])&&(e.push(t.call(u,u.__data__,f,a)),i.push(u));return new Ht(e,i)},filter:function(t){"function"!=typeof t&&(t=W(t));for(var n=this._groups,r=n.length,e=new Array(r),i=0;i<r;++i)for(var o,u=n[i],a=u.length,c=e[i]=[],f=0;f<a;++f)(o=u[f])&&t.call(o,o.__data__,f,u)&&c.push(o);return new Ht(e,this._parents)},data:function(t,n){if(!t)return v=new Array(this.size()),s=-1,this.each((function(t){v[++s]=t})),v;var r,e=n?$:H,i=this._parents,o=this._groups;"function"!=typeof t&&(r=t,t=function(){return r});for(var u=o.length,a=new Array(u),c=new Array(u),f=new Array(u),s=0;s<u;++s){var l=i[s],h=o[s],p=h.length,v=t.call(l,l&&l.__data__,s,i),d=v.length,g=c[s]=new Array(d),y=a[s]=new Array(d);e(l,h,g,y,f[s]=new Array(p),v,n);for(var m,_,x=0,w=0;x<d;++x)if(m=g[x]){for(x>=w&&(w=x+1);!(_=y[w])&&++w<d;);m._next=_||null}}return(a=new Ht(a,i))._enter=c,a._exit=f,a},enter:function(){return new Ht(this._enter||this._groups.map(V),this._parents)},exit:function(){return new Ht(this._exit||this._groups.map(V),this._parents)},join:function(t,n,r){var e=this.enter(),i=this,o=this.exit();return e="function"==typeof t?t(e):e.append(t+""),null!=n&&(i=n(i)),null==r?o.remove():r(o),e&&i?e.merge(i).order():i},merge:function(t){for(var n=this._groups,r=t._groups,e=n.length,i=r.length,o=Math.min(e,i),u=new Array(e),a=0;a<o;++a)for(var c,f=n[a],s=r[a],l=f.length,h=u[a]=new Array(l),p=0;p<l;++p)(c=f[p]||s[p])&&(h[p]=c);for(;a<e;++a)u[a]=n[a];return new Ht(u,this._parents)},order:function(){for(var t=this._groups,n=-1,r=t.length;++n<r;)for(var e,i=t[n],o=i.length-1,u=i[o];--o>=0;)(e=i[o])&&(u&&4^e.compareDocumentPosition(u)&&u.parentNode.insertBefore(e,u),u=e);return this},sort:function(t){function n(n,r){return n&&r?t(n.__data__,r.__data__):!n-!r}t||(t=G);for(var r=this._groups,e=r.length,i=new Array(e),o=0;o<e;++o){for(var u,a=r[o],c=a.length,f=i[o]=new Array(c),s=0;s<c;++s)(u=a[s])&&(f[s]=u);f.sort(n)}return new Ht(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){var t=new Array(this.size()),n=-1;return this.each((function(){t[++n]=this})),t},node:function(){for(var t=this._groups,n=0,r=t.length;n<r;++n)for(var e=t[n],i=0,o=e.length;i<o;++i){var u=e[i];if(u)return u}return null},size:function(){var t=0;return this.each((function(){++t})),t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,r=0,e=n.length;r<e;++r)for(var i,o=n[r],u=0,a=o.length;u<a;++u)(i=o[u])&&t.call(i,i.__data__,u,o);return this},attr:function(t,n){var r=J(t);if(arguments.length<2){var e=this.node();return r.local?e.getAttributeNS(r.space,r.local):e.getAttribute(r)}return this.each((null==n?r.local?Q:K:"function"==typeof n?r.local?et:rt:r.local?nt:tt)(r,n))},style:function(t,n,r){return arguments.length>1?this.each((null==n?ot:"function"==typeof n?at:ut)(t,n,null==r?"":r)):ct(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?ft:"function"==typeof n?lt:st)(t,n)):this.node()[t]},classed:function(t,n){var r=ht(t+"");if(arguments.length<2){for(var e=pt(this.node()),i=-1,o=r.length;++i<o;)if(!e.contains(r[i]))return!1;return!0}return this.each(("function"==typeof n?_t:n?yt:mt)(r,n))},text:function(t){return arguments.length?this.each(null==t?xt:("function"==typeof t?bt:wt)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?At:("function"==typeof t?St:Mt)(t)):this.node().innerHTML},raise:function(){return this.each(Et)},lower:function(){return this.each(Nt)},append:function(t){var n="function"==typeof t?t:Ot(t);return this.select((function(){return this.appendChild(n.apply(this,arguments))}))},insert:function(t,n){var r="function"==typeof t?t:Ot(t),e=null==n?kt:"function"==typeof n?n:q(n);return this.select((function(){return this.insertBefore(r.apply(this,arguments),e.apply(this,arguments)||null)}))},remove:function(){return this.each(Pt)},clone:function(t){return this.select(t?Lt:Ct)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,r){var e,i,o=Dt(t+""),u=o.length;if(!(arguments.length<2)){for(a=n?zt:qt,null==r&&(r=!1),e=0;e<u;++e)this.each(a(o[e],n,r));return this}var a=this.node().__on;if(a)for(var c,f=0,s=a.length;f<s;++f)for(e=0,c=a[f];e<u;++e)if((i=o[e]).type===c.type&&i.name===c.name)return c.value},dispatch:function(t,n){return this.each(("function"==typeof n?Vt:Wt)(t,n))}};var Gt=$t,Xt=function(t){return"string"==typeof t?new Ht([[document.querySelector(t)]],[document.documentElement]):new Ht([[t]],Yt)};var Zt=function(t,n,r){t.prototype=n.prototype=r,r.constructor=t};function Jt(t,n){var r=Object.create(t.prototype);for(var e in n)r[e]=n[e];return r}function Kt(){}var Qt="\\s*([+-]?\\d+)\\s*",tn="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",nn="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",rn=/^#([0-9a-f]{3,8})$/,en=new RegExp("^rgb\\("+[Qt,Qt,Qt]+"\\)$"),on=new RegExp("^rgb\\("+[nn,nn,nn]+"\\)$"),un=new RegExp("^rgba\\("+[Qt,Qt,Qt,tn]+"\\)$"),an=new RegExp("^rgba\\("+[nn,nn,nn,tn]+"\\)$"),cn=new RegExp("^hsl\\("+[tn,nn,nn]+"\\)$"),fn=new RegExp("^hsla\\("+[tn,nn,nn,tn]+"\\)$"),sn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function ln(){return this.rgb().formatHex()}function hn(){return this.rgb().formatRgb()}function pn(t){var n,r;return t=(t+"").trim().toLowerCase(),(n=rn.exec(t))?(r=n[1].length,n=parseInt(n[1],16),6===r?vn(n):3===r?new mn(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):8===r?new mn(n>>24&255,n>>16&255,n>>8&255,(255&n)/255):4===r?new mn(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|240&n,((15&n)<<4|15&n)/255):null):(n=en.exec(t))?new mn(n[1],n[2],n[3],1):(n=on.exec(t))?new mn(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=un.exec(t))?dn(n[1],n[2],n[3],n[4]):(n=an.exec(t))?dn(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=cn.exec(t))?bn(n[1],n[2]/100,n[3]/100,1):(n=fn.exec(t))?bn(n[1],n[2]/100,n[3]/100,n[4]):sn.hasOwnProperty(t)?vn(sn[t]):"transparent"===t?new mn(NaN,NaN,NaN,0):null}function vn(t){return new mn(t>>16&255,t>>8&255,255&t,1)}function dn(t,n,r,e){return e<=0&&(t=n=r=NaN),new mn(t,n,r,e)}function gn(t){return t instanceof Kt||(t=pn(t)),t?new mn((t=t.rgb()).r,t.g,t.b,t.opacity):new mn}function yn(t,n,r,e){return 1===arguments.length?gn(t):new mn(t,n,r,null==e?1:e)}function mn(t,n,r,e){this.r=+t,this.g=+n,this.b=+r,this.opacity=+e}function _n(){return"#"+wn(this.r)+wn(this.g)+wn(this.b)}function xn(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}function wn(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function bn(t,n,r,e){return e<=0?t=n=r=NaN:r<=0||r>=1?t=n=NaN:n<=0&&(t=NaN),new Mn(t,n,r,e)}function An(t){if(t instanceof Mn)return new Mn(t.h,t.s,t.l,t.opacity);if(t instanceof Kt||(t=pn(t)),!t)return new Mn;if(t instanceof Mn)return t;var n=(t=t.rgb()).r/255,r=t.g/255,e=t.b/255,i=Math.min(n,r,e),o=Math.max(n,r,e),u=NaN,a=o-i,c=(o+i)/2;return a?(u=n===o?(r-e)/a+6*(r<e):r===o?(e-n)/a+2:(n-r)/a+4,a/=c<.5?o+i:2-o-i,u*=60):a=c>0&&c<1?0:u,new Mn(u,a,c,t.opacity)}function Mn(t,n,r,e){this.h=+t,this.s=+n,this.l=+r,this.opacity=+e}function Sn(t,n,r){return 255*(t<60?n+(r-n)*t/60:t<180?r:t<240?n+(r-n)*(240-t)/60:n)}function En(t,n,r,e,i){var o=t*t,u=o*t;return((1-3*t+3*o-u)*n+(4-6*o+3*u)*r+(1+3*t+3*o-3*u)*e+u*i)/6}Zt(Kt,pn,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:ln,formatHex:ln,formatHsl:function(){return An(this).formatHsl()},formatRgb:hn,toString:hn}),Zt(mn,yn,Jt(Kt,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new mn(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new mn(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:_n,formatHex:_n,formatRgb:xn,toString:xn})),Zt(Mn,(function(t,n,r,e){return 1===arguments.length?An(t):new Mn(t,n,r,null==e?1:e)}),Jt(Kt,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new Mn(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new Mn(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,r=this.l,e=r+(r<.5?r:1-r)*n,i=2*r-e;return new mn(Sn(t>=240?t-240:t+120,i,e),Sn(t,i,e),Sn(t<120?t+240:t-120,i,e),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")")}}));var Nn=function(t){return function(){return t}};function jn(t,n){return function(r){return t+r*n}}function Tn(t){return 1==(t=+t)?On:function(n,r){return r-n?function(t,n,r){return t=Math.pow(t,r),n=Math.pow(n,r)-t,r=1/r,function(e){return Math.pow(t+e*n,r)}}(n,r,t):Nn(isNaN(n)?r:n)}}function On(t,n){var r=n-t;return r?jn(t,r):Nn(isNaN(t)?n:t)}var kn=function t(n){var r=Tn(n);function e(t,n){var e=r((t=yn(t)).r,(n=yn(n)).r),i=r(t.g,n.g),o=r(t.b,n.b),u=On(t.opacity,n.opacity);return function(n){return t.r=e(n),t.g=i(n),t.b=o(n),t.opacity=u(n),t+""}}return e.gamma=t,e}(1);function Pn(t){return function(n){var r,e,i=n.length,o=new Array(i),u=new Array(i),a=new Array(i);for(r=0;r<i;++r)e=yn(n[r]),o[r]=e.r||0,u[r]=e.g||0,a[r]=e.b||0;return o=t(o),u=t(u),a=t(a),e.opacity=1,function(t){return e.r=o(t),e.g=u(t),e.b=a(t),e+""}}}Pn((function(t){var n=t.length-1;return function(r){var e=r<=0?r=0:r>=1?(r=1,n-1):Math.floor(r*n),i=t[e],o=t[e+1],u=e>0?t[e-1]:2*i-o,a=e<n-1?t[e+2]:2*o-i;return En((r-e/n)*n,u,i,o,a)}})),Pn((function(t){var n=t.length;return function(r){var e=Math.floor(((r%=1)<0?++r:r)*n),i=t[(e+n-1)%n],o=t[e%n],u=t[(e+1)%n],a=t[(e+2)%n];return En((r-e/n)*n,i,o,u,a)}}));var Cn=function(t,n){n||(n=[]);var r,e=t?Math.min(n.length,t.length):0,i=n.slice();return function(o){for(r=0;r<e;++r)i[r]=t[r]*(1-o)+n[r]*o;return i}};function Ln(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Fn(t,n){var r,e=n?n.length:0,i=t?Math.min(e,t.length):0,o=new Array(i),u=new Array(e);for(r=0;r<i;++r)o[r]=Vn(t[r],n[r]);for(;r<e;++r)u[r]=n[r];return function(t){for(r=0;r<i;++r)u[r]=o[r](t);return u}}var In=function(t,n){var r=new Date;return t=+t,n=+n,function(e){return r.setTime(t*(1-e)+n*e),r}},Rn=function(t,n){return t=+t,n=+n,function(r){return t*(1-r)+n*r}},Un=function(t,n){var r,e={},i={};for(r in null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={}),n)r in t?e[r]=Vn(t[r],n[r]):i[r]=n[r];return function(t){for(r in e)i[r]=e[r](t);return i}},Dn=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,qn=new RegExp(Dn.source,"g");var zn,Bn,Wn=function(t,n){var r,e,i,o=Dn.lastIndex=qn.lastIndex=0,u=-1,a=[],c=[];for(t+="",n+="";(r=Dn.exec(t))&&(e=qn.exec(n));)(i=e.index)>o&&(i=n.slice(o,i),a[u]?a[u]+=i:a[++u]=i),(r=r[0])===(e=e[0])?a[u]?a[u]+=e:a[++u]=e:(a[++u]=null,c.push({i:u,x:Rn(r,e)})),o=qn.lastIndex;return o<n.length&&(i=n.slice(o),a[u]?a[u]+=i:a[++u]=i),a.length<2?c[0]?function(t){return function(n){return t(n)+""}}(c[0].x):function(t){return function(){return t}}(n):(n=c.length,function(t){for(var r,e=0;e<n;++e)a[(r=c[e]).i]=r.x(t);return a.join("")})},Vn=function(t,n){var r,e=typeof n;return null==n||"boolean"===e?Nn(n):("number"===e?Rn:"string"===e?(r=pn(n))?(n=r,kn):Wn:n instanceof pn?kn:n instanceof Date?In:Ln(n)?Cn:Array.isArray(n)?Fn:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?Un:Rn)(t,n)},Yn=0,Hn=0,$n=0,Gn=0,Xn=0,Zn=0,Jn="object"==typeof performance&&performance.now?performance:Date,Kn="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function Qn(){return Xn||(Kn(tr),Xn=Jn.now()+Zn)}function tr(){Xn=0}function nr(){this._call=this._time=this._next=null}function rr(t,n,r){var e=new nr;return e.restart(t,n,r),e}function er(){Xn=(Gn=Jn.now())+Zn,Yn=Hn=0;try{!function(){Qn(),++Yn;for(var t,n=zn;n;)(t=Xn-n._time)>=0&&n._call.call(null,t),n=n._next;--Yn}()}finally{Yn=0,function(){var t,n,r=zn,e=1/0;for(;r;)r._call?(e>r._time&&(e=r._time),t=r,r=r._next):(n=r._next,r._next=null,r=t?t._next=n:zn=n);Bn=t,or(e)}(),Xn=0}}function ir(){var t=Jn.now(),n=t-Gn;n>1e3&&(Zn-=n,Gn=t)}function or(t){Yn||(Hn&&(Hn=clearTimeout(Hn)),t-Xn>24?(t<1/0&&(Hn=setTimeout(er,t-Jn.now()-Zn)),$n&&($n=clearInterval($n))):($n||(Gn=Jn.now(),$n=setInterval(ir,1e3)),Yn=1,Kn(er)))}nr.prototype=rr.prototype={constructor:nr,restart:function(t,n,r){if("function"!=typeof t)throw new TypeError("callback is not a function");r=(null==r?Qn():+r)+(null==n?0:+n),this._next||Bn===this||(Bn?Bn._next=this:zn=this,Bn=this),this._call=t,this._time=r,or()},stop:function(){this._call&&(this._call=null,this._time=1/0,or())}};var ur=function(t,n,r){var e=new nr;return n=null==n?0:+n,e.restart((function(r){e.stop(),t(r+n)}),n,r),e},ar=U("start","end","cancel","interrupt"),cr=[],fr=function(t,n,r,e,i,o){var u=t.__transition;if(u){if(r in u)return}else t.__transition={};!function(t,n,r){var e,i=t.__transition;function o(c){var f,s,l,h;if(1!==r.state)return a();for(f in i)if((h=i[f]).name===r.name){if(3===h.state)return ur(o);4===h.state?(h.state=6,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[f]):+f<n&&(h.state=6,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete i[f])}if(ur((function(){3===r.state&&(r.state=4,r.timer.restart(u,r.delay,r.time),u(c))})),r.state=2,r.on.call("start",t,t.__data__,r.index,r.group),2===r.state){for(r.state=3,e=new Array(l=r.tween.length),f=0,s=-1;f<l;++f)(h=r.tween[f].value.call(t,t.__data__,r.index,r.group))&&(e[++s]=h);e.length=s+1}}function u(n){for(var i=n<r.duration?r.ease.call(null,n/r.duration):(r.timer.restart(a),r.state=5,1),o=-1,u=e.length;++o<u;)e[o].call(t,i);5===r.state&&(r.on.call("end",t,t.__data__,r.index,r.group),a())}function a(){for(var e in r.state=6,r.timer.stop(),delete i[n],i)return;delete t.__transition}i[n]=r,r.timer=rr((function(t){r.state=1,r.timer.restart(o,r.delay,r.time),r.delay<=t&&o(t-r.delay)}),0,r.time)}(t,r,{name:n,index:e,group:i,on:ar,tween:cr,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:0})};function sr(t,n){var r=hr(t,n);if(r.state>0)throw new Error("too late; already scheduled");return r}function lr(t,n){var r=hr(t,n);if(r.state>3)throw new Error("too late; already running");return r}function hr(t,n){var r=t.__transition;if(!r||!(r=r[n]))throw new Error("transition not found");return r}var pr,vr,dr,gr,yr=function(t,n){var r,e,i,o=t.__transition,u=!0;if(o){for(i in n=null==n?null:n+"",o)(r=o[i]).name===n?(e=r.state>2&&r.state<5,r.state=6,r.timer.stop(),r.on.call(e?"interrupt":"cancel",t,t.__data__,r.index,r.group),delete o[i]):u=!1;u&&delete t.__transition}},mr=180/Math.PI,_r={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1},xr=function(t,n,r,e,i,o){var u,a,c;return(u=Math.sqrt(t*t+n*n))&&(t/=u,n/=u),(c=t*r+n*e)&&(r-=t*c,e-=n*c),(a=Math.sqrt(r*r+e*e))&&(r/=a,e/=a,c/=a),t*e<n*r&&(t=-t,n=-n,c=-c,u=-u),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*mr,skewX:Math.atan(c)*mr,scaleX:u,scaleY:a}};function wr(t,n,r,e){function i(t){return t.length?t.pop()+" ":""}return function(o,u){var a=[],c=[];return o=t(o),u=t(u),function(t,e,i,o,u,a){if(t!==i||e!==o){var c=u.push("translate(",null,n,null,r);a.push({i:c-4,x:Rn(t,i)},{i:c-2,x:Rn(e,o)})}else(i||o)&&u.push("translate("+i+n+o+r)}(o.translateX,o.translateY,u.translateX,u.translateY,a,c),function(t,n,r,o){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),o.push({i:r.push(i(r)+"rotate(",null,e)-2,x:Rn(t,n)})):n&&r.push(i(r)+"rotate("+n+e)}(o.rotate,u.rotate,a,c),function(t,n,r,o){t!==n?o.push({i:r.push(i(r)+"skewX(",null,e)-2,x:Rn(t,n)}):n&&r.push(i(r)+"skewX("+n+e)}(o.skewX,u.skewX,a,c),function(t,n,r,e,o,u){if(t!==r||n!==e){var a=o.push(i(o)+"scale(",null,",",null,")");u.push({i:a-4,x:Rn(t,r)},{i:a-2,x:Rn(n,e)})}else 1===r&&1===e||o.push(i(o)+"scale("+r+","+e+")")}(o.scaleX,o.scaleY,u.scaleX,u.scaleY,a,c),o=u=null,function(t){for(var n,r=-1,e=c.length;++r<e;)a[(n=c[r]).i]=n.x(t);return a.join("")}}}var br=wr((function(t){return"none"===t?_r:(pr||(pr=document.createElement("DIV"),vr=document.documentElement,dr=document.defaultView),pr.style.transform=t,t=dr.getComputedStyle(vr.appendChild(pr),null).getPropertyValue("transform"),vr.removeChild(pr),t=t.slice(7,-1).split(","),xr(+t[0],+t[1],+t[2],+t[3],+t[4],+t[5]))}),"px, ","px)","deg)"),Ar=wr((function(t){return null==t?_r:(gr||(gr=document.createElementNS("http://www.w3.org/2000/svg","g")),gr.setAttribute("transform",t),(t=gr.transform.baseVal.consolidate())?(t=t.matrix,xr(t.a,t.b,t.c,t.d,t.e,t.f)):_r)}),", ",")",")");function Mr(t,n){var r,e;return function(){var i=lr(this,t),o=i.tween;if(o!==r)for(var u=0,a=(e=r=o).length;u<a;++u)if(e[u].name===n){(e=e.slice()).splice(u,1);break}i.tween=e}}function Sr(t,n,r){var e,i;if("function"!=typeof r)throw new Error;return function(){var o=lr(this,t),u=o.tween;if(u!==e){i=(e=u).slice();for(var a={name:n,value:r},c=0,f=i.length;c<f;++c)if(i[c].name===n){i[c]=a;break}c===f&&i.push(a)}o.tween=i}}function Er(t,n,r){var e=t._id;return t.each((function(){var t=lr(this,e);(t.value||(t.value={}))[n]=r.apply(this,arguments)})),function(t){return hr(t,e).value[n]}}var Nr=function(t,n){var r;return("number"==typeof n?Rn:n instanceof pn?kn:(r=pn(n))?(n=r,kn):Wn)(t,n)};function jr(t){return function(){this.removeAttribute(t)}}function Tr(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Or(t,n,r){var e,i,o=r+"";return function(){var u=this.getAttribute(t);return u===o?null:u===e?i:i=n(e=u,r)}}function kr(t,n,r){var e,i,o=r+"";return function(){var u=this.getAttributeNS(t.space,t.local);return u===o?null:u===e?i:i=n(e=u,r)}}function Pr(t,n,r){var e,i,o;return function(){var u,a,c=r(this);if(null!=c)return(u=this.getAttribute(t))===(a=c+"")?null:u===e&&a===i?o:(i=a,o=n(e=u,c));this.removeAttribute(t)}}function Cr(t,n,r){var e,i,o;return function(){var u,a,c=r(this);if(null!=c)return(u=this.getAttributeNS(t.space,t.local))===(a=c+"")?null:u===e&&a===i?o:(i=a,o=n(e=u,c));this.removeAttributeNS(t.space,t.local)}}function Lr(t,n){return function(r){this.setAttribute(t,n.call(this,r))}}function Fr(t,n){return function(r){this.setAttributeNS(t.space,t.local,n.call(this,r))}}function Ir(t,n){var r,e;function i(){var i=n.apply(this,arguments);return i!==e&&(r=(e=i)&&Fr(t,i)),r}return i._value=n,i}function Rr(t,n){var r,e;function i(){var i=n.apply(this,arguments);return i!==e&&(r=(e=i)&&Lr(t,i)),r}return i._value=n,i}function Ur(t,n){return function(){sr(this,t).delay=+n.apply(this,arguments)}}function Dr(t,n){return n=+n,function(){sr(this,t).delay=n}}function qr(t,n){return function(){lr(this,t).duration=+n.apply(this,arguments)}}function zr(t,n){return n=+n,function(){lr(this,t).duration=n}}function Br(t,n){if("function"!=typeof n)throw new Error;return function(){lr(this,t).ease=n}}function Wr(t,n,r){var e,i,o=function(t){return(t+"").trim().split(/^|\s+/).every((function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||"start"===t}))}(n)?sr:lr;return function(){var u=o(this,t),a=u.on;a!==e&&(i=(e=a).copy()).on(n,r),u.on=i}}var Vr=Gt.prototype.constructor;function Yr(t){return function(){this.style.removeProperty(t)}}function Hr(t,n,r){return function(e){this.style.setProperty(t,n.call(this,e),r)}}function $r(t,n,r){var e,i;function o(){var o=n.apply(this,arguments);return o!==i&&(e=(i=o)&&Hr(t,o,r)),e}return o._value=n,o}function Gr(t){return function(n){this.textContent=t.call(this,n)}}function Xr(t){var n,r;function e(){var e=t.apply(this,arguments);return e!==r&&(n=(r=e)&&Gr(e)),n}return e._value=t,e}var Zr=0;function Jr(t,n,r,e){this._groups=t,this._parents=n,this._name=r,this._id=e}function Kr(){return++Zr}var Qr=Gt.prototype;Jr.prototype=function(t){return Gt().transition(t)}.prototype={constructor:Jr,select:function(t){var n=this._name,r=this._id;"function"!=typeof t&&(t=q(t));for(var e=this._groups,i=e.length,o=new Array(i),u=0;u<i;++u)for(var a,c,f=e[u],s=f.length,l=o[u]=new Array(s),h=0;h<s;++h)(a=f[h])&&(c=t.call(a,a.__data__,h,f))&&("__data__"in a&&(c.__data__=a.__data__),l[h]=c,fr(l[h],n,r,h,l,hr(a,r)));return new Jr(o,this._parents,n,r)},selectAll:function(t){var n=this._name,r=this._id;"function"!=typeof t&&(t=B(t));for(var e=this._groups,i=e.length,o=[],u=[],a=0;a<i;++a)for(var c,f=e[a],s=f.length,l=0;l<s;++l)if(c=f[l]){for(var h,p=t.call(c,c.__data__,l,f),v=hr(c,r),d=0,g=p.length;d<g;++d)(h=p[d])&&fr(h,n,r,d,p,v);o.push(p),u.push(c)}return new Jr(o,u,n,r)},filter:function(t){"function"!=typeof t&&(t=W(t));for(var n=this._groups,r=n.length,e=new Array(r),i=0;i<r;++i)for(var o,u=n[i],a=u.length,c=e[i]=[],f=0;f<a;++f)(o=u[f])&&t.call(o,o.__data__,f,u)&&c.push(o);return new Jr(e,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,r=t._groups,e=n.length,i=r.length,o=Math.min(e,i),u=new Array(e),a=0;a<o;++a)for(var c,f=n[a],s=r[a],l=f.length,h=u[a]=new Array(l),p=0;p<l;++p)(c=f[p]||s[p])&&(h[p]=c);for(;a<e;++a)u[a]=n[a];return new Jr(u,this._parents,this._name,this._id)},selection:function(){return new Vr(this._groups,this._parents)},transition:function(){for(var t=this._name,n=this._id,r=Kr(),e=this._groups,i=e.length,o=0;o<i;++o)for(var u,a=e[o],c=a.length,f=0;f<c;++f)if(u=a[f]){var s=hr(u,n);fr(u,t,r,f,a,{time:s.time+s.delay+s.duration,delay:0,duration:s.duration,ease:s.ease})}return new Jr(e,this._parents,t,r)},call:Qr.call,nodes:Qr.nodes,node:Qr.node,size:Qr.size,empty:Qr.empty,each:Qr.each,on:function(t,n){var r=this._id;return arguments.length<2?hr(this.node(),r).on.on(t):this.each(Wr(r,t,n))},attr:function(t,n){var r=J(t),e="transform"===r?Ar:Nr;return this.attrTween(t,"function"==typeof n?(r.local?Cr:Pr)(r,e,Er(this,"attr."+t,n)):null==n?(r.local?Tr:jr)(r):(r.local?kr:Or)(r,e,n))},attrTween:function(t,n){var r="attr."+t;if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==n)return this.tween(r,null);if("function"!=typeof n)throw new Error;var e=J(t);return this.tween(r,(e.local?Ir:Rr)(e,n))},style:function(t,n,r){var e="transform"==(t+="")?br:Nr;return null==n?this.styleTween(t,function(t,n){var r,e,i;return function(){var o=ct(this,t),u=(this.style.removeProperty(t),ct(this,t));return o===u?null:o===r&&u===e?i:i=n(r=o,e=u)}}(t,e)).on("end.style."+t,Yr(t)):"function"==typeof n?this.styleTween(t,function(t,n,r){var e,i,o;return function(){var u=ct(this,t),a=r(this),c=a+"";return null==a&&(this.style.removeProperty(t),c=a=ct(this,t)),u===c?null:u===e&&c===i?o:(i=c,o=n(e=u,a))}}(t,e,Er(this,"style."+t,n))).each(function(t,n){var r,e,i,o,u="style."+n,a="end."+u;return function(){var c=lr(this,t),f=c.on,s=null==c.value[u]?o||(o=Yr(n)):void 0;f===r&&i===s||(e=(r=f).copy()).on(a,i=s),c.on=e}}(this._id,t)):this.styleTween(t,function(t,n,r){var e,i,o=r+"";return function(){var u=ct(this,t);return u===o?null:u===e?i:i=n(e=u,r)}}(t,e,n),r).on("end.style."+t,null)},styleTween:function(t,n,r){var e="style."+(t+="");if(arguments.length<2)return(e=this.tween(e))&&e._value;if(null==n)return this.tween(e,null);if("function"!=typeof n)throw new Error;return this.tween(e,$r(t,n,null==r?"":r))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var n=t(this);this.textContent=null==n?"":n}}(Er(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},textTween:function(t){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(null==t)return this.tween(n,null);if("function"!=typeof t)throw new Error;return this.tween(n,Xr(t))},remove:function(){return this.on("end.remove",(t=this._id,function(){var n=this.parentNode;for(var r in this.__transition)if(+r!==t)return;n&&n.removeChild(this)}));var t},tween:function(t,n){var r=this._id;if(t+="",arguments.length<2){for(var e,i=hr(this.node(),r).tween,o=0,u=i.length;o<u;++o)if((e=i[o]).name===t)return e.value;return null}return this.each((null==n?Mr:Sr)(r,t,n))},delay:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?Ur:Dr)(n,t)):hr(this.node(),n).delay},duration:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?qr:zr)(n,t)):hr(this.node(),n).duration},ease:function(t){var n=this._id;return arguments.length?this.each(Br(n,t)):hr(this.node(),n).ease},end:function(){var t,n,r=this,e=r._id,i=r.size();return new Promise((function(o,u){var a={value:u},c={value:function(){0==--i&&o()}};r.each((function(){var r=lr(this,e),i=r.on;i!==t&&((n=(t=i).copy())._.cancel.push(a),n._.interrupt.push(a),n._.end.push(c)),r.on=n}))}))}};var te={time:null,delay:0,duration:250,ease:function(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}};function ne(t,n){for(var r;!(r=t.__transition)||!(r=r[n]);)if(!(t=t.parentNode))return te.time=Qn(),te;return r}Gt.prototype.interrupt=function(t){return this.each((function(){yr(this,t)}))},Gt.prototype.transition=function(t){var n,r;t instanceof Jr?(n=t._id,t=t._name):(n=Kr(),(r=te).time=Qn(),t=null==t?null:t+"");for(var e=this._groups,i=e.length,o=0;o<i;++o)for(var u,a=e[o],c=a.length,f=0;f<c;++f)(u=a[f])&&fr(u,t,n,f,a,r||ne(u,n));return new Jr(e,this._parents,t,n)};function re(t){return[+t[0],+t[1]]}function ee(t){return[re(t[0]),re(t[1])]}["w","e"].map(ie),["n","s"].map(ie),["n","w","e","s","nw","ne","sw","se"].map(ie);function ie(t){return{type:t}}Math.cos,Math.sin,Math.PI,Math.max;Array.prototype.slice;var oe=Math.PI,ue=2*oe,ae=ue-1e-6;function ce(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function fe(){return new ce}ce.prototype=fe.prototype={constructor:ce,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,r,e){this._+="Q"+ +t+","+ +n+","+(this._x1=+r)+","+(this._y1=+e)},bezierCurveTo:function(t,n,r,e,i,o){this._+="C"+ +t+","+ +n+","+ +r+","+ +e+","+(this._x1=+i)+","+(this._y1=+o)},arcTo:function(t,n,r,e,i){t=+t,n=+n,r=+r,e=+e,i=+i;var o=this._x1,u=this._y1,a=r-t,c=e-n,f=o-t,s=u-n,l=f*f+s*s;if(i<0)throw new Error("negative radius: "+i);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(l>1e-6)if(Math.abs(s*a-c*f)>1e-6&&i){var h=r-o,p=e-u,v=a*a+c*c,d=h*h+p*p,g=Math.sqrt(v),y=Math.sqrt(l),m=i*Math.tan((oe-Math.acos((v+l-d)/(2*g*y)))/2),_=m/y,x=m/g;Math.abs(_-1)>1e-6&&(this._+="L"+(t+_*f)+","+(n+_*s)),this._+="A"+i+","+i+",0,0,"+ +(s*h>f*p)+","+(this._x1=t+x*a)+","+(this._y1=n+x*c)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,r,e,i,o){t=+t,n=+n,o=!!o;var u=(r=+r)*Math.cos(e),a=r*Math.sin(e),c=t+u,f=n+a,s=1^o,l=o?e-i:i-e;if(r<0)throw new Error("negative radius: "+r);null===this._x1?this._+="M"+c+","+f:(Math.abs(this._x1-c)>1e-6||Math.abs(this._y1-f)>1e-6)&&(this._+="L"+c+","+f),r&&(l<0&&(l=l%ue+ue),l>ae?this._+="A"+r+","+r+",0,1,"+s+","+(t-u)+","+(n-a)+"A"+r+","+r+",0,1,"+s+","+(this._x1=c)+","+(this._y1=f):l>1e-6&&(this._+="A"+r+","+r+",0,"+ +(l>=oe)+","+s+","+(this._x1=t+r*Math.cos(i))+","+(this._y1=n+r*Math.sin(i))))},rect:function(t,n,r,e){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +r+"v"+ +e+"h"+-r+"Z"},toString:function(){return this._}};var se=fe;function le(){}function he(t,n){var r=new le;if(t instanceof le)t.each((function(t,n){r.set(n,t)}));else if(Array.isArray(t)){var e,i=-1,o=t.length;if(null==n)for(;++i<o;)r.set(i,t[i]);else for(;++i<o;)r.set(n(e=t[i],i,t),e)}else if(t)for(var u in t)r.set(u,t[u]);return r}le.prototype=he.prototype={constructor:le,has:function(t){return"$"+t in this},get:function(t){return this["$"+t]},set:function(t,n){return this["$"+t]=n,this},remove:function(t){var n="$"+t;return n in this&&delete this[n]},clear:function(){for(var t in this)"$"===t[0]&&delete this[t]},keys:function(){var t=[];for(var n in this)"$"===n[0]&&t.push(n.slice(1));return t},values:function(){var t=[];for(var n in this)"$"===n[0]&&t.push(this[n]);return t},entries:function(){var t=[];for(var n in this)"$"===n[0]&&t.push({key:n.slice(1),value:this[n]});return t},size:function(){var t=0;for(var n in this)"$"===n[0]&&++t;return t},empty:function(){for(var t in this)if("$"===t[0])return!1;return!0},each:function(t){for(var n in this)"$"===n[0]&&t(this[n],n.slice(1),this)}};var pe=he;function ve(){}var de=pe.prototype;function ge(t,n){var r=new ve;if(t instanceof ve)t.each((function(t){r.add(t)}));else if(t){var e=-1,i=t.length;if(null==n)for(;++e<i;)r.add(t[e]);else for(;++e<i;)r.add(n(t[e],e,t))}return r}ve.prototype=ge.prototype={constructor:ve,has:de.has,add:function(t){return this["$"+(t+="")]=t,this},remove:de.remove,clear:de.clear,values:de.keys,size:de.size,empty:de.empty,each:de.each};Array.prototype.slice;var ye={},me={};function _e(t){return new Function("d","return {"+t.map((function(t,n){return JSON.stringify(t)+": d["+n+'] || ""'})).join(",")+"}")}function xe(t){var n=Object.create(null),r=[];return t.forEach((function(t){for(var e in t)e in n||r.push(n[e]=e)})),r}function we(t,n){var r=t+"",e=r.length;return e<n?new Array(n-e+1).join(0)+r:r}function be(t){var n,r=t.getUTCHours(),e=t.getUTCMinutes(),i=t.getUTCSeconds(),o=t.getUTCMilliseconds();return isNaN(t)?"Invalid Date":((n=t.getUTCFullYear())<0?"-"+we(-n,6):n>9999?"+"+we(n,6):we(n,4))+"-"+we(t.getUTCMonth()+1,2)+"-"+we(t.getUTCDate(),2)+(o?"T"+we(r,2)+":"+we(e,2)+":"+we(i,2)+"."+we(o,3)+"Z":i?"T"+we(r,2)+":"+we(e,2)+":"+we(i,2)+"Z":e||r?"T"+we(r,2)+":"+we(e,2)+"Z":"")}var Ae=function(t){var n=new RegExp('["'+t+"\n\r]"),r=t.charCodeAt(0);function e(t,n){var e,i=[],o=t.length,u=0,a=0,c=o<=0,f=!1;function s(){if(c)return me;if(f)return f=!1,ye;var n,e,i=u;if(34===t.charCodeAt(i)){for(;u++<o&&34!==t.charCodeAt(u)||34===t.charCodeAt(++u););return(n=u)>=o?c=!0:10===(e=t.charCodeAt(u++))?f=!0:13===e&&(f=!0,10===t.charCodeAt(u)&&++u),t.slice(i+1,n-1).replace(/""/g,'"')}for(;u<o;){if(10===(e=t.charCodeAt(n=u++)))f=!0;else if(13===e)f=!0,10===t.charCodeAt(u)&&++u;else if(e!==r)continue;return t.slice(i,n)}return c=!0,t.slice(i,o)}for(10===t.charCodeAt(o-1)&&--o,13===t.charCodeAt(o-1)&&--o;(e=s())!==me;){for(var l=[];e!==ye&&e!==me;)l.push(e),e=s();n&&null==(l=n(l,a++))||i.push(l)}return i}function i(n,r){return n.map((function(n){return r.map((function(t){return u(n[t])})).join(t)}))}function o(n){return n.map(u).join(t)}function u(t){return null==t?"":t instanceof Date?be(t):n.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t}return{parse:function(t,n){var r,i,o=e(t,(function(t,e){if(r)return r(t,e-1);i=t,r=n?function(t,n){var r=_e(t);return function(e,i){return n(r(e),i,t)}}(t,n):_e(t)}));return o.columns=i||[],o},parseRows:e,format:function(n,r){return null==r&&(r=xe(n)),[r.map(u).join(t)].concat(i(n,r)).join("\n")},formatBody:function(t,n){return null==n&&(n=xe(t)),i(t,n).join("\n")},formatRows:function(t){return t.map(o).join("\n")},formatRow:o,formatValue:u}},Me=Ae(","),Se=Me.parse,Ee=(Me.parseRows,Me.format,Me.formatBody,Me.formatRows,Me.formatRow,Me.formatValue,Ae("\t")),Ne=Ee.parse;Ee.parseRows,Ee.format,Ee.formatBody,Ee.formatRows,Ee.formatRow,Ee.formatValue;function je(t){if(!t.ok)throw new Error(t.status+" "+t.statusText);return t.text()}var Te=function(t,n){return fetch(t,n).then(je)};function Oe(t){return function(n,r,e){return 2===arguments.length&&"function"==typeof r&&(e=r,r=void 0),Te(n,r).then((function(n){return t(n,e)}))}}Oe(Se),Oe(Ne);function ke(t){return function(n,r){return Te(n,r).then((function(n){return(new DOMParser).parseFromString(n,t)}))}}ke("application/xml"),ke("text/html"),ke("image/svg+xml");function Pe(t,n,r,e){if(isNaN(n)||isNaN(r))return t;var i,o,u,a,c,f,s,l,h,p=t._root,v={data:e},d=t._x0,g=t._y0,y=t._x1,m=t._y1;if(!p)return t._root=v,t;for(;p.length;)if((f=n>=(o=(d+y)/2))?d=o:y=o,(s=r>=(u=(g+m)/2))?g=u:m=u,i=p,!(p=p[l=s<<1|f]))return i[l]=v,t;if(a=+t._x.call(null,p.data),c=+t._y.call(null,p.data),n===a&&r===c)return v.next=p,i?i[l]=v:t._root=v,t;do{i=i?i[l]=new Array(4):t._root=new Array(4),(f=n>=(o=(d+y)/2))?d=o:y=o,(s=r>=(u=(g+m)/2))?g=u:m=u}while((l=s<<1|f)==(h=(c>=u)<<1|a>=o));return i[h]=p,i[l]=v,t}var Ce=function(t,n,r,e,i){this.node=t,this.x0=n,this.y0=r,this.x1=e,this.y1=i};function Le(t){return t[0]}function Fe(t){return t[1]}function Ie(t,n,r){var e=new Re(null==n?Le:n,null==r?Fe:r,NaN,NaN,NaN,NaN);return null==t?e:e.addAll(t)}function Re(t,n,r,e,i,o){this._x=t,this._y=n,this._x0=r,this._y0=e,this._x1=i,this._y1=o,this._root=void 0}function Ue(t){for(var n={data:t.data},r=n;t=t.next;)r=r.next={data:t.data};return n}var De=Ie.prototype=Re.prototype;De.copy=function(){var t,n,r=new Re(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root;if(!e)return r;if(!e.length)return r._root=Ue(e),r;for(t=[{source:e,target:r._root=new Array(4)}];e=t.pop();)for(var i=0;i<4;++i)(n=e.source[i])&&(n.length?t.push({source:n,target:e.target[i]=new Array(4)}):e.target[i]=Ue(n));return r},De.add=function(t){var n=+this._x.call(null,t),r=+this._y.call(null,t);return Pe(this.cover(n,r),n,r,t)},De.addAll=function(t){var n,r,e,i,o=t.length,u=new Array(o),a=new Array(o),c=1/0,f=1/0,s=-1/0,l=-1/0;for(r=0;r<o;++r)isNaN(e=+this._x.call(null,n=t[r]))||isNaN(i=+this._y.call(null,n))||(u[r]=e,a[r]=i,e<c&&(c=e),e>s&&(s=e),i<f&&(f=i),i>l&&(l=i));if(c>s||f>l)return this;for(this.cover(c,f).cover(s,l),r=0;r<o;++r)Pe(this,u[r],a[r],t[r]);return this},De.cover=function(t,n){if(isNaN(t=+t)||isNaN(n=+n))return this;var r=this._x0,e=this._y0,i=this._x1,o=this._y1;if(isNaN(r))i=(r=Math.floor(t))+1,o=(e=Math.floor(n))+1;else{for(var u,a,c=i-r,f=this._root;r>t||t>=i||e>n||n>=o;)switch(a=(n<e)<<1|t<r,(u=new Array(4))[a]=f,f=u,c*=2,a){case 0:i=r+c,o=e+c;break;case 1:r=i-c,o=e+c;break;case 2:i=r+c,e=o-c;break;case 3:r=i-c,e=o-c}this._root&&this._root.length&&(this._root=f)}return this._x0=r,this._y0=e,this._x1=i,this._y1=o,this},De.data=function(){var t=[];return this.visit((function(n){if(!n.length)do{t.push(n.data)}while(n=n.next)})),t},De.extent=function(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]},De.find=function(t,n,r){var e,i,o,u,a,c,f,s=this._x0,l=this._y0,h=this._x1,p=this._y1,v=[],d=this._root;for(d&&v.push(new Ce(d,s,l,h,p)),null==r?r=1/0:(s=t-r,l=n-r,h=t+r,p=n+r,r*=r);c=v.pop();)if(!(!(d=c.node)||(i=c.x0)>h||(o=c.y0)>p||(u=c.x1)<s||(a=c.y1)<l))if(d.length){var g=(i+u)/2,y=(o+a)/2;v.push(new Ce(d[3],g,y,u,a),new Ce(d[2],i,y,g,a),new Ce(d[1],g,o,u,y),new Ce(d[0],i,o,g,y)),(f=(n>=y)<<1|t>=g)&&(c=v[v.length-1],v[v.length-1]=v[v.length-1-f],v[v.length-1-f]=c)}else{var m=t-+this._x.call(null,d.data),_=n-+this._y.call(null,d.data),x=m*m+_*_;if(x<r){var w=Math.sqrt(r=x);s=t-w,l=n-w,h=t+w,p=n+w,e=d.data}}return e},De.remove=function(t){if(isNaN(o=+this._x.call(null,t))||isNaN(u=+this._y.call(null,t)))return this;var n,r,e,i,o,u,a,c,f,s,l,h,p=this._root,v=this._x0,d=this._y0,g=this._x1,y=this._y1;if(!p)return this;if(p.length)for(;;){if((f=o>=(a=(v+g)/2))?v=a:g=a,(s=u>=(c=(d+y)/2))?d=c:y=c,n=p,!(p=p[l=s<<1|f]))return this;if(!p.length)break;(n[l+1&3]||n[l+2&3]||n[l+3&3])&&(r=n,h=l)}for(;p.data!==t;)if(e=p,!(p=p.next))return this;return(i=p.next)&&delete p.next,e?(i?e.next=i:delete e.next,this):n?(i?n[l]=i:delete n[l],(p=n[0]||n[1]||n[2]||n[3])&&p===(n[3]||n[2]||n[1]||n[0])&&!p.length&&(r?r[h]=p:this._root=p),this):(this._root=i,this)},De.removeAll=function(t){for(var n=0,r=t.length;n<r;++n)this.remove(t[n]);return this},De.root=function(){return this._root},De.size=function(){var t=0;return this.visit((function(n){if(!n.length)do{++t}while(n=n.next)})),t},De.visit=function(t){var n,r,e,i,o,u,a=[],c=this._root;for(c&&a.push(new Ce(c,this._x0,this._y0,this._x1,this._y1));n=a.pop();)if(!t(c=n.node,e=n.x0,i=n.y0,o=n.x1,u=n.y1)&&c.length){var f=(e+o)/2,s=(i+u)/2;(r=c[3])&&a.push(new Ce(r,f,s,o,u)),(r=c[2])&&a.push(new Ce(r,e,s,f,u)),(r=c[1])&&a.push(new Ce(r,f,i,o,s)),(r=c[0])&&a.push(new Ce(r,e,i,f,s))}return this},De.visitAfter=function(t){var n,r=[],e=[];for(this._root&&r.push(new Ce(this._root,this._x0,this._y0,this._x1,this._y1));n=r.pop();){var i=n.node;if(i.length){var o,u=n.x0,a=n.y0,c=n.x1,f=n.y1,s=(u+c)/2,l=(a+f)/2;(o=i[0])&&r.push(new Ce(o,u,a,s,l)),(o=i[1])&&r.push(new Ce(o,s,a,c,l)),(o=i[2])&&r.push(new Ce(o,u,l,s,f)),(o=i[3])&&r.push(new Ce(o,s,l,c,f))}e.push(n)}for(;n=e.pop();)t(n.node,n.x0,n.y0,n.x1,n.y1);return this},De.x=function(t){return arguments.length?(this._x=t,this):this._x},De.y=function(t){return arguments.length?(this._y=t,this):this._y};Math.PI,Math.sqrt(5);var qe=function(){return Math.random()},ze=(function t(n){function r(t,r){return t=null==t?0:+t,r=null==r?1:+r,1===arguments.length?(r=t,t=0):r-=t,function(){return n()*r+t}}return r.source=t,r}(qe),function t(n){function r(t,r){var e,i;return t=null==t?0:+t,r=null==r?1:+r,function(){var o;if(null!=e)o=e,e=null;else do{e=2*n()-1,o=2*n()-1,i=e*e+o*o}while(!i||i>1);return t+r*o*Math.sqrt(-2*Math.log(i)/i)}}return r.source=t,r}(qe)),Be=(function t(n){function r(){var t=ze.source(n).apply(this,arguments);return function(){return Math.exp(t())}}return r.source=t,r}(qe),function t(n){function r(t){return function(){for(var r=0,e=0;e<t;++e)r+=n();return r}}return r.source=t,r}(qe));(function t(n){function r(t){var r=Be.source(n)(t);return function(){return r()/t}}return r.source=t,r})(qe),function t(n){function r(t){return function(){return-Math.log(1-n())/t}}return r.source=t,r}(qe);function We(t,n){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(n).domain(t)}return this}var Ve=Array.prototype,Ye=Ve.map,He=Ve.slice;var $e=function(t,n){return t=+t,n=+n,function(r){return Math.round(t*(1-r)+n*r)}},Ge=function(t){return+t},Xe=[0,1];function Ze(t){return t}function Je(t,n){return(n-=t=+t)?function(r){return(r-t)/n}:(r=isNaN(n)?NaN:.5,function(){return r});var r}function Ke(t){var n,r=t[0],e=t[t.length-1];return r>e&&(n=r,r=e,e=n),function(t){return Math.max(r,Math.min(e,t))}}function Qe(t,n,r){var e=t[0],i=t[1],o=n[0],u=n[1];return i<e?(e=Je(i,e),o=r(u,o)):(e=Je(e,i),o=r(o,u)),function(t){return o(e(t))}}function ti(t,n,r){var e=Math.min(t.length,n.length)-1,i=new Array(e),o=new Array(e),u=-1;for(t[e]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++u<e;)i[u]=Je(t[u],t[u+1]),o[u]=r(n[u],n[u+1]);return function(n){var r=a(t,n,1,e)-1;return o[r](i[r](n))}}function ni(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function ri(){var t,n,r,e,i,o,u=Xe,a=Xe,c=Vn,f=Ze;function s(){return e=Math.min(u.length,a.length)>2?ti:Qe,i=o=null,l}function l(n){return isNaN(n=+n)?r:(i||(i=e(u.map(t),a,c)))(t(f(n)))}return l.invert=function(r){return f(n((o||(o=e(a,u.map(t),Rn)))(r)))},l.domain=function(t){return arguments.length?(u=Ye.call(t,Ge),f===Ze||(f=Ke(u)),s()):u.slice()},l.range=function(t){return arguments.length?(a=He.call(t),s()):a.slice()},l.rangeRound=function(t){return a=He.call(t),c=$e,s()},l.clamp=function(t){return arguments.length?(f=t?Ke(u):Ze,l):f!==Ze},l.interpolate=function(t){return arguments.length?(c=t,s()):c},l.unknown=function(t){return arguments.length?(r=t,l):r},function(r,e){return t=r,n=e,s()}}function ei(t,n){return ri()(t,n)}var ii=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function oi(t){if(!(n=ii.exec(t)))throw new Error("invalid format: "+t);var n;return new ui({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}function ui(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}oi.prototype=ui.prototype,ui.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var ai,ci,fi,si,li=function(t,n){if((r=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var r,e=t.slice(0,r);return[e.length>1?e[0]+e.slice(2):e,+t.slice(r+1)]},hi=function(t){return(t=li(Math.abs(t)))?t[1]:NaN},pi=function(t,n){var r=li(t,n);if(!r)return t+"";var e=r[0],i=r[1];return i<0?"0."+new Array(-i).join("0")+e:e.length>i+1?e.slice(0,i+1)+"."+e.slice(i+1):e+new Array(i-e.length+2).join("0")},vi={"%":function(t,n){return(100*t).toFixed(n)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return Math.round(t).toString(10)},e:function(t,n){return t.toExponential(n)},f:function(t,n){return t.toFixed(n)},g:function(t,n){return t.toPrecision(n)},o:function(t){return Math.round(t).toString(8)},p:function(t,n){return pi(100*t,n)},r:pi,s:function(t,n){var r=li(t,n);if(!r)return t+"";var e=r[0],i=r[1],o=i-(ai=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,u=e.length;return o===u?e:o>u?e+new Array(o-u+1).join("0"):o>0?e.slice(0,o)+"."+e.slice(o):"0."+new Array(1-o).join("0")+li(t,Math.max(0,n+o-1))[0]},X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}},di=function(t){return t},gi=Array.prototype.map,yi=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];ci=function(t){var n,r,e=void 0===t.grouping||void 0===t.thousands?di:(n=gi.call(t.grouping,Number),r=t.thousands+"",function(t,e){for(var i=t.length,o=[],u=0,a=n[0],c=0;i>0&&a>0&&(c+a+1>e&&(a=Math.max(1,e-c)),o.push(t.substring(i-=a,i+a)),!((c+=a+1)>e));)a=n[u=(u+1)%n.length];return o.reverse().join(r)}),i=void 0===t.currency?"":t.currency[0]+"",o=void 0===t.currency?"":t.currency[1]+"",u=void 0===t.decimal?".":t.decimal+"",a=void 0===t.numerals?di:function(t){return function(n){return n.replace(/[0-9]/g,(function(n){return t[+n]}))}}(gi.call(t.numerals,String)),c=void 0===t.percent?"%":t.percent+"",f=void 0===t.minus?"-":t.minus+"",s=void 0===t.nan?"NaN":t.nan+"";function l(t){var n=(t=oi(t)).fill,r=t.align,l=t.sign,h=t.symbol,p=t.zero,v=t.width,d=t.comma,g=t.precision,y=t.trim,m=t.type;"n"===m?(d=!0,m="g"):vi[m]||(void 0===g&&(g=12),y=!0,m="g"),(p||"0"===n&&"="===r)&&(p=!0,n="0",r="=");var _="$"===h?i:"#"===h&&/[boxX]/.test(m)?"0"+m.toLowerCase():"",x="$"===h?o:/[%p]/.test(m)?c:"",w=vi[m],b=/[defgprs%]/.test(m);function A(t){var i,o,c,h=_,A=x;if("c"===m)A=w(t)+A,t="";else{var M=(t=+t)<0||1/t<0;if(t=isNaN(t)?s:w(Math.abs(t),g),y&&(t=function(t){t:for(var n,r=t.length,e=1,i=-1;e<r;++e)switch(t[e]){case".":i=n=e;break;case"0":0===i&&(i=e),n=e;break;default:if(!+t[e])break t;i>0&&(i=0)}return i>0?t.slice(0,i)+t.slice(n+1):t}(t)),M&&0==+t&&"+"!==l&&(M=!1),h=(M?"("===l?l:f:"-"===l||"("===l?"":l)+h,A=("s"===m?yi[8+ai/3]:"")+A+(M&&"("===l?")":""),b)for(i=-1,o=t.length;++i<o;)if(48>(c=t.charCodeAt(i))||c>57){A=(46===c?u+t.slice(i+1):t.slice(i))+A,t=t.slice(0,i);break}}d&&!p&&(t=e(t,1/0));var S=h.length+t.length+A.length,E=S<v?new Array(v-S+1).join(n):"";switch(d&&p&&(t=e(E+t,E.length?v-A.length:1/0),E=""),r){case"<":t=h+t+A+E;break;case"=":t=h+E+t+A;break;case"^":t=E.slice(0,S=E.length>>1)+h+t+A+E.slice(S);break;default:t=E+h+t+A}return a(t)}return g=void 0===g?6:/[gprs]/.test(m)?Math.max(1,Math.min(21,g)):Math.max(0,Math.min(20,g)),A.toString=function(){return t+""},A}return{format:l,formatPrefix:function(t,n){var r=l(((t=oi(t)).type="f",t)),e=3*Math.max(-8,Math.min(8,Math.floor(hi(n)/3))),i=Math.pow(10,-e),o=yi[8+e/3];return function(t){return r(i*t)+o}}}}({decimal:".",thousands:",",grouping:[3],currency:["$",""],minus:"-"}),fi=ci.format,si=ci.formatPrefix;var mi=function(t,n,r,e){var i,o=x(t,n,r);switch((e=oi(null==e?",f":e)).type){case"s":var u=Math.max(Math.abs(t),Math.abs(n));return null!=e.precision||isNaN(i=function(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(hi(n)/3)))-hi(Math.abs(t)))}(o,u))||(e.precision=i),si(e,u);case"":case"e":case"g":case"p":case"r":null!=e.precision||isNaN(i=function(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,hi(n)-hi(t))+1}(o,Math.max(Math.abs(t),Math.abs(n))))||(e.precision=i-("e"===e.type));break;case"f":case"%":null!=e.precision||isNaN(i=function(t){return Math.max(0,-hi(Math.abs(t)))}(o))||(e.precision=i-2*("%"===e.type))}return fi(e)};function _i(t){var n=t.domain;return t.ticks=function(t){var r=n();return m(r[0],r[r.length-1],null==t?10:t)},t.tickFormat=function(t,r){var e=n();return mi(e[0],e[e.length-1],null==t?10:t,r)},t.nice=function(r){null==r&&(r=10);var e,i=n(),o=0,u=i.length-1,a=i[o],c=i[u];return c<a&&(e=a,a=c,c=e,e=o,o=u,u=e),(e=_(a,c,r))>0?e=_(a=Math.floor(a/e)*e,c=Math.ceil(c/e)*e,r):e<0&&(e=_(a=Math.ceil(a*e)/e,c=Math.floor(c*e)/e,r)),e>0?(i[o]=Math.floor(a/e)*e,i[u]=Math.ceil(c/e)*e,n(i)):e<0&&(i[o]=Math.ceil(a*e)/e,i[u]=Math.floor(c*e)/e,n(i)),t},t}function xi(){var t=ei(Ze,Ze);return t.copy=function(){return ni(t,xi())},We.apply(t,arguments),_i(t)}var wi=new Date,bi=new Date;function Ai(t,n,r,e){function i(n){return t(n=0===arguments.length?new Date:new Date(+n)),n}return i.floor=function(n){return t(n=new Date(+n)),n},i.ceil=function(r){return t(r=new Date(r-1)),n(r,1),t(r),r},i.round=function(t){var n=i(t),r=i.ceil(t);return t-n<r-t?n:r},i.offset=function(t,r){return n(t=new Date(+t),null==r?1:Math.floor(r)),t},i.range=function(r,e,o){var u,a=[];if(r=i.ceil(r),o=null==o?1:Math.floor(o),!(r<e&&o>0))return a;do{a.push(u=new Date(+r)),n(r,o),t(r)}while(u<r&&r<e);return a},i.filter=function(r){return Ai((function(n){if(n>=n)for(;t(n),!r(n);)n.setTime(n-1)}),(function(t,e){if(t>=t)if(e<0)for(;++e<=0;)for(;n(t,-1),!r(t););else for(;--e>=0;)for(;n(t,1),!r(t););}))},r&&(i.count=function(n,e){return wi.setTime(+n),bi.setTime(+e),t(wi),t(bi),Math.floor(r(wi,bi))},i.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?i.filter(e?function(n){return e(n)%t==0}:function(n){return i.count(0,n)%t==0}):i:null}),i}var Mi=Ai((function(t){t.setMonth(0,1),t.setHours(0,0,0,0)}),(function(t,n){t.setFullYear(t.getFullYear()+n)}),(function(t,n){return n.getFullYear()-t.getFullYear()}),(function(t){return t.getFullYear()}));Mi.every=function(t){return isFinite(t=Math.floor(t))&&t>0?Ai((function(n){n.setFullYear(Math.floor(n.getFullYear()/t)*t),n.setMonth(0,1),n.setHours(0,0,0,0)}),(function(n,r){n.setFullYear(n.getFullYear()+r*t)})):null};var Si=Mi,Ei=(Mi.range,Ai((function(t){t.setDate(1),t.setHours(0,0,0,0)}),(function(t,n){t.setMonth(t.getMonth()+n)}),(function(t,n){return n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear())}),(function(t){return t.getMonth()})));Ei.range;function Ni(t){return Ai((function(n){n.setDate(n.getDate()-(n.getDay()+7-t)%7),n.setHours(0,0,0,0)}),(function(t,n){t.setDate(t.getDate()+7*n)}),(function(t,n){return(n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/6048e5}))}var ji=Ni(0),Ti=Ni(1),Oi=Ni(2),ki=Ni(3),Pi=Ni(4),Ci=Ni(5),Li=Ni(6),Fi=(ji.range,Ti.range,Oi.range,ki.range,Pi.range,Ci.range,Li.range,Ai((function(t){t.setHours(0,0,0,0)}),(function(t,n){t.setDate(t.getDate()+n)}),(function(t,n){return(n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5}),(function(t){return t.getDate()-1}))),Ii=Fi,Ri=(Fi.range,Ai((function(t){t.setTime(t-t.getMilliseconds()-1e3*t.getSeconds()-6e4*t.getMinutes())}),(function(t,n){t.setTime(+t+36e5*n)}),(function(t,n){return(n-t)/36e5}),(function(t){return t.getHours()}))),Ui=(Ri.range,Ai((function(t){t.setTime(t-t.getMilliseconds()-1e3*t.getSeconds())}),(function(t,n){t.setTime(+t+6e4*n)}),(function(t,n){return(n-t)/6e4}),(function(t){return t.getMinutes()}))),Di=(Ui.range,Ai((function(t){t.setTime(t-t.getMilliseconds())}),(function(t,n){t.setTime(+t+1e3*n)}),(function(t,n){return(n-t)/1e3}),(function(t){return t.getUTCSeconds()}))),qi=(Di.range,Ai((function(){}),(function(t,n){t.setTime(+t+n)}),(function(t,n){return n-t})));qi.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?Ai((function(n){n.setTime(Math.floor(n/t)*t)}),(function(n,r){n.setTime(+n+r*t)}),(function(n,r){return(r-n)/t})):qi:null};qi.range;function zi(t){return Ai((function(n){n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-t)%7),n.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCDate(t.getUTCDate()+7*n)}),(function(t,n){return(n-t)/6048e5}))}var Bi=zi(0),Wi=zi(1),Vi=zi(2),Yi=zi(3),Hi=zi(4),$i=zi(5),Gi=zi(6),Xi=(Bi.range,Wi.range,Vi.range,Yi.range,Hi.range,$i.range,Gi.range,Ai((function(t){t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCDate(t.getUTCDate()+n)}),(function(t,n){return(n-t)/864e5}),(function(t){return t.getUTCDate()-1}))),Zi=Xi,Ji=(Xi.range,Ai((function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n)}),(function(t,n){return n.getUTCFullYear()-t.getUTCFullYear()}),(function(t){return t.getUTCFullYear()})));Ji.every=function(t){return isFinite(t=Math.floor(t))&&t>0?Ai((function(n){n.setUTCFullYear(Math.floor(n.getUTCFullYear()/t)*t),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)}),(function(n,r){n.setUTCFullYear(n.getUTCFullYear()+r*t)})):null};var Ki=Ji;Ji.range;function Qi(t){if(0<=t.y&&t.y<100){var n=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);return n.setFullYear(t.y),n}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function to(t){if(0<=t.y&&t.y<100){var n=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L));return n.setUTCFullYear(t.y),n}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function no(t,n,r){return{y:t,m:n,d:r,H:0,M:0,S:0,L:0}}var ro,eo={"-":"",_:" ",0:"0"},io=/^\s*\d+/,oo=/^%/,uo=/[\\^$*+?|[\]().{}]/g;function ao(t,n,r){var e=t<0?"-":"",i=(e?-t:t)+"",o=i.length;return e+(o<r?new Array(r-o+1).join(n)+i:i)}function co(t){return t.replace(uo,"\\$&")}function fo(t){return new RegExp("^(?:"+t.map(co).join("|")+")","i")}function so(t){for(var n={},r=-1,e=t.length;++r<e;)n[t[r].toLowerCase()]=r;return n}function lo(t,n,r){var e=io.exec(n.slice(r,r+1));return e?(t.w=+e[0],r+e[0].length):-1}function ho(t,n,r){var e=io.exec(n.slice(r,r+1));return e?(t.u=+e[0],r+e[0].length):-1}function po(t,n,r){var e=io.exec(n.slice(r,r+2));return e?(t.U=+e[0],r+e[0].length):-1}function vo(t,n,r){var e=io.exec(n.slice(r,r+2));return e?(t.V=+e[0],r+e[0].length):-1}function go(t,n,r){var e=io.exec(n.slice(r,r+2));return e?(t.W=+e[0],r+e[0].length):-1}function yo(t,n,r){var e=io.exec(n.slice(r,r+4));return e?(t.y=+e[0],r+e[0].length):-1}function mo(t,n,r){var e=io.exec(n.slice(r,r+2));return e?(t.y=+e[0]+(+e[0]>68?1900:2e3),r+e[0].length):-1}function _o(t,n,r){var e=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(r,r+6));return e?(t.Z=e[1]?0:-(e[2]+(e[3]||"00")),r+e[0].length):-1}function xo(t,n,r){var e=io.exec(n.slice(r,r+1));return e?(t.q=3*e[0]-3,r+e[0].length):-1}function wo(t,n,r){var e=io.exec(n.slice(r,r+2));return e?(t.m=e[0]-1,r+e[0].length):-1}function bo(t,n,r){var e=io.exec(n.slice(r,r+2));return e?(t.d=+e[0],r+e[0].length):-1}function Ao(t,n,r){var e=io.exec(n.slice(r,r+3));return e?(t.m=0,t.d=+e[0],r+e[0].length):-1}function Mo(t,n,r){var e=io.exec(n.slice(r,r+2));return e?(t.H=+e[0],r+e[0].length):-1}function So(t,n,r){var e=io.exec(n.slice(r,r+2));return e?(t.M=+e[0],r+e[0].length):-1}function Eo(t,n,r){var e=io.exec(n.slice(r,r+2));return e?(t.S=+e[0],r+e[0].length):-1}function No(t,n,r){var e=io.exec(n.slice(r,r+3));return e?(t.L=+e[0],r+e[0].length):-1}function jo(t,n,r){var e=io.exec(n.slice(r,r+6));return e?(t.L=Math.floor(e[0]/1e3),r+e[0].length):-1}function To(t,n,r){var e=oo.exec(n.slice(r,r+1));return e?r+e[0].length:-1}function Oo(t,n,r){var e=io.exec(n.slice(r));return e?(t.Q=+e[0],r+e[0].length):-1}function ko(t,n,r){var e=io.exec(n.slice(r));return e?(t.s=+e[0],r+e[0].length):-1}function Po(t,n){return ao(t.getDate(),n,2)}function Co(t,n){return ao(t.getHours(),n,2)}function Lo(t,n){return ao(t.getHours()%12||12,n,2)}function Fo(t,n){return ao(1+Ii.count(Si(t),t),n,3)}function Io(t,n){return ao(t.getMilliseconds(),n,3)}function Ro(t,n){return Io(t,n)+"000"}function Uo(t,n){return ao(t.getMonth()+1,n,2)}function Do(t,n){return ao(t.getMinutes(),n,2)}function qo(t,n){return ao(t.getSeconds(),n,2)}function zo(t){var n=t.getDay();return 0===n?7:n}function Bo(t,n){return ao(ji.count(Si(t)-1,t),n,2)}function Wo(t,n){var r=t.getDay();return t=r>=4||0===r?Pi(t):Pi.ceil(t),ao(Pi.count(Si(t),t)+(4===Si(t).getDay()),n,2)}function Vo(t){return t.getDay()}function Yo(t,n){return ao(Ti.count(Si(t)-1,t),n,2)}function Ho(t,n){return ao(t.getFullYear()%100,n,2)}function $o(t,n){return ao(t.getFullYear()%1e4,n,4)}function Go(t){var n=t.getTimezoneOffset();return(n>0?"-":(n*=-1,"+"))+ao(n/60|0,"0",2)+ao(n%60,"0",2)}function Xo(t,n){return ao(t.getUTCDate(),n,2)}function Zo(t,n){return ao(t.getUTCHours(),n,2)}function Jo(t,n){return ao(t.getUTCHours()%12||12,n,2)}function Ko(t,n){return ao(1+Zi.count(Ki(t),t),n,3)}function Qo(t,n){return ao(t.getUTCMilliseconds(),n,3)}function tu(t,n){return Qo(t,n)+"000"}function nu(t,n){return ao(t.getUTCMonth()+1,n,2)}function ru(t,n){return ao(t.getUTCMinutes(),n,2)}function eu(t,n){return ao(t.getUTCSeconds(),n,2)}function iu(t){var n=t.getUTCDay();return 0===n?7:n}function ou(t,n){return ao(Bi.count(Ki(t)-1,t),n,2)}function uu(t,n){var r=t.getUTCDay();return t=r>=4||0===r?Hi(t):Hi.ceil(t),ao(Hi.count(Ki(t),t)+(4===Ki(t).getUTCDay()),n,2)}function au(t){return t.getUTCDay()}function cu(t,n){return ao(Wi.count(Ki(t)-1,t),n,2)}function fu(t,n){return ao(t.getUTCFullYear()%100,n,2)}function su(t,n){return ao(t.getUTCFullYear()%1e4,n,4)}function lu(){return"+0000"}function hu(){return"%"}function pu(t){return+t}function vu(t){return Math.floor(+t/1e3)}!function(t){ro=function(t){var n=t.dateTime,r=t.date,e=t.time,i=t.periods,o=t.days,u=t.shortDays,a=t.months,c=t.shortMonths,f=fo(i),s=so(i),l=fo(o),h=so(o),p=fo(u),v=so(u),d=fo(a),g=so(a),y=fo(c),m=so(c),_={a:function(t){return u[t.getDay()]},A:function(t){return o[t.getDay()]},b:function(t){return c[t.getMonth()]},B:function(t){return a[t.getMonth()]},c:null,d:Po,e:Po,f:Ro,H:Co,I:Lo,j:Fo,L:Io,m:Uo,M:Do,p:function(t){return i[+(t.getHours()>=12)]},q:function(t){return 1+~~(t.getMonth()/3)},Q:pu,s:vu,S:qo,u:zo,U:Bo,V:Wo,w:Vo,W:Yo,x:null,X:null,y:Ho,Y:$o,Z:Go,"%":hu},x={a:function(t){return u[t.getUTCDay()]},A:function(t){return o[t.getUTCDay()]},b:function(t){return c[t.getUTCMonth()]},B:function(t){return a[t.getUTCMonth()]},c:null,d:Xo,e:Xo,f:tu,H:Zo,I:Jo,j:Ko,L:Qo,m:nu,M:ru,p:function(t){return i[+(t.getUTCHours()>=12)]},q:function(t){return 1+~~(t.getUTCMonth()/3)},Q:pu,s:vu,S:eu,u:iu,U:ou,V:uu,w:au,W:cu,x:null,X:null,y:fu,Y:su,Z:lu,"%":hu},w={a:function(t,n,r){var e=p.exec(n.slice(r));return e?(t.w=v[e[0].toLowerCase()],r+e[0].length):-1},A:function(t,n,r){var e=l.exec(n.slice(r));return e?(t.w=h[e[0].toLowerCase()],r+e[0].length):-1},b:function(t,n,r){var e=y.exec(n.slice(r));return e?(t.m=m[e[0].toLowerCase()],r+e[0].length):-1},B:function(t,n,r){var e=d.exec(n.slice(r));return e?(t.m=g[e[0].toLowerCase()],r+e[0].length):-1},c:function(t,r,e){return M(t,n,r,e)},d:bo,e:bo,f:jo,H:Mo,I:Mo,j:Ao,L:No,m:wo,M:So,p:function(t,n,r){var e=f.exec(n.slice(r));return e?(t.p=s[e[0].toLowerCase()],r+e[0].length):-1},q:xo,Q:Oo,s:ko,S:Eo,u:ho,U:po,V:vo,w:lo,W:go,x:function(t,n,e){return M(t,r,n,e)},X:function(t,n,r){return M(t,e,n,r)},y:mo,Y:yo,Z:_o,"%":To};function b(t,n){return function(r){var e,i,o,u=[],a=-1,c=0,f=t.length;for(r instanceof Date||(r=new Date(+r));++a<f;)37===t.charCodeAt(a)&&(u.push(t.slice(c,a)),null!=(i=eo[e=t.charAt(++a)])?e=t.charAt(++a):i="e"===e?" ":"0",(o=n[e])&&(e=o(r,i)),u.push(e),c=a+1);return u.push(t.slice(c,a)),u.join("")}}function A(t,n){return function(r){var e,i,o=no(1900,void 0,1);if(M(o,t,r+="",0)!=r.length)return null;if("Q"in o)return new Date(o.Q);if("s"in o)return new Date(1e3*o.s+("L"in o?o.L:0));if(n&&!("Z"in o)&&(o.Z=0),"p"in o&&(o.H=o.H%12+12*o.p),void 0===o.m&&(o.m="q"in o?o.q:0),"V"in o){if(o.V<1||o.V>53)return null;"w"in o||(o.w=1),"Z"in o?(i=(e=to(no(o.y,0,1))).getUTCDay(),e=i>4||0===i?Wi.ceil(e):Wi(e),e=Zi.offset(e,7*(o.V-1)),o.y=e.getUTCFullYear(),o.m=e.getUTCMonth(),o.d=e.getUTCDate()+(o.w+6)%7):(i=(e=Qi(no(o.y,0,1))).getDay(),e=i>4||0===i?Ti.ceil(e):Ti(e),e=Ii.offset(e,7*(o.V-1)),o.y=e.getFullYear(),o.m=e.getMonth(),o.d=e.getDate()+(o.w+6)%7)}else("W"in o||"U"in o)&&("w"in o||(o.w="u"in o?o.u%7:"W"in o?1:0),i="Z"in o?to(no(o.y,0,1)).getUTCDay():Qi(no(o.y,0,1)).getDay(),o.m=0,o.d="W"in o?(o.w+6)%7+7*o.W-(i+5)%7:o.w+7*o.U-(i+6)%7);return"Z"in o?(o.H+=o.Z/100|0,o.M+=o.Z%100,to(o)):Qi(o)}}function M(t,n,r,e){for(var i,o,u=0,a=n.length,c=r.length;u<a;){if(e>=c)return-1;if(37===(i=n.charCodeAt(u++))){if(i=n.charAt(u++),!(o=w[i in eo?n.charAt(u++):i])||(e=o(t,r,e))<0)return-1}else if(i!=r.charCodeAt(e++))return-1}return e}return _.x=b(r,_),_.X=b(e,_),_.c=b(n,_),x.x=b(r,x),x.X=b(e,x),x.c=b(n,x),{format:function(t){var n=b(t+="",_);return n.toString=function(){return t},n},parse:function(t){var n=A(t+="",!1);return n.toString=function(){return t},n},utcFormat:function(t){var n=b(t+="",x);return n.toString=function(){return t},n},utcParse:function(t){var n=A(t+="",!0);return n.toString=function(){return t},n}}}(t),ro.format,ro.parse,ro.utcFormat,ro.utcParse}({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});var du=Ai((function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)}),(function(t,n){t.setUTCMonth(t.getUTCMonth()+n)}),(function(t,n){return n.getUTCMonth()-t.getUTCMonth()+12*(n.getUTCFullYear()-t.getUTCFullYear())}),(function(t){return t.getUTCMonth()})),gu=(du.range,Ai((function(t){t.setUTCMinutes(0,0,0)}),(function(t,n){t.setTime(+t+36e5*n)}),(function(t,n){return(n-t)/36e5}),(function(t){return t.getUTCHours()}))),yu=(gu.range,Ai((function(t){t.setUTCSeconds(0,0)}),(function(t,n){t.setTime(+t+6e4*n)}),(function(t,n){return(n-t)/6e4}),(function(t){return t.getUTCMinutes()})));yu.range;var mu=function(t){return Xt(Ot(t).call(document.documentElement))},_u=function(t){return function(){return t}};function xu(t){this._context=t}xu.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}};var wu=function(t){return new xu(t)};function bu(t){return t[0]}function Au(t){return t[1]}function Mu(t,n,r){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+r)/6)}function Su(t){this._context=t}Su.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:Mu(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:Mu(this,t,n)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=n}};var Eu=function(t){return new Su(t)};function Nu(){this._=null}function ju(t){t.U=t.C=t.L=t.R=t.P=t.N=null}function Tu(t,n){var r=n,e=n.R,i=r.U;i?i.L===r?i.L=e:i.R=e:t._=e,e.U=i,r.U=e,r.R=e.L,r.R&&(r.R.U=r),e.L=r}function Ou(t,n){var r=n,e=n.L,i=r.U;i?i.L===r?i.L=e:i.R=e:t._=e,e.U=i,r.U=e,r.L=e.R,r.L&&(r.L.U=r),e.R=r}function ku(t){for(;t.L;)t=t.L;return t}Nu.prototype={constructor:Nu,insert:function(t,n){var r,e,i;if(t){if(n.P=t,n.N=t.N,t.N&&(t.N.P=n),t.N=n,t.R){for(t=t.R;t.L;)t=t.L;t.L=n}else t.R=n;r=t}else this._?(t=ku(this._),n.P=null,n.N=t,t.P=t.L=n,r=t):(n.P=n.N=null,this._=n,r=null);for(n.L=n.R=null,n.U=r,n.C=!0,t=n;r&&r.C;)r===(e=r.U).L?(i=e.R)&&i.C?(r.C=i.C=!1,e.C=!0,t=e):(t===r.R&&(Tu(this,r),r=(t=r).U),r.C=!1,e.C=!0,Ou(this,e)):(i=e.L)&&i.C?(r.C=i.C=!1,e.C=!0,t=e):(t===r.L&&(Ou(this,r),r=(t=r).U),r.C=!1,e.C=!0,Tu(this,e)),r=t.U;this._.C=!1},remove:function(t){t.N&&(t.N.P=t.P),t.P&&(t.P.N=t.N),t.N=t.P=null;var n,r,e,i=t.U,o=t.L,u=t.R;if(r=o?u?ku(u):o:u,i?i.L===t?i.L=r:i.R=r:this._=r,o&&u?(e=r.C,r.C=t.C,r.L=o,o.U=r,r!==u?(i=r.U,r.U=t.U,t=r.R,i.L=t,r.R=u,u.U=r):(r.U=i,i=r,t=r.R)):(e=t.C,t=r),t&&(t.U=i),!e)if(t&&t.C)t.C=!1;else{do{if(t===this._)break;if(t===i.L){if((n=i.R).C&&(n.C=!1,i.C=!0,Tu(this,i),n=i.R),n.L&&n.L.C||n.R&&n.R.C){n.R&&n.R.C||(n.L.C=!1,n.C=!0,Ou(this,n),n=i.R),n.C=i.C,i.C=n.R.C=!1,Tu(this,i),t=this._;break}}else if((n=i.L).C&&(n.C=!1,i.C=!0,Ou(this,i),n=i.L),n.L&&n.L.C||n.R&&n.R.C){n.L&&n.L.C||(n.R.C=!1,n.C=!0,Tu(this,n),n=i.L),n.C=i.C,i.C=n.L.C=!1,Ou(this,i),t=this._;break}n.C=!0,t=i,i=i.U}while(!t.C);t&&(t.C=!1)}}};var Pu=Nu;function Cu(t,n,r,e){var i=[null,null],o=ea.push(i)-1;return i.left=t,i.right=n,r&&Fu(i,t,n,r),e&&Fu(i,n,t,e),na[t.index].halfedges.push(o),na[n.index].halfedges.push(o),i}function Lu(t,n,r){var e=[n,r];return e.left=t,e}function Fu(t,n,r,e){t[0]||t[1]?t.left===r?t[1]=e:t[0]=e:(t[0]=e,t.left=n,t.right=r)}function Iu(t,n,r,e,i){var o,u=t[0],a=t[1],c=u[0],f=u[1],s=0,l=1,h=a[0]-c,p=a[1]-f;if(o=n-c,h||!(o>0)){if(o/=h,h<0){if(o<s)return;o<l&&(l=o)}else if(h>0){if(o>l)return;o>s&&(s=o)}if(o=e-c,h||!(o<0)){if(o/=h,h<0){if(o>l)return;o>s&&(s=o)}else if(h>0){if(o<s)return;o<l&&(l=o)}if(o=r-f,p||!(o>0)){if(o/=p,p<0){if(o<s)return;o<l&&(l=o)}else if(p>0){if(o>l)return;o>s&&(s=o)}if(o=i-f,p||!(o<0)){if(o/=p,p<0){if(o>l)return;o>s&&(s=o)}else if(p>0){if(o<s)return;o<l&&(l=o)}return!(s>0||l<1)||(s>0&&(t[0]=[c+s*h,f+s*p]),l<1&&(t[1]=[c+l*h,f+l*p]),!0)}}}}}function Ru(t,n,r,e,i){var o=t[1];if(o)return!0;var u,a,c=t[0],f=t.left,s=t.right,l=f[0],h=f[1],p=s[0],v=s[1],d=(l+p)/2,g=(h+v)/2;if(v===h){if(d<n||d>=e)return;if(l>p){if(c){if(c[1]>=i)return}else c=[d,r];o=[d,i]}else{if(c){if(c[1]<r)return}else c=[d,i];o=[d,r]}}else if(a=g-(u=(l-p)/(v-h))*d,u<-1||u>1)if(l>p){if(c){if(c[1]>=i)return}else c=[(r-a)/u,r];o=[(i-a)/u,i]}else{if(c){if(c[1]<r)return}else c=[(i-a)/u,i];o=[(r-a)/u,r]}else if(h<v){if(c){if(c[0]>=e)return}else c=[n,u*n+a];o=[e,u*e+a]}else{if(c){if(c[0]<n)return}else c=[e,u*e+a];o=[n,u*n+a]}return t[0]=c,t[1]=o,!0}function Uu(t,n){var r=t.site,e=n.left,i=n.right;return r===i&&(i=e,e=r),i?Math.atan2(i[1]-e[1],i[0]-e[0]):(r===e?(e=n[1],i=n[0]):(e=n[0],i=n[1]),Math.atan2(e[0]-i[0],i[1]-e[1]))}function Du(t,n){return n[+(n.left!==t.site)]}function qu(t,n){return n[+(n.left===t.site)]}var zu,Bu=[];function Wu(){ju(this),this.x=this.y=this.arc=this.site=this.cy=null}function Vu(t){var n=t.P,r=t.N;if(n&&r){var e=n.site,i=t.site,o=r.site;if(e!==o){var u=i[0],a=i[1],c=e[0]-u,f=e[1]-a,s=o[0]-u,l=o[1]-a,h=2*(c*l-f*s);if(!(h>=-oa)){var p=c*c+f*f,v=s*s+l*l,d=(l*p-f*v)/h,g=(c*v-s*p)/h,y=Bu.pop()||new Wu;y.arc=t,y.site=i,y.x=d+u,y.y=(y.cy=g+a)+Math.sqrt(d*d+g*g),t.circle=y;for(var m=null,_=ra._;_;)if(y.y<_.y||y.y===_.y&&y.x<=_.x){if(!_.L){m=_.P;break}_=_.L}else{if(!_.R){m=_;break}_=_.R}ra.insert(m,y),m||(zu=y)}}}}function Yu(t){var n=t.circle;n&&(n.P||(zu=n.N),ra.remove(n),Bu.push(n),ju(n),t.circle=null)}var Hu=[];function $u(){ju(this),this.edge=this.site=this.circle=null}function Gu(t){var n=Hu.pop()||new $u;return n.site=t,n}function Xu(t){Yu(t),ta.remove(t),Hu.push(t),ju(t)}function Zu(t){var n=t.circle,r=n.x,e=n.cy,i=[r,e],o=t.P,u=t.N,a=[t];Xu(t);for(var c=o;c.circle&&Math.abs(r-c.circle.x)<ia&&Math.abs(e-c.circle.cy)<ia;)o=c.P,a.unshift(c),Xu(c),c=o;a.unshift(c),Yu(c);for(var f=u;f.circle&&Math.abs(r-f.circle.x)<ia&&Math.abs(e-f.circle.cy)<ia;)u=f.N,a.push(f),Xu(f),f=u;a.push(f),Yu(f);var s,l=a.length;for(s=1;s<l;++s)f=a[s],c=a[s-1],Fu(f.edge,c.site,f.site,i);c=a[0],(f=a[l-1]).edge=Cu(c.site,f.site,null,i),Vu(c),Vu(f)}function Ju(t){for(var n,r,e,i,o=t[0],u=t[1],a=ta._;a;)if((e=Ku(a,u)-o)>ia)a=a.L;else{if(!((i=o-Qu(a,u))>ia)){e>-ia?(n=a.P,r=a):i>-ia?(n=a,r=a.N):n=r=a;break}if(!a.R){n=a;break}a=a.R}!function(t){na[t.index]={site:t,halfedges:[]}}(t);var c=Gu(t);if(ta.insert(n,c),n||r){if(n===r)return Yu(n),r=Gu(n.site),ta.insert(c,r),c.edge=r.edge=Cu(n.site,c.site),Vu(n),void Vu(r);if(r){Yu(n),Yu(r);var f=n.site,s=f[0],l=f[1],h=t[0]-s,p=t[1]-l,v=r.site,d=v[0]-s,g=v[1]-l,y=2*(h*g-p*d),m=h*h+p*p,_=d*d+g*g,x=[(g*m-p*_)/y+s,(h*_-d*m)/y+l];Fu(r.edge,f,v,x),c.edge=Cu(f,t,null,x),r.edge=Cu(t,v,null,x),Vu(n),Vu(r)}else c.edge=Cu(n.site,c.site)}}function Ku(t,n){var r=t.site,e=r[0],i=r[1],o=i-n;if(!o)return e;var u=t.P;if(!u)return-1/0;var a=(r=u.site)[0],c=r[1],f=c-n;if(!f)return a;var s=a-e,l=1/o-1/f,h=s/f;return l?(-h+Math.sqrt(h*h-2*l*(s*s/(-2*f)-c+f/2+i-o/2)))/l+e:(e+a)/2}function Qu(t,n){var r=t.N;if(r)return Ku(r,n);var e=t.site;return e[1]===n?e[0]:1/0}var ta,na,ra,ea,ia=1e-6,oa=1e-12;function ua(t,n){return n[1]-t[1]||n[0]-t[0]}function aa(t,n){var r,e,i,o=t.sort(ua).pop();for(ea=[],na=new Array(t.length),ta=new Pu,ra=new Pu;;)if(i=zu,o&&(!i||o[1]<i.y||o[1]===i.y&&o[0]<i.x))o[0]===r&&o[1]===e||(Ju(o),r=o[0],e=o[1]),o=t.pop();else{if(!i)break;Zu(i.arc)}if(function(){for(var t,n,r,e,i=0,o=na.length;i<o;++i)if((t=na[i])&&(e=(n=t.halfedges).length)){var u=new Array(e),a=new Array(e);for(r=0;r<e;++r)u[r]=r,a[r]=Uu(t,ea[n[r]]);for(u.sort((function(t,n){return a[n]-a[t]})),r=0;r<e;++r)a[r]=n[u[r]];for(r=0;r<e;++r)n[r]=a[r]}}(),n){var u=+n[0][0],a=+n[0][1],c=+n[1][0],f=+n[1][1];!function(t,n,r,e){for(var i,o=ea.length;o--;)Ru(i=ea[o],t,n,r,e)&&Iu(i,t,n,r,e)&&(Math.abs(i[0][0]-i[1][0])>ia||Math.abs(i[0][1]-i[1][1])>ia)||delete ea[o]}(u,a,c,f),function(t,n,r,e){var i,o,u,a,c,f,s,l,h,p,v,d,g=na.length,y=!0;for(i=0;i<g;++i)if(o=na[i]){for(u=o.site,a=(c=o.halfedges).length;a--;)ea[c[a]]||c.splice(a,1);for(a=0,f=c.length;a<f;)v=(p=qu(o,ea[c[a]]))[0],d=p[1],l=(s=Du(o,ea[c[++a%f]]))[0],h=s[1],(Math.abs(v-l)>ia||Math.abs(d-h)>ia)&&(c.splice(a,0,ea.push(Lu(u,p,Math.abs(v-t)<ia&&e-d>ia?[t,Math.abs(l-t)<ia?h:e]:Math.abs(d-e)<ia&&r-v>ia?[Math.abs(h-e)<ia?l:r,e]:Math.abs(v-r)<ia&&d-n>ia?[r,Math.abs(l-r)<ia?h:n]:Math.abs(d-n)<ia&&v-t>ia?[Math.abs(h-n)<ia?l:t,n]:null))-1),++f);f&&(y=!1)}if(y){var m,_,x,w=1/0;for(i=0,y=null;i<g;++i)(o=na[i])&&(x=(m=(u=o.site)[0]-t)*m+(_=u[1]-n)*_)<w&&(w=x,y=o);if(y){var b=[t,n],A=[t,e],M=[r,e],S=[r,n];y.halfedges.push(ea.push(Lu(u=y.site,b,A))-1,ea.push(Lu(u,A,M))-1,ea.push(Lu(u,M,S))-1,ea.push(Lu(u,S,b))-1)}}for(i=0;i<g;++i)(o=na[i])&&(o.halfedges.length||delete na[i])}(u,a,c,f)}this.edges=ea,this.cells=na,ta=ra=ea=na=null}aa.prototype={constructor:aa,polygons:function(){var t=this.edges;return this.cells.map((function(n){var r=n.halfedges.map((function(r){return Du(n,t[r])}));return r.data=n.site.data,r}))},triangles:function(){var t=[],n=this.edges;return this.cells.forEach((function(r,e){if(o=(i=r.halfedges).length)for(var i,o,u,a,c,f,s=r.site,l=-1,h=n[i[o-1]],p=h.left===s?h.right:h.left;++l<o;)u=p,p=(h=n[i[l]]).left===s?h.right:h.left,u&&p&&e<u.index&&e<p.index&&(c=u,f=p,((a=s)[0]-f[0])*(c[1]-a[1])-(a[0]-c[0])*(f[1]-a[1])<0)&&t.push([s.data,u.data,p.data])})),t},links:function(){return this.edges.filter((function(t){return t.right})).map((function(t){return{source:t.left.data,target:t.right.data}}))},find:function(t,n,r){for(var e,i,o=this,u=o._found||0,a=o.cells.length;!(i=o.cells[u]);)if(++u>=a)return null;var c=t-i.site[0],f=n-i.site[1],s=c*c+f*f;do{i=o.cells[e=u],u=null,i.halfedges.forEach((function(r){var e=o.edges[r],a=e.left;if(a!==i.site&&a||(a=e.right)){var c=t-a[0],f=n-a[1],l=c*c+f*f;l<s&&(s=l,u=a.index)}}))}while(null!==u);return o._found=e,null==r||s<=r*r?i.site:null}};Math.SQRT2;function ca(t,n,r){this.k=t,this.x=n,this.y=r}ca.prototype={constructor:ca,scale:function(t){return 1===t?this:new ca(this.k*t,this.x,this.y)},translate:function(t,n){return 0===t&0===n?this:new ca(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};new ca(1,0,0);ca.prototype;var fa=function(t){return new Promise((function(n){setTimeout((function(){n(t)}),1)}))},sa=r(65),la=r.n(sa),ha=r(84),pa=r.n(ha),va=r(134),da=r.n(va);function ga(t,n,r,e,i,o,u){try{var a=t[o](u),c=a.value}catch(t){return void r(t)}a.done?n(c):Promise.resolve(c).then(e,i)}var ya,ma,_a=function(t,n,r,e,i){return n*pa()(e+t*(1-e-i))+r*pa()(1-e-t*(1-e-i))},xa=function(){var t,n=(t=regeneratorRuntime.mark((function t(n,r,e,i,o){var u,a,c,f,s,l,h,p,v,d=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=d.length>5&&void 0!==d[5]?d[5]:function(){},a=(n/(n+r)-e)/(1-e-i),c=[_a(0,n,r,e,i),_a(1,n,r,e,i)],a>0&&a<1&&c.push(_a(a,n,r,e,i)),f=la.a.apply(void 0,c),s=[],l=0,h=0,t.next=10,u(0);case 10:return t.next=12,fa();case 12:if(!(l<o)){t.next=25;break}if(h%1e3!=0){t.next=19;break}return p=100*l/o,t.next=17,u(p);case 17:return t.next=19,fa();case 19:v=da()(0,1),pa()(da()(0,1))<_a(v,n,r,e,i)-f&&(s.push(v),l+=1),h+=1,t.next=12;break;case 25:return t.next=27,u(100);case 27:return t.next=29,fa();case 29:return t.abrupt("return",s);case 30:case"end":return t.stop()}}),t)})),function(){var n=this,r=arguments;return new Promise((function(e,i){var o=t.apply(n,r);function u(t){ga(o,e,i,u,a,"next",t)}function a(t){ga(o,e,i,u,a,"throw",t)}u(void 0)}))});return function(t,r,e,i,o){return n.apply(this,arguments)}}(),wa=r(135),ba=r(136),Aa=r(137),Ma=r.n(Aa),Sa=r(85),Ea=r.n(Sa),Na=r(218),ja=r.n(Na),Ta=r(138),Oa=r.n(Ta),ka=r(219),Pa=r.n(ka),Ca=r(220),La=r.n(Ca);function Fa(t){var n=function(t){return ja()(Oa()(t))}(t),r=ba.jStat.quartiles(t),e=r[2]-r[0];return 1.2*Ma()(n,e/1.34)*Math.pow(t.length,-.2)}var Ia=20,Ra=30,Ua=50,Da=40,qa=function(t,n,r){ya=r.width||ya||500,ma=r.height||ma||270;var e=function(t){return Pa()(Oa()(t))}(t),i=ba.jStat.quantiles(t,[.05,.95]),o=i[1]-i[0],u=0==o?1:Math.pow(2,.9-function(t){for(var n=0;t<1;)n+=1,t*=2;return n}(o));1==u&&(u=o+.1);var c=[la()(0,e-u),Ma()(1.15,e+u)],s=xi().domain(c).nice().range([Da,ya-Ra]),d=s.ticks(100),g=function(){var t=p,n=f,r=w;function e(e){var i,o,u=e.length,c=new Array(u);for(i=0;i<u;++i)c[i]=t(e[i],i,e);var f=n(c),s=f[0],l=f[1],h=r(c,s,l);Array.isArray(h)||(h=x(s,l,h),h=v(Math.ceil(s/h)*h,l,h));for(var p=h.length;h[0]<=s;)h.shift(),--p;for(;h[p-1]>l;)h.pop(),--p;var d,g=new Array(p+1);for(i=0;i<=p;++i)(d=g[i]=[]).x0=i>0?h[i-1]:s,d.x1=i<p?h[i]:l;for(i=0;i<u;++i)s<=(o=c[i])&&o<=l&&g[a(h,o,0,p)].push(e[i]);return g}return e.value=function(n){return arguments.length?(t="function"==typeof n?n:h(n),e):t},e.domain=function(t){return arguments.length?(n="function"==typeof t?t:h([t[0],t[1]]),e):n},e.thresholds=function(t){return arguments.length?(r="function"==typeof t?t:Array.isArray(t)?h(l.call(t)):h(t),e):r},e}().domain(s.domain()).thresholds(d)(t),y=function(t,n,r){return n.map((function(n){return[n,A(r,(function(r){return t(n-r)}))]}))}(function(t){return function(n){return La()(n/t,0,1)}}(Fa(t)),d,t),m=b(wa.unzip(y)[1]),_=b(g,(function(t){return t.length}))/t.length;y=wa.map(y,(function(t){return[t[0],_*t[1]/m]}));var M=xi().domain([0,_]).range([ma-Ua,Ia]),S=function(){var t=bu,n=Au,r=_u(!0),e=null,i=wu,o=null;function u(u){var a,c,f,s=u.length,l=!1;for(null==e&&(o=i(f=se())),a=0;a<=s;++a)!(a<s&&r(c=u[a],a,u))===l&&((l=!l)?o.lineStart():o.lineEnd()),l&&o.point(+t(c,a,u),+n(c,a,u));if(f)return o=null,f+""||null}return u.x=function(n){return arguments.length?(t="function"==typeof n?n:_u(+n),u):t},u.y=function(t){return arguments.length?(n="function"==typeof t?t:_u(+t),u):n},u.defined=function(t){return arguments.length?(r="function"==typeof t?t:_u(!!t),u):r},u.curve=function(t){return arguments.length?(i=t,null!=e&&(o=i(e)),u):i},u.context=function(t){return arguments.length?(null==t?e=o=null:o=i(e=t),u):e},u}().curve(Eu).x((function(t){return s(t[0])})).y((function(t){return M(t[1])}));return{x:s,y:M,density:y,thresholds:d,bins:g,line:S,xAxis:function(t){return t.attr("transform","translate(0,".concat(ma-Ua,")")).call((r=s,k(3,r)).tickFormat((function(t){return t<=1?t:""}))).call((function(t){return t.append("text").attr("x",ya-Ra).attr("y",-6).attr("fill","#000").attr("text-anchor","end").attr("font-weight","bold").text(n)}));var r},yAxis:function(t){return t.attr("transform","translate(".concat(Da,",0)")).call((n=M,k(4,n)).tickFormat("").tickSizeOuter(0));var n},data:t,mean:e,maxBarHeight:_,posteriorCi:i,settings:r,xlabel:n}},za=function(t,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],e=n.bins,i=n.x,o=n.y,u=n.data;return t=t.data(e).join("rect").attr("fill","#6495ed"),(t=r?t:t.transition(1e3)).attr("x",(function(t){return i(t.x0)+1})).attr("y",(function(t){return o(t.length/u.length)})).attr("width",(function(t){return i(t.x1)-i(t.x0)-1})).attr("height",(function(t){return o(0)-o(t.length/u.length)}))},Ba=function(t,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],e=n.density,i=n.line;return t=t.datum(e).join("path"),(t=r?t:t.transition(1e3)).attr("class","density").attr("fill","none").attr("stroke","#000").attr("stroke-width",1.5).attr("stroke-linejoin","round").attr("d",i)},Wa=function(t,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],e=n.mean,i=n.x,o=n.y,u=n.maxBarHeight,a=n.posteriorCi,c=t.select(".meanLine"),f=t.select(".meanLabel"),s=t.select(".lowerCiLine"),l=t.select(".lowerCiLabel"),h=t.select(".upperCiLine"),p=t.select(".upperCiLabel");c=r?c:c.transition(1e3),f=r?f:f.transition(1e3),s=r?s:s.transition(1e3),l=r?l:l.transition(1e3),h=r?h:h.transition(1e3),p=r?p:p.transition(1e3);var v=a[1]-a[0]>.05?-5:10;return c.attr("x1",i(e)).attr("x2",i(e)).attr("y1",o(0)).attr("y2",o(u)-20).attr("fill","none").attr("stroke-width",2).attr("stroke","#000").attr("stroke-linecap","round"),f.attr("fill","#000").attr("text-anchor","start").attr("font-size","10px").attr("x",i(e)+5).attr("y",o(u)-5).text("".concat((Ea()(1e4*e)/1e4).toFixed(4))),s.attr("x1",i(a[0])).attr("x2",i(a[0])).attr("y1",o(0)).attr("y2",o(u)-20).attr("fill","none").attr("stroke-width",1).attr("stroke","#000").attr("stroke-linecap","round"),l.attr("fill","#000").attr("text-anchor","end").attr("font-size","10px").attr("x",i(a[0])-4).attr("y",o(u)-5).text("".concat((Ea()(1e4*a[0])/1e4).toFixed(4))),h.attr("x1",i(a[1])).attr("x2",i(a[1])).attr("y1",o(0)).attr("y2",o(u)-20).attr("fill","none").attr("stroke-width",1).attr("stroke","#000").attr("stroke-linecap","round"),p.attr("fill","#000").attr("text-anchor","start").attr("font-size","10px").attr("x",i(a[1])+5).attr("y",o(u)+v).text("".concat((Ea()(1e4*a[1])/1e4).toFixed(4))),t},Va=function(t,n,r){var e=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=t.svg,o=t.gXAxis,u=(t.gYAxis,i.selectAll("rect")),a=i.select("path.density"),c=i.select(".posteriorLines"),f=i.select(".settings"),s=i.select(".footer");za(u,n,e),Ba(a,n,e),Wa(c,n,e),Ya(f,r),Ha(s,n),o.call(n.xAxis)},Ya=function(t,n){var r=t.select(".settingsText");t.select(".params").attr("x",ya-Ra).attr("y",30).attr("fill","#000").attr("text-anchor","end").attr("font-size","10").attr("text-decoration","underline").text("Input Parameters:"),r.data([n.displayParams]).attr("x",ya-Ra).attr("y",40).attr("text-anchor","end").attr("fill","#000").attr("font-size","10");r.selectAll("tspan.settingsLine").data((function(t){return t.split("\n")})).join("tspan").attr("class","settingsLine").text((function(t){return t})).attr("x",ya-Ra).attr("text-anchor","end").attr("dy",15)},Ha=function(t,n){t.select(".link").attr("x",ya-Ra).attr("y",ma-23).attr("fill","#000").attr("text-anchor","end").attr("font-size","7").attr("style","white-space: pre").text("".concat(Number(n.data.length).toLocaleString()," posterior draws, with mean and 90% credible interval.        Generated at https://larremorelab.github.io/covid19testgroup"))},$a=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};ya=n.width||ya||500,ma=n.height||ma||270;var r=mu("svg").attr("viewBox",[0,0,ya,ma]),e=r.append("g").selectAll("rect");za(e,t,!0);var i=r.append("path");Ba(i,t,!0);var o=r.append("g");if(o.attr("class","posteriorLines"),o.append("line").attr("class","meanLine"),o.append("text").attr("class","meanLabel"),o.append("line").attr("class","lowerCiLine"),o.append("text").attr("class","lowerCiLabel"),o.append("line").attr("class","upperCiLine"),o.append("text").attr("class","upperCiLabel"),Wa(o,t,!0),n.displayParams){var u=r.append("g");u.attr("class","settings"),u.append("text").attr("class","params"),u.append("text").attr("class","settingsText"),Ya(u,n)}var a=r.append("g").attr("class","footer"),c=a.append("text").attr("class","xlabel");if(c.append("text").attr("x",ya-Ra).attr("y",-6).attr("fill","#000").attr("text-anchor","end").attr("font-weight","bold").text(t.xlabel),!n.hideFooter){a.append("text").attr("class","link");var f=a.append("text").attr("class","cite1"),s=a.append("text").attr("class","cite2");Ha(a,t),f.attr("x",Ra).attr("y",ma-10).attr("fill","#000").attr("text-anchor","start").attr("font-size","7").attr("style","white-space: pre").text("Citation:"),s.attr("x",Ra).attr("y",ma-3).attr("fill","#000").attr("text-anchor","start").attr("font-size","7").attr("style","white-space: pre").text("Larremore et al., Estimating SARS-CoV-2 seroprevalence and epidemiological parameters with uncertainty from serological surveys (2020).")}var l=r.append("g").call(t.xAxis),h=r.append("g").call(t.yAxis);return{svg:r,gXAxis:l,gYAxis:h}},Ga=r(221);function Xa(t,n,r,e,i,o,u){try{var a=t[o](u),c=a.value}catch(t){return void r(t)}a.done?n(c):Promise.resolve(c).then(e,i)}function Za(t){return function(){var n=this,r=arguments;return new Promise((function(e,i){var o=t.apply(n,r);function u(t){Xa(o,e,i,u,a,"next",t)}function a(t){Xa(o,e,i,u,a,"throw",t)}u(void 0)}))}}var Ja,Ka,Qa,tc=!1,nc=document.getElementById("numpos"),rc=document.getElementById("numneg"),ec=document.getElementById("sensitivity"),ic=document.getElementById("specificity"),oc=document.getElementById("downloadsvg"),uc=document.getElementById("samplingProgress"),ac=document.getElementById("runsampling"),cc=parseInt(nc.value),fc=parseInt(rc.value),sc=1-parseFloat(ec.value),lc=1-parseFloat(ic.value),hc=function(){return"# positive tests: ".concat(cc,"\n# negative tests: ").concat(fc,"\n\nSensitivity: ").concat(1-sc,"\nSpecificity: ").concat(1-lc)},pc=function(){var t=Za(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:tc&&uc.MaterialProgress.setProgress(n);case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),vc=function(){var t=Za(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,xa(cc,fc,lc,sc,1e4,pc);case 2:Ja=t.sent,Ka=qa(Ja,"Prevalence",{sens:1-sc,spec:1-lc,nplus:cc,nminus:fc}),500,270,Qa=$a(Ka,{width:500,height:270,displayParams:hc()}),Xt("#posteriorviz").append((function(){return Qa.svg.node()}));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),dc=function(){var t=Za(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(cc=parseInt(nc.value),fc=parseInt(rc.value),sc=1-parseFloat(ec.value),lc=1-parseFloat(ic.value),!(isNaN(cc)||isNaN(fc)||isNaN(lc)||isNaN(sc)||cc<0||fc<0||sc<0||lc<0||sc>1||lc>1)){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,xa(cc,fc,lc,sc,1e4,pc);case 8:Ja=t.sent,Ka=qa(Ja,"Prevalence",{sens:1-sc,spec:1-lc,nplus:cc,nminus:fc}),Va(Qa,Ka,{displayParams:hc()});case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();uc.addEventListener("mdl-componentupgraded",(function(){tc=!0})),window.addEventListener("load",vc),ac.addEventListener("click",dc),oc.addEventListener("click",(function(){try{new Blob}catch(t){alert("Your browser does not support this download. Alternatives: you can try to take a screenshot, or print this page as a PDF instead.")}var t=Qa.svg.attr("title","Prevalence").attr("version",1).attr("xmlns","http://www.w3.org/2000/svg").node().parentNode.innerHTML,n=new Blob([t],{type:"image/svg+xml"});Object(Ga.saveAs)(n,"se=".concat(1-sc,",sp=").concat(1-lc,",pos=").concat(cc,",neg=").concat(fc,".svg"))}))}]);