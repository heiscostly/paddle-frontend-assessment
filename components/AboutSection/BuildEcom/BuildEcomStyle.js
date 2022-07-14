import styled from "styled-components";
export const BuildEcomWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  .glass-effect {
    width: 50%;
    height: 20rem;
    position: relative;
    background: transparent linear-gradient(180deg, #213f72 0%, #311254 100%) 0%
      0% no-repeat padding-box;
    opacity: 1;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    .glass-content {
      position: absolute;
      top: 30%;
      font: normal normal normal 26px Poppins;
      font-weight: bold;
      letter-spacing: 0px;
      color: #ffffff;
      left: 90%;
      width: 36%;
    }
  }
  .circle-section {
    width: 50%;
    position: relative;
    .circle-round {
      border-radius: 50%;
      width: 80px;
      height: 80px;
      background: transparent linear-gradient(177deg, #213f72 0%, #19073b 100%)
        0% 0% no-repeat padding-box;
      opacity: 1;
      position: absolute;
      left: 88%;
      bottom: 50%;
    }
    .circle-content {
      position: absolute;
      margin: 0;
      bottom: -164px;
      width: 50%;
      left: 30%;
      padding: 0;
      font: normal normal normal 16px Poppins;
      letter-spacing: 0px;
      color: #ffffff;
      opacity: 1;
    }
  }
`;
