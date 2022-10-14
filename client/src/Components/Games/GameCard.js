import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function GameCard(){
    const [game, setGame] = useState(null);
    const { id } = useParams()

    useEffect(()=>{
        fetch(`/games/${id}`).then(r=>r.json()).then(data=>setGame(data));
    },[])

    function CardComponent(){
        return(
            <div>
                <h4> {game.name} </h4>
            </div>
        )
    }

    return(
        <div>
            {game? <CardComponent /> : "Loading info"}
        </div>
    )
}

export default GameCard;