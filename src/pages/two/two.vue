<template>
  <view>
    <syn-status-bar></syn-status-bar>
    <syn-left-capsule @capsuleClick="capsuleClick">
      <template name="menu">
        <view>menu</view>
      </template>
    </syn-left-capsule>
    two
  </view>
</template>
<script>
export default {
  name: 'one',
  methods: {
    capsuleClick(type){
      console.log(type)
    }
  }
  
}
</script>
<style>

</style>