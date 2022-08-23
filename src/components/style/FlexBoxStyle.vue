<template>

  <div>
    <div class='module'>布局</div>
    <conponent v-for="(datas,index) in datas[0]"
    :key="index" 
    :is="datas.flag" 
    :datas="datas" 
    :views="views"
    ></conponent>
    <div class='right-line'>
      <div class='label'>边距</div>
    </div>
  <!--8.18 hp更改(以下) -->
  <div class="margin-container">
        <div class="borderTop"><input placeholder="0"  :value="views.style.marginTop.replace('px','')"  @input="views.style.marginTop=$event.target.value+'px'"></div>
        <div class="borderBt"><input  placeholder="0"  :value="views.style.marginBottom.replace('px','')"  @input="views.style.marginBottom=$event.target.value+'px'"></div>
        <div class="borderLf"><input  placeholder="0"  :value="views.style.marginLeft.replace('px','')"  @input="views.style.marginLeft=$event.target.value+'px'"></div>
        <div class="borderRt"><input  placeholder="0"  :value="views.style.marginRight.replace('px','')"  @input="views.style.marginRight=$event.target.value+'px'"></div>
        <div class="padding-containner">
            <div class="borderTop"><input placeholder="0" :value="views.style.paddingTop.replace('px','')"  @input="views.style.paddingTop=$event.target.value+'px'"></div>
            <div class="borderBt"><input  placeholder="0" :value="views.style.paddingBottom.replace('px','')"  @input="views.style.paddingBottom=$event.target.value+'px'"></div>
            <div class="borderLf"><input  placeholder="0" :value="views.style.paddingLeft.replace('px','')"  @input="views.style.paddingLeft=$event.target.value+'px'"></div>
            <div class="borderRt"><input  placeholder="0" :value="views.style.paddingRight.replace('px','')"  @input="views.style.paddingRight=$event.target.value+'px'"></div>
        </div>
    </div>
<!--8.18 hp更改(以上) -->
 <div class='module'>边框</div>
   <conponent v-for="(datas,index) in datas[1]"
    :key="index" 
    :is="datas.flag" 
    :datas="datas" 
    :views="views"
    ></conponent>  
  </div>
</template>

<script>
export default {
    data() {
        return {
            datas:[[
              {flag:"colorChoose",label:"背景颜色",style:"style",comprop:"backgroundColor"},
              {flag:"selectGroup",label:"主轴方向",style:"style",comprop:"flexDirection",options:[{label:"row",content:"横向"},{label:"reset",content:"竖向"}]},
              {flag:"selectGroup",label:"主轴对齐",style:"style",comprop:"justifyContent",options:[{label:"flex-start",content:"前"},{label:"center",content:"中间"},{label:"flex-end",content:"后"},{label:"space-around",content:"均匀"},{label:"space-between",content:"两侧"}]},
              {flag:"selectGroup",label:"侧轴对齐",style:"style",comprop:"alignItems",options:[{label:"flex-start",content:"前"},{label:"center",content:"中间"},{label:"flex-end",content:"后"},{label:"space-around",content:"均匀"},{label:"space-between",content:"两侧"}]},
              {flag:"selectGroup",label:"换行",style:"style",comprop:"flexWrap",options:[{label:"warp",content:"换行"},{label:"nowarp",content:"不换行"}]},
              ],[
              {flag:"colorChoose",label:"背景颜色",style:"style",comprop:"borderColor"},
              {flag:"selectGroup",label:"BoxSizing",style:"style",comprop:"boxSizing",options:[{label:"content-box",content:"content"},{label:"border-box",content:"border"}]},
              {flag:"selectGroup",label:"边框样式",style:"style",comprop:"flexWrap",options:[{label:"solid",content:"实线"},{label:"dashed",content:"虚线"},{label:"dotted",content:"点线"}]},
              {flag:"numInput",label:"边框宽度",style:"style",comprop:"borderWidth",unitSelect:false},
              {flag:"numInput",label:"边框圆角",style:"style",comprop:"borderRadius",unitSelect:false},
              ]
            ]
        }
    },
    props:["views"]
}
</script>
<style lang="scss" scoped>
</style>