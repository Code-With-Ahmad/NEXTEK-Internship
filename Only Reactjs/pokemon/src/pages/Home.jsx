import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import PokemonList from "../API/pokemonList";
import Search from "../components/search";
import Card from "./Card";
import "../index.css";

const Home = () => {
  const [cardData, setCardData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  async function getPokemon(num) {
    let res = await PokemonList(num);
    return res;
  }

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const filtered = cardData.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(cardData);
    }
  };

  useEffect(() => {
    getPokemon(100).then((res) => {
      setCardData(res);
      setFilteredData(res);
    });
  }, []);

  return (
    <div>
      <Header heading="Reactjs Pokemon Search App" />
      <div className="parent_container">
        <Search handleSearch={handleSearch} suggestions={filteredData} />
        <div className="card_container">
          {filteredData.length > 0 ? (
            filteredData.map((data, index) => <Card key={index} data={data} />)
          ) : (
            <h1 className="no-poekemon">No Pokemon present</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
