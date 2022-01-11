import React from "react";
import QuestionCard from "../QuestionCard";
import { CardContainer } from "./style";

const QuestionContainer = ({ onSubmit, questions }) => {
  return (
    <CardContainer>
      {questions.map((question) => (
        <QuestionCard key={question.ID} data={question} />
      ))}
    </CardContainer>
  );
};

export default QuestionContainer;
