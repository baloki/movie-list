import React, { Component } from 'react';
import './styles/api-key.css';

class ApiKey extends Component {
  render() {
    if (this.props.apiKey) {
      return null;
    }

    return (
      <div className="api-key">
        <p>
          Before you can use this application you need to provide an API key from the <a href="http://www.omdbapi.com/apikey.aspx" target="_blank" rel="noopener noreferrer">OMDb API</a> site.  Please sign-up there and obtain a key before proceeding.
        </p>
        <input
          placeholder="Insert API Key Here"
          ref="apiKey"
          className="api-key__field"
        />
        <button
        className="api-key__button"
          type="submit"
          onClick={
            (event) => this.props.submitMethod(event, this.refs.apiKey)
          }
        >
          Submit
        </button>
      </div>
    );
  }
}

export default ApiKey;
