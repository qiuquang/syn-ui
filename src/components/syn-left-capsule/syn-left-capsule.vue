<template>
		<view class="sync-left-capsule">
			<view class="left">
        <image v-if="isToHome" :src="homeIcon" class="home-img" @click="capsuleClick('home')"/>
        <image v-else :src="backIcon" class="back-img" @click="capsuleClick('back')"/>
			</view>
			<view class="midd"></view>
			<view class="right">
        <image :src="menuIcon" class="menu-img" @click="capsuleClick('menu')" />
        <slot name="menu"></slot>
			</view>
      
      <view v-if="menuShow" class="nav-menu">
          <view class="menu-list">
            <view v-for="item of menuList" :key="item.label" class="menu-item" @click.stop="doMenu(item)">
              <view v-if="item.iconCls" :class="item.iconCls" class="iconfont"></view>
              <u-icon v-else :name="item.uIconName"></u-icon>
              <view class="label">{{item.label}}</view>
            </view>
          </view>
          <image :src="`https://cdn09.ehaier.com/shunguang/H5/www/img/sgmobile/privateMall/product/1-1-menu-bg.png`" class="nav-menu-bg" />
        </view>
		</view>
</template>

<script>
import './syn-left-capsule.scss'

export default {
  components: {},
  props: {
    homeIcon: {
      type: String,
      default: `https://cdn09.ehaier.com/shunguang/H5/www/img/sgmobile/privateMall/icon/nav_home.png`
    },
    backIcon: {
      type: String,
      default: `https://cdn09.ehaier.com/shunguang/H5/www/img/sgmobile/privateMall/product/1-1-back.png`
    },
    menuIcon: {
      type: String,
      default: `https://cdn09.ehaier.com/shunguang/H5/www/img/sgmobile/privateMall/product/1-1-menu.png`
    },
    menuList: {
      type: Array,
      default: () => {
        return [
          {
            label: 'menu1',
            iconCls: '',
            uIconName: 'photo',
            type: 'page',
            toUrl: '../../two/two'
          },
          {
            label: 'menu2',
            iconCls: '',
            uIconName: 'photo',
            type: 'changeIcon'
          }
        ]
      }
    }
  },
  data () {
		return {
      menuShow: false
		}
  },
  computed: {
    isToHome() {
      console.log(getCurrentPages())
      return getCurrentPages().length <= 1;
    }
  },
  created () {
    console.log('lft-created')
  },
  mounted () {
    console.log('lft-mounted')
    const pages = getCurrentPages()
    console.log(pages)
    // const query = uni.createSelectorQuery().in(pages[pages.length - 1].$vm).select('.menu');
    // console.log(query)
    // query.boundingClientRect(data => {
    //   console.log("得到布局位置信息" + JSON.stringify(data));
    //   console.log("节点离页面顶部的距离为" + data.top);
    // }).exec();
    // query.fields({properties: ['calss', 'id' ,'style'],computedStyle: ['height', 'width']},data => {
    //   console.log('fields', data)
    // }).exec();
  },
  beforeDestroy () {
    console.log('lft-beforeDestroy')
  },
  methods: {
    capsuleClick(type) {
      if(type === 'menu') {
        this.menuShow = true
      } else {
        this.menuShow = false
      } 
      if (type === 'back') {
        uni.navigateBack()
      }
      this.$emit('capsuleClick', type)
    },
    doMenu(item){
      if(item.type === 'page') {
        uni.navigateTo({
          url: "../two/two"
        })
      } else if(item.type === 'changeIcon') {

      }
      this.$emit('doMenu', item)
    }
  },
  watch: {}
}
</script>
