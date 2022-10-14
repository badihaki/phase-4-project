import React from "react";

function GameMiniCard( { game } ){
    return(
        <div>
            <h4>{ game.name }</h4>
            <span>{ game.genre }</span>
        </div>
    )
}

export default GameMiniCard;