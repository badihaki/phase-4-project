import React, { useEffect, useState } from "react";
import GameSearchBar from "../SearchBar";
import GroupCard from "./GroupCard";
import NewGroupForm from "./NewGroupForm";

function GroupList({ groups, newRequest, games, players }){

    const [searchResults, setSearchResults] = useState("");

    function handleSearch(e){
        setSearchResults(e.target.value);
    }

    return(
        <div>
            <br />
            List of groups
            <br />
            <GameSearchBar searchingFor={"Game"} result={searchResults} setResult={handleSearch} />
            <br />
            {groups? "List goes here":"Loading"}
            <GroupCard group={groups[0]} newRequest={newRequest} />
        </div>
    )
}

export default GroupList;