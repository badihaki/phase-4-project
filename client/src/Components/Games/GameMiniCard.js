import React from "react";
import { Link } from "react-router-dom";

function GameMiniCard( { game } ){
    return(
        <div>
            <Link to={`/gamelist/${game.id}`}><h4>{ game.name }</h4></Link>
            <span>{ game.genre }</span>
        </div>
    )
}

export default GameMiniCard;