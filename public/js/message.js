'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	// var name = "Jenn Chan";
	// $.get("/messages.json", setUpPage);
	$('#sentMsg').hide();
	var receiver = document.querySelector('.paragraph').id;

	if ( receiver == "zero") {
		$('.imgM').hide();
	}
	initializePage();

})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here
	// get the name from href
	$('#message').keypress(function(e) {
		if (e.which == 13) {
			sendMessage(e);
		}
	});
	$('.backimg').click(back); /* call back function */
	console.log("message.js");
}

/* Function to go back */
function back() {
	window.history.back();
}

/* Function to set up page */
function setUpPage(result) {
	console.log("Here");
	console.log(result);
	var data = result['messagesList'];
	for (var i = 0; i < data.length; i++) {
		if (data[i].name == name) {
			$('.imgM').hide();
		}
	}
}

function sendMessage(e) {
  e.preventDefault();
  console.log("sendMessage");
	$('#sentMsg').show();
  var message = $("#message").val();
  if (message == "") {
    console.log("No message entered!");
    return;
  } else {
    $("#sentMsg").append(message);
    var value = $("#message").val();
  }

  document.getElementById("message").value = "";
}
