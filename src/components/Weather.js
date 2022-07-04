import React, { useState } from "react";
import axios from "axios";

export const Weather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=feef849037b29664ed07d9163f0ce25a`;
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
            <p> {data.name}</p>
          </div>
          {data.main ? (
            <div className="variable_temp">
              <small className="min_temp">MIN TEMP: {data.main.temp_min}</small>{" "}
              |{" "}
              <small className="max_temp">MAX TEMP: {data.main.temp_max}</small>
            </div>
          ) : null}
          <div className="temp">
            {data.main ? (
              <h1>{Math.round(data.main.temp_min)}&#8457;</h1>
            ) : (
              <h1>--</h1>
            )}
          </div>
          <div className="firmament">
            {data.weather ? <p>{data.weather[0].description}</p> : <p>--</p>}
          </div>
        </div>

        <div className="bottom">
          <div className="feels">
            {data.main ? (
              <p className="bold">{data.main.feels_like.toFixed(1)}</p>
            ) : (
              <p>--</p>
            )}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? (
              <p className="bold">{data.main.humidity}%</p>
            ) : (
              <p>--</p>
            )}
            <p>Humidity</p>
          </div>
          <div className="windspeed">
            {data.wind ? (
              <p className="bold">{data.wind.speed.toFixed(1)}MPH</p>
            ) : (
              <p>--</p>
            )}
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};
