import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from "./Home";
import PokemonInfo from "./PokemonInfo";
import Pagina404 from "./Pagina404";
import "./App.css";


const App = () => {
  

  return (
   

    <BrowserRouter >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="pokemon/:name" element={<PokemonInfo />} />
      <Route path="*" element={<Pagina404 />}/>
    </Routes>
      
    </BrowserRouter>
  );
};

export default App;
