


import jsonToHtml from "./jsonToHtml";
import FileSaver from 'file-saver'



function styleToStr(obj){
    let str = ''
    for(let k in obj){
        if(obj[k]!=''){
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



function getHtmlRes(view){
    // 遍历views数组
    let tempDom = jsonToHtml[view.component](view, baseIndex )
    let childDom = tempDom.cloneNode(true)
    let tempStr = styleToStr(view.style)
    
    styleStr += `
        ${"." + baseName +"-" + baseIndex++}{
        ${tempStr}
    }` 
    if(view.component != 'FlexBox'){
        let sonStr = styleToStr(view[view.sonStyle])
        styleStr += `
            ${"." + baseName +"-" + baseIndex++}{
            ${sonStr}
        }` 
    }
    
    if(view.children){
        for(let i = 0; i < view.children.length; i++){
            childDom.appendChild(getHtmlRes(view.children[i]))
        }
    }
    return childDom
}
    
