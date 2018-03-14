window.onload = function() {
	var output = [];
	document.getElementById("seven-button").onclick = function() {
		output.push("7");
		document.getElementById("output").value = output.join("");
	}
	document.getElementById("eight-button").onclick = function() {
		output.push("8");
		document.getElementById("output").value = output.join("");
	}
	document.getElementById("nine-button").onclick = function() {
		output.push("9");
		document.getElementById("output").value = output.join("");
	}
	document.getElementById("divide-button").onclick = function() {
		output.push("/");
		document.getElementById("output").value = output.join("");
	}
	document.getElementById("four-button").onclick = function() {
		output.push("4");
		document.getElementById("output").value = output.join("");
	}
	document.getElementById("five-button").onclick = function() {
		output.push("5");
		document.getElementById("output").value = output.join("");
	}
	document.getElementById("six-button").onclick = function() {
		output.push("6");
		document.getElementById("output").value = output.join("");
	}
	document.getElementById("multiply-button").onclick = function() {
		output.push("*");
		document.getElementById("output").value = output.join("");
	}
	document.getElementById("one-button").onclick = function() {
		output.push("1");
		document.getElementById("output").value = output.join("");
	}
	document.getElementById("two-button").onclick = function() {
		output.push("2");
		document.getElementById("output").value = output.join("");
	}
	document.getElementById("three-button").onclick = function() {
		output.push("3");
		document.getElementById("output").value = output.join("");
	}
	document.getElementById("subtract-button").onclick = function() {
		output.push("-");
		document.getElementById("output").value = output.join("");
	}
	document.getElementById("zero-button").onclick = function() {
		output.push("0");
		document.getElementById("output").value = output.join("");
	}
	document.getElementById("point-button").onclick = function() {
		output.push(".");
		document.getElementById("output").value = output.join("");
	}
	document.getElementById("back-button").onclick = function() {
		output.pop();
		document.getElementById("output").value = output.join("");
	}
	document.getElementById("plus-button").onclick = function() {
		output.push("+");
		document.getElementById("output").value = output.join("");
	}
	document.getElementById("left-bracket-button").onclick = function() {
		output.push("(");
		document.getElementById("output").value = output.join("");
	}
	document.getElementById("right-bracket-button").onclick = function() {
		output.push(")");
		document.getElementById("output").value = output.join("");
	}
	document.getElementById("clear-button").onclick = function() {
		output = [];
		document.getElementById("output").value = output;
	}
	document.getElementById("equal-button").onclick = function() {
		try {
			var result = parseFloat((eval(output.join(""))));
		} catch(exception) {
			alert("Wrong input!!!\nPlease give a right input.");
			return;
		}
		output = [];
		output.push(result);
		document.getElementById("output").value = result;
	}
}