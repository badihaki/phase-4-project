import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import MiniProfile from "../Player/MiniProfile";
import LoginLogoutButton from "./LogInOutButton";

function NavigationBar(){
    // will need to fetch to /me
    // will need state to determine if user is logged in

    const { user } = useContext(UserContext);

    function MiniProfileContainer(){
        return(
            <Link to={"/profile"}><MiniProfile /></Link>
        )
    }

    return(
        <div>
            <span>
                <h4>Navigation</h4>
                <Link to={"/"}> Home </Link> ~|~
                <Link to={"/gamelist"}> Games </Link> ~|~
                {user? <span><Link to={"/reviews"}> Your Reviews </Link> ~|~</span> : ""}
            </span>
            <span>
                { user? <MiniProfileContainer /> : <Link to={"/signup"}><button> Sign Up </button></Link> }
                <LoginLogoutButton />
            </span>
        </div>
    )
}

export default NavigationBar;