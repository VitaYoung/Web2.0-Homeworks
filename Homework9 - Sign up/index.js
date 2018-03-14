$(function() {
	var error = $("#error");
	$("#message").submit(function() {
		error.hide("fast");
		var inputs = $("#inputs input");
		var warnings = $("#inputs p");
		var flag = true;
		if ($(inputs[0]).val().match(/^[a-zA-Z]{1}[a-zA-Z0-9_]{5,17}$/) != null) {
			$(warnings[0]).hide("fast");
		} else {
			$(warnings[0]).show("normal");
			flag = false;
		}
		if ($(inputs[1]).val().match(/^[1-9]{1}[0-9]{7}$/) != null) {
			$(warnings[1]).hide("fast");
		} else {
			$(warnings[1]).show("normal");
			flag = false;
		}
		if ($(inputs[2]).val().match(/^[1-9]{1}[0-9]{10}$/) != null) {
			$(warnings[2]).hide("fast");
		} else {
			$(warnings[2]).show("normal");
			flag = false;
		}
		if ($(inputs[3]).val().match(/^[a-zA-Z_\-]+@+[a-zA-Z_\-]+\.+[a-zA-Z]{2,4}$/) != null) {
			$(warnings[3]).hide("fast");
		} else {
			$(warnings[3]).show("normal");
			flag = false;
		}
		return flag;
	});
	$("#resetinputs").click(function() {
		warnings.hide("fast");
		error.hide("fast");
	});
	if (error.html() != "Error") {
		error.show("fast");
	}
});