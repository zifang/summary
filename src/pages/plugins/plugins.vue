<template>
	<div v-highlight><pre><code>
		<strong style="color:#F56C6C">编辑器kindeditor</strong>
		用法详解：
		引入css,js文件:
		&lt;link rel="stylesheet" href="../../../resources/vendors/kindeditor/themes/default/default.css">
		&lt;script type="text/javascript" src="../../../resources/vendors/kindeditor/kindeditor-all.js"></script>
		&lt;script type="text/javascript" src="../../../resources/vendors/kindeditor/lang/zh-CN.js"></script>
		html引入：
		&lt;textarea id="editor_id" name="content" style="width:100%;height:300px;"></textarea>
		初始化编辑器：
		var editor = KindEditor.create('textarea[name="content"]',{
			uploadJson: "${ctx}/scm-api/file/upload",
			allowImageRemote: false,
			urlType: 'domain',
			extraFileUploadParams: {
				type: 1
			}
		});
		取值：
		editor.html()
		赋值：
		editor.htm("success")
		注意事项：
		图片上传需要后台人员配合，数据返回的格式需要和他们的demo保持一致，最好是保存图片的绝对路径，要不然不好处理

		<strong style="color:#F56C6C">ztree的使用</strong>
		用法详解：
		引入css,js文件：
		&lt;link rel="stylesheet" href="${cdnplugins}/zTree.v3/3.5.29/css/zTreeStyle/zTreeStyle.css">
		&lt;script src="${cdnplugins}/zTree.v3/3.5.29/js/jquery.ztree.core.js"></script>
		html引入：
		&lt;ul id="treeDemo" class="ztree"></ul>
		初始化编辑器：
		var setting = {
			data: {
				key: {
					children: "child",
					name:"name"
				},
				simpleData: {
					enable: true,
					idKey: "ccid",
					pIdKey: "pid"
				}
			},
			callback: {
				onClick: onClick
			}
		};
		$.fn.zTree.init($("#treeDemo"), setting, data.obj);
		var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
		var nodes = treeObj.getNodes(); //默认选中第一条
		if (nodes.length>0) {
			treeObj.selectNode(nodes[0]);
			<!-- ps.getColumnDetail(nodes[0].ccid); -->
		}
		单击事件：
		function onClick(event, treeId, treeNode, clickFlag) {
			var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
			treeObj.selectNode(treeNode);
			ps.getColumnDetail(treeNode.ccid);
		}	
		注意事项：
		后台返回的数据和ztree的数据不一致的时候，可以通过data来配置的如上所示：children对应后台返回的子集合，idKey是子id，pIdkey是父id
		<strong style="color:#F56C6C">jquery.form.js表单插件</strong>
		异步上传图片：
		&lt;form id="importForm" class="form-horizontal" action="${ctx}/scm-api/file/upload" method="post" enctype="multipart/form-data">
		  &lt;input type="hidden" name="type" value="1">
		  &lt;a href="javascript:;" class="a-upload" id="uploadWrapper" style="position:relative;width:80px;height:80px;display:inline-block;">
				&lt;img id="add-logo" style="width:80px;height:80px;" src="../../assets/add.png">
				&lt;input type="file" name="myfile" id="myfile" style="opacity:0;position:absolute;left:0;top:0;width:80px;height:80px;" onchange="JavaScript:ps.uploadLogo();">
			&lt;/a>
		&lt;/form> 
		ps.uploadLogo = function() {
			$('#importForm').ajaxSubmit({
				success : function(data) {
					console.log(data);
					$("#hid-logo").val(data.url);
					$("#add-logo").attr("src", data.url);
				}
			});
			return false;
		}
	</code></pre></div>
</template>
<script>
	
</script>
<style>
	
</style>