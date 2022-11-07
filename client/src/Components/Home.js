import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

function Home(){
    const {user} = useContext(UserContext);
    
function WelcomeMessage(){
    return(
    <p>
        Welcome, {user.nickname}, to your homepage.
        <br />
        Use the navigation bar to find your way around the app
    </p>
    )
}

function LogInMessage(){
    return(
        <p>
            Please <Link to={"/login"}>log in</Link>
        </p>
    )
}

function message(){
    if ( user === null ) return <LogInMessage />
    else return <WelcomeMessage />
}
    return(
        <div>
            <h1>Home</h1>
            <br />
            {message()}
        </div>
    )
}

export default Home;