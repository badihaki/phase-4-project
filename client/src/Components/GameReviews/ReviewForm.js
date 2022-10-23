import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

function NewReviewForm(){
    const {id} = useParams();
    const {user} = useContext(UserContext)

    const [review, setReview] = useState({
        "score":1,
        "comment":"",
        "game_id":id
    });

    const [messages, setMessages] = useState(null);

    function handleFormChange(e){
        const key = e.target.name;
        const value = e.target.value;
        const newReviewState = {...review};
        newReviewState[key] = value;
        setReview(newReviewState);
    }

    function handleSubmit(e){
        e.preventDefault();

        fetch(`/users/${user.id}/reviews`,{
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(review)
        }).then(r=>{
            if(r.ok){
                r.json().then(data=>{
                    setMessages(null);
                    console.log(data);
                })
            }
            else{
                r.json().then(data=>{
                    setMessages(data);
                })
            }
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            Score
            <br />
            <select name="score" value={review.score} onChange={handleFormChange}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            Comment
            <br />
            <input type={"text"} name={"comment"} value={review.comment} onChange={handleFormChange} />
            <br />
            <button type="submit" >Submit</button>
            {messages? "Got messages" :""}
        </form>
    )
}

export default NewReviewForm;