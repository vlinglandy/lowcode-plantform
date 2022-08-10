import Vue from 'vue'
import App from './App.vue'
import {Button,Image,Link,Dialog,Input}  from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$video = videojs
Vue.use(Button)
Vue.use(Image)
Vue.use(Link)
Vue.use(Dialog)
Vue.use(Input)
Vue.config.productionTip = false

var EventBus = new Vue()
Object.defineProperties(Vue.prototype, {
	$bus: {
		get: function () {
			return EventBus
		}
	}
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
