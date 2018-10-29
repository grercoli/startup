/* jshint esversion: 6 */

import { Movie } from './movie.js';
import { Actor } from './actor.js';

let social = {
	share(friendName) {
		console.log(`${friendName} shares ${this.title}`);
	},
	like(friendName) {
		console.log(`${friendName} likes ${this.title}`);
	}
}

//"Movie" class now have "social" object methods
Object.assign(Movie.prototype, social);

//Get video from DOM
let exampleVid = document.getElementById('dub-video');

//Make an instance of Movie and play with console and methods
const movie1 = new Movie('The Maze Runner', 2014, 113, exampleVid);
console.log(movie1.title);

movie1.play();
movie1.pause();
movie1.resume();

//Add one actor to movie1
const dylan = new Actor('Dylan O Brien', 27);
movie1.addCast(dylan);

//Add an array of actors to movie1
const actorsArray = [
	new Actor('Will Poulter', 30),
	new Actor('Ki Hong Lee ', 25),
	new Actor('Kaya Scodelario', 28)
];

movie1.addCast(actorsArray);
console.log(movie1.actors);

//Calling "social" object methods
movie1.share('Gustavo');
movie1.like('Gustavo');
