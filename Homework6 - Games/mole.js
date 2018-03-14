var timer = null;
var timer1 = null;
var counter;
var score;
var gameon = 0;
var box = document.getElementsByClassName("hole");
window.onload = function() {
	var start = 0;
	document.getElementById("start-stop").onclick = function() {
		if (start == 0) {
			start = 1;
			counter = 30;
			score = 0;
			gameon = 1;
			document.getElementById("status").textContent = "Playing...";
			timer = setInterval(timecounter, 1000);
			chose();
		} else {
			start = 0;
			clearInterval(timer);
			gameon = 0;
			document.getElementById("status").textContent = "Game Over";
			var result = "Yourscore: " + score;
			alert(result);
		}
	}
}
function timecounter() {
	var timenum = document.getElementById("time-num");
	counter--;
	timenum.textContent = counter;
	if (counter == 0) {
		clearInterval(timer);
		document.getElementById("status").textContent = "Game Over"
		var result = "Yourscore: " + score;
		ganmeon = 0;
		alert(result);
	}
}
function chose() {
	if (gameon == 1) {
		var random = Math.floor(Math.random()*60);
		box[random].style.backgroundColor = "#AEEEEE";
		box[random].onclick = function() {
			score++;
			document.getElementById("score-num").textContent = score;
			box[random].style.backgroundColor = "white";
			chose();
		}
		for (var i = 0; i < random; i++) {
			box[i].onclick = function() {
				if (score != 0) {
					score--;
					document.getElementById("score-num").textContent = score;
				}
			}
		}
		for (var i = random + 1; i < 60; i++) {
			box[i].onclick = function() {
				if (score != 0) {
					score--;
					document.getElementById("score-num").textContent = score;
				}
			}
		}
	}
	
}