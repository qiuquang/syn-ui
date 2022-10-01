<template>
  <view class="syn-title-bar" >
    <view class="syn-title-bar-title">{{pageTitle}}</view>
  </view>
</template>

<script>
  // 这是和右侧胶囊对齐的标题组件，左侧胶囊组件、胶囊占位组件放置后，可使标题居中。
  // @vuese
  // @group 胶囊栏组件
export default {
  name: 'syn-title-bar',
  props: {
    // 页面标题
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