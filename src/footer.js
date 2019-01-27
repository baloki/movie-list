import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/footer.css';

class Footer extends Component {
  clearApiKey(event) {
    event.preventDefault();
    this.props.updateParentState({apiKey: null});
  }

  render() {
    return (
      <footer className="footer">
        <div>
          Created by <a href="http://www.loki7.co.uk">Phillip Vose</a>
        </div>
        {
          this.props.apiKey &&
            <div>
              Api Key: {this.props.apiKey} <button onClick={(event) => this.clearApiKey(event)}>clear</button>
            </div>
        }
      </footer>
    );
  }
}

Footer.proptypes = {
  apiKey: PropTypes.string,
  updateParentState: PropTypes.func
};

export default Footer;
