import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function ReviewCard(){

    const {id} = useParams()

    useEffect(
        ()=>{
            fetch(`/reviews/${id}`).then(r=>r.json()).then(data=>{
                console.log(data);
            })
        },
        []
    )

    return(
        <div>
            Review
        </div>
    )
}

export default ReviewCard;