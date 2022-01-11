import React from "react";
import { Container } from "./style";
import { BsFillAwardFill } from "react-icons/bs";

const PointBox = (props) => {
  const { points } = props;
  return (
    <Container>
      <BsFillAwardFill />
      {points}
    </Container>
  );
};

export default PointBox;
