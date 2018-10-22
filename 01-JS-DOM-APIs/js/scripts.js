/*jshint esversion: 6 */


let jokesSection = document.querySelector('#jokes');
let repoList = document.querySelector('#repositories-list');

//Hidden section with fade in effect
document.addEventListener('DOMContentLoaded', function() {
	document.querySelector('.hidden-section').classList.add('fadein');
});

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
			const items = data.items;
			let htmlList = `<h2>${param} repositorie's list</h2>`;
			htmlList += `<ul class="items-list">`;

			items.forEach(function(item) {
				htmlList += `<li>${item.url}</li>`;
			})

			htmlList += `<ul>`;
			repoList.innerHTML = htmlList;
		})
		.catch(function(error){
			console.log(error);
		});
}

//Call function loadWithParameter with 'Javascript' as param
loadWithParameter('Javascript');

const searchInput = document.querySelector('#search');

//When user writes a repositorie and click outside the input, a search is performed with that value
searchInput.addEventListener('blur', function(){
	loadWithParameter(searchInput.value);
});

function matrixTable(matrix) {
	let htmlBody = document.querySelector('.container').parentElement;
	let newTable = document.createElement('table');
	newTable.classList.add('matrixTable');
	console.log(matrix.length);
	for(let x = 0; x < matrix.length; x++) {
		let newTr = document.createElement('tr');

		for(let y = 0; y < 4; y++) {
			if(x === 0) {
				let newTh = document.createElement('th');
				let textTh = document.createTextNode(matrix[x][y]);
				newTh.appendChild(textTh);
				newTr.appendChild(newTh);
			} else {
				let newTd = document.createElement('td');
				let textTd = document.createTextNode(matrix[x][y]);
				newTd.appendChild(textTd);
				newTr.appendChild(newTd);
			}
		}
		newTable.appendChild(newTr);
	}
	htmlBody.appendChild(newTable);
}

matrixTable( [['Nombre', 'Apellido', 'Telefono', 'Direccion'],
			['Juan', 'Perez', '479-2234', 'Roca 2020'],
			['Pedro', 'Rodriguez', '471-4434', 'Belgrano 3020'],
			['Martin', 'Castolo', '495-0535', 'Guemes 4020'],
			['Julio', 'Balceda', '491-0445', 'Alvear 5420']] );
