import "./styles.css";
import React, { useState, useEffect } from "react";

const API = "https://rickandmortyapi.com/api/character";

export default function App() {
  const [data, setData] = useState([]);

  const fetchRickAndMortyAPI = async () => {
    const response = await fetch(API);
    const responseJSON = await response.json();
    console.log(responseJSON.results);
    return responseJSON.results;
  };

  useEffect(() => {
    const rickAndMortyData = fetchRickAndMortyAPI();
    setData(rickAndMortyData);
  }, [API]);

  return (
    <div className="App">
      <h1>Rick and Morty characters </h1>
      <ul>
        {data && data.map((item, index) => <li key={index}> {item.name} </li>)}
      </ul>
    </div>
  );
}
