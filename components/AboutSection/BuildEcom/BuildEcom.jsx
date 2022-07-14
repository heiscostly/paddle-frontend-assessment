import React from "react";
import { BuildEcomWrapper } from "./BuildEcomStyle";

function BuildEcom() {
  return (
    <BuildEcomWrapper>
      <div className="glass-effect">
        <h1 className="glass-content">Built for Saas and E-commerce</h1>
      </div>
      <div className="circle-section">
        <div className="circle-round"></div>
        <p className="circle-content">
          Our tools are easy to set up and use with a user friendly dashboard
          that enables you to set up, launch, automate and manage
          multi-affiliate campaigns in 5 minutes.
        </p>
      </div>
    </BuildEcomWrapper>
  );
}

export default BuildEcom;
