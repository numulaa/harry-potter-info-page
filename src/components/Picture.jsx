import React from "react";
import "../styles/Picture.css";

const Picture = ({ character }) => {
  return (
    <div className="photo">
      <div className="item">
        <div className="polaroid">
          <img id="fetched-photo" src={character.image} />
          <div className="caption">{character.name}</div>
        </div>
      </div>
    </div>
  );
};

export default Picture;
