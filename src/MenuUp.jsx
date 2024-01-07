import React from 'react'
import { Link, NavLink } from "react-router-dom";

function MenuUp() {
  return (
  
    <div className="Menu">
          <img
                src="https://cdn-icons-png.flaticon.com/512/287/287221.png"
                style={{ width: "80px" }}
            />
             
            <NavLink className={'NavLink'} to={`/`}>Home</NavLink>
            <NavLink className={'NavLink'} to={`/pokemon/type`}>Types</NavLink>
            <NavLink className={'NavLink'} to={`/pokemon/nature`}>Natures</NavLink>
        </div>

    
  )
}

export default MenuUp