import React from "react";
import { HeaderContainer } from "./HeaderStyle";
import { useRouter } from "next/router";

import Link from "next/link";
import Image from "next/image";

function Header() {
  const router = useRouter();
  return (
    <HeaderContainer>
      <div className="header-contents">
        <div className="header-logo">
          <Link href="/">
            <Image src="/img/logo.png" alt="logo" width={70} height={50} />
          </Link>
        </div>
        <div className="header-links">
          <ul className="header-links">
            <li
              className={router.pathname == "/about" ? "active" : "nav-items"}
            >
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
            <li className={router.pathname == "/blog" ? "active" : "nav-items"}>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li
              className={router.pathname == "/github" ? "active" : "nav-items"}
            >
              <Link href="/github">
                <a>Github</a>
              </Link>
            </li>
            <li
              className={router.pathname == "/contact" ? "active" : "nav-items"}
            >
              <Link href="/">
                <button
                  className={router.pathname == "/blog" ? "bg" : "nav-button"}
                >
                  Contact Us
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </HeaderContainer>
  );
}

export default Header;
