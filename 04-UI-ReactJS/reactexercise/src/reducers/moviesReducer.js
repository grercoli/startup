import {SHOW_MOVIES, ADD_MOVIE, EDIT_MOVIE, DELETE_MOVIE} from '../actions/types';

const initialState = {
	movies: []
}

export default function(state = initialState, action) {
	switch(action.type) {
		case SHOW_MOVIES:
			return {
				...state
			}
		case ADD_MOVIE:
			return {
				...state,
				movies : [...state.movies, action.payload]
			}
		case EDIT_MOVIE:
			let editedArray = [];
    		editedArray.push(action.payload);
			return {
				...state,
				movies : state.movies.map(obj => editedArray.find(o => o.id === obj.id) || obj)
			}
		case DELETE_MOVIE:
			return {
				...state,
				movies : state.movies.filter(movie => movie.id !== action.payload)
			}
		default:
			return state;
	}
}