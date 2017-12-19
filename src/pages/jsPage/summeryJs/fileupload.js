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