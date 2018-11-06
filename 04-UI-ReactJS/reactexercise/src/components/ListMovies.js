import React, { Component } from 'react';
import Movie from './Movie';

//REDUX
import { connect } from 'react-redux';
import { getMovies } from '../actions/moviesActions';

class ListMovies extends Component {

	componentDidMount() {
        this.props.getMovies();
    }
	
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

const mapStateToProps = state => ({
    movies: state.movies.movies
})

export default connect(mapStateToProps, {getMovies}) (ListMovies);