import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";
import Select from "../../components/Select/Select";

import "./Home.css";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [dataAmount, setDataAmount] = useState(10);

  const [years, setYears] = useState([]);
  const [year, setYear] = useState(2000);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/")
      .then((result) => {
        const filterYears = [];
        console.log(result);
        let ind = -1;
        //filter amount of data displaying on screen and also years (get ride of dublicated years)
        const filteredData = result.data.data.filter((data) => {
          const { popyear } = data;
          if (filterYears.indexOf(popyear) === -1) {
            filterYears.push(popyear);
          }
          //this check for not fetching always first $dataAmount amount of data
          if (+data.popyear === +year) {
            ind = ind + 1;
            return ind < dataAmount;
          }
        });

        const transformedYears = transform(filterYears);
        setYears(transformedYears);
        setData(filteredData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [year, dataAmount]);

  const selectOnChange = (e) => {
    setYear(e.target.value);
  };

  const buttonOnClick = (e) => {
    setDataAmount(dataAmount + 10);
  };
  return (
    <>
      <h1 className='title'>Find Population for every country</h1>
      <div className='filter-area'>
        <div className='select-filter__years'>
          <h5>Filter By Year</h5>
          <Select onChange={selectOnChange} values={years} />
        </div>
        <div>
          <h5>Fetch 10 More Data</h5>
          <button onClick={buttonOnClick} className='fetch-more__button'>
            +10
          </button>
        </div>
      </div>

      <div className='grid'>
        {data.map((country) => (
          <Card key={country.id} {...country} link={country.iso3} />
        ))}
      </div>
    </>
  );
};

const transform = (data) => {
  return data.map((d) => ({
    value: d,
    label: d,
  }));
};

export default HomePage;
