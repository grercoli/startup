/*jshint esversion: 6 */

(function() {
	"use strict";

	document.addEventListener('DOMContentLoaded', function() {
		
		//Hidden section with fade in effect
		document.querySelector('.hidden-section').classList.add('fadein');

		//Function to display an alert
		function showAlertMessage() {
			alert('This is an alert message!');
		}

		//Displays an alert when button is clicked
		let btnClickMe = document.querySelector('#click-me');
		btnClickMe.addEventListener('click', loadContent);

		//Function to load content from Rest Api
		function loadContent() {
			let xhr = new XMLHttpRequest();

			xhr.open('GET', 'http://api.icndb.com/jokes/random', true);
			xhr.onreadystatechange = function () {
				if(xhr.readyState === 4 && xhr.status === 200){
					let data = JSON.parse(xhr.responseText);
					let html = `ID: ${data.value.id} <br> JOKE: ${data.value.joke}`;
					document.querySelector('#jokes').innerHTML = html;
				}
			}

			xhr.send();
		}

	}); //DOM CONTENT LOADED
})();