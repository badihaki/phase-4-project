import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import NavigationBar from './NavigationBar';
import Home from './Home';
import NewPlayer from './NewPlayer';

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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
