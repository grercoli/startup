/* jshint esversion: 6 */

class Movie {
	constructor(name, year, duration) {
		this.title = name;
		this.year = year;
		this.duration = duration;
	}

	play() {
		
	}

	pause() {
		
	}

	resume() {
		
	}
}

const movie1 = new Movie('The Maze Runner', 2014, 113);
console.log(movie1.title);
