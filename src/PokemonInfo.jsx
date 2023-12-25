import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import './PokemonInfo.css';

function PokemonInfo() {
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [statsColor, setStatsColor] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
      .then((response) => response.json())
      .then((parsedResponse) => {
        console.log(parsedResponse);
        setPokemonInfo(parsedResponse);

        const newStatsColor = parsedResponse.stats.map((stat) => {
          if (stat.base_stat <= 20) {
            return 'rgb(243, 15, 15)';
          }else if (stat.base_stat <= 50) {
            return 'rgb(245, 85, 11)';
          }else if (stat.base_stat <= 70) {
            return 'rgb(233, 211, 17)';
          }else if (stat.base_stat <= 130) {
            return 'rgb(16, 221, 26)';
          }

        });
        setStatsColor(newStatsColor);
        
      })
      .catch((error) => console.error("Error", error));
  }, [params.name]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
      .then((response) => response.json())
      .then((parsedResponse) => {
        console.log(parsedResponse);
        const abi = parsedResponse.stats.map((stat) => {
          

        });

      
      })
      .catch((error) => console.error("Error", error));
  }, []);

  console.log(statsColor);
  
  return (
    <>
    <div className="Logo">
             <img
                src="https://cdn-icons-png.flaticon.com/512/287/287221.png"
                style={{ width: "80px" }}
            />
        </div>
      {pokemonInfo && (
        <div>
          <h1>{pokemonInfo.name}</h1>
          <div className="Infos">
          {pokemonInfo.sprites && (
            <div className="img">
              <img src={pokemonInfo.sprites.front_default} alt="" />
            </div>
          )}
          {pokemonInfo.abilities && (
            <div className="ability">
              <h2>Abilities:</h2>
              {pokemonInfo.abilities.map((pokemon) => (
                <Link to={`/pokemon/ability/${pokemon.ability.name}`}>{pokemon.ability.name}</Link>
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
          </div>
          
          {pokemonInfo.stats && (
            <div className="stats">
            <h2>Stats:</h2>
            {pokemonInfo.stats.map((pokemon, index) => (
              <div key={index}>
                <p style={{ color: statsColor[index] }}>{pokemon.base_stat}</p>
                <p style={{ color: statsColor[index] }}>{pokemon.stat.name}</p>
              </div>
            ))}
          </div>
          )}
          
        </div>
      )}
      
    </>
  );
}

export default PokemonInfo;
