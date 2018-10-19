/*jshint esversion: 6 */

(function() {
	"use strict";

	document.addEventListener('DOMContentLoaded', function() {
		
		let jokesSection = document.querySelector('#jokes');

		//Hidden section with fade in effect
		document.querySelector('.hidden-section').classList.add('fadein');

		//Function to display an alert
		function showAlertMessage() {
			alert('This is an alert message!');
		}

		//Reusable function to load content from Rest Api
		function loadContent(config) {
			return new Promise(function(resolve, reject) {
				let xhr = new XMLHttpRequest();
				xhr.open(config.method, config.url, true);
				
				xhr.onload = function() {
					if(xhr.status === 200) {
						resolve(JSON.parse(xhr.response));
					} else {
						reject(Error('Could not load data succesfully, error code: ' + xhr.statusText));
					}
				};
				
				xhr.onerror = function () {
					reject(Error('There was a network error'));
				};

				xhr.send();
			});
		}

		//Function to load jokes from Rest Api: http://api.icndb.com/jokes/random
		function loadJokes() {
			let config = {
				method : 'GET',
				url : 'http://api.icndb.com/jokes/random'
			}

			loadContent(config)
				.then(function(data) {
					let html = `ID: ${data.value.id} <br> JOKE: ${data.value.joke}`;
					document.querySelector('#jokes').innerHTML = html;
				})
				.catch(function(error) {
					jokesSection.classList.add('red-content');
					jokesSection.innerHTML = error;
				});
		}

		//Displays jokes (rest api content) when button is clicked
		let btnClickMe = document.querySelector('#click-me');
		btnClickMe.addEventListener('click', loadJokes);

		//Function to load content with a specific parameter
		function loadWithParameter(param) {
			let config = {
				method : 'GET',
				url : ' https://api.github.com/search/repositories?q=' + param
			}

			loadContent(config)
				.then(function(data) {
					console.log(data);
				})
				.catch(function(error){
					console.log(error);
				});
		}

		//Call function loadWithParameter with 'Javascript' as param
		loadWithParameter('Javascript');

	}); //DOM CONTENT LOADED
})();