<template>
	<view class="syn-left-capsule">
    <view class="status-bar"></view>
    <syn-left-capsule @capsuleClick="capsuleClick" @doMenu="doMenu">
      <!-- <template #menu>
      </template> -->
    </syn-left-capsule>
    <button @click="toTwo">toTwo</button>
	</view>
</template>

<script>
// import LeftCapsule from '@/components/left-capsule.vue'

export default {
  components: {},
  props: {
  },
  data () {
		return {
      cdnImageUrl: 'https://cdn09.ehaier.com/shunguang/H5/www/img/sgmobile'
		}
  },
  created () {
    console.log('index-created');
  },
  mounted () {
    console.log('index-mounted');
  },
  beforeDestroy () {
    console.log('index-beforeDestroy1');
  },
  onHide(){
    console.log('index-onHide');
  },
  methods: {
    capsuleClick(type){
      console.log(type)

    },
    doMenu(val) {
      console.log(val)
    },
    toTwo(){
      uni.navigateTo({
        url: '../one/one'
      })
    }
  },
  computed: {
  },
  watch: {}
}
</script>
<style lang="scss" scoped>
</style>
