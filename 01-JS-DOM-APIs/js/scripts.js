(function() {
	"use strict";

	document.addEventListener('DOMContentLoaded', function(){
		document.querySelector('.is-hidden').classList.add('not-hidden');

		function showAlertMessage(){
			alert('This is an alert message!');
		}

		showAlertMessage();
	}); //DOM CONTENT LOADED
})();