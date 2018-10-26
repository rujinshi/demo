<template>
  <div class="wrapper">
    <!-- v-if的作用是避免轮播图不是从第一章开始轮播 -->
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>
<style lang="stylus" scoped>
  .wrapper >>>.swiper-pagination-bullet-active
    background rgba(255,255,255,.5)
  .wrapper
    overflow hidden
    width 100%
    height 0
    // 使用百分比无论哪个方向 参照父容器的宽度 实现高度自适应
    // 用于占位 避免闪烁
    padding-bottom 30%
    background #eee
    .swiper-img
      width 100%
</style>
