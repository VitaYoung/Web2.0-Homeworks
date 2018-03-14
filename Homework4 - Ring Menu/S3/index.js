var buttons = {};
var numbers = [];
var flag = 1;

$.ajaxSetup({
	cache: false
});

$(function() {
	Initialize();
	buttons = $("#control-ring").children("li");
	$(".apb").click(function() {
		$(".apb").css("cursor", "default");
		for (i = 0; i <5; i++) {
			loop($(buttons[i]));
		}
	});
	
	$("#button").hover(function() {
		Initialize();
	})
});

function Initialize() {
	flag = 1;
	numbers = [];
	$(".unread").css("opacity", "0");
	$(".unread").html("");
	$(".result").html("");
	$(".disabled").removeClass("disabled").addClass("button");
	$(".apb").css("cursor", "pointer");
}

function loop(that) {
			that.find(".unread").css("opacity", "1");
			that.children("span").html("..");
			$.get("http://localhost:3000/S3/", function(data, status) {
				that.children("span").html(data.toString());
				that.removeClass("button").addClass("disabled");
				flag = 1;
				$(".unread").each(function() {
					if ($(this).html() == "..") {
						flag = 0;
					}
				});
				numbers.push(data);
				if (flag == 1) {
					var sum = 0;
					for (var i = 0; i < numbers.length; i++) {
						sum += parseInt(numbers[i]);
					}
					$(".result").html(sum);
				}
			});
}