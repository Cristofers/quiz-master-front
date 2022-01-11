import React from "react";
import SideBar from "../SideBar";
import { Container } from "./style";

const Layout = (props) => {
  const { children, a } = props;
  return (
    <Container>
      <SideBar />
      <div className="content">{children}</div>
    </Container>
  );
};

export default Layout;
