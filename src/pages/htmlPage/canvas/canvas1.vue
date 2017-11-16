<template>
  <div><canvas id="canvas" width="1500" height="800"></canvas></div>
</template>

<script>
export default {
  data () {
    return {
      x: 0,
      y: 0,
      x0: 0,
      y0: 0,
      angle: 10,
      m: 1,
      n: 1,
      context2D: '',
      pic: null
    }
  },
  methods: {
    draw () {
      this.context2D.beginPath()
      // 设置线条颜色为蓝色
      this.context2D.strokeStyle = 'red'
      // 以canvas中的坐标点(10,10)作为绘制起始点，绘制一个宽度为80px、高度为50px的矩形
      this.context2D.rect(100, 100, 200, 200)
      // 按照指定的路径绘制直线
      this.context2D.stroke()
      this.context2D.closePath()
      this.context2D.clearRect(this.x0, this.y0, 24, 24)
      this.context2D.save() // 保存画笔状态
      this.context2D.scale(this.m, this.n)
      this.context2D.translate(this.x, this.y) // 开始移动画笔/**/
      this.x0 = this.x
      this.y0 = this.y
      this.context2D.translate(12, 12)
      this.context2D.rotate(this.angle * Math.PI / 180)
      this.context2D.translate(-12, -12) // 移动图像中心
      this.angle = this.angle + 10
      this.context2D.drawImage(this.pic, 0, 0)
      this.context2D.restore() // 绘制结束以后，恢复画笔状态
      this.x = this.x + 20
      this.y = this.y + 20
    }
  },
  created () {
    var canvas = document.getElementById('canvas')
    this.context2D = canvas.getContext('2d')
    this.pic = new Image()
    this.pic.src = '../../car.png'
    // setInterval (draw, 500) {
    //   function aa() {
    //     m = m + 2
    //     n = n + 2
    //   }
    // }
  }
}
</script>

<style>

</style>
