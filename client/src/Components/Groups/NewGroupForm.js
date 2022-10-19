import React, { useState } from "react";

function NewGroupForm( {createGroup} ){
    
    const [groupObj, setGroupObj] = useState({
        "name":"",
        "message":"",
    })

    function handleSubmit(e){
        e.preventDefault();
        createGroup(groupObj);
    }

    function handleChange(e){
        const key = e.target.name;
        const value = e.target.value;
        const newGroupObj = {...groupObj};
        newGroupObj[key]=value;
        setGroupObj(newGroupObj);
    }

    return(
        <div>
            Create a new group below!
            <br />
            <form onSubmit={handleSubmit}>
                Group name
                <br />
                <input name="name" onChange={handleChange} value={groupObj.name} placeholder={"Pick a worthy name!!"} />
                <br />
                Welcome message
                <br />
                <input name="message" onChange={handleChange} value={groupObj.message} placeholder={"Remember to be Friendly!"} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewGroupForm;