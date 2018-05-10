<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ include file="../frame/htmlWrapper.jsp"%>
<link rel="stylesheet" href="${cdnplugins}/zTree.v3/3.5.29/css/zTreeStyle/zTreeStyle.css">
<div class="row">
	<div class="col-md-12 col-sm-12 col-xs-12">
		<div class="x_panel">
			<div class="x_title">
				<h2>CMS系统管理 <small>（栏目管理）</small></h2>
				<ul class="nav navbar-right panel_toolbox">
					<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
					<li><a id="tipInfo" class="collapse-link" data-toggle="tooltip" data-placement="bottom" title="点击右边扳手，更多操作"><i class="fa fa-chevron-up"></i></a></li>
					<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
						<ul class="dropdown-menu" role="menu">
							<li><a href="JavaScript:void(0);" onclick="javaScript:ps.showAlertInfo();"><i class="fa fa-bars"></i> 操作导向</a></li>
						</ul>
					</li>
				</ul>
				<div class="clearfix"></div>
			</div>
			<div class="x_content clearfix">
				<div class="tree-box left">
					<ul id="treeDemo" class="ztree"></ul>
				</div>
				<div class="left col-md-8" style="margin-left:200px;min-height:400px;">
					<div id="toolbar" class="row mb_10" style="margin-left:1px;">
						<div class="btn-group">
			        <button class="btn btn-default" type="button" onclick="JavaScript:ps.saveColumn();"><i class="fa fa-save"></i> 保存</button>
			        <button class="btn btn-default" type="button" onclick="JavaScript:ps.addParentColumn('0');"><i class="fa fa-plus-square"></i> 新建父栏目</button>
			        <button class="btn btn-default" type="button" id="addSubColumnBtn" style="display:none;" onclick="JavaScript:ps.addParentColumn('1');"><i class="fa fa-plus-square"></i> 新建子栏目</button>
			       	<!-- <button class="btn btn-default" type="button" onclick="JavaScript:ps.deleteColumn();"><i class="fa fa-remove"></i> 删除</button> -->
						</div>
					</div>
					<form class="form-horizontal form-label-left col-md-8" style="margin-top:20px;">
						<input type="hidden" id="hid-pid">
						<input type="hidden" id="hid-csid">
					  <div class="form-group">
					    <label class="control-label col-md-2" for="first-name">ID: <span class="required">*</span>
					    </label>
					    <div class="col-md-8">
					      <input type="text" id="ccid" name="ccid" placeholder="栏目ID" readonly required="required" class="form-control col-md-7 col-xs-12">
					    </div>
					  </div>
					  <div class="form-group">
					    <label class="control-label col-md-2" for="last-name">栏目名称： <span class="required">*</span>
					    </label>
					    <div class="col-md-8">
					      <input type="text" id="columnName" name="name" placeholder="栏目名称" required="required" class="form-control col-md-7 col-xs-12">
					    </div>
					  </div>
					  <div class="form-group">
					    <label class="control-label col-md-2" for="last-name">栏目描述：</label>
					    <div class="col-md-8">
					    	<textarea id="description" class="resizable_textarea form-control col-md-7 col-xs-12" placeholder="栏目描述"></textarea>
					    </div>
					  </div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
<div id="addParentColumnBox" style="display:none;">
	<div id="addParentColumnPanel">
		<form id="demo-form2" data-parsley-validate class="form-horizontal form-label-left">
	    <div class="form-group" id="parent-node">
	      <label class="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">上级节点：<span class="required">*</span>
	      </label>
	      <div class="col-md-6 col-sm-6 col-xs-12">
	        <input type="text" id="add-pid" required="required" readonly placeholder="上级节点" class="form-control col-md-7 col-xs-12">
	      </div>
	    </div>
	    <div class="form-group">
	      <label class="control-label col-md-3 col-sm-3 col-xs-12" for="last-name">栏目名称：<span class="required">*</span>
	      </label>
	      <div class="col-md-6 col-sm-6 col-xs-12">
	        <input type="text" id="add-name" name="last-name" placeholder="栏目名称" required="required" class="form-control col-md-7 col-xs-12">
	      </div>
	    </div>
	    <div class="form-group">
	      <label for="middle-name" class="control-label col-md-3 col-sm-3 col-xs-12">栏目描述：</label>
	      <div class="col-md-6 col-sm-6 col-xs-12">
	      	<textarea id="add-description" class="resizable_textarea form-control" placeholder="栏目描述"></textarea>
	      </div>
	    </div>
	  </form>
	</div>
