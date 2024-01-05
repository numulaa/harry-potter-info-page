import React from "react";
import { useState, useEffect } from "react";
import charactersServices from "./services/characters";
import Header from "./components/Header";
import Main from "./components/Main";
import hogwartsLogo from "./assets/hogwarts.png";
import "./App.css";
import Picture from "./components/Picture";
import Information from "./components/Information";

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchVar, setSearchVar] = useState("");
  const [character, setCharacter] = useState(null);

  // useEffect(() => {
  //   console.log("effect");
  //   charactersServices.getAll().then((initialCharacters) => {
  //     setCharacters(initialCharacters);
  //   });
  // }, []);

  const handleSearch = (e) => {
    setSearchVar(e.target.value);
  };
  const handleFindCharacter = () => {
    charactersServices.getByName(searchVar).then((char) => {
      setCharacter(char);
      setSearchVar("");
    });
  };

  return (
    <div className="content-wrapper">
      <Header />
      <section className="first-sec-wrapper" id="home">
        <Main
          searchVar={searchVar}
          handleSearch={handleSearch}
          handleFindCharacter={handleFindCharacter}
        />
        <div className="hogwarts-pic-wrapper">
          <img src={hogwartsLogo} alt="Hogwarts Castle Image"></img>
        </div>
      </section>

      <section className="sec-section details-content" id="details-container">
        {character ? (
          <>
            <Picture character={character} />
            <Information character={character} />
          </>
        ) : (
          <div className="no-character">
            <h3>Type the character you're curious about in the seacrh box</h3>
          </div>
        )}{" "}
      </section>
    </div>
  );
}

export default App;
