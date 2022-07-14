import Link from "next/link";
import React from "react";
import { ArrowRight } from "react-feather";
import { QuestionWrapper } from "./QuestionStyle";
function Question() {
  return (
    <QuestionWrapper>
      <div className="question-content">
        <h1>Got a Question?</h1>
        <p>
          See how Metricks can help your business grow with best Affiliate
          Marketing Tracking Software.
        </p>
        <Link href="/">
          <span
            style={{
              position: "relative",
              color: "#FF00F7",
              cursor: "pointer",
            }}
          >
            Contact Us
          </span>
        </Link>
        <ArrowRight
          style={{
            position: "absolute",
            left: "9%",
            bottom: "-3%",
            color: "#FF00F7",
            cursor: "pointer",
          }}
        />
      </div>
    </QuestionWrapper>
  );
}

export default Question;
