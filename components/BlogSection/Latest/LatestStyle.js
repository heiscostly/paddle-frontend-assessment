import styled from "styled-components";
export const LatestContainer = styled.div`
  width: 100%;
  display: flex;
  height: 200px;
  margin-bottom: 4rem;
  border: 1px solid red;
  padding: 3rem;
  .text-content {
    border: 1px solid green;
    width: 50%;
    h1 {
      margin: 0;
      padding: 0;
    }
  }
  .input-section {
    border: 1px solid blue;
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
      right: 0;
    }
  }
`;
