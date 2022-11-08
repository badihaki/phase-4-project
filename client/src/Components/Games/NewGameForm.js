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

    const [ errors, setErrors ] = useState([""])

    const errorMessages = errors.map( (errorMessage)=>{
        return (
            <div key={errorMessage}>{errorMessage}</div>
        )
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
                    setErrors([""]);
                })}
            else{
                r.json().then(data=>{
                    // console.log(data.errors);
                    const newErrorsArray = [];
                    for (const key in data.errors) {
                        console.log(`${key}: ${data.errors[key]}`);
                        newErrorsArray.push(`${key}: ${data.errors[key]}`);
                    }
                    setErrors(newErrorsArray);
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
                <br />
                {errorMessages}
            </form>
        </div>
    )
}

export default NewGameForm;