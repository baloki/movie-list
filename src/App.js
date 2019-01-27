import React, { Component } from 'react';
import './styles/app.css';

import ApiKey from './api-key';
import ListManagement from './list-management';
import Footer from './footer';

class App extends Component {
  constructor(props) {
    super(props);
    const state = JSON.parse(localStorage.getItem('movie-list-state'));
    this.state = {
      apiKey: state && state.apiKey ? state.apiKey : null
    };
  }

  updateApiKey(event, apiKey) {
    event.preventDefault();
    if (apiKey !== '') {
      this.setState({
        apiKey: apiKey.value
      })
    }
  }

  updateState(state) {
    this.setState(state);
  }

  render() {
    return(
      <div className="app">
        <h1>Your Movie List</h1>
        <ApiKey submitMethod={this.updateApiKey.bind(this)} apiKey={this.state.apiKey} />
        <ListManagement apiKey={this.state.apiKey} />
        <Footer apiKey={this.state.apiKey} updateParentState={this.updateState.bind(this)} />
      </div>
    );
  }
}

export default App;
