<template>

  <div>
    <div class='module'>布局</div>
     <div class='lineBox'>
      <div class="label">背景颜色</div>
      <el-color-picker size="mini" v-model="views.style.backgroundColor" show-alpha></el-color-picker>
    </div>

    <div class='right-line'>
      <div class="label">主轴方向</div>
      <el-radio-group v-model="views.style.flexDirection" size="mini">
      <el-radio-button label="row">row</el-radio-button>
      <el-radio-button label="cloumn">col</el-radio-button>
    </el-radio-group>
    </div>

    <div class='right-line'>
      <div class="label">主轴对齐</div>
      <el-radio-group v-model="views.style.justifyContent" size="mini">
      <el-radio-button label="flex-start">Left</el-radio-button>
      <el-radio-button label="center">Center</el-radio-button>
      <el-radio-button label="flex-end">Right</el-radio-button>
      <el-radio-button label="space-around">Around</el-radio-button>
      <el-radio-button label="space-between">Between</el-radio-button>
    </el-radio-group>
    </div>
  
    <div class='right-line'>
      <div class="label">侧轴对齐</div>
      <el-radio-group v-model="views.style.alignItems" size="mini">
      <el-radio-button label="flex-start">Top</el-radio-button>
      <el-radio-button label="center">Center</el-radio-button>
      <el-radio-button label="flex-end">Buttom</el-radio-button>
      <el-radio-button label="space-around">Around</el-radio-button>
      <el-radio-button label="space-between">Between</el-radio-button>
    </el-radio-group>
    </div>
    <div class='right-line'>
      <div class="label">换行</div>
      <el-radio-group v-model="views.style.flexWrap" size="mini">
      <el-radio-button label="warp">warp</el-radio-button>
      <el-radio-button label="nowarp">nowarp</el-radio-button>
      
    </el-radio-group>
    </div>
    
  
    <!-- display
    <el-input v-model="views.style.display"></el-input> -->
    
  
    <!-- position
    <el-input v-model="views.style.position"></el-input> -->


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
  <div class='lineBox'>
      <div class="label">边框颜色</div>
      <el-color-picker size="mini" v-model="views.style.borderColor" show-alpha></el-color-picker>
    </div>
    <div class='right-line'>
      <!--8.18 hp更改(以下一行) -->
      <div class="label" style="padding-top:4px">BoxSizing</div>
      <el-radio-group v-model="views.style.boxSizing" size="mini">
      <el-radio-button label="content-box">content</el-radio-button>
      <el-radio-button label="border-box">border</el-radio-button>
    </el-radio-group>
    </div>
    <!-- owerflow
    <el-input v-model="views.style.owerflow"></el-input> -->
    <!-- top
    <el-input v-model="views.style.top"></el-input> -->


    <div class='right-line'>
      <div class="label">边框样式</div>
      <el-radio-group v-model="views.style.borderStyle" size="mini">
      <el-radio-button label="solid">实线</el-radio-button>
      <el-radio-button label="dashed">虚线</el-radio-button>
      <el-radio-button label="dotted">点线</el-radio-button>      
    </el-radio-group>
    </div>

    <!--8.18 hp更改 (以下)-->
     <div class='lineBox'>
      <div class="label">边框宽度</div>
      <div class="inputLine" >
      <input :value="views.style.borderWidth.replace('px','')" @input="views.style.borderWidth=$event.target.value+'px'" autocomplete="off" placeholder="0">
      <span>px</span>
      </div>
    </div>

    <div class='lineBox'>
      <div class="label">边框圆角</div>
     <div class="inputLine" >
      <input :value="views.style.borderRadius.replace('px','')" @input="views.style.borderRadius=$event.target.value+'px'" autocomplete="off">
      <span>px</span>
      </div>
    </div>
<!--8.18 hp更改 (以上)-->
    <!-- lineHeight
    <el-input v-model="views.style.lineHeight"></el-input> -->
    
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
.module{
  width:100%;
  height:36px;
  margin-top:3px;
  background-color:rgb(219, 226, 242);
  text-align:left;
  font-weight:700;
  text-indent:1em;
  line-height:36px
}
// 8.18 hp更改样式(以下)
.right-line{
  display: flex;
  margin: 20px 12px;
  width: 100%;
  font-size: 14px;
  .rlabel {
  width: 70px;
  height: 100%;
  padding-top:3px;
  text-align: left;
  align-items: center;
}
  .el-radio-group{
  display: flex;
  width: 60%;
  flex-wrap:wrap;
  justify-content:flex-start;
   border-radius:0 !important;
  
} 
}

.el-radio-group ::v-deep .el-radio-button__inner{
  text-align: center;
   width: 50px;
   margin-right:1px;
   padding: 7px 0;
   border-radius:0;
   border: 1px solid #DCDFE6;
   box-shadow:none !important;
}
//---8.18 hp更改样式(以上)
.margin-container {
        position: relative;
        margin-left:15px;       
        height: 150px;
        border: 0px;
        box-sizing: border-box
    }
    
.margin-container input {
        position: absolute;
        text-align: center;
        background-color:inherit;
        z-index:99;
        outline:none;
        &:hover{
          color:rgb(64, 158, 255)
        }
        
    }
.margin-container div {
        position: absolute;
        width: 206px;
        height: 86px;
        
    }
    
  .borderTop {
        top: 0;
        left: 2px;
        border: 20px transparent solid;
        border-top-color: rgb(214, 228, 255);
        line-height: 16px;
        height: 20px;
        input{
          top:-20px;
          left:10%;
          width:80%;
          line-height:20px
        }
    }
  
  .borderBt {
        top: 4px;
        left: 2px;
        border: 20px transparent solid;
        border-bottom-color: rgb(214, 228, 255);
        height: 20px;
        input{
          bottom:-20px;
          left:10%;
          width:80%;
          line-height:20px
        }
    }
    
  .borderLf {
        top: 2px;
        left: 0;
        border: 20px transparent solid;
        border-left-color: rgb(214, 228, 255);
        input{
          top:10%;
          left:-20px;
          width:20px;
          height:80%
        }
    }
    
  .borderRt {
        top: 2px;
        left: 4px;
        border: 20px transparent solid;
        border-right-color: rgb(214, 228, 255);
        input{
          top:10%;
          right:-20px;
          width:20px;
          height:80%
        }
    }
    
  .padding-containner {
        top: 24px;
        left: 24px;
    }
    
  .padding-containner div {
        width: 158px;
        height: 38px;
    }
</style>