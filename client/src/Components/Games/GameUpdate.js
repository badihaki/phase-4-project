import React, { useState } from "react";

function GameUpdate( {game, changeGameInfo} ){

    const [description, setDescription] = useState("");

    function handleFormChange(e){
        const formInput = e.target.value;
        setDescription(formInput);
    }

    function handleSubmit(e){
        e.preventDefault();
        const gameObj = {
            "description":description
        }
        fetch(`/games/${game.id}`,{
            method: "PATCH",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(gameObj)
        }).then(r => r.json() ).then( (data)=>{
            changeGameInfo(data);
            // game.description = description;
            setDescription("");
        })
    }

    return(
        <div>
            Update description below:
            <br />
            { game? 
            <form onSubmit={handleSubmit} >
                <input type={"text"} onChange={handleFormChange} placeholder={game.description} value={description} />
                <br />
                <button type="submit">Submit</button>
            </form>
             : "Loading" }
        </div>
    )
}

export default GameUpdate;