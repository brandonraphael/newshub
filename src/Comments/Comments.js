import React, { Component } from 'react';
import './Comments.css';

class Comments extends Component {
  render() {
    return (
      <div className="Comments">
        <form id="addComment">
          <input type="text" name="comment" id="comment"/>
        </form>
      </div>
    );
  }
}

export default Comments
