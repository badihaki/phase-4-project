import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GamesContext } from "../../Context/GamesContext";
import NewReviewForm from "../GameReviews/ReviewForm";
import ReviewMiniCard from "../GameReviews/ReviewMiniCard";
import GameUpdate from "./GameUpdate";

function GameCard(){
    const [game, setGame] = useState(null);
    const {games} = useContext(GamesContext)
    const { id } = useParams()
    const [showForm, setShowForm] = useState(false);
    const [gameReviews, setGameReviews] = useState([]);

    useEffect( ()=>{
        const thisGame = games.find( (game) => {return game.id==id});
        setGame(thisGame);
        setGameReviews(thisGame.reviews)
    }, [])

    function handleShowUpdateFormButton(){
        const result = !showForm;
        setShowForm(result);
    }

   const reviews = ()=>{
    if (game === null){ return <div>""</div> }
    return gameReviews.map(review=>{
        return (
            <div key={review.id} >
                <ReviewMiniCard review={review} />
                <br />
            </div>
        )
    })
}

function addReview(reviewToAdd){
    const newReviewList = [...gameReviews, reviewToAdd];
    setGameReviews(newReviewList);
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
                <h3>Post a review</h3>
                <NewReviewForm addReview={addReview} />
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
                <Link to={"/games"} >Back to list</Link>
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