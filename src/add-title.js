import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';
import './styles/add-title.css';

import SearchMessage from './search-message';

class AddTitle extends Component {
  search = debounce((term) => {
    fetch(`http://www.omdbapi.com/?t=${term}&apikey=${this.props.apiKey}`)
      .then(async response => {
        const searchResults = await response.json();
        const currentDate = new Date().toLocaleDateString();
        this.props.updateParentState(
          {
            currentSearchResult: {
              dateAdded: currentDate,
              ...searchResults
            }
          }
        );
      })
      .catch(error => {
        console.log(error);
        this.props.updateParentState({
          currentSearchResult: { Response: "False" }
        });
      })
  }, 1000)

  lookupMovie(event) {
    event.preventDefault();
    const input = event.currentTarget.value;
    if (input) {
      this.props.updateParentState({
        currentSearchResult: { Response: "Processing" }
      });
      this.search(event.currentTarget.value);
    } else {
      this.props.updateParentState({
        currentSearchResult: {}
      });
    }
  }

  render() {
    if (!this.props.open || !this.props.apiKey) {
      return false;
    }

    return (
      <div className="add-title">
        <input
          type="text"
          placeholder="Search for a Movie to Add..."
          onChange={(event) => this.lookupMovie(event)}
          className="add-title__field"
        />
        <SearchMessage
          addMovie={this.props.addMovie}
          currentSearchResult={this.props.currentSearchResult}
        />
      </div>
    );
  }
}

AddTitle.proptypes = {
  apiKey: PropTypes.string,
  currentSearchResult: PropTypes.object,
  updateParentState: PropTypes.func,
  addMovie: PropTypes.func
};

export default AddTitle;
