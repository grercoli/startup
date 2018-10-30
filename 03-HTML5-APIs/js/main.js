/* jshint esversion: 6 */

let DB;

const form = document.querySelector('form'),
	  randomText = document.querySelector('#random-text'),
	  btnDelete = document.querySelector('#btn-delete');

document.addEventListener('DOMContentLoaded', () => {
	//Create "texts" db
	let newDB = window.indexedDB.open('texts', 1);

	newDB.onerror = () => {
		console.log('There was an error');
	}

	newDB.onsuccess = () => {
		//Assign new db to DB variable
		DB = newDB.result;
		//console.log(DB);
	}

	//This function creates the schema of the new db
	newDB.onupgradeneeded = function(e) {
		let db = e.target.result;

		let objectStore = db.createObjectStore('texts', { keyPath: 'key', autoIncrement: true } );

		objectStore.createIndex('text', 'text', { unique: false } );

		//By now data base is created and ready
	}

	//Now i have to add data when user submits form
	form.addEventListener('submit' , addData);

	function addData(e) {
		e.preventDefault();

		//New object with all data to insert into db
		const newText = {
			text: randomText.value
		}

		//Add text to local storage
		localStorage.setItem('text', randomText.value);

		//Insert new data into db
		let transaction = DB.transaction(['texts'], 'readwrite');
		let objectStore = transaction.objectStore('texts');
		let query = objectStore.add(newText);

		query.onsuccess = () => {
			form.reset();
			randomText.innerHTML = "";
		}

		transaction.oncomplete = () => {
			console.log('Text added to db');
		}

		transaction.onerror = () => {
			console.log('There was an error');
		}
	}

	btnDelete.addEventListener('click', deleteData);

	function deleteData(e) {
		//Delete all from local storage
		localStorage.clear();

		//Delete all from IndexedDB
		let transaction = DB.transaction(['texts'], 'readwrite');
		let objectStore = transaction.objectStore('texts');
		let query = objectStore.clear();

		query.onsuccess = (e) => {
	    	console.log('Data deleted succesfully');
  		};
	}

	/** DRAG AND DROP **/

	randomText.addEventListener('dragover', dragOverHandler);
	randomText.addEventListener('dragleave', dragLeaveHandler);
	randomText.addEventListener('drop', dropHandler);

	function dropHandler(e) {
		randomText.classList.remove('drag-over');
		console.log('File(s) dropped');

		e.preventDefault();

	    let file = e.dataTransfer.files[0],
	        reader = new FileReader();

	    reader.readAsText(file);

	    reader.onload = function(event) {
	        //console.log(event.target);
	        randomText.innerHTML = event.target.result;
	    };
	    //console.log(file);

	    return false;
	}

	function dragOverHandler() {
		randomText.classList.add('drag-over');
	}

	function dragLeaveHandler() {
		randomText.classList.remove('drag-over');
	}
});