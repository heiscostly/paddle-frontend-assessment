import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import useCountdown from "../hooks/useCountDown";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <div className="count-wrapper">
        <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
      </div>
      <div className="count-wrapper">
        <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
      </div>
      <div className="count-wrapper">
        <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
      </div>
      <div className="count-wrapper">
        <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
