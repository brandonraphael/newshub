import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import LinkList from '../Link/LinkList';
import Header from '../Header/Header.js';

import './Homepage.css';

class Homepage extends Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  render() {
    return (
      <div className="Homepage">
        <Header/>
        <div id="sources">Sources</div>
        <div id="sourceList">
          <a href="#/abc-news-au">ABC News AU</a>
          <br/>
          <a href="#/ars-technica">Ars Technica</a>
          <br/>
          <a href="#/associated-press">Associated Press</a>
          <br/>
          <a href="#/bbc-news">BBC News</a>
          <br/>
          <a href="#/bbc-sport">BBC Sport</a>
          <br/>
          <a href="#/bild">Bild</a>
          <br/>
          <a href="#/bloomberg">Bloomberg</a>
          <br/>
          <a href="#/business-insider">Business Insider</a>
          <br/>
          <a href="#/business-insider-uk">Business Insider UK</a>
          <br/>
          <a href="#/buzzfeed">Buzzfeed</a>
          <br/>
          <a href="#/cnbc">CNBC</a>
          <br/>
          <a href="#/cnn">CNN</a>
          <br/>
          <a href="#/daily-mail">Daily Mail</a>
          <br/>
          <a href="#/engadget">Engadget</a>
          <br/>
          <a href="#/entertainment-weekly">Entertainment Weekly</a>
          <br/>
          <a href="#/espn">ESPN</a>
          <br/>
          <a href="#/espn-cric-info">ESPN cricinfo</a>
          <br/>
          <a href="#/financial-times">Financial Times</a>
          <br/>
          <a href="#/focus">Focus</a>
          <br/>
          <a href="#/fortune">Fortune</a>
          <br/>
          <a href="#/google-news">Google News</a>
          <br/>
          <a href="#/hacker-news">Hacker News</a>
          <br/>
          <a href="#/ign">IGN</a>
          <br/>
          <a href="#/independent">Independent</a>
          <br/>
          <a href="#/Mashable">Mashable</a>
          <br/>
          <a href="#/metro">Metro</a>
          <br/>
          <a href="#/mirror">Daily Mirror</a>
          <br/>
          <a href="#/mtv-news">MTV News</a>
          <br/>
          <a href="#/mtv-news-uk">MTV News UK</a>
          <br/>
          <a href="#/the-guardian-uk">The Guardian (UK)</a>
          <br/>
          <a href="#/the-new-york-times">The New York Times</a>
          <br/>
          <a href="#/the-wall-street-journal">The Wall Street Journal</a>
          <br/>
          <a href="#/the-washington-post">The Washington Post</a>
        </div>
        <div id="tabs">
          <Tabs defaultActiveKey={1} animation={false} id="noanim-tab">
            <Tab eventKey={1} title="BBC News"><div id="side"><LinkList source="bbc-news" type="top"></LinkList></div></Tab>
            <Tab eventKey={2} title="CNN"><div id="side"><LinkList source="cnn" type="top"></LinkList></div></Tab>
            <Tab eventKey={3} title="The Wall Street Journal"><div id="side"><LinkList source="the-wall-street-journal" type="top"></LinkList></div></Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Homepage;
