<template>
    <div :style="views.style" class="button-com">
     <button type="primary" 
     :style="views.btnStyle" 
     >
      {{views.content}}
     </button>
    </div>
</template>

<script>
export default {
  props: ['myStyle', 'views'],
  data() {
    return {
      //...
    }
  },
  methods: {
  },
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
}

.button-com{
  transition: all 0.2s;
}

.button-com:hover{
  opacity: 0.8;
}

</style>