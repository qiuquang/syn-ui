<template>
	<view class="syn-left-capsule">
    <syn-status-bar></syn-status-bar>
    <view class="commonPageHeader">
      <syn-left-capsule :menuList.sync="menuList" @capsuleClick="capsuleClick" @doMenu="doMenu">
      </syn-left-capsule>
      <syn-title-bar pageTitle="左侧胶囊第一页"></syn-title-bar>
      <syn-right-capsule-block></syn-right-capsule-block>
    </view>
    <view class="content">
      <button @click="toTwo">NextPage</button>
    </view>
	</view>
</template>

<script>
import { menuList } from '../commonConfig'
export default {
  components: {},
  props: {},
  data () {
		return {
      cdnImageUrl: 'https://cdn09.ehaier.com/shunguang/H5/www/img/sgmobile',
      menuList
		}
  },
  created () {
    console.log('leftCapsulePageOne-created');
  },
  mounted () {
    console.log('leftCapsulePageOne-mounted');
  },
  beforeDestroy () {
    console.log('leftCapsulePageOne-beforeDestroy1');
  },
  onHide(){
    console.log('leftCapsulePageOne-onHide');
  },
  methods: {
    capsuleClick(type){
      if(type==='home') {
        uni.switchTab({
          url: '/pages/menu/menu'
        })
      }
    },
    doMenu(val) {
      console.log(val)
    },
    toTwo(){
      uni.navigateTo({
        url: '/pages/leftCapsule/leftCapsulePageTwo'
      })
    }
  },
  computed: {
  },
  watch: {}
}
</script>
<style lang="scss" scoped>
  .content{
    padding: 30rpx;
  }
</style>