</div>
<script type="text/javascript" src="/scm-manage-web/resources/js/jquery.ztree.core.js"></script>
<script type="text/javascript" src="/scm-manage-web/resources/js/jquery.ztree.exedit.js"></script>
<script type="text/javascript">
	var curDragNodes,sortList=[],_wikiCcid = "fad14a-5c00-cdb6-abb6-b197-8940-61467c";
	function onClick(event, treeId, treeNode, clickFlag) {
		var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
		if(treeNode.ccid == _wikiCcid){
			$("#addSubColumnBtn").css("display","inline-block");
		}else{
			$("#addSubColumnBtn").hide();
		}
    treeObj.selectNode(treeNode);
		ps.getColumnDetail(treeNode.ccid);
	}	
	function dropPrev(treeId, nodes, targetNode) {
		var pNode = targetNode.getParentNode();
		if (pNode && pNode.dropInner === false) {
			return false;
		} else {
			for (var i=0,l=curDragNodes.length; i<l; i++) {
				var curPNode = curDragNodes[i].getParentNode();
				if (curPNode && curPNode !== targetNode.getParentNode() && curPNode.childOuter === false) {
					return false;
				}
			}
		}
		return true;
	}
	function dropInner(treeId, nodes, targetNode) {
		if (targetNode && targetNode.dropInner === false) {
			return false;
		} else {
			for (var i=0,l=curDragNodes.length; i<l; i++) {
				if (!targetNode && curDragNodes[i].dropRoot === false) {
					return false;
				} else if (curDragNodes[i].parentTId && curDragNodes[i].getParentNode() !== targetNode && curDragNodes[i].getParentNode().childOuter === false) {
					return false;
				}
			}
		}
		return true;
	}
	function dropNext(treeId, nodes, targetNode) {
		var pNode = targetNode.getParentNode();
		if (pNode && pNode.dropInner === false) {
			return false;
		} else {
			for (var i=0,l=curDragNodes.length; i<l; i++) {
				var curPNode = curDragNodes[i].getParentNode();
				if (curPNode && curPNode !== targetNode.getParentNode() && curPNode.childOuter === false) {
					return false;
				}
			}
		}
		return true;
	}
	function beforeDrag(treeId, treeNodes) {
		for (var i=0,l=treeNodes.length; i<l; i++) {
			if (treeNodes[i].drag === false) {
				curDragNodes = null;
				return false;
			} else if (treeNodes[i].pid && treeNodes[i].getParentNode().childDrag === false) {
				curDragNodes = null;
				return false;
			}
		}
		curDragNodes = treeNodes;
		return true;
	}
	function onDrop(event, treeId, treeNodes, targetNode, moveType, isCopy) {
		if(targetNode && targetNode.getParentNode()){
			sortList = targetNode.getParentNode().child;
			$.ajax({
			    url:"${ctx}/scm-api/cmsColumn/sortColumnTree",
			    dataType: 'json',
			    type: 'post',
			    contentType: "application/json; charset=utf-8",
			    data: ps.data.json2Str(sortList)
			})
			.done(function(data) {
			    if(data.code === ps.SUCCESS_CODE) {
			    	ps.infoModal('调序成功');
			    	//ps.getColumn();
			    }else{
			    	ps.infoModal(data.msg);
			    }
			})
			//console.log(sortList)
		}
	}
	$(document).ready(function(){
		ps.pageTitle = "信息管理-CMS系统管理-栏目管理";
		var setting = {
			edit: {
				drag: {
					autoExpandTrigger: true,
					prev: dropPrev,
					inner: dropInner,
					next: dropNext
				},
				enable: true,
				showRemoveBtn: false,
				showRenameBtn: false
			},
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
				onClick: onClick,
				beforeDrag: beforeDrag,
				onDrop: onDrop,
			}
		}
		//所有栏目
		ps.getColumn = function() {
			$.get("${ctx}/scm-api/cmsColumn/searchColumn/21c502-00bc-db38-0d77-3371-6ada-5432e9",function(data){
				if(data.code === ps.SUCCESS_CODE) {
					for(var i=0;i<data.obj.length;i++){
						data.obj[i]['drag'] = false;
						var _child = data.obj[i].child;
						if(_child.length>0){
							if(data.obj[i].ccid == _wikiCcid){
								data.obj[i]['childOuter'] = false;
								for(var j=0;j<_child.length;j++){
									_child[j]['dropInner'] = false;
								}
							}else{
								for(var j=0;j<_child.length;j++){
									_child[j]['drag'] = false;
								}
							}
						}
					}
			    $.fn.zTree.init($("#treeDemo"), setting, data.obj);  
			    var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
	    		var nodes = treeObj.getNodes();
					if (nodes.length>0) {
						treeObj.selectNode(nodes[0]);
						ps.getColumnDetail(nodes[0].ccid);
					}
				}else{
					ps.infoModal(data.msg);
				}
			})
		}

		//加载tree
		ps.getColumn();

		//保存
		ps.saveColumn = function() {
			if($("#columnName").val() == ''){
				ps.infoModal('栏目名称不能为空');
				return;
			}
			var postData = {
				ccid: $("#ccid").val(),
				csid: $("#hid-csid").val(),
				pid: $("#hid-pid").val(),
				name: $("#columnName").val(),
				description: $("#description").val()
			}
			$.ajax({
			    url:"${ctx}/scm-api/cmsColumn/updateColumn",
			    dataType: 'json',
			    type: 'post',
			    contentType: "application/json; charset=utf-8",
			    data: ps.data.json2Str(postData)
			})
			.done(function(data) {
			    if(data.code === ps.SUCCESS_CODE) {
			    	ps.getColumn();
			    }else{
			    	ps.infoModal(data.msg);
			    }
			})
		}
		//获取详情
		ps.getColumnDetail = function(ccid) {
			$.get("${ctx}/scm-api/cmsColumn/detailColumn/"+ ccid,function(data){
				if(data.code === ps.SUCCESS_CODE) {
					var _obj = data.obj;
					$("#hid-pid").val(_obj.pid);
					$("#hid-csid").val("21c502-00bc-db38-0d77-3371-6ada-5432e9");
					$("#ccid").val(_obj.ccid);
					$("#columnName").val(_obj.columnName);
					$("#description").val(_obj.description);
				}else{
					ps.infoModal(data.msg);
				}
			})
		}
		//添加父栏目
		var innerHtml =  $("#addParentColumnBox").html();
		ps.addParentColumn = function(type) { //type 0是父栏目，1子栏目
			var _pid = $("#ccid").val();
			_pid = type == '0'? '0': $("#ccid").val();
			$("#addParentColumnPanel").remove();
			ps.genModal("添加父栏目",innerHtml, function(){
				if($("#add-name").val() == ''){
					ps.infoModal('栏目名称不能为空');
					return;
				}
				var postData = {
					// ccid: $("#ccid").val(),
					csid: $("#hid-csid").val(),
					pid: _pid,
					name: $("#add-name").val(),
					description: $("#hid-description").val()
				}
				$.ajax({
				    url:"${ctx}/scm-api/cmsColumn/saveColumn",
				    dataType: 'json',
				    type: 'post',
				    contentType: "application/json; charset=utf-8",
				    data: ps.data.json2Str(postData)
				})
				.done(function(data) {
				    if(data.code === ps.SUCCESS_CODE) {
				    	ps.infoModal("新增成功");
				    	ps.getColumn();
				    }else{
				    	ps.infoModal(data.msg);
				    }
				})			
			},{
				"confirm_close":true,
				"submit_isShow":false,
				modalFooter_isShow:true
			});
			$("#add-pid").val($("#columnName").val());
			if(type == '0'){
				$("#parent-node").hide();
			}else{
				$("#parent-node").show();
			}
		}
		
		//删除栏目
		ps.deleteColumn = function() {
			var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
			if(treeObj.getSelectedNodes().length === 0){
				ps.infoModal("请选中要删除的栏目");
				return;
			}
			ps.confirmModal("确定要删除吗？", function() {
				$.ajax({
				    url:"${ctx}/scm-api/cmsColumn/deleteColumn/" + $("#ccid").val(),
				    type: 'delete'
				})
				.done(function(data) {
					if(data.code === ps.SUCCESS_CODE) {
						ps.infoModal("删除成功");
						ps.getColumn();
					}else{
						ps.infoModal(data.msg);
					}
				})
				.fail(function() {
					ps.infoModal("请求失败");
				})
			})
		}
	});
</script>
<%@ include file="../frame/footer.jsp"%>