import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./App.css";

const PokemonSkills = () => {
  const [pokemonImagem, setPokemonImagem] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [typeColor, setTypeColor] = useState('');
  const [typeColor2, setTypeColor2] = useState('');
  const params = useParams();

  useEffect(() => {
    fetch("http://localhost:9000/testAPI")
      .then((response) => response.json())
      .then((data) => setPokemons(data.pokemons))
      .catch((err) => console.error(err));
  }, []);

  const selectedPokemon = pokemons.find((pokemon) => pokemon.name === params.id);

  

  useEffect(() => {
    
    if (selectedPokemon) {
        if (selectedPokemon.type === 'Eletrico') {
            setTypeColor('rgb(243, 239, 24)');
        
          }else if(selectedPokemon.type === 'Fogo'){
            setTypeColor('rgb(214, 92, 11)');
          }else if(selectedPokemon.type === 'Planta'){
            setTypeColor('rgb(33, 138, 7)');
          }else if(selectedPokemon.type === 'Água'){
            setTypeColor('rgb(13, 189, 196)');
          }

          if(selectedPokemon.type2 === 'Venenoso'){
            setTypeColor2('rgb(121, 26, 158)');
          }

      setPokemonImagem(selectedPokemon.image);
    }
  }, [selectedPokemon]);

  

  return (
    <div>
      <div className="Logo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/287/287221.png"
          style={{ width: "80px" }}
          alt="Logo"
        />
      </div>
      <h1>{params.id}</h1>

      {/* Se selectedPokemon existir a imagem do Pokémon*/}
      {selectedPokemon && (
        <div>
            
             
            
          <div className='Header2'>
          <img className='img'
                src={pokemonImagem}
                alt={selectedPokemon.name}
                
            />
            <strong>ID: {selectedPokemon.id}</strong>
            <strong className='Skills' >Moves: {selectedPokemon.skills}</strong>
            <strong style={{color:`${typeColor}`}}>Tipo: {selectedPokemon.type}</strong>
            <strong style={{color:`${typeColor2}`}}>Segundo Tipo: {selectedPokemon.type2}</strong>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default PokemonSkills;