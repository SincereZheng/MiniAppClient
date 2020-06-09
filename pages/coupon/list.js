const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    couponList:[],
    options:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.hideShareMenu();
    this.setData({options: options});
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
    let _this = this;
    App._get('GetUserCouponList', {type:_this.data.options.type}, result => {
      _this.setData(result.data);
    });
    // this.setData({
    //   couponList:[{tag:'通用优惠券',discount:200,min:300,name:'通用优惠券',days:5,startTime:'2020-06-09 00:00',endTime:'2020-06-14 00:00',
    //   desc:'xxxxxxxxxxxxxxxxx',pic:'https://www.ccccnet.com:809/Files/2020052909330449.jpg'}]
    // })
  },

  showLimit :function(e){
    wx.navigateTo({
      url: '/pages/coupon/index?cid='+ e.currentTarget.dataset.cid
    })
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