<template>
    <div :style="myStyle" style="position:absolute;">
     <el-button type="primary" plain>主要按钮</el-button>
    </div>
</template>

<script>
export default {
  props: ['myStyle'],
  data() {
    return {
      //...
    }
  }
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
  position: absolute;
}

</style>