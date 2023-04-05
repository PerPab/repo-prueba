import React from "react";
import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import "../ItemListContainer/ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { getGames } from "../../../Mock/games";

const ItemListContainer = ({ isCategoria, categoria }) => {
  const [useGame, setGame] = useState([]);

  useEffect(() => {
    const games = getGames();
    games
      .then((gamesList) => {
        if (isCategoria) {
          const gamesFiltered = gamesList.filter(
            (juego) => juego.category == categoria
          );
          {
            setGame(gamesFiltered);
          }
          document.title = "Proyecto final | Juegos de " + categoria;
        } else {
          setGame(gamesList);
          document.title = "Proyecto final | Pablo Percara ";
        }
      })
      .catch((error) => {
        console.log(`Ha ocurrido un error: ${error}`);
      });
  },[categoria]);

  return (
    <div className="contenedor-item-list">
      <ItemList gamesList={useGame} />
    </div>
  );
};

export default ItemListContainer;
