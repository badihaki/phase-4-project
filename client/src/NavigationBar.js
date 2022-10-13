import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./Context/UserContext";

function NavigationBar(){
    // will need to fetch to /me
    // will need state to determine if user is logged in

    const { user } = useContext(UserContext);

    function LoginLogoutButton(){
        function handleClick(e){
            e.preventDefault();
            if(user){
                return <Link to={"/login"} />
            }
            else{
                logOut();
            }
        }

        function logOut(){
            console.log("logout//delete");
        }

        return(
            <button onClick={handleClick}>{ user? "Login":"Logout" }</button>
        )
    }

    return(
        <div>
            <h4>Navigation</h4>
            <Link to={"/"}> Home </Link>
            <Link to={"/signup"}> Sign Up </Link>
            <Link to={"/login"}> Log In </Link>
            <LoginLogoutButton />
        </div>
    )
}

export default NavigationBar;