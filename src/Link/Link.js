import React, { Component } from 'react';
import './Link.css';
import CollapsiblePanel from './CollapsiblePanel';

class Link extends Component {
  constructor(...args) {
    super(...args);
    this.state = {};
  }

  render() {
    return (
      <div className="Link">
        <a href={this.props.article.url} target="_blank"><img id="img" src={this.props.article.urlToImage} alt="test"></img></a>
        <div id="linkContainer"><a href={this.props.article.url} target="_blank" id="link">{this.props.article.title}</a>
        <div id="source">{this.props.article.author}, {this.props.article.publishedAt}</div>
        <CollapsiblePanel article={this.props.article}/></div>
      </div>
    );
  }
}

export default Link;
