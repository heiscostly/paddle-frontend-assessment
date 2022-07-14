import Head from "next/head";
import React from "react";
import Top from "../components/BlogSection/Top/Top";
import Latest from "../components/BlogSection/Latest/Latest";
import BlogPost from "../components/BlogSection/BlogPost/BlogPost";
import Recent from "../components/BlogSection/Recent/Recent";
import styled from "styled-components";
import { blogData, recentData } from "../data/data";
export const BlogPostContainer = styled.div`
  width: 100%;
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
`;
function blog() {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <Top />
      <Latest />
      <BlogPostContainer>
        {blogData.map((blog) => (
          <BlogPost key={blog.id} {...blog} />
        ))}
      </BlogPostContainer>
      <Recent />
      <BlogPostContainer>
        {recentData.map((recent) => (
          <BlogPost key={recent.id} {...recent} />
        ))}
      </BlogPostContainer>
    </div>
  );
}

export default blog;
