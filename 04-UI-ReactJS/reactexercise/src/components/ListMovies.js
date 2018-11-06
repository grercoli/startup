import React, { Component } from 'react';
import Movie from './Movie';

class ListMovies extends Component {
	
	render() {
		return (
			<div className="movies-list">
				<h2>Favourite Movie's</h2>
				{Object.keys(this.props.movies).map(movie => (
					<Movie 
						key = {movie}
						info = {this.props.movies[movie]}
					/>
				))}
			</div>
		);
	}
}

export default ListMovies;