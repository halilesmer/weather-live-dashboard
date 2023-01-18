import React, { useContext } from "react";

import { AppContext } from "@/context/AppContext";
import Image from "next/image";
import cloudIcon from "../../public/cloud-icon.png";
import humidityIcon from "../../public/humidity-icon.png";

const TdConDescrBox = () => {
  const { weatherData } = useContext(AppContext);

  return (
    <div className="today-con_data-con_description-box ">
      <figure className="today-con_data-con_description_icon flex mt-2">
        <Image
          className="inline-block w-auto h-auto"
          src={`https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}
          alt="current weather icon"
          width="20"
          height="20"
          blurDataURL="blur"
          priority="true"
        />
        <figcaption className="pl-2">
          {weatherData.current.weather[0].description.substring(0, 1).toUpperCase() +
            weatherData.current.weather[0].description.substring(1).toLowerCase()}

        </figcaption>
      </figure>

      <figure className="today-con_data-con_description_icon flex mt-2 ">
        <Image
          className="inline-block w-auto h-auto"
          src={humidityIcon}
          alt="weather humidity icon"
          width="20"
          height="20"
          blurDataURL="blur"
          priority="true"
        />
        <figcaption className="pl-2">
          Humidity: {weatherData.current.humidity}%
        </figcaption>
      </figure>

      <figure className="today-con_data-con_description_icon flex mt-2 ">
        <Image
          className="inline-block w-auto h-auto"
          src={cloudIcon}
          alt="cloud icon"
          width="20"
          height="20"
          blurDataURL="blur"
          priority="true"
        />
        <figcaption className="pl-2">
          Clouds: {weatherData.current.clouds}%
        </figcaption>
      </figure>
    </div>
  );
};

export default TdConDescrBox;
