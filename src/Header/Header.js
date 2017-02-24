import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h2 id="header">Newsie</h2>
        <a href="#/" id="home">Home</a>
        <form id="searchBar">
          <input type="text" name="name" id="bar"/>
        </form>
      </div>
    );
  }
}

export default Header
