<template>
<div style="position: absolute;" :style="myStyle">
  <video
    ref="video"
    class="video-js vjs-default-skin vjs-big-play-centered"
    width="400"
    height="300"
    controls
  >
    <source :src="url" />
  </video>
</div>
  
  <!-- <video
    src="http://vjs.zencdn.net/v/oceans.mp4"
    controls
  ></video> -->
</template>

<script>
export default {
  props: ["myStyle","src"],
  data() {
    return {
      player: null, // 用来存储当前 videoS
    };
  },
  mounted() {
    // 渲染视频
    this.player = this.$video(this.$refs.video);
    this.$refs.video.style = "";
  },
  computed: {
    url() {
      return this.src || 'http://vjs.zencdn.net/v/oceans.mp4';
    },
  },
  watch: {
    src: {
      immediate: true,
      handler(newVal, oldVal) {
        console.log("oldVal:", oldVal);
        console.log("newVal:", newVal);
      },
    },
  },
};
</script>

<style scope>
.video-js .vjs-big-play-button {
  font-size: 2.5em !important;
  line-height: 2.3em !important;
  height: 2.5em !important;
  width: 2.5em !important;
  -webkit-border-radius: 2.5em !important;
  -moz-border-radius: 2.5em !important;
  border-radius: 2.5em !important;
  background-color: #73859f;
  background-color: rgba(115, 133, 159, 0.5) !important;
}
.vjs-big-play-button .vjs-icon-placeholder {
  font-size: 1.63em !important;
}
.video-js .vjs-time-control {
  display: block !important;
}
.video-js .vjs-remaining-time {
  display: none !important;
}


</style>