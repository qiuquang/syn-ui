<template>
  <view>
    <view class="status-bar"></view>
    <left-capsule @capsuleClick="capsuleClick">
      <template name="menu">
        <view>menu</view>
      </template>
    </left-capsule>
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