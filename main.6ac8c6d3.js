parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(t){return o(t)||n(t)||r(t)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,e){if(t){if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}function n(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function o(t){if(Array.isArray(t))return a(t)}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var c,s=document.querySelector(".button"),i=document.querySelector(".message-start"),l=document.querySelector(".game-score"),u=document.querySelector(".game-field"),f=document.querySelector(".message-win"),d=document.querySelector(".message-lose"),m=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],v=4,h=4,y=0;function g(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=t.filter(function(t){return t>0});e&&r.reverse();for(var n=0;n<r.length-1;n++)r[n]===r[n+1]&&(r.splice(n,2,2*r[n]),y+=r[n]);for(;r.length<t.length;)r.push(0);return e?r.reverse():r}function p(t){for(var e=function(e){for(var r=g(c.map(function(t){return t[e]}),t),n=0;n<v;n++)c[n][e]=r[n]},r=0;r<h;r++)e(r)}function b(t){for(var e=0;e<v;e++)c[e]=g(c[e],t)}function w(){for(var t=0;t<v;t++)for(var e=0;e<h;e++){var r=u.rows[t].cells[e];r.className="",r.classList.add("field-cell","field-cell--".concat(c[t][e])),r.textContent=c[t][e]||""}}function L(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!c.flat().includes(0))return"No empty cells left!";for(var e=Math.random()>=.9&&!t?4:2,r=!1;!r;){var n=Math.floor(Math.random()*v),o=Math.floor(Math.random()*h);0===c[n][o]&&(c[n][o]=e,w(),r=!0)}}function A(e){var r=t(c),n=m[0],o=m[1],a=m[2],s=m[3],i=!1;switch(e!==o&&e!==s||(i=!0),e){case n:case o:p(i);break;case a:case s:b(i);break;default:return"Unknown command!"}r.flat()!==c.flat()&&L(c),w()}function S(){return c.flat().includes(2048)}function k(){for(var t=0;t<v;t++)for(var e=0;e<h;e++){var r=c[t][e],n=0===r,o=t>0&&c[t-1][e]===r,a=t<v-1&&c[t+1][e]===r,s=e>0&&c[t][e-1]===r,i=e<h-1&&c[t][e+1]===r;if(n||a||o||s||i)return!1}return!0}s.addEventListener("click",function(){s.classList.contains("start")?(s.classList.remove("start"),s.classList.add("restart"),s.textContent="Restart",i.classList.add("hidden")):(f.classList.add("hidden"),d.classList.add("hidden")),c=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],y=0,l.textContent=y,L(!0),L(!0)}),document.addEventListener("keydown",function(t){var e=t.key;m.includes(e)&&(A(e),l.textContent=y,S()&&f.classList.remove("hidden"),k()&&d.classList.remove("hidden"))});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.6ac8c6d3.js.map