
var map = new Array();
	for (var i = 0; i < 7; i++) {
		map[i] = new Array();
		for (var j = 0; j < 7; j++) {
			map[i][j] = 1;
		}
	}
	map[4] [4] = 0;
var block = new Array();
$(function () {
	jQuery.fn.extend({ 
		row: 0,
		nowrow: 0,
		col: 0,
		nowcol: 0
	});
	InitializeBlock();
	BlockClick();
	Restart();
})
function InitializeBlock() {
	for (var i = 0; i < 4; i++) {
		block[i] = $("#block1-" + (i + 1));
		block[i].row = 1;
		block[i].nowrow = 1;
		block[i].col = i + 1;
		block[i].nowcol = i + 1;
	}
	for (var i = 4; i < 8; i++) {
		block[i] = $("#block2-" + (i - 3));
		block[i].row = 2;
		block[i].nowrow = 2;
		block[i].col = i - 3;
		block[i].nowcol = i - 3;
	}
	for (var i = 8; i < 12; i++) {
		block[i] = $("#block3-" + (i - 7));
		block[i].row = 3;
		block[i].nowrow = 3;
		block[i].col = i - 7;
		block[i].nowcol = i - 7;
	}
	for (var i = 12; i < 16; i++) {
		block[i] = $("#block4-" + (i - 11));
		block[i].row = 4;
		block[i].nowrow = 4;
		block[i].col = i - 11;
		block[i].nowcol = i - 11;
	}
}
function BlockClick() {
	for (var i = 0; i < 16; i++) {
		(function(arg) {
			block[arg].click(function() {
			if (map[block[arg].nowrow - 1][block[arg].nowcol] == 0) {
				block[arg].attr("class", "row" + (block[arg].nowrow - 1) + " col" + (block[arg].nowcol) + " block");
				map[block[arg].nowrow - 1][block[arg].nowcol] = 1;
				map[block[arg].nowrow][block[arg].nowcol] = 0;
				block[arg].nowrow = block[arg].nowrow - 1;
			} else if (map[block[arg].nowrow + 1][block[arg].nowcol] == 0) {
				block[arg].attr("class", "row" + (block[arg].nowrow + 1) + " col" + (block[arg].nowcol) + " block");
				map[block[arg].nowrow + 1][block[arg].nowcol] = 1;
				map[block[arg].nowrow][block[arg].nowcol] = 0;
				block[arg].nowrow = block[arg].nowrow + 1;
			} else if (map[block[arg].nowrow][block[arg].nowcol - 1] == 0) {
				block[arg].attr("class", "row" + (block[arg].nowrow) + " col" + (block[arg].nowcol - 1) + " block");
				map[block[arg].nowrow][block[arg].nowcol - 1] = 1;
				map[block[arg].nowrow][block[arg].nowcol] = 0;
				block[arg].nowcol = block[arg].nowcol - 1;
			} else if (map[block[arg].nowrow][block[arg].nowcol + 1] == 0) {
				block[arg].attr("class", "row" + (block[arg].nowrow) + " col" + (block[arg].nowcol + 1) + " block");
				map[block[arg].nowrow][block[arg].nowcol + 1] = 1;
				map[block[arg].nowrow][block[arg].nowcol] = 0;
				block[arg].nowcol = block[arg].nowcol + 1;
			}
		})
		})(i);
	}
}
function Restart() {
	$("#restart").click(function() {
		var random = new Array();
		var position;
		for (var i = 0; i < 4; i++) {
			for (var j = 0; j < 4; j++) {
				position = Math.floor(Math.random()*16);
				while (find(random, position) == 1) {
					position = Math.floor(Math.random()*16);
				}
				random[random.length] = position;
				block[position].attr("class", "row" + (i + 1) + " col" + (j + 1) + " block");
				block[position].nowrow = i + 1;
				block[position].nowcol = j + 1;
			}		
		}
	});
}
function find(array, num) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] == num) {
			return 1;
		}
	}
	return 0;
}