'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here
	$('.backimg').click(back); /* call back function */
	console.log("write.js");
}

function select(clicked_id) {
	console.log("In Select fn");
	$("#" + clicked_id).css({
		'background-color': '#71a7f7'
	});
}

function changeButt(clicked_id) {
	console.log("changing button");
	$('.anonymous_icon').attr("src", "../images/on_button.png");
}
/* Function to go back */
function back() {
	window.history.back();
}
