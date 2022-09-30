<template>
  <view :style="{height: statusBarHeight}"></view>
</template>

<script>
export default {
  name: 'syn-status-bar',
  computed: {
    statusBarHeight() {
      return uni.getMenuButtonBoundingClientRect().top + 'px'
    }
  }

}
</script>