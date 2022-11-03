import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

function UserGames(){
    const { user } = useContext(UserContext)
    const gameCards = user.filtered_game_list.map( (game) => {
        console.log(game)
        return(
            <div key={game.id}>
                ~~~~~
                <h4>{game.name}</h4>
                <h5>{game.genre}</h5>
                <p>{game.description}</p>
                ~~~~~
            </div>
        )
    })
    return(
        <div>
            <h2>{user.nickname}'s Games</h2>
            <br />
            <Link to={"/user"}>Back to Profile</Link>
            <br />
            {gameCards}
            <br />
        </div>
    )
}

export default UserGames;