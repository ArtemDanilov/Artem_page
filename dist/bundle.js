!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=7)}([function(n,e,t){"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([o]).join("\n")}var a,c,s;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},function(n,e,t){"use strict";e.a=t.p+"./fonts/Roboto-Bold.ext?4f39c5796e60c9d8e7327a00e9a4442e"},function(n,e,t){"use strict";e.a=t.p+"./fonts/Roboto-Regular.ext?03523cf578d69fa923226ff457b92d90"},function(n,e,t){var r=t(5),o=t(6);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);n.exports=o.locals||{}},function(n,e,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function c(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},r=[],o=0;o<n.length;o++){var i=n[o],s=e.base?i[0]+e.base:i[0],l=t[s]||0,f="".concat(s," ").concat(l);t[s]=l+1;var u=c(f),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(d)):a.push({identifier:f,updater:b(d,e),references:1}),r.push(f)}return r}function l(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var f,u=(f=[],function(n,e){return f[n]=e,f.filter(Boolean).join("\n")});function d(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=u(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function m(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var p=null,h=0;function b(n,e){var t,r,o;if(e.singleton){var i=h++;t=p||(p=l(e)),r=d.bind(null,t,i,!1),o=d.bind(null,t,i,!0)}else t=l(e),r=m.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=c(t[r]);a[o].references--}for(var i=s(n,e),l=0;l<t.length;l++){var f=c(t[l]);0===a[f].references&&(a[f].updater(),a.splice(f,1))}t=i}}}},function(n,e,t){"use strict";t.r(e);var r=t(1),o=t.n(r),i=t(0),a=t.n(i),c=t(2),s=t(3),l=o()(!1),f=a()(c.a),u=a()(s.a);l.push([n.i,'@font-face {\n  font-family: "Roboto-bold";\n  src: url('+f+') format("truetype"); }\n\n@font-face {\n  font-family: "Roboto-regular";\n  src: url('+u+') format("truetype"); }\n\nhtml {\n  cursor: none;\n  box-sizing: border-box;\n  font-size: 62.5%;\n  overflow: hidden; }\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit; }\n\nbody {\n  width: 100%;\n  height: 100vh;\n  overflow: hidden; }\n\n.small-circle,\n.big-circle {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n  z-index: 100;\n  pointer-events: none; }\n\n@media (any-hover: hover) {\n  .small-circle {\n    width: .8rem;\n    height: .8rem;\n    background-color: #d00000; }\n  .big-circle {\n    width: 3rem;\n    height: 3rem;\n    border: 3px solid #fff;\n    border-radius: 50%;\n    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.5);\n    transition: padding .3s ease; }\n    .big-circle-active {\n      padding: 3rem; } }\n\n.name {\n  width: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  align-items: baseline;\n  justify-content: center; }\n  .name > * {\n    font-size: 6rem;\n    font-family: "Roboto-regular", sans-serif;\n    color: #fff; }\n  .name__first-name {\n    letter-spacing: -6px; }\n  .name span[class^="name__letter"] {\n    animation-fill-mode: both; }\n  .name__letter--a, .name__letter--r, .name__letter--t {\n    color: #d00000; }\n  .name__letter--a {\n    animation: resize-a .3s ease-out;\n    animation-delay: .6s; }\n  .name__letter--r {\n    animation: hide .5s;\n    animation-delay: 1.2s; }\n  .name__letter--t {\n    animation: hide .3s;\n    animation-delay: 1.3s; }\n  .name__letter--e {\n    animation: hide 2s ease-out;\n    animation-delay: 1.8s; }\n  .name__letter--m {\n    animation: hide 2s ease-out;\n    animation-delay: 1.8s; }\n  .name__second-name {\n    margin-left: 2rem;\n    animation: hide 2s ease-out;\n    animation-delay: 1.8s;\n    animation-fill-mode: both; }\n    .name__second-name::first-letter {\n      font-size: 10rem; }\n\n.background {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: -10; }\n  .background__filter {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    z-index: -20;\n    animation: fade 1s;\n    animation-delay: 1.8s;\n    animation-fill-mode: both; }\n  .background__video {\n    position: fixed;\n    z-index: -50;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    filter: grayscale(1); }\n\n@keyframes fade {\n  0% {\n    background-color: #000; }\n  100% {\n    background-color: #000;\n    opacity: .7; } }\n\n@keyframes resize-a {\n  0% {\n    font-size: 800px;\n    transform: translateY(30px); }\n  40% {\n    transform: translateY(-30px); }\n  100% {\n    font-size: 200px;\n    transform: translateY(60px); } }\n\n@keyframes hide {\n  0% {\n    opacity: 0;\n    display: none; }\n  100% {\n    opacity: 100%;\n    display: block; } }\n\n.footer {\n  width: 50%;\n  position: absolute;\n  top: 80%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  animation: hide 2s ease-out;\n  animation-delay: 1.8s;\n  animation-fill-mode: both;\n  display: flex;\n  justify-content: space-between; }\n\na {\n  color: #fff;\n  font-family: "Roboto-bold", sans-serif;\n  font-size: 3rem;\n  cursor: none;\n  padding: 2rem; }\n',""]),e.default=l},function(n,e,t){"use strict";t.r(e);t(4);function r(n,e){var t;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"==typeof n)return o(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(n,e)}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,s=!1;return{s:function(){t=n[Symbol.iterator]()},n:function(){var n=t.next();return c=n.done,n},e:function(n){s=!0,a=n},f:function(){try{c||null==t.return||t.return()}finally{if(s)throw a}}}}function o(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var i=document.querySelector(".small-circle"),a=document.querySelector(".big-circle"),c=document.querySelectorAll("#link");window.addEventListener("mousemove",(function(n){var e=n.clientX,t=n.clientY;i.style.top="".concat(t,"px"),i.style.left="".concat(e,"px"),setTimeout((function(){a.style.top="".concat(t,"px"),a.style.left="".concat(e,"px")}),80)})),function(){var n,e=r(c);try{for(e.s();!(n=e.n()).done;){var t=n.value;t.addEventListener("mouseover",(function(){a.classList.add("big-circle-active")})),t.addEventListener("mouseout",(function(){a.classList.remove("big-circle-active")}))}}catch(n){e.e(n)}finally{e.f()}}()}]);