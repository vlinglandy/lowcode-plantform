import { nanoid } from 'nanoid';
import commonData from '@/data/commonData.js'//改动
import { deepClone } from '@/utils/deepClone.js'
import { exportHtmlHandle } from '@/utils/exportHtml.js'

export function eventHandle(eventArr,that){
    for(let eName of eventArr){
        switch( eName ){
            case 'saveJson': saveJson(that);break;
            case 'backOff' : backOff(that);break;
            case 'rootDelete' : rootDelete(that);break;
            case 'refreshCurrentViews' : refreshCurrentViews(that);break;
            case 'onCenter' : onCenter(that);break;
            case 'offCenter' : offCenter(that);break;
            case 'forward' : forward(that);break;
            case 'inputJson' : inputJson(that);break;
            case 'toPc' : toPc(that);break;
            case 'toPhone' : toPhone(that);break;
            case 'switchState' : switchState(that);break;
            case 'release' : release(that);break;
            case 'clearFocus' : clearFocus(that);break;
            case 'sendDeleteIndex' : sendDeleteIndex(that);break;
            case 'sonAddFlexBox' : sonAddFlexBox(that);break;
            case 'refreshCurrentCom' : refreshCurrentCom(that);break;
            case 'updateCurrentCom' : updateCurrentCom(that);break;
            case 'exportHtml' : exportHtml(that);break;
            case 'showDeleteDialog' : showDeleteDialog(that);break;
        }
    }
}

function saveJson(that){
    // 保存json接收
    that.$bus.$on("saveJson",() => {
        that.getJson();
    })
}

function showDeleteDialog(that){
    that.$bus.$on("showDeleteDialog",()=>{
        if(that.edit)that.dialogVisible = true
    })
}

function backOff(that){
    //后退
    that.$bus.$on("backOff",() => {
        that.step = that.step - 1
        that.views = JSON.parse(sessionStorage.getItem(String(--that.step))) 
        console.log('后退到',that.step)
    })
}
function rootDelete(that){
  // 核心删除
  that.$bus.$on("rootDelete",() => {
    that.rootDelete()
  })
}
function refreshCurrentViews(that){
  // 更新当前要修改的views和index
  that.$bus.$on("refreshCurrentViews",(views,index) => {
    that.currentViews = views
    that.currentViewsIndex = index
  })
}
function onCenter(that){
  // 判定为中间组件
  that.$bus.$on("onCenter",() => {
    that.centerCom = true
  })
}
function offCenter(that){
    // 判定为非中间组件
    that.$bus.$on("offCenter",() => {
        that.centerCom = false
    })
}
function forward(that){
    //前进
    that.$bus.$on("forward",() => {
        that.views = JSON.parse(sessionStorage.getItem(String(that.step))) 
        console.log('前进到',that.step)
    })
}

function inputJson(that){
  // 导入json事件接收inputJson
  that.$bus.$on("inputJson",(data) => {
    that.views = data
  })
}

function toPc(that){
  // 转换pc事件
  that.$bus.$on("toPc",() => {
    that.isPhone = false
  })
}

function toPhone(that){
  // 转换phone事件
  that.$bus.$on("toPhone",() => {
    that.isPhone = true
  })
}

function switchState(that){
  // 切换编辑/预览状态
  that.$bus.$on("switchState",()=>{
    that.$bus.$emit("clearFocus")
    that.edit = !that.edit
  })
}

function release(that){
  // 发布事件
  that.$bus.$on("release",()=>{
    console.log("发布页面");
    localStorage.setItem("views",JSON.stringify(that.views))
    let target = that.$refs.link
    target.setAttribute('href', window.location.origin + '/release')
    // target.click((e)=>e.stopPropagation())
    window.open(target.href)
  })
}

function clearFocus(that){
  // 清除被点击样式
  that.$bus.$on("clearFocus",()=>{
    that.showButton=false
    for(let i=0;i<that.views.length;i++){
      that.views[i].focus=false
      if(that.views[i].children){
        for(let j=0; j< that.views[i].children.length;j++){
          that.views[i].children[j].focus=false
        }
      }
    }
  })
}

function sendDeleteIndex(that){
    that.$bus.$on('sendDeleteIndex',(index)=>{
        that.currentIndex = index
      })
}

function sonAddFlexBox(that){
    // 子组件添加弹性盒子
    that.$bus.$on("sonAddFlexBox",(data)=>{
        console.log(that.views);
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
        console.log(that.views);
        // 激活向右发送数据事件
        that.$bus.$emit('views',newData);
    })
}

function refreshCurrentCom(that){
  // 更新当前拖拽选中的组件为中心组件
  that.$bus.$on("refreshCurrentCom",(data)=>{
    that.centerCom = data
  })
}

function updateCurrentCom(that){
  // 更新当前拖拽选中的组件
  that.$bus.$on("updateCurrentCom",(data)=>{
    that.currentCom = data
  })
}

function exportHtml(that){
  // 导出html
  that.$bus.$on("exportHtml",()=>{
    exportHtmlHandle(that.views)
  })  
}

