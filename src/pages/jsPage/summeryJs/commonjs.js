document.write("<s"+"cript type='text/javascript' src='/js/test.js?"+Math.random()+"'></scr"+"ipt>"); 

window.requestAnimFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
            return window.setTimeout(callback, 1000 / 60);
        };
})();
// 调用：
window.requestAnimFrame(gameLoop);

//上传图片  当文件内容改变时，自动上传头像
$("#file").change(function(){
    //检验是否为图像文件  
    var file = document.getElementById("file").files[0];  
    var reader = new FileReader();  
    reader.readAsDataURL(file);  
    reader.onload=function(e){  
        //显示文件  
        $("#user-avatar").attr("src",this.result);
    }  
});
try {
      (function() {
      var logServer = 'https://magentmng.alipay.com/m.gif';
      var sample = 0.0001;
      var url = "https://a.alipayobjects.com/http-watch/1.0.7/index.js";

      // 判断比例
      if (!!window.addEventListener && Array.prototype.map && Math.random() < sample) {
        var HEAD = document.head || document.getElementsByTagName('head')[0];

        var spt = document.createElement('script');
        spt.src = url;
        HEAD.appendChild(spt);

        setTimeout(function() {
          window.httpWatch && window.httpWatch({ sample: 1, appname: 'homeproxy-31-3', logServer: logServer });
        }, 1000);
      }
      })();
} catch(e) {} 
//判断是否有flash
    function hadFlash(){
        var result = false;
        var obj = null;
        var activeXEnabled = function(){
            if(!window.ActiveXObject) return false;
            var external = window.external;
            try{
                if(external && typeof external.msActiveXFilteringEnabled != "undefined" && external.msActiveXFilteringEnabled()){
                    return false;
                }
            }catch(e){}
            return true;
        };

        if (activeXEnabled()) {
            try {
                obj =  new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                result = !!obj;
            }
            catch (e) {} finally {obj = null;}
        }
        else {
            if(navigator.plugins) result = navigator.plugins['Shockwave Flash'];
        }
        return !!result;
    }
//---页面载入时加载loading效果---------------------------------------------------------------
    var etControl = {};
etControl.process = function (config) {
    /*需要放在html中的body标签后面使用本控件*/

    var count = 0;
    var id = "loading";
    var el = "#" + id;

    $("body").append('<div id="' + id + '"></div>');

    var divTxt = "#" + id + " div";
    $(el).html("Loading...<div></div>");
    $(el).attr("style", "width:1200px;height:780px;background:#fff;padding:2px;position:fixed;left:0px;top:0px;font-size:14px;color:#527bc1;padding:284px 0px 0px 510px;background:url(../img/gi/loading-bg.jpg) no-repeat;");
    $(divTxt).attr("style", "width:10px;height:5px;background-image:url(../img/gj/pageloading.jpg);");

    /*更新进度条*/
    this.updateProcess = function (percent) {
        setTimeout(function () { $(divTxt).animate({ width: percent + "px" }) }, ++count * 500);
        if (percent == 200) {           /*100%就从页面移除loading标签*/
            setTimeout(function () {
                $(el).hide(200);
                setTimeout(function () { $(el).remove() }, 500);
            }, count * 500 + 800);
        }
    };

    var p = new etControl.process();//调用
    p.updateProcess(30);
    p.updateProcess(60);
    p.updateProcess(90);
    p.updateProcess(120);
    p.updateProcess(200);
}
//拖动范围控制
 function onDrag(e){
     var d = e.data;
     if (d.left < 0){d.left = 0}
     if (d.top < 0){d.top = 0}
     if (d.left + $(d.target).width() + $(d.target).outerWidth() > document.documentElement.clientWidth){
         d.left = document.documentElement.clientWidth - $(d.target).outerWidth();
         //拖动时候清除左margin
         $(d.target).css("margin-left",0);
     }
     if (d.top + $(d.target).outerHeight() > document.documentElement.clientHeight){
         d.top = document.documentElement.clientHeight - $(d.target).outerHeight();
     }
 }


 //设置弹出框可拖动
 $('.modal').draggable();


(function(){})();
利用闭包的特性，既可以避免内部临时变量影响全局控件，又可以在插件内部继续使用$
;(function($){})(jQuery);
在前面加一个分号，是为了更好的兼容性
后面的jquery是将jquery作为实参传递给匿名函数了


