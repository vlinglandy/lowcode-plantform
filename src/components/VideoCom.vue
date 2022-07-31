<template>
   <div :style="style" class="card">视频</div>
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
  line-height: 50px;
  margin: 0 auto;
  background: #00f;
  margin-top: 5px;
  color: aliceblue;
  position: absolute;
}
</style>