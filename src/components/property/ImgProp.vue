<template>
  <div>
    <div style="display: flex;margin-bottom: 5%;">
      <div class="label">代替文本：</div>
      <el-input class="input" v-model="views.alt"></el-input>
    </div>
    <div style="display: flex;margin-bottom: 5%;">
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
  width: 70%;
  float: right;
}
.label {
  width:30%;
  display: flex;
  justify-content: left;
  align-items: center;
}

</style>