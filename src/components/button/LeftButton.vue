<template>
  <div class="btn">
    <img :src="require('@/'+'assets/add-btn.png')" alt="">
  </div>
</template>

<script>
export default {
    name:'LeftButton'
}
</script>

<style scoped>
.btn img{
    width: 16px;
    height: 16px;
}
.btn{
    top: calc(50% - 8px);
    left: 0;
    position: absolute;
}
</style>