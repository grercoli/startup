import React, { Component } from 'react';
import uuid from 'uuid';

//REDUX
import { connect } from 'react-redux';
import { addMovie } from '../actions/moviesActions';

class NewMovie extends Component {
	
	//Create input of form
	nameRef = React.createRef();

	newMovie = (e) => {
		e.preventDefault();

		//Create object with data from form
		const movie = {
			id: uuid(),
			name: this.nameRef.current.value
		}
		
		this.props.addMovie(movie);

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

const mapStateToProps = state => ({ //helps read the state
    movies: state.movies.movies
})

export default connect(mapStateToProps, {addMovie}) (NewMovie);