import Head from "next/head";
import React from "react";
import Top from "../components/BlogSection/Top/Top";
import Latest from "../components/BlogSection/Latest/Latest";

function blog() {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <Top />
      <Latest />
    </div>
  );
}

export default blog;
