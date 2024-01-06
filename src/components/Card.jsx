import React from "react";
import "../styles/Card.css";

const Card = ({ character, handleClickCard, isLost, isWin }) => {
  return (
    <div
      className={isWin ? "card isWin" : isLost ? "card isLost" : "card"}
      onClick={() => handleClickCard(character.id)}>
      <div className="card-img-wrapper">
        <img src={character.image} alt={`${character.name} image`} />
      </div>
      <p>{character.name}</p>
    </div>
  );
};

export default Card;
