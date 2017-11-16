<template>
  <div>
    <canvas id="canvas" width="400" height="300">  
		Your browser does not support the canvas element.  
  	</canvas>  
  </div>
</template>

<script>
export default {
  created () {
    function initiate(){
      var canvas=document.getElementById("canvas");  
      ctx = canvas.getContext('2d');
      x = 0, y =0;
      gameLoop();
    }
    function gameLoop(){
      window.setTimeout(gameLoop,500);
      drawScreen();
    }
  
    function drawScreen(){
      ctx.beginPath();
      ctx.clearRect(0,0,400,300);
      ctx.fillStyle='white';
      ctx.fillRect(0,0,400,300);
      ctx.fillStyle='red';
      ctx.arc(x,y,5,0,Math.PI*2,false);
      ctx.closePath();
      ctx.fill();
      x=x+10;
      y=y+10;
    }
  	
  	window.addEventListener('load',initiate,false);
  }
}
</script>

<style>

</style>
