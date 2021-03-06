import React, { useEffect, useState } from "react";
import "./CountDownComponent.css";
import { FaStopwatch } from "react-icons/fa";

export default function CountDownComponent() {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let countDownMonth = "aug";
  let countDownDay = "1";
  let countDownYear = "2022";
  let countDownTime = "00:00:00";

  // let countDownMonth = "jan";
  // let countDownDay = "01";
  // let countDownYear = "2023";
  // let countDownTime = "00:00:00";

  const [calculatedDistance, setCalculatedDistance] = useState(0);
  const [countedDay, setCountedDay] = useState(0);
  const [countedHours, setCountedHours] = useState(0);
  const [countedMinutes, setCountedMinutes] = useState(0);
  const [countedSeconds, setCountedSeconds] = useState(0);

  useEffect(() => {
    let countTill = `${countDownMonth} ${countDownDay} , ${countDownYear} ${countDownTime}`;
    let countDown = new Date(countTill).getTime();
    const interval = setInterval(() => {
      let now = new Date().getTime(),
        distance = countDown - now;

      setCalculatedDistance(distance);
    }, 0);
    return () => clearInterval(interval);
  }, []);

  useEffect(
    function () {
      if (calculatedDistance === 0) {
        setCountedDay(0);
        setCountedHours(0);
        setCountedMinutes(0);
        setCountedSeconds(0);
        return;
      }
      setCountedDay(Math.floor(calculatedDistance / day));
      setCountedHours(Math.floor((calculatedDistance % day) / hour));
      setCountedMinutes(Math.floor((calculatedDistance % hour) / minute));
      setCountedSeconds(Math.floor((calculatedDistance % minute) / second));
    },
    [calculatedDistance]
  );
  return (
    <div className="main-card count-down-main-card my-auto">
      <div className="count-down-time-div">
        <h1 id="headline">
          <FaStopwatch />
          Hackathon Ends
        </h1>
        <div
          id="countdown"
          className={`m-auto ${calculatedDistance <= 0 ? "text-danger" : null}`}
        >
          <ul>
            <>
              <li>
                <span>{countedDay}</span>days
              </li>
              <li>
                <span>{countedHours}</span>Hours
              </li>
              <li>
                <span>{countedMinutes}</span>Minutes
              </li>
              <li>
                <span>{countedSeconds}</span>Seconds
              </li>
            </>
          </ul>
          {calculatedDistance <= 0 ? (
            <div className="text-danger">Time out</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function CountDownFunction(countTill) {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  const [calculatedDistance, setCalculatedDistance] = useState(0);
  const [countedDay, setCountedDay] = useState(0);
  const [countedHours, setCountedHours] = useState(0);
  const [countedMinutes, setCountedMinutes] = useState(0);
  const [countedSeconds, setCountedSeconds] = useState(0);

  useEffect(
    function () {
      setCountedDay(Math.floor(calculatedDistance / day));
      setCountedHours(Math.floor((calculatedDistance % day) / hour));
      setCountedMinutes(Math.floor((calculatedDistance % hour) / minute));
      setCountedSeconds(Math.floor((calculatedDistance % minute) / second));
    },
    [calculatedDistance]
  );

  useEffect(() => {
    let countDownDate = new Date(countTill).getTime();
    const interval = setInterval(() => {
      let now = new Date().getTime(),
        distance = countDownDate - now;
      setCalculatedDistance(distance);
    }, 0);
    return () => clearInterval(interval);
  }, []);
  if (
    countedSeconds < 0 &&
    countedDay < 0 &&
    countedHours < 0 &&
    countedMinutes < 0
  )
    return {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
    };
  return {
    day: countedDay,
    hour: countedHours,
    minute: countedMinutes,
    second: countedSeconds,
  };
}
