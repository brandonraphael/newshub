import React, { Component } from 'react';
import './Comments.css';

class Comments extends Component {
  render() {
    return (
      <div className="Comments" onload="document.comment.reset();">
        <div>{this.props.location.pathname}</div>
        <form id="addComment" name="comment" action="http://localhost:8000/comments" method="post">
          <input type="text" name="comment" id="comment"/>
          <input type="hidden" name="url" value={this.props.location.pathname}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default Comments
