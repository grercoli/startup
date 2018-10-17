(function() {
	"use strict";

	document.addEventListener('DOMContentLoaded', function() {
		
		//Hidden section with fade in effect
		document.querySelector('.is-hidden').classList.add('fadein');

		//Function to display an alert
		function showAlertMessage() {
			alert('This is an alert message!');
		}

		//Displays an alert when button is clicked
		let btnClickMe = document.querySelector('#click-me');
		btnClickMe.addEventListener('click', showAlertMessage);

	}); //DOM CONTENT LOADED
})();