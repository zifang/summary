// 支付宝分享
const shareUrl = location.origin + ''
let imgUrl = 'http://cdn.51eparty.com/static/images/default_store.png'
let option = {
  title: '标题',
  content: '内容',
  url: shareUrl,
  image: imgUrl
}
ap.share(option, function (result) {
  if (result.shareResult) {
    console.log('分享成功')
  }
})

document.addEventListener('WeixinJSBridgeReady', function onBridgeReady () {
  WeixinJSBridge.call('hideOptionMenu')
})

// 微信分享
export function wxShare (baseUrl, storeId, store, succCallback) {
  const SUCCESS = 200
  let shareUrl = location.origin + '/#/shareStore'
    // 调用微信api分享
  axios('get', baseUrl + '/getShareSign', {notifyUrl: shareUrl}).then((response) => {
    if (response.code === SUCCESS) {
      let shareUrlFinal = location.origin + '/demo'
      _initWXshare(response.model, store, shareUrlFinal, succCallback)
    }
  })
};

function _initWXshare (wxAuth, store, shareUrlFinal, succCallback) {
  let shareTitle = store.fsShopName
  let imgUrl = 'http://cdn.51eparty.com/static/images/default_store.png'
  if (store.fsLogo) {
    if (store.fsLogo !== null && store.fsLogo !== '') {
      imgUrl = store.fsLogo
    }
  }
  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: wxAuth.appId, // 必填，公众号的唯一标识
    timestamp: wxAuth.timestamp, // 必填，生成签名的时间戳
    nonceStr: wxAuth.nonceStr, // 必填，生成签名的随机串
    signature: wxAuth.signature, // 必填，签名，见附录1
    jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline'] // 必填，需要使用的JS接口列表
  })
  wx.ready(function () {
        // 分享到朋友圈
    wx.onMenuShareTimeline({
      title: shareTitle, // 分享标题
      link: shareUrlFinal, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: imgUrl,
      success: function () {
        // 用户确认分享后执行的回调函数
        // 关闭分享模态框并给出提示
        succCallback()
      },
      cancel: function () {
                // 用户取消分享后执行的回调函数
      },
      fail: function (res) {
        alert(JSON.stringify(res))
      }
    })

    // 分享给朋友
    wx.onMenuShareAppMessage({
      title: shareTitle, // 分享标题
      desc: '千帆过尽皆不是，唯有这家合我胃，现在我把她推荐给你',
      link: shareUrlFinal, // 分享链接，该链接域名必须与当前企业的可信域名一致
      imgUrl: imgUrl,
      success: function () {
                // 用户确认分享后执行的回调函数
        succCallback()
      },
      cancel: function () {
                // 用户取消分享后执行的回调函数
      },
      fail: function (res) {
        alert(JSON.stringify(res))
      }
    })
  })
}
