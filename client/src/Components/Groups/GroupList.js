import React, { useState } from "react";
import GameSearchBar from "../SearchBar";
import NewGroupForm from "./NewGroupForm";

function GroupList({ games, players }){

    const [searchResults, setSearchResults] = useState("");
    const [showForm, setShowForm] = useState(false);

    function handleSearch(e){
        setSearchResults(e.target.value);
    }

    return(
        <div>
            Want to make a new group?
            <br />
            <button onClick={()=>setShowForm(!showForm)}>{showForm? "No...":"Yes!!"}</button>
            <br />
            {showForm? <NewGroupForm />:""}
            <br />
            List of groups
            <br />
            <GameSearchBar searchingFor={"Game"} result={searchResults} setResult={handleSearch} />
            <br />
            List goes here
        </div>
    )
}

export default GroupList;