import React, { Component } from 'react';
import LinkList from '../Link/LinkList';
import Header from '../Header/Header.js';

import './Newspage.css';

class Newspage extends Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  render() {
    return (
      <div className="Newspage">
        <Header/>
        <div id="check">
          <div id="side"><LinkList source={this.props.route.source} type="top"></LinkList></div>
        </div>
      </div>
    );
  }
}

export default Newspage;
