import React from "react";
import { Link } from "react-router-dom";

function ReviewMiniCard( {review} ){
    return(
        <div>
            {review.score}
            <br />
            <Link to={`../reviews/${review.id}`} >Full review</Link>
            <br />
        </div>
    )
}

export default ReviewMiniCard;