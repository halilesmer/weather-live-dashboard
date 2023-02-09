import React, { useContext } from "react";

import { AppContext } from "@/context/AppContext";
import Image from "next/image";
import useConvert from "@/utils/useConvert";

// Week Container Box
// Zeigt 7 Tage Wettervorhersage
const WeekConBox = () => {
  const { weatherData, isUnitCelsius } = useContext(AppContext);
  const { getDay } = useConvert();

  return (
    <div className="details-con_week-con_box-con grid gap-y-4  justify-items-center items-center grid-cols-[repeat(auto-fit,minmax(6rem,0.1fr))]  w-full h-auto text-center bg-[#f6f6f8] pt-4 pb-4 pr-4 pl-4">
      {/* Schneidet den heutigen Tag ab */}
      {weatherData.daily.slice(1).map((data) => {
        return (
          <div
            key={data.dt}
            className="week-con_box week-con_uv-index_box grid  bg-[#ffffff] w-20 h-24 rounded-xl items-center"
          >
            <div className="week-con_box-header text-center text-slate-400">
              {/* Zeigt den Namen der Wochentage an */}
              {/* Schneidet das Wort ab den dritten Buchstabe ab */}
              <span>{getDay(data.dt).substring(0, 3)} </span>
            </div>
            {/* Das Icon zeigt die aktuelle Wetterlage an */}
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
            {/* Week Container */}
            <div className="week-con_sunset-time text-center">
              {isUnitCelsius ?
                <span >
                  {/* Zeigt das Grad in Celcius an */}
                  {(Number(Math.round(data.temp.max).toFixed(0)))
                  }° </span>
                :
                <span>
                  {/* Zeigt das Grad in Fahrenheit an */}
                  {((Number(Math.round(data.temp.max)) * 1.8) + 32).toFixed(0)}°
                </span>
              }

              <span className="text-slate-400">
                {' '}
                {isUnitCelsius ?
                  <span >
                    {/* Zeigt das Grad in Celcius an */}
                    {(Number(Math.round(data.temp.min).toFixed(0)))
                    }° </span>
                  :
                  <span>
                    {/* Zeigt das Grad in Fahrenheit an */}
                    {((Number(Math.round(data.temp.min)) * 1.8) + 32).toFixed(0)}°
                  </span>
                }
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WeekConBox;
