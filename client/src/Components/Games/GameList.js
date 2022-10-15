import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import GameMiniCard from "./GameMiniCard";
import NewGameForm from "./NewGameForm";

function GamesList(){

    const { user } = useContext(UserContext);

    const [ games, setGames ] = useState([]);
    useEffect( ()=>{
        fetch("/games").then( r => r.json() ).then( (data)=>{
            console.log(data);
            setGames(data);
        })
    }, [] )

    function postNewGame(gameObj){
        fetch("/games",{
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(gameObj)
        }).then(r=>{
            if(r.ok){
                r.json().then(data=>{
                    const newGamesList = [...games, data];
                    setGames(newGamesList);
                })
            }
        })
    }

    const gameCards = games.map( (game)=>{
        return <GameMiniCard key={game.id} game={game} />
    })

    return(
        <div>
            <h1>Games</h1>
            <p>
                Here is a list of games{user? ", as well as the ability to add a game.":"." }
            </p>
                {user? <NewGameForm addGame={postNewGame} /> : "" }
                <br />
            <h2>List of games</h2>
            {user? "": "Sign up or log in to view more info for each game"}
            {gameCards}
            <br />
        </div>
    )
}

export default GamesList;