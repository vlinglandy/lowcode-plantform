


export function exportHtml(views){
    console.log(views);
    // 获取基本html默认的dom

    // 遍历views数组
    // 如果不是弹性盒子
    // 然后根据views数组中的component名字，传入view数据 获取相应的html dom

    // 放到总dom文件的body节点之后

    // 如果是弹性盒子,则首先传入view数据
    /*
        然后这个函数首先创建该节点dom
        之后创建views属性中的dom
        然后views dom放到节点dom儿子中
        
        之后循环children
        创建该child dom
        创建child views dom
        放到child dom中
        知道循环结束循环

        将该dom append到父dom节点
        创建完毕,返回dom
    */

    // 根据最后的dom转换成最终文件对象,返回对象并生成文件
}