// This file holds the current game score stateless component
import React from "react";

function Score(props) {
    return(
    <div className="gameScore">
        <h3 className="score">Your Score =  {props.currentScore}</h3>
        <h3 className="status">{props.status}</h3>
    </div>
    )
}
export default Score 