import React from "react";
import { FooterContainer } from "./FooterStyle";
import { Youtube, Facebook, Linkedin, Instagram, Twitter } from "react-feather";
import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();
  return (
    <FooterContainer>
      {/* <div className="oval"></div> */}
      <div
        className={
          router.pathname == "/about" || "/github" ? "notactive" : "circle"
        }
      ></div>
      <div className="footer-socials">
        <div>
          <a href="https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw">
            <Youtube size={20} />
          </a>
        </div>
        <div>
          <a href="https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw">
            <Facebook size={20} />
          </a>
        </div>
        <div>
          <a href="https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw">
            <Linkedin size={20} />
          </a>
        </div>
        <div>
          <a href="https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw">
            <Instagram size={20} />
          </a>
        </div>
        <div>
          <a href="https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw">
            <Twitter size={20} />
          </a>
        </div>
      </div>
      <div className="terms">
        <p>Terms of services</p>
        <p>Privacy policy</p>
      </div>
      <div className="footer-copyright">
        <p>Copyright 2021 @ Peddle Technologies. All Rights Reserved.</p>
      </div>
    </FooterContainer>
  );
}

export default Footer;
