<template>
  <div class="link" :style="views.style" @click="linkClick">
    <a type="primary" :underline="false" :href="'https://' + views.link" :style="views.linkStyle" ref="linkCom">{{
        views.content
    }}
    </a>
  </div>
</template>

<script>
// import bus from '@/router/eventBus.js'
export default {
  props: [
    'views'
  ],
  data() {
    return {
      mode: 'edit'
    }
  },
  methods: {
    linkClick(e) {
      if (this.mode === 'edit') {//hp更改了跳转函数
        // e.stopPropagation()
        e.preventDefault() //编辑模式下阻止跳转，点击时返回属性
      }
    }
  }
}
</script>

<style scope>
.link {
  position: absolute;
  text-align: center;
  padding: 1px 10px;
}

.link a {
  color: #409EFF;
  text-decoration: none;
}
</style>