<template>
  <div class="center" @dragover="dropover" @drop.stop="drop">Center
     <el-button style="width:100px;height:100px" @click="getJson">导出json</el-button>
     <div class="block" v-for="(view,index) in views"  :key="index">
         <component :style="view.style" :is="view.component"></component>
     </div>
  </div>
</template>


<script>
import FileSaver from 'file-saver'
import ButtonCom from "@/components/ButtonCom.vue"
import ImgCom from "@/components/ImgCom.vue"
import LinkCom from "@/components/LinkCom.vue"
import TextCom from "@/components/TextCom.vue"
import VideoCom from "@/components/VideoCom.vue"
export default {
  data() {
    return {
      views: [
        {
          style:{
            left: "200px",
            top: "100px",
          },
          component: "ButtonCom",
        },
        {
          style:{
            left: "500px",
            top: "200px",
          },
          component: "ImgCom",
        },
        {
          style:{
            left: "50px",
            top: "20px",
          },
          component: "LinkCom",
        },
        {
          style:{
            left: "150px",
            top: "60px",
          },
          component: "TextCom",
        },
        {
          style:{
            left: "400px",
            top: "500px",
          },
          component: "VideoCom",
        },
      ],
    };
  },
  methods: {
    drop(e){
      console.log("=========drop========");
      e.preventDefault();
      var data = e.dataTransfer.getData("attr");
      var newObj={};
      newObj.style={};
      newObj.style.left = e.clientX-250+"px";
      newObj.style.top = e.clientY-100+"px";
      newObj.component = data;
      this.views.push(newObj);
    },
    dropover(e){
      e.preventDefault();
      // console.log(e);
    },
    getJson(){
        // 将json转换成字符串
        const data = JSON.stringify(this.views)
        const blob = new Blob([data], {type: ''})
        FileSaver.saveAs(blob, 'json.json')
    }
  },
  components:{
    ButtonCom,
    ImgCom,
    LinkCom,
    TextCom,
    VideoCom
  },
};
</script>

<style scoped>
.center {
  margin: 0 auto;
  position: relative;
  height: 100%;
}
</style>