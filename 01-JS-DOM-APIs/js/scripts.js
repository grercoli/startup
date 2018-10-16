(function() {
	"use strict";

	document.addEventListener('DOMContentLoaded', function(){
		
		//Fade in section
		document.querySelector('.is-hidden').classList.add('not-hidden');

		//Function to display an alert
		function showAlertMessage(){
			alert('This is an alert message!');
		}

		showAlertMessage();

		//Displays an alert with button is clicked
		let btnClickMe = document.querySelector('#click-me');
		btnClickMe.addEventListener('click', function() {
			showAlertMessage();
		});

	}); //DOM CONTENT LOADED
})();