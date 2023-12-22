import React, { useEffect, useState } from "react";

// video: https://www.youtube.com/watch?v=0ZJgIjIuY7U&ab_channel=WebDevSimplified

const App = () => {
  const [resourceType, setRecourceType] = useState("posts");
  const [pokemonNome, setPokemonNome] = useState("");
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/eevee`)
      .then((response) => response.json())
      .then((parsedResponse) => {
        console.log(parsedResponse);
        return parsedResponse.abilities;
        console.log(parsedResponse.results);
      })
      .then((json) => setPokemons(json))
  }, []);

  function handleClick(pokemonName) {
    setPokemonNome(`Escolheu ${pokemonName}!`);
    
  }

  return (
    <>
      {pokemons.map((pokemon) => (
        <button href={`/${pokemon.name}`} style={{ margin: '.5rem' }} onClick={() => handleClick(pokemon.ability.name)}
        >
          {pokemon.ability.name}
        </button>
      ))}
      <h2>{pokemonNome}</h2>
    
    </>
  );
};

export default App;
