import React, { Component } from 'react';
import Link from './Link';
import './LinkList.css';
import $ from 'jquery';

class LinkList extends Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  getInitialState() {
    return { data: null };
  }

  determineSource() {
    if (!this.props.source) return this.props.route.source;
    else return this.props.source;
  }

  componentDidMount() {
    var src = this.determineSource();

    $.get('http://localhost:8000/' + src).done(function(data) {
      this.setState({data: data});
    }.bind(this));
  }

  render() {
    if(this.state.data){
      var data = JSON.parse(this.state.data);
      var rows = [];
      for( var i = 0; i < data.articles.length; i++){
        rows.push(<Link key={i.toString()} article={data.articles[i]}></Link>)
      }
      return <div className="LinkList">{rows}</div>;
    }
    return (
      <div className="LinkList">
      </div>
    );
  }
}

export default LinkList
