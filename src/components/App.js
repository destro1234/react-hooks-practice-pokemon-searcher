import React, { useState, useEffect } from "react";
import PokemonPage from "./PokemonPage";

function App() {

  const [pokemon, setPokemon] = useState([])
  const [searchedPokemon, setSearchedPokemon] = useState("")
  
  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(r => r.json())
    .then(data => setPokemon(data))
  }, [])

  function handleSearch(name) {
    setSearchedPokemon(name)
  }

  function handleAddPokemon(newPokemon) {
    
    setPokemon([...pokemon, newPokemon])
    console.log(newPokemon)
    console.log(pokemon)
  }
  
  const pokemonToDisplay = pokemon.filter( p => p.name.includes(searchedPokemon))



  return (
    <div className="App">
      <PokemonPage pokemon={pokemonToDisplay} onSearch={handleSearch} onAddPokemon={handleAddPokemon}/>
    </div>
  );
}

export default App;
