<template>
  <div class="btn">
    <img :src="require('@/'+'assets/add-btn.png')" alt="">
  </div>
</template>

<script>
export default {
    name:'CenterButton'
}
</script>

<style scoped>
.btn img{
    width: 16px;
    height: 16px;
    z-index: 10;
}
.btn{
    cursor: pointer;
    top: calc(50% - 8px);
    left: calc(50% - 8px);
    position: absolute;
}
</style>