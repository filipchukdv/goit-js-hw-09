var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("iQIUW");function l(e,t){Math.random()>.3?r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`):r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const{amount:t,delay:o,step:n}=e.target.elements;let r=Number(o.value);for(let e=1;e<=t.value;e+=1)setTimeout(l,r,e,r),console.log("totalDelay :",r),r+=Number(n.value)}));
//# sourceMappingURL=03-promises.2ee254a3.js.map