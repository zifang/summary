<template>
  <div class="wrapper" id="out-box">
		<canvas id="cvs" width="900" height="700"></canvas>
	</div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  methods: {
    move (context) {
      var x = 100//矩形开始坐标
      var y = 100//矩形结束坐标
      var mx = 0//0右1左
      var my = 0 //0下1上
      var ml = 1//每次移动长度
      var w = 20//矩形宽度
      var h = 20//矩形高度
      var cw = 400//canvas宽度
      var ch = 300//canvas高度
      context.clearRect(0, 0, 400, 300)
      context.fillStyle = "#FFFFFF"
      context.fillRect(0, 0, 400, 300)
      context.fillStyle = "red"
      context.fillRect(x, y, w, h)     
      if (mx == 0) {
        x = x + ml
        if (x >= cw-w) {
            mx = 1
        }
      }
      else {
        x = x - ml
        if (x <= 0) {
            mx = 0
        }
      }
      if (my == 0) {
        y = y + ml
        if (y >= ch-h) {
            my = 1
        }
      }
      else {
        y = y - ml
        if (y <= 0) {
            my = 0
        }
      }
    }
  },
  created () {
      var width = document.documentElement.clientWidth
      var height = document.documentElement.clientHeight
      var outBox = document.getElementById('out-bo')
      outBox.style.width = width + "px"
      outBox.style.height = height + "px"
      var canvas = document.getElementById('cvs')
      var context = canvas.getContext('2d')
      context.beginPath()
      context.moveTo(150, 10)//从点(160,160)开始
      context.lineTo(500, 10)
      context.lineTo(500, 600)
      context.lineTo(150, 600)
      context.lineTo(150, 400)
      context.lineTo(0, 400)
      context.lineTo(0, 200)
      context.lineTo(150, 200)
      context.lineTo(150, 10)
      context.closePath()
      context.stroke()
      //绘制小汽车
      var interal = setInterval(() => {
        this.move(context)
      }, 1000)
  }
}
</script>

<style>

</style>
