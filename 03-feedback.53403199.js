!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o);var n=o("1WSnx"),a=document.querySelector(".feedback-form"),l=document.querySelector("input"),i=document.querySelector("textarea"),u="feedback-form-state";a.addEventListener("input",(0,n.throttle)((function(){var e={email:l.value,message:i.value};localStorage.setItem(u,JSON.stringify(e))}),500)),a.addEventListener("submit",(function(e){e.preventDefault(),console.log({email:l.value,message:i.value}),a.reset(),localStorage.getItem(u)}));var d,s=null===(d=localStorage.getItem(u))?void 0:JSON.parse(d);s&&(l.value=s.email,i.value=s.message)}();
//# sourceMappingURL=03-feedback.53403199.js.map
