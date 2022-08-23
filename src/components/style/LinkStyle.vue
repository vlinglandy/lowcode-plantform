<template>
  <div>
    <conponent v-for="(datas,index) in datas" 
    :key="index" 
    :is="datas.flag" 
    :datas="datas" 
    :views="views"
    ></conponent>
  </div>
</template>

<script>
export default {
  props: ["views"],
  data() {
    return {
      datas:[
        {flag:"numInput",label:"字体大小",style:"linkStyle",comprop:"fontSize",unitSelect:true},
        {flag:"colorChoose",label:"字体颜色",style:"linkStyle",comprop:"color"},
        {flag:"selectGroup",label:"装饰线",style:"linkStyle",comprop:"textDecoration",options:[{label:"none",content:"无"},{label:"line-through",content:"中间"},{label:"underline",content:"底部"}]},
        {flag:"selectCols" ,label:"字重",style:"linkStyle",comprop:"fontWeight",options:[{label:"400",content:"400"},{label:"700",content:"700"},{label:"900",content:"900"}]},
      ]
    }
  }
}
</script>

<style>
</style>