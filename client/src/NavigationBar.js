import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./Context/UserContext";

function NavigationBar(){
    // will need to fetch to /me
    // will need state to determine if user is logged in

    const { user, setUser } = useContext(UserContext);

    function LoginLogoutButton(){

        function logOut(){
            fetch("/logout",{
                method: "DELETE"
            }).then( ()=> {
                setUser(null)
                // debugger;
            })
            return <Link to={"/"} />
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
            <span>{user? <LogOutButton /> : <LogInButton /> }</span>
        )
    }

    return(
        <div>
            <h4>Navigation</h4>
            <Link to={"/"}> Home </Link>
            { user? "" : <Link to={"/signup"}> Sign Up </Link> }
            <LoginLogoutButton />
        </div>
    )
}

export default NavigationBar;