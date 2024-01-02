import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from "./Home";
import PokemonInfo from "./PokemonInfo";
import Pagina404 from "./Pagina404";
import "./App.css";
import Abilities from "./Abilities";
import Types from "./Types";


const App = () => {
  

  return (
   

    <BrowserRouter >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="pokemon/:name" element={<PokemonInfo />} />
      <Route path="pokemon/ability/:ability" element={<Abilities />}/>
      <Route path="pokemon/type/:type" element={<Types/>}/>
      <Route path="*" element={<Pagina404 />}/>
      
    </Routes>
      
    </BrowserRouter>
  );
};

export default App;
