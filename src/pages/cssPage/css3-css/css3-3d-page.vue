<template>
  <div>
    <div class="wrap">
      <div class="inner-wrap">
        <div class="page" id="page6">6</div>
        <div class="page" id="page5">5</div>
        <div class="page" id="page4">4</div>
        <div class="page" id="page3">3</div>
        <div class="page" id="page2">2</div>
        <div class="page" id="page1">1</div>
      </div>
    </div>
    <p id="btn">
      <button type="button" @click="prevClick">上一张</button>
      <button type="button" @click="nextClick">下一张</button>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      index: 1,
      prev: '',
      next: '',
      pageCount: 0
    }
  },
  methods: {
    prevClick () {
      if (this.index === 1) {
        return false
      }
      this.index --
      document.getElementById('page' + this.index).style.transform = 'rotateY(0deg)'
    },
    nextClick () {
      if (this.index === this.pageCount.length) {
        return false
      }
      document.getElementById('page' + this.index).style.transform = 'rotateY(-90deg)'
      this.index ++
    }
  },
  created () {
    this.prev = document.getElementById('prev')
    this.next = document.getElementById('next')
    this.pageCount = document.getElementsByClassName('page')
  }
}
</script>

<style scoped>
  .wrap{
    overflow: hidden;
    -webkit-perspective:800px;
    perspective:800px;
    -webkit-perspective-origin: 50% 50%;
  }
  .inner-wrap{
    position: relative;
    margin: 50px auto;
    width: 400px;
    height: 200px;
    -webkit-transform-style: preserve-3d;
  }

  .inner-wrap > div{
    position: absolute;
    top: 0;
    right:0;
    bottom:0;
    width:200px;
    font-size: 150px;
    line-height: 200px;
    font-weight: bold;
    text-align: center;
    color: #fff;
    background-color: #000;

    -webkit-backface-visibility:hidden;	/*旋转时，不希望看到图形的背面，设置为：hidden(visible，默认)*/
    backface-visibility:hidden;
    
    -webkit-transform-origin:left;  
    transform-origin:left;  

    -webkit-transition: transform 0.5s linear;
    -moz-transition: transform 0.5s linear;
    transition: transform 0.5s linear;
  }

  #btn {
    text-align: center;
  }
</style>
