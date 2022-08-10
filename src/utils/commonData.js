export default {
    LinkCom: {
        link: '#',
        content: '点击增加链接',
        component: "LinkCom",
        style: {},
        comContent: {//改定
            link: 'https://www.baidu.com',
            content: '百度的链接',
            style: {}
        }
    },
    ButtonCom: {
        link: '#',
        content: '点击编辑按钮',
        component: "ButtonCom",
        style: {}
    },
    ImgCom: {
        src: 'https://p3-passport.byteacctimg.com/img/user-avatar/c5c1c7b0e8cbe13fd9618089c750b2f8~300x300.image',
        content: '点击更改图片',
        component: "ImgCom",
        style: {
            width:"300px",
            height:"200px"
        },
        imgStyle: {
            width:"300px",
            height: "200px"
        }
    },
    TextCom: {
        content: '点击编辑文本',
        component: "TextCom",
        style: {}
    },
    VideoCom: {
        src: '#',
        content: '点击增加视频',
        component: "VideoCom",
        style: {}
    }
}

