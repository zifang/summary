<template>
  <div>
    <div class="car-inner-box">
      <span></span><img src="../../../assets/car.png" alt="">
    </div>
    <div class="box"></div>
    <div class="dialogBox" style="">
      <div class="content" style="">
        <ul class="item-list">
          <li class="item" id="border-1">item1</li>
          <li class="item" id="border-2">item2</li>
          <li class="item" id="border-3">item3</li>
          <li class="item" id="border-4">item4</li>
          <li class="item" id="border-5">item5</li>
          <li class="item" id="border-6">item6</li>
          <li class="item" id="border-7">item7</li>
          <li class="item" id="border-8">item8sadfasdf</li>
          <li class="item" id="border-9">item9ssfdasdfa</li>
          <li class="item" id="border-10">item10asfasdfasf</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .box{
    position: fixed;
    width:20px;
    height: 20px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    color:#fff;
    background-color:black;
    z-index: 2;
  }
  .car-inner-box{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 10%;
    height: 10%;
    background-color: #f00;
    margin: auto;
    background-color: #dadada;
    text-align: center;
    z-index: 1;
  }
  .car-inner-box span{
    height: 100%;
    display: inline-block;
    vertical-align: middle;
  }
  .car-inner-box img{
    width: 50px;
    height: 80px;
    vertical-align: middle;
  }

  .dialogBox{
    position:fixed;
    top:10%;
    right:0;
    bottom:0;
    left:0;
    background-color:rgba(0,0,0,.5);
    text-align: center;
    vertical-align: middle;
    margin: auto;
  }
  .dialogBox:after{
    display: inline-block;
    content: "";
    width: 0;
    height: 100%;
    vertical-align: middle;
  }
  .content{
    display:inline-block;
    width:500px;
    height:500px;
    background-color:#fff;
  }
</style>
