<template>
  <div class="left">
    <div v-for="item in menu" draggable="true" @dragstart="dragstart" :key="item.name">
      <img :id="item.flag" class="img-show" :src="require('@/'+item.icon)" alt="图片失踪">
      <!-- {{item.name}} -->
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      menu: [
        {flag:"TextCom", name: "文本", icon: "assets/text.png", component: "TextCom" },
        {flag:"ButtonCom", name: "按钮", icon: "assets/btn.png", component: "ButtonCom" },
        {flag:"ImgCom", name: "图片", icon: "assets/img.png", component: "ImgCom" },
        {flag:"VideoCom", name: "视频", icon: "assets/video.png", component: "VideoCom" },
        {flag:"LinkCom", name: "链接", icon: "assets/link.png", component: "LinkCom" },
      ],
    };
  },
  
  methods: {
    dragstart(e){
      console.log(e)
      e.dataTransfer.setData("attr",e.target.id);
    }
  },
};
</script>

<style scoped>
.left {
  position: absolute;
  left: 0px;
  width: 200px;
  height: 100%;
  background: #eee;
}
.img-show{
  width: 50px;
  height: 50px;
  margin-top: 20px;
}
</style>