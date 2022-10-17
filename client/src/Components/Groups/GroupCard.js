import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import NewRequestForm from "./NewRequestForm";

function GroupCard( {group, newRequest} ){

    const [groupObj, setGroupObj] = useState(group);
    const [showForm, setShowForm] = useState(false);
    const {user} = useContext(UserContext);

    function createRequestAndSend(message){
        const newRequest = {
            "game_id":groupObj.game_id,
            "user_id":user.id,
            "group_id":groupObj.id,
            "request_message": message
        }
        newRequest(newRequest);
    }

    return(
        <div>
            <h3>{group.name}</h3>
            <h5>{group.message}</h5>
            <div>
                Request to join this group?
                <br />
                <button onClick={()=>{setShowForm(!showForm)}}>{showForm?"Hide Form":"Request to Join"}</button>
                {showForm? <NewRequestForm submitFunction={createRequestAndSend} />:""}
            </div>
        </div>
    )
}

export default GroupCard;