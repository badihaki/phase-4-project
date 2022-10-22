import React from "react";
import { Link } from "react-router-dom";

function GameReview( {review} ){
    return(
        <div>
            {review.score}
            <br />
            <Link to={`../reviews/${review.id}`} >Full review</Link>
            <br />
        </div>
    )
}

export default GameReview;