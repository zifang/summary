import Vue from 'vue'

// 订单状态转换
Vue.filter('orderStatus', function (status) {
  var _text = ''
  switch (status) {
    case 1:
      _text = '订单待提交'
      break
    case 2:
      _text = '订单待确认'
      break
    case 3:
      _text = '订单待支付'
      break
    case 4:
      _text = '订单已完成'
      break
    case 5:
      _text = '手动取消'
      break
    case 6:
      _text = '自动取消'
      break
  }
  return _text
})

// 评价状态转换
Vue.filter('commentStatus', function (status) {
  var _text = ''
  switch (status) {
    case 0:
      _text = '未评价'
      break
    case 1:
      _text = '已评价'
      break
  }
  return _text
})
