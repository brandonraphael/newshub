import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Homepage from './Homepage/Homepage';
import Newspage from './Newspage/Newspage.js';
import Commentspage from './Comments/Commentspage';

class App extends Component {
  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path='/' component={Homepage} />
          <Route path='/abc-news-au' component={Newspage} source="abc-news-au"/>
          <Route path='/ars-technica' component={Newspage} source="ars-technica"/>
          <Route path='/associated-press' component={Newspage} source="associated-press"/>
          <Route path='/bbc-news' component={Newspage} source="bbc-news"/>
          <Route path='/bbc-sport' component={Newspage} source="bbc-sport"/>
          <Route path='/bloomberg' component={Newspage} source="bloomberg"/>
          <Route path='/business-insider' component={Newspage} source="business-insider"/>
          <Route path='/business-insider-uk' component={Newspage} source="business-insider-uk"/>
          <Route path='/buzzfeed' component={Newspage} source="buzzfeed"/>
          <Route path='/cnbc' component={Newspage} source="cnbc"/>
          <Route path='/cnn' component={Newspage} source="cnn"/>
          <Route path='/daily-mail' component={Newspage} source="daily-mail"/>
          <Route path='/engadget' component={Newspage} source="engadget"/>
          <Route path='/entertainment-weekly' component={Newspage} source="entertainment-weekly"/>
          <Route path='/espn' component={Newspage} source="espn"/>
          <Route path='/espn-cric-info' component={Newspage} source="espn-cric-info"/>
          <Route path='/financial-times' component={Newspage} source="financial-times"/>
          <Route path='/focus' component={Newspage} source="focus"/>
          <Route path='/fortune' component={Newspage} source="fortune"/>
          <Route path='/google-news' component={Newspage} source="google-news"/>
          <Route path='/hacker-news' component={Newspage} source="hacker-news"/>
          <Route path='/ign' component={Newspage} source="ign"/>
          <Route path='/independent' component={Newspage} source="independent"/>
          <Route path='/masha' component={Newspage} source=""/>

          <Route path='/the-guardian-uk' component={Newspage} source="the-guardian-uk"/>
          <Route path='/the-new-york-times' component={Newspage} source="the-new-york-times"/>
          <Route path='/the-wall-street-journal' component={Newspage} source="the-wall-street-journal"/>
          <Route path='/the-washington-post' component={Newspage} source="the-washington-post"/>
          <Route path='/*/comments' component={Commentspage}/>
        </Router>
      </div>
    );
  }
}

export default App;
