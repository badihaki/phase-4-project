import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ReviewCard(){

    const {id} = useParams()
    const [review, setReview] = useState(null);

    useEffect(
        ()=>{
            fetch(`/reviews/${id}`).then(r=>r.json()).then(data=>{
                setReview(data);
            })
        },
        []
    )

    function CardComponent(){
        return <div>
            <br />
            Review by {review.user.nickname}
            <br />
            {review.comment}
            <br />
            {review.score}
            <br />
            <br />
            <Link to={`../gamelist/${review.game.id}`}>Back to game</Link>
        </div>
    }

    return(
        <div>
            {review? <CardComponent /> : "Loading info..." }
        </div>
    )
}

export default ReviewCard;