import React, { useState, useEffect } from "react";


const Pagina404 = () => {
  

  return (
    <div style={{display: 'flex', flexDirection:'column' ,justifyContent: 'center', alignItems:'center'}}>
        <h1>Erro 404</h1>
        <p>Acho que esse pokemon não existe..</p>
        <img src="https://img.pokemondb.net/artwork/large/pikachu-unova-cap.jpg" style={{height:'250px'}}></img>
    </div>
    
  );
};

export default Pagina404;