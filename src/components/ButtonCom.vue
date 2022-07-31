<template>
    <div :style="style" class="card"><button>按钮</button></div>
</template>

<script>
export default {
  props:['style'],
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