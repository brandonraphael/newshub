import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div id="title">
              <a id="temp" href="#/">
                <img id="logo" alt="check" src={require("../../public/news.png")}/>
                  Newsio
                </a>
        </div>
        <form id="searchBar">
          <input type="text" name="name" id="bar"/>
        </form>
      </div>
    );
  }
}

export default Header
