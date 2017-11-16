var $ = this
$(function () {
  var storeName = sessionStorage.getItem('storeName')
  $('.dinner-name').html(storeName)
  var tableName = sessionStorage.getItem('tableName')
  $('.cantai-name').html(tableName)
  $('#keyboard-confirm').on('click', function () {
		 // var moneyTotal= $("#inputPrice").text();
		 var moneyTotal = $('#hid-value').val()
		 if (moneyTotal === '') {
		 	alert('请填写金额')
	 	 } else if (parseFloat(moneyTotal) <= 0) {
	 		alert('支付金额最少为0.01')
		 } else if (parseFloat(moneyTotal) > 200000) {
		 	alert('支付金额最高为200000')
		 } else {
		 	jsApiCall(parseFloat(moneyTotal))
		 }
  })
})

function getQueryString2 (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  if (window.location.search.indexOf(name) < 0) {
    return null
  }
  var r = window.location.search.substr(1).match(reg)
  if (r != null) return unescape(r[2])
  return null
}

// 调用微信JS api 支付
function jsApiCall (moneyTotal) {
  function getQueryString (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) return unescape(r[2]); return null
  }
	  // 服务商支付
  $.get('/betty/pay/getLineOrderPayServiceProvider.htm?code=' + getQueryString('code') + '&storeId=' + getQueryString('storeId') + '&moneyTotal=' + moneyTotal + '&storeName=' + getQueryString('storeName') + '&tableId=' + getQueryString('tableId') + '&tableName=' + getQueryString('tableName') + '', function (data, status) {
    if (data.code == 500) {
      alert(data.message)
      setTimeout(function () {
        window.location.href = '/betty/scanningspot/scanningSpotInfo.htm?storeId=' + getQueryString('storeId') + '&tableId=' + getQueryString('tableId') + '&tableCode=' + getQueryString('tableCode')
      }, 500)
      return
    }
    wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: data.appId, // 必填，公众号的唯一标识
      timestamp: data.timeStamp, // 必填，生成签名的时间戳
      nonceStr: data.nonceStr, // 必填，生成签名的随机串
      signature: data.sign, // 必填，签名，见附录1
      jsApiList: ['chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    })
    wx.ready(function () {
      wx.chooseWXPay({
        timestamp: data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
        nonceStr: data.nonceStr, // 支付签名随机串，不长于 32 位
        package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
        signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
        paySign: data.sign, // 支付签名
        success: function (res) {
          window.location.href = '/betty/scanningspot/scanningSpotInfo.htm?storeId=' + getQueryString('storeId') + '&tableId=' + getQueryString('tableId') + '&tableCode=' + getQueryString('tableCode')
        },
        cancel: function (res) {
					// 用户点击取消时的回调函数，仅部分有用户取消操作的api才会用到。
          window.location.href = '/betty/pay/orderOnLinePay.htm?busiType=5&storeId=' + getQueryString('storeId') + '&storeName=' + getQueryString('storeName') + '&tableId=' + getQueryString('tableId') + '&tableCode=' + getQueryString('tableCode') + '&tableName=' + getQueryString('tableName') + '&token=' + getQueryString('token')
        }
		  })
	 })
}