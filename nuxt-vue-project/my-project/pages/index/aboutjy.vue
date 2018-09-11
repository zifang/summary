<template>
	<div>
		<div class="ab_banner">
			<a href="javascript:;"></a>
		</div>
		<div class="about-jy-con">
			<div class="w1200">
				<div class="introd-box">
					<p>嘉銀證券有限公司是香港证监会认可的持牌法团（
						<em>中央编号：AFW106</em>）。</p>
					<p>持有第1/4/9类受规管活动牌照，严格遵循《证券及期货条例》，提供安全可靠的证券服务。</p>
					<p>嘉銀證券有限公司未来将以互联网为核心，涉足全球证券经纪、投资咨询、资产管理、海外私募基金等业务板块，立志为客户提供安全、专业、高效的全球证券交易服务和海外资产管理服务，开启投资理财新的篇章。</p>
					<p class="dz-p">公司地址：香港中环皇后大道中9号</p>
					<div class="locate-addresses">
						<img src="~/static/map.png">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
	.ab_banner a{
		display:block;
		width:100%;
		height:500px;
		background:#fad5aa url(~/static/ab_jy.png) no-repeat center top;
	}
	.about-jy-con{
		padding:40px 20px;
		background-color: #fff;
	}
	.introd-box{
		color:#666;
		font-size:16px;
		line-height:30px;
		p{
			padding:8px 0;
			em{
				color:#f79331;
				font-style:normal;
			}
		}
		.dz-p{
			text-indent:0;
			padding-top:30px;
		}
	}
	.locate-addresses{
		padding:20px 0 0 40px;
	}
</style>