import React, { useState } from "react";

function GameUpdate( {game} ){

    const [description, setDescription] = useState("");

    function handleFormChange(e){
        const formInput = e.target.value;
        setDescription(formInput);
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(description);
        // instead of logging, we'll send the data back
        setDescription("");
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