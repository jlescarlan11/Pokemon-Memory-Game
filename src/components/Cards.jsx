import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Cards.css";

const Cards = ({ points, setPoints }) => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacters, setSelectedCharacters] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=15&offset=0"
        );
        const data = await response.json();
        const fetches = data.results.map((result) =>
          fetch(result.url).then((res) => res.json())
        );
        const results = await Promise.all(fetches);
        setCharacters(results);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchPokemonData();
  }, []);

  return (
    <div className="card-container">
      {characters?.map((character, index) => (
        <Card
          link={character.sprites.front_default}
          setCharacters={setCharacters}
          setSelectedCharacters={setSelectedCharacters}
          selectedCharacters={selectedCharacters}
          name={character.name}
          points={points}
          setPoints={setPoints}
          key={index}
        />
      ))}
    </div>
  );
};

export default Cards;
