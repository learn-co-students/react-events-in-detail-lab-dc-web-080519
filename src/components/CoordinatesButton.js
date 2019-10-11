import React, {Component} from 'react'

class CoordinatesButton extends Component {

    coordsClickyClick = (event) => this.props.onReceiveCoordinates([event.clientX, event.clientY])

    render(){
        return(
            <button
                onClick={this.coordsClickyClick}
            >
                <br/>
                --------------------CoordsButton--------------------
            </button>
        )
    }
}

export default CoordinatesButton