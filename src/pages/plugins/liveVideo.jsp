<%@ page contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>直播</title>
	<style>
		*{margin:0;padding:0;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}
		body{padding:0;padding-bottom:110px;background-color:#3d3d3d;color:#fff;font-size:14px;line-height:1.7em;word-break: break-word;  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);}
		h4{font-size:18px;margin-top:8px;margin-left:60px;}
		.download-box{position:fixed;bottom:0;left:0;right:0;z-index:100;height:57px;font-family: PingFangSC-Regular;background-color:#333;color:#fff;padding:7px 15px 0;overflow:hidden;zoom:1;}
		.download-box .left{float:left;padding-left:10px;}
		.download-box .btn{float:right; text-decoration:none;display:inline-block;margin-top:10px;width:90px;height:28px;line-height:28px;text-align:center;background: #FF8348;background-image: linear-gradient(-180deg, #FF8348 0%, #F5604F 93%);border-radius: 39px;overflow:hidden;font-size: 14px;color: #FFFFFF;letter-spacing: -0.4px;}
		.download-box p{opacity: 0.9;font-size: 13px;color: #FFFFFF;letter-spacing: -0.37px;}
		.download-box h4{padding-top:2px;font-size: 18px;color: #FF8348;letter-spacing: -0.57px;margin:0;}
		.download-box .img{float:left;width:50px;height:50px;overflow:hidden;}
		.download-box img{max-width:100%;}
		.title-box img{float:left;width:44px;height:44px;border-radius:50%;overflow:hidden;}
		#cnzz_stat_icon_1273441761{display: none;}
	</style>
	<script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1273441761'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s22.cnzz.com/z_stat.php%3Fid%3D1273441761' type='text/javascript'%3E%3C/script%3E"));</script>
	<script type='text/javascript'>
		//埋点代码
	    !function () {
	        window['specter'] = window['specter'] || function () {
	            (window['specter'].m = window['specter'].m || []).push(arguments);
	        }
	        var script = document.createElement("script");
	        var tag = document.getElementsByTagName("script")[0];
	        script.async = true;
	        script.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + "report.niwodai.com/collector/statics/Specter.Tracker.min.js";
	        tag.parentNode.insertBefore(script, tag);
	    }();
	    var u = navigator.userAgent;
	    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	    var appkey = '';
	    if(isAndroid){
	    	appkey = 'fe720caed1c9e61689a31c5b8101a72d';
	    }else if(isiOS){
	    	appkey = 'ab4a705b0a7954f0ab73a77b4faaddb3';
	    }
	    specter('init', appkey);
	    //设置用户自定义属性代码区域 begin 设置用户mid
	    specter('setIdentify', '');
	    //设置用户自定义属性代码区域 end
	    specter('send');
	</script>
</head>
<body>
	<div class="content">
		<div class="title-box" style="padding:15px 20px;overflow:hidden;" id="live-dis">
			<img id="video-logo" src="">
			<h4></h4>
		</div>
		<div style="height: 30%; background-color: #000; position: absolute;top: 40%;left: 0; right: 0; margin-top: -36%;">
			<div id="id_video" style="width:100%; height:auto;"></div>
		</div>
		<div class="download-box" style="display:none;">
			<a class="btn" href="http://a.app.qq.com/o/simple.jsp?pkgname=com.niwodai.nwdstock" id="ios-btn">下载</a>
			<a class="btn" href="http://static.jiayin95.com/apprelease/android/app-release.apk" style="display:none;" id="android-btn">下载</a>
			<div class="img"><img src="/scm-web/resources/images/share-logo.png"></div>
			<div class="left">
				<h4>嘉银港股</h4>
				<p>玩转港股，上嘉银！</p>
			</div>
		</div>
	</div>
	<script src="https://static.jiayin95.com/scm/vendors/jquery/dist/jquery.min.js"></script>
	<script src="//qzonestyle.gtimg.cn/open/qcloud/video/live/h5/live_connect.js" charset="utf-8"></script>
	<script type="text/javascript">
	$(function(){	
		//获取连接传递的参数
		function getQueryString(name) { 
		  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
		  if(window.location.search.indexOf(name)<0) return null;
		  var r = window.location.search.substr(1).match(reg); 
		  if (r != null) return unescape(r[2]); return null; 
		} 
		var _lid = getQueryString("lid");
		var _type = getQueryString("type");
		if(_type && _type == 1){
			$(".download-box").show();
			if(isAndroid){
				$("#android-btn").show();
				$("#ios-btn").hide();
			}else{
				$("#android-btn").hide();
				$("#ios-btn").show();
			}
		}
		$.ajax({
		    url:'${ctx}/scm-web/scs-api/live/liveInfo',
		    dataType: 'json',
		    type: 'post',
		    contentType: "application/json; charset=utf-8",
		    data: JSON.stringify({lid:_lid})
		})
		.done(function(data) {
	    if(data.code == '200') {
	    	var _data = data.result;
	    	$("#live-dis").find("h4").html(_data.name);
	    	$("title").html(_data.videoName);
	    	$("#video-logo").attr("src",_data.liveImg);
	    	
				var player = new qcVideo.Player("id_video", {
					"live_url" : _data.hlsUrl,
					"live_url2" : _data.flvUrl,
					"https": 1,
					"width" : 640,
					"height" : 480
				});
				//直接播放
				//player.play();
				
	    }else{
	    	alert(data.msg);
	    }
	  })
	})
	</script>
</body>
</html>