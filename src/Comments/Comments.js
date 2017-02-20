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
        <div>{this.cleanCode(this.props.location.pathname)}</div>
        <form id="addComment" name="comment" action="http://localhost:8000/comments" method="post">
          <input type="text" name="comment" id="comment"/>
          <input type="hidden" name="url" value={this.cleanCode(this.props.location.pathname)}/>
          <input type="submit"/>
        </form>
        <div>{this.state.comments}</div>
      </div>
    );
  }
}

export default Comments
