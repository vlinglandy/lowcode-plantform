<template>
  <div>
    <container>
      <!-- 按钮字号 -->
      <div class="label">字号</div>
      <el-input-number controls-position="right" class="input-font-size"
      v-model="views.style.fontSize" 
      @change="handleChange" 
      :min="0" 
      :max="50"
      placeholder="12">
      <span>px</span>
      </el-input-number>

      <!-- 按钮行高 -->
      <div class="label">行高</div>
        <el-input-number controls-position="right" class="input-line-height"
        v-model="views.style.lineHeight" 
        @change="handleChange"
        :min="0" 
        :max="50"
        placeholder="12">
        <span>px</span>
       </el-input-number>
    </container>

    <!-- 字重 -->
    <container>
      <div class="label">字重</div>
      <el-select v-model="views.value" placeholder="请选择">
        <el-option
          v-for="item in views.options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </container>

    <!-- 文字、背景颜色 -->
    <container>
       <div class="label">文字颜色</div>
       <el-color-picker v-model="views.style.color" size="small"></el-color-picker>
       
       <div class="label">背景颜色</div>
      <el-color-picker v-model="views.style.backgroundColor" size="small"></el-color-picker>
    </container>

    <!-- 透明度 -->
    <container>
       <div class="block">
        <span class="label demonstration">透明度</span>
        <el-slider class="slider-opacity" v-model="views.style.opacity"></el-slider>
      </div>
    </container>

    <!-- 边框 -->
    
  </div>
</template>

<script>
export default {
    props:["views"],
    data() {
    return {
      // num: 1,    
      }
    },
}
</script>

<style lang="scss" scoped>
container {
  display: flex;
  margin-top: 14px;
}
.input {
  float: right;
  width: 50%;
  line-height: 12px;
  font-size: 12px;
  &-font-size{
    width:30%;
    margin-right: 15px;
  }
  &-line-height{
    width:30%;
  }
}
.label {
  display: flex;
  justify-content: center;
  font-size: 12px;
  align-items: center;
  margin-right: 10px;
  margin-left: 5px;
}
.el-button+.el-button{
    margin-left: -1px;
}
.el-button--mini {
    font-size: 12px;
    border-radius: 2px;
}
.el-button--small {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
}
slider{
  &-opacity{
    display: flex;
  }
}
</style>