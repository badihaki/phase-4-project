import './App.css';
import {useContext, useEffect, useState} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import NavigationBar from './Components/Nav/NavigationBar';
import Home from './Components/Home';
import NewPlayer from './Components/Player/NewPlayer';
import LogIn from './Components/Player/LogIn';
import { UserContext } from './Context/UserContext';
import Profile from './Components/Player/Profile';
import UpdatePlayerForm from './Components/Player/UpdatePlayerForm';
import GamesList from './Components/Games/GameList';
import GameCard from './Components/Games/GameCard';
import NavigationFooter from './Components/Nav/NavigationFooter';
import ReviewCard from './Components/GameReviews/ReviewCard';
import NewReviewForm from './Components/GameReviews/ReviewForm';
import ReviewList from './Components/GameReviews/ReviewList';

function App() {

  const { setUser } = useContext(UserContext);
  const [ games, setGames ] = useState(null);

  useEffect( ()=>{
      fetch("/games").then( r => r.json() ).then( (data)=>{
          setGames(data);
      })
  }, [] )

  function postNewGame(gameObj){
      fetch("/games",{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(gameObj)
      }).then(r=>{
          if(r.ok){
              r.json().then(data=>{
                  const newGamesList = [...games, data];
                  setGames(newGamesList);
              })
          }
      })
  }

  useEffect( ()=>{
    fetch("/me").then( (r) => {
        if(r.ok){
            r.json().then( (data) => setUser(data) );
        }
    });
}, [] )


  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
        <Switch>
          {/* Real routes begin here */}
          <Route exact path={"/reviews"} >
            <ReviewList />
          </Route>
          <Route exact path={"/gamelist/:id/newReview"}>
            <NewReviewForm />
          </Route>
          <Route exact path={"/reviews/:id"} >
            <ReviewCard />
          </Route>
          <Route exact path={"/gamelist/:id"}>
                <GameCard />
          </Route>
          <Route exact path={"/gamelist"}>
            <GamesList games={games} postGames={postNewGame} />
          </Route>
          <Route exact path={"/updateplayer"}>
            <UpdatePlayerForm />
          </Route>
          <Route exact path={"/profile"}>
            <Profile />
          </Route>
          <Route exact path={"/signup"}>
            <NewPlayer />
          </Route>
          <Route exact path={"/login"}>
            <LogIn />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <NavigationFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
