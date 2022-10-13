import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

function LoginLogoutButton(){

    const { user, setUser } = useContext(UserContext);

    function logOut(){
        fetch("/logout",{
            method: "DELETE"
        }).then( ()=> {
            setUser(null)
            // debugger;
        })
    }

    function LogInButton(){
        return (
            <Link to={"/login"}>
                <button> Log In </button>
            </Link>
        )
    }
    function LogOutButton(){
        return (
            <button onClick={logOut}>
                Log Out
            </button>

        )
    }
    
    return(
        <span>
            { user? <LogOutButton /> : <LogInButton/> }
        </span>
    )
}

    export default LoginLogoutButton;