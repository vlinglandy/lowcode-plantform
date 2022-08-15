<template>
  <div class="btn">
    <img :src="require('@/'+'assets/add-btn.png')" alt="">
  </div>
</template>

<script>
export default {
    name:'UpButton'
}
</script>

<style scoped>
.btn img{
    width: 16px;
    height: 16px;
    
}
.btn{
    top: 0;
    left: calc(50% - 8px);
    position: absolute;
}
</style>