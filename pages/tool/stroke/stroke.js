// stroke/stroke.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    materials: ["铝", "镁"],
    materialIndex: 0,
    list: [
      {
        id: 0,
        focus: false,
        label: "产品重量",
        name: "weight",
        placeholder: "带渣包重量",
        content: "",
        unit: "g",
      },
      {
        id: 1,
        focus: false,
        label: "料筒直径",
        name: "diameter",
        placeholder: "料筒内径",
        content: "",
        unit: "mm"
      },
      {
        id: 2,
        focus: false,
        label: "空打行程",
        name: "validstroke",
        placeholder: "有效长度",
        content: "",
        unit: "mm"
      }
    ]
  },
  confirmBtnClicked: function (event) {
    console.log(event)
    console.log(event.detail)
    let that = this
    console.log(that.data.list)
    let tempArray = that.data.list
    let i = Number( event.target.id);
    if (i < tempArray.length) {
      tempArray[i].focus = false
      if (i !== tempArray.length - 1) {
        tempArray[i+1].focus = true
        console.log(tempArray)
      }
    }
    that.setData({
      list: tempArray
    })
  },

  bindMaterialChange: function (e) {
    let that = this
    that.setData({
      materialIndex: e.detail.value
    })
  },
  formSubmit: function (e) {
    let that = this
    let materialVal = e.detail.value.materials; //产品材料
    let weightVal = e.detail.value.weight;  //产品克重（g）
    let diaVal = e.detail.value.diameter;//料筒直径（mm）
    let tripVal = e.detail.value.validstroke; //空打行程
    console.log()
    let a = '';
    let lb = "";
    switch (materialVal) {
      case "1":
        a = 1.8;
        lb = diaVal / 4;
        break;
      default:
        a = 2.6;
        lb = diaVal / 4;
    }
    console.log(materialVal, a, weightVal, diaVal, tripVal)
    let lh = Math.round((4 * weightVal) / (a * Math.PI * diaVal * diaVal) * 1000);
    let l = Math.round(tripVal - lh - lb);
    console.log(lh,l)
    that.setData({
      highStroke: lh,
      lowStroke: l,
    })
    console.log(that.data.highStroke,that.data.lowStroke)
  },
  formReset: function (e) {
    let that = this
    that.setData({
      highStroke: "",
      lowStroke: "",
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    that.setData({
      index: that.data.list.length
    })
    console.log(that.data.index)
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