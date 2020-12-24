import React from 'react'

const Score = (props) => {
    let className;
    if(props.score >= 80){
        className="high-score"
    }else{
        if(props.score > 50 && props.score < 80)
        {
            className="medium-score"
        }else{
            className="low-score"
        }
    }
    return (
        <div>
             <div className={className}> {props.score} </div>
          
        </div>
    )
}

export default Score