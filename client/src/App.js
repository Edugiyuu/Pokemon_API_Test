import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [apiResponse, setApiResponse] = useState("");
  const [pokemonNome, setPokemonNome] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [ativar, setAtivar] = React.useState(false);

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
  }

  return (
    <div >
      <header className="App-header">
        <div className="Logo">
             <img
                src="https://cdn-icons-png.flaticon.com/512/287/287221.png"
                style={{ width: "80px" }}
            />
        </div>
        
        
        <h1>Escolha seu Pokemon</h1>
      </header>
      <p >{apiResponse}</p>

      <div className="Pokemon-buttons">
        {pokemons.map((pokemon) => (
          <div key={pokemon.id}>
            <button
              onClick={() => handleClick(pokemon) && setAtivar(!ativar) }
            >
              {pokemon.name}
            </button>
            <img className="Pokemon-imgs" src={pokemon.image} alt={pokemon.name} style={{ height: "100px" } }/>
          </div>
        ))}
      </div>

      <h2>{pokemonNome}</h2>
      
    </div>
  );
};

export default App;

