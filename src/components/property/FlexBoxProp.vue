<template>
  <div>
    <div class='lineBox'>
      <div class="label">文本内容</div>
      <input v-model="views.content">
    </div>
    <div class='lineBox'>
      <div class="label">宽度</div>
      <input v-model="views.style.width">
    </div>
    <div class='lineBox'>
      <div class="label">高度</div>
      <input v-model="views.style.height">
    </div>
    <div class='lineBox'>
      <div class="label">字体大小</div>
      <input v-model="views.style.fontSize">
    </div>
  <div class='lineBox'>
      <div class="label">行高</div>
     <input v-model="views.style.lineHeight">
    </div>
    
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props:["views"]
}
</script>

<style>

</style>