import Image from "next/image";
import React from "react";
import SearchBarCon from "./SearchBarCon";
import cloudIcon from "../../public/cloud-icon.png";
import humidityIcon from "../../public/humidity-icon.png";
import moment from "moment";
import useTime from "@/utils/useTime";

const TodayCon = ({ weatherData,
  handleGeoCodeClick
  , handleSearchInputChange
  , searchInput
  , checkInput }) => {
  const { getHourMin } = useTime();

  console.log("weatherData: ", weatherData);
  return (
    <div className="today-con grid gap-1 grid-cols-1  gap-y-1 auto-rows-auto pb-6">
      <SearchBarCon
        handleGeoCodeClick={handleGeoCodeClick}
        handleSearchInputChange={handleSearchInputChange}
        searchInput={searchInput}
        checkInput={checkInput}
      />



      <div className="today-con-icon-box ">
        <p className="today-con-city-name-box text-center">
          {weatherData.timezone.substring(weatherData.timezone.indexOf("/") + 1)}
        </p>

        <figure className="today-con-icon-box text-center">
          <Image
            className="inline-block w-auto h-auto"
            src={`https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`}
            alt="current weather icon"
            width="150"
            height="150"
            blurDataURL="blur"
            priority="true"
          />
        </figure>
        <div className="today-con-temp-box text-5xl mt-2">
          {Math.round(weatherData.current.temp)} <sup>°C</sup>
        </div>
        <div className="today-con-current-time-box mt-2 mb-1">
          <span>{moment().format("dddd")}</span>{" "}
          <span className="text-slate-">
            {getHourMin(weatherData.current.dt)}
          </span>
        </div>


        <div className="today-con-description ">
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
  );
};

export default TodayCon;
