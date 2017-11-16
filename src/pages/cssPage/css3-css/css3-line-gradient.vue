<template>
  <div class="linear-box">
		<div class="linear-item"></div>
		<div class="linear-item"></div>
		<div class="linear-item"></div>
		<div class="linear-item"></div>
		<div class="linear-item"></div>
		<div class="linear-item"></div>
		<div class="linear-item"></div>
		<div class="linear-item"></div>
		<div class="linear-item"></div>
		<div class="linear-item"></div>
		<div class="linear-item"></div>
		<div class="linear-item"></div>
		<div class="linear-item"></div>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .linear-item{
    width: 300px;
    height: 80px;
    margin-bottom: 10px;
  }
  .linear-item:first-child{
    background: -webkit-linear-gradient(left, red, green);
    background: linear-gradient(left, red, green);
  }
  .linear-item:nth-child(2){
    background: -webkit-linear-gradient(top,red,green);
    background: linear-gradient(top,red,green);
  }
  .linear-item:nth-child(3){
    background: -webkit-linear-gradient(right,red,green);
    background: linear-gradient(right,red,green);
  }
  .linear-item:nth-child(4){
    background: -webkit-linear-gradient(bottom,red,green);
    background: linear-gradient(bottom,red,green);
  }
  .linear-item:nth-child(5){
    background:-webkit-linear-gradient(left, red 10%, green 30%, yellow 60%);
    /*background:-o-linear-gradient(left, red 20%, green 30%, yellow 30%, white 10%, #aaa 20%);*/
    /*background:linear-gradient(to right, red 20%, green 30%, yellow 30%, white 10%, #aaa 20%);*/
  }
  .linear-item:nth-child(6){
    background: -webkit-linear-gradient(45deg,red,green,blue);
    background: -o-linear-gradient(45deg,red,green,blue);
    background: linear-gradient(45deg,red,green,blue);
    filter: progid:DXImageTransform.Microsoft.gradient(GradientType=45deg,startColorstr=red,endColorStr=green,endColorstr=blue);
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=red,endColorStr=green,endColorstr=blue)";
  }
  .linear-item:nth-child(7){
    background: -webkit-linear-gradient(90deg,red,green,blue);
  }
  .linear-item:nth-child(8){
    background: -webkit-linear-gradient(-45deg,red,green,blue);
  }
  .linear-item:nth-child(9){
    background: -webkit-repeating-linear-gradient(0deg,red,green 10%,blue 20%);
  }
  .linear-item:nth-child(10){
    background: -webkit-linear-gradient(left,rgba(255,0,0,.5),rgba(0,0,255,.5));
    background: -moz-linear-gradient(left,rgba(255,0,0,.5),rgba(0,0,255,.5));
    background: -o-linear-gradient(left,rgba(255,0,0,.5),rgba(0,0,255,.5));
    background: linear-gradient(left,rgba(255,0,0,.5),rgba(0,0,255,.5));
    filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0, startColorstr=#1471da, endColorstr=#1C85FB);/*IE<9>*/
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient (GradientType=0, startColorstr=#1471da, endColorstr=#1C85FB)";/*IE8+*/
  }
</style>
