parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"MgTz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.validatePassword=exports.validateEmail=exports.submitSignUpForm=exports.setFormValue=exports.getValidationStatus=void 0;var o={},t={},e=function(o){return t.password=o.target.value,console.log("Password validation..."),console.log(o),void 0!==t.password};exports.validatePassword=e;var r=function(o){return String(o).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)};exports.validateEmail=r;var s=function(){return Object.values(t).every(function(o){return!!o})};exports.getValidationStatus=s;var a=function(e,r,s){o[e]=r,void 0!==s&&(t[e]=s(r))};exports.setFormValue=a;var n=function(){return s()?(console.log("FORM IS FINE"),console.log(o),!0):(console.log("FORM IS INCORRECT"),!1)};exports.submitSignUpForm=n;
},{}],"d6sW":[function(require,module,exports) {
"use strict";var e=require("./utils.js"),t=document.getElementById("pasword");t.classList.add("valid"),t.classList.remove("valid"),console.log("Document"),console.log(document);var n="first_name",l="last_name",o="password",i="email",a="sign_in_link",s="sign_up_form",u="sign_up_btn",m="sign_in_form",d=document.getElementById(n);d.oninput=function(t){return(0,e.setFormValue)(n,t.target.value)};var r=document.getElementById(i);r.oninput=function(t){return(0,e.setFormValue)(i,t.target.value,e.validateEmail)};var c=document.getElementById(a);c.onclick=function(e){document.getElementById(s).style.display="none",document.getElementById(m).style.display=""};var g=document.getElementById(u);g.onclick=function(t){t.preventDefault(),(0,e.submitSignUpForm)()};
},{"./utils.js":"MgTz"}]},{},["d6sW"], null)
//# sourceMappingURL=/main.8d1e804a.js.map