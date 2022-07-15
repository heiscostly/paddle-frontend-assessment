import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";
import { useRouter } from "next/router";
const LayoutContainer = styled.div`
  height: 100%;
  width: 100%;
  .layout-wrapper {
    background-color: #210045;
    height: 100%;
    width: 100%;
  }
  .notcolor {
    // background-color: #fff;
    height: 100%;
    width: 100%;
  }
  .notcolor .notblog a {
    color: #000;
  }
`;
function Layout({ children }) {
  const router = useRouter();
  return (
    <LayoutContainer>
      <div
        className={router.pathname == "/blog" ? "notcolor" : "layout-wrapper"}
      >
        <Header />
        {children}
        <Footer />
      </div>
    </LayoutContainer>
  );
}

export default Layout;
