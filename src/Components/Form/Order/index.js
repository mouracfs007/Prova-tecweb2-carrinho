import React from "react";
import './styles.css';

export default function FormOrder(){
  return(
    <div className="payment">
      
      <h2>Dados para entrega</h2>
      <div className="form">
        <div className="formGroup">
          <input type="text" name="nome" placeholder="Digite seu nome aqui"/>
        </div>
        <div className="formGroup">
          <input type="text" name="nome" placeholder="Digite seu telefone"/>
        </div>
        <div className="formGroup">
          <input type="text" name="nome" placeholder="Digite seu endereço"/>
        </div>
      </div>

      <h2 className="subtitle">Formas de pagamento</h2>
      <div className="form">
        <div className="paymentOptions">
          <div className="formGroup">
            <input type="radio" name="paymentOptions" id="money" value="Dinheiro" />
            <label htmlFor="money">Dinheiro</label>
          </div>
          <div className="formGroup">
            <input type="radio" name="paymentOptions" id="credit" value="Crédito" />
            <label htmlFor="credit">Crédito</label>
          </div>
          <div className="formGroup">
            <input type="radio" name="paymentOptions" id="debit" value="Débito" />
            <label htmlFor="debit">Débito</label>
          </div>
        </div>
        <button className="sendOrderBtn" onClick={()=>alert('Pedido Finalizado')}>Enviar Pedido</button>
      </div>

    </div>
  );
// retornar html é parenteses e retornar javascript é chaves.

}