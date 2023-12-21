import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import "./App.css";
import PokemonSkills from "./PokemonSkills";


const Main = () => {
    const [pokemonNome, setPokemonNome] = useState("");
    const [pokemonInfo, setPokemonInfo] = useState("");
    const [pokemons, setPokemons] = useState([]);


    
  const callAPI = () => {
    fetch("http://localhost:9000/testAPI")
      .then((response) => response.json())
      .then((data) => setPokemons(data.pokemons))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    callAPI();
  }, []);

  function handleClick(pokemon) {
    
    setPokemonNome(`Escolheu ${pokemon.name}!`);
    setPokemonInfo(pokemon.name);
    
  }
  return (
    <div>
        <header className="App-header">
        <div className="Logo">
             <img
                src="https://cdn-icons-png.flaticon.com/512/287/287221.png"
                style={{ width: "80px" }}
            />
        </div>
      
        <h1>Escolha seu Pokemon</h1>
      </header>

      <div className="Pokemon-buttons">
        {pokemons.map((pokemon) => (
          <div key={pokemon.id}>
            <button onClick={() => handleClick(pokemon)}>
              {pokemon.name}
            </button>
            <img className="Pokemon-imgs" src={pokemon.image} alt={pokemon.name} style={{ height: "100px" } }/>
          </div>
        ))}
      </div>

      <h2>{pokemonNome}</h2>
        
        <Link to={`pokemon/${pokemonInfo}`}>Info sobre {pokemonInfo}</Link>
        <br></br>
        <a href={`pokemon/${pokemonInfo}`}>Info sobre {pokemonInfo}</a>
    </div>
  );
};

export default Main