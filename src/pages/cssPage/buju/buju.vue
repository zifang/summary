<template>
  <div>
    <div class="wrap"></div>
    <div class="wrapper">
      <header>
        <nav>
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
          <li>item4</li>
          <li>item5</li>
        </nav>
      </header>
      <aside></aside>
      <div class="content"></div>
      <footer></footer>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .wrap{
			width:800px;
			height: 900px;
			margin:0 auto;
			background: url(../../../assets/z_bgrnd.gif) repeat-x center top,
					url(../../../assets/z_cont.gif) no-repeat right 300px,
					url(../../../assets/z_twig.gif) no-repeat left 500px,
					url(../../../assets/zh3_select.gif) repeat-x center bottom;
		}
		header{
			position: fixed;
			top:0;left: 0;
			right:0;
			height: 60px;
			background-color: #fafafa;
			border-bottom:1px solid #dadada;
			box-shadow: 1px 0 2px rgba(0,0,0,.3);
			z-index: 5;
		}
		header nav > li{
			float: left;
			display: inline;
		}
		aside{
			position: absolute;
			left:0;
			top:60px;
			width:180px;
			bottom:80px;
			border-right:1px solid #dadada;
			z-index: 2;
		}
		.content{
			position: absolute;
			top:60px;
			left:180px;
			bottom:80px;
			right:0;
			background-color: #fafafa;
		}
		footer{
			position: fixed;
			bottom:0;
			left:0;
			right:0;
			height: 80px;
			border-top: 1px solid #dadada;
			background-color: #fafafa;
			z-index: 3;
		}
</style>
