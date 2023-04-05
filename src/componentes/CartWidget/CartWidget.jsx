import React from "react";
import { useContext } from "react";
import "../CartWidget/CartWidget.css";
import {miContexto} from '/context/index.jsx'


function CartWidget() {
  const url = "/cart.svg";
  const {itemsAgregados} = useContext(miContexto)
  return (
    <>
      <div className="contenedor-carrito">
        <img className="carrito-logo" src={url} />
        <span className="carrito-numero">{itemsAgregados}</span>
      </div>
    </>
  );
}

export default CartWidget;
