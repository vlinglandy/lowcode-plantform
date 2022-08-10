<template>
  <div id="app">
    <header class="header">
      <div class="logo">
        <img :src="require('@/assets/logo3.png')" alt="">
      </div>
    </header>
    <Main></Main>
  </div>
</template>

<script>
import Main from '@/views/main.vue'
export default {
  name: 'App',
  components: {
    Main
  }
}
</script>


<style lang="scss">
template,#app,body,html{
  width: 100%;
  height: 100%;
  background: rgb(237,239,243);
}
.header{
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
  margin-bottom: 1px;
}
.logo img{
  width: 130.8px;
  height: 36px;
  flex-shrink: 0;
  margin-left: 10px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


html::-webkit-scrollbar,body::-webkit-scrollbar{
  display:none
}


#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
