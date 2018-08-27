// pages/card/card.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowCoupons:true,
    isShowActivity:false,
    cardList:[],
    activityList:[]
  },

  /*点击切换到优惠券*/
  catchShowCouponsBtn(){
    this.setData({
      isShowCoupons: true,
      isShowActivity: false
    })
  },

  /*点击切换到活动页*/
  catchShowActivityBtn() {
    this.setData({
      isShowCoupons: false,
      isShowActivity: true
    })
  },

  /*获取优惠券列表*/
  getCardList(){
    wx.showLoading({
      title: '努力加载中',
    })
    wx.request({
      url: 'http://rap2api.taobao.org/app/mock/26314/api/v1/cardList/:id',
      success:(res)=>{
        this.setData({
          cardList: res.data.data
        })
      }
      ,
      fail: function (res) { },
      complete: function (res) {
        wx.hideLoading()
      },
    })
  },

  /*获取活动页列表*/
  getActivityList() {
    wx.request({
      url: 'http://rap2api.taobao.org/app/mock/26314/api/v1/activityList/:id',
      success: (res) => {
        this.setData({
          activityList: res.data.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCardList()
    this.getActivityList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})