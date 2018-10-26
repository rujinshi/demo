<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="item.title">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1509/41/0a74389a026adc.jpg_r_640x214_5ad7add7.jpg',
        title: '上海赏秋攻略',
        desc: '上海的秋天，哪里都是美美哒'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
        title: '上海必游TOP10',
        desc: '中西合璧，现代和传统各有各的精彩'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1511/1d/fe098e8cfec117.jpg_r_640x214_a9be292a.jpg',
        title: '上海城市观光',
        desc: '来这里寻找你所认识的上海'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    padding-left .20rem
    height .8rem
    line-height .8rem
    .title-img
      display inline-block
      overflow hidden
      width .4rem
      height .4rem
      margin-left .1rem
      vertical-align sub
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 37.437%
  .item-img
    width 100%
  .item-info
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .item-desc
      overflow hidden
      margin-top .05rem
      line-height .4rem
      color #616161
      ellipsis()
</style>
