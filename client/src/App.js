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
  const [ players, setPlayers] = useState(null)
  const [ games, setGames ] = useState(null);
  const [groups, setGroups] = useState(null);
  const [groupRequests, setGroupRequests] = useState(null);

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

  useEffect( ()=>{
    fetch("/groups").then(r=>r.json()).then(data=>setGroups(data));
},[] )

  useEffect( ()=>{
    fetch("/group_requests").then(r=>r.json()).then(data=>setGroupRequests(data));
  },[])

  function postNewRequestToGroup(request){
    fetch("/group_requests",{
      method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
    }).then(r=>r.json()).then(data=>{
      const newRequests = {...groupRequests, data};
      setGroupRequests(newRequests);
    })
  }

function postNewGroup(group){
  console.log(group);
    fetch("/groups",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(group)
    }).then(r=>{
        if(r.ok){
            r.json().then(data=>{
                const newGroupsList = [...groups, data];
                setGroups(newGroupsList);
            })
        }
    })
}

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
          <Route exact path={"/groupform"}>
            <NewGroupForm />
          </Route>
          <Route exact path={"/grouplist"}>
            <GroupList groups={groups} postNewGroup={postNewGroup} players={players} games={games} newRequest={postNewRequestToGroup} />
          </Route>
          <Route exact path={"/gamelist/:id"}>
                <GameCard groups={groups} />
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
