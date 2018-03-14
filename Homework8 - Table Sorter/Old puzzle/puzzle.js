
var map = new Array();
	for (var i = 0; i < 7; i++) {
		map[i] = new Array();
		for (var j = 0; j < 7; j++) {
			map[i][j] = 1;
		}
	}
	map[4] [4] = 0;
window.onload = function() {
	var start = 0;
	var restart = document.getElementById("restart");
	var block = document.getElementsByClassName("block");
	for (var i = 0; i < 4; i++) {
		block[i].row = 1;
		block[i].nowrow = 1;
		block[i].col = i + 1;
		block[i].nowcol = i + 1;
	}
	for (var i = 4; i < 8; i++) {
		block[i].row = 2;
		block[i].nowrow = 2;
		block[i].col = i - 3;
		block[i].nowcol = i - 3;
	}
	for (var i = 8; i < 12; i++) {
		block[i].row = 3;
		block[i].nowrow = 3;
		block[i].col = i - 7;
		block[i].nowcol = i - 7;
	}
	for (var i = 12; i < 16; i++) {
		block[i].row = 4;
		block[i].nowrow = 4;
		block[i].col = i - 11;
		block[i].nowcol = i - 11;
	}
	for (var i = 0; i < 16; i++) {
		block[i].onclick = function() {
			if (map[this.nowrow - 1][this.nowcol] == 0) {
				this.className = "row" + (this.nowrow - 1) + " col" + (this.nowcol) + " block";
				map[this.nowrow - 1][this.nowcol] = 1;
				map[this.nowrow][this.nowcol] = 0;
				this.nowrow = this.nowrow - 1;
			} else if (map[this.nowrow + 1][this.nowcol] == 0) {
				this.className = "row" + (this.nowrow + 1) + " col" + (this.nowcol) + " block";
				map[this.nowrow + 1][this.nowcol] = 1;
				map[this.nowrow][this.nowcol] = 0;
				this.nowrow = this.nowrow + 1;
			} else if (map[this.nowrow][this.nowcol - 1] == 0) {
				this.className = "row" + (this.nowrow) + " col" + (this.nowcol - 1) + " block";
				map[this.nowrow][this.nowcol - 1] = 1;
				map[this.nowrow][this.nowcol] = 0;
				this.nowcol = this.nowcol - 1;
			} else if (map[this.nowrow][this.nowcol + 1] == 0) {
				this.className = "row" + (this.nowrow) + " col" + (this.nowcol + 1) + " block";
				map[this.nowrow][this.nowcol + 1] = 1;
				map[this.nowrow][this.nowcol] = 0;
				this.nowcol = this.nowcol + 1;
			}
		}
	}
	restart.onclick = function() {
		var random = new Array();
		start = 1;
		var position;
		for (var i = 0; i < 4; i++) {
			for (var j = 0; j < 4; j++) {
				position = Math.floor(Math.random()*16);
				while (find(random, position) == 1) {
					position = Math.floor(Math.random()*16);
				}
				random[random.length] = position;
				block[position].className = "row" + (i + 1) + " col" + (j + 1) + " block";
				block[position].nowrow = i + 1;
				block[position].nowcol = j + 1;
			}		
		}
		for (var i = 0; i < 7; i++) {
			for (var j = 0; j < 7; j++) {
				map[i][j] = 1;
			}
		}
		map[block[15].nowrow][block[15].nowcol] = 0;
	}
}
function find(array, num) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] == num) {
			return 1;
		}
	}
	return 0;
}
