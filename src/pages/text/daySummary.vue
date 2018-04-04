<template>
	<div>
		1、html5页面展示文章时，记得设置text-align:justify;两端对齐格式
		2、img布局的时候，会因为vertical-align:middle;产生间隙，解决方案，font-size:0;vertical-middle:bottom;
		3、background: -webkit-linear-gradient(left,#276ba3,#3e86c2);background: -o-linear-gradient(left,#276ba3,#3e86c2);background: -ms-linear-gradient(left,#276ba3,#3e86c2);background: linear-gradient(left,#276ba3,#3e86c2);filter: progid:DXImageTransform.Microsoft.gradient(GradientType=1, startColorstr=#276ba3,endColorStr=#3e86c2);-ms-filter: progid:DXImageTransform.Microsoft.gradient(GradientType=1, startColorstr=#276ba3,endColorStr=#3e86c2);
		注意：GradientType=0是从上到下
		4、jquery ajaxsubmit使用注意事项，点击一次按钮会提交几次表单的问题，
		把按钮从form表单里提出来
		//图片上传
		ps.uploadLogo = function() {
			if($("#add-annex1").val() == ''){
				alert("请先上传附件");
			}else{
				// $('#importForm').on('submit', function(event) {
						event.preventDefault();
						$('#importForm').ajaxSubmit({
								success: function(data) { // data 保存提交后返回的数据，一般为 json 数据
									// 此处可对 data 作相关处理
									// alert('提交成功！');
									if(data.url.length>0){
										for(var i=0;i<data.url.length;i++){
											$("#hid-annex"+(i+1)).val(data.url[i]);
										}
									}
								}
						});
						return false; // 阻止表单自动提交事件，必须返回false，否则表单会自己再做一次提交操作，并且页面跳转
				// });
			}
		}
	</div>
</template>