import Vue from 'vue'
import App from './App.vue'
import {Button,Image,Link}  from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'

Vue.use(Button)
Vue.use(Image)
Vue.use(Link)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
