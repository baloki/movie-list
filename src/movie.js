import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/movie.css';

class Movie extends Component {
  render() {
    if (!this.props.Title) {
      return null;
    }

    return (
      <div className="movie">
        <img src={this.props.Poster} alt="" className="movie__poster" />
        <div className="movie__details">
          <h2>{this.props.Title}</h2>
          <p>
            <strong>Date Added to List:</strong> {this.props.dateAdded}<br />
            <strong>IMDB Rating:</strong> {this.props.imdbRating}
          </p>
        </div>
      </div>
    );
  }
}

Movie.proptypes = {
  Title: PropTypes.string,
  dateAdded: PropTypes.string,
  imdbRating: PropTypes.string,
  Poster: PropTypes.string
};

export default Movie;
