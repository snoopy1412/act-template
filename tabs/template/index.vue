<template>
  <div class='container' style='font-size:24px'>
    <header style='background:#ff4e00;color:#fff;height:100px;line-height:100px;text-align:center'>
      TAB模板
    </header>
    <fixed-tabs contentClass="content-item">
      <!-- nav -->
      <template slot="navs">
        <div class="navs-box-inner">
          <nav-item v-for="(tab,index) in navs" :key="index" :default-index='index'>
            <span v-text='tab.text'></span>
          </nav-item>
        </div>
      </template>
      <!-- content -->
      <template slot="tab-content" scope="props">
        <div :class="props.contentClass" v-for="content in contents">
           <product-list :productIds="content.productsIds" class="product-class">
              <template scope="props">
                  <div v-for='p in props.productList' v-tap='openDetail.bind(null, p.productId)' style='border-bottom:1px solid #ccc;border-radius:4px;margin-bottom:20px;padding:10px'>
                    <div>
                      <div class="img-inner loading-img">
                        <img v-lazy="p.imageUrl" alt="">
                      </div>
                    </div>
                    <div class="detail" style='text-align:center'>
                        <h3 class='two-line-overflow' v-text='p.title'></h3>
                        <div>
                          <span><span>￥</span> <span v-text='p.price'></span></span>
                          <a href="" class='btn'>立即购买</a>
                        </div>
                    </div>
                  </div>
              </template>
            </product-list>
        </div>
      </template>
    </fixed-tabs>
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
import Vue from 'vue'{{#if_eq downloadPrompte true}}
import LoadBanner from '@/components/LoadBanner'{{/if_eq}}
import { fixedTabs, navItem } from '@/components/fixed-tabs'
import productList from '@/components/product-list'
import { {{#if_eq downloadPrompte true}}isApp{{/if_eq}}, openDetail } from '@/assets/libs/appbridge'
import { h5Domain } from 'assets/libs/domain'
import { Lazyload } from 'mint-ui'

const baseShareImg = 'https://file.xwowmall.com/front-assets/images/mallCommon/mall-logo.png' // 分享图片
const baseShareLink = '' // 分享链接
Vue.use(Lazyload)
export default {
  components: {
    {{#if_eq downloadPrompte true}}
    LoadBanner,
    {{/if_eq}}
    fixedTabs,
    navItem,
    productList,
  },
  data() {
    return {
      {{#if_eq downloadPrompte true}}
      isApp,
      hideLoadBanner: 'isApp' in window ? 0 : 1,
      {{/if_eq}}
      navs: [
        {
          text: '项目1',
        },
        {
          text: '项目2',
        },
        {
          text: '项目3',
        },
      ],
      contents: [
        {
          // 项目1
          productsIds: [
            '95228981081808896',
            '95228981081808896',
            '95228981081808896',
            '95228981081808896',
          ],
        },
        {
          // 项目2
          productsIds: [
            '95984124516638720',
            '95984124516638720',
            '95984124516638720',
            '95984124516638720',
          ],
        },
        {
          // 项目3
          productsIds: [
            '92827154456543232',
            '92827154456543232',
            '92827154456543232',
            '92827154456543232',
          ],
        },
      ],
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
  .navs-box-inner{
    width: 100%;
    display: flex;
    background-color: #f1f1f1;
    &>.nav-item{
      width: 33.3%;
      height: 100px;
      line-height: 100px;
      text-align: center;
      &.active{
        color:#ff4e00;
      }
    }
  }
</style>
