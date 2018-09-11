<template>
	<div>
		<div class="down-conetent content-w">
		    <div class="download-outbox">
		        <div class="download-text">
		            <h2>嘉银港股<span>&nbsp;APP</span></h2>
		            <h4>玩赚港股，尽在掌握</h4>
		            <div class="down-plat">
		                <a href="https://itunes.apple.com/cn/app/id1373634181?mt=8" target="_blank" class="down-btn">
		                    <img src="~/static/icon_ios.png">
		                </a>
		                <a href="http://static.jiayin95.com/apprelease/android/app-release.apk" class="down-btn">
		                    <img src="~/static/icon_android.png">
		                </a>
		            </div>
		        </div>
		        <img style="position:absolute;right:-6%;top:0" src="~/static/dw_02-2.png">
		    </div>
		</div>
		<div style="background-color:#5393f5;text-align:center;margin-top:-15px;padding-bottom:20px;">
		    <img src="~/static/dw_03.png">
		</div>
	</div>
</template>
<style lang="less">
	.content-w{
	    min-width:1200px;
	    margin:0 auto;
	}
	.down-conetent{
	    position: relative;
	    margin:0 auto;
	    height:714px;
	    background:url(~/static/dw_bg.png) center center;
	    text-align: center;
	    >img{
	        max-width: 100%;
	        display:inline-block;
	        vertical-align: bottom;
	    }
	    .download-outbox{
	        position: relative;
	        width: 1300px;
	        height: 714px;
	        margin: 0 auto;
	        font-size:0;
	    }
	    .download-text{
	        position:absolute;
	        top:247px;
	        left:5%;
	        text-align: left;
	        h2{
	            font-size:58px;
	            color:#3c3c3c;
	            span{
	                background: #f6604f;
	                color: #f6604f;
	                background-image: -webkit-gradient(linear,0 0 ,90 0,from(#ff8348), to(#f6604f)); 
	                -webkit-background-clip: text; 
	                -webkit-text-fill-color: transparent;
	            }
	        }
	        h4{
	            font-size: 30px; 
	            color: #545454; 
	            margin-top: 45px;
	            text-align: center;
	            letter-spacing: 10px;
	            font-weight: normal;
	        }
	    }
	    .down-plat{
	        .down-btn{
	            display:inline-block;
	            width: 170px;
	            margin-right:20px;
	            margin-top: 80px;
	            img{
	                max-width: 100%;
	            }
	        }
	    }
	}
</style>