export default function useGeoCode() {
  // Wetterdienst API Key
  const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  // Funktion um aus Ortsnamen Koordinaten zu erzeugen
  const getGeoCodeFunc = async (searchInput) => {
    const endpoint = `https://api.openweathermap.org/geo/1.0/direct?q=${searchInput.city}&limit=1&appid=${WEATHER_API_KEY}`;
    
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

  // Diese Funktion holt die Wetterdaten ab
  const foreCastWeather = async (lat, lon) => {
    const forecastEndpoint = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&lang=en&units=metric&appid=${WEATHER_API_KEY}`;
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
