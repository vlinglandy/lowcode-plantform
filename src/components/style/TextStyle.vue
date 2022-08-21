<template>
    <div>
      <div class='module'>字体</div>
      <div class='lineBox border smaller'>
      <div class="label">字体颜色</div>
      <el-color-picker size="mini" v-model="views.textStyle.color" show-alpha></el-color-picker>
     </div>
      <div class='lineBox border smaller'>
      <div class="label">字体</div>
      <div class="inputLine" >
      <select class="select-box" v-model="views.textStyle.fontFamily" name="select">
          <option v-for="(t,index) in fontFamily" :key="index">{{t}}</option>
        </select>
      </div>
    </div>
      <div class='lineBox border smaller'>
      <div class="label">字体大小</div>
      <div class="inputLine" >
      <input :value="views.textStyle.fontSize.replace('px','')" @input="views.textStyle.fontSize=$event.target.value+'px'" autocomplete="off" placeholder="0">
      <span>px</span>
      </div>
      </div>
      <div class='lineBox border smaller'>
      <div class="label">字体粗细</div>
      <div class="inputLine" >
      <select class="select-box" v-model="views.textStyle.fontWeight" name="select">
          <option v-for="(t,index) in textBold" :key="index">{{t}}</option>
        </select>
      </div>
      </div>
      <div class='lineBox'>
      <div class="label">斜体</div>
      <el-switch v-model="views.textStyle.fontStyle" active-value="italic" inactive-value="normal"></el-switch>
    </div>
      


      <div class='module'>文本</div>
     
      <div class='right-line border'>
        <div class="label">装饰线</div>
        <el-radio-group v-model="views.textStyle.textDecoration"  size="mini">
        <el-radio-button label="none">无</el-radio-button>
        <el-radio-button label="line-through">中间</el-radio-button>
        <el-radio-button label="underline">底部</el-radio-button>
        </el-radio-group>
      </div>
      <div class='lineBox border smaller'>
      <div class="label">行高</div>
      <div class="inputLine" >
      <input :value="views.textStyle.lineHeight.replace('px','')" @input="views.textStyle.lineHeight=$event.target.value+'px'" autocomplete="off" placeholder="0">
      <span>px</span>
      </div>
      </div>
   
    <div class='lineBox border smaller'>
      <div class="label">缩进</div>
      <div class="inputLine" >
      <select class="select-box" :value="views.textStyle.textIndent.replace(/[a-z%]+/,'')" @input="views.textStyle.textIndent=$event.target.value + unit" autocomplete="off" name="select">
          <option  selected value="0" >0</option>
          <option v-for="(t,index) in textIndent" :key="index">{{t}}</option>
        </select>
        <select class="select-box" v-model="unit" name="select" >
          <option v-for="(t,index) in Units" :key="index">{{t}}</option>
        </select>
      </div>
    </div>
    <div class='module'>定位</div>
      <div class='right-line border'>
        <div class="label">水平对齐</div>
        <el-radio-group v-model="views.textStyle.textAlign"  size="mini">
        <el-radio-button label="left">左</el-radio-button>
        <el-radio-button label="center">中</el-radio-button>
        <el-radio-button label="right">右</el-radio-button>
        </el-radio-group>
      </div>
      <div class='right-line border'>
        <div class="label">垂直对齐</div>
        <el-radio-group v-model="views.textStyle.verticalAlign"  size="mini">
        <el-radio-button label="top">上</el-radio-button>
        <el-radio-button label="middle">中</el-radio-button>
        <el-radio-button label="bottom">下</el-radio-button>
        </el-radio-group>
      </div>
      <div class='lineBox border smaller'>
      <div class="label">间距</div>
      <div class="inputLine" >
      <input :value="views.textStyle.letterSpacing.replace('px','')" @input="views.textStyle.letterSpacing=$event.target.value+'px'" autocomplete="off" placeholder="0">
      <span>px</span>
      </div>
      </div>
    

    

    
  </div>
</template>

<script>
export default {
    props:["views"],
    data() {
        return {
          unit:'em',
          textBold:['100','200','300','500','600','600','700','800','900'],
          Units:['em','px'],
          textIndent:['1','2','3','4','5','6','7','8','9','10'],
          fontFamily:['Helvetica Neue','Helvetica',"PingFang SC","Hiragino Sans GB",'Microsoft YaHei','Arial','sans-serif']
        }
    },
}
</script>
<style lang="scss" scoped>
.select-box{
  border: 1px  solid #DCDFE6;
  height: 100%;
  text-indent: 0%;
}
.label{
  font-size: 12px;
  color: #444;
}
.smaller{
  margin-top:7px;
  margin-bottom:7px;
  padding-bottom: 5px;
}
.border{
  border-bottom:1px solid #eee;
}
.module{
  width:280px;
  height:26px;
  margin-top:3px;
  padding-bottom: 5px;
  background-color:rgb(219, 226, 242);
  text-align:left;
  font-weight:700;
  text-indent:1em;
  line-height:36px
}
// 8.18 hp更改样式(以下)
.right-line{
  display: flex;
  padding: 7px 5px 7px 12px;
  width: 100%;
  font-size: 14px;
  align-items: center;
  .label {
  width: 70px;
  height: 100%;
  padding-top:3px;
  text-align: left;
 
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