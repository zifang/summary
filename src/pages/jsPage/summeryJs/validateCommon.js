// <!-- js判断是字符还是汉字的方法 -->
function checkChinese (str) {
  var reg = new RegExp('[\\u4E00-\\u9FFF]+', 'g')
  return reg(str)
}
// 方法2
function checkChinese (str) {
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 255) {
      return true
    } else {
      return false
    }
  }
}

// 验证是否是数字
function isNumber (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
// 验证是否数组
function isArray (obj) {
  return Object.prototype.toString.call(obj) === '[object Array]'
}

// 手机验证码，1-6位纯数字
if (_verNumber.length < 1 || _verNumber.length > 6 || !/^[0-9]*$/.test(_verNumber)) {
  return false
}
// 邮箱
var _reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
if (!_reg.test(_email)) {
  return false
}
// 身份证、验证码
// var regex = /^(\d{15,15}|\d{18,18}|\d{17}(\d|X|x))$/;
if (!isIdCardNo(user)) {
  return false
}
// 验证码
var codeRegex = /^[a-zA-Z0-9]{6}$/
if (!codeRegex.test(code)) {
  return false
}
// 校验身份证
function isIdCardNo (idCardNo) {
	// 15位和18位身份证号码的基本校验
  var check = /^\d{15}|(\d{17}(\d|x|X))$/.test(idCardNo)
  if (!check) { return false }
	// 判断长度为15位或18位
  if (idCardNo.length === 15) {
    return idCardNoUtil.check15IdCardNo(idCardNo)
  } else if (idCardNo.length === 18) {
    var aCity = {
      11: '北京',
      12: '天津',
      13: '河北',
      14: '山西',
      15: '内蒙古',
      21: '辽宁',
      22: '吉林',
      23: '黑龙江',
      31: '上海',
      32: '江苏',
      33: '浙江',
      34: '安徽',
      35: '福建',
      36: '江西',
      37: '山东',
      41: '河南',
      42: '湖北',
      43: '湖南',
      44: '广东',
      45: '广西',
      46: '海南',
      50: '重庆',
      51: '四川',
      52: '贵州',
      53: '云南',
      54: '西藏',
      61: '陕西',
      62: '甘肃',
      63: '青海',
      64: '宁夏',
      65: '新疆',
      71: '台湾',
      81: '香港',
      82: '澳门',
      91: '国外'
    }
    var iSum = 0
    if (idCardNo === '') { return true }
    if (!/^\d{17}(\d|x)$/i.test(idCardNo)) { return false }
    idCardNo = idCardNo.replace(/x$/i, 'a')
    if (aCity[parseInt(idCardNo.substr(0, 2))] === null) { return false }
    sBirthday = idCardNo.substr(6, 4) + '-' +
				Number(idCardNo.substr(10, 2)) + '-' +
				Number(idCardNo.substr(12, 2))
    var d = new Date(sBirthday.replace(/-/g, '/'))
    if (sBirthday !== (d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d
				.getDate())) { return false }
    for (var i = 17; i >= 0; i--) {
      iSum += (Math.pow(2, i) % 11) *
					parseInt(idCardNo.charAt(17 - i), 11)
    }
    if (iSum % 11 !== 1) { return false }
    return true
  } else {
    return false
  }
}
// 手机号码校验
function isMobile (str) {
  if (str === '' || $.trim(str) === '') { return false }
  var one = new RegExp('^13\\d{9}$')
  var two = new RegExp('^15\\d{9}$')
  var thr = new RegExp('^17\\d{9}$')
  var fou = new RegExp('^18\\d{9}$')
  var fiv = new RegExp('^14\\d{9}$')
  if (one.test(str) || two.test(str) || thr.test(str) || fou.test(str) || fiv.test(str)) {
    return true
  }
  return false
}
jQuery(document).ready(function () {
	// 中文字两个字节
  jQuery.validator.addMethod('byteRangeLength', function (
			value, element, param) {
    var length = value.length
    for (var i = 0; i < value.length; i++) {
      if (value.charCodeAt(i) > 127) {
        length++
      }
    }
    return this.optional(element) ||
				(length >= param[0] && length <= param[1])
  }, '请确保输入的值在3-15个字节之间(一个中文字算2个字节)')
	/* 追加自定义验证方法 */
	// 身份证号码验证
  jQuery.validator.addMethod('isIdCardNo', function (value,
			element) {
    return this.optional(element) || isIdCardNo(value)
		// return true;
  }, '请正确输入您的身份证号码')
	// 字符验证
  jQuery.validator.addMethod('userName', function (value,
			element) {
    return this.optional(element) ||
				/^[\u0391-\uFFE5\w]+$/.test(value)
  }, '用户名只能包括中文字、英文字母、数字和下划线')
	// 中文姓名验证
  jQuery.validator.addMethod('chName', function (value,
			element) {
    return this.optional(element) ||
				/^([\u4e00-\u9fa5\s]|[a-zA-Z])*$/
						.test(value)
  }, '姓名只能包括中文字或英文字母')
	// 车牌号验证正确格式为 豫A12345
  jQuery.validator
	.addMethod(
			'plate',
			function (value, element) {
  var length = value.length
  return this.optional(element) ||
						(length === 7 && /^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{4}[\u4e00-\u9fa5_A-Z_0-9]{1}$/
								.test(value))
}, '车牌号错误')
	// 手机号码验证
  jQuery.validator
			.addMethod(
					'mobile',
					function (value, element) {
  var length = value.length
  return this.optional(element) ||
								(length === 11 && /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/
										.test(value))
}, '手机号码错误')
	// 固定电话号码验证
  jQuery.validator.addMethod('fixedphone', function (value,
			element) {
    var tel = /^(\d{3,4}-?)?\d{7,9}$/g
    return this.optional(element) || (tel.test(value))
  }, '请正确填写您的固定电话号码')
	// 电话号码验证
  jQuery.validator
			.addMethod(
					'phone',
					function (value, element) {
  var tel = /^(\d{3,4}-?)?\d{7,9}$/g
  return this.optional(element) ||
								(tel.test(value)) ||
								(/^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/
										.test(value))
}, '请正确填写您的电话号码')
	// 邮政编码验证
  jQuery.validator.addMethod('zipCode', function (value,
			element) {
    var tel = /^[0-9]{6}$/
    return this.optional(element) || (tel.test(value))
  }, '请正确填写您的邮政编码')
  jQuery.validator.addMethod('enAndNum', function (value,
			element) {
    var ln = /^([a-z0-9A-Z])*$/
    return this.optional(element) || (ln.test(value))
  }, '请输入英文或数字')
  jQuery.validator.addMethod('enAndxh', function (value,
			element) {
    var ln = /^([a-zA-Z_])*$/
    return this.optional(element) || (ln.test(value))
  }, '请输入英文或下划线')
  jQuery.validator.addMethod('pwd', function (value, element) {
    var ln = /^([a-z0-9A-Z._#]){6,20}$/
    return this.optional(element) || (ln.test(value))
  }, '密码为6到20位英文、数字、点号、下划线和#组成')
  jQuery.validator.addMethod('vin', function (value, element) {
    var ln = /^([0-9A-Z]){17}$/
    return this.optional(element) || (ln.test(value))
  }, '车架号必须为17位')
	// 货币格式
  jQuery.validator.addMethod('currency', function (value,
			element) {
    return this.optional(element) ||
				/^(([1-9]\d*)|0)(\.\d{1,2})?$/
						.test(value)
  }, '货币格式不正确')
	// qq格式
  jQuery.validator.addMethod('qq', function (value,	element) {
    return this.optional(element) ||	/^[1-9]\d{4,9}$/.test(value)
  }, 'QQ号码格式不正确')
	// 日期
  jQuery.validator.addMethod('date', function (value,	element) {
    return this.optional(element) || /^(?:(?!0000)[0-9]{4}([-]?)(?:(?:0?[1-9]|1[0-2])\1(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])\1(?:29|30)|(?:0?[13578]|1[02])\1(?:31))|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)([-]?)0?2\2(?:29))$/
						.test(value)
  }, '请输入有效的日期格式:yyyy-MM-dd或yyyy-M-d')
	// 日期时间
  jQuery.validator.addMethod('date', function (value, element) {
    return this.optional(element) || /(\d{2}|\d{4})(?:\-)?([0]{1}\d{1}|[1]{1}[0-2]{1})(?:\-)?([0-2]{1}\d{1}|[3]{1}[0-1]{1})(?:\s)?([0-1]{1}\d{1}|[2]{1}[0-3]{1})(?::)?([0-5]{1}\d{1})(?::)?([0-5]{1}\d{1})/
						.test(value)
  }, '请输入有效的时间格式：yyyy-MM-dd HH:mm:ss')
  jQuery.extend(jQuery.validator.messages, {
    required: '不能为空',
    remote: '请修正该字段',
    email: '请输入正确格式的电子邮件',
    url: '请输入正确的网址',
    date: '请输入正确的日期',
    dateISO: '请输入正确的日期 (ISO).',
    number: '请输入正确的数字',
    digits: '只能输入整数',
    creditcard: '请输入合法的信用卡号',
    equalTo: '请再次输入相同的值',
    accept: '请输入拥有合法后缀名的字符串',
    maxlength: jQuery.validator.format('请输入一个长度最多是 {0} 的字符串'),
    minlength: jQuery.validator.format('请输入一个长度最少是 {0} 的字符串'),
    rangelength: jQuery.validator.format('请输入一个长度介于 {0} 和 {1} 之间的字符串'),
    range: jQuery.validator.format('请输入一个介于 {0} 和 {1} 之间的值'),
    max: jQuery.validator.format('请输入一个最大为 {0} 的值'),
    min: jQuery.validator.format('请输入一个最小为 {0} 的值')
  })
})
