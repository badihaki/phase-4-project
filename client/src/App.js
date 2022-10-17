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
import GroupList from './Components/Groups/GroupList';
import NewGroupForm from './Components/Groups/NewGroupForm';

function App() {

  const { setUser } = useContext(UserContext);
  const [ players, setPlayers] = useState([])
  const [ games, setGames ] = useState([]);

  useEffect( ()=>{
    fetch("/users").then(r=>r.json() ).then( (data)=>{
      setPlayers(data);
    })
  }, [] )

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
          <Route path={"/groupform"}>
            <NewGroupForm />
          </Route>
          <Route path={"/groups"}>
            <GroupList players={players} games={games} />
          </Route>
          <Route exact path={"/gamelist/:id"}>
                <GameCard />
          </Route>
          <Route path={"/gamelist"}>
            <GamesList games={games} postGames={postNewGame} />
          </Route>
          <Route path={"/updateplayer"}>
            <UpdatePlayerForm />
          </Route>
          <Route path={"/profile"}>
            <Profile />
          </Route>
          <Route path={"/signup"}>
            <NewPlayer />
          </Route>
          <Route path={"/login"}>
            <LogIn />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <NavigationFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
