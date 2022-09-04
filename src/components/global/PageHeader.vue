<template>
  <div>
    <header class="header">
        <div class="logo">
          <div class="logo-img"></div>
          <div class="logo-text">LowCode AnyLayout</div>
        </div>
        <div class="operate">
          <!-- <el-button size="small" type="primary" plain @click="exportHtml2">导出 HTML V2</el-button> -->
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
    exportHtml2(){
      this.$bus.emit("exportHtml2")
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
.logo{
  display: flex;
  width: 150px;
  height: 45px;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;
}

.logo-img{
  width: 40px;
  height: 40px;
  background: url('../../assets/logo3.png');
  background-size: cover;
}

.logo-text{
  width: 80px;
  height: 40px;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  text-align: center;
}

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