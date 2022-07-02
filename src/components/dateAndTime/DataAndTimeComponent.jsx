import React, { useEffect, useState } from "react";
import "./DataAndTimeComponent.css";

export function GetTimeFunction() {
  var dateInfo = new Date();

  /* time */
  var hr,
    _min =
      dateInfo.getMinutes() < 10
        ? "0" + dateInfo.getMinutes()
        : dateInfo.getMinutes(),
    sec =
      dateInfo.getSeconds() < 10
        ? "0" + dateInfo.getSeconds()
        : dateInfo.getSeconds(),
    ampm = dateInfo.getHours() >= 12 ? "PM" : "AM";

  // replace 0 with 12 at midnight, subtract 12 from hour if 13–23
  if (dateInfo.getHours() == 0) {
    hr = 12;
  } else if (dateInfo.getHours() > 12) {
    hr = dateInfo.getHours() - 12;
  } else {
    hr = dateInfo.getHours();
  }

  return { currentTime: `${hr}  :  ${_min}  : ${sec}`, amPm: ampm };
}

export function GetDataFunction() {
  /* date */
  var dateInfo = new Date();
  var daysOfTheWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    monthsOfTheYear = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    day = dateInfo.getDate();

  // store date
  var currentDate =
    daysOfTheWeek[dateInfo.getDay()] +
    ", " +
    monthsOfTheYear[dateInfo.getMonth()] +
    " " +
    day;

  return currentDate;
}
export default function DataAndTimeComponent() {
  const [currentDate, setCurrentDate] = useState("dd mm yy");
  const [currentTime, setCurrentTime] = useState("0:0:0");
  const [amPm, setAmPm] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const { currentTime, amPm } = GetTimeFunction();
      setAmPm(amPm);
      setCurrentTime(currentTime);
      setCurrentDate(GetDataFunction());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div class="main-card">
      <div class="time">
        <span class="hms">{currentTime}</span>
        <span class="ampm">{amPm}</span>
        <br />
        <span class="date">{currentDate}</span>
      </div>
    </div>
  );
}
