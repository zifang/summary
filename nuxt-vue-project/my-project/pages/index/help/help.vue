<template>
	<div>
		<div class="help-item">
		    <div class="item-list w1200">
		        <ul>
		            <!-- <li v-for="item in btnLinkList"> -->
		            <li v-for="(item,index) in btnLinkList" @click="showItem(item.flag)" :key="index">
		                <a href="javascript:;">
						<!-- <router-link tag="a" to="/help?index=item.flag" > -->
		                    <img :src="item.img">
		                    <p>{{item.name}}</p>
						<!-- </router-link> -->
		                </a>
		            </li>
		        </ul>
		    </div>
		</div>
		<div id="help-content">
			<components :is="currentView"></components>
		</div>
	</div>
</template>
<script>
	import help_promble from '~/static/help_promble.png';
	import help_guide from '~/static/help_guide.png';
	import help_money from '~/static/help_money.png';
	import help_sf from '~/static/help_sf.png';
	import help_HKMarket from '~/static/help_HKMarket.png';
	import help_sec from '~/static/help_sec.png';
	import CommonQ from '~/pages/index/help/commonQ.vue'
	export default {
		data(){
			return {
				currentView: CommonQ,
				btnLinkList: [
					{
						"name": '常见问题',
						"img": help_promble,
						"flag": "promble"
					},{
						"name": '开户指南',
						"img": help_guide,
						"flag": "guide"
					},{
						"name": '资金相关',
						"img": help_money,
						"flag": "money"
					},{
						"name": '收费标准',
						"img": help_sf,
						"flag": "sf"
					},{
						"name": '港股市场',
						"img": help_HKMarket,
						"flag": "HKMarket"
					},{
						"name": '账户安全',
						"img": help_sec,
						"flag": "sec"
					}
				]
			}
		},
		watch: {
			$route(){
				let index = this.$route.query.index;
				this.showItem(index);
			}
		},
		created(){
			let index = this.$route.query.index;
			this.showItem(index);
		},
		methods: {
			showItem(param) {
				if(param == 'promble'){
					this.currentView = CommonQ
				}else if(param == 'guide'){
					import('~/pages/index/help/accountGuide.vue').then(es6 => {
						this.currentView = es6.default
					})
				}else if(param == 'money'){
					import('~/pages/index/help/foundRelated.vue').then(es6 => {
						this.currentView = es6.default
					})
				}else if(param == 'sf'){
					import('~/pages/index/help/fees.vue').then(es6 => {
						this.currentView = es6.default
					})
				}else if(param == 'HKMarket'){
					import('~/pages/index/help/hkMarket.vue').then(es6 => {
						this.currentView = es6.default
					})
				}else if(param == 'sec'){
					import('~/pages/index/help/accountSec.vue').then(es6 => {
						this.currentView = es6.default
					})
				}
			}
		}
	}	
</script>
<style lang="less">
	.hidden {
	    display: none;
	}
	table {
	    width: 100%;
	    text-align: left;
	    border-collapse: collapse;
	    table-layout: fixed;
	    td,th {
	        border: 1px solid #eee;
	        padding: 10px 15px;
	    }
	}
	.rotate90 {
	    transform-origin: center;
	    animation: animations1 0.3s ease;
	    animation-fill-mode: forwards;
	}
	.rotate0 {
	    transform-origin: center;
	    animation: animations2 0.3s ease;
	    animation-fill-mode: forwards;
	}
	@keyframes animations1 {
	    0% {
	        transform: rotate(0);
	    }
	    100% {
	        transform: rotate(90deg);
	    }
	}
	@keyframes animations2 {
	    0% {
	        transform: rotate(90deg);
	    }
	    100% {
	        transform: rotate(0);
	    }
	}
	.help-item {
		margin-bottom: 30px;
	    background: #fff;
	    .item-list {
	        ul {
	        	width:100%;
	          	overflow: hidden;
	          	zoom: 1;
				li {
					width: 16%;
					padding: 42px 0;
					display: inline-block;
					a {
						display: block;
						text-align: center;
						width: 100%;
						height: 100%;
						img {
							width: 65px;
							height: 65px;
							margin-bottom: 14px;
						}
						p {
							font-size: 18px;
							color: #333;
						}
					}
				}
	        }
	    }
	}
	#help-content {
		padding: 0 20px 30px;
		.help-faq {
			padding: 40px 20px;
			background-color: #fff;
			.flag-title {
				width: 120px;
				height: 50px;
				background: #f79f4e;
				text-align: center;
				line-height: 50px;
				font-size: 20px;
				color: #fff;
				border-radius: 0 5px 5px 0;
			}
		}
		.faq-list {
			margin-top: 10px;
			>li {
				position: relative;
				padding-left: 25px;
				border-bottom: 1px solid #e6e6e6;
				cursor: pointer;
				>img {
					position: absolute;
					top: 22px;
					left: 0;
				}
				>p {
					font-size: 16px;
					color: #555;
					line-height: 60px;
					&:hover{
						color:#333;
					}
				}
			}
			>li:last-child{
				border-bottom: none;
			}
		}
	}
	.detail-content {
	    font-size: 15px;
	    color: #555;
	    line-height: 2;
	    .detail-title {
	        font-size: 18px;
	        font-weight: bold;
	        color: #333;
	        margin-bottom: 0.4rem;
	    }
	    .detail-text {
	        margin-bottom: 0.4rem;
	    }
	    .detailList-content {
	        margin-bottom: 0.2rem;
	        ul {
	            li {
	                padding: 0.1rem 0;
	            }
	        }
	        .account-step {
	            max-width: 100%;
	            margin-bottom: 0.2rem;
	        }
	    }
	    .list-title {
	        font-weight: bold;
	        margin-bottom: 0.2rem;
	    }
	    .account-link {
	        display: flex;
	        margin: 0.2rem 0;
	        color: #3B99FC;
	        font-size: 14px;
	        text-decoration: underline;
	    }
	}
	.found-relate {
	    display: flex;
	    .f-left {
	        width: 190px;
	        float: left;
	        .found-list {
	            >li {
	                position: relative;
	                padding-left: 25px;
	                cursor: pointer;
	                color: #333;
	                >img {
	                    position: absolute;
	                    top: 22px;
	                    left: 0;
	                }
	                >p {
	                    font-size: 18px;
	                    color: inherit;
	                    line-height: 60px;
	                }
	            }
	        }
	    }
	    .f-right{
	        flex: 1;
	        overflow: auto;
	        float: left;
	        padding-left: 100px;
	    }
	}
	.innerlist{
	    li{
	        padding-left:20px;
	        color:#555;
	        p{
	            font-size:16px;
	            color:inherit;
	            line-height: 40px;
	        }
	        
	    }
	}
	.help-select{
	    color: #f68b22 !important;
	}

	.dynamic-load{
	    animation: bounceInRight 1s ease;
	}

	.title-color{
	    color: #ED7D31
	}
</style>