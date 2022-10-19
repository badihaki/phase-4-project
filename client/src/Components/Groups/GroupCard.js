import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import NewRequestForm from "./NewRequestForm";

function GroupCard( {group, newRequest} ){

    const [groupObj, setGroupObj] = useState(group);
    const [showForm, setShowForm] = useState(false);
    const {user} = useContext(UserContext);

    function createRequestAndSend(message){
        const req = {
            "game_id":groupObj.game_id,
            "user_id":user.id,
            "group_id":groupObj.id,
            "request_message": message
        }
        newRequest(req);
    }

    /*
    const users = group.users.map((user)=>{
        return(
            <li key={user.id}>
                {user.nickname}
                <br />
            </li>
        )
    })
    */

    const users = group.users.map(user => {
        const request = group.group_requests.find((req)=>{
            return req.user_id === user.id;
        })
        return(
            <li key={user.id}>
                {user.nickname}
                <br />
                {request.request_message}
            </li>
        )
    });

    const games = group.games.map( (game)=>{
        return(
            <li key={game.id}>{game.name}</li>
        )
    })

    return(
        <div>
            <h3>{group.name}</h3>
            <h5>{group.message}</h5>
            <div>
                Our members:
                <br />
                <ul>
                    {users}
                </ul>
            </div>
            <div>
                Games we play:
                <ul>
                    {games}
                </ul>
                <br />
            </div>
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