<template>
  <view class="menu">
    <syn-status-bar></syn-status-bar>
    <view class="commonPageHeader">
      <syn-left-capsule-block></syn-left-capsule-block>
      <syn-title-bar pageTitle="三翼鸟view菜单页">
      </syn-title-bar>
      <syn-right-capsule-block></syn-right-capsule-block>
    </view>
    <scroll-view class="menu-scroll" :scroll-top="scrollTop" scroll-y="true" :style="{height:scrollH+'rpx'}">
      <u-button style="width:380rpx" @click="toLeftCapsule">To左侧胶囊页面</u-button>
		</scroll-view>
  </view>
</template>

<script>
import { menuList } from '../commonConfig'
import { uinappInit } from '../../plugin/utils'
export default {
  components: {},
  data() {
    return {
      menuList
    }
  },
  created() {
    uinappInit()
  },
  mounted() {
  },
  computed:{
		scrollH() {
			const app = getApp()
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
      uni.redirectTo({
        url: '/pages/leftCapsule/leftCapsulePageOne'
      })
    },
    menuPageClick(e) {
      console.log(e)
    },
    doMenu(val) {
      // 菜单跳转
      console.log(val)
    }
  }
}
</script>

<style scoped lang="scss">
.menu{
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