


import jsonToHtml from "./jsonToHtml";
import FileSaver from 'file-saver'


let marginT={
    top:0,
    right:0,
    bottom:0,
    left:0
}
let paddingT={
    top:0,
    right:0,
    bottom:0,
    left:0
}
function styleToStr(obj){
    let str = ''
    // let marginFlag=false
    // let paddingFlag=false
    for(let k in obj){
        if(obj[k] != '' && obj[k] != 'px' && obj[k] != '%' && parseInt(obj[k]) != 0){
            let realK = k.replace(/([A-Z])/,function($1){return '-'+$1.toLocaleLowerCase()})
            str+=`
            ${realK}: ${obj[k]} ;`
        }
    }
    return str
}

let styleStr ;
let bodyRes ;
let baseName = 'block',baseIndex = 1

export function exportHtmlHandle(views,isVue){
    baseIndex = 1
    styleStr = ''
    bodyRes = document.createElement('div')
    bodyRes.classList.add('canvas')
    for(let i = 0 ; i < views.length ; i++){
        bodyRes.appendChild(getHtmlRes(views[i]))
    }
    // 根据最后的dom转换成最终文件对象,返回对象并生成文件
    let res = jsonToHtml['getMainStr'](bodyRes,styleStr,isVue);
    let blob = new Blob([res],{type:''})
    let fileName = isVue ? 'page.vue' : 'page.html'
    FileSaver.saveAs(blob, fileName)
}

let set=new Set(['FlexBox','ButtonCom','TextCom','VideoCom','LinkCom','ImgCom'])

function getHtmlRes(view){
    // 遍历views数组
    if(!set.has(view.component))return null;
    let tempDom = jsonToHtml[view.component](view, baseIndex )
    let childDom = tempDom.cloneNode(true)
    let tempStr = styleToStr(view.style)
    
    styleStr += `
        ${"." + baseName +"-" + baseIndex++}{${tempStr}
        }` 
    if(view.component != 'FlexBox'){
        let sonStr = styleToStr(view[view.sonStyle])
        styleStr += `
            ${"." + baseName +"-" + baseIndex++}{${sonStr}
            }` 
    }
    
    if(view.children){
        for(let i = 0; i < view.children.length; i++){
            let newDom=getHtmlRes(view.children[i])
            if(newDom)childDom.appendChild(newDom)
        }
    }
    return childDom
}
    
