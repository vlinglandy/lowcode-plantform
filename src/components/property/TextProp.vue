<template>
  <div>
   
    <!-- 文本内容 -->
    <div class='module'>文本内容</div>
    
      <!-- <textarea class='content' :value="views.content.replace('<br>','')" @input="views.content=$event.target.value.replace(/\n/g,'<br>')" placeholder="输入文本"  ></textarea> -->
    
    <textarea class='content' v-model="views.content"></textarea>

   

  </div>
</template>

<script>
export default {
    props:["views"],
    data() {
        return {
            
        }
    },
    method:{
      enter(e){
        e.target

      }
    }
}
</script>

<style lang="scss" scoped>
.content{
  width: 284px;
  height: 400px;
  border: 1px  solid #DCDFE6;
  outline:none;
  overflow:auto;
  resize: none;
  padding: 3px;
  white-space:pre-wrap
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