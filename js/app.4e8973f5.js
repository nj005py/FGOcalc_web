(function(t){function e(e){for(var n,o,c=e[0],s=e[1],l=e[2],p=0,u=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);d&&d(e);while(u.length)u.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,c=1;c<a.length;c++){var s=a[c];0!==r[s]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/FGOcalc_web/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=s;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"4f1c":function(t,e,a){t.exports=a.p+"img/tm16cover.14fbb8f7.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("8c4f"),i=a("f309");n["a"].use(i["a"]);var o=new i["a"]({}),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{attrs:{clipped:t.$vuetify.breakpoint.lgAndUp,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-card",{attrs:{color:"#1E88E5",flat:"true",height:"200px"}},[n("v-row",{staticClass:"lightbox white--text pa-2 fill-height",attrs:{align:"center"}},[n("v-col",{attrs:{align:"center"}},[n("v-img",{attrs:{"max-width":"48px","max-height":"48px",src:a("d222")}}),n("div",{staticClass:"body-1"},[t._v("FGOcalc Web")])],1)],1)],1),n("v-list",{attrs:{dense:""}},[t._l(t.items,(function(e){return[n("v-list-item",{key:e.text,attrs:{link:""},on:{click:function(a){return t.toPath(e.path)}}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.text))])],1)],1)]}))],2)],1),n("v-app-bar",{attrs:{"clipped-left":t.$vuetify.breakpoint.lgAndUp,app:"",color:"blue darken-2",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),n("v-toolbar-title",{staticClass:"ml-0 pl-4",staticStyle:{width:"400px"}},[n("span",[t._v(t._s(this.$route.name))])]),n("v-spacer"),n("v-btn",{attrs:{icon:"",href:"https://github.com/nj005py/FGOcalc"}},[n("v-icon",[t._v("mdi-github")])],1)],1),n("v-content",{attrs:{app:""}},[n("v-container",[n("router-view")],1)],1),n("v-dialog",{attrs:{width:"800px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"grey darken-2"},[t._v("Create contact")]),n("v-container"),n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"primary"}},[t._v("More")]),n("v-spacer"),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),n("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Save")])],1)],1)],1)],1)},s=[],l={props:{source:String},data:function(){return{dialog:!1,drawer:null,currentPage:"简介",items:[{icon:"mdi-home",text:"简介",path:"/introducton"},{icon:"mdi-file-cabinet",text:"fgo攻略收集",path:"/GameStrategyPage"},{icon:"mdi-calculator",text:"FGOcalc引导页（草稿）",path:"/FGOcalcGuidePage"},{icon:"mdi-book",text:"TM吧吧刊阅览室（草稿）",path:"/TmMagazineList"},{icon:"mdi-message",text:"反馈",path:"/FeedbackPage"}]}},methods:{toPath:function(t){this.$router.push({path:t})}}},d=l,p=(a("59f2"),a("2877")),u=a("6544"),v=a.n(u),m=a("7496"),b=a("40dc"),f=a("5bc1"),h=a("8336"),g=a("b0af"),w=a("99d9"),x=a("62ad"),_=a("a523"),y=a("a75b"),k=a("169a"),V=a("132d"),O=a("adda"),C=a("8860"),j=a("da13"),G=a("1800"),P=a("5d23"),F=a("f774"),S=a("0fd9"),I=a("2fa4"),M=a("2a7f"),T=Object(p["a"])(d,c,s,!1,null,null,null),E=T.exports;v()(T,{VApp:m["a"],VAppBar:b["a"],VAppBarNavIcon:f["a"],VBtn:h["a"],VCard:g["a"],VCardActions:w["a"],VCardTitle:w["d"],VCol:x["a"],VContainer:_["a"],VContent:y["a"],VDialog:k["a"],VIcon:V["a"],VImg:O["a"],VList:C["a"],VListItem:j["a"],VListItemAction:G["a"],VListItemContent:P["a"],VListItemTitle:P["b"],VNavigationDrawer:F["a"],VRow:S["a"],VSpacer:I["a"],VToolbarTitle:M["a"]});var A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[a("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",height:"200px"}}),a("v-card-title",[t._v("占位测试")]),a("v-card-subtitle",[t._v("未来链接到FGOcalc引导页？？？")]),a("v-card-actions",[a("v-btn",{attrs:{text:""}},[t._v("Share")]),a("v-btn",{attrs:{color:"purple",text:""}},[t._v("Explore")]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.show=!t.show}}},[a("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),a("v-expand-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[a("v-divider"),a("v-card-text",[t._v("I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.")])],1)])],1)],1)},$=[],B={name:"FGOcalcGuidePage",data:function(){return{show:!1}}},L=B,N=a("ce7e"),z=a("0789"),D=Object(p["a"])(L,A,$,!1,null,"55ae9432",null),U=D.exports;v()(D,{VBtn:h["a"],VCard:g["a"],VCardActions:w["a"],VCardSubtitle:w["b"],VCardText:w["c"],VCardTitle:w["d"],VDivider:N["a"],VExpandTransition:z["a"],VIcon:V["a"],VImg:O["a"],VSpacer:I["a"]});var J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("markdown-it-vue",{staticClass:"md-body",attrs:{content:t.content}})],1)},R=[],Y=a("48cd"),H=a.n(Y),W=(a("f417"),"\n# FGO国服《德川回天迷宫大奥》攻略\n\n[toc]\n\n## B站削人棍\n- [视频攻略](https://www.bilibili.com/video/BV1m64y1u76v)\n- [图文攻略](https://www.bilibili.com/read/cv5636394)\n\n## NGA攻略流程\n\n## B站叫我棉被\n- [材料掉落](https://space.bilibili.com/6014992/dynamic)\n- [视频攻略](https://www.bilibili.com/video/BV1Ua4y1t7jF)\n\n## 攻略分布\n\n| 类型 | 位置 |\n| -| - |\n\n"),q={name:"GameStrategyPage",components:{MarkdownItVue:H.a},data:function(){return{content:W}}},K=q,Q=Object(p["a"])(K,J,R,!1,null,"844842c6",null),X=Q.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("markdown-it-vue",{staticClass:"md-body",attrs:{content:t.content}})],1)},tt=[],et="\n# 为什么要折腾这个web？\n\n```\n2020年03月14日 纯蓝魔法使\n```\n\n## 谈谈起因\n\n之前做了FGOcalc的Android版，只能方便部分android玩家，之前一直想通过web版为iOS玩家提供计算器，但是我既不会做web，也没找到能帮忙做web版的小伙伴，所以口嗨的web版一直做不出。\n\n拖了这么久，相信群里的iOS小伙伴都感到失望。无法为iOS玩家提供服务，我也感到很遗憾，但是我并不想就此放弃，为此，我先用这个站打草稿，边学编练web编程。\n\n## 当前目标\n- 做个新FGOcalc的引导页\n- 收集自己想看的fgo攻略，金银铜材料掉落，助战挂法，高难打法，活动流程，推荐编队等\n- 练习fgocalc web版需要的技术\n\n## FGOcalc Android\nFGOcalc更新至1.7.8，数据库更新到277奥德修斯。\n欢迎大家下载使用。\ncalc群的小伙伴在群共享里下载即可，度盘请从引导页链接里找。\n[下载引导页](https://nj005py.github.io/FGOcalc_web/data/html/guide)\n",at={name:"IntroductionPage",components:{MarkdownItVue:H.a},data:function(){return{content:et}}},nt=at,rt=Object(p["a"])(nt,Z,tt,!1,null,"30ab5444",null),it=rt.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" 如果对fgocalc感兴趣，欢迎入群422969398 ")])},ct=[],st={name:"FeedbackPage"},lt=st,dt=Object(p["a"])(lt,ot,ct,!1,null,"6a5ebb44",null),pt=dt.exports,ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{"align-content":"center",justify:"start"}},t._l(t.items,(function(e,n){return a("v-col",{key:n,attrs:{xs:"12",sm:"6",md:"3"}},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"300px","min-width":"200px"}},[a("v-img",{attrs:{src:e.image,height:"300px"}}),a("v-card-title",[t._v(t._s(e.title))]),a("v-card-actions",[a("v-btn",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.href,expression:"item.href",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copy,expression:"copy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],attrs:{text:""}},[t._v("分享")]),a("v-btn",{attrs:{color:"blue darken-2",text:"",href:e.href}},[t._v("阅读")])],1)],1)],1)})),1),a("v-snackbar",{model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.snackbarMsg)+" "),a("v-btn",{attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v("Close")])],1)],1)],1)},vt=[],mt=[{title:"17期 宵复月辉",image:a("dc84"),href:"https://tieba.baidu.com/p/6520204669"},{title:"16期 甘宵落月",image:a("4f1c"),href:"https://tieba.baidu.com/p/6421700447"},{title:"15期 巴比伦之月",image:a("dc84"),href:"https://tieba.baidu.com/p/6520204669"},{title:"14期 云出新月",image:a("dc84"),href:"https://tieba.baidu.com/p/6520204669"},{title:"xx期 xxx",image:a("dc84"),href:"https://tieba.baidu.com/p/6520204669"}],bt={data:function(){return{testImg:a("dc84"),snackbar:!1,snackbarMsg:"",items:mt}},methods:{copy:function(t){this.snackbarMsg="链接已复制剪贴板",this.snackbar=!0,console.log(t)},onError:function(t){this.snackbarMsg="链接复制失败",this.snackbar=!0,console.log(t)}}},ft=bt,ht=a("2db4"),gt=Object(p["a"])(ft,ut,vt,!1,null,"9d4367c4",null),wt=gt.exports;v()(gt,{VBtn:h["a"],VCard:g["a"],VCardActions:w["a"],VCardTitle:w["d"],VCol:x["a"],VContainer:_["a"],VImg:O["a"],VRow:S["a"],VSnackbar:ht["a"]});var xt={routes:[{path:"/introduction",component:it,name:"简介"},{path:"/GameStrategyPage",component:X,name:"fgo攻略收集"},{path:"/FGOcalcGuidePage",component:U,name:"FGOcalc引导页（草稿）"},{path:"/TmMagazineList",component:wt,name:"TM吧吧刊阅览室（草稿）"},{path:"/FeedbackPage",component:pt,name:"反馈"},{path:"/MainPage",component:E,name:"主页"},{path:"*",component:it,name:"简介"}]},_t=a("4eb5"),yt=a.n(_t);n["a"].config.productionTip=!1,n["a"].use(r["a"]),n["a"].use(yt.a);var kt=new r["a"](xt);new n["a"]({router:kt,vuetify:o,render:function(t){return t(E)}}).$mount("#app")},"59f2":function(t,e,a){"use strict";var n=a("736e"),r=a.n(n);r.a},"736e":function(t,e,a){},d222:function(t,e,a){t.exports=a.p+"img/ic_launcher.919404ee.png"},dc84:function(t,e,a){t.exports=a.p+"img/tm17cover.9a4bc4df.jpg"}});
//# sourceMappingURL=app.4e8973f5.js.map