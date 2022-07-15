import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #fff;
  position: relative;
  .footer-socials {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 20%;
    opacity: 0.61;
  }
  .terms {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font: normal normal normal 16px/16px Poppins;
    opacity: 0.61;
    width: 20%;
  }
  .footer-copyright {
    font: normal normal normal 16px/16px Poppins;
    opacity: 0.61;
  }
  .circle {
    background: transparent linear-gradient(177deg, #7f4129 0%, #1c0c28 100%) 0%
      0% no-repeat padding-box;
    opacity: 1;
    position: absolute;
    width: 110px;
    height: 100px;
    border-radius: 50%;
    right: 70%;
    top: -54px;
  }
  .notactive {
    display: none;
  }
`;
