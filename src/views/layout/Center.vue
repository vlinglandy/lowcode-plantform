<template>
  <div class="center" :class="{phoneSize:isPhone}" @dragover="dropover" @drop.stop="drop">
    <div>
      <el-button
      v-show="currentIndex!==-1"
        class="deleteBtn"
        type="danger"
        icon="el-icon-delete"
        circle
        @click="dialogVisible = true"
      ></el-button>
    </div>

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
          draggable="true"
          class="component-hover"
          :class="index == currentIndex ? 'selected' : ''"
          :myStyle="view.style"
          :is="view.component"
        >
        </component>
      </div>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <span>确定删除这个组件吗</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="delCom"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
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
      isPhone: false,
      dialogVisible:false,
      centerCom: false, //是否是画布内的组件
      currentCom: {}, //选中的组件
      currentIndex: -1,//选中组件的索引
      views: [],// 主要视图数据
    };
  },
  mounted() {
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
      if (this.centerCom) {
        console.log("在画布中的组件");
        this.currentCom.style.left = e.offsetX + "px";
        this.currentCom.style.top = e.offsetY + "px";
        this.centerCom = false;
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
    }
    // 自由布局的数据统一处理
  },
  components: {
    ButtonCom,
    ImgCom,
    LinkCom,
    TextCom,
    VideoCom
  },
};
</script>

<style scoped>

.block{
  box-sizing: border-box;
}
.center {
  margin: 5px 10px 0 10px;
  position: relative;
  height: 100%;
  box-sizing: border-box;
  box-shadow: 0 0 20px #ccc;
  overflow: scroll;
}

.center::-webkit-scrollbar{
  display:none
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
  border: 2px solid rgba(0,108,255);
}
.tpl-container {
  cursor: pointer;
}

.component-hover:hover{
  border: 1px dashed rgb(0,108,255);
}

.deleteBtn {
  float: right;
}
</style>