(function(){

	function moreBtnOnClick(editor) {
		var e = editor.ui.getDom("toolbarbox");
		if (UE.dom.domUtils.hasClass(e, "show-edui-more")) {
			UE.dom.domUtils.removeClasses(e, "show-edui-more");
		} else {
			UE.dom.domUtils.addClass(e, "show-edui-more");
		}
	}

	function insertVideo2BtnOnClick(editor) {
		alert("插入视频");
	}

	function insertImage2BtnOnClick(editor) {
		alert("插入图片");
	}


	// 更多
	UE.registerUI('more', function(editor, uiName) {
		// 注册按钮执行时的command命令，使用命令默认就会带有回退操作
		editor.registerCommand(uiName, {
			execCommand : function() {
				moreBtnOnClick(editor);
			}
		});
		var btn = new UE.ui.Button({
			name : uiName,
			title : "更多",
			cssRules : '',
			onclick : function() {
				editor.execCommand(uiName);
			}
		});
		return btn;
	});



	// 插入视频
	UE.registerUI('insertvideo2', function(editor, uiName) {
		editor.registerCommand(uiName, {
			execCommand : function() {
				insertVideo2BtnOnClick(editor);
			}
		});
		var btn = new UE.ui.Button({
			name : uiName,
			title : "视频",
			cssRules : '',
			onclick : function() {
				editor.execCommand(uiName);
			}
		});
		return btn;
	});

	// 插入图片
	UE.registerUI('insertimage2', function(editor, uiName) {
		editor.registerCommand(uiName, {
			execCommand : function() {
				insertImage2BtnOnClick(editor);
			}
		});
		var btn = new UE.ui.Button({
			name : uiName,
			title : "图片",
			cssRules : '',
			onclick : function() {
				editor.execCommand(uiName);
			}
		});
		return btn;
	});
})();
