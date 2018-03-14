var buttons = {};
var numbers = [];
var flag = 1;

$(function() {
	Initialize();
	buttons = $("#control-ring").children("li");
	buttons.click(function() {
		var that = $(this);
		if (that.hasClass("button") && that.children("span").css("opacity") == "0") {
			that.find(".unread").css("opacity", "1");
			that.children("span").html("..");
			$("li").not(that).removeClass("button").addClass("disabled");
			$.get("http://localhost:3000/S1/", function(data, status) {
				that.children("span").html(data.toString());
				that.removeClass("button").addClass("disabled");
				flag = 1;
				$(".unread").each(function() {
					if ($(this).html() == "") {
						$(this).parent().removeClass("disabled").addClass("button");
						flag = 0;
					}
				});
				numbers.push(data);
				if (flag == 1) {
					$(".info").css("background-color", "rgba(48, 63, 159, 1)");
					$(".info").css("cursor", "pointer");
				}
			});
		}
	});
	$(".info").click(function() {
		if (flag == 1) {
			var sum = 0;
			for (var i = 0; i < numbers.length; i++) {
				sum += parseInt(numbers[i]);
			}
			$(".result").html(sum);
			$(".info").css("background-color", "#7E7E7E");
			$(".info").css("cursor", "default");
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
	$(".info").css("background-color", "#7E7E7E");
	$(".info").css("cursor", "default");
}