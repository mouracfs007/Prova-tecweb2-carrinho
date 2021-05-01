import React from 'react';

import './styles.css';

export default function ShoppingCartCard ({ product, handleDelete, order }) {

  const { pic, name, price, qtdAddedToCart, total } = product;

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  })

  return(
    <tr>
      <td>
        <img src={`assets/${pic}`} width="40" heigth="40" alt={`Imagem do ${name}`} />
      </td>
      <td>{name}</td>
      <td>{formatter.format(price)}</td>
      <td>{qtdAddedToCart}</td>
      <td>{formatter.format(total)}</td>
      { !order && <td><button className="btnRemove" onClick={()=>handleDelete(product)}>Remover Produto</button></td>}
    </tr>
  )
}