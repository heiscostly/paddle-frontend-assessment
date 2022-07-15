import styled from "styled-components";
export const CounterContainer = styled.div`
  .expired-notice {
    text-align: center;
    padding: 2rem;
    border: 1px solid #ebebeb;
    border-radius: 0.25rem;
    margin: 0.5rem;
  }
  .expired-notice > span {
    font-size: 2.5rem;
    font-weight: bold;
    color: red;
  }
  .expired-notice > p {
    font-size: 1.5rem;
  }
  .show-counter {
    padding: 0.5rem;
  }
  .show-counter {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 2rem;
    line-height: 1.75rem;
    padding: 0.5rem;
    border-radius: 0.25rem;
    text-decoration: none;
    color: #000;
  }
  .count-wrapper {
    width: 120px;
    height: 100px;
    border-radius: 9px;
    opacity: 1;
    background-color: #fff;
    margin-right: 1rem;
    padding-top: 2rem;
  }
  .show-counter .countdown {
    line-height: 1.25rem;
    padding: 0 0.75rem 0 0.75rem;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .show-counter .countdown.danger {
    color: #ff0000;
  }
  .show-counter .countdown > p {
    margin: 0;
  }
  .show-counter .countdown > span {
    text-transform: uppercase;
    font-size: 0.75rem;
    padding-top: 1rem;
    line-height: 1rem;
  }
  .count-holder {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 2rem;
    h1 {
      font: normal normal bold 62px/84px Poppins;
      letter-spacing: 0px;
      color: #ffffff;
      text-transform: uppercase;
      opacity: 1;
      width: 60%;
      font-weight: 300;
      margin: 0;
      text-align: center;
    }
    .affiliate {
      text-align: center;
      letter-spacing: 0px;
      color: #ffffff;
      opacity: 1;
      font-family: "Poppins", sans-serif;
      width: 40%;
      font-weight: 200;
    }
  }
  .circle {
    border-radius: 50%;
    width: 80px;
    height: 76px;
    background: transparent linear-gradient(177deg, #7f1e7b 0%, #19073b 100%) 0%
      0% no-repeat padding-box;
    opacity: 1;
    position: absolute;
    right: 80%;
    top: -4px;
  }
  .circle2 {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    background: transparent linear-gradient(177deg, #213f72 0%, #19073b 100%) 0%
      0% no-repeat padding-box;
    opacity: 1;
    position: absolute;
    left: 80%;
    top: 48%;
  }
`;
