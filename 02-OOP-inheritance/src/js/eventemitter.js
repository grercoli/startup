/* jshint esversion: 6 */

import { Logger } from './logger.js';

export class EventEmitter extends Logger {
	constructor() {
		super();
	}

	on(video, eventName, callback) {
		video.addEventListener(eventName, callback);
	}

	emit(eventName, video) {
		switch(eventName){
			case 'play': 
				this.on(video, 'play', () => {
					this.log('The play event has been emitted');
					console.log('Playing movie'); 
				});
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