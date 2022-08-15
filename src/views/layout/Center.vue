<template>
  <div class="center" @click="showMainBtn" :class="{phoneSize:isPhone,mainBtn:showButton}" @dragover="dropover" @drop.stop="drop">
    <div v-if="edit">
      <el-button
      v-show="currentIndex!==-1"
        class="deleteBtn"
        type="danger"
        icon="el-icon-delete"
        circle
        @click="dialogVisible = true"
      ></el-button>
    </div>
    <!-- 展示中间按钮 -->
    <CenterButton @click.stop.native="addFlexBox" v-if="showButton"></CenterButton>
    <div
      class="block"
      v-for="(view, index) in views"
      :key="view.id"
      @dragstart="dragstart(view, index)"
    >
      <div @click="select(index,view)" class="tpl-container">
        <component
          :comContent="view.comContent"
          :views="view"
          :draggable="edit"
          :class="{componenthover:edit, selected:index == currentIndex && edit}"
          :myStyle="view.style"
          :is="view.component"
          :edit="edit"
        >
        </component>
      </div>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      v-if="edit"
    >
      <span>确定删除这个组件吗</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="delCom"
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
  },
  methods: {
    //删除组件
    delCom(){
      this.views.splice(this.views.indexOf(this.currentCom),1)
      this.currentIndex = -1
      this.dialogVisible = false
      this.cleanSendView()
    },
    //选中组件
    select(index,view) {
      this.currentCom = view
      this.currentIndex = index;
      // 激活向右发送数据事件
      this.$bus.$emit('views',view);
    },
    dragstart(view, index) {
      this.centerCom = true;
      this.currentCom = this.views[index];
    },
    drop(e) {
      console.log("=========drop========");
      e.preventDefault();
      if (this.centerCom && this.edit) {
        console.log("在画布中的组件");
        this.currentCom.style.left = e.offsetX + "px";
        this.currentCom.style.top = e.offsetY + "px";
        this.centerCom = false;
      }else{
        console.log(e);
        console.log(e.target);
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
      console.log(e);
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
    }
  },
  watch:{
    views:{
      deep:true,
      immediate:true,
       handler(newValue){
        if(this.step==1){
          //当为初始状态时
          sessionStorage.setItem(String(this.step),JSON.stringify([]))
        }else{
          sessionStorage.setItem(String(this.step),JSON.stringify(newValue))
        }
        //阶段+1
        this.step++
      },
    },
    step:{
      immediate:true,
      handler(newValue){
        this.$bus.$emit('getStep',--newValue)
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

.tpl-container {
  cursor: pointer;
}

.componenthover:hover{
  display: inline-block;
  /*hp修正点击组件因增加边框而偏移*/
  border: 1px solid transparent;
}

.deleteBtn {
  position:absolute;
  right: 0;
  top: 0;
  z-index: 100;
}
</style>