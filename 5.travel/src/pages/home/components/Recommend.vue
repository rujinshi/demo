<template>
  <div>
    <div class="title">
      <img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
      <span>猜你喜欢</span>
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="item.title">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <p class="item-area">{{item.area}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg',
        title: '上海迪士尼乐园',
        desc: '全球最大的迪士尼城堡',
        area: '浦东新区'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1704/c9/c936f3fccfc6d7eda3.img.jpg_200x200_46052773.jpg',
        title: '上海杜莎夫人蜡像馆',
        desc: '听说有吴亦凡喔skr',
        area: '黄浦区'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1609/80/8092254b7f5f016ea3.water.jpg_200x200_cd798d39.jpg',
        title: '上海欢乐谷',
        desc: '敢上1200米长的木质过山车吗？',
        area: '松江区'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top .1rem
    line-height .8rem
    font-size .32rem
    .title-img
      display inline-block
      overflow hidden
      width .4rem
      height .4rem
      margin-left .1rem
      vertical-align sub
  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        margin-top .05rem
        line-height .4rem
        color #ccc
        ellipsis()
      .item-area
        position absolute
        right .24rem
        color #616161
        font-size .24rem
        line-height .4rem
      .item-button
        line-height .44rem
        margin-top .1rem
        background #fff9f9
        color #f55
        padding 0 .2rem
        border-radius .06rem
</style>
