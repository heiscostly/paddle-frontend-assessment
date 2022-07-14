import styled from "styled-components";

export const GrowingWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  .why-us {
    width: 50%;
    padding: 3rem;
    .top-content {
      display: flex;
      align-items: center;
      color: #fff;
      p {
        width: 80px;
        border-bottom: 1px solid #fff;
        text-align: center;
        padding-bottom: 0.5rem;
        margin-right: 1rem;
        font: normal normal normal 18px/32px Poppins;
        letter-spacing: 0px;
        color: #ffffff;
        text-transform: uppercase;
        opacity: 1;
      }
      h2 {
        padding-top: 1.5rem;
        font: normal normal medium 22px/39px Poppins;
        letter-spacing: 1.1px;
        color: #ffffff;
        text-transform: uppercase;
        opacity: 1;
      }
    }
    .middle-content {
      font: normal normal 300 16px Poppins;
      letter-spacing: 0px;
      color: #ffffff;
      opacity: 1;
      margin-bottom: 8rem;
    }
  }
  .growing {
    background: transparent linear-gradient(180deg, #213f72 0%, #311254 100%) 0%
      0% no-repeat padding-box;
    opacity: 1;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    width: 50%;
    padding: 3rem;
    .top-content {
      display: flex;
      align-items: center;
      color: #fff;
      p {
        width: 80px;
        border-bottom: 1px solid #fff;
        text-align: center;
        padding-bottom: 0.5rem;
        margin-right: 1rem;
        font: normal normal normal 18px/32px Poppins;
        letter-spacing: 0px;
        color: #ffffff;
        text-transform: uppercase;
        opacity: 1;
      }
      h2 {
        padding-top: 1.5rem;
        font: normal normal medium 22px/39px Poppins;
        letter-spacing: 1.1px;
        color: #ffffff;
        text-transform: uppercase;
        opacity: 1;
      }
    }
    .middle-content {
      font: normal normal 300 16px Poppins;
      letter-spacing: 0px;
      color: #ffffff;
      opacity: 1;
      margin-bottom: 3rem;
      &:nth-child(3) {
        margin-bottom: 0;
      }
    }
  }
`;
