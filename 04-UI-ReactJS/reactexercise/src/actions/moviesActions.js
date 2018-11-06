import {SHOW_MOVIES, ADD_MOVIE, EDIT_MOVIE, DELETE_MOVIE} from './types';

export const getMovies = () => {
	return {
		type: SHOW_MOVIES
	}
} 

export const addMovie = (movie) => {
	return {
		type: ADD_MOVIE,
		payload: movie
	}
} 

export const editMovie = (movie, movieID) => {
	return {
		type: EDIT_MOVIE,
		id: movieID,
		payload: movie
	}
} 

export const deleteMovie = (id) => {
	return {
		type: DELETE_MOVIE,
		payload: id
	}
} 