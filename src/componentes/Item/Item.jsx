import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ title, price, description, image, category, id }) => {
  const url = `/item/${id}`;

  return (
  
      <Link to={url} className='card-link'>
    <li className="card-contenedor">
      <h3 className="nombre">{title}</h3>
        <img className="imagen" src={image} alt="imagen-juego" />
      <p className="descripcion">{description}</p>
      <p className="categoria">{category}</p>
      <h4 className="precio">${price}</h4>
    </li>
    </Link>
   
    
  );
};

export default Item;
