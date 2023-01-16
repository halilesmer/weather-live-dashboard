import moment from "moment";

export default function useTime() {
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
  return { getHourMin };
}
