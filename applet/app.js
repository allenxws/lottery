// app.js
App({
  data: {
    baseUrl:"http://open.kgaoding.com",
    uid: "1023556",
    token: "5b6eae36301c4774a14d32111b74adbb",
  },
    onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs);
  },
  globalData:{
    userInfo:null
  },
  onPullDownRefresh: function (){
    wx.stopPullDownRefresh();
  }

});





