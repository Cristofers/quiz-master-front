import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import QuestionContainer from "../components/QuestionContainer/Index";
import AuthService from "../AuthService";

const EditQuestion = () => {
  const Auth = new AuthService();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchig = () => {
      Auth.fetch("http://localhost:3001/api/question").then((res) =>
        setData(res)
      );
    };
    fetchig();
  }, []);
  return (
    <Layout>
      <QuestionContainer questions={data} />
    </Layout>
  );
};

export default EditQuestion;
