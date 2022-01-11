import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GeneralStyle } from "../../GeneralStyle";

export const Menu = styled.div`
  margin: 0;
  left: 0;
  width: 330px;
  height: 100vh;
  background-color: ${GeneralStyle.principalColor};
  overflow: hidden;
`;

export const MenuHeader = styled.header`
  font-size: 22px;
  color: white;
  text-align: center;
  line-height: 70px;
  background: ${GeneralStyle.secondColor};
  user-select: none;
`;

export const MenuElementContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  height: 90%;
  /* height: 100%; */
`;

export const MenuElement = styled.li`
  list-style: none;
  width: 100%;

  &:last-child {
    position: absolute;
    bottom: 0;
  }
`;

export const MenuLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  line-height: 65px;
  font-size: 20px;
  color: white;
  padding-left: 40px;
  box-sizing: border-box;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid black;
  transition: 0.4s;

  &:hover {
    padding-left: 50px;
  }
`;
