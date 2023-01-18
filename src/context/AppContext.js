import { createContext, useState } from "react";

import useGeoCode from "@/utils/useGeoCode";

const AppContext = createContext();

const AppProvider = (props) => {
  const [IsSearchInputTrue, setIsSearchInputTrue] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [isUnitCelsius, setIsUnitCelsius] = useState(true);

  const [searchInput, setSearchInput] = useState({
    city: "",
  });
  const { getGeoCodeFunc, foreCastWeather } = useGeoCode();

  const handleSearchInputChange = (e) => {
    setSearchInput((prevState) => ({ ...prevState, city: e.target.value }));
  };
  const handleGeoCodeClick = async (cityString) => {
    const city = !searchInput.city ? { city: cityString } : searchInput;
    if (city.city) {
      const geoData = await getGeoCodeFunc(city);
      if (geoData.length < 1) return setIsSearchInputTrue(true);
      const foreCast = await foreCastWeather(geoData[0].lat, geoData[0].lon);
      // console.log("foreCast: ", foreCast);
      setIsSearchInputTrue(false);
      setWeatherData(foreCast.data);
      setSearchInput((prevState) => ({
        ...prevState,
        city: "",
        success: searchInput.city,
      }));
    } else {
      console.log("error :>> ");
      return setIsSearchInputTrue(true);
    }
  };

  const handleToggleDegreeClick = () => {
    setIsUnitCelsius((prevState) => !prevState);
  };

  const value = {
    handleSearchInputChange,
    handleGeoCodeClick,
    handleToggleDegreeClick,
    IsSearchInputTrue,
    weatherData,
    searchInput,
    isUnitCelsius,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export { AppProvider, AppContext };
