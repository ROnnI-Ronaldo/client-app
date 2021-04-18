import React, { useState, useEffect } from "react";
import axios from "axios";

import CardImage from "../../components/CardImage/CardImage";

import "./PopulationPreview.css";

const PopulationPreview = (props) => {
  const iso3 = props.match.params.iso3;

  const [data, setData] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    axios
      .post(
        "http://localhost:4000/api/iso3",
        {
          iso3: iso3,
        },
        config
      )
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1>Preview Population</h1>
      <div className='population-preview'>
        {data && data.map((res) => <CardImage key={res.id} {...res} />)}
      </div>
    </>
  );
};

export default PopulationPreview;
