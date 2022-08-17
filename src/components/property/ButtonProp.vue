<template>
  <div>

    <div class="btn">
      <div class="label">按钮内容</div>
      <el-input class="input" v-model="views.content"></el-input>
    </div>

    <div class="btn">
      <div class="label">按钮尺寸</div>
       <el-button size="mini" >small</el-button>
       <el-button size="mini">medium</el-button>
       <el-button size="mini">large</el-button>
    </div>

    <div class="btn">
      <div class="label label-switch">禁用</div>
      <el-switch class="switch"
        v-model="views.disabled"
        active-color="#409eff"
        inactive-color="#dcdfe6"
        active-value= true 
        inactive-value= false
        >
      </el-switch>
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
    // btnDisableChange(){
    //     this.views.disabled = !this.views.disabled
    //   }
    },
}
</script>

<style lang="css" scoped>
.btn {
  display: flex;
  margin: 30px 12px;
  height: 28px;
  width: 100%;
  font-size: 12px;
  line-height: 28px;
}
.input {
  width: 60%;
  height: 100%;
  box-sizing: border-box;
}

.label {
  width: 70px;
  height: 100%;
  text-align: left;
  align-items: center;
}
.label-switch {
  margin-top: 10px;
  margin-right: 14px;
}
.switch{
  margin-top: 10px;
}
.el-button+.el-button{
    margin-left: -1px;
}
.el-button--mini {
    font-size: 12px;
    border-radius: 2px;
}
.el-button--small {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
}
</style>