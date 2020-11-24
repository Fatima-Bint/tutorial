import axios from "axios";
import React, { useState } from "react";

function Weather() {
  const [value, setValue] = useState({
    country: "",
    city: ""
  });

  const handleClick = (event) => {
    event.preventDefault();
    setValue({ ...value, country: event.target.value });
    setValue({ ...value, city: event.target.value });
    console.log(value);
  };

  const handleInputOnChange = (event) => {
    event.preventDefault();
    setValue({ ...value, country: event.target.value });
    setValue({ ...value, city: event.target.value });
    console.log(value);
  };

  const getWeather = (event) => {
    if (value.country && value.city)
      axios
        .get(
          `http://api.weatherstack.com/current?access_key=e8c9cdde633d4d626e767cfda679abd0&query=${value.country},${value.city}`
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        <input
        value={value.country}
          type="text"
          placeholder="Country"
          onChange={handleInputOnChange}
        />
        <input 
        value={value.city}
        type="text"
         placeholder="City" 
         onChange={handleInputOnChange}

         />
        <button type="submit">Search</button>
      </form>
      <p>{value.country}</p>
      <p>{value.city}</p>
    </div>
  );
}

export default Weather;

/*onChange={(event) => {
  setValue({ ...value, country: event.target.value });

  use the above or declare this on top like this

  setValue({...value, country: event.target.value})*/
