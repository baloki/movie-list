import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/movie-list.css';

import Movie from './movie';

class MovieList extends Component {
  render() {
    return (
      <div className="movie-list">
        {
          this.props.movies.map(
            movie => <Movie {...movie} key={`movie-${movie.imdbID}`} />
          )
        }
      </div>
    );
  }
}

MovieList.proptypes = {
  movies: PropTypes.object
};

export default MovieList;
