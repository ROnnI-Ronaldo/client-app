import React, { useState, useEffect } from "react";
import axios from "axios";

import CardImage from "../../components/CardImage/CardImage";
import { useSelector } from "react-redux";

import "./PopulationPreview.css";

const PopulationPreview = (props) => {
  const iso3 = props.match.params.iso3;
  const token = useSelector((state) => state.user.token);

  const [data, setData] = useState([]);
  const [showError, setShowError] = useState(false);
  const [errorHandler, setErrorHandler] = useState("");

  const errorTimeOut = () => {
    setTimeout(() => {
      setShowError(false);
      props.history.goBack();
    }, 5000);
  };

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .post(
        "https://populate-app-mern.herokuapp.com/api/iso3",
        {
          iso3: iso3,
        },
        config
      )
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        setErrorHandler(err.response.data.msg);
        setShowError(true);
        errorTimeOut();
      });
  }, []);
  return (
    <>
      {showError && (
        <h1 style={{ color: "red", textAlign: "center", fontSize: "1.8rem" }}>
          {errorHandler}
        </h1>
      )}
      <h1>Preview Population</h1>
      <div className='population-preview'>
        {data && data.map((res) => <CardImage key={res.id} {...res} />)}
      </div>
    </>
  );
};

export default PopulationPreview;
