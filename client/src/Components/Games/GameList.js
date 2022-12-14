import React, { useContext, useEffect, useState } from "react";
import { GamesContext } from "../../Context/GamesContext";
import { UserContext } from "../../Context/UserContext";
import GameMiniCard from "./GameCardMini";
import NewGameForm from "./NewGameForm";

function GamesList(){

    const { user } = useContext(UserContext);
    const { games } = useContext(GamesContext);

    const gameCards = games.map( (game)=>{
        return <GameMiniCard key={game.id} game={game} />
    })

    return(
        <div>
            <h1>Games</h1>
            <p>
                Here is a list of games{user? ", as well as the ability to add a game.":"." }
            </p>
            {user? <NewGameForm /> : "" }
            <br />
            <h2>List of games</h2>
            {user? "": "Sign up or log in to view more info for each game"}
            {gameCards}
            <br />
        </div>
    )
}

export default GamesList;