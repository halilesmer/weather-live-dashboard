import React, { useState } from "react";

import useSWR from "swr";

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export default function useGeoCode() {
 

  const getGeoCodeFunc = async (searchInput) => {
    console.log("searchInput: ", searchInput);

    const endpoint = `http://api.openweathermap.org/geo/1.0/direct?q=${searchInput.city}&limit=1&appid=${API_KEY}`;

    try {
      const response = await fetch(endpoint);
      const results = await response.json();

      return results;
      setGeoCodeData(results);
      // return results?.features[0].center;
    } catch (error) {
      console.log("error: ", error);
      return error;
    }
  };

    const foreCastWeather = async (lat, lon) => {
        console.log("lat: ", lat);
        console.log("lon: ", lon);
      const forecastEndpoint =
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${API_KEY}`;

      const response = await fetch(forecastEndpoint);
      const result = await response.json();

      console.log("foreCastWeather-result: ", result);
      return result
    };



  return { getGeoCodeFunc, foreCastWeather };
}
