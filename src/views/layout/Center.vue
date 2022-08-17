<template>
  <div class="center" @click="showMainBtn" :class="{phoneSize:isPhone,mainBtn:showButton && edit}" @dragover="dropover" @drop.stop="drop">
    <!-- 展示中间按钮 -->
    <CenterButton style="z-index:100;" @click.stop.native="addFlexBox" v-if="showButton && edit"></CenterButton>
    <div
      class="block"
      v-for="(view, index) in views"
      :key="view.id"
      @dragstart.stop="dragstart(view, index)"
    >
      <div @click.stop="select(index,view)" @dragenter.stop="dragenterLight($event,view)" class="tpl-container">
        <component
          :comContent="view.comContent"
          :views="view"
          :draggable="edit && view.component!='FlexBox'"
          :class="{componenthover:edit, selected:index == currentIndex && edit && view == currentCom}"
          :myStyle="view.style"
          :is="view.component"
          :edit="edit"
          :centerCom="centerCom"
          :currentCom="currentCom"
        >
        </component>
      </div>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      v-if="edit"
      style="z-index:100;"
    >
      <span>确定删除这个组件吗</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click.stop="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click.stop="delCom"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <a class="target" ref="link" href="" target="_blank" v-show="false"></a>
  </div>
</template>

<script>
import CenterButton from "@/components/button/CenterButton.vue"
import {nanoid} from 'nanoid';
import commonData from '@/utils/commonData.js'//改动
import {dataFormat} from '@/utils/dataFormat.js'
import {deepClone} from '@/utils/deepClone.js'
import FileSaver from 'file-saver'
import ButtonCom from "@/components/ButtonCom.vue"
import ImgCom from "@/components/ImgCom.vue"
import LinkCom from "@/components/LinkCom.vue"
import TextCom from "@/components/TextCom.vue"
import VideoCom from "@/components/VideoCom.vue"
export default {
  data() {
    return {
      showButton:true,
      edit: true,// 编辑模式false为预览模式
      isPhone: false,
      dialogVisible:false,
      centerCom: false, //是否是画布内的组件
      currentCom: {}, //选中的组件
      currentIndex: -1,//选中组件的索引
      views: [],// 主要视图数据
      step:1,
      begin:1,
      currentViews:[],// 当前要修改的views
      currentViewsIndex:-1,// 当前要修改的view所在currentViews的索引
    };
  },
  mounted() {
    //后退
    this.$bus.$on("backOff",() => {
      this.step = this.step - 1
      this.views = JSON.parse(sessionStorage.getItem(String(--this.step))) 
      console.log('后退到',this.step)
    })
    //前进
    this.$bus.$on("forward",() => {
      this.views = JSON.parse(sessionStorage.getItem(String(this.step))) 
      console.log('前进到',this.step)
    })
    // 判定为非中间组件
    this.$bus.$on("offCenter",() => {
      this.centerCom = false
    })
    // 判定为中间组件
    this.$bus.$on("onCenter",() => {
      this.centerCom = true
    })
    // 更新当前要修改的views和index
    this.$bus.$on("refreshCurrentViews",(views,index) => {
      this.currentViews = views
      this.currentViewsIndex = index
    })
    // 核心删除
    this.$bus.$on("rootDelete",() => {
      this.rootDelete()
    })
    // 保存json接收
    this.$bus.$on("saveJson",() => {
      this.getJson();
    })
    // 导入json事件接收inputJson
    this.$bus.$on("inputJson",(data) => {
      this.views = data
    })
    // 转换pc事件
    this.$bus.$on("toPc",() => {
      this.isPhone = false
    })
    // 转换phone事件
    this.$bus.$on("toPhone",() => {
      this.isPhone = true
    })
    // 切换编辑/预览状态
    this.$bus.$on("switchState",()=>{
      this.$bus.$emit("clearFocus")
      this.edit = !this.edit
    })
    // 发布事件
    this.$bus.$on("release",()=>{
      console.log("发布页面");
      localStorage.setItem("views",JSON.stringify(this.views))
      let target = this.$refs.link
      target.setAttribute('href', window.location.origin + '/release')
      // target.click((e)=>e.stopPropagation())
      window.open(target.href)
    })
    // 清除被点击样式
    this.$bus.$on("clearFocus",()=>{
      this.showButton=false
      for(let i=0;i<this.views.length;i++){
        this.views[i].focus=false
        if(this.views[i].children){
          for(let j=0; j< this.views[i].children.length;j++){
            this.views[i].children[j].focus=false
          }
        }
      }
    })
    this.$bus.$on('sendDeleteIndex',(index)=>{
      this.currentIndex = index
    })
    // 子组件添加弹性盒子
    this.$bus.$on("sonAddFlexBox",(data)=>{
      console.log(this.views);
      let num = data.children.length > 0 ? 1 : 2;
      var newData;
      for(let i = 0;i < num ;i++){
        newData = deepClone(commonData['Node'])
        // 数据统一处理
        newData.id = nanoid();
        // newData.comContent = commonData[data]//改定
        data.children.push(newData);
      }
      console.log("添加儿子");
      console.log(this.views);
      // 激活向右发送数据事件
      this.$bus.$emit('views',newData);
    })
    this.$bus.$on("showDeleteDialog",()=>{
      if(this.edit)this.dialogVisible = true
    })
    // 更新当前拖拽选中的组件为中心组件
    this.$bus.$on("refreshCurrentCom",(data)=>{
      this.centerCom = data
    })
    // 更新当前拖拽选中的组件
    this.$bus.$on("updateCurrentCom",(data)=>{
      console.log("激活了事件了啊，修改view");
      this.currentCom = data
      console.log(this.currentCom);
   })
  },
  methods: {
    //删除组件
    delCom(){
      this.currentViews.splice(this.currentViewsIndex,1)
      this.currentIndex = -1
      this.dialogVisible = false
      this.$bus.$emit("deleteFlexBoxCom")// 让flexbox中的views重置索引
      this.cleanSendView()
    },
    // 根据传递的数组和索引删除组件
    rootDelete(){
      this.currentViews.splice(this.currentViewsIndex,1)
    },
    //选中组件
    select(index,view) {
      this.$bus.$emit("clearFocus")
      // 全局相对寻址
      this.$bus.$emit("refreshCurrentViews",this.views,index)
      // 单views相对寻址
      this.currentCom = view
      this.currentIndex = index;
      this.$bus.$emit("deleteFlexBoxCom")// 重置每个组件的索引
      // 选中该flexbox
      if(view.component == 'FlexBox'){
        this.$bus.$emit("clearFocus")
        view.focus = true
      }
      // 激活向右发送数据事件
      this.$bus.$emit('views',view);
      
    },
    dragstart(view, index) {
      this.$bus.$emit("clearFocus")
      this.$bus.$emit("refreshCurrentViews",this.views,index)
      this.centerCom = true;
      this.currentCom = this.views[index];
    },
    // 组件拖拽时悬浮时高亮
    dragenterLight(e,view){
      e.preventDefault();
      this.$bus.$emit("clearFocus")
      view.focus = true
    },
    drop(e) {
      console.log("=========drop========");
      e.preventDefault();
      this.$bus.$emit("clearFocus")
      if (this.centerCom && this.edit) {
        if(this.currentCom.component == 'FlexBox')return //如果拖动的是弹性盒子就阻止
        console.log("在画布中的组件");
        this.currentCom.style.left = e.offsetX + "px";
        this.currentCom.style.top = e.offsetY + "px";
        this.centerCom = false;
        this.views.push(this.currentCom);
        this.rootDelete()
      }else{
        var data = e.dataTransfer.getData("attr");
        // 深拷贝拷贝默认组件样式
        var newData = deepClone(commonData[data])
        // 数据特殊化处理之后统一处理共同样式
        newData = dataFormat(data,newData);
        // 数据统一处理
        newData.id = nanoid();
        newData.style.left = e.offsetX + "px";
        newData.style.top = e.offsetY + "px";
        // newData.comContent = commonData[data]//改定
        this.views.push(newData);
        // 激活向右发送数据事件
        this.$bus.$emit('views',newData);
      }
      
    },
    dropover(e) {
      e.preventDefault();
    },
    getJson() {
      // 将json转换成字符串
      const data = JSON.stringify(this.views)
      const blob = new Blob([data], { type: '' })
      FileSaver.saveAs(blob, 'json.json')
    },
    // 向右边发送一个清除事件，让右侧不显示，防止出bug
    cleanSendView(){
      this.$bus.$emit("cleanView")
    },
    showMainBtn(e){
      e.preventDefault()
      this.$bus.$emit("clearFocus")
      this.showButton = true
    },
    // 向各个方向添加盒子
    addFlexBox(){
      console.log("添加弹性盒子");
      var newData = deepClone(commonData['FlexBox'])
      // 数据统一处理
      newData.id = nanoid();
      // newData.comContent = commonData[data]//改定
      this.views.push(newData);
      // 激活向右发送数据事件
      this.$bus.$emit('views',newData);
    },
    // 如果两个值是不是除了focus之外其他都一样
    judgeTwoValueIsEqual (objA, objB) {
      // 取对象 A 和 B 的属性名数组
      const aProps = Object.getOwnPropertyNames(objA)
      const bProps = Object.getOwnPropertyNames(objB)
      // 长度是否一致
      if (aProps.length !== bProps.length) {
        return false
      }
      // 循环取出属性名，再判断属性值是否一致
      for (let i = 0; i < aProps.length; i++) {
        const propName = aProps[i]
        const type = typeof objA[propName]
        if (type === 'object' && type != null) { // 值是对象类型就递归
          if (!this.judgeTwoValueIsEqual(objA[propName], objB[propName])) { // 注：不能直接返回方法
            return false
          }
        } else {
          if (objA[propName] !== objB[propName]) {
            if(propName != 'focus') return false // 如果不一样的是focus属性，则过滤掉，不判断
          }
        }
      }
      return true
    },
  },
  computed:{
    // watch获取不到复杂变化的oldvalue，所以用计算属性调整
    viewsCopy(){
      return JSON.parse(JSON.stringify(this.views))
    }
  },
  watch:{
    viewsCopy:{
      deep:true,
      immediate:true,
       handler(newValue,oldVal){
        if(!newValue || !oldVal) return 
        if(this.judgeTwoValueIsEqual(newValue,oldVal)) return 
        if(this.step==1){
          //当为初始状态时
          sessionStorage.setItem(String(this.step),JSON.stringify([]))
        }else{
          sessionStorage.setItem(String(this.step),JSON.stringify(newValue))
        }
        //阶段+1
        this.step++
        // 如果差距大于100就删前50个
        if(this.step - this.begin > 100){
          for(let i = this.begin;i < this.begin + 50;i++){
            sessionStorage.removeItem(String(i));
          }
          this.begin += 50
        }
      },
    },
    step:{
      immediate:true,
      handler(newValue){
        this.$bus.$emit('getStep',--newValue)
      }
    },
    currentIndex:{
      handler(newValue){
        this.$bus.$emit("selectEvent",newValue)
      }
    }
  },
  components: {
    ButtonCom,
    ImgCom,
    LinkCom,
    TextCom,
    VideoCom,
    CenterButton
  },
};
</script>

<style scoped>

.block{
  box-sizing: border-box;
  width: 100%;
}
.center {
  margin: 5px 10px 0 10px;
  position: relative;
  height: 100%;
  box-sizing: border-box;
  box-shadow: 0 0 20px #ccc;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
}

.center::-webkit-scrollbar{
  display:none
}

.mainBtn{
    position: absolute;
    left: 0;
    top: 40px;
    bottom: 0;
    right: 0;
    background-color: #baf8ff;
    border: 2px solid #06c;
    opacity: 0.5;
    z-index: 2;
}
.pcSize {
  width: 100%;
}

.phoneSize {
  width: 375px;
  height: 667px;
  margin: 10px auto;
}

.selected {
  /*hp修正点击组件因增加边框而偏移*/
  border: 1px solid rgba(0, 108, 255) !important
}

.tpl-container {
  cursor: pointer;
}

.component-hover {
  display: inline-block;
  /*hp修正点击组件因增加边框而偏移*/
  border: 1px solid transparent;
}

.component-hover:hover {
  border: 1px dashed rgb(0, 108, 255);
}


.deleteBtn {
  position:absolute;
  right: 0;
  top: 0;
  z-index: 100;
}
</style>