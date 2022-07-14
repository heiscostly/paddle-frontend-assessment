import styled from "styled-components";
export const TopContainer = styled.div`
  width: 100%;
  height: 280px;
  background: transparent linear-gradient(180deg, #210045 0%, #0c0123 100%) 0%
    0% no-repeat padding-box;
  opacity: 1;
  color: #fff;
  margin-bottom: 4rem;
  .blur-container {
    position: relative;
    width: 35%;
    height: 280px;
    background: transparent linear-gradient(180deg, #632570 0%, #19073b 100%) 0%
      0% no-repeat padding-box;
    opacity: 1;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    .sec {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 20%;
      left: 65%;
      span {
        width: 50px;
        border: 1px solid #fefefe;
        margin: 0.5rem;
      }
      h4 {
        font-size: 0.9rem;
        font-family: "Poppins", sans-serif;
      }
    }
    h1 {
      position: absolute;
      top: 30%;
      left: 85%;
      width: 100%;
      font: normal normal bold 40px/84px Poppins;
    }
  }
`;
