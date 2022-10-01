<template>
  <view :style="{height: statusBarHeight}"></view>
</template>

<script>
import {statusBarInfo} from '../utils'
  // 适配各种设备顶部状态栏的高度。
  // @vuese
  // @group 状态栏组件
export default {
  name: 'syn-status-bar',
  computed: {
    statusBarHeight() {
      return statusBarInfo.top + 'px'
    }
  }

}
</script>