// pages/posts/posts.js
var postData = require('../../data/post-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: 'Mar 27 2019',
    title: '这只是一个text文本'
  },

  onPostTap: function (event){
    // console.log(event)
    var postId = event.currentTarget.dataset.id;  // 获取点击事件的目标id
    // console.log(postId)
    wx.navigateTo({
      url: 'post-details/post-details?id=' + postId,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   * 页面初始化时执行的函数
   * 去服务器取数据
   */
  onLoad: function (options) {
    this.setData({
      process_key: postData.postList
      })  // setData必须传一个js对象
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   * 页面显示完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   * 页面开始显示
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
   * 下拉刷新
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