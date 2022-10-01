<template>
  <view class="syn-right-capsule-block" :style="{width: rightWidth}"></view>
</template>

<script>
import {statusBarInfo, systemInfo} from '../utils'
  // 这是与微信小程序右侧胶囊位置完全一致的占位组件，用于右侧占位。
  // @vuese
  // @group 胶囊栏组件
export default {
  name: 'syn-right-capsule-block',
  computed: {
    rightWidth() {
      return `${systemInfo.screenWidth - statusBarInfo.left}px`
    }
  }
}
</script>

<style lang="scss" scoped>
.syn-right-capsule-block{
  height: 100%;
}
</style>