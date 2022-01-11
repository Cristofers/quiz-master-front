import React, { useState, useEffect } from "react";
import {
  Container,
  AnswerContainer,
  AnswerButton,
  QuestionContainer,
  GoBack,
} from "./style";
import { AiOutlineBackward } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PointBox from "../PointBox";

const Index = (props) => {
  const { data, verifyAnswer, points } = props;
  const [answersToShow, setAnswersToShow] = useState([]);

  useEffect(() => {
    if (data) {
      const answers2 = [...data.Answers];
      answers2.sort(() => Math.random() - 0.5);
      setAnswersToShow(answers2);
    } else {
      Swal.fire("¡Juego finalizado, no hay mas preguntas!");
    }
  }, [data]);

  return (
    <Container image={data.ImageUrl ? data.ImageUrl : "#"}>
      <Link to="/">
        <GoBack>
          <AiOutlineBackward />
        </GoBack>
      </Link>
      <PointBox points={points} />
      <QuestionContainer>
        <div>{data.Content ? <p>{data.Content}</p> : <p>Loading...</p>}</div>
      </QuestionContainer>
      <AnswerContainer>
        {answersToShow.map((content, i) => (
          <AnswerButton onClick={() => verifyAnswer(content)} key={i}>
            {content}
          </AnswerButton>
        ))}
      </AnswerContainer>
    </Container>
  );
};

export default Index;