去掉左右两侧空格的插件
;(function($){
   $.extend({
      ltrim:function(text){
         retrun (text||"").replace(/^\s+/g,"");
      },
      rtrim:function( text){
         retrin(text||"").replace(/\s+$/g,"");
      }

    });


})(jQuey);

<!--常用-->


onkeyup="this.value=this.value.replace(/[^0-9xX]/g,'')"

$("#signer_photo_path").attr("src","data:image/jpeg;base64,"+data['em'].signatureContent);

<!-- js去除空格函数 -->
    String.prototype.trim = function(){return this.replace(/^\s+|\s+$/g, "");};
    // 替换左空格
    objectName:($("#s_name").val()).replace(/(^\s*)|(\s*$)/g, ""),
<!--根据不同的符号，拆分元素 -->
    //readonly、disabled的区别
    readonly的表单元素可以提交，disabled确不可以，readonly只对提交的表单文本框、密码框，多行文本框有效，而disabled都有效
    四.JSON官方的转换方式:
    http://www.json.org/提供了一个json.js,这样ie8(兼容模式),ie7和ie6就可以支持JSON对象以及其stringify()和parse()方法； 
    可以在https://github.com/douglascrockford/JSON-js上获取到这个js，一般现在用json2.js。
    原文地址是:http://www.51texiao.cn/javascriptjiaocheng/2015/0508/1062.html
    最为原始地址是:http://www.softwhy.com/forum.php?mod=viewthread&tid=8237

