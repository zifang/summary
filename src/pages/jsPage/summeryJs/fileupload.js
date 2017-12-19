// 使用jquery.form.js 的ajaxSubmit异步上传图片
<div class="col-sm-10">
	<input type="hidden" name="logo" id="hid-logo">
  <form id="importForm" class="form-horizontal" action="${ctx}/scm-api/file/upload" method="post" enctype="multipart/form-data">
     <div class="textfile-box" style="display:inline-block;margin-right:5px;position:relative;">
        <input type="hidden" name="type" value="1">
        <a href="javascript:;" class="a-upload" id="uploadWrapper" style="position:relative;width:80px;height:80px;display:inline-block;border:1px solid #ddd;">
					<img id="add-logo" style="width:80px;height:80px;" src="../../../resources/images/add.png">
					<input type="file" name="myfile" id="myfile" style="opacity:0;position:absolute;left:0;top:0;width:80px;height:80px;" onchange="JavaScript:ps.uploadLogo();">
				</a>
      </div>
	</form> 
</div>

//图片上传
ps.uploadLogo = function() {
  $('#importForm').ajaxSubmit({
      success : function(data) {
      	console.log(data);
      	if(data.code === ps.SUCCESS_CODE) {
      		$("#hid-logo").val(data.obj.path);
      		$("#add-logo").attr("src",data.obj.path);
      	}else{
      		ps.infoModal(data.msg);
      	}
      }
  });
  return false;
}


// ajaxfileupload
<div class="control-group">
  <label class="control-label"><span class="colorg">＊</span>品牌LOGO：</label>
  <div class="controls">
      <!-- <input class="input-xlarge postfile" type="file"> -->
      <a href="javascript:;" class="a-upload" id="uploadWrapper">
        <input type="file" name="storePic" id="storePic" onchange="ajaxFileUploadChange()">
      </a>
      <span class="mr10 text-gray">尺寸：大于600*600px、大小：100kb以内</span>
  </div>
</div>

function ajaxFileUploadChange(){

    //$("#loading").ajaxStart(function(){$(this).show();}).ajaxComplete(function(){$(this).hide();});
   //执行上传文件操作的函数
    $.ajaxFileUpload({
     url:'/anne/storelist/uploadAction',
     secureuri:false,                           //是否启用安全提交,默认为false 
        fileElementId:'storePic',               //文件选择框的id属性
        dataType:'text',                           //服务器返回的格式,可以是json或xml等
        success:function(data, status){            //服务器响应成功时的处理函数
            data = data.replace(/<pre.*?>/g, '');  //ajaxFileUpload会对服务器响应回来的text内容加上<pre style="....">text</pre>前后缀
            data = data.replace(/<PRE.*?>/g, '');
            data = data.replace("<PRE>", '');
            data = data.replace("</PRE>", '');
            data = data.replace("<pre>", '');
            data = data.replace("</pre>", '');     //本例中设定上传文件完毕后,服务端会返回给前台[0`filepath]
            if(data!="" ){         //0表示上传成功(后跟上传后的文件路径),1表示失败(后跟失败描述)
               //$("img[id='uploadImage']").attr("src", data.substring(2));
              
               $("#brandLogoUrl").val(data);
               $("#uploadWrapper").css({
                "background":"url('"+ data +"')"
               });
               if(data.length>120){
                //alert("图片上传文件过大!");
                alertBox.show("error","图片上传文件过大!",false,"","",true);
               }else{
                // alert("图片上传成功!");
                //alertBox.show("success","图片上传成功！",false,"","",true);
               }
            }else{
              //alert("图片上传失败，请重试！");
              alertBox.show("error","图片上传失败，请重试！",false,"","",true);
            }
        },
        error:function(data, status, e){ //服务器响应失败时的处理函数
            $('#result').html('图片上传失败，请重试！！');
        }
   });
}
