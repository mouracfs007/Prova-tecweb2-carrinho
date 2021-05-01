import React from 'react';

import './styles.css';

// Recebe props função handleChange para quando digitar um texto, buscar pelo termo digitado "handleChange"
export default function Search({ handleChange }){
  return(
    <div className="filter">
      <input type="text" placeholder="Buscar pelo nome do produto" onKeyUp={(e)=>handleChange(e)} />
    </div>
  )
}