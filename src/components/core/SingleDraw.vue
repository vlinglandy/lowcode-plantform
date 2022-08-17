<template>
  <div :style="myStyle">
    <div @click="select(index,view)" class="tpl-container">
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
</template>

<script>
import ButtonCom from "@/components/ButtonCom.vue"
import ImgCom from "@/components/ImgCom.vue"
import LinkCom from "@/components/LinkCom.vue"
import TextCom from "@/components/TextCom.vue"
import VideoCom from "@/components/VideoCom.vue"
export default {
  props: [
    'myStyle',
    'view',
    'edit',
    'index'
  ],
  data() {
    return {
        centerCom: false, //是否是画布内的组件
        currentCom: {}, //选中的组件
        currentIndex: -1,//选中组件的索引
    }
  },
  methods: {
    //选中组件
    select(index,view) {
      this.currentCom = view
      this.currentIndex = index;
      // 激活向右发送数据事件
      this.$bus.$emit('views',view);
    },
  },
  components: {
    ButtonCom,
    ImgCom,
    LinkCom,
    TextCom,
    VideoCom
  },
}
</script>

<style scope>
.selected {
  border: 2px solid rgba(0,108,255);
}

.componenthover:hover{
  border: 1px dashed rgb(0,108,255);
}

</style>