import React, { useContext } from "react";

import { AppContext } from "@/context/AppContext";
import Image from "next/image";
import useConvert from "@/utils/useConvert";

const WeekConBox = () => {
  const { weatherData } = useContext(AppContext);
  const { getCurrDay } = useConvert();

  return (
    <div className=" week-con_box-con grid gap-7  justify-items-center items-center grid-cols-[repeat(auto-fit,minmax(60px,1fr))]  w-full h-auto text-center bg-[#f6f6f8] pt-4 pb-4 pr-4 pl-4">
      {weatherData.daily.slice(1).map((data) => {
        return (
          <div
            key={data.dt}
            className="week-con_box week-con_uv-index_box grid  bg-[#ffffff] w-20 h-24 rounded-xl items-center"
          >
            <div className="week-con_box-header text-center text-slate-400">
              <span>{getCurrDay(data.dt).substring(0, 3)} </span>
            </div>

            <figure className="today-con-icon ">
              <Image
                className="inline-block "
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt="uv index gauge"
                width="50"
                height="50"
                blurDataURL="blur"
                priority="true"
              />
            </figure>

            <div className="week-con_sunset-time text-center">
              {" "}
              <span className="">{Math.round(data.temp.max)}° </span>
              <span className="text-slate-400">
                {" "}
                {Math.round(data.temp.min)}°
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WeekConBox;
