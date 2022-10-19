import React, { useEffect, useState } from "react";
import GameSearchBar from "../SearchBar";
import GroupCard from "./GroupCard";
import NewGroupForm from "./NewGroupForm";

function GroupList({ groups, newRequest, postNewGroup }){

    const [searchResults, setSearchResults] = useState("");

    function handleSearch(e){
        setSearchResults(e.target.value);
    }

    const groupCards = groups.map( (group)=> {
        return <GroupCard group={group} newRequest={newRequest} />
    })

    function createAndSetGroup(groupObj){
        postNewGroup(groupObj);
    }

    return(
        <div>
            <br />
            Create a new Group:
            <NewGroupForm createGroup={createAndSetGroup} />
            <br />
            List of groups
            <br />
            <GameSearchBar searchingFor={"Game"} result={searchResults} setResult={handleSearch} />
            <br />
            {groups? "List goes here":"Loading"}
            {groupCards}
        </div>
    )
}

export default GroupList;