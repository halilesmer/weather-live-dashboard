import Image from "next/image";
import React from "react";
import moment from "moment";
import useTime from "@/utils/useTime";

const TodayCon = ({weatherData}) => {
  const { getHourMin } = useTime();

  console.log("weatherData: ", weatherData);
  return (
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
    </div>
  );
};

export default TodayCon;
