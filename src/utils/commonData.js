export default {
    LinkCom: {//更改了对象结构
        link: 'www.baidu.com',
        content: '点击跳转',
        component: "LinkCom",
        style: {},
        linkStyle: {
            height: "50px",
            fontSize: "16px",
        }
    },
    ButtonCom: {
        link: '#',
        content: '点击编辑按钮',
        component: "ButtonCom",
        disabled: false,
        options: [{
            value: '选项1',
            label: '100 Thin'
          }, {
            value: '选项2',
            label: '200 Extra Light'
          }, {
            value: '选项3',
            label: '300 Light'
          }, {
            value: '选项4',
            label: '400 Normal'
          }, {
            value: '选项5',
            label: '500 Medium'
          }, {
            value: '选项6',
            label: '600 Semi Bold'
          }, {
            value: '选项7',
            label: '700 Bold'
          }, {
            value: '选项8',
            label: 'Extra Bold'
          }],
          value: '',
        style: {
            fontSize: 12,
            lineHeight:'',
            color: "#FFF",
            backgroundColor: "#409EFF",
            opacity:1
        },
    },
    ImgCom: {
        src: 'https://p3-passport.byteacctimg.com/img/user-avatar/c5c1c7b0e8cbe13fd9618089c750b2f8~300x300.image',
        content: '点击更改图片',
        component: "ImgCom",
        style: {
            width:"300px",
            height:"200px",
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
    },
    FlexBox: {
        focus:false,
        name:"block",
        component: "FlexBox",
        style: {
            justifyContent:"center",
            alignItems:"center",
            display:"flex",
            flexDirection:"row",
            width:"100%",
            height:"60px",
            position:"relative",
            marginTop:"0px",
            marginLeft:"0px",
            marginBottom:"0px",
            marginRight:"0px",
            paddingTop:"0px",
            paddingLeft:"0px",
            paddingBottom:"0px",
            paddingRight:"0px",
        },
        views:[],
        children: []
    },
    Node: {
        focus: false,
        name:"block",
        component: "FlexBox",
        style: {
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"row",
            width:"100%",
            height:"100%",
            position:"relative"
        },
        views:[]
    }
}

