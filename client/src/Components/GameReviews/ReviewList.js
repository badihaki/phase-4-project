import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import ReviewMiniCard from "./ReviewMiniCard";

function ReviewList(){

    const {user} = useContext(UserContext);
    const [reviews, setReviews] = useState(null)

    useEffect( ()=>{
        fetch(`/users/${user.id}/reviews`).then(r=>r.json()).then(data=>{
            console.log(data);
            setReviews(data);
        })
    }, [])

    const reviewCards = ()=>{
        if(reviews === null){
            return <span></span>
        }
        return reviews.map( review => {

            function handleDeleteButton(){
                console.log(review);
            }

            return (
                <div>
                    {review.game.name}
                    <br />
                    {review.comment}
                    <br />
                    {review.score}
                    <br />
                    Edit This Review
                    <br />
                    <button onClick={handleDeleteButton}>Delete This Review</button>
                    <br />
                    <br />
                </div>
            )
        })
    } 

    return(
        <div>
            Reviews
            <br />
            {reviewCards()}
        </div>
    )
}

export default ReviewList;