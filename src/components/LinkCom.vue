<template>
  <div :style="style" class="card"><a href="javascript(0)">链接</a></div>
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
  margin-top: 5px;
  background: #00f;
  color: aliceblue;
  position: absolute;
}
</style>