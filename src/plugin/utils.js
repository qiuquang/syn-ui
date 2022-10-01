/**
 * 这是整个项目的utils工具类
 */

/**
 * 获取设备信息、右上角的胶囊信息
 */
export const uinappInit = () => {
  const app = getApp()
  app.globalData.systemInfo = uni.getSystemInfoSync()
  app.globalData.menuButton = uni.getMenuButtonBoundingClientRect()
  console.log('uinappInit-----', app)
}