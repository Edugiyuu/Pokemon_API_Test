import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./App.css";
import MenuUp from "./MenuUp";

// video: https://www.youtube.com/watch?v=0ZJgIjIuY7U&ab_channel=WebDevSimplified

const NaturePage = () => {
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [pokemonType, setPokemonNome] = useState("");
  const [pokemonTotal, setPokemonTotal] = useState(20);
  const [pokemons, setPokemons] = useState([]);
  const [confirmPokemon, setConfirmPokemon] = useState(false);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/nature/?limit=25`)
      .then((response) => response.json())
      .then((parsedResponse) => {
        console.log(parsedResponse);
       
        setPokemonInfo(parsedResponse);
      })
      .then((json) => setPokemons(json))
  }, [pokemonTotal]);

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
  const [procurarPokemon, setProcurarPokemon] = useState('');
  const pokemonPesquisado= () => {
    window.location.href = `/pokemon/type/${procurarPokemon.toLowerCase()}`;
  };
  return (
    
    <div>
      
        <header className="App-header">
        
        <div className="Titulo">
          
             <h1>Procurando uma nature?</h1>
            <div className="pesquisar">
              <input placeholder="Escreva a nature em ingles :)" type="text"value={procurarPokemon} onChange={(pokemonProcurado) => setProcurarPokemon(pokemonProcurado.target.value)}/>
              <button  onClick={pokemonPesquisado}>
                Procurar
              </button>
            </div>
            
        </div>
        
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
    
    </div>
    {confirmPokemon && (
          <div className='container'>
            
            <div className='confirm-container'>
             <h2>Quer ver mais sobre {pokemonType}?</h2>
              <NavLink to={`/pokemon/type/${pokemonType}`}>Sim</NavLink>
              <button onClick={() => OpenClose()} >Não</button>
            </div>
          </div>
        )}
    </div>
  );
};

export default NaturePage;