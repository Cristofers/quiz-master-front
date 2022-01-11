import react from "react";
import styled from "styled-components";
import { GeneralStyle } from "../../GeneralStyle";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  background-size: cover;
  background-attachment: fixed;
  background-image: url("${(props) => props.image || "#"}");
`;

export const AnswerContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 25px;
  height: 25%;
  background-color: ${GeneralStyle.secondColor};
  text-align: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const AnswerButton = styled.button`
  margin: 10px;
  border-radius: 10px;
  border: 2.5px solid ${GeneralStyle.principalColor};
  background-color: transparent;
  color: white;
  transition: 1s;

  &:hover {
    color: ${GeneralStyle.principalColor};
    background-color: white;
    margin: 5px;
  }
`;

export const QuestionContainer = styled.div`
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    padding: 10px;
    min-width: 200px;
    min-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    background: ${GeneralStyle.principalColor};
    box-shadow: 5px 5px rgba(0, 0, 0, 0.2);
  }

  p {
    color: white;
  }
`;

export const GoBack = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  width: 50px;
  height: 50px;
  border: 2px solid ${GeneralStyle.principalColor};
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${GeneralStyle.principalColor},
    ${GeneralStyle.secondColor}
  );
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 32px;
    color: white;
  }
`;
