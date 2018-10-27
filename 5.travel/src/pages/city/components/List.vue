<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div
      class="area"
      v-for="(item, key) of cities"
      :key="key"
      :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    // 接收父组件传递过来的letter
    letter: String
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  // 监听letter是否改变 触发事件
  watch: {
    letter () {
      if (this.letter) {
        // 获取指定字母的区域
        // console.log(this.letter)
        const element = this.$refs[this.letter][0]
        // 滚动到指定元素上
        this.scroll.scrollToElement(element)
      }
    }
  }
}

</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  // border-topbottom类前后伪元素边框颜色
  .border-topbottom
   &:before
    border-color #ccc
  &:after
    border-color #ccc
  .border-bottom
   &:before
    border-color #ccc
  .list
  // 清除浮动
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    // background red
    .title
      line-height .54rem
      background #eee
      padding-left .2rem
      color #666
      font-size .26rem
    .button-list
    // 清除子元素浮动
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      // background red
      .button-wrapper
        float left
        width 33.33%
        .button
          text-align center
          padding .1rem 0
          margin .1rem
          border .02rem solid #ccc
          border-radius .06rem
    .item-list
      .item
        line-height .76rem
        color #666
        padding-left .2rem
</style>
