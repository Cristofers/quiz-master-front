import React, { useState, useEffect } from "react";
import { Container } from "./style";
import AuthService from "../../AuthService";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
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

    Auth.login(data.username, data.password)
      .then((res) => {
        if (Auth.loggedIn()) navigate("/");
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    if (Auth.loggedIn()) {
      navigate("/");
    }
  }, []);

  return (
    <Container>
      <div className="card">
        <h1>Login</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            className="form-item"
            placeholder="Username goes here..."
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
          <input className="form-submit" value="LOGIN" type="submit" />
          <Link to="/SignUp">¿No tienes una cuenta? por favor registrate</Link>
        </form>
      </div>
    </Container>
  );
};

export default Login;
