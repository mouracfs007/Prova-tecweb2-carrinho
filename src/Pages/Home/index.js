import { useEffect, useState } from 'react';
import FormOrder from '../../Components/Form/Order';
import ProductList from '../../Components/Product/List';
import Search from '../../Components/Search';
import ShoppingCartList from '../../Components/ShoppingCart/List';
import getProducts from '../../Store/products';

import './style.css';

export default function Home () {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [order, setOrder] = useState(false);

  useEffect(()=>{
    setProducts( getProducts() );
  },[])

  // Função para adicionar um produto ao carrinho de compras
  function addToCart(product){
    let listProducts = products;
    const index = listProducts.indexOf(product);
    listProducts[index].qtd = product.qtd - 1;
    setCart([...cart, product]);
  }

  // Função para buscar um produto na barra de busca
  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  // Função para deletar um produto com id específico do carrinho de compras
  function handleDelete (product) {
    const newCart = cart.filter( pdct => pdct.id !== product.id );
    setCart(newCart);
  }

    // Lista dos produtos de acordo com o texto buscado
    const visibleProduct = products.filter( product => {
    return product.name.toLowerCase().indexOf(searchTerm.toLocaleLowerCase()) > -1;
    
  });

  function handleOrder (){
    setOrder(true);
  }

  return(
    <div className="content">
      { !order &&
      <div className="container">
        <Search handleChange={ handleChange } />
      </div>
      }

      { !order &&
      <div className="container">
        <ProductList products={ visibleProduct } handleClick={ addToCart } />
      </div>
      }

      <div className="container">
        <ShoppingCartList productList={cart} products={getProducts()} handleDelete={handleDelete} handleOrder={handleOrder} order={order} />
      </div>

      { order && 
      <div className="container">
        <FormOrder />
      </div>
      }

    </div>
  )
}