<template>
  <div>
    <div class='lineBox'>
      <div class="label">宽度</div>
      <input v-model="views.style.width">
    </div>
    <div class='lineBox'>
      <div class="label">高度</div>
      <input v-model="views.style.height">
    </div>
     <div class='lineBox'>
      <div class="label">视频宽度</div>
      <input v-model="views.videoStyle.width">
    </div>
     <div class='lineBox'>
      <div class="label">视频高度</div>
      <input v-model="views.videoStyle.height">
    </div>
  </div>
</template>

<script>
export default {
  props: ["views"],
  data() {
    return {

    }
  },
  methods: {

  },
}
</script>

<style scoped>
.lineBox {
  display: flex;
  margin: 20px 12px;
  height: 28px;
  width: 100%;
  font-size: 14px;
  line-height: 28px;
}


.lineBox input {
  width: 60%;
  height: 100%;
  text-indent: 1em;
  align-items: center;
  border: 1px solid rgba(196, 198, 207, 1);
  outline-color: #419efe;
  border-radius: 2px;
  box-sizing: border-box;
}

.label {
  width: 70px;
  height: 100%;
  text-align: left;
  align-items: center;
}
</style>