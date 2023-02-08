import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {

  const [fact, setFact] = useState("");
  const catFactGenerator = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setFact(res.data.fact)
    });
  };

  // useEffect(() => {
  //   catFactGenerator();
  // },[]);

  return (  
    <div className="App">
      <button onClick={catFactGenerator}>Generate a cat fact</button>
      <p>{fact}</p>
    </div>
  )
}

export default App
