<template>
  <div>
    <div class="main">
        <div class="main_body">Main</div>
    </div>
    <div class="left">Left</div>
    <div class="right">Right</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .main{
      float:left;
      width:100%;
  }
  .main_body{
      margin:0 210px;
      background:#888;
      height:200px;
  }
  .left,.right{
      float:left;
      width:200px;
      height:200px;
      background:#F60;
  }
  .left{
      margin-left:-100%;
  }
  .right{
      margin-left:-200px;
  }
</style>
