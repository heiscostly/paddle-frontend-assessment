import React from "react";
import CountdownTimer from "../CountdownTimer";
import { CounterContainer } from "./CounterStyle";

function Counter() {
  const THREE_DAYS_IN_MS = 8 * 24 * 60 * 60 * 1000;

  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <CounterContainer>
      <div className="count-holder">
        <h1>Something awesome is coming soon</h1>
        <p className="affiliate">
          Your all-in-one affiliate marketing tracking software track, automate
          and optimize your campaigns.
        </p>
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      </div>
    </CounterContainer>
  );
}

export default Counter;
