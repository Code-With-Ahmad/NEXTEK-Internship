import React, { useState } from "react";
import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Search = ({ handleSearch, suggestions }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    handleSearch(value);
  };

  return (
    <div className="search_container">
      <div className="SearchBox">
        <div className="left">
          <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
          <input
            type="text"
            placeholder="search"
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
        <button>Search</button>
      </div>
      <div className="suggestions">
        {searchTerm &&
          suggestions.map((item, index) => (
            <div
              onClick={() =>
                navigate(`/detail`, { state: { pokemonName: item.name } })
              }
              key={index}
            >
              {item.name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
