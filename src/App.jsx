import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from "./Home";
import PokemonInfo from "./PokemonInfo";
import Pagina404 from "./Pagina404";
import "./App.css";
import Abilities from "./Abilities";
import TypesInfo from "./TypesInfo";
import TypePage from "./TypePage";
import NaturePage from "./NaturePage";
import MenuUp from "./MenuUp";
import NaturesInfo from "./NaturesInfo";


const App = () => {
  

  return (
   
    
    <BrowserRouter >
    <MenuUp/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="pokemon/:name" element={<PokemonInfo />} />
      <Route path="pokemon/ability/:ability" element={<Abilities />}/>
      <Route path="pokemon/type/:type" element={<TypesInfo/>}/>
      
      <Route path="pokemon/type/" element={<TypePage/>}/>
      <Route path="pokemon/nature/" element={<NaturePage/>}/>
      <Route path="pokemon/nature/:nature" element={<NaturesInfo/>}/>
      <Route path="*" element={<Pagina404 />}/>
      
    </Routes>
      
    </BrowserRouter>
  );
};

export default App;
