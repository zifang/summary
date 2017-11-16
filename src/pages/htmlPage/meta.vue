<template>
  <div v-highlight>
    <pre><code>
      <!-- 在head标签中添加一行代码： -->
      关键字，搜所引擎 SEO
      &lt;meta http-equiv="keywords" content="keyword1,keyword2,keyword3 />
      页面描述
      &lt;meta http-equiv="description" content="This is my page">  
      &lt;meta name="renderer" content="webkit|ie-comp|ie-stand">
      强制页面在当前窗口以独立页面显示。 
      &lt;meta http-equiv="Window-target" content="_top">
      自动刷新，并指向新的页面
      &lt;meta http-equiv="Refresh" content="2；URL=http://www.net.cn/">
      content的取值为webkit,ie-comp,ie-stand之一，区分大小写，分别代表用webkit内核，IE兼容内核，IE标准内核。
      若页面需默认用极速核，增加标签：
      &lt;meta name="renderer" content="webkit">
      若页面需默认用ie兼容内核，增加标签：
      &lt;meta name="renderer" content="ie-comp">
      若页面需默认用ie标准内核，增加标签：
      &lt;meta name="renderer" content="ie-stand">
      禁止浏览器缓存
      <!-- 是用于设定禁止浏览器从本地机的缓存中调阅页面内容，设定后一旦离开网页就无法从Cache中再调出
  用法： -->
      &lt;meta http-equiv="pragram" content="no-cache"> 
      清除缓存（再访问这个网站要重新下载！）
      &lt;meta http-equiv="cache-control" content="no-cache, must-revalidate"> 
      设定网页的到期时间
      &lt;meta http-equiv="expires" content="0"> 
      2，另外为了保险起见再加入
      &lt;meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" >
      <!-- 	这样写可以达到的效果是如果安装了GCF，则使用GCF来渲染页面，如果没有安装GCF，则使用最高版本的IE内核进行渲染。
          X-UA-Compatible：这是个是IE8的专用标记,用来指定IE8浏览器去模拟某个特定版本的IE浏览器的渲染方式(比如人见人烦的IE6)，以此来解决部分兼容问题。 -->
      <!-- 关闭AJAX缓存 -->
      $.ajaxSetup ({ 
        cache: false //关闭AJAX相应的缓存 
      });
      判断ie的各版本
      <!--[if lt IE 9]>
        <div class="alertInfo" style="width:100%;padding:5px 10px;background-color:#ff6;text-align:center; font-weight:bold;">
          <p>您正在使用低版本的IE浏览器。为了愉快的玩耍，推荐使用<a target="_blank" href="http://www.baidu.com/s?wd=%E8%B0%B7%E6%AD%8C%E6%B5%8F%E8%A7%88%E5%99%A8" style="color:#e4393c;">谷歌(Chrome)</a>、<a target="_blank" href="http://www.firefox.com.cn/download/" style="color:#e4393c;">火狐(Firefox)</a>，或者将您的浏览器升级到<span style="color:#e4393c;">IE10以上</span></p>
        </div>
      <![endif]-->
      //获取窗体高度
      function windowHeight() {
          var de = document.documentElement;
          return self.innerHeight||(de && de.clientHeight)||document.body.clientHeight;
      }
      手机端
      &lt;meta name="format-detection" content="telphone=no, email=no"/>
      忽略页面中的数字识别为电话，忽略email识别
      &lt;meta name="apple-mobile-web-app-status-bar-style" content="black"/>
      设置苹果工具栏颜色
      不让百度转码
      &lt;meta http-equiv="Cache-Control" content="no-siteapp" />
      不缓存
      &lt;meta http-equiv="cache-control" content="no-cache" />
      初始化设备
      &lt;meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimal-ui" />
      网站开启对iphone私有 web app 程序的支持
      &lt;meta content="yes" name="apple-mobile-web-app-capable" />
      改变顶部状态条的颜色  iphone私有的属性
      &lt;meta content="black" name="apple-mobile-web-app-status-bar-style" />
      &lt;meta name="screen-orientation" content="portrait" />
    </code></pre>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
