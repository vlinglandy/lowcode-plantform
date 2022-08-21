<template>
   <div>
    <div class='lineBox'>
      <div class="label">链接</div>
      <!-- <div class="srcline"> -->
        <input v-model="views.src">
      <!-- </div> -->
    </div>
    <el-upload
      action="upload"
      :on-success="success"
      :show-file-list="false"
      :before-upload="beforeUpload"
    >
      <el-button   size="small" type="primary">点击上传</el-button>
    </el-upload>
    <div class='lineBox'>
      <div class="label">链接标题</div>
      <input v-model="views.content">
    </div>

  </div>
</template>

<script>
import { Message } from 'element-ui';
export default {
  props: ["views"],
  data() {
    return {

    }
  },
  methods: {
    success(response) {
      this.views.src = 'http://127.0.0.1:3001/'+response.path.slice(7)
    },
    beforeUpload(file){
      const isMP4 = file.type === 'video/mp4';
      const isLt30M = file.size / 1024 / 1024 < 30;
       if (!isMP4) {
          Message.error('上传视频只能是 MP4 格式!');
        }
        if (!isLt30M) {
          Message.error('上传视频大小不能超过 30MB!');
        }
        return isMP4 && isLt30M;
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