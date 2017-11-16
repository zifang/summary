var myDate = new Date();
	myDate.getYear(); //获取当前年份(2位)
	myDate.getFullYear(); //获取完整的年份(4位,1970-????)
	myDate.getMonth(); //获取当前月份(0-11,0代表1月)
	myDate.getDate(); //获取当前日(1-31)
	myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
	myDate.getTime(); //获取当前时间(从1970.1.1开始的毫秒数)
	myDate.getHours(); //获取当前小时数(0-23)
	myDate.getMinutes(); //获取当前分钟数(0-59)
	myDate.getSeconds(); //获取当前秒数(0-59)
	myDate.getMilliseconds(); //获取当前毫秒数(0-999)
	myDate.toLocaleDateString(); //获取当前日期
	var mytime=myDate.toLocaleTimeString(); //获取当前时间
	myDate.toLocaleString( ); //获取日期与时间

//初始化日期,为当前日期的下个月
function getNextMonth(){
	var date=new Date();
	var y=date.getFullYear();
	var m=date.getMonth()+1;
	var _date;
	m=m+1;
	if(m<10){
		m="0"+m;
		_date=y+"-"+m;
	}else if(m>9&&m<=12){
		_date=y+"-"+m;
	}else if(m>12){
		y=y+1;
		_date=y+"-"+"01";
	}
	return _date;
}

//获取两个日期的相差的天数
function getDays(strDateStart,strDateEnd){
   var strSeparator = "-";
   var oDate1;
   var oDate2;
   var iDays;
   oDate1= strDateStart.split(strSeparator);
   oDate2= strDateEnd.split(strSeparator);
   var strDateS = new Date(oDate1[0], oDate1[1]-1, oDate1[2]);
   var strDateE = new Date(oDate2[0], oDate2[1]-1, oDate2[2]);
   iDays = parseInt(Math.abs(strDateS - strDateE ) / 1000 / 60 / 60 /24)//把相差的毫秒数转换为天数 
   return iDays ;
}
//根据年月计算天数
function getDayCount(year,month){
	month = parseInt(month,10); //parseInt(number,type)这个函数后面如果不跟第2个参数来表示进制的话，默认是10进制。 
	var temp = new Date(year,month,0); 
	return temp.getDate(); 
}

//格式转换
function GetDateStr(AddDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
    var y = dd.getFullYear();
    var m = dd.getMonth()+1;//获取当前月份的日期
    var d = dd.getDate();
    if(m<10){
    	m="0"+m;
    }
    if(d<10){
    	d="0"+d;
    }
    return y+"-"+m+"-"+d;
}
//获取当天
getDate(0);
//获取前天
getDate(-1);
//后天
getDate(1);

//取时间到分钟
new Date(_onlineTime.replace(/-/g,"/")).format('yyyy-MM-dd hh:mm');

// <!--时间格式化 format="yyyy-MM-dd hh:mm:ss" -->
$(function(){
	//调用
	var startTime="2015-02-03"
	new Date(startTime)).format('yyyy-MM-dd hh:mm')
})
 
Date.prototype.format = function(format){ 
    var o = {  
	    "M+" : this.getMonth() + 1,  
	    "d+" : this.getDate(),  
	    "h+" : this.getHours(),  
	    "m+" : this.getMinutes(),  
	    "s+" : this.getSeconds(),  
	    "q+" : Math.floor((this.getMonth() + 3) / 3),  
	    "S" : this.getMilliseconds()  
    }    
    if (/(y+)/.test(format))  
    {  
    	format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));  
    }    
    for (var k in o)  
    {  
	    if (new RegExp("(" + k + ")").test(format))  
	    {  
		    format = format.replace(RegExp.$1, RegExp.$1.length == 1? o[k]: ("00" + o[k]).substr(("" + o[k]).length));  
	    }  
    }  
    return format;  
 }   
 
 //计算时间差
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
 
 var endTime = new Date();
 var seconds = datediff("s",startTime,endTime);
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
 
 $("#useTime").html(hours+"时"+minutes+"分"+seconds+"秒");

 //获取某天多少天后的日期
var GetDateStr = function(addDayCount,nowdate){
	var dd = new Date(nowdate.replace(/-/g,"/"));
	dd.setDate(dd.getDate()+addDayCount);//获取AddDayCount天后的日期
	var y = dd.getFullYear();
	var m = dd.getMonth()+1;//获取当前月份的日期
	var d = dd.getDate();
	if(m<10){
	    m="0"+m;
	}
	if(d<10){
	    d="0"+d;
	}
	return y+"-"+m+"-"+d;
};
//根据年月获取一个月有多少天
var getMonthCount = function(year,month){
    var dateObj=new Date(year,month,0);
    return dateObj.getDate();
};
//根据年月操作符获取上下一个月
var getYearMonth = function(year,month,operator){
    var date=new Date(year,month,0);
    var y=date.getFullYear();
    var ym="";
    var m="";
    if(operator=="-"){
    	m = date.getMonth();

    }else{
    	m = date.getMonth() + 2;
    }
    if(m==0){
    	y=y-1;
    	ym=y+"-"+"12";
    }else if(m<10){
        m="0"+m;
        ym=y+"-"+m;
    }else if(m>9&&m<=12){
        ym=y+"-"+m;
    }else if(m>12){
        y=y+1;
        ym=y+"-"+"01";
    }
    return ym;
};