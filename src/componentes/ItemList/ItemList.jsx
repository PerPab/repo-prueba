import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({ gamesList }) => {
  return (
    <div className="bg-card">
      <ul className="ul-contenedor">
        {gamesList.map((game) => {
          return (
            <Item
              key={game.id}
              id={game.id}
              title={game.title}
              price={game.price}
              category={game.category}
              image={game.image}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ItemList;
