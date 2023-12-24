import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./App.css";

// video: https://www.youtube.com/watch?v=0ZJgIjIuY7U&ab_channel=WebDevSimplified

const Home = () => {
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [pokemonNome, setPokemonNome] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [confirmPokemon, setConfirmPokemon] = useState(false);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
      .then((response) => response.json())
      .then((parsedResponse) => {
        console.log(parsedResponse);
        setPokemonInfo(parsedResponse);
      })
      .then((json) => setPokemons(json))
  }, []);

  function handleClick(pokemonName) {
    setPokemonNome(pokemonName);
    setConfirmPokemon(true);

  }
  function OpenClose() {
    setConfirmPokemon(true);
    if (confirmPokemon === true) {
      setConfirmPokemon(false)
    }

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
      <div >
      {pokemonInfo.results && (
            <div className="Pokemon-buttons">
              
              {pokemonInfo.results.map((pokemon) => (
                <button onClick={() => handleClick(pokemon.name)}>{pokemon.name}</button>
              ))}
            </div>
          )}
      <br></br>
      <Link to={`/pokemon/${pokemonNome}`}>{pokemonNome}</Link>
    
    </div>
    {confirmPokemon && (
          <div className='container'>
            
            <div className='confirm-container'>
             <h2>Quer ver mais sobre {pokemonNome}?</h2>
              <button to={`/pokemon/${pokemonNome}`}>Sim</button>
              <button onClick={() => OpenClose()} >Não</button>
            </div>
          </div>
        )}
    </div>
  );
};

export default Home;