import Letter from "./Letter";
import React, { Component } from 'react';


class Letters extends Component {
    render() {
        return (
            <div>
                 <div>Available Letters</div>
                <Letter />
            </div>    
        )
    }
}
export default Letters