import React, { useState } from "react";

function NewRequestForm({submitFunction}){

    const [message, setMessage] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        submitFunction(message);
        setMessage("");
    }

    return(
        <form onSubmit={handleSubmit}>
            Say hi:
            <br />
            <input type={"text"} name={"message"} onChange={(e)=>{setMessage(e.target.value)}} value={message} />
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default NewRequestForm;