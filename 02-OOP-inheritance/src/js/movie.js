/* jshint esversion: 6 */

import { EventEmitter } from './eventemitter.js';

export class Movie extends EventEmitter {
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