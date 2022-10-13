import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import GameMiniCard from "./GameMiniCard";

function GamesList(){

    const { user } = useContext(UserContext);

    const [ games, setGames ] = useState([]);
    useEffect( ()=>{
        fetch("/games").then( r => r.json() ).then( (data)=>{
            console.log(data);
            setGames(data);
        })
    }, [] )

    const gameCards = games.map( (game)=>{
        return <GameMiniCard key={game.id} game={game} />
    })

    return(
        <div>
            <h1>Games</h1>
            <p>
                Here is a list of games {user? ", as well as the ability to add a game.":"." }
            </p>
                <br />
            <h2>List of games</h2>
            <br />
            {gameCards}
        </div>
    )
}

export default GamesList;