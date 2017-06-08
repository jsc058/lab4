'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	$('#sBoxPost').hide();
	$('#myReply').hide();
	$('.replyMyProfile').hide();
	$('#name3').hide();
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// add any functionality and listeners you want here
	$('.backimg').click(back); /* call back function */
	$('#replyM').click(reply);
	console.log("introHCI.js");
}

/* Function to go back */
function back() {
	window.history.back();
}

function reply() {
	$('.sendBox').show();
	// $('.replyMyProfile').hide();
	$('#replyBox').keypress(function(e) {
		if (e.which == 13) {
			sendReply(e);
			return false;
		}
	});
}

function sendReply(e) {
  e.preventDefault();
  console.log("sendReply");
  var message = $("#replyBox").val();
  if (message == "") {
    console.log("No message entered!");
    return;
  } else {
    $("#myReply").append(message);
  }
	$('#myReply').show();
	$('.replyMyProfile').show();
	$('#name3').show();
	document.getElementById("replyBox").value = "";
	$('.sendBox').hide();
}
