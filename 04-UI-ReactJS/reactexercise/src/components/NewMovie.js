import React, { Component } from 'react';
import uuid from 'uuid';

class NewMovie extends Component {
	
	//Create input of form
	nameRef = React.createRef();

	//Call function newMovie
	newMovie = (e) => {
		e.preventDefault();

		//Create object with data from form
		const movie = {
			id: uuid(),
			name: this.nameRef.current.value
		}
		
		//Send data to principal component (App)
		this.props.createMovie(movie);

		e.currentTarget.reset();
	}

	render() {
		return (
			<form onSubmit={this.newMovie}>
				<div>
					<label>Movie Name:</label>
					<input type="text" ref={this.nameRef}/>
				</div>
				<button type="submit">Add</button>
			</form>
		);
	}
}

export default NewMovie;