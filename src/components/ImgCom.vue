<template>
  <div :style="style" class="card">图片</div>
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
  color: aliceblue;
  position: absolute;
}

</style>