import React from 'react';
import ProductCard from '../Card';
import './style.css';

export default function ProductList({ products, handleClick }) {
  return(
    <div className="productList">
      { products.map( (product, index) => (
        <ProductCard product={product} handleClick={ handleClick } key={index} />
      )) }
    </div>
  )
}