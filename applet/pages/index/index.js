var app = getApp();
var common = require("../../utils/common.js");
//index.js
Page({
  data: {
    clickedItemNum : 0,
    welfare3D:null,
    sevenMusic:null,
    doubleColor:null,
    superLottery:null,
    arrange3:null,
    arrange5:null,
    sevenStar:null,
    sixAndHalf:null,
    fourGoals:null,
    fourteenWinLose:null
  },

  /**
   * 启动时调用接口，加载所有彩种的最新一期
   */
  onLoad: function () {
      this.getAllLottery();
  },

  /**
   * 调用接口获取所有彩种最新一期，并更新数据
   */
  getAllLottery: function(){
    var that = this;
    var url = "/lottery.php";
    var uid = app.data.uid;
    var token = app.data.token;
    url = url + "?" + "uid=" + uid + "&token=" + token;
    var method = "get";
    var successCallBack = function(response){
      that.initAllLottery(response.data);
    }
    common.sentHttpRequestToServer(url, "", method, successCallBack);
  },

  /**
   * 处理接口返回数据，将所有彩种最新一期更新到页面数据
   */
  initAllLottery: function(lotteryData){
    for(var i=0; i<lotteryData.length; i++){
      lotteryData[i].opencode = common.stringToArray(lotteryData[i].opencode, ",");
      console.log(lotteryData[i]);
      switch (lotteryData[i]._id){
        case "fc3d": this.setData({welfare3D: lotteryData[i]}) ; break;
        case "qlc": this.setData({sevenMusic: lotteryData[i]}) ; break;
        case "ssq": this.setData({doubleColor: lotteryData[i]}) ; break;
        case "dlt": this.setData({superLottery: lotteryData[i]}) ; break;
        case "pl3": this.setData({arrange3: lotteryData[i]}) ; break;
        case "pl5": this.setData({arrange5: lotteryData[i]}) ; break;
        case "qxc": this.setData({sevenStar: lotteryData[i]}) ; break;
        case "zcbqc": this.setData({sixAndHalf: lotteryData[i]}) ; break;
        case "zcjqc": this.setData({fourGoals: lotteryData[i]}) ; break;
        case "zcsfc": this.setData({fourteenWinLose: lotteryData[i]}) ; break;
        default: break;
      }
    }
  },

  /** 
   * 滑动切换顶部tab 
   */  
  onSwiperSlide: function(event) {  
    var that = this;  
    that.setData( { clickedItemNum: event.detail.current });  
  },


  /** 
   * 点击切换顶部tab
   */
  onSwiperClick: function(event) {
    console.log("enter change swiper item method");
    console.log(event.currentTarget.dataset.itemnumber);
    console.log(this.data.clickedItemNum);
    var that = this;
    if( this.data.clickedItemNum === event.currentTarget.dataset.itemnumber ) {  
      return false;  
    } else {
      that.setData( {
        clickedItemNum: event.currentTarget.dataset.itemnumber  
      })
    }
  }  
});