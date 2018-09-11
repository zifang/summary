<template>
  <section class="container">
    <Header/>
    <nuxt-child/>
    <Footer/>
  </section>
</template>
<script>
  import Header from '~/components/Header.vue'
  import Footer from '~/components/Footer.vue'
  export default {
    components: {
      Header,
      Footer
    },
    head: {
      titleTemplate: '%s',
      meta: [
        { hid: 'description', name: 'description', content: '嘉银证券,最懂你的港股互联网证券交易商,香港证监会认可的持牌法团,提供港股极速开户及交易服务。' },
        { hid: 'Keywords', name: 'Keywords', content: '嘉银证券,港股开户,港股行情,证券开户'}
      ]
    }
  }
</script>
<style lang="less">
  .top{
		height:110px;
		line-height:110px;
		background:#f1f1f1; 
		.nav li{
			position: relative;
			display: inline-block;
			margin-left:40px;
			font-size:16px;
			a{
				color:#333;
				// &:hover{
				// 	font-weight:bold;
				// }
			}
			.router-link-active{
				font-weight: bold;
			}
			.login-btn{
				display: inline-block;
				background-color:#f45d3c;
				height: 36px;
				line-height: 36px;
				border-radius:30px;
				padding: 0 10px;
				color:#fff;
				span{
					padding: 0 10px;
				}
			}
		}
		.code-img{
			position:absolute;
			right:-32px;
			top:90px;
			height:185px;
			width: 160px;
			background-color:#fff;    
			box-shadow: 1px 2px 5px 0 rgba(0,0,0,.2);
			padding:12px;
			text-align:center;
			z-index:9999;
			&:before{
				position:absolute;
				top:-15px;
				right:35px;
				content:"";
				width:0;
				height:0;
				border-left:15px solid transparent;
				border-right:15px solid transparent;
				border-bottom:15px solid #fff;
			}
			p{
				display:block;
				font-size:12px;
				color:#333;
				line-height:18px;
			}
		}
	}
</style>
