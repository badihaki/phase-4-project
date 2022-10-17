import React, { useState } from "react";
import GameSearchBar from "../GameSearchBar";

function GroupList({ games, players }){

    const [searchResults, setSearchResults] = useState("");

    function handleSearch(e){
        setSearchResults(e.target.value);
    }

    return(
        <div>
            List of groups
            <br />
            <GameSearchBar result={searchResults} setResult={handleSearch} />
            <br />
        </div>
    )
}

export default GroupList;