# FGOcalc_web

这个项目正在复活中，目前在边学vue边整改。
关于Vue，我就是个菜鸟。

这个项目有点乱，早期想做fgocalc web版的时候就是传统3大件，今年才开始整Vue的方式。所以存在2套代码。
Vue有关的是这些
```
babel.config.js
package.json
public
src
vue.config.js
```
当完成下面vue的到个安装任务后，再开始补全包的依赖
```
yarn install
```

# vue使用攻略
- 使用yarn作为包管理器
- 安装@vue/cli
```
yarn global add @vue/cli
```
- 安装vue
```
yarn global add vue
```
这时已经可以使用vue/cli这个脚手架工具了，为了能够在多个页面间切换，还需要路由。
- 建个项目
```
vue create 项目名称
```
- 安装vue-router
去项目里
```
yarn add vue-router
```
- 找个UI库
vue没有自带的UI组件库，需要自己去找三方组件库，推荐Vuetify和Quasar，这个项目用了Vuetify，材料设计风格很有app的感觉，对我这种Android开发者来说，无法拒绝。

- 找个状态管理框架
Vue的状态管理我还没学，基本还是得用Vuex。

- IndexedDb用起来
至少我是想用这个，还没开始在Vue项目里用起来。
