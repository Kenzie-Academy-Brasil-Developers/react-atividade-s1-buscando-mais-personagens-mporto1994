import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {Characters} from "./components/Characters"



function App() {
  const [charList, setCharList] = useState([])
  const [next, setNext] = useState([])
  const [page, setPage] = useState(1);

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  };
 
  const nextPage = () => {
    setPage(page + 1)
  };

  useEffect(()=>{
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then((response)=>response.json())
    .then((response)=> setCharList(response.results))
    .catch((err)=>console.log(err))
  },[page])

  console.log(charList)

  return (
    <div className="App">
      <header className="App-header">
        <Characters prop={charList}/>
        <button onClick={previousPage}>Diminuir</button>
        <button onClick={nextPage}>Aumentar</button>
      </header>
    </div>
  );
}

export default App;