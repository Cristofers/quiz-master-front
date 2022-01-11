import React, { useEffect } from "react";
import AuthService from "../../AuthService";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  MenuElement,
  MenuElementContainer,
  MenuHeader,
  MenuLink,
} from "./styles";
import {
  AiFillPlayCircle,
  AiFillHighlight,
  AiFillSetting,
  AiFillEdit,
  AiFillSignal,
  AiOutlineUser,
} from "react-icons/ai";
import { Fragment } from "react/cjs/react.production.min";
import { BiBlock } from "react-icons/bi";

const SideBar = () => {
  const Auth = new AuthService();
  const navigate = useNavigate();

  const handleLogout = () => {
    Auth.logout();
    navigate("/login");
  };

  return (
    <Menu>
      <MenuHeader>Quiz Master</MenuHeader>
      <MenuElementContainer>
        {Auth.loggedIn() ? (
          <Fragment>
            <MenuElement>
              <MenuLink to="/Play">
                <AiFillPlayCircle />
                Jugar
              </MenuLink>
            </MenuElement>
            <MenuElement>
              <MenuLink to="/Ranking">
                <AiFillSignal />
                Ranking
              </MenuLink>
            </MenuElement>
            {Auth.adminIn() && (
              <Fragment>
                <MenuElement>
                  <MenuLink to="/SeeQuestions">
                    <AiFillHighlight />
                    Ver Preguntas
                  </MenuLink>
                </MenuElement>
                <MenuElement>
                  <MenuLink to="/AddQuestion">
                    <AiFillEdit />
                    Agregar Preguntas
                  </MenuLink>
                </MenuElement>
              </Fragment>
            )}
            <MenuElement>
              <MenuLink to="/" onClick={handleLogout}>
                <BiBlock />
                Log Out
              </MenuLink>
            </MenuElement>
          </Fragment>
        ) : (
          <MenuElement>
            <MenuLink to="/Login" onClick={handleLogout}>
              <AiOutlineUser />
              Log In
            </MenuLink>
          </MenuElement>
        )}
      </MenuElementContainer>
    </Menu>
  );
};

export default SideBar;
