import React, { useState } from "react";

function GameUpdate( {game} ){

    const [description, setDescription] = useState("");

    function handleFormChange(e){
        const formInput = e.target.value;
        setDescription(formInput);
    }

    return(
        <div>
            Update description below:
            <br />
            { game? 
            <form >
                <input type={"text"} onChange={handleFormChange} placeholder={game.description} value={description} />
            </form>
             : "Loading" }
            {console.log(game)}
        </div>
    )
}

export default GameUpdate;