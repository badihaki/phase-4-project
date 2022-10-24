import React, { useState } from "react";
import GenreDropdown from "./GenreDropdown";

function NewGameForm( {addGame} ){

    const [ gameObj, setGameObj ] = useState({
        "name": "",
        "genre": "",
        "description":""
    })

    function clearForm(){
        const replacementGameObj = {
            "name": "",
            "genre": "",
            "description":""
        }
        setGameObj(replacementGameObj);
    }

    function handleSubmit(e){
        e.preventDefault();
        addGame(gameObj);
        clearForm();
    }

    function handleChange(e){
        const key = e.target.name;
        const value = e.target.value;
        const replacementGameObj = {...gameObj};
        replacementGameObj[key] = value;
        setGameObj(replacementGameObj);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Game Name" value={gameObj.name} onChange={handleChange} />
                <br />
                <input name="description" placeholder="Game Description" value={gameObj.description} onChange={handleChange} />
                <br />
                <GenreDropdown genre={gameObj.genre} handleGenreChange={handleChange} />
                <br />
                <br />
                <button type="submit">Add game</button>
            </form>
        </div>
    )
}

export default NewGameForm;