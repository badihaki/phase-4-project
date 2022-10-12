import React from "react";
import { useState } from 'react';

function LogIn(){

    const [user, setUser] = useState({
        "email":"",
        "password":""
    })

    function onSubmit(e){
        //
        e.preventDefault();
        console.log(user)
        clearForm()
    }

    function clearForm(){
        const newUser = {
            "email":"",
            "password":""
        }
        setUser(newUser);
    }

    function handleFormChange(e){
        const key = e.target.name;
        const value = e.target.value;
        const newUser = {...user}
        newUser[key] = value;
        setUser(newUser);
    }

    return(
        <div>
            Login
            <form onSubmit={onSubmit}>
                Email
                <br />
                <input type={"email"} name="email" value={user.email} onChange={handleFormChange} />
                <br />
                Password
                <br />
                <input type={"password"} name="password" value={user.password} onChange={handleFormChange} />
                <button type="Submit">Log In</button>
            </form>
        </div>
    )
}

export default LogIn;