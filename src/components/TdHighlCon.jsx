import React from "react";
import TdHighlBox from "./TdHighlBox";

// Today Higlight Container
const TdHighlCon = () => {
  return (
    <div className="todays-highlights-con w-full  bg-[#f6f6f8] pt-4 pb-4">
      <div className="todays-highlights_header-con pb-4 pt-3 text-center text-3xl w-fit ml-5 bg-[#f6f6f8]">
        {/* Component- Container Überschrift */}
        <p>Today&apos;s Highlights</p>
      </div>

      {/* Component - Today Highlight Box */}
      <TdHighlBox />
    </div>
  );
};

export default TdHighlCon;
