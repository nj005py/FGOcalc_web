(function(t){function n(n){for(var a,i,c=n[0],l=n[1],s=n[2],p=0,u=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(n);while(u.length)u.shift()();return o.push.apply(o,s||[]),e()}function e(){for(var t,n=0;n<o.length;n++){for(var e=o[n],a=!0,c=1;c<e.length;c++){var l=e[c];0!==r[l]&&(a=!1)}a&&(o.splice(n--,1),t=i(i.s=e[0]))}return t}var a={},r={app:0},o=[];function i(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=a,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)i.d(e,a,function(n){return t[n]}.bind(null,a));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/FGOcalc_web/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var s=0;s<c.length;s++)n(c[s]);var d=l;o.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),r=e("8c4f"),o=e("f309");a["a"].use(o["a"]);var i=new o["a"]({}),c=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{clipped:t.$vuetify.breakpoint.lgAndUp,app:""},model:{value:t.drawer,callback:function(n){t.drawer=n},expression:"drawer"}},[a("v-card",{attrs:{color:"#1E88E5",flat:"true",height:"200px"}},[a("v-row",{staticClass:"lightbox white--text pa-2 fill-height",attrs:{align:"center"}},[a("v-col",{attrs:{align:"center"}},[a("v-img",{attrs:{"max-width":"48px","max-height":"48px",src:e("d222")}}),a("div",{staticClass:"body-1"},[t._v("纯蓝梦工坊")])],1)],1)],1),a("v-list",{attrs:{dense:""}},[t._l(t.items,(function(n){return[a("v-list-item",{key:n.text,attrs:{link:""},on:{click:function(e){return t.toPath(n.path)}}},[a("v-list-item-action",[a("v-icon",[t._v(t._s(n.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(n.text))])],1)],1)]}))],2)],1),a("v-app-bar",{attrs:{"clipped-left":t.$vuetify.breakpoint.lgAndUp,app:"",color:"blue darken-3",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(n){n.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"ml-0 pl-4",staticStyle:{width:"400px"}},[a("span",[t._v(t._s(this.$route.name))])]),a("v-spacer"),a("v-btn",{attrs:{icon:"",href:"https://github.com/nj005py/FGOcalc"}},[a("v-icon",[t._v("mdi-github")])],1)],1),a("v-content",{attrs:{app:""}},[a("v-container",[a("router-view")],1)],1),a("v-dialog",{attrs:{width:"800px"},model:{value:t.dialog,callback:function(n){t.dialog=n},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"grey darken-2"},[t._v("Create contact")]),a("v-container"),a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"primary"}},[t._v("More")]),a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(n){t.dialog=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{text:""},on:{click:function(n){t.dialog=!1}}},[t._v("Save")])],1)],1)],1)],1)},l=[],s={props:{source:String},data:function(){return{dialog:!1,drawer:null,currentPage:"简介",items:[{icon:"mdi-home",text:"简介",path:"/introducton"},{icon:"mdi-file-cabinet",text:"fgo攻略收集",path:"/GameStrategyPage"},{icon:"mdi-calculator",text:"FGOcalc引导页（草稿）",path:"/FGOcalcGuidePage"},{icon:"mdi-message",text:"反馈",path:"/FeedbackPage"}]}},methods:{toPath:function(t){this.$router.push({path:t})}}},d=s,p=(e("59f2"),e("2877")),u=e("6544"),v=e.n(u),h=e("7496"),f=e("40dc"),m=e("5bc1"),b=e("8336"),g=e("b0af"),w=e("99d9"),x=e("62ad"),_=e("a523"),y=e("a75b"),V=e("169a"),O=e("132d"),k=e("adda"),C=e("8860"),P=e("da13"),G=e("1800"),j=e("5d23"),S=e("f774"),F=e("0fd9"),I=e("2fa4"),A=e("2a7f"),T=Object(p["a"])(d,c,l,!1,null,null,null),$=T.exports;v()(T,{VApp:h["a"],VAppBar:f["a"],VAppBarNavIcon:m["a"],VBtn:b["a"],VCard:g["a"],VCardActions:w["a"],VCardTitle:w["d"],VCol:x["a"],VContainer:_["a"],VContent:y["a"],VDialog:V["a"],VIcon:O["a"],VImg:k["a"],VList:C["a"],VListItem:P["a"],VListItemAction:G["a"],VListItemContent:j["a"],VListItemTitle:j["b"],VNavigationDrawer:S["a"],VRow:F["a"],VSpacer:I["a"],VToolbarTitle:A["a"]});var E=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[e("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",height:"200px"}}),e("v-card-title",[t._v("占位测试")]),e("v-card-subtitle",[t._v("未来链接到FGOcalc引导页？？？")]),e("v-card-actions",[e("v-btn",{attrs:{text:""}},[t._v("Share")]),e("v-btn",{attrs:{color:"purple",text:""}},[t._v("Explore")]),e("v-spacer"),e("v-btn",{attrs:{icon:""},on:{click:function(n){t.show=!t.show}}},[e("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),e("v-expand-transition",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[e("v-divider"),e("v-card-text",[t._v("I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.")])],1)])],1)],1)},M=[],B={name:"FGOcalcGuidePage",data:function(){return{show:!1}}},L=B,N=e("ce7e"),D=e("0789"),q=Object(p["a"])(L,E,M,!1,null,"55ae9432",null),J=q.exports;v()(q,{VBtn:b["a"],VCard:g["a"],VCardActions:w["a"],VCardSubtitle:w["b"],VCardText:w["c"],VCardTitle:w["d"],VDivider:N["a"],VExpandTransition:D["a"],VIcon:O["a"],VImg:k["a"],VSpacer:I["a"]});var U=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("markdown-it-vue",{staticClass:"md-body",attrs:{content:t.content}})],1)},Y=[],z=e("48cd"),H=e.n(z),R=(e("f417"),"\n# FGO国服CCC联动复刻攻略\n\n[toc]\n\n## B站削人棍\n- [视频攻略](https://www.bilibili.com/video/av95516412)\n- [图文攻略](https://www.bilibili.com/read/cv5097156)\n\n## NGA攻略流程\n\n- [无氪向](https://bbs.nga.cn/read.php?tid=20506634)\n- [重氪向](https://bbs.nga.cn/read.php?tid=20772943)\n\n## B站叫我棉被\n- [金银铜材料掉落](https://t.bilibili.com/366081979862922150?tab=2)\n- [视频攻略](https://www.bilibili.com/video/av94287897)\n\n## 攻略分布\n\n| 类型 | 位置 |\n| -| - |\n| 金银铜材料掉落 | 叫我棉被|\n| 助战挂法 | 削人棍 |\n| 高难打法 | 问群友 |\n| 活动流程 | 削人棍 nga|\n| 推荐编队 | 问群友 |\n\n## 说说想法\n\n各大佬的攻略都有特别方便的地方，面对太长的攻略，我这样的咸鱼玩家其实是没耐心看完的，所以把各家攻略的亮点提出来互补最佳。\n\n如果搞清谁是楚各个分类的最直观的攻略，找对应的地方去看，会很有效率。\n\n以前看群友共享的攻略，经常会遇到图被qq压缩的情况，而且也不一定是对自己很直观的风格。\n\n我想提升找到合适攻略的效率，但是具体怎么整，我也没想好。就我的情况，我喜欢看削人棍的助战挂法，高难打法问群友，掉落喜欢叫我棉被的风格（一张地图，每个位置标注掉落情况），流程类的都觉得麻烦，\n尤其是今天打完，明天回来找今天的进度，图片也没有书签，找起来还挺烦的。\n\n### 想到的痛点\n\n- 有时能看到有人做削人棍攻略的一图流，但是没有固定的人发，找起来挺烦\n- 棉被的部分攻略在动态里，翻动态麻烦\n- 长流程图回头找进度很烦，缺少书签功能\n\n如果有小伙伴愿意想想如何有效地解决这些痛点就再好不过了\n\n"),K={name:"GameStrategyPage",components:{MarkdownItVue:H.a},data:function(){return{content:R}}},Q=K,W=Object(p["a"])(Q,U,Y,!1,null,"844842c6",null),X=W.exports,Z=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("markdown-it-vue",{staticClass:"md-body",attrs:{content:t.content}})],1)},tt=[],nt="\n# 为什么要折腾这个web？\n\n```\n2020年03月14日 纯蓝魔法使\n```\n\n## 谈谈起因\n\n之前做了FGOcalc的Android版，只能方便部分android玩家，之前一直想通过web版为iOS玩家提供计算器，但是我既不会做web，也没找到能帮忙做web版的小伙伴，所以口嗨的web版一直做不出。\n\n拖了这么久，相信群里的iOS小伙伴都感到失望。无法为iOS玩家提供服务，我也感到很遗憾，但是我并不想就此放弃，为此，我先用这个站打草稿，边学编练web编程。\n\n## 当前目标\n- 做个新FGOcalc的引导页\n- 收集自己想看的fgo攻略，金银铜材料掉落，助战挂法，高难打法，活动流程，推荐编队等\n- 练习fgocalc web版需要的技术\n\n## FGOcalc Android\nFGOcalc更新至1.7.8，数据库更新到277奥德修斯。\n欢迎大家下载使用。\ncalc群的小伙伴在群共享里下载即可，度盘请从引导页链接里找。\n[下载引导页](https://nj005py.github.io/FGOcalc_web/data/html/guide)\n",et={name:"IntroductionPage",components:{MarkdownItVue:H.a},data:function(){return{content:nt}}},at=et,rt=Object(p["a"])(at,Z,tt,!1,null,"30ab5444",null),ot=rt.exports,it=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._v(" 如果对fgocalc感兴趣，欢迎入群422969398 ")])},ct=[],lt={name:"FeedbackPage"},st=lt,dt=Object(p["a"])(st,it,ct,!1,null,"6a5ebb44",null),pt=dt.exports,ut={routes:[{path:"/introduction",component:ot,name:"简介"},{path:"/GameStrategyPage",component:X,name:"fgo攻略收集"},{path:"/FGOcalcGuidePage",component:J,name:"FGOcalc引导页（草稿）"},{path:"/FeedbackPage",component:pt,name:"反馈"},{path:"/MainPage",component:$,name:"主页"},{path:"*",component:ot,name:"简介"}]};a["a"].config.productionTip=!1,a["a"].use(r["a"]);var vt=new r["a"](ut);new a["a"]({router:vt,vuetify:i,render:function(t){return t($)}}).$mount("#app")},"59f2":function(t,n,e){"use strict";var a=e("736e"),r=e.n(a);r.a},"736e":function(t,n,e){},d222:function(t,n,e){t.exports=e.p+"img/ic_launcher.919404ee.png"}});
//# sourceMappingURL=app.d320afb2.js.map