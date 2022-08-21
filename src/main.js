import Vue from 'vue'
import App from './App.vue'
import {
	Button, Image, Link, Dialog, Input,Slider,Checkbox,Loading,
	Switch, InputNumber, Option, Select,ColorPicker,RadioGroup,RadioButton,Upload
} from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import Components from '@/components'
// 导入核心弹性盒子组件
import FlexBox from '@/components/core/FlexBox'
// 导入动态渲染组件
import DynamicDraw from '@/components/core/DynamicDraw'
// 注册弹性盒子
Vue.component('FlexBox',FlexBox)
// 注册动态渲染组件
Vue.component('DynamicDraw',DynamicDraw)
Vue.prototype.$video = videojs

Vue.use(Button)
Vue.use(Image)
Vue.use(Link)
Vue.use(Dialog)
Vue.use(InputNumber)
Vue.use(Input)
Vue.use(Slider)
Vue.use(Switch)
Vue.use(Option)
Vue.use(Select)
Vue.use(ColorPicker)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Checkbox)
Vue.use(Upload)
Vue.use(Loading)
Vue.config.productionTip = false

// 注册自定义组件
Vue.use(Components)
// 全局挂载vue对象
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
