import SearchBarCon from "./SearchBarCon";
import TdDataBox from "./TdDataBox";

const TodayCon = () => {
  // console.log("weatherData: ", weatherData);
  return (
    <div className="today-con grid  gap-1 grid-cols-1  gap-y-1 auto-rows-auto md:auto-rows-min pb-6 bg-[#f6f6f8] md:bg-[#ffffff]">
      <SearchBarCon />
      <TdDataBox />
    </div>
  );
};

export default TodayCon;
