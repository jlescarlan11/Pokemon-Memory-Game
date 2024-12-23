import React, { useEffect } from "react";
import "./Header.css";

const Header = ({ highScore, setHighScore, points }) => {
  useEffect(() => {
    setHighScore((currentHighScore) => {
      return points >= currentHighScore ? points : currentHighScore;
    });
  }, [points]);

  return (
    <div className="header-container">
      <div className="left_header-container">
        <h1>Pokemon Memory Game</h1>
        <p>
          Get points by clicking on an image but don't click on any more than
          once!
        </p>
      </div>
      <div className="right_header-container">
        <h4>Current Points: {points}</h4>
        <h4>High Score: {highScore}</h4>
      </div>
    </div>
  );
};

export default Header;
