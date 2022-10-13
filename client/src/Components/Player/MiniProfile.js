import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

function MiniProfile(){
    const { user } = useContext(UserContext)

    return(
        <span>
             <button>Hey, { user.nickname } !</button>
        </span>
    )
}

export default MiniProfile;