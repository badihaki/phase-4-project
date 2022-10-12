import './App.css';
import {useEffect, useState} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import NavigationBar from './NavigationBar';
import Home from './Components/Home';
import NewPlayer from './Components/NewPlayer';
import LogIn from './Components/LogIn';

function App() {

  const [count, setCount] = useState(0);

  useEffect( ()=>{
    fetch("/hello").then( (r) => r.json() ).then((data) => {
      setCount(data.count);
    })
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/count" >
            <h1>Page count = {count}</h1>
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
      </div>
    </BrowserRouter>
  );
}

export default App;
