$(function () {

	//this code runs after page is fully loaded

	$("#nameform").on('submit', function (e) {
		e.preventDefault();
		var fname = $('#fname').val();
		var lname = $('#lname').val();
		var newHTML = '<h1>' + fname + ' ' + lname + '</h1>';

		var reversedfname = stringReverse(fname);
		var reversedlname = stringReverse(lname);
		var newHTMLReverse = '<h1>' + reversedfname + ' ' + reversedlname + '</h1>';

		// $(".jumbotron").removeClass('d-none').html(newHTML);
		$(".jumbotron").removeClass('d-none').html(newHTMLReverse);
		return false;  //prevents reload on submit
	});
});

// code found on codepen.io https://codepen.io/charlessipe/pen/vyVezx
function stringReverse(string) {
	var splitString = string.split("");
	console.log(splitString);
	var reverseString = splitString.reverse();
	console.log(reverseString);
	var joinString = reverseString.join("");
	return joinString;
} // end function