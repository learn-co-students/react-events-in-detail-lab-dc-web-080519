// imports React
import React from 'react';

// create a CoordinatesButton React component
class CoordinatesButton extends React.Component {
  handleClick = event => {
// takes in prop that is a function passed down from index.js
debugger
    this.props.onReceiveCoordinates( [event.clientX, event.clientY]);
  };

  render() {
    return <button onClick={this.handleClick}>Coords</button>;
  }
}

export default CoordinatesButton;
