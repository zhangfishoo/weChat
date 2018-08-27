//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },

  // 加入购物车
  cartList: wx.getStorageSync('cart') || [],
  getCartListByStorage() {
    wx.getStorage({
      key: 'cart',
      success: (res) => {
        this.cartList = res.data
      },
    })
  },

  addToCart(id) {
    console.log(id)
    console.log(this.cartList)
    const isInCartList = this.cartList.filter(item => item.id === id).length
    console.log(isInCartList)
    if (isInCartList > 0) {
      const newItem = this.cartList.map(item => {
        if (item.id === id) {
          // return item.constructor.assign(item, { count: item.count + 1 })
          return {
            id,
            count: item.count + 1
          }
        } else {
          return item
        }
      })
      this.cartList = newItem
    } else {
      this.cartList.push({
        id,
        count: 1
      })
    }
    wx.setStorageSync('cart', this.cartList)
    const text = this.cartList.reduce((total, current) => {
      return total + current.count
    }, 0)
    wx.setTabBarBadge({
      index: 2,
      text: `${text}`,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})