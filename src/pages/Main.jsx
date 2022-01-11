import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Welcome from "../components/Welcome";
import SignOrLog from "../components/SignOrLog";
import AuthService from "../AuthService";
import { useNavigate } from "react-router-dom";
import { Fragment, useState } from "react/cjs/react.development";

const Main = () => {
  const Auth = new AuthService();
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  const handleLogout = () => {
    Auth.logout();
    navigate("/login");
  };

  // useEffect(() => {
  //   if (!Auth.loggedIn()) {
  //     navigate("/login");
  //   } else {
  //     try {
  //       const profile = Auth.getProfile();
  //       setUser(profile);
  //     } catch (err) {
  //       Auth.logout();
  //       navigate("/login");
  //     }
  //   }
  // }, []);

  return <Layout>{Auth.loggedIn() ? <Welcome /> : <SignOrLog />}</Layout>;
};

export default Main;
