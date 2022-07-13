import React from "react";
import { HeaderContainer } from "./HeaderStyle";
import Link from "next/link";

function Header() {
  return (
    <HeaderContainer>
      <div className="header-contents">
        <div className="header-logo">
          {/* <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="google logo"
          /> */}
          <h1>LOGO</h1>
        </div>
        <div className="header-links">
          <ul className="header-links">
            <li className="nav-items">
              <Link href="/">
                <a>About Us</a>
              </Link>
            </li>
            <li className="nav-items">
              <Link href="/">
                <a>Blog</a>
              </Link>
            </li>
            <li className="nav-items">
              <Link href="/">
                <button className="nav-button">Contact Us</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </HeaderContainer>
  );
}

export default Header;
