<template>
    <div :style="myStyle" class="card"><button>按钮</button></div>
</template>

<script>
export default {
  props:['myStyle'],
}
</script>

<style scope>
template,body{
  border: none;
  margin: 0;
}
.card{
  width: 50px;
  text-align: center;
  line-height: 50px;
  margin: 0 auto;
  height: 50px;
  background: #00f;
  color: aliceblue;
  position: absolute;
}

</style>