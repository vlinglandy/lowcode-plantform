<template>
  <div>
    <div class='lineBox'>
      <div class="label">文本内容</div>
      <input v-model="views.content">
    </div>
    <!--8.18 hp更改 (以下)-->
    <div class='lineBox'>
      <div class="label">宽度</div>
      <div class="inputLine" >
      <input :value="views.style.width.replace('px','')" @input="views.style.width=$event.target.value+'px'" autocomplete="off">
      <span>px</span>
      </div>
    </div>
    <div class='lineBox'>
      <div class="label">高度</div>
      <div class="inputLine">
        <input :value="views.style.height.replace('px','')" @input="views.style.height=$event.target.value+'px'" autocomplete="off">
      <span>px</span>
      </div>
    </div>
    <div class='lineBox'>
      <div class="label">字体大小</div>
      <div class="inputLine">
        <input :value="views.style.fontSize.replace('px','')" @input="views.style.fontSize=$event.target.value+'px'" autocomplete="off">
      <span>px</span>
      </div>
    </div>
  <div class='lineBox'>
      <div class="label">行高</div>
      <div class="inputLine">
        <input :value="views.style.lineHeight.replace('px','')" @input="views.style.lineHeight=$event.target.value+'px'" placeholder="0" autocomplete="off">
      <span>px</span>
      </div>
    </div>
    <!--8.18 hp更改 (以上)-->
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

<style lang="scss" >//8.18 hp更改
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
.inputLine{
  display: flex;
  align-items: center;
  justify-content:flex-start;
  width:60%;
  input{
    text-indent: 1em;
  }
  span{
     text-indent: 1em;
  }
}//------
</style>