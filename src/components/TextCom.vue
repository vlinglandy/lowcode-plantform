<template>
  <div :style="myStyle" style="position: absolute;" >
  <el-input
    type="textarea"
    autosize
    placeholder="请输入内容"
    v-model="textarea1">
</el-input>
  </div>
</template>

<script>
export default {
  props: ['myStyle'],
  data() {
    return {
      textarea1: '',
    }
  }
}
</script>

<style>
/* .card{
  width: 50px;
  height: 50px;
  text-align: center;
  margin: 0 auto;
  line-height: 50px;
  background: #00f;
  margin-top: 5px;
  position: absolute;
  color: aliceblue;
} */
</style>