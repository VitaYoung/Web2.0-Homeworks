$(function() {
	output = [];
	InitializeNumber();
	InitializeFunction();
	InitializeBracket();
	ClearandBack();
	Equal();
});
function InitializeNumber() {
	for (var i = 0; i < 10; i++) {
		(function(arg) {
			$("#button" + arg).click(function() {
				output.push(arg);
			$("#output").attr("value", output.join(""));
			});
		})(i);
	}
	$("#point-button").click(function() {
		output.push(".");
		$("#output").attr("value", output.join(""));
	});
}
function InitializeFunction() {
	$("#divide-button").click(function() {
		output.push("/");
		$("#output").attr("value", output.join(""));
	});
	$("#multiply-button").click(function() {
		output.push("*");
		$("#output").attr("value", output.join(""));
	});
	$("#plus-button").click(function() {
		output.push("+");
		$("#output").attr("value", output.join(""));
	});
	$("#subtract-button").click(function() {
		output.push("-");
		$("#output").attr("value", output.join(""));
	});
}
function InitializeBracket() {
	$("#left-bracket-button").click(function() {
		output.push("(");
		$("#output").attr("value", output.join(""));
	});
	$("#right-bracket-button").click(function() {
		output.push(")");
		$("#output").attr("value", output.join(""));
	})
}
function ClearandBack() {
	$("#clear-button").click(function() {
		output = [];
		$("#output").attr("value", output.join(""));
	});
	$("#back-button").click(function() {
		output.pop();
		$("#output").attr("value", output.join(""));
	});
}
function Equal() {
	$("#equal-button").click(function() {
		try {
			var result = parseFloat((eval(output.join(""))));
		} catch(exception) {
			alert("Wrong input!!!\nPlease give a right input.");
			return;
		}
		output = [];
		output.push(result);
		$("#output").attr("value", output.join(""));
	});
}
