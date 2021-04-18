import React from "react";

import "./CardImage.css";

const CardImage = ({ title, url_img, continent, country }) => {
  return (
    <div className='card-image'>
      <div
        className='image'
        style={{ backgroundImage: `url(${url_img})` }}
        alt='Image'
      />
      <div className='card-image__info'>
        <h2>{title}</h2>
        <h4>{continent}</h4>
        <h4>{country}</h4>
      </div>
    </div>
  );
};

export default CardImage;
