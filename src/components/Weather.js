import React, { useState } from "react";
import axios from "axios";

export const Weather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=feef849037b29664ed07d9163f0ce25a`;
  //   const url =
  //     "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=feef849037b29664ed07d9163f0ce25a";

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };
  return (
    <div>
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyUp={searchLocation}
          className="text"
          placeholder="Enter Location"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Quebec</p>
          </div>
          <div className="temp">
            <h1>48F</h1>
          </div>
          <div className="firmament">
            <p>clouds</p>
          </div>
        </div>

        <div className="bottom">
          <div className="feels">
            <p className="bold">62F</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className="bold">20%</p>
            <p>Humidity</p>
          </div>
          <div className="windspeed">
            <p className="bold">11MPH</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};
