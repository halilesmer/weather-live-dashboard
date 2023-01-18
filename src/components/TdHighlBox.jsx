import React, { useContext } from 'react'

import { AppContext } from "@/context/AppContext";
import Image from "next/image";
import sunrise from "../../public/sunrise_icon.svg";
import sunset from "../../public/sunset_icon.svg";
import useConvert from "@/utils/useConvert";
import uvGauge from "../../public/uv-gauge.png";
import windIcon from "../../public/wind-direction.png";

const TdHighlBox = () => {
    const {  weatherData } = useContext(AppContext);
    const { getHourMin, convertWindDirect } = useConvert();


    return (
        <div className=" todays-highlights_box-con grid md:col-span-5 gap-5  justify-items-center items-center grid-cols-[repeat(auto-fit,minmax(240px,1fr))]   w-full h-auto text-center bg-[#f6f6f8] pt-4 pb-4">
            <div className="todays-highlights_box todays-highlights_uv-index_box grid  bg-[#ffffff] w-56 h-48 rounded-2xl items-center">
                <div className="todays-highlights_box-header text-left  pl-8 text-slate-400">
                    UV Index
                </div>

                <figure className="today-con-icon ">
                    <Image
                        className="inline-block "
                        src={uvGauge}
                        alt="uv index gauge"
                        width="160"
                        height="160"
                        blurDataURL="blur"
                        priority="true"
                    />
                </figure>
            </div>
            <div className="todays-highlights_box todays-highlights_wind-status_box grid  bg-[#ffffff] w-56 h-48 rounded-2xl items-center pl-6">
                <div className="todays-highlights_box-header text-left  text-slate-400">
                    Wind Status
                </div>

                <div className="todays-highlights_description w-fit">
                    <span className=" text-4xl mr-4">
                        {(Number(weatherData.current.wind_speed) / 0.27778).toFixed(
                            2
                        )}
                    </span>
                    km/h
                </div>
                <div className="todays-highlights_box_comment grid auto-rows-auto grid-cols-2 items-center w-fit text-left">
                    <figure className="today-con-icon">
                        <Image
                            className="inline-block "
                            src={windIcon}
                            alt="wind status icon"
                            width="20"
                            height="20"
                            blurDataURL="blur"
                            priority="true"
                        />
                    </figure>
                    <span className="todays-highlights_wind-dir ml-1 pt-1">
                        {convertWindDirect(
                            Number.parseInt(weatherData.current.wind_deg)
                        )}
                    </span>
                </div>
            </div>
            <div className="todays-highlights_box todays-highlights_sunset-sunrise_box grid  bg-[#ffffff] w-56 h-48 rounded-2xl items-center">
                <div className="todays-highlights_box-header text-left pl-6 text-slate-400">
                    Sunrise & Sunset
                </div>

                <div className="todays-highlights_description grid auto-rows-auto grid-cols-2 items-center w-fit pl-6">
                    {" "}
                    <figure className="today-con-icon text-left ">
                        <Image
                            className="inline-block "
                            src={sunrise}
                            alt="sunrise icon"
                            width="40"
                            height="40"
                            blurDataURL="blur"
                            priority="true"
                        />
                    </figure>
                    <div className="todays-highlights_sunrise-time ml-2">
                        {" "}
                        {getHourMin(weatherData.current.sunrise)}
                    </div>{" "}
                    <figure className="todays-highlights_sunset-icon text-left ">
                        <Image
                            className="inline-block "
                            src={sunset}
                            alt="sunset icon"
                            width="40"
                            height="40"
                            blurDataURL="blur"
                            priority="true"
                        />
                    </figure>
                    <div className="todays-highlights_sunset-time ml-2">
                        {" "}
                        {getHourMin(weatherData.current.sunset)}
                    </div>
                </div>
            </div>

            <div className="todays-highlights_box todays-highlights_humidity_box grid  bg-[#ffffff] w-56 h-48 rounded-2xl items-center pl-6">
                <div className="todays-highlights_box-header text-left  text-slate-400">
                    Humidity
                </div>

                <div className="todays-highlights_description w-fit ">
                    <span className=" text-4xl mr-4">
                        {weatherData.current.humidity}
                    </span>
                    %
                </div>
                <div className="todays-highlights_box_comment text-left">
                    Normal
                </div>
            </div>

            <div className="todays-highlights_box todays-highlights_visibility_box grid  bg-[#ffffff] w-56 h-48 rounded-2xl items-center pl-6">
                <div className="todays-highlights_box-header text-left  text-slate-400">
                    Visibility
                </div>

                <div className="todays-highlights_description w-fit 	">
                    <span className=" text-4xl mr-4">
                        {Number.parseInt(weatherData.current.visibility) / 1000}
                    </span>
                    km
                </div>
                <div className="todays-highlights_box_comment text-left">
                    Normal
                </div>
            </div>
        </div>)
}

export default TdHighlBox