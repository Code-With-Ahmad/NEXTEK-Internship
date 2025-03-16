import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./detail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { BeatLoader } from "react-spinners";

const Detail = () => {
  const [cardDetail, setCardDetail] = useState(null);
  const navigate = useNavigate();
  const { state } = useLocation();
  const pokemonName = state?.pokemonName;

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        if (pokemonName) {
          const { data } = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
          );
          setCardDetail({
            name: data.species?.name,
            image: data.sprites?.front_default,
            abilities: data.abilities?.map((a) => a.ability?.name) || [],
            type: data.types?.[0]?.type?.name,
            moves: data.moves?.slice(0, 5).map((m) => m.move?.name) || [],
            stats: data.stats?.map((s) => s.stat?.name) || [],
          });
        }
      } catch (error) {
        console.error("Error fetching Pokémon details:", error);
      }
    };
    fetchPokemon();
  }, [pokemonName]);

  if (!cardDetail) return <BeatLoader className="loader" color="#5FE2C9" />;

  return (
    <>
      <Header heading="Reactjs Pokemon Search App" />
      <p className="BackBtn" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} /> Go Back
      </p>
      <div className="detail_container">
        <div className="pokemon_detail">
          <div className="img">
            <img src={cardDetail.image} alt="Pokemon Detail" />
          </div>
          <div className="details">
            <p>
              <strong>Name:</strong> {cardDetail.name}
            </p>
            <p>
              <strong>Type:</strong> {cardDetail.type}
            </p>
            <p>
              <strong>Stats:</strong> {cardDetail.stats.join(", ")}
            </p>
            <p>
              <strong>Abilities:</strong> {cardDetail.abilities.join(", ")}
            </p>
            <p>
              <strong>Some Moves:</strong> {cardDetail.moves.join(", ")}
            </p>
          </div>
          <div className="more_Detail">
            <a
              href={`https://bulbapedia.bulbagarden.net/wiki/${cardDetail.name}`}
              target="_blank"
            >
              More Detail at bulbapedia <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
