import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import './PokemonInfo.css';

function PokemonInfo() {
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [statsColor, setStatsColor] = useState([]);
  const [sprite, setSprite] = useState('front_default');
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
          }else if (stat.base_stat <= 200) {
            return 'rgb(16, 221, 26)';
          }

        });
        setStatsColor(newStatsColor);
        
      })
      .catch((error) => console.error("Error", error));
  }, []);

  function mudarSpriteNormal() {
    if (sprite === 'front_default') {
      setSprite('back_default');
    } else {
      setSprite('front_default');
    }
  }
  function mudarSpriteShiny() {
    if (sprite === 'front_default') {
      setSprite('back_shiny');
    } else {
      setSprite('front_shiny');
    }
  }
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
              <img src={pokemonInfo.sprites[sprite]} alt="" />
              <button onClick={mudarSpriteNormal}>Mudar Sprite</button>
              <button onClick={mudarSpriteShiny}>Versão Shiny</button>
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
            <h2>Stats base:</h2>
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
