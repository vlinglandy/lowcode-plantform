<template>
  <div>
    <div
    class="block"
    v-for="(view, index) in views"
    :key="view.id"
    @dragstart.stop="dragstart(view, index,$event)"
    :style="{width:view.style.width,height:view.style.height,position:view.style.position}"
  >
      <component
        :comContent="view.comContent"
        :views="view"
        :draggable="edit && view.component!='FlexBox'"
        :class="{componenthover:edit, selected:index == currentIndex && edit && view == currentCom}"
        :myStyle="view.style"
        :is="view.component"
        :edit="edit"
        :centerCom="centerCom"
        :currentCom="currentCom"
        @click.native.stop="select(index,view)"
        @dragenter.native.stop="dragenterLight($event,view)"
        class="tpl-container"
      >
      </component>
    </div>
  </div>
</template>

<script>
import '@/assets/css/componentBox.scss'
export default {
  props: [
    'views',
    'edit',
    'index',
    'currentIndex',
    'currentCom',
    'centerCom',
  ],
  data() {
    return {
    }
  },
  methods: {
    //选中组件
    select(index,view) {
      this.$emit("selectEvent",index,view)
    },
    // 组件拖拽时悬浮时高亮
    dragenterLight(e,view){
      e.preventDefault();
      this.$bus.$emit("clearFocus")
      view.focus = true
    },
    dragstart(view, index , e) {
      this.$emit("dragstartEvent",view,index,e)
    },
  },
  components: {

  },
}
</script>

<style lang="scss" scope>
.selected {
  border: 2px solid rgba(0,108,255);
}

.componenthover:hover{
  border: 1px dashed rgb(0,108,255);
}

</style>