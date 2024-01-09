import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";

function MenuUp() {
  const [darkMode,setDarkMode]= useState('--cor-de-fundo')

  function darkModeTrue() {
    if (darkMode === '--clr-black') {
      setDarkMode('--clr-white')
    }
  }
  const root = document.documentElement;
root.style.setProperty('backgroundColor', 'var(--cor-de-fundo)');


  return (
  
    <div
      style={{backgroundColor: `var(${darkMode})`}} className="Menu">
          <img
                src="https://cdn-icons-png.flaticon.com/512/287/287221.png"
                style={{ width: "80px" }}
            />
            {/*  <button onClick={darkModeTrue}></button> */}
            <NavLink className={'NavLink'} to={`/`}>Home</NavLink>
            <NavLink className={'NavLink'} to={`/pokemon/type`}>Types</NavLink>
            <NavLink className={'NavLink'} to={`/pokemon/nature`}>Natures</NavLink>
        </div>

    
  )
}

export default React.memo(MenuUp)