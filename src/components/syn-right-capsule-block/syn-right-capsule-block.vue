<template>
  <view class="syn-right-capsule-block" :style="{width: rightWidth}"></view>
</template>

<script>
  import {statusBarInfo, systemInfo} from '../utils'
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