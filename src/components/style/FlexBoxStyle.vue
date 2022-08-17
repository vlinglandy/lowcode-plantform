<template>
  <div>
    backgroundColor
    <el-input v-model="views.style.backgroundColor"></el-input>
    justifuContent
    <el-input v-model="views.style.justifuContent"></el-input>
    alignItems
    <el-input v-model="views.style.alignItems"></el-input>
    display
    <el-input v-model="views.style.display"></el-input>
    flexDirection
    <el-input v-model="views.style.flexDirection"></el-input>
    width
    <el-input v-model="views.style.width"></el-input>
    height
    <el-input v-model="views.style.height"></el-input>
    position
    <el-input v-model="views.style.position"></el-input>
    marginTop
    <el-input v-model="views.style.marginTop"></el-input>
    marginLeft
    <el-input v-model="views.style.marginLeft"></el-input>
    marginBottom
    <el-input v-model="views.style.marginBottom"></el-input>
    marginRight
    <el-input v-model="views.style.marginRight"></el-input>
    paddingTop
    <el-input v-model="views.style.paddingTop"></el-input>
    paddingLeft
    <el-input v-model="views.style.paddingLeft"></el-input>
    paddingBottom
    <el-input v-model="views.style.paddingBottom"></el-input>
    paddingRight
    <el-input v-model="views.style.paddingRight"></el-input>
    boxSizing
    <el-input v-model="views.style.boxSizing"></el-input>
    owerflow
    <el-input v-model="views.style.owerflow"></el-input>
    top
    <el-input v-model="views.style.top"></el-input>
    
    borderStyle
    <el-input v-model="views.style.borderStyle"></el-input>
    borderWidth
    <el-input v-model="views.style.borderWidth"></el-input>
    borderColor
    <el-input v-model="views.style.borderColor"></el-input>
    fontSize
    <el-input v-model="views.style.fontSize"></el-input>
    borderRadius
    <el-input v-model="views.style.borderRadius"></el-input>
    lineHeight
    <el-input v-model="views.style.lineHeight"></el-input>
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

<style>

</style>