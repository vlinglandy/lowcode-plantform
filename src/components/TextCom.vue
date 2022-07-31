<template>
  <div :style="style" class="card">文本</div>
</template>

<script>
export default {
  props:['style'],
}
</script>

<style>
.card{
  width: 50px;
  height: 50px;
  text-align: center;
  margin: 0 auto;
  line-height: 50px;
  background: #00f;
  margin-top: 5px;
  position: absolute;
  color: aliceblue;
}
</style>