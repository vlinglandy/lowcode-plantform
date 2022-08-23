<template>
    <div :style="views.style" class="button-com" @click="btnClick">
     <button :type="views.btnType" 
     :style="[views.btnStyle,{'pointer-events':pointEvent}]"
     @click="btnClick"
     disabled
     >
      {{views.props.content}}
     </button>
    </div>
</template>

<script>
export default {
  props: [ 'views','edit'],
  data() {
    return {
      //...
    }
  },
  methods: {
    btnClick(e) {
      if (this.edit) {//hp更改了跳转函数
        e.preventDefault() //编辑模式下阻止跳转，点击时返回属性
        console.log(this.views);
      }
    }
  },
  computed:{
    pointEvent(edit){
      return edit?'none':'initial'
  }}
}
</script>

<style scope>
.card{
  width: 50px;
  text-align: center;
  line-height: 50px;
  margin: 0 auto;
  height: 50px;
  background: #00f;
  color: aliceblue;
  margin-top: 5px;
}

.button-com{
  transition: all 0.2s;
}

.button-com:hover{
  opacity: 0.8;
}

</style>