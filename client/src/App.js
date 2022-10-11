import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {

  const [count, setCount] = useState(0);

  useEffect( ()=>{
    fetch("/hello").then( (r) => r.json() ).then((data) => {
      setCount(data.count);
    })
  }, [])

  return (
    <div className="App">
        <h1>Page count = {count}</h1>
    </div>
  );
}

export default App;
