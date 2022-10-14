import React, { useState } from "react";
import GenreDropdown from "./GenreDropdown";

function NewGameForm( {addGame} ){

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

    function clearForm(){
        const gameObj = {
            "name": "",
            "genre": ""
        }
        setGameName(gameObj.name);
        setGameGenre(gameObj.genre);
    }

    function handleSubmit(e){
        e.preventDefault();
        const gameObj = {
            "name": gameName,
            "genre": gameGenre
        }
        clearForm();
        
        addGame(gameObj);
        
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Game Name" value={gameName} onChange={handleNameChange} />
                <br />
                <GenreDropdown genre={gameGenre} handleGenreChange={handleGenreChange} />
                <br />
                <br />
                <button type="submit">Add game</button>
            </form>
        </div>
    )
}

export default NewGameForm;