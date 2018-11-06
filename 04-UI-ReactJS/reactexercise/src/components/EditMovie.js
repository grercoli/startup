import React, { Component } from 'react';

//REDUX
import { connect } from 'react-redux';
import { editMovie } from '../actions/moviesActions';

class EditMovie extends Component {
	newNameRef = React.createRef();

	editMovie = (e) => {
		e.preventDefault();

		const id = this.props.info.id;
		
		const movie = {
			id,
			name: this.newNameRef.current.value
		}
		
		this.props.editMovie(movie);

		this.props.changeState();
	}

	render() {
		return (
			<form onSubmit={this.editMovie}>
				<div>
					<label>Movie Name:</label>
					<input type="text" ref={this.newNameRef} defaultValue={this.props.info.name} />
				</div>
				<button type="submit">Save</button>
			</form>
		);
	}
}

const mapStateToProps = state => ({ //helps read the state
    movies: state.movies.movies
})

export default connect(mapStateToProps, {editMovie}) (EditMovie);