import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  // background-color: #210045;
  color: #fff;
  height: auto;
  .header-contents {
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }
  .header-links {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    color: black;
  }
  .nav-items {
    list-style: none;
    margin-right: 3rem;
    a {
      text-decoration: none;
      color: #fff;
      font: normal normal medium 18px/27px Poppins;
      letter-spacing: 0px;
      color: #ffffff;
      text-transform: uppercase;
      opacity: 1;
    }
    &:nth-child(3) {
      margin-right: 0;
    }
  }
  .active {
    list-style: none;
    margin-right: 3rem;
    a {
      text-decoration: none;
      color: #fff;
      font: normal normal medium 18px/27px Poppins;
      letter-spacing: 0px;
      color: #ff00f7;
      text-transform: uppercase;
      opacity: 1;
    }
    &:nth-child(3) {
      margin-right: 0;
    }
  }
  .nav-button {
    border: none;
    background: #271ac1 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 10px #09090991;
    border-radius: 28px;
    width: 140px;
    height: 44px;
    opacity: 1;
    color: #fff;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: normal;
    text-transform: uppercase;
  }
  .bg {
    border: none;
    background: #fff 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 10px #09090991;
    border-radius: 28px;
    width: 140px;
    height: 44px;
    opacity: 1;
    color: #000;
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: normal;
    text-transform: uppercase;
  }
`;
