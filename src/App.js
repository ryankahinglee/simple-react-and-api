import './App.css';
import { useState, useEffect} from 'react';
import {Move} from './Move.jsx';

function Pokedex() {
  const [pokemon, setPokemon] = useState("");
  const [currentInput, setInput] = useState("")
  const [pokemonImage, setImage] = useState("")
  const [data, setData] = useState({})
  const [listMoves, setMoves] = useState(null)


  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + currentInput)
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      setData(res)
    })
    .catch((error) => {
      console.log('Error', error);
      setImage("")
      setMoves(null)
    })

  }, [currentInput])

  useEffect(() => {
    if (data.sprites && data.sprites.front_default) {
      setImage(data.sprites.front_default);
    } else {
      setImage("");
    }

    if (data.moves) {
      setMoves(data.moves)
    } else {
      setMoves(null)
    }
  }, [data])

  
  return <div style={{margin: '100px'}}>
    <input value={pokemon} onChange={(event) => setPokemon(event.target.value)}/>
    <button onClick={() => {setInput(pokemon)}}>
      Submit
    </button>
    <br/>
    {pokemonImage !== "" && (
      <img src={pokemonImage} alt="Pokemon" style={{width: '200px', height: '200px'}}/>
    )}
    {pokemonImage === "" && (
      <h2>Pokemon not found</h2>
    )}
    { listMoves !== null && (
      <Move moves={listMoves}/>
    )}
  </div>
}

function App() {
  return (
    <div className="App">
      <Pokedex/>
    </div>
  );
}

export default App;
