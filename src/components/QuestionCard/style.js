import styled from "styled-components";
import { GeneralStyle } from "../../GeneralStyle";

export const Card = styled.div`
  width: 100px;
  height: 500px;
  margin: 7px;
  flex-direction: column;
  width: clamp(20rem, calc(20rem + 2vw), 22rem);
  overflow: hidden;
  box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1em;
  transition: 1s;
  background: linear-gradient(
    to right,
    ${GeneralStyle.principalColor},
    ${GeneralStyle.secondColor}
  );
  color: white;

  .card__body {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h4 {
      font-size: 1.5rem;
      text-transform: capitalize;
    }
  }

  :hover {
    box-shadow: 0 0 30px 5px #000000;
    margin: 5px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 300px;
  display: block;
  object-fit: cover;
`;
