<template>
  <div :style="views.style">
    <video ref="video"  class="video-js vjs-default-skin vjs-big-play-centered a-video"
      :src="videoSrc" controls>
      <source :src="videoSrc" />
    </video>
  </div>

</template>

<script>
export default {
  props: ["views"],
  data() {
    return {
      player: null, // 用来存储当前 videoS
      videoSrc: '',
      render: true
    };
  },
  mounted() {
    // 渲染视频
    this.player = this.$video(this.$refs.video);
  },
  computed: {
    url() {
      return this.views.src;
    },
  },
  watch: {
    'views.src': {
      deep: true,
      immediate: true,
      handler(newVal) {
        this.videoSrc = newVal
      },
    },
    'views.videoStyle': {
      deep: true,
      handler(newVal, oldVal) {
        console.log(newVal, oldVal)
        document.documentElement.style.setProperty('--width', `${newVal.width}`)
        document.documentElement.style.setProperty('--height', `${newVal.height}`)
      },
    },
  },
};
</script>

<style scope>
:root{
  --width:300px;
  --height:200px;
}
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

.a-video {
  width: var(--width);
  height: var(--height);
}
</style>