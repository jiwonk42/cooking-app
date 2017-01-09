
var cup = prompt("How many cups do you want to convert to tbsp?");

var cupToTbsp = function(cup) {
	return cup * 16;
}

confirm("You want " + cupToTbsp(cup) + " tablespoons.");


var cups = prompt("How many pints do you want to measure from cups?");

var pint = function(xx) {
	return xx * 2;
}

confirm(pint(cups) + " cups in " + cups + "pints");
