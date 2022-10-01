<template>
  <view class="syn-title-bar" >
    <view class="syn-title-bar-title">{{pageTitle}}</view>
  </view>
</template>

<script>
export default {
  name: 'syn-title-bar',
  props: {
    pageTitle: {
      type: String,
      default: 'pageTitle'
    }
  }


}
</script>

<style lang="scss" scoped>
  .syn-title-bar{
    height: 60rpx;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    .syn-title-bar-title{
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
</style>