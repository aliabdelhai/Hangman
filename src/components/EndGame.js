import React, { Component } from 'react';


class EndGame extends Component {

    restart = () => {
        this.props.restart()   
    }


    render() {
        return (
            <div>
                <div>{this.props.congrats ? `Congratulations` : `The world was ${this.props.word}`}</div>
                <button onClick={this.restart}>Restart</button>
            </div>
        )
    }
}

export default EndGame