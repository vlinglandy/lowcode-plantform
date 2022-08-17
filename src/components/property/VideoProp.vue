<template>
   <div>
    <div class='lineBox'>
      <div class="label" @click="click">链接</div>
      <!-- <div class="srcline"> -->
        <input v-model="views.src">
      <!-- </div> -->
    </div>
    <!-- <el-upload
      class="upload-demo"
      multiple
    >
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload> -->
    <div class='lineBox'>
      <div class="label">链接标题</div>
      <input v-model="views.content">
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
    click(e) {
      console.log(this.views.style);
      console.log(e.target.style);
    }
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

.srcline {
  display: flex;
  align-items: center;
  justify-self: start;
}

.lineBox .srcline input {
  text-indent: 2px;
}
</style>