import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";
import AuthService from "../../AuthService";
import {
  AiFillPlayCircle,
  AiFillSignal,
  AiFillEdit,
  AiFillHighlight,
} from "react-icons/ai";
import PointBox from "../PointBox";

const Welcome = () => {
  const [points, setPoitns] = useState(0);
  const Auth = new AuthService();

  useEffect(() => {
    setPoitns(parseInt(Auth.getProfile().score));
  }, []);
  return (
    <Fragment>
      <PointBox points={points} />
      <Container>
        <Link to="/Play">
          <div>
            <AiFillPlayCircle />
            Jugar
          </div>
        </Link>
        <Link to="/Ranking">
          <div>
            <AiFillSignal />
            Ranking
          </div>
        </Link>
        {Auth.adminIn() && (
          <Fragment>
            <Link to="/SeeQuestions">
              <div>
                <AiFillHighlight />
                Ver Preguntas
              </div>
            </Link>
            <Link to="/AddQuestion">
              <div>
                <AiFillEdit />
                Agregar Preguntas
              </div>
            </Link>
          </Fragment>
        )}
      </Container>
    </Fragment>
  );
};

export default Welcome;
