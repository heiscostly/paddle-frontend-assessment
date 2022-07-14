import React from "react";
import { GrowingWrapper } from "./GrowingStyle";
import Image from "next/image";

function Growing() {
  return (
    <GrowingWrapper>
      <div className="why-us">
        <div className="top-content">
          <p>01</p>
          <h2>Why us?</h2>
        </div>
        <p className="middle-content">
          We pride ourselves in our ability to innovate and create world-class
          tools that provide reliable and efficient touchpoints between
          advertisers and affiliates.
        </p>

        <Image src="/img/dots.png" alt="logo" width={200} height={80} />
      </div>
      <div className="growing">
        <div className="top-content">
          <p>02</p>
          <h2>Growing with you</h2>
        </div>
        <p className="middle-content">
          Leveraging the best technology, we have developed an all-in-one
          affiliate marketing tracking software, a genius tool to help you
          track, automate and optimize your influencer campaigns, all from one
          dashboard.
        </p>
        <p className="middle-content">
          Our team of experts are constantly brainstorming, testing and
          developing new solutions with only one thing in mind - your business
          growth. Your success is our success and by giving you the tools you
          need to scale, we grow as well.
        </p>
      </div>
    </GrowingWrapper>
  );
}

export default Growing;
