<template>
  <view>
    <syn-status-bar></syn-status-bar>
    <view class="commonPageHeader"> 
      <syn-left-capsule @capsuleClick="capsuleClick"></syn-left-capsule>
      <syn-title-bar pageTitle="随便逛逛"></syn-title-bar>
      <syn-right-capsule-block></syn-right-capsule-block>
    </view>
    随便逛逛
  </view>
</template>
<script>
import {menuList} from '../commonConfig'
export default {
  components: {},
  name: 'one',
  data() {
    return{
      menuList
    }
  },
  methods: {
    capsuleClick(type){
      console.log(type)
    }
  }
  
}
</script>
<style>

</style>