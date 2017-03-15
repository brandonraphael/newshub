import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import './CollapsiblePanel.css';

class CollapsiblePanel extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div className="CollapsiblePanel">
        <Button id="button"  bsSize="xsmall" onClick={ ()=> this.setState({ open: !this.state.open })}>
          description
        </Button>
        {/*<a href={"/" + this.props.article.title.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s/g,"") + "/comments"} id="comments">
          comments
        </a>*/}
        <div id="body">
          <Panel collapsible expanded={this.state.open} id="panel">
            {this.props.article.description}
          </Panel>
        </div>
      </div>
    );
  }
}

export default CollapsiblePanel;
