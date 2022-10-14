import React, { useState } from "react";

function NewGameForm(){

    const [ gameName, setGameName ] = useState("");
    const [ gameGenre, setGameGenre ] = useState("");

    function handleNameChange(e){
        const value = e.target.value;
        setGameName(value);
    }

    function handleGenreChange(e){
        const value = e.target.value;
        setGameGenre(value);
    }

    return(
        <div>
            <form>
                <input name="name" placeholder="Game Name" value={gameName} onChange={handleNameChange} />
                <button type="submit">Add game</button>
            </form>
        </div>
    )
}

export default NewGameForm;