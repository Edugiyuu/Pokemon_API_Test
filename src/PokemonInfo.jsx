import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./App.css";

function PokemonInfo() {
  const [pokemonInfo, setPokemonInfo] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
      .then((response) => response.json())
      .then((parsedResponse) => {
        console.log(parsedResponse);
        setPokemonInfo(parsedResponse);
      })
      .catch((error) => console.error("Error", error));
  }, [params.name]);

  return (
    <div>
      {pokemonInfo && (
        <div>
          <h1>{pokemonInfo.name}</h1>
          {pokemonInfo.abilities && (
            <div>
              <h2>Abilities:</h2>
              {pokemonInfo.abilities.map((pokemon) => (
                <p>{pokemon.ability.name}</p>
              ))}
            </div>
          )}
          {pokemonInfo.types && (
            <div>
              <h2>Types:</h2>
              {pokemonInfo.types.map((pokemon) => (
                <p className="Types">{pokemon.type.name}</p>
              ))}
            </div>
          )}
          {pokemonInfo.moves && (
            <div>
              <ul>Moves:</ul>
              {pokemonInfo.moves.map((pokemon) => (
                <li>{pokemon.move.name}</li>
              ))}
            </div>
          )}
          {pokemonInfo.sprites && (
            <div>
              <img src={pokemonInfo.sprites.front_default} alt="" />
            </div>
          )}
        </div>
      )}
      
    </div>
  );
}

export default PokemonInfo;
