<template>
  <view>
    <syn-status-bar></syn-status-bar>
    <view class="commonPageHeader">
      <syn-left-capsule :menuList.sync="menuList" @capsuleClick="capsuleClick">
        <template name="menu">
          <view>menu</view>
        </template>
      </syn-left-capsule>
      <syn-title-bar pageTitle="左侧胶囊第二页"></syn-title-bar>
      <syn-right-capsule-block></syn-right-capsule-block>
    </view>
  </view>
</template>
<script>
import {menuList} from '../commonConfig' 
export default {
  components: {},
  name: 'one',
  data() {
    return {
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