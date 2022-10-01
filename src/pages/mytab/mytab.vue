<template>
  <view class="mytab">
    <syn-status-bar></syn-status-bar>
    <view class="commonPageHeader">
      <syn-left-capsule-block></syn-left-capsule-block>
      <syn-title-bar pageTitle="随便逛逛"></syn-title-bar>
      <syn-right-capsule-block></syn-right-capsule-block>
    </view>
    <view>我的</view>
  </view>
</template>

<script>
import synLeftCapsuleBlock from '../../components/syn-left-capsule-block/syn-left-capsule-block.vue'
export default {
  components: { synLeftCapsuleBlock },

}
</script>

<style lang="scss" scoped>
.mytab{

}
</style>