// <!-- keyup重复提交事件的解决方案 -->
    var last;
    $("#element").keyup(function(event){
        last = event.timeStamp;//利用event的timeStamp来标记时间，这样每次的keyup事件都会修改last的值，注意last必需为全局变量
        setTimeout(function(){    //设时延迟0.5s执行
        if(last-event.timeStamp==0){//如果时间差为0（也就是你停止输入0.5s之内都没有其它的keyup事件发生）则做你想要做的事

        },500);
    });
//鼠标滚动事件
    $("#topUp").click(function(){
        $('body,html').animate({
            scrollTop:0,
        },1000);
    });
    $(window).scroll(function(){
        if($(window).scrollTop() > 235){
            $("#subs-number").css("top",($(window).scrollTop()-150)+"px");
            $(".toTop").show();
        }else{
            $("#subs-number").css("top","60px");
            $(".toTop").hide();
        }
    });
    $(window).scroll(function(){
        //console.log($("body").height()+" - "+$(window).scrollTop()+" - "+$(window).height()+" = "+($("body").height() - $(window).scrollTop() - $(window).height()));
        if($("body").height() - $(window).scrollTop() - $(window).height() < 400)
        {
            load_page();
        }
    })
    var page = 0;
    var loading_page = false;
    var stop_loading = false;
    function load_page()
    {
        if(loading_page || stop_loading) return;

        $("#pagination-loader").addClass("active");

        loading_page = true;
        page++;
        $.get(BASE_URL + '/home/get_listing/'+page, function(data) {
            $("#pagination-loader").removeClass("active");
            if($(data).find("li").length) {
                var items = $(data).html();
                $(".vm").append(items);

                $("#azcarbon").attr("id", "azcarbon_old");

                var dom = $(data);
                
                $('.vm_featured>li').wookmark({offset: 20, itemWidth: 230, autoResize: true, container: $("#container_featured")});
                $("img[src='images/spacer.gif']").lazyload({ effect: "fadeIn" });
                loading_page = false;

                dom.filter('script').each(function(){
                    $.globalEval(this.text || this.textContent || this.innerHTML || '');
                });
            }
            else
            {
                stop_loading = true;
            }
        }, 'html');
    }
// <!-- 切换menu的选中状态 -->
<div class="box">
    <ul id="navitems">
        <li class="curr"><a href="<c:url value="/index.shtml"/>">首页</a></li>
        <li><a href="<c:url value="/goodsclass/buyIndex.shtml"/>">培训</a></li>
        <li><a href="<c:url value="/examground/examList.shtml"/>">考试</a></li> 
    </ul>
    <script type="text/javascript">
        $(function(){
            var urlstr = location.href;
            var urlstatus=false;
            $("#menu dd .item a").each(function () {
               if ((urlstr + '/').indexOf($(this).attr('href')) > -1&&$(this).attr('href')!='') {
                 $(this).parent().addClass('cur').siblings().removeClass("cur").parents("dl").siblings().find(".item").removeClass("cur"); 
                 urlstatus = true;
               } else {
                 $(this).parent().removeClass('cur');
               }
             });
             if (!urlstatus) {$("#navitems li a").eq(0).parent().addClass('cur'); }
        });
    </script>
</div>
// <!-- 鼠标浮上离开时的事件处理 -->
    var setTime,
    $_menuBox=$(".menu-list-box");
    $(".menu-dropdown").mouseenter(function () {
        var $this = $(this);
        setTime = setTimeout(function () {
            $_menuBox.show();
            $_menuBox.parent().find(".icon").removeClass("icon-chevron-down").addClass("icon-chevron-up");
        }, 100);
    }).mouseleave(function () {
        clearTimeout(setTime);
        $_menuBox.hide();
        $_menuBox.parent().find(".icon").removeClass("icon-chevron-up").addClass("icon-chevron-down");
    });

// <!-- js取小数、整数 -->
    1.丢弃小数部分,保留整数部分
    parseInt(5/2)
    2.向上取整,有小数就整数部分加1
     Math.ceil(5/2) ===3
    3,四舍五入.
    Math.round(5/2)
    4,向下取整
     Math.floor(5/2)   ===2
    Math 对象的方法
    FF: Firefox, N: Netscape, IE: Internet Explorer
    方法 描述 FF N IE
    abs(x) 返回数的绝对值 1 2 3
    acos(x) 返回数的反余弦值 1 2 3
    asin(x) 返回数的反正弦值 1 2 3
    atan(x) 以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值 1 2 3
    atan2(y,x) 返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间） 1 2 3
    ceil(x) 对一个数进行上舍入。 1 2 3
    cos(x) 返回数的余弦 1 2 3
    exp(x) 返回 e 的指数。 1 2 3
    floor(x) 对一个数进行下舍入。 1 2 3
    log(x) 返回数的自然对数（底为e） 1 2 3
    max(x,y) 返回 x 和 y 中的最高值 1 2 3
    min(x,y) 返回 x 和 y 中的最低值 1 2 3
    pow(x,y) 返回 x 的 y 次幂 1 2 3
    random() 返回 0 ~ 1 之间的随机数 1 2 3
    round(x) 把一个数四舍五入为最接近的整数 1 2 3
    sin(x) 返回数的正弦 1 2 3
    sqrt(x) 返回数的平方根 1 2 3
    tan(x) 返回一个角的正切 1 2 3
    toSource() 代表对象的源代码 1 4 -
    valueOf() 返回一个 Math 对象的原始值

//禁止浏览器刷新功能
document.onkeydown = function(e){//禁用F5刷新
    var ev = window.event || e || arguments.callee.caller.arguments[0];;
    var code = ev.keyCode || ev.which;
    if (ev && code == 116){
        if(ev.preventDefault){
            ev.preventDefault();
        }else{
            ev.keyCode ? ev.keyCode = 0 : ev.which = 0;
            ev.returnValue = false;
        }
        cancelBubble = true;
        return false;
    }
}; 

document.oncontextmenu=function(){ //这个是禁用鼠标右键 
    return false;
}

//时间倒计时
var wait=10,timeOut;
function timeMins() {
    if (wait == 0) {
        clearTimeout(timeOut);
        $(".testBg").hide();
        CloseWebPage();
        wait = 10;
    } else {
        wait--;
        timeOut=setTimeout(function(){
            timeMins();
        },1000);
        $(".testBg").show().find(".time").html(wait);
    }
}
//关闭当前页面
function CloseWebPage(){
 if (navigator.userAgent.indexOf("MSIE") > 0) {
  if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
   window.opener = null;
   window.close();
  } else {
   window.open('', '_top');
   window.top.close();
  }
 }
 else if (navigator.userAgent.indexOf("Firefox") > 0) {
  window.location.href = 'about:blank ';
 } else {
  window.opener = null;
  window.open('', '_self', '');
  window.close();
 }
}