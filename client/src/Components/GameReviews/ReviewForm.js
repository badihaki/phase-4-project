import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ReviewsContext } from "../../Context/ReviewsContext";
import { UserContext } from "../../Context/UserContext";

function NewReviewForm({ addReview }){
    const {id} = useParams();
    const {user} = useContext(UserContext)

    const [review, setReview] = useState({
        "score":1,
        "comment":"",
        "game_id":id
    });

    const [errors, setErrors] = useState([""]);
    const { reviews, setReviews, userReviews, setUserReviews } = useContext(ReviewsContext);

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
                    setErrors(null);
                    const newReviews = [...reviews, data];
                    setReviews(newReviews);
                    const newUserReviews = [...userReviews, data];
                    setUserReviews(newUserReviews);
                    console.log(data);
                    clearForm();
                    addReview(data);
                })
            }
            else{
                r.json().then(data=>{
                    console.log(data.errors.comment);
                    setErrors(data.errors.comment);
                })
            }
        })
    }

    // function messages(){
    //     if(errors === null) return ""
    //     else return errors.map( (error)=>{
    //         return (
    //             <div>{error}</div>
    //         )
    //     })
    // }

    const messages = errors.map( (error)=>{
                 return (
                     <div key={error}>{error}</div>
                 )
                })

    function clearForm(){
        const replacementReview = {
            "score":1,
            "comment":"",
            "game_id":id
        }
        setReview(replacementReview);
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
            <br />
            <div>
                {messages}
            </div>
            <br />
            <Link to={`/games/${id}`}>Back to Game Page</Link>
        </form>
    )
}

export default NewReviewForm;