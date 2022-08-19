<template>
  <div class="RealTimeView">
    <el-dialog title="预览" :v-loading="loading" :visible.sync="releaseVisiable" :show-close="false" width="750px" top="8vh">
      
      <iframe
        v-if="releaseVisiable"
        ref="iframe"
        class="screen"
        :scrolling="false"
        :src="'http://localhost:8080/release'"
        @load="load"
      ></iframe>
      <el-button @click.stop="unVisiable" size="mini">关闭</el-button>
      <!-- <van-loading v-if="loading" size="24px" vertical>加载中</van-loading> -->
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ['releaseVisiable','views'],
  data() {
    return {
      loading: true
    }
  },
  created(){
    
  },
  methods: {
    load() {
      this.loading = false
    //   this.$refs["iframe"].contentWindow.postMessage(this.val, "http://localhost:8080");
    },
    unVisiable(){
        this.$bus.$emit("switchState")
    }
  },
}
</script>

<style lang="scss" scoped>
.RealTimeView {
  .screen {
    width: 700px /*no*/;
    height: 447px /*no*/;
    border: 0;

    // 隐藏滚动条
    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
  }
}
</style>
