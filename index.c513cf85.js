!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t){return u.default(e)||i.default(e,t)||l.default(e,t)||c.default()};var u=f(o("8slrw")),i=f(o("7AJDX")),c=f(o("ifqQW")),l=f(o("auk6i"));function f(e){return e&&e.__esModule?e:{default:e}}var s="live_QONdtJf98S9qvVlZEUfOkqE4gbvptLEildnFyoe0z46ZsnsjRrpyL5ALFU33a29n";var d=document.querySelector(".breed-select"),p=document.querySelector(".cat-info");fetch("".concat("https://api.thecatapi.com/v1","/breeds?api_key=").concat(s)).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).then((function(e){var t=e.map((function(e){var t=e.id,r=e.name;return'<option value="'.concat(t,'">').concat(r,"</option>")})).join("");d.innerHTML=t})).catch((function(e){return console.error(e)})),d.addEventListener("change",(function(t){(r=t.currentTarget.value,fetch("".concat("https://api.thecatapi.com/v1","/images/search?api_key=").concat(s,"&breed_ids=").concat(r)).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}))).then((function(t){console.log(t);var r=t.map((function(t){var r=t.url,n=e(a)(t.breeds,1)[0],o=n.name,u=n.description,i=n.temperament;return'<img src="'.concat(r,'" alt="').concat(o,"\" width='300px'>\n          <h2>").concat(o,"</h2>\n          <p>").concat(u,"</p>\n          <p><b>Temperament:</b> ").concat(i,"</p>")})).join("");p.innerHTML=r})).catch((function(e){return console.error(e)}));var r}))}();
//# sourceMappingURL=index.c513cf85.js.map
