<template>
  <div class='container' style='font-size:24px'>
    <header style='background:#ff4e00;color:#fff;height:100px;line-height:100px;text-align:center'>
      标准模板
    </header>
    {{#if_eq downloadPrompte true}}
    <load-banner v-if='!isApp'></load-banner>
    {{/if_eq}}
  </div>
</template>
<script>
{{#if_eq downloadPrompte true}}
import LoadBanner from '@/components/LoadBanner'
{{/if_eq}}
import {{#if_eq downloadPrompte true}}appbridge{{/if_eq}}, { openDetail } from '@/assets/libs/appbridge'
import { h5Domain } from 'assets/libs/domain'

export default {
  components: {
    {{#if_eq downloadPrompte true}}
    LoadBanner,
  },
  data() {
    return {
      {{#if_eq downloadPrompte true}}
      isApp: appbridge.isApp,
      {{/if_eq}}
      baseShareImg: 'https://file.xwowmall.com/front-assets/images/mallCommon/mall-logo.png', // 分享图片
      baseShareLink: '', // 分享链接
      shareText: { // 分享内容
        title: '页面标题',
        shareTitle: '分享主标题',
        shareSubTitle: '分享副标题',
        shareImg: this.baseShareImg,
        shareLink: `${h5Domain}/act/m/${this.baseShareLink}&source=act`,
      },
    }
  },
  methods: {
    openDetail,
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
