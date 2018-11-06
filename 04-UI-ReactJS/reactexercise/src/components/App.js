import React, { Component } from 'react';
import Header from './Header';
import NewMovie from './NewMovie';
import ListMovies from './ListMovies';

class App extends Component {

  //Create the state
  state = {
    movies: []
  }

  createMovie = (newMovie) => {
    //Make a copy of movies in state and add the new movie to the array
    const movies = [...this.state.movies, newMovie];

    //Overwrite new array in state
    this.setState({
      movies
    })
  }

  editMovie = (editedMovie, id) => {
    const currentMovies = [...this.state.movies];

    let editedArray = [];
    editedArray.push(editedMovie);

    const movies = currentMovies.map(obj => editedArray.find(o => o.id === obj.id) || obj);

    this.setState({
      movies
    })
  }

  render() {
    return (
      <div>

        <Header 
          titulo = "Movie's App"
        />

        <NewMovie 
          createMovie = {this.createMovie}
        />

        <ListMovies 
          movies = {this.state.movies}
          editMovie = {this.editMovie}
        />

      </div>
    );
  }
}

export default App;
