<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      v-if="edit"
      style="z-index:100;"
      :show-close="false"
    >
      <span>确定删除这个组件吗</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click.stop="unVisiable">取 消</el-button>
        <el-button type="primary" @click.stop="delCom"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
    props:['dialogVisible','edit'],
    methods: {
        delCom(){
            this.$emit("delComEvent")
        },
        unVisiable(){
            this.$emit("update:dialogVisible",false)
        }
    },
}
</script>

<style>

</style>