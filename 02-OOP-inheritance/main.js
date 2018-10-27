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

class Movie extends EventEmitter {
	constructor(name, year, duration, video) {
		super();
		this.title = name;
		this.year = year;
		this.duration = duration;
		this.video = video;
		this.actors = [];
	}

	play() {
		this.emit('play', this.video);
	}

	pause() {
		this.emit('pause', this.video);
	}

	resume() {
		this.emit('resume', this.video);
	}

	addCast(cast) {
		if(Array.isArray(cast)){
			cast.forEach( (actor) => {
				this.actors.push(actor);
			});
		} else {
			this.actors.push(cast);
		}
	}
}

let exampleVid = document.getElementById('dub-video');
const movie1 = new Movie('The Maze Runner', 2014, 113, exampleVid);
console.log(movie1.title);

movie1.play();
movie1.pause();
movie1.resume();

const dylan = new Actor('Dylan O Brien', 27);

movie1.addCast(dylan);

const actorsArray = [
	new Actor('Will Poulter', 30),
	new Actor('Ki Hong Lee ', 25),
	new Actor('Kaya Scodelario', 28)
];

movie1.addCast(actorsArray);

console.log(movie1.actors);