<template>
  <div>
    <div class='lineBox'>
      <div class="label">字体大小</div>
      <input v-model="views.linkStyle.fontSize">
    </div>
    <div class='lineBox'>
      <div class="label">加粗</div>
      <el-switch v-model="views.linkStyle.fontWeight" active-value="700" inactive-value="400"></el-switch>
    </div>
    <div class='lineBox'>
      <div class="label">下划线</div>
      <el-switch v-model="views.linkStyle.textDecoration" active-value="underline" inactive-value="none"></el-switch>
    </div>
  </div>


</template>

<script>
export default {
  props: ["views"],
  data() {
    return {
      value1: true,
    }
  },
}
</script>

<style>
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