<template>
<div class="wrapper">
    <swiper :options="swiperOption">
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/c6/2467595fffc3b302.jpg_750x200_cca13d51.jpg'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1810/d3/51a22fafb250e502.jpg_750x200_e4d9c5ae.jpg'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/e5/59fad13a64807d02.jpg_750x200_713ae984.jpg'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .wrapper >>>.swiper-pagination-bullet-active
    background #fff !important
  .wrapper
    overflow hidden
    width 100%
    height 0
    // 使用百分比无论哪个方向 参照父容器的宽度 实现高度自适应
    // 用于占位 避免闪烁
    padding-bottom 27%
    background #eee
    .swiper-img
      width 100%
</style>
