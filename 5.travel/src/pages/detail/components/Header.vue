<template>
  <div>
    <!-- 点击返回主页面 -->
    <router-link to="/" tag="div" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true
    }
  },
  activated () {

  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position  absolute
    left .1rem
    top .1rem
    width .72rem
    height .72rem
    line-height .72rem
    border-radius .36rem
    background rgba(0, 0, 0, .8)
    text-align center
    .header-abs-back
      color #fff
  .header-fixed
    position fixed
    top 0
    left 0
    right 0
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    background $bgColor
    font-size .32rem
    .header-fixed-back
      position absolute
      top 0
      left 0
      width .8rem
      height $headerHeight
      line-height $headerHeight
      text-align center
      font-size .4rem
      color #fff
</style>
