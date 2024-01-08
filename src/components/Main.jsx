import React from "react";
import "../styles/Main.css";

const Main = ({ searchVar, handleSearch, handleFindCharacter }) => {
  return (
    <main className="main-wrapper">
      <h1> Harry Potter</h1>
      <p>
        If you are a Harry Potter fan, look here for some details from the
        greatest series in the world.
      </p>
      <form action="" onSubmit={handleFindCharacter}>
        <input
          type="text"
          name=""
          value={searchVar}
          placeholder="Hermione Granger"
          onChange={handleSearch}
        />
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </main>
  );
};

export default Main;
