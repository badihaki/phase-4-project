import React, { useState } from "react";

function NewPlayer(){
    const [user, setNewUser] = useState({
        "email":"",
        "password":"",
        "password_confirmation":"",
        "nickname":"",
        "bio":""
    })

    function onSubmit(e){
        e.preventDefault();
        console.log(user);
        fetch("/users",{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(user)
        }).then(
            (r) => r.json()
            ).then(
                (data)=>{
                    console.log(data);
                }
            )
    }

    function handleFormChange(e){
        const key = e.target.name;
        const value = e.target.value;
        const newUser = {...user}
        newUser[key] = value;
        setNewUser(newUser);
    }

    return(
        <div>
            Sign up below
            <form onSubmit={onSubmit}>
                Email
                <input type={"email"} name="email" onChange={handleFormChange} />
                <br />
                Password
                <input type={"text"} name="password" onChange={handleFormChange} />
                <br />
                Confirm Password
                <input type={"text"} name="password_confirmation" onChange={handleFormChange} />
                <br />
                Nickname
                <input type={"text"} name="nickname" onChange={handleFormChange} />
                <br />
                Bio:
                <br />
                <input type={"text"}  name="bio" onChange={handleFormChange} />
                <br />
                <br />
                <button type="Submit">Submit</button>
                <button type="Reset">Reset</button>
            </form>
        </div>
    )
}

export default NewPlayer;