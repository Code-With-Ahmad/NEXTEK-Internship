import React, { useEffect, useState } from "react";
import "./card.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const Card = (props) => {
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(props.data.url);
        setImageUrl(res.data.sprites.front_default);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };
    fetchData();
  }, [props.data.url]);

  return (
    <div className="card">
      <div className="card_img">
        <img src={imageUrl} loading="lazy" alt={props.data.name} />
      </div>
      <div className="card_name">
        <p>{props.data.name}</p>
      </div>
      <div className="card_detail">
        <p
          onClick={() =>
            navigate(`/detail`, { state: { pokemonName: props.data.name } })
          }
        >
          Details <FontAwesomeIcon icon={faArrowRight} />
        </p>
      </div>
    </div>
  );
};

export default Card;
