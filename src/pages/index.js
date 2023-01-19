// import styles from '@/styles/Home.module.css'
import React, { useContext, useEffect, useState } from "react";

import { AppContext } from "@/context/AppContext";
import DegreeUnitSwitcher from "@/components/DegreeUnitSwitcher";
import Head from "next/head";
import { Inter } from "@next/font/google";
import NavCon from "@/components/navCon/NavCon";
import TdHighlCon from "@/components/detailsPage/TdHighlCon";
import TodayCon from "@/components/TodayCon/TodayCon";
import WeekCon from "@/components/detailsPage/WeekCon";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { handleGeoCodeClick, weatherData } = useContext(AppContext);

  useEffect(() => {
    // Suchparameter, wenn die Seite aufgerufen wird
    handleGeoCodeClick("berlin");
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Head>
        <title>Weather Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {weatherData && (
        <main className="main-con grid gap-0 md:grid-cols-[30%_70%] auto-rows-auto grid-flow-row pr-3 pl-3 pb-5 h-[100vh]">
          {/* Today Container */}
          <TodayCon />
          {/* content-center */}
          <div className="details-con grid-div-row-2 grid md:grid-rows-[50% 50%] md:col-start-2 md:col-end-auto md:row-start-1 md: row-end-auto  md:items-stretch bg-[#f6f6f8]">
            {/*  Navigation Container*/}
            <NavCon />

            {/* Week Container */}
            <WeekCon />
            {/* Today Highlights Container */}
            <TdHighlCon />
          </div>
        </main>
      )}
      {/* Das scheint, wenn noch nicht die Wetterdaten da sind. */}
      {!weatherData && <div>Loading...</div>}
    </>
  );
}
