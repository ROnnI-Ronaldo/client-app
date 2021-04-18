import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";

const Card = ({ title, popyear, link }) => {
  return (
    <Link className='card' to={`/populationOverview/${link}`}>
      <h1 className='card__title'>{title}</h1>
      <h3 className='card__popyear'>{popyear}</h3>
    </Link>
  );
};

export default Card;
