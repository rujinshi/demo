<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">故宫(AAAAA景区)</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe674;</span>3</div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1410/34/f540a04367d06820af4dfeaf0ad40257.water.jpg_r_800x800_479f9b55.jpg',
        'http://img1.qunarzz.com/wugc/p123/201211/19/a2045d091f02b25493835fbb.png_r_800x800_c59f0eba.png',
        'http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_r_800x800_6360f514.jpg']
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
