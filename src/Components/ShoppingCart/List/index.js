import React from 'react';
import ShoppingCartCard from './../Card';

import './styles.css';

export default function ShoppingCartList ({ productList, products, handleDelete, handleOrder, order }) {

  const visibleProduct = productList.filter((product, index, self) => index === self.findIndex((t) => ( t.id === product.id && t.name === product.name )));
  
  const productTable = visibleProduct.map( product => {
    const originalProduct = products.filter( prdc => product.id === prdc.id);
    const qtdAddedToCart = originalProduct[0].qtd - product.qtd;
    return {
      ...product,
      qtdAddedToCart,
      total: product.price * qtdAddedToCart
    }
  })

  var totalValue = productTable.reduce((a, b) => a + b.total, 0);

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  })

  return(
    <>
      { productTable && productTable.length >= 1 &&
        <div className="carrinho">
          <h2>Cesta de compras</h2>
          <div className="cartList">
            <div className="tableResponsive">
              <table>
                <thead>
                  <tr>
                    <th />
                    <th>Produto</th>
                    <th>Preço unitário</th>
                    <th>Quantidade</th>
                    <th>Total</th>
                    { !order && <th>Ações</th> }
                  </tr>
                </thead>
                <tbody>
                  { productTable.map( (product, index) => (
                    <ShoppingCartCard product={product} key={index} handleDelete={handleDelete} order={order} />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="order">
              { !order &&
              <button className="orderBtn" onClick={()=>handleOrder()}>Finalizar compra</button>
              }
              <h3>Total a pagar: {formatter.format(totalValue)}</h3>
            </div>            
          </div>
        </div>
      }
    </>
  )
}