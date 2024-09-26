import React, { Component } from 'react';

export default class DelayedButton extends Component {

  clickHandler = (e) => {
    e.persist()
    setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay)

  }



  render() {
    console.log(this.props);
    return(<button onClick={this.clickHandler}>Delayed</button>);
  }
}
