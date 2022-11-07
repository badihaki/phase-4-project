import React, { useContext, useState } from "react";
import { GamesContext } from "../../Context/GamesContext";
import GenreDropdown from "./GenreDropdown";

function NewGameForm(){

    const {games, setGames} = useContext(GamesContext);

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
        postNewGame(gameObj);
        clearForm();
    }

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