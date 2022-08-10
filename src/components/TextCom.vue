<template>
  <div :style="myStyle" class="card">文本</div>
</template>

<script>
export default {
  props:['myStyle'],
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
  position: absolute;
  color: aliceblue;
}

</style>