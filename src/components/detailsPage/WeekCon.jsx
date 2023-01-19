import React from "react";
import WeekConBox from "./WeekConBox";

// Week Container
const WeekCon = () => {
  return (
    <div className="details-con_week-con w-full  bg-[#f6f6f8] pt-4 pb-4">
      {/*Week Container Header Container */}
      <div className="week-con_header-con pb-4 pt-3 text-center text-3xl  w-fit ml-5 bg-[#f6f6f8] ">
        {/*Week Container - Header  */}
        <p>7 Days Weather</p>
      </div>
      {/* Component - Week Container Box */}
      <WeekConBox />
    </div>
  );
};

export default WeekCon;
