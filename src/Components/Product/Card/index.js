import React from 'react';
import './style.css';

export default function ProductCard({ product, handleClick }) { 
    const { pic, price, name } = product;
  return(
    <div className="productCard">
      <div className="boxImage">
        <img src={`assets/${pic}`} width="200" heigth="200" alt={`Imagem do ${name}`} />
      </div>
      <h2>{name}</h2>
      <p className="price">R$ {price}</p>
      <button type="button" onClick={()=>handleClick(product)}>Adicionar ao Carrinho</button>
    </div>
  )
}