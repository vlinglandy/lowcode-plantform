<template>
    <div>
    <div class="text">
      <!-- 按钮字号 -->
      <div class="">字号</div>
      <el-input-number controls-position="right" class="input input-font-size"
      v-model="views.textStyle.fontSize" 
      @change="handleChange" 
      :min="0" 
      :max="50"
      placeholder="12">
      <!-- <span>px</span> -->
      </el-input-number>

      <!-- 按钮行高 -->
      <div class="">行高</div>
        <el-input-number controls-position="right" class="input input-line-height"
        v-model="views.textStyle.lineHeight" 
        :min="0" 
        :max="50"
        placeholder="12">
        <span>px</span>
       </el-input-number>
    </div>

    <!-- 字重 -->
    <div class="text">
      <div class="label">字重</div>
      <el-select v-model="views.textStyle.fontWeight" 
        placeholder="请选择" class="input">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

    <!-- 文字、背景颜色 -->
    <div class="text">
       <div class="label">文字颜色</div>
       <el-color-picker v-model="views.textStyle.color" size="small"></el-color-picker>
       
       <div class="label">背景颜色</div>
      <el-color-picker v-model="views.textStyle.backgroundColor" size="small"></el-color-picker>
    </div>

    <!-- 透明度 -->
    <div class="text">
       <div class="block">
        <span class="label demonstration">透明度</span>
        <el-slider class="slider-opacity" 
          v-model="views.textStyle.opacity"
          :format-tooltip="formatTooltip"></el-slider>
      </div>
    </div>

    <!-- 边框 -->
     <div class="text">
      <div class="label">圆角</div>
      <el-input class="input" 
        v-model="views.textStyle.borderRadius">
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
    props:["views"],
    data() {
        return {
             options: [{
        value: '100',
        label: '100 Thin'
      }, {
        value: '200',
        label: '200 Extra Light'
      }, {
        value: '300',
        label: '300 Light'
      }, {
        value: '400',
        label: '400 Normal'
      }, {
        value: '500',
        label: '500 Medium'
      }, {
        value: '600',
        label: '600 Semi Bold'
      }, {
        value: '700',
        label: '700 Bold'
      }, {
        value: '800',
        label: 'Extra Bold'
      }],
      value: '',
        }
    },
}
</script>
<style lang="scss" scoped>
.text {
  display: flex;
  margin: 30px 12px;
  height: 28px;
  width: 100%;
  font-size: 12px;
  line-height: 28px;
}
.input {
  width: 60%;
  height: 100%;
  box-sizing: border-box;
  &-font-size{
    height: 100%;
    width:30%;
    margin-right: 5px;
  }
  &-line-height{
    width:40%;
  }
}

.label {
  width: 70px;
  height: 100%;
  text-align: left;
  align-items: center;
}
</style>