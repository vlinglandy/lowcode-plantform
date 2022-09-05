import { nanoid } from 'nanoid';
import commonData from '@/data/commonData.js'//改动
import { deepClone } from '@/utils/deepClone.js'
import { exportHtmlHandle } from '@/utils/exportHtml.js'
import { register } from '@/api/sendOut.js'

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
            case 'switchPattern' : switchPattern(that);break;
            case 'save' : save(that);break;
            case 'reset' : reset(that);break;
            case 'onkeydown' : onkeydown(that);break;
        }
    }
}

function onkeydown(that){
  window.document.getElementsByClassName('DynamicDraw')[0].onkeydown = (e)=>{
    // 复制
    e.preventDefault();
    if(e.ctrlKey && e.key == 'c' && that.currentCom.component){
      that.copyViews = deepClone(that.currentCom);
      that.$message.success('复制成功，请在弹性盒子中粘贴')
    }
    // 粘贴
    if(e.ctrlKey && e.key == 'v' && that.copyViews.component && that.currentCom.component=='FlexBox'){
      that.currentCom.children.push(deepClone( that.copyViews ))
    }
    // 样式刷
    if(e.ctrlKey && e.key == 'b' && that.currentCom.component){
      if(that.currentCom.component == 'FlexBox'){
        that.brushStyle = deepClone(that.currentCom.style)
      }else{
        that.brushStyle = deepClone(that.currentCom[that.currentCom['sonStyle']])
      }
      that.$message.success('样式刷成功，按ctrl + Q粘贴样式')
    }
    // 涂抹
    if(e.ctrlKey && e.key == 'q' && that.brushStyle && that.currentCom.component){
      if(that.currentCom.component == 'FlexBox'){
        that.currentCom.style = deepClone( that.brushStyle )
      }else{
        that.currentCom[that.currentCom['sonStyle']] = deepClone( that.brushStyle )
      }
    }
  }
}
// function copy(that){
//   window.document.onkeydown = (e)=>{
//     if(e.ctrlKey && e.key == 'c' && that.currentCom.component){
//       that.copyViews = that.currentCom;
//       that.$message.success('复制成功，请在弹性盒子中粘贴')
//     }
//   }
  // that.$bus.on('copy',(views)=>{
  //   that.copyViews = views;
  //   that.$message.success('复制成功')
  // })
// }

// function paste(that){

  // window.document.onkeydown = (e)=>{
  //   if(e.ctrlKey && e.key == 'v' && that.copyViews.component && that.currentCom.component=='FlexBox'){
  //     that.currentCom.children.push(deepClone( that.copyViews ))
  //   }
  // }
  // that.$bus.on('paste',()=>{
  //   if(that.copyViews && that.currentCom.component=='FlexBox'){
  //     that.currentCom.children.push(deepClone( that.copyViews ))
  //   }
  // })
// }

function saveJson(that){
    // 保存json接收
    that.$bus.on("saveJson",() => {
        that.getJson();
    })
}

function save(that){
  that.$bus.on('save',()=>{
    localStorage.setItem('views',JSON.stringify(that.views))
    that.$message.success("保存成功")
  })
}
function reset(that){
  that.$bus.on('reset',()=>{
    that.views = []
    that.$message.success("重置成功")
  })
}

function switchPattern(that){
    // 保存json接收
    that.$bus.on("switchPattern",(bool) => {
        that.pattern = bool ? 'absolute' : 'static'
    })
}

function showDeleteDialog(that){
  // 不弹窗，直接删除
    that.$bus.on("showDeleteDialog",()=>{
        // if(that.edit)that.dialogVisible = true
        that.delCom()
    })
}

function backOff(that){
    //后退
    that.$bus.on("backOff",() => {
      if(that.step > 1){
        that.step = that.step - 1
        that.views = JSON.parse(sessionStorage.getItem(String(--that.step))) 
      }
    })
}
function rootDelete(that){
  // 核心删除
  that.$bus.on("rootDelete",() => {
    that.rootDelete()
  })
}
function refreshCurrentViews(that){
  // 更新当前要修改的views和index
  that.$bus.on("refreshCurrentViews",({views,index}) => {
    that.currentViews = views
    that.currentViewsIndex = index
  })
}
function onCenter(that){
  // 判定为中间组件
  that.$bus.on("onCenter",() => {
    that.centerCom = true
  })
}
function offCenter(that){
    // 判定为非中间组件
    that.$bus.on("offCenter",() => {
        that.centerCom = false
    })
}
function forward(that){
    //前进
    that.$bus.on("forward",() => {
        that.views = JSON.parse(sessionStorage.getItem(String(that.step))) 
    })
}

function inputJson(that){
  // 导入json事件接收inputJson
  that.$bus.on("inputJson",(data) => {
    that.views = data
  })
}

function toPc(that){
  // 转换pc事件
  that.$bus.on("toPc",() => {
    that.isPhone = false
  })
}

function toPhone(that){
  // 转换phone事件
  that.$bus.on("toPhone",() => {
    that.isPhone = true
  })
}

function switchState(that){
  // 切换编辑/预览状态
  that.$bus.on("switchState",()=>{
    that.$bus.emit("clearFocus")
    that.edit = !that.edit
    if(!that.edit)localStorage.setItem("1",JSON.stringify(that.views))
    that.releaseVisiable = !that.releaseVisiable
  })
}

function release(that){
  // 发布事件
  that.$bus.on("release",()=>{
    // console.log("发布页面");
    // localStorage.setItem("views",JSON.stringify(that.views))
    let target = that.$refs.link
    // target.setAttribute('href', window.location.origin + '/release')
    // target.click((e)=>e.stopPropagation())
    // window.open(target.href)
    let id = nanoid()
    let form = new FormData()
    form.append('id', id)
    form.append('result', JSON.stringify(that.views))
    that.$axios(register(form))
      .then((res) => {
        that.src = window.location.origin + '/release/' + id
        that.sendVisiable = true
      })
  })
}

function clearFocus(that){
  // 清除被点击样式
  that.$bus.on("clearFocus",()=>{
    that.showButton = false
    clearFocusHandle(that.views)
  })
}

function clearFocusHandle(arr){
  for(let i=0;i<arr.length;i++){
    arr[i].focus = false;
    if(arr[i].children){
      clearFocusHandle(arr[i].children)
    }
  }
}


function sendDeleteIndex(that){
    that.$bus.on('sendDeleteIndex',(index)=>{
        that.currentIndex = index
      })
}

function sonAddFlexBox(that){
    // 子组件添加弹性盒子
    that.$bus.on("sonAddFlexBox",(data)=>{
        // console.log(that.views);
        let num = data.children.length > 0 ? 1 : 2;
        var newData;
        for(let i = 0;i < num ;i++){
          newData = deepClone(commonData['FlexBox'])
          // 数据统一处理
          newData.id = nanoid();
          // newData.comContent = commonData[data]//改定
          data.children.push(newData);
        }
        // 激活向右发送数据事件
        // that.$bus.emit('views',newData);
    })
}

function refreshCurrentCom(that){
  // 更新当前拖拽选中的组件为中心组件
  that.$bus.on("refreshCurrentCom",(data)=>{
    that.centerCom = data
  })
}

function updateCurrentCom(that){
  // 更新当前拖拽选中的组件
  that.$bus.on("updateCurrentCom",(data)=>{
    that.currentCom = data
  })
}

function exportHtml(that){
  // 导出html
  that.$bus.on("exportHtml",(isVue)=>{
    exportHtmlHandle(that.views,isVue)
  })  
}

