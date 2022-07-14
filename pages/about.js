import React from "react";
import BuildEcom from "../components/AboutSection/BuildEcom/BuildEcom";
import Metrics from "../components/AboutSection/Metrics/Metrics";
import Growing from "../components/AboutSection/Growing/Growing";

function about() {
  return (
    <div>
      <BuildEcom />
      <Metrics />
      <Growing />
    </div>
  );
}

export default about;
