<template>
  <div id="app">
    <!-- 会缓存不活动的组件实例 -->
    <!-- 当组件在 <keep-alive> 内被切换，它的 activated 和 deactivated
    这两个生命周期钩子函数将会被对应执行 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
