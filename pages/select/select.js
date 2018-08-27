// pages/select/select.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    imgUrls:
      [
        'http://img.weiye.me/zcimgdir/album/file_591d0d09c8ec5.png',
        'http://img.weiye.me/zcimgdir/album/file_591d0d0a194f0.png'
      ],

    autoPlay: true,
    indicatorDots: true,
    interval: 1500,

    list: [
      {
        id: 1,
        title: "时尚购物",
      },
      {
        id: 2,
        title: "美味餐饮"
      },
      {
        id: 3,
        title: "养生美容"
      },
      {
        id: 4,
        title: "休闲娱乐"
      }
    ],
    top:[
      {
        img:'http://img.weiye.me/zcimgdir/album/file_591d0d4eeee9f.png',
        tit1:'百货优质选',
        tit2:'客户评测，实时排名'
      }
    ],

    routes:[]
  },

  /*获取食物列表*/
  getGoodFood(){
    wx.showLoading({
      title: '努力加载中', 
    })
    wx.request({
      url: 'http://rap2api.taobao.org/app/mock/26314/api/v1/goodFood/:id',
      success: (res) => {
        this.setData({
          routes: res.data.data
        })
      },
      fail: function (res) { },
      complete: function (res) { 
        wx.hideLoading()
      },

      
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getGoodFood()
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
  
  },
  
})