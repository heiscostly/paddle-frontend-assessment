import React from "react";
import { BlogPostContainer } from "./BlogPostStyle";

function BlogPost({ image, title, description, date, id }) {
  return (
    <BlogPostContainer>
      <div key={id} className="card-wrapper">
        {image && (
          <div
            className="card-image"
            style={{
              backgroundImage: `url(${image})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: "100%",
              height: "200px",
            }}
          ></div>
        )}

        <div className="card-content">
          <p className="tag">{date}</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="sec">
          <span></span>
          <h4>READ MORE</h4>
        </div>
      </div>
    </BlogPostContainer>
  );
}

export default BlogPost;
