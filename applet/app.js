// app.js
App({
  d: {
    userId: 0,
    appId:"wxc3535c0f8933e2a1",
    appKey:"08690e5077114a532dce5596a9902451"
  },
    onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs);
    //login
    this.getUserInfo();
  },
  getUserInfo:function(cb){
    var that = this;
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function (res) {
          console.log(res);
          var code = res.code;
          //get wx user simple info
          wx.getUserInfo({
            success: function (res) {
              console.log(res);
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo);
              //get user sessionKey
              //get sessionKey
            }
          });
        }
      });
    }
  },
  globalData:{
    userInfo:null
  },
  onPullDownRefresh: function (){
    wx.stopPullDownRefresh();
  }

});





