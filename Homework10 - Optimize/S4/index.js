var buttons = {};
var numbers = [];
var flag = 1;
var random = [0, 1, 2, 3, 4]
count = 0;

$(function() {
	Initialize();
	$(".apb").click(function() {
		random.sort(() => Math.random() - 0.5);
		var order = "";
		for (var i = 0; i < 5; i++) {
			if (random[i] == 0) {
				order += "A";
			}
			if (random[i] == 1) {
				order += "B";
			}
			if (random[i] == 2) {
				order += "C";
			}
			if (random[i] == 3) {
				order += "D";
			}
			if (random[i] == 4) {
				order += "E";
			}
		}
		$(".order").html(order);
		$(".apb").css("cursor", "default");
		buttons = $("#control-ring").children("li");
		loop($(buttons[random[0]]));
	});
	$("#button").hover(function() {
		Initialize();
	})
});

function Initialize() {
	flag = 1;
	numbers = [];
	count = 0;
	$(".unread").css("opacity", "0");
	$(".unread").html("");
	$(".result").html("");
	$(".disabled").removeClass("disabled").addClass("button");
	$(".button").css("cursor", "default");
	$(".apb").css("cursor", "pointer");
}

function loop(that) {
	if (that.hasClass("button") && that.children("span").css("opacity") == "0") {
			that.find(".unread").css("opacity", "1");
			that.children("span").html("..");
			$("li").not(that).removeClass("button").addClass("disabled");
			$.get("http://localhost:3000/S4/", function(data, status) {
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
				if (count < 4) {
				count++;
				loop($(buttons[random[count]]));
			}
			if (flag == 1) {
				var sum = 0;
				for (var i = 0; i < numbers.length; i++) {
					sum += parseInt(numbers[i]);
				}
				$(".result").html(sum);
			}
			});
			
		}
}