import styled from "styled-components";
import { GeneralStyle } from "../../GeneralStyle";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  div {
    color: white;
    width: 330px;
    min-height: 125px;
    border: 1px solid ${GeneralStyle.principalColor};
    border-radius: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 10px;
    padding: 5px;
    font-size: 25px;
    transition: 0.5s;
    background: linear-gradient(
      to bottom,
      ${GeneralStyle.principalColor},
      ${GeneralStyle.secondColor}
    );

    svg {
      font-size: 75px;
      width: 100%;
      /* height: 200px; */
    }

    &:hover {
      background: white;
      color: ${GeneralStyle.principalColor};
    }
  }
`;
