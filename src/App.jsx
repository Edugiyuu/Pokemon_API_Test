import React, { useEffect, useState } from "react";

// video: https://www.youtube.com/watch?v=0ZJgIjIuY7U&ab_channel=WebDevSimplified

const App = () => {
  const [resourceType, setRecourceType] = useState("posts");
  const [pokemonNome, setPokemonNome] = useState("");
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
      .then((response) => response.json())
      .then((parsedResponse) => {
        console.log(parsedResponse);
        return parsedResponse.results;
      })
      .then((json) => setPokemons(json))
  }, []);

  function handleClick(pokemonName) {
    setPokemonNome(`Clocou no ${pokemonName}`);
    
  }

  return (
    <>
      {pokemons.map((pokemon) => (
        <button href={`/${pokemon.name}`} key={pokemon.name} style={{ margin: '.5rem' }} onClick={() => handleClick(pokemon.name)}
        >
          {pokemon.name}
        </button>
      ))}
      <h2>{pokemonNome}</h2>
    
    </>
  );
};

export default App;
