<template>
  <div class="center" :class="{phoneSize:isPhone}">
    <div
      class="block"
      v-for="(view, index) in views"
      :key="view.id"
    >
      <div class="tpl-container">
        <component
          :comContent="view.comContent"
          :views="view"
          :draggable="edit"
          :class="{componenthover:edit, selected:index == currentIndex && edit}"
          :myStyle="view.style"
          :is="view.component"
        >
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/index.scss'
import ButtonCom from "@/components/ButtonCom.vue"
import ImgCom from "@/components/ImgCom.vue"
import LinkCom from "@/components/LinkCom.vue"
import TextCom from "@/components/TextCom.vue"
import VideoCom from "@/components/VideoCom.vue"
export default {
  data() {
    return {
      edit: false,// 编辑模式false为预览模式
      isPhone: false,
      dialogVisible:false,
      centerCom: false, //是否是画布内的组件
      currentCom: {}, //选中的组件
      currentIndex: -1,//选中组件的索引
      views: [],// 主要视图数据
    };
  },
  created(){
    this.views = JSON.parse(localStorage.getItem("views"))
  },
  mounted() {

  },
  methods: {

    
  },
  components: {
    ButtonCom,
    ImgCom,
    LinkCom,
    TextCom,
    VideoCom
  },
};
</script>

<style scoped>

.block{
  box-sizing: border-box;
}
.center {
  position: relative;
  height: 100%;
  box-sizing: border-box;
  background: #fff;
  overflow: scroll;
}

.center::-webkit-scrollbar{
  display:none
}

.pcSize {
  width: 100%;
}

.phoneSize {
  width: 375px;
  height: 667px;
  margin: 10px auto;
}

.selected {
  border: 2px solid rgba(0,108,255);
}
.tpl-container {
  cursor: pointer;
}

.componenthover:hover{
  border: 1px dashed rgb(0,108,255);
}

.deleteBtn {
  float: right;
}
</style>