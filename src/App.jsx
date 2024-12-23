import React, { useState } from "react";
import Cards from "./components/Cards";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  const [points, setPoints] = useState(0);
  const [highScore, setHighScore] = useState(0);
  return (
    <div className="app">
      <Header
        highScore={highScore}
        setHighScore={setHighScore}
        points={points}
      />
      <Cards points={points} setPoints={setPoints} />
    </div>
  );
};

export default App;
