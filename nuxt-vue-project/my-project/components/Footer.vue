<template>
	<div class="con_bottom clearfix">
		<div class="w1200  clearfix">
			<div class="bottom_list clearfix">
				<dl class="fr hotline-box">
					<dd><em>客服电话</em></dd>
					<dd><b>400 166 5999</b></dd>
					<dd>嘉银港股&copy;2018 嘉银证券有限公司版权所有 | <a href="http://www.miibeian.gov.cn" style="color:#777" target="_blank">沪ICP备15021965号-3</a></dd>
					<dd><nuxt-link tag="a" to="/statement">免责及隐私说明</nuxt-link></dd>
				</dl>
				<dl class="mr60">
					<dt>极速开户</dt>
					<dd><img style="width:112px" src="../static/down.png" alt=""></dd>
				</dl>
				<dl>
					<dt>微信公众号</dt>
					<dd><img style="width:112px;" src="../static/ewm.png" alt=""></dd>
				</dl>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
	.con_bottom{
		background-color:#333;
		padding:50px 0;
		color:#777;
		font-size:20px;
	}
	.bottom_list dl{
		display:inline-block;
		text-align:center;
		&.mr60{
			margin-right: 60px;
		}
		&.hotline-box{
			text-align: right;
		}
		dt{
			color:#fff;
			font-size:18px;
			line-height:30px;
			padding-bottom:25px;
		}
		dd{
			line-height:26px;
			margin-bottom:20px;
			font-size: 16px;
			a{
				color:#636363;
			}
			em{
				color:#999;
				font-style:normal;
				font-size:20px;
			}
			b{
				font-size:36px;
				color:#fff;
				vertical-align:middle;
				letter-spacing:.5px;
			}
		}
	}
</style>