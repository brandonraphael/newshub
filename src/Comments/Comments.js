import React, { Component } from 'react';
import './Comments.css';
import $ from 'jquery';

class Comments extends Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  getInitialState() {
    return { comments: null };
  }

  componentDidMount() {
    $.get('http://localhost:8000/comments').done(function(data) {
      this.setState({comments: data});
    }.bind(this));
  }

  cleanCode(c) {
    return c.replace(/[^A-Za-z0-9_]/g,"");
  }

  render() {
    return (
      <div className="Comments">
        Coming Soon!
      </div>
    );
  }
}

export default Comments
