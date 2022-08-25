<template>
  <div>
    <header class="header">
        <div class="logo">
          <img :src="require('@/'+'assets/logo3.png')" alt="">
        </div>
        <div class="operate">
          <el-button size="small" type="primary" plain @click="exportHtml">导出 HTML</el-button>
          <el-button size="small" type="primary" plain @click="exportVue">导出 Vue</el-button>
          <el-button size="small" type="primary" plain @click="sendSaveJsonEvent">导出 Json</el-button>
        </div>
    </header>
  </div>
</template>

<script>
export default {
  methods:{
    exportHtml(){
      this.$bus.emit("exportHtml",false)
    },
    exportVue(){
        this.$bus.emit("exportHtml",true)
    },
    sendSaveJsonEvent() {
      this.$bus.emit('saveJson')
    },
  }
}
</script>

<style scoped>
.header{
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  margin-bottom: 1px;
  position: fixed;
  top:0px;
  z-index:103;
}

.operate{
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>