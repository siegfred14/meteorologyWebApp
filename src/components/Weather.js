import React, { useState } from "react";
import axios from "axios";

export const Weather = () => {
  const apiKey = feef849037b29664ed07d9163f0ce25a;

  const url2 =
    "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=feef849037b29664ed07d9163f0ce25a";
  const url =
    "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=feef849037b29664ed07d9163f0ce25a";

  return (
    <div>
      <h1>Weather Placeholder</h1>
    </div>
  );
};
