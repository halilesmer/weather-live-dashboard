import React, { useContext } from "react";

import { AppContext } from "@/context/AppContext";
import Image from "next/image";
import SearchBarCon from "./SearchBarCon";
import cloudIcon from "../../public/cloud-icon.png";
import humidityIcon from "../../public/humidity-icon.png";
import moment from "moment";
import useConvert from "@/utils/useConvert";

const TodayCon = () => {
  const { weatherData, searchInput, } = useContext(AppContext)
  const { getHourMin } = useConvert();

  // console.log("weatherData: ", weatherData);
  return (
    <div className="today-con grid md:col-span-4 gap-1 grid-cols-1  gap-y-1 auto-rows-auto md:auto-rows-min pb-6 bg-[#f6f6f8] md:bg-[#ffffff]">
      <SearchBarCon />

      <div className="today-con_icon-box ">
        <p className="today-con_city-name-box text-center">
          {searchInput.success && weatherData
            ? searchInput.success.substring(0, 1).toUpperCase() +
              searchInput.success.substring(1).toLowerCase()
            : "Berlin"}
        </p>

        <figure className="today-con_icon-box text-center">
          <Image
            className="inline-block"
            src={`https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}
            alt="current weather icon"
            width="160"
            height="160"
            blurDataURL="blur"
            priority="true"
          />
        </figure>
        <div className="today-con_info-box grid ml-16">
          <div className="today-con_temp-box text-5xl mt-2">
            {Math.round(weatherData.current.temp)} <sup>°C</sup>
          </div>
          <div className="today-con_current-time-box mt-2 mb-1">
            <span >{moment().format("dddd")}, </span>{" "}
            <span className="text-slate-400">
              {getHourMin(weatherData.current.dt)}
            </span>
          </div>

          <div className="today-con_description ">
            <figure className="today-con_description_icon flex mt-2">
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
                {weatherData.current.weather[0].description}
              </figcaption>
            </figure>

            <figure className="today-con_description_icon flex mt-2 ">
              <Image
                className="inline-block w-auto h-auto"
                src={humidityIcon}
                alt="current weather icon"
                width="20"
                height="20"
                blurDataURL="blur"
                priority="true"
              />
              <figcaption className="pl-2">
                Humidity: {weatherData.current.humidity}%
              </figcaption>
            </figure>

            <figure className="today-con_description_icon flex mt-2 ">
              <Image
                className="inline-block w-auto h-auto"
                src={cloudIcon}
                alt="current weather icon"
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
       </div>
      </div>
    </div>
  );
};

export default TodayCon;
