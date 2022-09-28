<template>
  <view>
    <view class="status-bar"></view>
    <syn-left-capsule @capsuleClick="capsuleClick">
      <template name="menu">
        <view>menu</view>
      </template>
    </syn-left-capsule>
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