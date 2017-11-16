// 提交表单
var ajax_option={
	success:function(data){
		if(data.flag==1){
			alert("申请绑定成功")
		}else{
			alert("申请绑定失败，原因："+data.msg);
		}
	}
};
$('#bandForm').on('submit', function(e) {
	e.preventDefault(); 
	var _phone=$("#linkPhone").val();
	if(!isMobile(_phone)){
		alert("手机号格式不正确，请重新输入");
		$("#linkPhone").focus();
		return false;
	}
	if($("#bandForm").valid()){	
		$(this).ajaxSubmit(ajax_option);
	}
});

// <!-- jquer取消一个ajax的请求 -->
var xhr = $.ajax({
    type: "POST",
    url: "test.php",
    data: "name=test",
    success: function(msg){
       alert( msg );
    }
});
//取消请求
xhr.abort()

$.ajaxSetup({
	error : function (XMLHttpRequest, textStatus, errorThrown) {
		console.log(XMLHttpRequest.status);
		if(XMLHttpRequest.status==401){
	    	alert('会话失效将返回登录页面');
	    	location.reload() ;
	    }
		if(XMLHttpRequest.status==500){
			alert('系统繁忙请稍后重试');
		}
}

function getAllNations (nationId) {
	var national = ["汉族", "壮族", "满族", "回族", "苗族", "维吾尔族", "土家族", "彝族", "蒙古族", "藏族", "布依族", "侗族", "瑶族", "朝鲜族", "白族", "哈尼族",
	    "哈萨克族", "黎族", "傣族", "畲族", "傈僳族", "仡佬族", "东乡族", "高山族", "拉祜族", "水族", "佤族", "纳西族", "羌族", "土族", "仫佬族", "锡伯族",
	    "柯尔克孜族", "达斡尔族", "景颇族", "毛南族", "撒拉族", "布朗族", "塔吉克族", "阿昌族", "普米族", "鄂温克族", "怒族", "京族", "基诺族", "德昂族", "保安族",
	    "俄罗斯族", "裕固族", "乌孜别克族", "门巴族", "鄂伦春族", "独龙族", "塔塔尔族", "赫哲族", "珞巴族"];
	$("<option value=''>请选择</option>").appendTo($("#" + nationId))
	for (var i = 0; i < national.length; i++) {
		$("<option value='" + i + "'>" + national[i] + "</option>").appendTo($("#" + nationId))
	}
}