// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"< 返回",

    imgUrls:
    [
    'http://img.weiye.me/zcimgdir/album/file_5919646682231.png',
    'http://img.weiye.me/zcimgdir/album/file_591558e0042bb.png'
    ],

    autoPlay:true,
    indicatorDots:true,
    interval:1500,

    
    list: [
      {
        id:1,
        img:'http://img.weiye.me/zcimgdir/album/file_591c13f84f999.png',
        title:"时尚购物",
        url:'/pages/shopping/shopping'
      },
      {
        id: 2,
        img: 'http://img.weiye.me/zcimgdir/album/file_591c13f845519.png',
        title:"美味餐饮",
        url:'/pages/eating/eating'
      },
      {
        id: 3,
        img: 'http://img.weiye.me/zcimgdir/album/file_591c13f8d0b45.png',
        title:"养生美容"
      },
      {
        id: 4,
        img: 'http://img.weiye.me/zcimgdir/album/file_591c13f8576d3.png',
        title: "休闲娱乐"
      }
    ],
    card:[
      'http://img.weiye.me/zcimgdir/album/file_5910190097952.png',
      'http://img.weiye.me/zcimgdir/album/file_59101900e6cbc.png'
    ],
    word:[
      {
        title1:"商场快报",
        title2: "有吃还能看",
        img:"http://img.weiye.me/zcimgdir/album/file_591c16d7b516c.png"
      },
      {
        title1: "优惠活动",
        title2: "让你掌握第一手活动",
        img:"http://img.weiye.me/zcimgdir/album/file_591c17a0d9502.png"
      }
    ]
   
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    
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