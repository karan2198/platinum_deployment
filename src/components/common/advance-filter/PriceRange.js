"use client";
import React, { useState ,useEffect} from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import axios from "axios";
const PriceRange = () => {
  const [price, setPrice] = useState({ value: { min: 9000000, max: 90000000 } });

  // price range handler
  const handleOnChange = (value) => {
    //console.log(value);
    setPrice({ value });
  };

  return (
    <>
       
      <div className="range-wrapper">
        <InputRange
          formatLabel={() => ``}
          maxValue={1000000}
          minValue={0}
          value={price.value}
          onChange={(value) => handleOnChange(value)}
          id="slider"
        />
        <div className="d-flex align-items-center">
          <span id="slider-range-value1">${price.value.min}</span>
          <i className="fa-sharp fa-solid fa-minus mx-2 dark-color icon" />
          <span id="slider-range-value2">${price.value.max}</span>
        </div>
      </div>
    </>
  );
};

export default PriceRange;
