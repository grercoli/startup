/* jshint esversion: 6 */

class EventEmitter {
	constructor() {

	}

	on(video, eventName, callback) {
		video.addEventListener(eventName, callback);
	}

	emit(eventName, video) {
		switch(eventName){
			case 'play': 
				this.on(video, 'play', () => console.log('Playing movie') );
				break;
			case 'pause':
				this.on(video, 'pause', () => console.log('Movie has been paused') );
				break;
			case 'resume':
				this.on(video, 'resume', () => console.log('Movie has been resumed') );
				break;
			default:
				console.log('No event has been emitted');
		}
	}

	off(video, eventName, callback) {
		video.removeEventListener(eventName, callback);
	}
}

class Actor {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

class Movie {
	constructor(name, year, duration, video) {
		this.title = name;
		this.year = year;
		this.duration = duration;
		this.video = video;
	}

	play() {
		
	}

	pause() {
		
	}

	resume() {
		
	}
}

let exampleVid = document.getElementById('dub-video');
const movie1 = new Movie('The Maze Runner', 2014, 113, exampleVid);
console.log(movie1.title);
