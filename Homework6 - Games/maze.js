window.onload = function() {
	var start = 0;
	var cheat = 0;
	var s = document.getElementById("start");
	var e = document.getElementById("end");
	var main = document.getElementById("main-maze");
	var block = document.getElementsByClassName("block");
	var result = document.getElementById("result");
	s.onmouseover = function() {
		start = 1;
		if (cheat == 1) {
			cheat = 0;
		}
		result.className = "blank";
	}
	e.onmouseover = function() {
		if (start == 1) {
			if (cheat == 1) {
				result.textContent = "Don't cheat, you should start form the 'S' and move to the 'E' inside the maze!";
				result.className = "show";
				start = 0;
			} else {
				result.textContent = "You win!!!";
				result.className = "show";
				start = 0;
			}
		}
	}
	document.getElementById("result").onmouseover = function() {
		if (start == 1) {
			cheat = 1;
		}
	}
	document.getElementById("explanation").onmouseover = function() {
		if (start == 1) {
			cheat = 1;
		}
	}
	document.getElementById("example").onmouseover = function() {
		if (start == 1) {
			cheat = 1;
		}
	}
	document.getElementById("goodluck").onmouseover = function() {
		if (start == 1) {
			cheat = 1;
		}
	}
	main.onmouseover = function() {
		if (start == 1) {
			main.className = "changecursor";
		}
	}
	for (var i = 0; i < 5; ++i) {
		block[i].onmouseover = function() {
			if (start == 1) {
				this.style.backgroundColor = "red";
				result.textContent = "You Lose!!!";
				result.className = "show";
				main.className = "None";
				start = 0;
			}
		}
		block[i].onmouseout = function() {
			if (start == 0) {
				this.style.backgroundColor = "#DBDBDB";
			}
		}
	}
}