webpackJsonp([2],{17:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4);e.default=r.a},4:function(t,e,n){"use strict";var r=n(18),i=n.n(r);e.a={install:function(t){t.prototype.$jwt=this,t.jwt=this},decode:function(t){if("string"!=typeof t&!t instanceof String)return null;var e=t.split(".");if(e.length<2)return null;var n=JSON.parse(atob(e[0])),r=JSON.parse(atob(e[1]));return i()({},n,r)}}}},[17]);
//# sourceMappingURL=vue-jwt-decode.8f5dd7c18c1e67459d0b.js.map