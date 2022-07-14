import styled from "styled-components";
export const LatestContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 200px;
  margin-bottom: 4rem;

  padding: 3rem;
  .text-content {
    width: 50%;
    margin-right: 2rem;
    h1 {
      margin: 0;
      padding: 0;
      font-family: "Poppins", sans-serif;
      font-size: 38px;
      font-weight: 700;
    }
    p {
      font-family: "Poppins", sans-serif;
      margin: 0;

      padding: 0;
    }
  }
  .input-section {
    width: 50%;
    display: flex;
    justify-contetn: center;
    align-items: center;
    position: relative;
    input {
      border: 1px solid #000000;
      border-radius: 38px;
      opacity: 1;
      width: 480px;
      height: 10px;
      padding: 2rem;
      position: absolute;
      bottom: 0;

      ::placeholder {
        font: normal normal 300 17px/29px Poppins;
      }
    }
    .search {
      position: absolute;
      right: 30%;
      bottom: 20%;
    }
  }
`;
