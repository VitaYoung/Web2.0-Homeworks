$(function() {
	Initialize("#todo");
	Initialize("#staff");
});
function Initialize(name) {
	var temp = {tablename: name, sortposition: -1, content:null};
	$(temp.tablename).children("thead").find("tr th").append("<img src = descend.png ale = descend>");
	$(temp.tablename).children("thead").find("tr th").each(function() {
		$(this).click(function() {
			var position = $(temp.tablename).children("thead").find("tr th").index($(this));
			sortclick(temp, position);
		});
	});
}
function sortclick(temp, position) {
	if (position == temp.sortposition) {
		mainsort(temp, position, "descend");
		temp.sortposition = -1;
	} else {
		mainsort(temp, position, "ascend");
		temp.sortposition = position;
	}
	$(temp.tablename).children("tbody").empty().append(temp.content);
	colorchange(temp.tablename, position);
}
function mainsort(temp, position, situation) {
	temp.content = $(temp.tablename + " tbody").children().sort(function(a, b) {
		if (situation == "descend") {
			return b.children[position].innerText.localeCompare(a.children[position].innerText);
		} else {
			return a.children[position].innerText.localeCompare(b.children[position].innerText);
		}
	});
	if (situation == "descend") {
		$(temp.tablename).children("thead").find("tr th").children("img").attr("src", "descend.png");
	} else {
		$(temp.tablename).children("thead").find("tr th").children("img").attr("src", "ascend.png");
	}
}
function colorchange(tablename, position) {
	$("tr").removeClass("alternate");
	$("tr:even").addClass("alternate");
	$("th").removeClass("click");
	var select = $(tablename).children("thead").find("tr th");
	$(select[position]).addClass("click");
}







