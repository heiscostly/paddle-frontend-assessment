import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Layout({ children }) {
  return (
    <div style={{ backgroundColor: "#210045", height: "100%" }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
