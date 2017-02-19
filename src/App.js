import React, { Component } from 'react';
import { Router, Route, hashHistory} from 'react-router';
import Homepage from './Homepage/Homepage';
import Header from './Header/Header';
import LinkList from './Link/LinkList';
import Comments from './Comments/Comments';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Router history={hashHistory}>
          <Route path='/' component={Homepage} />
          <Route path='/abc-news-au' component={LinkList} source="abc-news-au"/>
          <Route path='/ars-technica' component={LinkList} source="ars-technica"/>
          <Route path='/associated-press' component={LinkList} source="associated-press"/>
          <Route path='/bbc-news' component={LinkList} source="bbc-news"/>
          <Route path='/bbc-sport' component={LinkList} source="bbc-sport"/>
          <Route path='/bild' component={LinkList} source="bild"/>
          <Route path='/bloomberg' component={LinkList} source="bloomberg"/>
          <Route path='/business-insider' component={LinkList} source="business-insider"/>
          <Route path='/business-insider-uk' component={LinkList} source="business-insider-uk"/>
          <Route path='/buzzfeed' component={LinkList} source="buzzfeed"/>
          <Route path='/cnbc' component={LinkList} source="cnbc"/>
          <Route path='/cnn' component={LinkList} source="cnn"/>
          <Route path='/the-guardian-uk' component={LinkList} source="the-guardian-uk"/>
          <Route path='/the-new-york-times' component={LinkList} source="the-new-york-times"/>
          <Route path='/the-wall-street-journal' component={LinkList} source="the-wall-street-journal"/>
          <Route path='/the-washington-post' component={LinkList} source="the-washington-post"/>
          <Route path='/*/comments' component={Comments}/>
        </Router>
      </div>
    );
  }
}

export default App;
