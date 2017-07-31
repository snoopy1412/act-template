<template>
  <div class='container' style='font-size:24px'>
    <header style='background:#ff4e00;color:#fff;height:100px;line-height:100px;text-align:center'>
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
      hideLoadBanner: !this.isApp ? 1 : 0,
      {{/if_eq}}
      shareText: { // 分享内容
        title: '页面标题',
        shareTitle: '分享主标题',
        shareSubTitle: '分享副标题',
        shareImg: baseShareImg,
        shareLink: baseShareLink,
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
    this.$setShareInfo(
      this.shareText.shareTitle,
      this.shareText.shareSubTitle,
      this.shareText.shareImg,
      this.shareText.shareLink
    )
  },
}
</script>
<style lang='scss' scoped>
  *,*:before,*:after{
    box-sizing: border-box;
  }
</style>
