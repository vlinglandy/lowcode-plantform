<template>
  <div class="myflexbox" :style="views.style" draggable="false" @drag.stop="stopDrag" :class="{showBorder:edit,mask:views.focus && edit}" @drop.stop="dropParent($event)">
    <CenterButton style="z-index:100;" @click.stop.native="addFlexBox" v-if="views.focus && edit"></CenterButton>
    {{ views.content }}
    <!-- <DynamicDraw :currentCom="currentCom" :flexFocus="views.focus" :flexStyle="{justifyContent:views.style.justifyContent,alignItems:views.style.alignItems,flexDirection:views.style.flexDirection}" :views="views.views" :myStyle="views.views.style" :edit="edit"></DynamicDraw> -->
    <div v-for="(node,index) in views.children" @click.stop="focusChild(index)" @dragenter.stop="dragenterLight($event,node)" draggable="false" @drag.stop="stopDrag" @drop.stop="dropChildren($event,index)" :class="{showBorder:edit}" :style="node.style" :key="node.id">
      <div :class="{mask:node.focus && edit}" v-if="node.focus"></div>
      <CenterButton @click.stop.native="addFlexBox" style="z-index:100;" v-if="node.focus && edit"></CenterButton>
      {{ node.content }}
      <div
        class="block tpl-container "
        v-for="(view, index) in node.views"
        :key="view.id"
        @dragstart.stop="dragstart(node ,view, index)"
        @click.stop="select(index,view,node)"
      >
          <component
            :comContent="view.comContent"
            :views="view"
            :draggable="edit && view.component!='FlexBox'"
            :class="{componenthover:edit, selected:index == currentIndex && edit && currentCom == view}"
            :myStyle="view.style"
            :is="view.component"
            :edit="edit"
          >
          </component>
      </div>
    </div>
  </div>
</template>

<script>
import {nanoid} from 'nanoid';
import commonData from '@/data/commonData.js'//改动
import {dataFormat} from '@/utils/dataFormat.js'
import {deepClone} from '@/utils/deepClone.js'
import CenterButton from "@/components/global/CenterButton.vue"
export default {
  name:'FlexBox',
  props: [
    'views',
    "edit",
    "centerCom",
    "currentCom",
  ],
  data() {
    return {
      center:false,
      showButton:true,
      littleCenterCom: false, //是否是小画布内的组件
      currentIndex: -1,//选中组件的索引
    }
  },
  mounted(){
    this.$bus.$on("deleteFlexBoxCom",()=>{
      this.currentIndex = -1
    })
  },
  methods: {
    addFlexBox(){
      if(!this.edit) return // 如果不是编辑状态，无效
      this.$bus.$emit("sonAddFlexBox",this.views)
      console.log("发布事件");
    },
    // 阻止drag
    stopDrag(e){
      e.preventDefault();
    },
    // 组件拖拽时悬浮时高亮
    dragenterLight(e,node){
      e.preventDefault();
      this.$bus.$emit("clearFocus")
      node.focus = true
    },
    focusChild(i){
      if(!this.edit) return // 如果不是编辑状态，无效
      this.$bus.$emit("clearFocus")
      let view = this.views.children[i]
      view.focus = true
      // 全局相对寻址
      this.$bus.$emit("refreshCurrentViews",this.views.children,i)
      this.$bus.$emit('sendDeleteIndex',i)
      this.$bus.$emit("deleteFlexBoxCom")// 重置其余索引
      // 激活向右发送数据事件
      this.$bus.$emit('views',view);
    },
    dropCommon(e){
      console.log("准备drop===");
      this.$bus.$emit("clearFocus")
      var data = e.dataTransfer.getData("attr");
      // 深拷贝拷贝默认组件样式
      var newData = deepClone(commonData[data])
      // 数据特殊化处理之后统一处理共同样式
      newData = dataFormat(data,newData);
      // 数据统一处理
      newData.id = nanoid();
      // 问题多，暂时删了定位
      // if(this.pattern != 'static'){
        // newData.style.left = e.offsetX + "px";
        // newData.style.top = e.offsetY + "px";
      // }
      
      return newData
    },
    dropCenterCom(){
      console.log("在弹性盒子中的组件");
      this.$bus.$emit("rootDelete")
      // 问题多，暂时删了定位
      // this.currentCom.style.left = e.offsetX + "px";
      // this.currentCom.style.top = e.offsetY + "px";
      this.$bus.$emit("offCenter")
      this.currentCom.id = nanoid();
      return deepClone(this.currentCom)
    },
    // 判断是否为中间组件并且拖动的不是flexbox
    isCenterFlexbox(){
      if(this.centerCom && this.currentCom.component == 'FlexBox')return true
      return false
    },
    dropParent(e){
      if(!this.edit) return
      if(this.isCenterFlexbox())return 
      var newData = this.centerCom === true ? this.dropCenterCom(e) : this.dropCommon(e)
      // newData.comContent = commonData[data]//改定
      let newChild = deepClone(commonData['Node'])
      newChild.views.push(newData)
      this.views.children.push(newChild);
      // 激活向右发送数据事件
      this.$bus.$emit('views',newData);
      this.views.focus = false
    },
    dropChildren(e,i){
      if(!this.edit) return 
      if(this.isCenterFlexbox())return 
      var newData = this.centerCom === true ? this.dropCenterCom(e) : this.dropCommon(e)
      // newData.comContent = commonData[data]//改定
      this.views.children[i].views.push(newData);
      // 激活向右发送数据事件
      this.$bus.$emit('views',newData);
      this.views.children[i].focus = false
    },
    //选中组件
    select(index,view,node) {
      if(!this.edit) return // 如果不是编辑状态，无效
      this.$bus.$emit("clearFocus")
      // 全局相对寻址
      this.$bus.$emit("refreshCurrentViews",node.views,index)
      // 单views相对寻址
      this.$bus.$emit("updateCurrentCom",view)
      this.$bus.$emit('sendDeleteIndex',index)
      this.$bus.$emit("deleteFlexBoxCom")// 重置其余索引
      this.currentIndex = index
      // 激活向右发送数据事件
      this.$bus.$emit('views',view);
    },
    dragstart(node,view, index) {
      if(!this.edit) return // 如果不是编辑状态，无效
      
      this.$bus.$emit("clearFocus")
      this.$bus.$emit("refreshCurrentViews",node.views,index)
      this.$bus.$emit("onCenter")
      this.littleCenterCom = true;
      // this.currentCom = view;
      this.$bus.$emit("updateCurrentCom",view)
      console.log("点击了flexbox之后拖拽应该有dragstart事件啊");
      console.log("输出一下view变量");
      console.log(this.currentCom);
      this.$bus.$emit("refreshCurrentCom",this.littleCenterCom)
    },
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
}

.showBorder{
  border: 1px dashed #06c;
  width: 100%;
}
.selected {
  /*hp修正点击组件因增加边框而偏移*/
  border: 1px solid rgba(0, 108, 255) !important
}

.flex{
  display: flex;
  width:100%;
  height: 100%;
}

.component-hover {
  display: inline-block;
  /*hp修正点击组件因增加边框而偏移*/
  border: 1px solid transparent;
}

.component-hover:hover {
  border: 1px dashed rgb(0, 108, 255);
}

</style>