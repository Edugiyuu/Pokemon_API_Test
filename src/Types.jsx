import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';

function Types() {
    const params = useParams();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/type/${params.type}`)
          .then((response) => response.json())
          .then((parsedResponse) => {
            console.log(parsedResponse);
            setPokemonInfo(parsedResponse);
          })
          .then((json) => setPokemons(json))
      }, []);

  return (
    <div>
        <h1>edede</h1>
    </div>
  )
}

export default Types