import React, { Fragment, useState, useEffect } from "react";
import AnswerQuestion from "../components/AnswerQuestion";
import AuthService from "../AuthService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";

const Play = () => {
  const Auth = new AuthService();
  const navigate = useNavigate();
  const [points, setPoitns] = useState(0);

  const [questionList, setQuestionList] = useState([
    {
      Content: "pregunta de prueba....",
      Answers: ["respuesta 1", "respuesta 2"],
      ImageUrl: "#",
    },
  ]);

  const [question, setQuestion] = useState({
    Answers: ["", ""],
    Content: "Loading...",
    ImageUrl: "#",
  });

  const verifyAnswer = (answerSelected) => {
    let newQuestionList = [...questionList];
    newQuestionList.sort(() => Math.random() - 0.5);
    setQuestion(newQuestionList.shift());
    setQuestionList(newQuestionList);

    if (answerSelected == question.Answers[0]) {
      setPoitns(points + 10);
    } else {
      setPoitns(points - 10);
    }
    updatePoints();

    if (questionList.length <= 0) {
      Swal.fire("No tenemos mas preguntas");
      navigate("/");
    }
  };

  const updatePoints = () => {
    Auth.fetch("http://localhost:3001/api/score", {
      method: "POST",
      body: JSON.stringify({
        Score: points,
      }),
    });

    const newUser = Auth.getProfile();
    Auth.setProfile({
      ...newUser,
      score: points,
    });
  };

  useEffect(() => {
    Auth.fetch("http://localhost:3001/api/question").then((res) => {
      if (res.length > 0) {
        let questionToShowFirst = [...res];
        questionToShowFirst.sort(() => Math.random() - 0.5);
        setQuestion(questionToShowFirst.shift());
        setQuestionList(questionToShowFirst);
      }
    });

    setPoitns(parseInt(Auth.getProfile().score));
  }, []);

  useEffect(() => {
    if (!Auth.loggedIn()) {
      navigate("/login");
    } else {
      try {
        const profile = Auth.getProfile();
      } catch (err) {
        Auth.logout();
        navigate("/login");
      }
    }
  }, []);

  return (
    <Fragment>
      <AnswerQuestion
        data={question}
        points={points}
        verifyAnswer={verifyAnswer}
      />
    </Fragment>
  );
};

export default Play;
