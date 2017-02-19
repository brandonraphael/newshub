import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import LinkList from '../Link/LinkList';

import './Homepage.css';

class Homepage extends Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  render() {
    return (
      <div className="Homepage">
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
            <Tab eventKey={1} title="Newest"><div id="new"><LinkList source="the-washington-post"></LinkList></div></Tab>
            <Tab eventKey={2} title="Most Viewed">Popular</Tab>
            <Tab eventKey={3} title="Most Commented">Hot</Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Homepage;