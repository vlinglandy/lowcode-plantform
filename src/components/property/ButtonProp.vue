<template>
  <div>
    <container>
      <div class="label">按钮内容</div>
      <el-input class="input" v-model="views.content"></el-input>
    </container>
    <container>
      <div class="label">按钮尺寸</div>
       <el-button size="mini">small</el-button>
       <el-button size="mini">medium</el-button>
       <el-button size="mini">large</el-button>
    </container>
    <container>
      <div class="label label-switch">禁用</div>
      <el-switch 
        v-model="views.disabled"
        active-color="#409eff"
        inactive-color="#dcdfe6"
        >
      </el-switch>
    </container>
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

<style lang="scss" scoped>
container {
  display: flex;
  margin-top: 14px;
}
.input {
  float: right;
  width: 60%;
  line-height: 12px;
  font-size: 12px;
}
.label {
  display: flex;
  justify-content: center;
  font-size: 12px;
  align-items: center;
  margin-right: 20px;
  margin-left: 5px;
  &-switch{
  margin-right: 42px;
 }
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