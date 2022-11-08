import React, { useContext } from "react";
import { useState } from 'react';
import { UserContext } from "../../Context/UserContext";
import Profile from "./Profile";

function LogIn(){

    const [userLoginForm, setUserLoginForm] = useState({
        "email":"",
        "password":""
    })

    const { user, setUser } = useContext(UserContext);
    const [ errors, setErrors ] = useState([""])

    function onSubmit(e){
        //
        e.preventDefault();
        console.log(userLoginForm)
        fetch("/login",{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(userLoginForm)
        }).then(
            r=>{
                if(r.ok){
                    r.json().then(data=>{
                        loginSuccessful(data);
                        setUser(data);
                        setErrors([""]);
                    })
                }
                else{
                    r.json().then(data=>{
                        const newErrList = [];
                        newErrList.push("login unsuccessful, invalid email or pass or something else...");
                        console.log(data);
                        setErrors(newErrList);
                    })
                }
            }
        )
        clearForm();
    }

    function loginSuccessful(data){
        console.log("login successful, data below");
        console.log(data);
    }

    function clearForm(){
        const newUser = {
            "email":"",
            "password":""
        }
        setUserLoginForm(newUser);
    }

    function handleFormChange(e){
        const key = e.target.name;
        const value = e.target.value;
        const newUser = {...userLoginForm}
        newUser[key] = value;
        setUserLoginForm(newUser);
    }

    const errorMessages = errors.map(err=>{
        return(
            <div id={err}>
                {err}
            </div>
        )
    })

    return(
        <div>
            { user?
            <Profile />: 
            <div>
                Login
                <form onSubmit={onSubmit}>
                    Email
                    <br />
                    <input type={"email"} name="email" value={userLoginForm.email} onChange={handleFormChange} />
                    <br />
                    Password
                    <br />
                    <input type={"password"} name="password" value={userLoginForm.password} onChange={handleFormChange} />
                    <button type="Submit">Log In</button>
                    {errorMessages}
                </form>
            </div> }
        </div>
    )
}

export default LogIn;