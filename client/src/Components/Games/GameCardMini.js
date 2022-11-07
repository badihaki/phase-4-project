import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

function GameMiniCard( { game } ){

    const { user } = useContext(UserContext);

    return(
        <div>
            { user?
             <Link to={`/games/${game.id}`}><h4>{ game.name }</h4></Link>
            :
            <h4> {game.name} </h4>
             }
            <span>{ game.genre }</span>
        </div>
    )
}

export default GameMiniCard;