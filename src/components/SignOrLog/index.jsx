import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";
import { AiOutlineUsergroupAdd, AiOutlineUser } from "react-icons/ai";

const SignOrLog = () => (
  <Container>
    <Link to="/SignUp">
      <div className="signUp">
        <AiOutlineUsergroupAdd />
        signUp
      </div>
    </Link>
    <Link to="/Login">
      <div className="logUp">
        <AiOutlineUser />
        Login
      </div>
    </Link>
  </Container>
);

export default SignOrLog;
