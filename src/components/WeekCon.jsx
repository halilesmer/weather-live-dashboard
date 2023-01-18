import React from "react";
import WeekConBox from "./WeekConBox";

const WeekCon = () => {
  return (
    <div className="week-con w-full  bg-[#f6f6f8] pt-4 pb-4">
      <div className="week-con_header-con pb-4 pt-3 text-center text-3xl bg-[#ffffff] w-full ">
        <p>Week</p>
      </div>

      <WeekConBox />
    </div>
  );
};

export default WeekCon;
