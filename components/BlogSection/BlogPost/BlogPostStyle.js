import styled from "styled-components";
export const BlogPostContainer = styled.div`
  .card-wrapper {
    background: #fefefe 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 30px #00000038;
    opacity: 1;
    width: 350px;
    padding: 19px;
    position: relative;
    .card-content {
      .tag {
        font-size: 12px;
        font-family: "Poppins", sans-serif;
      }
      p {
        font-size: 16px;
        font-family: "Poppins", sans-serif;
      }
    }
    .sec {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: -11px;
      span {
        width: 50px;
        border: 1px solid #ff00f7;
        margin: 0.5rem;
      }
      h4 {
        font-size: 0.9rem;
        font-family: "Poppins", sans-serif;
        color: #ff00f7;
      }
    }
  }
`;
