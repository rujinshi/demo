<template>
<div class="header">
    <div class="hader-left">返回</div>
    <div class="hader-input">输入城市/内容/游玩主题</div>
    <div class="hader-right">城市</div>
</div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>
<style scoped lang="stylus">
  .header
    display: flex;;
    line-height: .86rem;
    background: #00bcd4;
    color: #fff;
    .header-left
      width: .64rem;
      float: left;
    .header-input
      flex: 1;
      height .64rem
      line-height .64rem
      margin-top .12rem
      margin-left .2rem
      background: #fff;
      border-radius: .1rem;
      color #ccc
    .header-right
      width: 1.24rem;
      float: right;
      text-align: center;
</style>
