import React from 'react'
import { Link, NavLink } from "react-router-dom";

function MenuUp() {
  return (
  <div className='BarMenu'>
    <div className="Menu">
          <img
                src="https://cdn-icons-png.flaticon.com/512/287/287221.png"
                style={{ width: "80px" }}
            />
            <NavLink to={`/`}>Home</NavLink>
            <NavLink to={`/pokemon/type`}>Types</NavLink>
            <NavLink to={`/pokemon/nature`}>Natures</NavLink>
        </div>
  </div>
    
  )
}

export default MenuUp