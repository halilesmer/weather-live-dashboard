import React, { useContext } from 'react'

import { AppContext } from "@/context/AppContext";
import Image from "next/image";
import TdConDescrBox from './TdConDescrBox';
import moment from "moment";
import useConvert from "@/utils/useConvert";

const TdDataBox = () => {
    const { weatherData, searchInput, isUnitCelsius, } = useContext(AppContext)
    const { getHourMin } = useConvert();

    return (
        <div className="today-con_data-con ">
            <p className="today-con_city-name-box text-center">
                {searchInput.success && weatherData
                    ? searchInput.success.substring(0, 1).toUpperCase() +
                    searchInput.success.substring(1).toLowerCase()
                    : "Berlin"}
            </p>

            <figure className="today-con_data-con_description_icon text-center">
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
            <div className="today-con_data-con_info-box grid ml-16">
                <div className="today-con_data-con_temp-box text-5xl mt-2">
                    {isUnitCelsius ?
                        <span>
                            {Math.round(weatherData.current.temp)}
                            <sup>°C</sup>

                        </span>

                        :
                        <span>

                            {(Number(Math.round(weatherData.current.temp)) * 1.8) + 32} <sup>°F</sup>
                        </span>
                    }
                </div>
                <div className="today-con_data-con_current-time-box mt-2 mb-1">
                    <span >{moment().format("dddd")}, </span>{" "}
                    <span className="text-slate-400">
                        {getHourMin(weatherData.current.dt)}
                    </span>
                </div>



                <TdConDescrBox />

            </div>
        </div>)
}

export default TdDataBox