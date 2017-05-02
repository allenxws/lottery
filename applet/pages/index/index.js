var app = getApp();
//index.js
Page({
  data: {
    clickedItemNum : 0
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