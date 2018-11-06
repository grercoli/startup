import React, { Component } from 'react';
import Header from './Header';
import NewMovie from './NewMovie';
import ListMovies from './ListMovies';

//REDUX
import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <Header 
            titulo = "Movie's App"
          />
          <NewMovie />
          <ListMovies />
        </div>
      </Provider>
    );
  }
}

export default App;
