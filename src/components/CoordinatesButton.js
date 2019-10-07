import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  clickHandler = (e) => {
    let xyArr = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(xyArr)
    // debugger
  }


  render() {
    return(<button onClick={this.clickHandler} >Coordinates</button>);
  }
}
