<template>
  <div v-highlight><pre><code>
    当浏览器看到响应头中有一个Expires头时，它会和相应的过期时间最贱一起保存到其缓存中。只要组件没有过期，浏览器就会使用缓存版本而不会进行任何HTTP请求。
    减少http请求：
      CSS Sprites:合并图片，减少http请求
      合并脚本和样式表
    CDN内容发布网络
      用于发布静态内容，如图片、脚本、样式表和Flash
    添加Expires头
      添加缓存，减少页面请求
    压缩组件
      Gzip目前最流行和最有效的压缩方法
      较少响应的数据量，提高响应时间，减少页面大小
    将样式表放在顶部
      放在底部会阻止内容逐步呈现，页面会白屏（放到底部）
      使用link标签将样式表放到head中
    将脚本放到底部
      放在头部，阻塞页面内容呈现
    避免CSS表达式
      影响页面的加载时间，不停的求值，导致表达式的新性能低下
    使用外部的js和css
      可以缓存页面，便于维护，组件重用
    减少DNS查找
    精简JS
      较少文件大小，提高加载速度，
    精简css
      合并相同的类，移除不使用的类
    避免重定向
      从一个URL重新路由到另外一个URL
      301,302最常用的两种
    移除重复脚本
      提供一个公用的模块加载
    使Ajax可缓存
    减少页面大小
    使用最新版本的jquery,新版本会改进性能，新增功能

    Number():可以用于任何数据类型转换成数值；
  	parseInt()、parseFloat():专门用于把字符串转换成数值；

    获取链接后的字符串参数：
    function getQueryString(name) { 
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
      if(window.location.search.indexOf(name)<0){
        return null;
      }
      var r = window.location.search.substr(1).match(reg); 
      if (r != null) return decodeURI(r[2]); 
      return null; 
    }
    自适应字体大小：
    function setHtml(){
      var width = document.documentElement.clientWidth;
      document.querySelector('html').style.fontSize = 20 * (width / 320) + 'px';
    }
    调用：
    //重置字体
    setHtml();
      window.addEventListener('resize', function(){
      setHtml();
    });

    计算时间差：
    //根据时间获时和分钟,调用时间倒计时
    function getHourMinus(starTime,endTime){
      var seconds = datediff("s",starTime,endTime);
      var minutes = 0;
      var hours = 0;
      if(seconds>60){
        minutes = parseInt(seconds/60);
        seconds = seconds%60;
        if(minutes>60){
          hours = parseInt(minutes/60);
          minutes = minutes%60;
        }
      }
    if(hours==0){
      if(minutes==0){
        return seconds+"秒";
      }else{
        return minutes+"分"+seconds+"秒";
      }
    }else{
      if(minutes==0){
          return hours+"时"+seconds+"秒";
        }else{
          return hours+"时"+minutes+"分"+seconds+"秒";
        }
      }
    }
    //计算日期差
    function datediff(strInterval,dtStart,dtEnd) { 
      if (typeof dtStart=='string'){dtStart = StringToDate(dtStart);}
      if (typeof dtEnd=='string'){dtEnd = StringToDate(dtEnd);}
      switch (strInterval) { 
        case 's' :return parseInt((dtEnd - dtStart) / 1000); 
        case 'n' :return parseInt((dtEnd - dtStart) / 60000); 
        case 'h' :return parseInt((dtEnd - dtStart) / 3600000); 
        case 'd' :return parseInt((dtEnd - dtStart) / 86400000); 
        case 'w' :return parseInt((dtEnd - dtStart) / (86400000 * 7)); 
        case 'm' :return (dtEnd.getMonth()+1)+((dtEnd.getFullYear()-dtStart.getFullYear())*12) - (dtStart.getMonth()+1); 
        case 'y' :return dtEnd.getFullYear() - dtStart.getFullYear(); 
      } 
    } 
    function StringToDate(str) {
      str = str.replace(/-/g, "/");
      var val = Date.parse(str);
      var newDate = new Date(val);
      return newDate;
    }

    随机打赏：
    //选择随机打赏
    var string = "1.88,1.68,1.66,1.58,5.18,6.66,8.88,9.99,13.14,15.88,16.88,16.66,18.88,15.88,19.99"; //原始数据
    var array = string.split(",");//转化为数组
    $("#rand-btn").on("click",function(){
      $(".reward-money li.checked").removeClass("checked");
      var randVal = array[Math.round(Math.random()*(array.length-1))]; //随机抽取一个值
      $("#money-input").val(randVal);
      $("#evaluateBtn").hide();//隐藏评价按钮
      $("#evaluateAndMoneyBtn").show();//显示评价打赏按钮
    });
    var marquee = function(){
      return {
        marqueeSlider:function(speed,container,obj,copyObj){
        var _speed = speed;
        var _container = document.getElementById(container);
        var _obj = document.getElementById(obj);
        var _objCopy = document.getElementById(copyObj);
        _objCopy.innerHTML = _obj.innerHTML;
        function Marquee(){
        if (_obj.offsetWidth-_container.scrollLeft <= 0){ 
        _container.scrollLeft-=_objCopy.offsetWidth;
      }else {
        _container.scrollLeft++;
      }
    }
    var MyMar = setInterval(Marquee,_speed);
        // _container.onmouseover = function() {clearInterval(MyMar)}
        // _container.onmouseout = function() {MyMar = setInterval(Marquee,_speed)}
        }
      }
    }();
    使用方法：
    var _noticeSize = $("#notice-list .notice").length;
    if(window.screen.width*0.8 < $("#notice-list .notice").width() || _noticeSize>1){
      marquee.marqueeSlider(30,"notice-list","box1","box2");
    }

    //动态计算font-size基础值
    (function(doc, win) {
      var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function() {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if (clientWidth > 700) {
        clientWidth = 700;
      };
      docEl.style.fontSize = 16 * (clientWidth / 375) + 'px';
    };
    if (!doc.addEventListener) return;
      win.addEventListener(resizeEvt, recalc, false);
      doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);

    //微信禁止菜单按钮
    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
    // 通过下面这个API隐藏右上角按钮
      WeixinJSBridge.call('showOptionMenu');
    });
    wx.showOptionMenu();
    html5头像上传：
    //头像上传
    $("#updateHead").change(function(){
      var preview = $("#updateHead"); 
      var imgObj = $("#weixinHead");
      var file = document.querySelector('input[type=file]').files[0]; 
      var reader = new FileReader(); 
      reader.readAsDataURL(file); 
      reader.onload = function (e) { 
      $(imgObj).attr("src",e.target.result);
    }; 
    if(file) { 
      var ajax_option={
        url:"/betty/users/upload_img.htm",//默认是form action
        success:function(data){
        //修改成功
        }
      }
      $('#uploadForm').ajaxSubmit(ajax_option);
      } else { 
        preview.src = ""; 
      } 
    });

    node项目的部署安装
    和生产环境一样，需要安装pm2
    npm install pm2 -g
    pm2 start/restart bin/www   启动/重启项目
    pm2 list  列出启动的项目
    pm2 stop www（项目名称）  停止启动的项目
    pm2 delete  www 删除项目



    1、有些事情，只要你努力的去做了，不管结果怎样，都应该释怀不是吗
    2、永远不要相信所谓的等你做好了，怎么怎么滴，要相信握在自己手里的，才是自己的
  </code></pre></div>
</template>