import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import vuetify from '@/plugins/vuetify'
import store from './vuex/store.js'
Vue.config.productionTip = false

console.log('全局定义环境变量:', process.env)
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
