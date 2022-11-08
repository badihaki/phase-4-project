import React, { useContext, useState } from "react";
import { UserContext } from "../../Context/UserContext";

function NewPlayer(){
    const [userForm, setUserForm] = useState({
        "email":"",
        "password":"",
        "password_confirmation":"",
        "nickname":"",
        "bio":""
    })

    const [ errors, setErrors ] = useState([""]);

    const {setUser} = useContext(UserContext);

    function onSubmit(e){
        e.preventDefault();
        fetch("/users",{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(userForm)
        }).then(
            (r) => {
                // debugger;
                if(r.ok){
                    r.json().then(
                        (data)=>{
                            console.log(data);
                            setUser(data);
                            setErrors([""])
                        }
                    )
                }
                else{
                    r.json().then(
                        (data) => {
                            console.log(data);
                            const newErrorsArray = [];
                            for (const key in data.errors) {
                                console.log(`${key}: ${data.errors[key]}`);
                                newErrorsArray.push(`${key}: ${data.errors[key]}`);
                            }
                            setErrors(newErrorsArray);
                        }
                    )
                }
            }
            )
    }

    function handleFormChange(e){
        const key = e.target.name;
        const value = e.target.value;
        const newUser = {...userForm}
        newUser[key] = value;
        setUserForm(newUser);
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
                {errorMessages}
                <button type="Reset">Reset</button>
            </form>
        </div>
    )
}

export default NewPlayer;