export default function useGeoCode() {
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  const getGeoCodeFunc = async (searchInput) => {
    const endpoint = `https://api.openweathermap.org/geo/1.0/direct?q=${searchInput.city}&limit=1&appid=${API_KEY}`;
    
    try {
      const response = await fetch(endpoint);
      const results = await response.json();
      // console.log("results: ", results);

      return results;
    } catch (error) {
      console.log("error: ", error);
      return error;
    }
  };

  const foreCastWeather = async (lat, lon) => {
    const forecastEndpoint = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&lang=en&units=metric&appid=${API_KEY}`;
    let result = { data: "", errors: "" };
    try {
      const response = await fetch(forecastEndpoint);
      const data = await response.json();
      result.data = data;
    } catch (error) {
      console.log("error: ", error);
      result.errors = error;
    }
    return result;
  };

  return { getGeoCodeFunc, foreCastWeather };
}
