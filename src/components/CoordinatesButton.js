// Code CoordinatesButton Component Here
import React from 'react'

const CoordinatesButton = (props) => {
  const makeArray = (e) => {
    props.onReceiveCoordinates([e.clientX, e.clientY])
  }

  return(
    <button onClick={makeArray}>Coordinates</button>
  )
}

export default CoordinatesButton;