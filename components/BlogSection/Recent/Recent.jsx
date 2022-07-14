import React from "react";
import { RecentWrapper } from "./RecentStyle";
import BlogPost from "../BlogPost/BlogPost";
function Recent({ data }) {
  return (
    <RecentWrapper>
      <div>
        <h2>Recent Articles</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        </p>
      </div>
    </RecentWrapper>
  );
}

export default Recent;
