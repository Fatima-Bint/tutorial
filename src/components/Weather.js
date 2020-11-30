import axios from "axios";
import React, { useState } from "react";

function Weather() {
  const [value, setValue] = useState({
    country: "",
    city: "",
    weather: null
  });

  /*const handleClick = (event) => {
    event.preventDefault();
    setValue({ ...value, country: event.target.value });
    setValue({ ...value, city: event.target.value });
    console.log(value.country,value.city);
  };*/

  let history  = {
    storedCountry: value.country,
    storedCity: value.city
  }

  let arrayItem = JSON.stringify(history)

  const historyArray = []
  historyArray.push(arrayItem)

  localStorage.setItem('searchHistory',historyArray)





  const handleCountryOnChange = (event) => {
    event.preventDefault();
    setValue({ ...value, country: event.target.value });
    //setValue({ ...value, city: event.target.value });
    //console.log(value.country,value.city);
  };


  const handleCityOnChange = (event) => {
    event.preventDefault();
    setValue({ ...value, city: event.target.value });
    //console.log(value.country,value.city);
  };
  const getWeather = (event) => {
      event.preventDefault()
      //localStorage.setItem('searchHistory', JSON.stringify(history));
    if (value.country && value.city)
      axios
        .get(
          `http://api.weatherstack.com/current?access_key=e8c9cdde633d4d626e767cfda679abd0&query=${value.country},${value.city}`
        )
        .then((response) => {
          setValue({...value, weather: response.data})
          console.log(response);
          
        })
        .catch((error) => {
          console.log(error);
        
        });
  };

  return (
    <div>
      <form onSubmit={getWeather}>
        <input
          value={value.country}
          type="text"
          placeholder="Country"
          onChange={handleCountryOnChange}
        />
        <input 
        value={value.city}
        type="text"
         placeholder="City" 
         onChange={handleCityOnChange}

         />
        <button type="submit">Search</button>
        
      </form>

      {
        value.weather&&(
          <div>
            <h1>{value.weather.location.name}</h1>
            <h1>{value.weather.current.cloudcover}</h1>
            <h1>{value.weather.current.temperature}</h1>
          </div>
        )
      }
     localStorage.getItem{history}
    </div>


  );
}

export default Weather;

/*onChange={(event) => {
  setValue({ ...value, country: event.target.value });

  use the above or declare this on top like this

  setValue({...value, country: event.target.value})*/
