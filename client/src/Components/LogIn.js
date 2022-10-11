import React from "react";

function LogIn(){
    return(
        <div>
            Login
            <form>
                Email
                <br />
                <input type={"email"} name="email" />
                <br />
                Password
                <br />
                <input type={"password"} name="password" />
                <button type="Submit">Log In</button>
            </form>
        </div>
    )
}

export default LogIn;