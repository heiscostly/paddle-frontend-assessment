import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #210045;
  color: #fff;
  .footer-socials {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 20%;
  }
  .terms {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font: normal normal normal 16px/16px Poppins;
    opacity: 0.61;
    width: 20%;
  }
`;
