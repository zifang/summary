<template>
	<div>
		<div class="banner">
			<div style="margin-left: -9999px;display:none;">
				<h2>海外投资，就选嘉银</h2>
				<h4>最懂你的投资专家 港股智慧交易平台</h4>
			</div>
		</div>
		<div class="news-box w1200">
			<div class="news-title clearfix">
				<a class="fr">更多></a>
				<div class="title">要闻</div>
			</div>
			<div class="news-content">
				<ul class="news-list">
					<li class="new-item clearfix">
						<img class="new-img fl" src="~/static/news.png">
						<div class="item">
							<h4><span class="fr time">11:28</span>商务部：中方将对美方外资风险评估现代化法案内容进行全面评估</h4>
							<p class="text-overflow">中美企业在深化投资合作方面有强烈的意愿，两国政府应顺应企业呼声，提供良好的环境和稳定的预期中美企业在深化投资合作方面有强烈的意愿，两国政府应顺应企业呼声，提供良好的环境和稳定的预期中美企业在深化投资合作方面有强烈的意愿，两国政府应顺应企业呼声，提供良好的环境和稳定的预期</p>
						</div>
					</li>
					<li class="new-item clearfix">
						<img class="new-img fl" src="~/static/test.png">
						<div class="item">
							<h4><span class="fr time">11:28</span>外资风险评估现代化法案内容进行全面评估</h4>
							<p class="text-overflow">企业在深化投资合作方面有强烈的意愿，两国政府应顺应企业呼声，提供良好的环境和稳定的预期</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="news-box w1200">
			<div class="news-title clearfix">
				<a class="fr">更多></a>
				<div class="title">7 × 24 &nbsp;&nbsp;<span>正在直播解盘 | 2018-08-14 13:38:00</span></div>
			</div>
			<div class="news-content">
				<ul class="news-list">
					<li class="new-item clearfix">
						<div class="fl time-box"><img src="~/static/clock.png" alt=""> 13:37</div>
						<div class="item">
							<h4 class="nomt">【商务部：中方将对美方】</h4>
							<p>中美企业在深化投资合作方面有强烈的意愿，两国政府应顺应企业呼声，提供良好的环境和稳定的预期中美企业在深化投资合作方面有强烈的意愿，两国政府应顺应企业呼声，提供良好的环境和稳定的预期中美企业在深化投资合作方面有强烈的意愿，两国政府应顺应企业呼声，提供良好的环境和稳定的预期中美企业在深化投资合作方面有强烈的意愿，两国政府应顺应企业呼声，提供良好的环境和稳定的预期</p>
						</div>
					</li>
					<li class="new-item clearfix">
						<div class="fl time-box"><img src="~/static/clock.png" alt=""> 15:35</div>
						<div class="item">
							<h4 class="nomt">【现代化法案内容进行全面评估】</h4>
							<p>中美企业在深化投资合作方面有强烈的意愿，两国政府应顺应企业呼声，提供良好的环境和稳定的预期</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				showDownload: false
			}
		},
		mounted () {
			this.target = document.body
			window.addEventListener('scroll', this.showDownloadBox)
		},
		beforeDestroy () {
			window.removeEventListener('scroll', this.showDownloadBox)
		},
		methods: {
			showDownloadBox () {
				if (this.target.scrollTop > 2000) {
					this.showDownload = true
				} else {
					this.showDownload = false
				}
			}
		}
	}
</script>
<style lang="less" scoped>
	.banner{
		height: 500px;
		width: 100%; 
		margin-bottom: 30px;
		background:url(~/static/banner_01.png) no-repeat center center;
		ul li a {
			display: flex;
			width: 100%;
			height: 100%;
			justify-content: center;
		}
	}
	.news-box{
		background-color: #fff;
		padding:0 10px 25px;
		margin-bottom: 35px;
		.news-title{
			padding: 15px 0;
			border-bottom:1px solid #e2e2e2;
			font-size:20px;
			.title{
				padding: 15px 0 15px 15px;
				border-left:10px solid #f45d3c;
				span{
					font-size: 16px;
				}
			}
			a{
				padding-top:12px;
				color:#608edb;
				font-size:16px;
			}
		}
		.news-content{
			padding: 0 15px;
			.new-item{
				padding-top: 22px;
			}
			.new-img{
				width: 150px;
				height: 100px;
				border-radius: 5px; 
				overflow:hidden;
			}
			.time-box{
				border:1px solid #dadada;
				height: 35px;
				line-height:35px;
				padding: 0 15px;
				border-radius: 30px;
				font-size: 14px;
				img{
					padding-right: 33px;
					position:relative;
					top:4px;
				}
			}
			.item{
				padding-left:30px;
				overflow:hidden;
				h4{
					margin:20px 0 18px;
					font-size: 18px;
					&.nomt{
						margin-top: 0;
					}
					.time{
						font-size: 15px;
						color:#999;
						font-weight: normal;
					}
				}
				p{
					line-height: 26px;
					color:#333;
					font-size:16px;
					&.text-overflow{
						white-space: nowrap;
						overflow:hidden;
						text-overflow: ellipsis;
					}
				}
			}
		}
	}
</style>