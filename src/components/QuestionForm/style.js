import styled from "styled-components";
import { GeneralStyle } from "../../GeneralStyle";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
  height: 100%;
  background: url(${(props) => props.image});
  background-size: cover;
  object-fit: cover;
`;

export const FormTitle = styled.h2`
  /* width: 800px; */
  background: ${GeneralStyle.principalColor};
  padding: 10px 0;
  text-align: center;
  border-radius: 15px 15px 0 0;
`;

export const FormContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  max-width: 800px;
  border-radius: 15px;
  margin: 10px;
  color: #ffffff;
`;

export const Form = styled.form`
  padding: 10px;

  input {
    width: 100%;
    height: 18px;
    color: white;
    font-size: 18px;
    color: black;
    margin-bottom: 15px;
    outline: none;
    padding: 12px 0;
  }

  label {
    margin-left: 15px;
    margin-bottom: 5px;
  }

  .button_container {
    display: flex;
    justify-content: center;
  }

  button {
    display: block;
    min-width: 200px;
    margin: 0 20px;
    border-radius: 12px;
    border: 2px solid ${GeneralStyle.principalColor};
    padding: 15px;
    outline: none;
    color: white;
    cursor: pointer;
    /* width: 50px; */
    /* height: 50px; */
    background: ${GeneralStyle.secondColor};
    transition: 0.5s;

    &:hover {
      background-color: white;
      color: ${GeneralStyle.principalColor};
      /* padding: 20px; */
    }
  }
`;
