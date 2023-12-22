import React, { useState, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import "./App.css";
//Mudar nome do PokemonSkills e do arquivo
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
  //Mudar o id pro nome
  const selectedPokemon = pokemons.find((pokemon) => pokemon.name === params.name);

  

  useEffect(() => {
    //Melhorar esses ifs
    if (selectedPokemon) {
        if (selectedPokemon.type === 'Elétrico') {
            setTypeColor('rgb(238, 234, 24)');
        
          }else if(selectedPokemon.type === 'Fogo'){
            setTypeColor('rgb(214, 92, 11)');
          }else if(selectedPokemon.type === 'Grama'){
            setTypeColor('#4fd41a');
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
      <h1>{params.name}</h1>

      {/* Se selectedPokemon existir a imagem do Pokémon*/}
      {selectedPokemon && (
        <div>
            
             
            
          <div className='Header2'>
          <img className='img'
                src={pokemonImagem}
                alt={selectedPokemon.name}
            />
            <div className='Infos'>
              <strong className='Skills' >Moves: {selectedPokemon.skills}</strong>
              <Link to={`/type/${selectedPokemon.type}`} className='Type'style={{color:`${typeColor}`}}>Tipo: {selectedPokemon.type}</Link>
              <strong style={{color:`${typeColor2}`}}>Segundo Tipo: {selectedPokemon.type2}</strong>
              <strong>Peso: {selectedPokemon.peso}</strong>
            </div>
            
          </div>
          <Link to={`/`}>Voltar</Link>
        </div>
      )}
    </div>
  );
};

export default PokemonSkills;