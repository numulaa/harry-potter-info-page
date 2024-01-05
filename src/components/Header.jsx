import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <nav className="nav-style">
      <a href="#">
        <p>Home</p>
      </a>
      <a href="#details-container">
        <p>Information</p>
      </a>
    </nav>
  );
};

export default Header;
