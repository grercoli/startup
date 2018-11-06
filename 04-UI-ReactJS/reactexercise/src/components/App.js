import React, { Component } from 'react';
import Header from './Header';
import NewMovie from './NewMovie';

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

  render() {
    return (
      <div>

        <Header 
          titulo = "Movie's App"
        />

        <NewMovie 
          createMovie = {this.createMovie}
        />

      </div>
    );
  }
}

export default App;
