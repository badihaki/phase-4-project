import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReviewsContext } from "../../Context/ReviewsContext";
import { UserContext } from "../../Context/UserContext";
import EditReviewForm from "./EditReviewForm";
import ReviewMiniCard from "./ReviewMiniCard";

function ReviewList(){

    const {user} = useContext(UserContext);
    const { userReviews, setUserReviews } = useContext(ReviewsContext);

    function deleteReview(review){
        fetch(`/users/${user.id}/reviews/${review.id}`,{
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(review)
        }).then( r=>r.json).then( ()=>{
            const newReviewList = userReviews.filter(reviewToCheck=>{
                return reviewToCheck.id !== review.id
            })
            setUserReviews(newReviewList);
        })
    }

    const reviewCards = ()=>{
        if(userReviews === null || userReviews.length < 1){
            return <span>You have no reviews. Go find a game and make one!</span>
        }
        return userReviews.map( review => {
            
            function handleDeleteButton(){
                deleteReview(review);
            }
            function handlePatchForm(updatedObj){
                fetch(`/users/${user.id}/reviews/${review.id}`,{
                    method: "PATCH",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify(updatedObj)
                  }).then(r=>r.json()).then(data=>{
                    console.log(data);
                    const newReviewList = [...userReviews];
                    newReviewList.map(r=>{
                        if(r.id === data.id){
                            r.comment = data.comment;
                            r.score = data.score;
                        }
                    })
                    setUserReviews(newReviewList);
                  })
            }
            return (
                <div key={review.id}>
                    {review.game.name}
                    <br />
                    {review.comment}
                    <br />
                    {review.score}
                    <br />
                    Edit This Review
                    <br />
                    <EditReviewForm review={review} patchReview={handlePatchForm} />
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
            <Link to={"/user"}>Back to Profile</Link>
            <br />
            <br />
            <br />
            {reviewCards()}
        </div>
    )
}

export default ReviewList;