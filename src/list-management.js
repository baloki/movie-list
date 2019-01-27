import React, { Component } from 'react';
import './styles/list-management.css';

import AddTitle from './add-title';
import MovieList from './movie-list';

class ListManagement extends Component {
  constructor(props) {
    super(props);
    const state = JSON.parse(localStorage.getItem('movie-list-state'));
    if (state) {
      this.state = state;
    } else {
      this.state = {
        movies: [],
        currentSearchResult: {},
        apiKey: '',
        addTitleOpen: false
      };
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (state.apiKey !== props.apiKey) {
      return {
        ...state,
        apiKey: props.apiKey
      }
    }
    return state;
  }

  componentDidUpdate() {
    localStorage.setItem('movie-list-state', JSON.stringify(this.state));
  }

  addMovie(event) {
    event.preventDefault();
    this.setState(
      (state, props) => {
        const alreadyInList = state.movies.filter(
          movie => movie.Title === state.currentSearchResult.Title
        );
        let movies = state.movies;
        if (alreadyInList.length === 0) {
          movies.push(state.currentSearchResult);
        }
        return {
          movies,
          currentSearchResult: {},
          addTitleOpen: false
        };
      }
    );
  }

  addTitle(event) {
    event.preventDefault();
    this.setState(
      state => ({
        addTitleOpen: !state.addTitleOpen
      })
    )
  }

  updateState(state) {
    this.setState(state);
  }

  render() {
    if (this.state.movies.length === 0) {
      return null;
    }

    return (
      <div className="list-management">
      <div className="list-management__tabs">
        {
          this.state.apiKey &&
            <button
              onClick={(event) => this.addTitle(event)}
              className="list-management__button"
            >
              Add Title
            </button>
        }
      </div>
        <AddTitle
          currentSearchResult={this.state.currentSearchResult}
          addMovie={this.addMovie.bind(this)}
          updateParentState={this.updateState.bind(this)}
          apiKey={this.state.apiKey}
          open={this.state.addTitleOpen}
        />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default ListManagement;
