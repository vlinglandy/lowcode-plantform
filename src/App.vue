<template>
  <div id="app">
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
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
