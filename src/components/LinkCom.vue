<template>
  <div :style="myStyle" class="link"><a :href="link" target="_blank" @click="linkClick">{{ content }}</a></div>
</template>

<script>
// import bus from '@/router/eventBus.js'
export default {
  props: [
    'comContent',
    'myStyle'
  ],
  data() {
    return {
      link: this.comContent.link,
      content: this.comContent.content,
      mode: 'edit',
      // mode: 'preview'
    }
  },
  methods: {
    linkClick(e) {
      if (this.mode === 'edit') {
        e.preventDefault() //编辑模式下阻止跳转，点击时返回属性
        this.$bus.$emit('shareLink', { link: this.link, content: this.content }) //使用vue.$emit向right窗口发送属性
      }
    }
  }
}
</script>

<style scope>
.link {
  text-align: center;
  margin: 0 auto;
  line-height: 50px;
  position: absolute;
}

.link a {
  color: #3370ff;
  text-decoration: none;
}


</style>