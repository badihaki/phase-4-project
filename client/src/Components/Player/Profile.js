import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

function Profile(){
    const { user } = useContext(UserContext);
    const [ showEmail, setShowEmail ] = useState(false);

    function handleEmailButtonClick(){
        const result = !showEmail;
        setShowEmail(result);
    }

    function EmailComponent(){
        return(
            <div>
                Below information is sensitive.
                <br />
                We hide your email for your security.
                <br />
                <Link to={ {pathname: user.email} } target="_blank" > {user.email} </Link>
            </div>
        )
    }

    function ProfileComponent(){
        return(
        <div>
            {user.nickname} 's Profile
            <br />
            <button onClick={handleEmailButtonClick} >{ showEmail? "Hide Email" : "Show Email" }</button>
            {showEmail? <EmailComponent /> : ""}
            <br />
            <div>
                <br />
                Player Bio:
                <br />
                {user.bio}
            </div>
        </div>
        )
    }

    return(
        <div>
            {user? <ProfileComponent /> : ""}
        </div>
    )
}

export default Profile;