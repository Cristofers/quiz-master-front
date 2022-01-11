import styled from "styled-components";
import { GeneralStyle } from "../../GeneralStyle";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Raleway");
  background-color: ${GeneralStyle.principalColor};
  font-family: "Raleway", sans-serif;
  position: absolute;
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;

  .card {
    background-color: white;
    border-radius: 15px;
    padding: 0.8rem;
  }

  .card > form {
    display: flex;
    flex-direction: column;
  }

  .card h1 {
    text-align: center;
    margin-top: 0;
    margin-bottom: 10px;
  }

  .form-item {
    font-family: "Raleway", sans-serif;
    padding: 5px;
    margin-bottom: 2rem;
    height: 30px;
    width: 100%;
    border: 1px solid grey;
  }

  .form-submit {
    font-family: "Raleway", sans-serif;
    height: 35px;
    color: #fff;
    background-color: #1abc9c;
    border: none;
    letter-spacing: 0.2rem;
    transition: 0.3s opacity ease;
    cursor: pointer;

    &:hover {
      opacity: 0.6;
    }
  }
`;
