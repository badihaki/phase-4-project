import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ReviewsContext } from "../../Context/ReviewsContext";
import { UserContext } from "../../Context/UserContext";
import EditReviewForm from "./EditReviewForm";

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
    function patchReview(updatedReview, reviewID ){
        fetch(`/users/${user.id}/reviews/${reviewID}`,{
            method: "PATCH",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedReview)
          }).then(r=>r.json()).then(data=>{
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

    const reviewCards = ()=>{
        if(userReviews === null || userReviews.length < 1){
            return <span>Not enough reviews. Go review stuff!!</span>
        }
        return userReviews.map( review => {
            
            function handleDeleteButton(){
                deleteReview(review);
            }
            function handlePatchForm(updatedObj){
                // console.log(updatedObj);
                // console.log(review.id)
                patchReview(updatedObj, review.id);
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