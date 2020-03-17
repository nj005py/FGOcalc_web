import Vue from 'vue'
// import App from './App.vue'
import VueRouter from 'vue-router';
import vuetify from './plugins/vuetify';
import MainPage from './components/MainPage';
import routerConfig from './router.config';
import VueClipboard from 'vue-clipboard2'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueClipboard)

const router = new VueRouter(routerConfig)

new Vue({
  router,
  vuetify,
  render: h => h(MainPage)
}).$mount('#app')
