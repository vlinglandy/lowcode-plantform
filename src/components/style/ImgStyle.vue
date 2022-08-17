<template>
  <div>
    <!-- 图片要修改的样式{{views}} -->
  <div style="display: flex;margin-bottom: 5%;">
      <div class="label">宽度：</div>
      <el-input class="input" v-model="views.style.width"></el-input>
    </div>
    <div style="display: flex;margin-bottom: 5%;">
      <div class="label">高度：</div>
      <el-input class="input" v-model="views.style.height"></el-input>
    </div>
    <div style="display: flex;margin-bottom: 5%;">
      <div class="label">图片宽度：</div>
      <el-input class="input" v-model="views.imgStyle.width"></el-input>
    </div>
    <div style="display: flex;margin-bottom: 5%;">
      <div class="label">图片高度：</div>
      <el-input class="input" v-model="views.imgStyle.height"></el-input>
    </div>
    <div style="display: flex;margin-bottom: 5%;">
    </div>
  </div>
</template>

<script>
export default {
    props:["views"],
    data() {
        return {
            
        }
    },
}
</script>

<style>
.input {
  width: 60%;
  float: right;
}
.label {
  width:40% ;
  display: flex;
  justify-content: left;
  align-items: center;
}
</style>