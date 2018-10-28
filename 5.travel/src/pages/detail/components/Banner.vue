<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe674;</span>{{this.bannerImgs.length}}</div>
      </div>
    </div>
    <common-gallary :imgs="bannerImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>
<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    width 100%
    padding-bottom 55%
    .banner-img
      width 100%
      vertical-align top
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.7))
      .banner-title
        flex 1
        font-size .34rem
        text-shadow 0 1px 2px rgba(0,0,0, .7)
        padding .1rem
      .banner-number
        position absolute
        left .1rem
        bottom .66rem
        padding 0 .2rem
        line-height .36rem
        border-radius .2rem
        background rgba(0,0,0, .8)
        font-size .26rem
        .banner-icon
          font-size .24rem
          margin-right .1rem
</style>
