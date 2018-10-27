<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>
<script>
export default {
  name: 'CityAlphabet'
}

</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    // 弹性盒布局 用于垂直居中
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem

    .item
      line-height .4rem
      // 控制字母水平居中
      text-align center
      color  $bgColor
</style>
