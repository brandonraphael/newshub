import React, { Component, button } from 'react';
import './Header.css';

class Header extends Component {
  constructor(...args) {
    super(...args);
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  expandCollapse() {
    if(this.state.isToggleOn) {
      return {width: 0, visibility: 'hidden'};
    }
    else {
      return {width: 175};
    }
  }

  render() {
    return (
      <div className="Header">
        <div id="title">
          <a id="temp" href="/">
            <img id="logo" alt="check" src={require("../../public/news.png")}/>
            Newsio
          </a>
        </div>
        <button id="sourcesButton" onClick={this.handleClick}>
          {this.state.isToggleOn ? "Sources " + String.fromCharCode(9660) : "Sources " + String.fromCharCode(9650)}
        </button>
        <div id="sourcesBox" style={this.expandCollapse()}>
          <div id="sources">Sources</div>
          <div id="sourceList">
            <a href="/abc-news-au">ABC News AU</a>
            <br/>
            <a href="/ars-technica">Ars Technica</a>
            <br/>
            <a href="/associated-press">Associated Press</a>
            <br/>
            <a href="/bbc-news">BBC News</a>
            <br/>
            <a href="/bbc-sport">BBC Sport</a>
            <br/>
            <a href="/bloomberg">Bloomberg</a>
            <br/>
            <a href="/business-insider">Business Insider</a>
            <br/>
            <a href="/business-insider-uk">Business Insider UK</a>
            <br/>
            <a href="/buzzfeed">Buzzfeed</a>
            <br/>
            <a href="/cnbc">CNBC</a>
            <br/>
            <a href="/cnn">CNN</a>
            <br/>
            <a href="/daily-mail">Daily Mail</a>
            <br/>
            <a href="/engadget">Engadget</a>
            <br/>
            <a href="/entertainment-weekly">Entertainment Weekly</a>
            <br/>
            <a href="/espn">ESPN</a>
            <br/>
            <a href="/espn-cric-info">ESPN cricinfo</a>
            <br/>
            <a href="/financial-times">Financial Times</a>
            <br/>
            <a href="/focus">Focus</a>
            <br/>
            <a href="/fortune">Fortune</a>
            <br/>
            <a href="/google-news">Google News</a>
            <br/>
            <a href="/hacker-news">Hacker News</a>
            <br/>
            <a href="/ign">IGN</a>
            <br/>
            <a href="/independent">Independent</a>
            <br/>
            <a href="/Mashable">Mashable</a>
            <br/>
            <a href="/metro">Metro</a>
            <br/>
            <a href="/mirror">Daily Mirror</a>
            <br/>
            <a href="/mtv-news">MTV News</a>
            <br/>
            <a href="/mtv-news-uk">MTV News UK</a>
            <br/>
            <a href="/the-guardian-uk">The Guardian (UK)</a>
            <br/>
            <a href="/the-new-york-times">The New York Times</a>
            <br/>
            <a href="/the-wall-street-journal">The Wall Street Journal</a>
            <br/>
            <a href="/the-washington-post">The Washington Post</a>
          </div>
        </div>
        <form id="searchBar">
          <input type="text" name="name" id="bar"/>
        </form>
      </div>
    );
  }
}

export default Header
