import React from "react";

function NewGameForm(){
    return(
        <div>
            <form>
                <input name="name" placeholder="Game Name" />
                <button type="submit">Add game</button>
            </form>
        </div>
    )
}

export default NewGameForm;