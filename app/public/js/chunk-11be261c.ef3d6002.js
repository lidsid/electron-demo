(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11be261c"],{"4b85":function(e,t,a){"use strict";a("6c36")},"6c36":function(e,t,a){},"9cce":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app-demo-software-open"}},[e._m(0),a("div",{staticClass:"one-block-2"},[a("a-list",{attrs:{bordered:"","data-source":e.data},scopedSlots:e._u([{key:"renderItem",fn:function(t){return a("a-list-item",{on:{click:function(a){return e.openSoft(t.id)}}},[e._v(" "+e._s(t.content)+" "),a("a-button",{attrs:{type:"link"}},[e._v(" 执行 ")])],1)}}])})],1)])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"one-block-1"},[a("span",[e._v(" 1. 调用其它软件（exe、bash等可执行程序） ")]),a("p"),a("span",{staticClass:"sub-content"},[e._v(" 注：请先将【powershell.exe】复制到【electron-egg/build/extraResources】目录中 ")])])}],c=a("a358"),i=[{content:"powershell.exe",id:"powershell"}],s={data:function(){return{data:i}},methods:{openSoft:function(e){var t=this;Object(c["a"])("openSoftware",{id:e}).then((function(e){if(0!==e.code)return t.$message.info(e.msg),!1})).catch((function(e){console.log("err:",e)}))}}},r=s,u=(a("4b85"),a("2877")),l=Object(u["a"])(r,n,o,!1,null,"8d1853f4",null);t["default"]=l.exports},a358:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("b775"),o={openDir:"/api/v1/example/openLocalDir",uploadFile:"/api/v1/example/uploadFile",executeJS:"/api/v1/example/executeJS",setShortcut:"/api/v1/example/setShortcut",autoLaunchEnable:"/api/v1/example/autoLaunchEnable",autoLaunchDisable:"/api/v1/example/autoLaunchDisable",autoLaunchIsEnabled:"/api/v1/example/autoLaunchIsEnabled",openSoftware:"/api/v1/example/openSoftware",selectFileDir:"/api/v1/example/selectFileDir"};function c(e,t){return Object(n["b"])({url:o[e],method:"post",data:t})}}}]);
//# sourceMappingURL=chunk-11be261c.ef3d6002.js.map