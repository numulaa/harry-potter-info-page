import React from "react";
import { useState, useEffect } from "react";
import charactersServices from "./services/characters";
import Header from "./components/Header";
import Main from "./components/Main";
import hogwartsLogo from "./assets/hogwarts.png";
import "./App.css";
import Picture from "./components/Picture";
import Information from "./components/Information";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchVar, setSearchVar] = useState("");
  const [character, setCharacter] = useState(null);
  const [score, setScore] = useState(0);
  const [cardClicked, setCardClicked] = useState([]);
  const [isLost, setIsLost] = useState(false);
  const [charactersForGame, setCharacterForGame] = useState([]);
  const [isWin, setIsWin] = useState(false);

  useEffect(() => {
    console.log("effect");
    charactersServices.getAll().then((initialCharacters) => {
      setCharacters(initialCharacters);
      setCharacterForGame(
        charactersForGame.concat(initialCharacters.slice(0, 12))
      );
    });
  }, []);

  const handleSearch = (e) => {
    setSearchVar(e.target.value);
  };

  const handleFindCharacter = (e) => {
    e.preventDefault();
    const name = searchVar;
    const char = characters.find((n) =>
      n.name.toLowerCase().includes(name.toLowerCase())
    );
    setCharacter(char);
    setSearchVar("");
    console.log(name);
    console.log(char);
  };

  const handleClickCard = (id) => {
    if (isLost || isWin) return;
    if (cardClicked.includes(id)) {
      setIsLost(true);
      setScore(0);
    } else if (score === 11) {
      setIsWin(true);
    } else {
      setCharacterForGame(charactersForGame.sort(() => Math.random() - 0.5));
      setCardClicked(cardClicked.concat(id));
      setScore(score + 1);
    }
  };

  const handleStartNewGame = () => {
    setIsLost(false);
    setIsWin(false);
    setScore(0);
    setCardClicked([]);
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
        )}
      </section>
      <section id="card-game" className="third-sec">
        <div className="game-details">
          <h2>Let's play game</h2>
          <p className="game-desc">
            Get points by clicking on an image but don't click on any more than
            once!
          </p>
          <p>Your score: {score}</p>
          {/* <p>Best score: {score}</p> */}
          {isWin || isLost ? (
            <button onClick={handleStartNewGame} className="reset-btn">
              Start a new game
            </button>
          ) : null}
        </div>
        <div className="cards-wrapper">
          {charactersForGame.map((char) => (
            <Card
              character={char}
              key={char.id}
              handleClickCard={handleClickCard}
              isLost={isLost}
              isWin={isWin}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
