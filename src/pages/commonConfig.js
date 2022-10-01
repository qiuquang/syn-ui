// 左侧胶囊菜单
export const menuList = [
  {
    label: '随便逛逛', // 菜单名称
    iconCls: 'icona-04gengduo_jindianguangguang', // icon的图标iconfont值
    // uIconName: 'photo', // u-icon的name值
    type: 'page', // 点击类型，page为跳转新页面，changeIcon为更换图标
    toUrl: '/pages/casualAround/casualAround' // page时跳转的页面
  },
  {
    label: '商品收藏',
    activeLabel: '已收藏',
    // uIconName: 'photo',
    type: 'changeIcon',
    active: false,
    iconCls: 'icona-03gengduo_shoucang',
    changedIconCls: 'icona-03gengduo_shoucang-11', // 要更换的icon图标的iconfont值
  }
]