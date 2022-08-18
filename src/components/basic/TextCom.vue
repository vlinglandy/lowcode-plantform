<template>
  <div :style="views.style" >
    <p :style="views.textStyle"> {{views.content}}</p>
  </div>
</template>

<script>
export default {
  props: ['myStyle','views'],
  data() {
    return {
      textarea1: '',
    }
  }
}
</script>

<style scope>
input{
  outline: 0;
}
/* .card{
  width: 50px;
  height: 50px;
  text-align: center;
  margin: 0 auto;
  line-height: 50px;
  background: #00f;
  margin-top: 5px;
  position: absolute;
  color: aliceblue;
} */
</style>