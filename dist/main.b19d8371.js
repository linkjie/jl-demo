parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n="\n/*\n*你好,我是一名前端新人\n* 接下来我演示一下我的前端功底\n* 首先我要准备一个div\n*/\n#demo{\n    border:1px solid red;\n    width: 200px;\n    height: 200px;\n}\n/*\n *然后将div变成一个八卦图\n *首先，把 div 变成一个圆\n*/\n#demo{\n    border-radius: 50%;\n    box-shadow: 0 0 3px rgba(0,0,0,0.5);\n    border: none;\n}\n/* 八卦是阴阳形成的\n * 一黑一白\n **/\n#demo{\n    background: linear-gradient(to right, #fff, #fff 50%, #000 50%, #000 );\n}\n/* 加两个神秘的小球 */\n#demo::before {\n    content: '';\n    display: block;\n    height: 100px;\n    width: 100px;\n    margin: auto;\n    border-radius: 50%;\n    background-color: #000;\n    background: radial-gradient(white 0, white 25%, black 25%, black 100%);\n}\n\n#demo::after {\n    content: '';\n    display: block;\n    height: 100px;\n    width: 100px;\n    margin: auto;\n    border-radius: 50%;\n    background-color: #fff;\n    background: radial-gradient(black 0, black 25%, white 25%, white 100%);   \n}\n",r="",o=1,e=document.querySelector("#html"),d=document.querySelector("#style");function i(){setTimeout(function(){"\n"===n[o]?r+="<br/>":" "===n[o]?r+="&nbsp":r+=n[o],e.innerHTML=r,d.innerHTML=n.substring(0,o),window.scrollTo(0,99999),e.scrollTo(0,99999),o<n.length-1&&(o+=1,i())},1)}i();
},{}]},{},["epB2"], null)
//# sourceMappingURL=dist/main.b19d8371.js.map