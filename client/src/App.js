import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import PokemonSkills from "./PokemonSkills";
import Main from "./Main";

const App = () => {
  

  return (


    
    <BrowserRouter >
    <Routes>
      <Route path="/:id" element={<PokemonSkills />} />
      <Route path="/" element={<Main />}/>


    </Routes>
      
      
    </BrowserRouter>
  );
};

export default App;

