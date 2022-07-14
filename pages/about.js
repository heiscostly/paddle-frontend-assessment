import React from "react";
import BuildEcom from "../components/AboutSection/BuildEcom/BuildEcom";
import Metrics from "../components/AboutSection/Metrics/Metrics";
import Growing from "../components/AboutSection/Growing/Growing";
import Question from "../components/AboutSection/Question/Question";

function about() {
  return (
    <div>
      <BuildEcom />
      <Metrics />
      <Growing />
      <Question />
    </div>
  );
}

export default about;
