<template>
  <div class="card" :style="views.style"  @click="sendViews(views)">
    <el-image :src="views.src" :style="views.imgStyle" fit='cover' @click="sendViews(views)" style="cursor: pointer;">
      <div slot="error" class="image-slot" >
        <i class="el-icon-picture-outline"></i>
        <p style="color: white;">点击上传图片</p>
      </div>
    </el-image>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // src:'',
    }
  },
  props: ["views"],
  watch:{
    style:function(newVal){
      console.log('new',newVal);
    }
  },
  mounted(){
  },
  methods: {
    sendViews(view){
      this.$bus.$emit('views',view);
    }
  }
};
</script>

<style scoped>
.card {
  width: 300px;
  height: 200px;
  text-align: center;
  margin: 0 auto;
  line-height: 50px;
  background: grey;
  color: aliceblue;
  position: absolute;
}

</style>