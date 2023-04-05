import React, { useContext } from "react";
import "./ItemCount.css";
import { useState, useEffect } from "react";
import { miContexto } from "../../../context";


const ItemCount = ({ stockParam, contador, setContador }) => {
  const sad = "/sad.png";
  const [stockDis, setStock] = useState(stockParam);
  const {itemsAgregados, setItemsAgregados} = useContext(miContexto)

    useEffect(() => {
    stockDis == undefined && setStock(stockParam);
  },[stockParam]);


  return (
    <div className="container-cont">
      {stockDis > 0 ? (
        <p className="stock">Stock disponible: {stockDis}</p>
      ) : (
        <p className="s-stock">
          Sin Stock <img className="sad" src={sad}></img>
        </p>
      )}
      <div className="contador">
        <button
          className="btn-contador"
          onClick={() => {
            contador > 0 && setContador(contador - 1);
            contador > 0 && setStock(stockDis + 1);
          }}
        >
          -
        </button>
        <div>{contador}</div>
        <button
          className="btn-contador"
          onClick={() => {
            contador > 0 && setContador(contador + 1);
            stockDis > 0 && setStock(stockDis - 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
