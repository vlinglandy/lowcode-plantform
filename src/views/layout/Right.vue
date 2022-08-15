<template>
  <div class="right" v-if="Object.keys(views).length>0">
    <div class="right-describ">
      <img :src="require('@/'+'assets/page.png')" />页面
    </div>
    <div class="right-choices">
      <div class="right-choices-one" @click="isMeta = true" :class="{active: isMeta}">属性</div>
      <div class="right-choices-two" @click="isMeta = false" :class="{active: !isMeta}">样式</div>
    </div>
    <div class="right-main">
      <div v-if="isMeta">
        <component :views="views" :is="propMap[views.component]"></component>
      </div>
      <div v-else>
        <component :views="views" :is="styleMap[views.component]"></component>
      </div>
    </div>
  </div>
</template>


<script>
import ButtonProp from '@/components/property/ButtonProp.vue'
import ImgProp from '@/components/property/ImgProp.vue'
import LinkProp from '@/components/property/LinkProp.vue'
import TextProp from '@/components/property/TextProp.vue'
import VideoProp from '@/components/property/VideoProp.vue'
import ButtonStyle from '@/components/style/ButtonStyle.vue'
import ImgStyle from '@/components/style/ImgStyle.vue'
import LinkStyle from '@/components/style/LinkStyle.vue'
import TextStyle from '@/components/style/TextStyle.vue'
import VideoStyle from '@/components/style/VideoStyle.vue'
import FlexBoxStyle from '@/components/style/FlexBoxStyle.vue'
import FlexBoxProp from '@/components/property/FlexBoxProp.vue'
export default {
  data() {
    return {
      isMeta:true,
      propMap:{
        "ButtonCom":"ButtonProp",
        "ImgCom":"ImgProp",
        "LinkCom":"LinkProp",
        "TextCom":"TextProp",
        "VideoCom":"VideoProp",
        "FlexBox":"FlexBoxProp",
      },
      styleMap:{
        "ButtonCom":"ButtonStyle",
        "ImgCom":"ImgStyle",
        "LinkCom":"LinkStyle",
        "TextCom":"TextStyle",
        "VideoCom":"VideoStyle",
        "FlexBox":"FlexBoxStyle",
      },
      views: {},
    };
  },
  mounted() {
    this.$bus.$on("views", (view) => {
      this.views = view;
    });
    this.$bus.$on("cleanView", () => {
      this.views = {}
    });
  },
  methods: {
    sendViews(view) {
      this.$bus.$emit("views", view);
    },
    upload() {},
  },
  components: {
    ButtonProp,
    ImgProp,
    LinkProp,
    TextProp,
    VideoProp,
    ButtonStyle,
    ImgStyle,
    LinkStyle,
    TextStyle,
    VideoStyle,
    FlexBoxStyle,
    FlexBoxProp
  },
};
</script>

<style lang="scss" scoped>
.right {
  width: 300px;
  height: 100%;
  background: #fff;
  padding: 3px 10px 0px 10px;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  &-describ {
    height: 25px;
    display: flex;
    justify-content: flex-start;
    font-size:12px;
    color: #aaa;
    align-items: center;
  }
  &-describ img {
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }
  &-choices {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 100%;
    color: #888;
    font-size: 14px;
    &-one {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
    &-two {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }
}
.active{
  color: rgb(85, 132, 255);
  border-bottom: 2px solid rgb(85, 132, 255);
  box-shadow: 0 0 3px #eee;
}
</style>