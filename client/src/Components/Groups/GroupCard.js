import React from "react";

function GroupCard( {group} ){
    return(
        <div>
            <h3>{group.name}</h3>
            <h5>{group.message}</h5>
        </div>
    )
}

export default GroupCard;