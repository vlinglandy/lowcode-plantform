<template>
  <div>
    <div style="display: flex">
      <div class="label">宽度：</div>
      <el-input class="input" v-model="views.style.width"></el-input>
    </div>
    <div style="display: flex">
      <div class="label">高度：</div>
      <el-input class="input" v-model="views.style.height"></el-input>
    </div>
    <div style="display: flex">
      <div class="label">图片宽度：</div>
      <el-input class="input" v-model="views.imgStyle.width"></el-input>
    </div>
    <div style="display: flex">
      <div class="label">图片高度：</div>
      <el-input class="input" v-model="views.imgStyle.height"></el-input>
    </div>
    <div style="display: flex">
      <div class="label">图片路径：</div>
      <el-input class="input" v-model="views.src"></el-input>
    </div>
    <!-- 下面代码未定义的函数被我删了，不然会有bug -->
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple
    >
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
  </div>
</template>

<script>
export default {
    props:["views"],
    data() {
        return {
            
        }
    },
};
</script>

<style scoped>



.input {
  width: 60%;
  float: right;
}
.label {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>