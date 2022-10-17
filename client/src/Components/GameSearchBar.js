import React from "react";

function GameSearchBar( { result, setResult } ){
    return(
        <div>
            <form>
                Search by Game Name
                <br />
                <form>
                    <input type={"text"} name={"name"} placeholder={"Enter name here"} value={result} onChange={setResult} />
                </form>
            </form>
        </div>        
    )
}

export default GameSearchBar;