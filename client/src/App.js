import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "./App.css";
import PokemonSkills from "./PokemonSkills";
import Main from "./Main";
import Pagina404 from "./Pagina404";
import PokemonType from "./PokemonType";

const App = () => {
  

  return (
   

    <BrowserRouter >
    <Routes>
      <Route path="pokemon/:name" element={<PokemonSkills />} />
      <Route path="/" element={<Main />}/>
      <Route path="type/:type" element={<PokemonType />}/>
      <Route path="*" element={<Pagina404 />}/>

    </Routes>
      
    </BrowserRouter>
  );
};

export default App;

