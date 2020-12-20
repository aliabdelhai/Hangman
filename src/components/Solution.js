import Letter from "./Letter";
import React, { Component } from 'react';

class Solution extends Component {
    render() {
        let underScores = []
        for(let i=0; i< 4; i++)
        {
            underScores.push('_ ')
        }
        return (
            <div>
                {underScores.map(u => <span>{u}</span>)}
                <div>
                    <em>Your ideal mood when coding. </em>
                </div>
            </div>
        )
    }
}
export default Solution