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

		//Function to fetch data from http://api.icndb.com/jokes/random
		function loadContent() {
			fetch('http://api.icndb.com/jokes/random')
				.then(function(response) {
					return response.json();
				})
				.then(function(data) {
					console.log(data);
				});
		}

	}); //DOM CONTENT LOADED
})();