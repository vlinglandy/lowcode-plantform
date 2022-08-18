<template>
  <div>
    <header class="header">
        <div class="logo">
          <img :src="require('@/assets/logo3.png')" alt="">
        </div>
    </header>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
  margin-bottom: 1px;
  position: fixed;
  top:0px;
  z-index:103;
}
</style>