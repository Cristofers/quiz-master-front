import React, { useState, useEffect } from "react";
import { Container } from "./style";
import AuthService from "../../AuthService";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [data, setData] = useState({});
  const Auth = new AuthService();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    Auth.register(data.email, data.password, data.username)
      .then((res) => {
        if (Auth.loggedIn()) navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <Container>
      <div className="card">
        <h1>Registrarse</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            className="form-item"
            placeholder="Email goes here..."
            name="email"
            type="text"
            autoComplete="off"
            onChange={handleChange}
          />
          <input
            className="form-item"
            placeholder="User name goes here..."
            name="username"
            type="text"
            autoComplete="off"
            onChange={handleChange}
          />
          <input
            className="form-item"
            placeholder="Password goes here..."
            name="password"
            type="password"
            onChange={handleChange}
          />
          <input className="form-submit" value="SIGNUP" type="submit" />
          <Link to="/Login">
            ¿Ya tienes una cuenta? por favor inicia secion
          </Link>
        </form>
      </div>
    </Container>
  );
};

export default SignUp;
