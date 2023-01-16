export default function useGeoCode() {
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  const getGeoCodeFunc = async (searchInput) => {

    const endpoint = `http://api.openweathermap.org/geo/1.0/direct?q=${searchInput.city}&limit=1&appid=${API_KEY}`;

    try {
      const response = await fetch(endpoint);
      const results = await response.json();

      return results;
    } catch (error) {
      console.log("error: ", error);
      return error;
    }
  };

  const foreCastWeather = async (lat, lon) => {
    console.log("lat: ", lat);
    console.log("lon: ", lon);
    const forecastEndpoint = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&lang=de&units=metric&appid=${API_KEY}`;

    const response = await fetch(forecastEndpoint);
    const result = await response.json();

    return result;
  };

  return { getGeoCodeFunc, foreCastWeather };
}
