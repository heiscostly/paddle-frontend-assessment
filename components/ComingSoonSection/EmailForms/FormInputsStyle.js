import styled from "styled-components";
export const FormInputContainer = styled.div`
  .input-holder {
    border: none;
    outline: none;
    background: transparent;
    // margin-right: 2rem;
    border-radius: 6px;
    border-bottom: 1px solid #f6f7f9;
    opacity: 0.23;
    padding: 10px;
    width: 240px;
    margin-right: 2rem;

    ::placeholder {
      color: #fff;
    }
  }
`;
export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
export const EmailContainer = styled.div`
  display: flex;
  margin-bottom: 6rem;
  .waiting-list {
    width: 664px;
    height: 67px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 51px;
    opacity: 1;
    padding: 30px;
    position: relative;
    ::placeholder {
      font: normal normal 300 17px/29px Poppins;
      letter-spacing: 0px;
      color: #000000;
      opacity: 1;
    }
    &:focus {
      border: none;
      outline: none;
    }
  }
  .waiting-list-button {
    width: 250px;
    height: 67px;
    background: #271ac1 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 10px #09090991;
    opacity: 1;
    border-radius: 51px;
    border: none;
    color: #fff;
    position: absolute;
    left: 60%;
  }
`;
