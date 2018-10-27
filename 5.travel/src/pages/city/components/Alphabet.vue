<template>
  <ul class="list">
    <!-- 绑定touch事件 -->
    <li class="item"
    v-for="item of letters"
    :key="item"
    :ref="item"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    @click="handleLetterClick"
    >
    {{item}}
    </li>
  </ul>
</template>
<script>
export default {
  name: 'CityAlphabet',
  // 接收父组件传递的值
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
      // 返回值是一个数组['A','B'...]
    }
  },
  data () {
    return {
      // 定义标志位 用于处理touch事件
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    // offsetTop是A字母距离搜索框下边缘的距离
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    // 向父组件传值 告诉点击的字母
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        // 函数节流 实现滚动优化
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // clientY是手指距离屏幕顶端的距离
          // 79是上面两个蓝色盒子的高度
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          // console.log(touchY)
          // console.log(index)
          // 对index值作逻辑判断限制
          if (index >= 0 && index <= this.letters.length) {
            // 向父组件传值 实现拖动右侧字母变 左边list联动
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
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
