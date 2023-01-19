import { createContext, useState } from "react";

import useGeoCode from "@/utils/useGeoCode";

const AppContext = createContext();

const AppProvider = (props) => {
  // Ist false, wenn im Suchfeld eingegebenes wort falsch oder leer ist
  const [isSearchingFailed, setIsSearchingFailed] = useState(false);
  // Variable beinhaltet die Wetterdaten
  const [weatherData, setWeatherData] = useState(null);
  // Variable um das Gradeinheit zw. Celsius und Fahrenheit zu bewältigen
  const [isUnitCelsius, setIsUnitCelsius] = useState(true);
// city: Im Suchfeld eingegebes Wort
// successfullPlace: Speichert erfolgte Suchbegriff
  const [searchInput, setSearchInput] = useState({
    city: "",
    successfullPlace:''
  });
  const { getGeoCodeFunc, foreCastWeather } = useGeoCode();

  // Funktion um den eingegebener Suchbegriff zu speichern
  const handleSearchInputChange = (e) => {
    setSearchInput((prevState) => ({ ...prevState, city: e.target.value }));
  };

  // Funktion um die Suche zu bewältigen
  const handleGeoCodeClick = async (cityString) => {
    // Wenn das Suchfeld ist leer, dann nimm das Argument sonst den Suchbegriff
    const city = !searchInput.city ? { city: cityString } : searchInput;
    if (city.city) {
      // Holt anhand der Ortsname den Geokoordinaten
      const geoData = await getGeoCodeFunc(city);
      // Wenn der Geocodierung misslingt, bricht die Funktion hier ab
      if (geoData.length < 1) return setIsSearchingFailed(true);
      // Holt die Wetterdaten
      const foreCast = await foreCastWeather(geoData[0].lat, geoData[0].lon);
      setIsSearchingFailed(false);
      setWeatherData(foreCast.data);
      // Löscht erfolgte Suche und speichert den Suchbegriff
      setSearchInput((prevState) => ({
        ...prevState,
        city: "",
        successfullPlace: searchInput.city,
      }));
      // Wenn kein Begriff für die Suche da ist
    } else {
      console.log("error :>> ");
      return setIsSearchingFailed(true);
    }
  };

  // Funktion um zw. Celsius und Fahrenheit zu wechseln
  const handleDegreeSwitcherClick = () => {
    setIsUnitCelsius((prevState) => !prevState);
  };

  const value = {
    handleSearchInputChange,
    handleGeoCodeClick,
    handleDegreeSwitcherClick,
    isSearchingFailed,
    weatherData,
    searchInput,
    isUnitCelsius,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export { AppProvider, AppContext };
