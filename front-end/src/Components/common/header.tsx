import React from "react";
import "../../CSS/header.css";

export const Header = () => {
  return (
    <>
      <div className="headerbackground">
        <header className="grid">
          <h1>Food and Drink App</h1>
          <nav>
            <a href="#">Home</a>
            <a href="#">Food</a>
            <a href="#">Drink</a>
            <a href="#">Favourites</a>
          </nav>
          <input type="input" placeholder="Search" />
        </header>
      </div>
    </>
  );
};
