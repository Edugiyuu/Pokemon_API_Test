import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./App.css";

// video: https://www.youtube.com/watch?v=0ZJgIjIuY7U&ab_channel=WebDevSimplified

const Home = () => {
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [pokemonImg, setPokemonImg] = useState({});
  const [pokemonNome, setPokemonNome] = useState("");
  const [pokemonTotal, setPokemonTotal] = useState(20);
  const [confirmPokemon, setConfirmPokemon] = useState(false);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonTotal}&offset=0.`)
      .then((response) => response.json())
      .then((parsedResponse) => {
        console.log(parsedResponse);
        setPokemonInfo(parsedResponse);
      })
  }, [pokemonTotal]);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNome}`)
      .then((response) => response.json())
      .then((parsedResponse) => {
        console.log(parsedResponse);
        setPokemonImg(parsedResponse)
      })
      .catch((error) => console.error("Error", error));
  }, [pokemonNome]);

  function handleClick(pokemonName) {
    setPokemonNome(pokemonName);
    setConfirmPokemon(true);
  }

  function verMais() {
    setPokemonTotal(pokemonTotal + 10);
  }
  function OpenClose() {
    setConfirmPokemon(true);
    if (confirmPokemon === true) {
      setConfirmPokemon(false)
    }
  }
  
  const [procurarPokemon, setProcurarPokemon] = useState('');
  const pokemonPesquisado= () => {
    window.location.href = `/pokemon/${procurarPokemon.toLowerCase()}`;
  };

  return (
    <div>
        <header className="App-header">
        
        <div className="Titulo">
          
            <h1>Escolha seu Pokemon</h1>
            <div className="pesquisar">
              <input placeholder="Procurando um Pokemon?" type="text"value={procurarPokemon} onChange={(pokemonProcurado) => setProcurarPokemon(pokemonProcurado.target.value)}/>
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
      <button onClick={verMais}>Ver mais</button>
      <button onClick={verMais}>Mudar para os sprites</button>
      <NavLink to={`/pokemon/${pokemonNome}`}>{pokemonNome}</NavLink>
      
    
    </div>
    {confirmPokemon && (
          <div className='container'>
            
            <div className='confirm-container'>
             <h2>Quer ver mais sobre {pokemonNome}?</h2>
             {pokemonImg.sprites && (
              <img src={pokemonImg.sprites.versions['generation-v']['black-white'].animated.front_default} alt="" />
             )}
              
              <NavLink to={`/pokemon/${pokemonNome}`}>Sim</NavLink>
              <button onClick={OpenClose} >Não</button>
            </div>
          </div>
        )}
    </div>
  );
};

export default Home;