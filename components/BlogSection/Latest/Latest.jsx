import React from "react";
import { Search } from "react-feather";
import { LatestContainer } from "./LatestStyle";

function Latest() {
  return (
    <LatestContainer>
      <div className="text-content">
        <h1>Latest From The Blog</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        </p>
      </div>
      <div className="input-section">
        <input type="text" placeholder="Search here" />
        <div className="search">
          <Search style={{ color: "#632570" }} />
        </div>
      </div>
    </LatestContainer>
  );
}

export default Latest;
