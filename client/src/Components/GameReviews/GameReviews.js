import React from "react";

function GameReview( {review} ){

    console.log(review.user);

    return(
        <div>
            {review.score}
            <br />
            {review.comment}
        </div>
    )
}

export default GameReview;