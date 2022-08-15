<template>
  <div class="myflexbox" @click.stop="focus" :style="views.style" :class="{showBorder:edit,mask:views.focus}" @drop.stop="dropParent($event)">
    <CenterButton @click.stop.native="addFlexBox" v-if="views.focus"></CenterButton>
    <DynamicDraw :views="views.views" :myStyle="views.views.style"></DynamicDraw>
    <div v-for="(node,index) in views.children" @click.stop="focusChild(index)" @drop.stop="dropChildren($event,index)" :class="{showBorder:edit,mask:node.focus}" :style="node.style" :key="index">1
      <CenterButton @click.stop.native="addFlexBox" v-if="node.focus"></CenterButton>
      <DynamicDraw :views="node.views" :myStyle="node.views.style"></DynamicDraw>
    </div>
  </div>
</template>

<script>
import {nanoid} from 'nanoid';
import commonData from '@/utils/commonData.js'//改动
import {dataFormat} from '@/utils/dataFormat.js'
import {deepClone} from '@/utils/deepClone.js'
import CenterButton from "@/components/button/CenterButton.vue"
export default {
  name:'FlexBox',
  props: [
    'views',
    "edit"
  ],
  data() {
    return {
      center:false,
      showButton:true
    }
  },
  methods: {
    addFlexBox(){
      this.$bus.$emit("sonAddFlexBox",this.views)
      console.log("发布事件");
    },
    focus(){
      this.$bus.$emit("clearFocus")
      this.views.focus=true
    },
    focusChild(i){
      this.$bus.$emit("clearFocus")
      this.views.children[i].focus=true
    },
    dropParent(e){
      var data = e.dataTransfer.getData("attr");
      // 深拷贝拷贝默认组件样式
      var newData = deepClone(commonData[data])
      // 数据特殊化处理之后统一处理共同样式
      newData = dataFormat(data,newData);
      // 数据统一处理
      newData.id = nanoid();
      newData.style.left = e.offsetX + "px";
      newData.style.top = e.offsetY + "px";
      // newData.comContent = commonData[data]//改定
      this.views.views.push(newData);
      // 激活向右发送数据事件
      this.$bus.$emit('views',newData);
    },
    dropChildren(e,i){
      var data = e.dataTransfer.getData("attr");
      // 深拷贝拷贝默认组件样式
      var newData = deepClone(commonData[data])
      // 数据特殊化处理之后统一处理共同样式
      newData = dataFormat(data,newData);
      // 数据统一处理
      newData.id = nanoid();
      newData.style.left = e.offsetX + "px";
      newData.style.top = e.offsetY + "px";
      // newData.comContent = commonData[data]//改定
      this.views.children[i].views.push(newData);
      // 激活向右发送数据事件
      this.$bus.$emit('views',newData);
    }
  },
  components:{
    CenterButton 
  }
}
</script>

<style scope>
.showBorder{
  border: 1px dashed #06c;
  width: 100%;
}
.mask{
  position: absolute;
  left: 0;
  top: 0px;
  bottom: 0;
  right: 0;
  background-color: #baf8ff;
  border: 2px solid #06c;
  opacity: 0.5;
  z-index: 10;
  margin: 5px;
}
</style>