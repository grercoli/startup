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
		btnClickMe.addEventListener('click', loadContent);

		//Function to fetch data from http://api.icndb.com/jokes/random
		function loadContent() {
			fetch('http://api.icndb.com/jokes/random')
				.then(function(response) {
					return response.json();
				})
				.then(function(data) {
					let html = `ID: ${data.value.id} <br> JOKE: ${data.value.joke}`;
					document.querySelector('#jokes').innerHTML = html;
				});
		}

	}); //DOM CONTENT LOADED
})();