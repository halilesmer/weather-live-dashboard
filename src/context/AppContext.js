import { createContext, useState } from "react";

import useGeoCode from "@/utils/useGeoCode";

const AppContext = createContext();

const AppProvider = (props) => {
  const [checkInput, setCheckInput] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
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
      if (geoData.length < 1) return setCheckInput(true);
      const foreCast = await foreCastWeather(geoData[0].lat, geoData[0].lon);
      // console.log("foreCast: ", foreCast);
      setCheckInput(false);
      setWeatherData(foreCast.data);
      setSearchInput((prevState) => ({ ...prevState, city: "" }));
    } else {
      console.log("error :>> ");
      return setCheckInput(true);
    }
  };

  const value = {
    handleSearchInputChange,
    handleGeoCodeClick,
    checkInput,
    weatherData,
    searchInput,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export { AppProvider, AppContext };
