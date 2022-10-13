import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

function Profile(){
    const { user } = useContext(UserContext)

    return(
        <div>
            {user.nickname} Profile
        </div>
    )
}

export default Profile;