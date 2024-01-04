import React, { useState, useEffect } from "react";
import { Link, NavLink, useParams } from 'react-router-dom';
import './PokemonInfo.css';
import MenuUp from "./MenuUp";

function PokemonInfo() {
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [statsColor, setStatsColor] = useState([]);
  const [statsBarra, setStatsBarra] = useState([]);
  const [sprite, setSprite] = useState('front_default');
  const params = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
      .then((response) => response.json())
      .then((parsedResponse) => {
        console.log(parsedResponse);
        setPokemonInfo(parsedResponse);

        const newStatsColor = parsedResponse.stats.map((stat) => {
          if (stat.base_stat <= 25) {
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

        const barStats = parsedResponse.stats.map((stat) => {
          return `${stat.base_stat / 10}rem`

        });
        setStatsBarra(barStats);
        
      })
      .catch((error) => console.error("Error", error));
  }, []);

  function mudarSpriteNormal() {
    if (sprite === 'front_default') {
      setSprite('back_default');
    } else {
      setSprite('front_default');
    }
    if (sprite === 'back_shiny') {
      setSprite('back_default')
    }
  }
  function mudarSpriteShiny() {
    if (sprite === 'front_default') {
      setSprite('back_shiny');
    } else if(sprite === 'back_shiny'){
      setSprite('front_shiny');
    }else if(sprite === 'front_shiny'){
      setSprite('back_shiny');
    }
  }
  
  return (
    <>
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
                <NavLink to={`/pokemon/ability/${pokemon.ability.name}`}>{pokemon.ability.name}</NavLink>
              ))}
            </div>
          )}
          {pokemonInfo.types && (
            <div>
              <h2>Types:</h2>
              {pokemonInfo.types.map((pokemon) => (
                <NavLink to={`/pokemon/type/${pokemon.type.name}`} className="Types" >{pokemon.type.name}</NavLink>
              ))}
            </div>
          )}
          </div>
          
          {pokemonInfo.stats && (
            <div className="stats">
            <h2>Stats base:</h2>
            {pokemonInfo.stats.map((pokemon, index) => (
              <div>
                <p style={{ color: statsColor[index]}}>{pokemon.base_stat}</p>
                <div style={{ width: statsBarra[index], height: '10px', backgroundColor: statsColor[index], borderRadius: '10px'}}></div>
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
