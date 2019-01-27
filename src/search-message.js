import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/search-message.css';

class SearchMessage extends Component {
  render() {
    const result = this.props.currentSearchResult;
    let markup = null;
    switch(result.Response) {
      case "True":
        markup = result.Title === '' ? (<p />) : (
          <p>
            <button
              onClick={(event) => this.props.addMovie(event)}
              className="search__button"
            >
              Add {this.props.currentSearchResult.Title}
            </button>
          </p>
        );
        break;
      case "Processing":
        markup = (
          <p>Searching...</p>
        );
        break;
      case "False":
        markup = (
          <p>No results found</p>
        );
        break;
      default:
        markup = (<p />);
    };
    return markup;
  }
}

SearchMessage.proptypes = {
  currentSearchResult: PropTypes.object,
  addMovie: PropTypes.func
};

export default SearchMessage;
