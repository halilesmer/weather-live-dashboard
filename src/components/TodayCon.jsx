import SearchBarCon from "./SearchBarCon";
import TdDataBox from "./TdDataBox";

// Today Container
const TodayCon = () => {
  return (
    <div className="today-con main-con_grid-row-1 grid  gap-1 grid-cols-1  gap-y-1 auto-rows-auto md:auto-rows-min pb-6 bg-[#f6f6f8] md:bg-[#ffffff]">
      
      {/* Component - Search Bar Container */}
      <SearchBarCon />

      {/* Component - Today Data Box */}
      <TdDataBox />
    </div>
  );
};

export default TodayCon;
