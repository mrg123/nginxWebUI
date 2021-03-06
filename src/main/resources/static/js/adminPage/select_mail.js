var mailIndex;

function showSelectMail() {

	$.ajax({
		type: 'POST',
		url: ctx + 'adminPage/admin/getMailSetting',
		dataType: 'json',
		success: function(data) {
			if (data.success) {
				$("#mail_host").val(data.obj.mail_host)
				$("#mail_port").val(data.obj.mail_port)
				$("#mail_from").val(data.obj.mail_from)
				if(data.obj.mail_ssl != null){
					$("#mail_ssl").val(data.obj.mail_ssl)
				}
			
				$("#mail_user").val(data.obj.mail_user)
				$("#mail_pass").val(data.obj.mail_pass)

				if (data.obj.mailType == 'sendCloud') {
					$("#mailSmtp").hide();
				} else {
					$("#mailSmtp").show();
				}

				form.render();

				mailIndex = layer.open({
					type: 1,
					title: "配置邮件smtp",
					area: ['400px', '500px'], // 宽高
					content: $('#mailSelectDiv')
				});
			}
		},
		error: function() {
			alert("出错了,请联系技术人员!");
		}
	});
}

function selectMailOver() {

	if($("#mail_host").val() == '' || $("#mail_port").val() == '' || $("#mail_from").val() == '' || $("#mail_user").val() == '' || $("#mail_pass").val() == ''){
		layer.msg("未填写完成");
		return;
	}
	
	$.ajax({
		type: 'POST',
		url: ctx + 'adminPage/admin/updateMailSetting',
		data: {
			mail_host: $("#mail_host").val(),
			mail_port: $("#mail_port").val(),
			mail_ssl: $("#mail_ssl").val(),
			mail_from: $("#mail_from").val(),
			mail_user: $("#mail_user").val(),
			mail_pass: $("#mail_pass").val()
		},
		dataType: 'json',
		success: function(data) {
			if (data.success) {
				layer.close(mailIndex)
			}
		},
		error: function() {
			alert("出错了,请联系技术人员!");
		}
	});


}
