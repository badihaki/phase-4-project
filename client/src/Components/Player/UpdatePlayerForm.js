import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

function UpdatePlayerForm(){

    const [ updateFormValues, setUpdateFormValues ] = useState({
        "nickname": "",
        "bio": "",
        "id":""
    })

    const { user, setUser } = useContext(UserContext)

    function handleFormInput(e){
        const key = e.target.name;
        const value = e.target.value;
        const newFormData = {...updateFormValues}
        newFormData[key] = value;
        setUpdateFormValues(newFormData);
    }

    function handleSubmitClick(e){
        e.preventDefault();
        const userData = {...updateFormValues}
        userData.id = user.id;
        if(userData.bio === ""){
            userData.bio = user.bio;
        }
        if(userData.nickname === ""){
            userData.nickname = user.nickname;
        }

        requestUpdate(userData);
        clearForm();
    }

    function requestUpdate(data){
        fetch(`/users/${data.id}`,{
            method: "PATCH",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(r => r.json() ).then(data=>{
            setUser(data);
        })
    }

    function clearForm(){
        const obj = {
            "nickname": "",
            "bio": "",
            "id": user.id
        }
        setUpdateFormValues(obj);
    }


    return(
        <div>
            Update form
            <div>
                <form onSubmit={handleSubmitClick}>
                    Nickname
                    <br />
                    <input type={"text"} name={"nickname"} value={updateFormValues.nickname} onChange={handleFormInput} />
                    <br />
                    <br />
                    Bio
                    <br />
                    <input type={"text"} name={"bio"} value={updateFormValues.bio} onChange={handleFormInput} />
                    <br />
                    <button type="Submit"> Submit </button> or <Link to={"/profile"}><button> Back </button></Link>
                </form>
            </div>
        </div>
    )
}

export default UpdatePlayerForm;