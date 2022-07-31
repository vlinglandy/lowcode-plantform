import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menus:[
      {name:"text",icon:"",component:"TextCom"},
      {name:"button",icon:"",component:"ButtonCom"},
      {name:"img",icon:"",component:"ImgCom"},
      {name:"video",icon:"",component:"VideoCom"},
      {name:"a",icon:"",component:"LinkCom"},
    ],
    views:[]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
