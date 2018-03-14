var buttons = {};
var numbers = [];
var flag = 1;
count = 0;

$(function() {
	Initialize();
	$(".apb").click(function() {
		$(".apb").css("cursor", "default");
		buttons = $("#control-ring").children("li");
		loop($(buttons[0]));
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
			$.get("http://localhost:3000/S2/", function(data, status) {
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
				loop($(buttons[count]));
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