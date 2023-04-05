import React from "react";
import ItemDetailContainer from "../componentes/ItemDetailContainer/ItemDetailContainer";
import NavBar from "../componentes/NavBar/NavBar";
import { useParams } from "react-router-dom";

const ItemRoot = () => {
  const idGame = useParams().id;

  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer id={idGame} />
    </div>
  );
};

export default ItemRoot;
