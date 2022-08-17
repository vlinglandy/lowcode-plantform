<template>
  <div>
    <!-- 字体大小 -->
    <div class="text">
      <div class="label">字体大小</div>
      <el-select v-model="views.textStyle.fontSize" 
        placeholder="请选择" class="input">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <!-- 文本内容 -->
    <div class="text">
      <div class="label">文本内容</div>
      <el-input class="input" 
        type="textarea"
        :rows="4"
        placeholder="请输入内容"
        v-model="views.content">
      </el-input>
    </div>
    <!-- 是否加粗 -->
     <div class='text text-strong'>
      <div class="label ">是否加粗</div>
      <el-switch v-model="views.textStyle.fontWeight" 
        active-value="700" inactive-value="400">
      </el-switch>
    </div>
    <div class='text'>
      <div class="label">下划线</div>
      <el-switch v-model="views.textStyle.textDecoration" 
        active-value="underline" inactive-value="none">
      </el-switch>
    </div>
    <div class='text'>
      <div class="label">删除线</div>
      <el-switch v-model="views.textStyle.textDecoration" 
        active-value="line-through" inactive-value="none">
      </el-switch>
    </div>

  </div>
</template>

<script>
export default {
    props:["views"],
    data() {
        return {
            options: [{
              value: 'default',
              label: '默认'
            }, {
              value: 'h1',
              label: 'h1'
            }, {
              value: 'h2',
              label: 'h2'
            }, {
              value: 'h3',
              label: 'h3'
            }, {
              value: 'h4',
              label: 'h4'
            }, {
              value: 'h5',
              label: 'h5'
            }, {
              value: 'h6',
              label: 'h6'
            }, {
              value: 'body',
              label: 'body'
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
  &-strong{
    margin-top: 90px;
  }
}
.input {
  width: 60%;
  height: 100%;
  box-sizing: border-box;
}

.label {
  width: 70px;
  height: 100%;
  text-align: left;
  align-items: center;
}
</style>