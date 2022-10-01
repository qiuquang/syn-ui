<template>
		<view :class="['sync-left-capsule', menuList.length ===0 ? 'sync-left-capsule-single' : '']">
      <template v-if="menuList.length!==0">
        <view class="left">
          <image v-if="isToHome" :src="homeIcon" class="home-img" @click="capsuleClick('home')"/>
          <image v-else :src="backIcon" class="back-img" @click="capsuleClick('back')"/>
        </view>
        <view class="midd"></view>
        <view class="right">
          <image :src="menuIcon" class="menu-img" @click="capsuleClick('menu')" />
          <slot name="menu"></slot>
        </view>
        <view class="u-mask" hover-stop-propagation :style="[maskStyle]" @click="maskClick"  @touchmove.stop.prevent="() => {}" :class="{'u-mask-show': menuShow}">
          <view v-if="menuShow" class="nav-menu">
            <view class="menu-list">
              <view v-for="(item,index) of menuList" :key="item.label" class="menu-item" @click.stop="doMenu(item, index)">
                <view v-if="!item.active && item.iconCls" :class="item.iconCls" class="iconfont"></view>
                <!-- <u-icon v-else :name="item.uIconName"></u-icon> -->
                <view v-else class="iconfont" :class="item.changedIconCls"></view>
                <view class="label">{{item.active ? item.activeLabel :item.label}}</view>
              </view>
            </view>
            <image :src="`https://cdn09.ehaier.com/shunguang/H5/www/img/sgmobile/privateMall/product/1-1-menu-bg-2.png`" class="nav-menu-bg" />
          </view>
        </view>
      </template>
      <template v-else>
        <view class="single-btn">
          <image :src="backIcon" class="back-img" @click="capsuleClick('back')"/>
        </view>
      </template>
	  </view>
</template>
<script>
import './syn-left-capsule.scss'
import {statusBarInfo} from '../utils'

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
          // {
          //   label: 'menu1', // 菜单名称
          //   iconCls: 'icona-04gengduo_jindianguangguang', // icon的图标iconfont值
          //   // uIconName: 'photo', // u-icon的name值
          //   type: 'page', // 点击类型，page为跳转新页面，changeIcon为更换图标
          //   toUrl: '/pages/two/two' // page时跳转的页面
          // },
          // {
          //   label: '商品收藏',
          //   activeLabel: '已收藏'
          //   iconCls: 'icona-03gengduo_shoucang',
          //   // uIconName: 'photo',
          //   type: 'changeIcon',
          //   active: false,
          //   changedIconCls: 'icona-03gengduo_shoucang-11', // 要更换的icon图标的iconfont值
          // }
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
      return getCurrentPages().length <= 1;
    },
    maskStyle() {
      let style = {};
      style.backgroundColor = "rgba(0, 0, 0, 0.1)";
      if(this.menuShow) style.zIndex = this.zIndex ? this.zIndex : 10070;
      else style.zIndex = -1;
      style.transition = `all ${300 / 1000}s ease-in-out`;
      style.top = `${statusBarInfo.top + uni.upx2px(74)}px`
      return style;
    }
  },
  created () {
    console.log('lft-created')
  },
  mounted () {
    console.log('lft-mounted')
  },
  beforeDestroy () {
    console.log('lft-beforeDestroy')
  },
  methods: {
    capsuleClick(type) {
      switch(type) {
        case 'home':
        break;
        case 'back':
        uni.navigateBack()
        break;
        case 'menu':
        this.menuShow = true
        break;
      }
      this.$emit('capsuleClick', type)
    },
    maskClick() {
        this.menuShow = false
		},
    doMenu(item, index){
      console.log('lf-doMenu', item)
      if(item.type === 'page') {
        this.menuShow = false
        uni.navigateTo({
          url: item.toUrl
        })
      } else if(item.type === 'changeIcon') {
        const pp = this.menuList;
        pp[index].active = !item.active
        this.$emit('update:menuList', pp)
      }
      this.$emit('doMenu', item)
    }
  },
  watch: {}
}
</script>
