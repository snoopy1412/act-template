<template>
  <div class='container' style='font-size:24px'>
    <header>
      标准模板
    </header>
    {{#if_eq downloadPrompte true}}
    <!-- 用于非App环境下，load-banner组件的占位 -->
    <transition name="fold">
      <div class='fold' v-if='!isApp && hideLoadBanner'></div>
    </transition>
    <load-banner v-if='!isApp' @closeBanner='closeBanner'></load-banner>
    {{/if_eq}}
  </div>
</template>
<script>
{{#if_eq downloadPrompte true}}
import LoadBanner from '@/components/LoadBanner'
{{/if_eq}}
import { {{#if_eq downloadPrompte true}}isApp{{/if_eq}}, openDetail } from '@/assets/libs/appbridge'
import { h5Domain } from 'assets/libs/domain'

const baseShareImg = 'https://file.xwowmall.com/front-assets/images/mallCommon/mall-logo.png' // 分享图片
const baseShareLink = '' // 分享链接
export default {
  components: {
    {{#if_eq downloadPrompte true}}
    LoadBanner,
    {{/if_eq}}
  },
  data() {
    return {
      {{#if_eq downloadPrompte true}}
      isApp,
      hideLoadBanner: 'isApp' in window ? 0 : 1,
      {{/if_eq}}
      shareText: { // 分享内容
        title: '页面标题',
        shareTitle: '分享主标题',
        shareSubTitle: '分享副标题',
        shareImg: baseShareImg,
        shareLink: `${h5Domain}/act/m/${baseShareLink}&source=act`,
      },
    }
  },
  methods: {
    openDetail,
    {{#if_eq downloadPrompte true}}
    closeBanner() {
      this.hideLoadBanner = 0
    },
    {{/if_eq}}
  },
  mounted() {
    this.$setDocumentTitle(this.shareText.title)
    const title = this.shareText.shareTitle
    const subtitle = this.shareText.shareSubTitle
    const thumbnail = this.shareText.shareImg
    const url = this.shareText.shareLink
    this.$initShareInfo(
      title,
      subtitle,
      thumbnail,
      url,
    )
  },
}
</script>
<style lang='scss' scoped>
  @import '~assets/scss/common/index';
  *,*:before,*:after{
    box-sizing: border-box;
  }
  .fold{
    width: 100%;
    height: px2rem(88);
  }
  .fold-enter-active, .fold-leave-active {
    transition: all .5s;
  }
  .fold-enter, .fold-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    height: 0;
  }  

  // 无用代码
  header {
    background:#ff4e00;
    color:#fff;
    height:100px;
    line-height:100px;
    text-align:center;
  }
</style>
