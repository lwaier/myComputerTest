(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"048b":function(e,t,i){var n=i("9ae2");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("76af3531",n,!0,{sourceMap:!1,shadowMode:!1})},"0d12":function(e,t,i){"use strict";var n=i("4232"),a=i.n(n);a.a},2864:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{}},props:{userInfo:{type:Object,default:function(){return{userName:"liWei",userHeight:"180",isVip:!1,className:"ceWeiXinxi",userStage:"学霸",changeTime:"创建时间",isEdit:!1}}}},filters:{itemTile:function(e){switch(console.log(e,"每一个item"),e){case"userName":return"姓名";case"userHeight":return"身高";case"isVip":return"是否VIP";case"className":return"班级名称";case"userStage":return"学生等级";case"changeTime":return"创建时间";default:return"大佬您好,我是您的忠实小迷弟,这里的filter用得还行吧,请给我面试加分噢"}}}};t.default=n},4187:function(e,t,i){"use strict";var n,a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"user"},[e._l(e.userInfo,(function(t,n){return i("v-uni-view",{key:n},["isEdit"!=n?i("v-uni-view",{staticClass:"user_info_display"},[i("v-uni-text",[e._v(e._s(e._f("itemTile")(n)))]),i("v-uni-view",{staticClass:"user_info_value"},[e._v(e._s(t))])],1):e._e()],1)})),i("v-uni-view",[e._t("default")],2),i("v-uni-view",{staticClass:"text_msg"},[e._v("我放在默认插槽里面")]),i("v-uni-button",{staticClass:"delete",attrs:{type:"primary",plain:"true"}},[e._v("删除")])],2)},r=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return n}))},4232:function(e,t,i){var n=i("4f05");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("3dd34f1b",n,!0,{sourceMap:!1,shadowMode:!1})},"4f05":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.user[data-v-4682cef9]{width:100%;overflow:hidden;font-size:%?28?%;color:#666;border-bottom:%?2?% solid #e5e5e5;padding-bottom:%?10?%}.user .user_info_display[data-v-4682cef9]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;margin:%?20?% %?20?% %?4?% %?20?%}.user .user_info_display .user_info_value[data-v-4682cef9]{margin-left:%?100?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right}.user .text_msg[data-v-4682cef9]{margin:%?6?% %?0?% %?0?% %?20?%}.user .delete[data-v-4682cef9]{margin:0 %?20?%;margin-top:%?10?%}',""]),e.exports=t},5931:function(e,t,i){"use strict";var n,a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"header"},[i("v-uni-view",[i("v-uni-text",{staticClass:"iconfont iconfanhui"})],1),i("v-uni-view",[e._v("demo")]),i("v-uni-view",[e._v("新增")])],1),i("v-uni-view",{staticClass:"search"},[i("v-uni-view",[i("v-uni-text",[e._v("北京")]),i("v-uni-text",{staticClass:"iconfont iconxiala"})],1),i("v-uni-view",[i("v-uni-view",{staticClass:"search_bgc"},[i("v-uni-text",{staticClass:"iconfont iconsousuo"}),i("v-uni-input",{staticClass:"input_search",attrs:{type:"text",value:""}})],1)],1),i("v-uni-view",[i("v-uni-text",{staticClass:"iconfont iconsaoyisao"})],1)],1),i("v-uni-view",[i("UserItem",[i("v-uni-checkbox",{staticClass:"user_edit",attrs:{checked:!1}})],1)],1)],1)},r=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return n}))},"5d46":function(e,t,i){"use strict";i.r(t);var n=i("5931"),a=i("a2bc");for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("a391");var s,c=i("f0c5"),u=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"375c73f2",null,!1,n["a"],s);t["default"]=u.exports},"9ae2":function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.header[data-v-375c73f2]{height:%?60?%;padding:%?14?% %?6?%;background-color:#0782ff;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.header .iconfanhui[data-v-375c73f2]{font-size:%?16?%}.header uni-view[data-v-375c73f2]:nth-child(1){width:%?80?%;text-align:left;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.header uni-view[data-v-375c73f2]:nth-child(2){-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;font-size:%?28?%}.header uni-view[data-v-375c73f2]:nth-child(3){width:%?80?%;text-align:center;font-size:%?28?%}.search[data-v-375c73f2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff;color:#333;height:%?88?%;border-bottom:%?2?% solid #e5e5e5}.search uni-view[data-v-375c73f2]:nth-child(1){width:%?140?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%;margin-right:%?4?%}.search uni-view:nth-child(1) .iconxiala[data-v-375c73f2]{font-size:%?38?%}.search uni-view[data-v-375c73f2]:nth-child(2){-webkit-box-flex:1;-webkit-flex:1;flex:1;height:%?60?%}.search uni-view:nth-child(2) .search_bgc[data-v-375c73f2]{width:96%;margin-left:2%;height:100%;background-color:#f3f3f3!important;border-radius:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.search uni-view:nth-child(2) .search_bgc .iconsousuo[data-v-375c73f2]{margin-left:%?10?%}.search uni-view:nth-child(2) .search_bgc .input_search[data-v-375c73f2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-left:%?10?%;margin-right:%?10?%;height:90%}.search uni-view[data-v-375c73f2]:nth-child(3){width:%?110?%;text-align:center}.search uni-view:nth-child(3) .iconsaoyisao[data-v-375c73f2]{font-size:%?48?%}.user_edit[data-v-375c73f2]{margin:%?6?% %?0?% %?6?% %?20?%}',""]),e.exports=t},a2bc:function(e,t,i){"use strict";i.r(t);var n=i("ef37"),a=i.n(n);for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=a.a},a391:function(e,t,i){"use strict";var n=i("048b"),a=i.n(n);a.a},d19d:function(e,t,i){"use strict";i.r(t);var n=i("2864"),a=i.n(n);for(var r in n)"default"!==r&&function(e){i.d(t,e,(function(){return n[e]}))}(r);t["default"]=a.a},de1b:function(e,t,i){"use strict";i.r(t);var n=i("4187"),a=i("d19d");for(var r in a)"default"!==r&&function(e){i.d(t,e,(function(){return a[e]}))}(r);i("0d12");var s,c=i("f0c5"),u=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"4682cef9",null,!1,n["a"],s);t["default"]=u.exports},ef37:function(e,t,i){"use strict";var n=i("ee27");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("de1b")),r={data:function(){return{title:"Hello"}},onLoad:function(){this.post("/CeiWeiXinXiComputerTest/getUsrs").then((function(e){console.log(e)}))},components:{UserItem:a.default},methods:{}};t.default=r}}]);