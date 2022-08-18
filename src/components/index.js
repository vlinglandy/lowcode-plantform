import ButtonStyle from '@/components/style/ButtonStyle'
import CommonStyle from '@/components/style/CommonStyle'
import FlexBoxStyle from '@/components/style/FlexBoxStyle'
import ImgStyle from '@/components/style/ImgStyle'
import LinkStyle from '@/components/style/LinkStyle'
import TextStyle from '@/components/style/TextStyle'
import VideoStyle from '@/components/style/VideoStyle'
import ButtonProp from '@/components/property/ButtonProp'
import CommonProp from '@/components/property/CommonProp'
import FlexBoxProp from '@/components/property/FlexBoxProp'
import ImgProp from '@/components/property/ImgProp'
import LinkProp from '@/components/property/LinkProp'
import TextProp from '@/components/property/TextProp'
import VideoProp from '@/components/property/VideoProp'
import CenterButton from '@/components/global/CenterButton'
import PageHeader from '@/components/global/PageHeader'
import ButtonCom from '@/components/basic/ButtonCom'
import ImgCom from '@/components/basic/ImgCom'
import LinkCom from '@/components/basic/LinkCom'
import TextCom from '@/components/basic/TextCom'
import VideoCom from '@/components/basic/VideoCom'
import DeleteDialog from '@/components/global/DeleteDialog'

// 动态渲染
import DynamicDraw from '@/components/core/DynamicDraw'
import FlexBox from '@/components/core/FlexBox'
import SingleDraw from '@/components/core/SingleDraw'
// 单个渲染
import PowerfulDynamicDraw from '@/components/core/PowerfulDynamicDraw'

  
export default {
    install(Vue){
        Vue.component('ButtonStyle',ButtonStyle)
        Vue.component('VideoCom',VideoCom)
        Vue.component('TextCom',TextCom)
        Vue.component('LinkCom',LinkCom)
        Vue.component('ImgCom',ImgCom)
        Vue.component('ButtonCom',ButtonCom)
        Vue.component('PageHeader',PageHeader)
        Vue.component('CenterButton',CenterButton)
        Vue.component('VideoProp',VideoProp)
        Vue.component('TextProp',TextProp)
        Vue.component('LinkProp',LinkProp)
        Vue.component('ImgProp',ImgProp)
        Vue.component('FlexBoxProp',FlexBoxProp)
        Vue.component('CommonProp',CommonProp)
        Vue.component('ButtonProp',ButtonProp)
        Vue.component('VideoStyle',VideoStyle)
        Vue.component('TextStyle',TextStyle)
        Vue.component('LinkStyle',LinkStyle)
        Vue.component('ImgStyle',ImgStyle)
        Vue.component('FlexBoxStyle',FlexBoxStyle)
        Vue.component('CommonStyle',CommonStyle)
        Vue.component('DeleteDialog',DeleteDialog)
        Vue.component('PowerfulDynamicDraw',PowerfulDynamicDraw)
        Vue.component('DynamicDraw',DynamicDraw)
        Vue.component('SingleDraw',SingleDraw)
        Vue.component('FlexBox',FlexBox)
    }
}