import React from "react";
import { EmailContainer } from "./FormInputsStyle";
function WaitingList() {
  return (
    <EmailContainer>
      <input
        className="waiting-list"
        type="text"
        placeholder="Enter your email address..."
      />
      <button className="waiting-list-button">
        <span>Subscribe</span>
      </button>
    </EmailContainer>
  );
}

export default WaitingList;
