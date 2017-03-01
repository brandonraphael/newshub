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
