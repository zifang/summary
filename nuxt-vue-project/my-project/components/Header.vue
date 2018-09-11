<template>
	<div class="top">
		<div class="w1200 clearfix">
			<div class="fr">
				<ul class="nav">
					<li><nuxt-link to="/">首页</nuxt-link></li>
					<li><nuxt-link to="/download">下载</nuxt-link></li>
					<li><nuxt-link to="/aboutjy">关于</nuxt-link></li>
					<li><nuxt-link to="/help/help">帮助</nuxt-link></li>
					<li>
						<a href="javascript:;" @mouseenter="showTwoCode=true" @mouseleave="showTwoCode=false">开户</a>
						<div class="code-img" v-show="showTwoCode">
							<p>请扫描二维码进行开户</p>
							<img src="~/static/down.png" />
						</div>
					</li>
					<li><a class="login-btn"><span>注册</span>|<span>登录</span></a></li>
				</ul>
			</div>
			<div class="logo"><a href="#"><img src="~/static/logo.png" alt=""></a></div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				showTwoCode: false
			}
		}
	}
</script>