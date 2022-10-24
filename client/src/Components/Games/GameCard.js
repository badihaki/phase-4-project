import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReviewMiniCard from "../GameReviews/ReviewMiniCard";
import GameUpdate from "./GameUpdate";

function GameCard(){
    const [game, setGame] = useState(null);
    const { id } = useParams()
    const [showForm, setShowForm] = useState(false);

    useEffect(()=>{
        fetch(`/games/${id}`).then(r=>r.json()).then(data=>{
            setGame(data);
        })},[])

    function handleShowUpdateFormButton(){
        const result = !showForm;
        setShowForm(result);
    }

   const reviews = ()=>{
    if (game===null){ return <div>""</div> }
    return game.reviews.map(review=>{
        return (
            <div key={review.id} >
                <ReviewMiniCard review={review} />
                <br />
            </div>
        )
    })
}

    function CardComponent(){
        return(
            <div>
                <h2> {game.name} </h2>
                <div>
                    <p>
                        {game.description}
                    </p>
                </div>
                <div>
                    ( {game.genre} )
                </div>
                <br />
                <button onClick={handleShowUpdateFormButton}>{ showForm? "Hide Form":"Change Description" }</button>
                <br />
                { showForm? <GameUpdate game={game} changeGameInfo={setGame} /> : "" }
                <br />
                <br />
                <Link to={`/gamelist/${id}/newReview`}>Post a review</Link>
                <br />
                { game? "Reviews:" : "" }
                <br />
                {reviews()}
                <br />
                <div>
                    <h3>Overall review score:</h3>
                    {game.aggregate_score}
                </div>
                <br />
                <Link to={"/gamelist"} >Back to list</Link>
            </div>
        )
    }

    return(
        <div>
            {game? <CardComponent /> : "Loading info"}
        </div>
    )
}

export default GameCard;