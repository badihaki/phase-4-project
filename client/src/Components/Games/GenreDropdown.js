import React from "react";

function GenreDropdown( { genre, handleGenreChange } ){

    function handleChange(e){
        handleGenreChange(e);
    }

    return(
        <div>
            <select name="genre" value={genre} onChange={handleChange}>
                <option value={""}>Genre</option>
                <option value={"Arcade"}>Arcade</option>
                <option value={"Fighting"}>Fighting</option>
                <option value={"Action"}>Action</option>
                <option value={"Adventure"}>Adventure</option>
                <option value={"Platformer"}>Platformer</option>
                <option value={"FPS"}>First Person Shooter</option>
                <option value={"RPG"}>Role-Playing Game</option>
                <option value={"ARPG"}>Action RPG</option>
                <option value={"Sports"}>Sports</option>
            </select>
        </div>
    )
}

export default GenreDropdown;