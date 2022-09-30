<template>
  <view class="menu">
    <syn-status-bar></syn-status-bar>
    <view style="display:flex">
      <syn-left-capsule></syn-left-capsule>
      <syn-title-bar :pageTitle="pageTitle" style="flex: 1;">
      </syn-title-bar>
      <view :style="{height:'100%',width:rightWidth}"></view>
    </view>
    <scroll-view class="menu-scroll" :scroll-top="scrollTop" scroll-y="true" :style="{height:scrollH+'rpx'}">
      <u-button style="width:380rpx" @click="toLeftCapsule">左侧胶囊</u-button>
			<!-- <view id="demo1" class="scroll-view-item uni-bg-red">A</view>
			<view id="demo2" class="scroll-view-item uni-bg-green">B</view>
			<view id="demo3" class="scroll-view-item uni-bg-blue">C</view> -->
		</scroll-view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: '三翼鸟view菜单',
      rightWidth: '0px'
    }
  },
  created() {
			const app = getApp()
      app.globalData.systemInfo = uni.getSystemInfoSync()
      app.globalData.menuButton = uni.getMenuButtonBoundingClientRect()
      this.rightWidth = `${app.globalData.systemInfo.screenWidth - app.globalData.menuButton.left}px`
      console.log(app)
  },
  mounted() {
  },
  computed:{
		scrollH() {
			const app = getApp()
      console.log(app,'pppppp')
			let winWidth = app.globalData.systemInfo.windowWidth;
			let winrate = 750/winWidth;
      console.log('app.globalData.systemInfo.safeArea.height', app.globalData.systemInfo.safeArea.height)
      console.log('app.globalData.menuButton.top ', app.globalData.menuButton.top )
			let winHeight =parseInt((app.globalData.systemInfo.safeArea.height - app.globalData.menuButton.top - 30) * winrate)
			return winHeight
		}
	},
  methods: {
    toLeftCapsule(){
      uni.navigateTo({
        url: '../leftCapsule/leftCapsule'
      })
    },
    menuPageClick(e) {
      console.log(e)
    }
  }
}
</script>

<style scoped lang="scss">
.menu{
  /* padding-bottom: constant(safe-area-inset-bottom); 
  padding-bottom: env(safe-area-inset-bottom);  */
  .menu-scroll{
    width: 100%;
    padding: 60rpx 30rpx 0 30rpx;
	  box-sizing: border-box;
  }
}
.scroll-view-item{
  height: 1000rpx;
}
</style>