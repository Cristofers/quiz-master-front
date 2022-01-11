import styled from "styled-components";
import { GeneralStyle } from "../../GeneralStyle";

export const Container = styled.div`
  position: fixed;
  top: 15px;
  right: 15px;
  min-width: 100px;
  height: 50px;
  border: 2px solid ${GeneralStyle.principalColor};
  border-radius: 10px;
  padding-right: 10px;
  background: linear-gradient(
    135deg,
    ${GeneralStyle.principalColor},
    ${GeneralStyle.secondColor}
  );
  color: white;
  display: flex;
  justify-content: right;
  align-items: center;

  svg {
    display: block;
    margin-right: auto;
    font-size: 32px;
    color: white;
  }
`;
