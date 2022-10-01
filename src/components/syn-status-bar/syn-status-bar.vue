<template>
  <view :style="{height: statusBarHeight}"></view>
</template>

<script>
import {statusBarInfo} from '../utils'

export default {
  name: 'syn-status-bar',
  computed: {
    statusBarHeight() {
      return statusBarInfo.top + 'px'
    }
  }

}
</script>