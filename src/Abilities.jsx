import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function Abilities() {
    const params = useParams();
    const [pokemonInfo, setPokemonInfo] = useState({});
    useEffect(() => {

        fetch(`https://pokeapi.co/api/v2/ability/${params.ability}`)
          .then((response) => response.json())
          .then((parsedResponse) => {
            console.log(parsedResponse);
            setPokemonInfo(parsedResponse)
            
    
          
          })


          .catch((error) => console.error("Error", error));
      }, []);
  return (
    <div>
      
        {pokemonInfo.effect_entries && (
            <div>
              <h2>Abilities:</h2>
              {pokemonInfo.effect_entries.map((pokemon) => (
                pokemon.language.name === 'en' &&(
                <p>{pokemon.effect}</p>)
                
              ))}
            </div>
          )}
    </div>
  )
}

export default Abilities