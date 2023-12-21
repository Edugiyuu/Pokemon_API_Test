import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route,useParams } from 'react-router-dom';
import "./App.css";


const PokemonType = () => {
    const [attackTypePros, setAttackTypePros] = useState([]);
    const [attackTypeCon, setAttackTypeCon] = useState([]);
     const params = useParams();

     useEffect(() => {
        if (params.type === 'Grama') {
            setAttackTypePros([' Água ',' Terra ',' Pedra'])
            setAttackTypeCon([' Fogo ',' Grama ',' Poison',' Voador',' Inseto',' Dragão',' e Aço'])

         }else if (params.type === 'Fogo') {
            setAttackTypePros([' Grama ',' Gelo ',' Inseto', ' e Aço'])
            setAttackTypeCon([' Fogo ',' Água ',' Pedra',' e Dragão'])

         }else if (params.type === 'Elétrico') {
            setAttackTypePros([' Água ',' Voador'])
         }else if (params.type === 'Água') {
            setAttackTypePros([' Fogo ',' Terra',' e Pedra'])
         }
      }, []);
     
  return (
    <div>
        <div className="Logo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/287/287221.png"
          style={{ width: "80px" }}
          alt="Logo"
        />
      </div>
        <h1>{params.type}</h1>
        <p style={{fontSize:'23px'}}>Os movimentos de {params.type} são supereficazes contra:{attackTypePros}</p>
        <p style={{fontSize:'23px'}}>Os movimentos de {params.type} não são muito eficazes contra:{attackTypeCon}</p>
        
    </div>
    
  
    
      
      
  );
};

export default PokemonType;
