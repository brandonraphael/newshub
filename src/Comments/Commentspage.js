import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Comments from './Comments.js';

import './Commentspage.css';

class Commentspage extends Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  getInitialState() {
    return { comments: null };
  }

  render() {
    return (
      <div className="Commentspage">
        <Header/>
        <Comments pathname={this.props.location.pathname} comments={this.state.comments}/>
      </div>
    );
  }
}

export default Commentspage;
