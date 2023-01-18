import React from "react";
import TdHighlBox from "./TdHighlBox";

const TdHighlCon = () => {
  return (
    <div className="todays-highlights-con w-full  bg-[#f6f6f8] pt-4 pb-4">
      <div className="todays-highlights_header-con pb-4 pt-3 text-center text-3xl bg-[#ffffff] w-full ">
        <p>Today&apos;s Highlights</p>
      </div>

      <TdHighlBox />
    </div>
  );
};

export default TdHighlCon;
