import React, { useState, useEffect } from "react";
import { Link, useParams, NavLink } from "react-router-dom";
import './TypesInfo.css'
function NaturesInfo() {
  const [nature, setNature] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/nature/${params.nature}`)
      .then((response) => response.json())
      .then((parsedResponse) => {
        console.log(parsedResponse);
        setNature(parsedResponse);
      });
  }, []);

  return (
    <div>
      <h1>{nature.name}</h1>
      {nature.decreased_stat &&(
        <div>
            <h3>A nature {nature.name} diminui:</h3>
            <p>{nature.decreased_stat.name}</p>
            <h3>Mas aumenta:</h3>
            <p>{nature.increased_stat.name}</p>
        </div>
        
      )}
        

    
    </div>
  );
}

export default NaturesInfo;