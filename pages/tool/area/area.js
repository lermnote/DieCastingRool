// pages/tool/area.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    numberOfCasting: [1, 2,3,4,5,6],
    numberIndex:0,
    list: [
      {
        id: 0,
        label: "A1投影面积",
        name: "A1",
        placeholder: "A1产品部分投影面积",
        unit: "cm²",
      },
      {
        id: 1,
        label: "料筒直径",
        name: "diameter",
        placeholder: "料筒内径",
        unit: "mm"
      }
    ]
  },
  bindMaterialChange: function (e) {
    let that = this
    that.setData({
      numberIndex: e.detail.value
    })
  },
  formSubmit: function (e) {
    let that = this
    let numberOfCasting = e.detail.value.numberOfCasting+1
    let A1 =Number( e.detail.value.A1); 
    let diaVal = e.detail.value.diameter;
    let A2 = 0.12 * A1;
    let A3 = 0.21 * A1;
    let biscuitArea = (Math.PI * diaVal * diaVal) /( 4*100)
    let S = A1 * numberOfCasting + A2 + A3 + biscuitArea
    that.setData({
      projectArea: S.toFixed(2)
    })
  },
  formReset: function (e) {
    let that = this
    that.setData({
      projectArea:""
    })
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