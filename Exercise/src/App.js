import "./styles.css";
import React, { useState, useEffect } from "react";

const API = "https://rickandmortyapi.com/api/character";

export default function App() {
  const [data, setData] = useState([]);

  const fetchRickAndMortyAPI = async () => {
    const response = await fetch(API);
    const responseJSON = await response.json();
    console.log(responseJSON.results);
    setData(responseJSON.results);
  };

  useEffect(() => {
    fetchRickAndMortyAPI();
  }, []);

  return (
    <div className="App">
      <h1>Rick and Morty characters </h1>

      <ul className="character-list">
        {data.length > 0 &&
          data.map((item, index) => (
            <li className="character-item" key={index}>
              <img alt={item.name} src={item.image} />
              <span> {item.name} </span>
            </li>
          ))}
      </ul>
    </div>
  );
}
