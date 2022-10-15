import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function GameCard(){
    const [game, setGame] = useState(null);
    const { id } = useParams()

    useEffect(()=>{
        fetch(`/games/${id}`).then(r=>r.json()).then(data=>setGame(data));
    },[])

    function CardComponent(){
        return(
            <div>
                <h2> {game.name} </h2>
                <div>
                    <p>
                        {game.description}
                    </p>
                </div>
                <div>
                    ( {game.genre} )
                </div>
                <br />
                <br />
                <br />
                <Link to={"/gamelist"} >Back to list</Link>
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