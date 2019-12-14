// Code DelayedButton Component Here
import React from 'react'

const DelayedButton = (props) => {
  const clickHandler = (e) => {
    e.persist()
    return setTimeout( () => { props.onDelayedClick(e) }, props.delay);
  }

  return(
    <button onClick={clickHandler}>Delayed</button>
  )
}

export default DelayedButton