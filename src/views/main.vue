<template>
    <div class="main">
       <Left></Left>
       <div class="canvas">
          <Top></Top>
          <Center></Center>
       </div>
      <Right></Right>
    </div>
</template>


<script>
import '@/assets/index.scss'
import Top from './layout/Top.vue'
import Left from './layout/Left.vue'
import Center from './layout/Center.vue'
import Right from './layout/Right.vue'
export default {
    data() {
      return {

      }
    },
    components:{
      Top,
      Left,
      Right,
      Center
    },
}
</script>

<style scoped>
template{
  width: 100%;
  height: 100%;
}
.main{
  width: 100%;
  height: 100%;
  display: flex;
}
.canvas{
  margin: 0 auto;
  width: 100%;
  height: 100%;
}
</style>