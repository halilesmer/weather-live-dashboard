import moment from "moment";

export default function useConvert() {
  function formatTime(timeStr) {
    let unix_timestamp = timeStr;
    var date = new Date(unix_timestamp * 1000);
    // console.log("date: ", date);
    return date;
  }

  function getHourMin(timeStr) {
    const getFormattedTime = formatTime(timeStr);
    const time = moment(getFormattedTime).format("hh:mm");
    return time;
  }

  function convertWindDirect(inputNumber) {
    let degrees = inputNumber;
    // Define array of directions
    let directions = [
      "North",
      "NE",
      "East",
      "SE",
      "South",
      "SW",
      "West",
      "NW",
    ];

    // Split into the 8 directions
    degrees = (degrees * 8) / 360;

    // round to nearest integer.
    degrees = Math.round(degrees, 0);

    // Ensure it's within 0-7
    degrees = (degrees + 8) % 8;

    console.log(directions[degrees]);
    return directions[degrees];
  }
  return { getHourMin, convertWindDirect };
}
