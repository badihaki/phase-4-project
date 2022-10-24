import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import ReviewMiniCard from "./ReviewMiniCard";

function ReviewList(){

    const {user} = useContext(UserContext);
    const [reviews, setReviews] = useState(null)

    useEffect( ()=>{
        fetch(`/users/${user.id}/reviews`).then(r=>r.json()).then(data=>{
            setReviews(data);
        })
    }, [])

    function deleteReview(review){
        fetch(`/users/${user.id}/reviews/${review.id}`,{
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(review)
        }).then( r=>r.json).then( ()=>{
            const newReviewList = reviews.filter(reviewToCheck=>{
                return reviewToCheck.id !== review.id
            })
            setReviews(newReviewList);
        })
    }

    const reviewCards = ()=>{
        if(reviews === null || reviews.length < 1){
            return <span>You have no reviews. Go find a game and make one!</span>
        }
        return reviews.map( review => {

            function handleDeleteButton(){
                console.log(review);
                deleteReview(review);
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
            <h2>{user.nickname}'s Reviews</h2>
            <br />
            {reviewCards()}
        </div>
    )
}

export default ReviewList;