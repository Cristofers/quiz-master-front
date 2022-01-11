import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import QuestionForm from "../components/QuestionForm";
import AuthService from "../AuthService";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";

const AddQuestion = ({ editMode }) => {
  const { questionID } = useParams();
  const Auth = new AuthService();
  const navigate = new useNavigate();
  const [data, setData] = useState();

  const saveData = (data) => {
    Auth.fetch("http://localhost:3001/api/question", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => {
        Swal.fire("Guardado Correctamente");
        navigate("/SeeQuestions");
      })
      .catch((err) => alert("Parece ser que hubo un problema"));
  };

  const deleteHandle = (id) => {
    Auth.fetch(`http://localhost:3001/api/question/${id}`, {
      method: "DELETE",
    }).then((res) => {
      navigate("/SeeQuestions");
      Swal.fire("Eliminado correctamente");
      setData(res);
    });
  };

  const updateHanddle = (id, data) => {
    Auth.fetch(`http://localhost:3001/api/question/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    }).then((res) => {
      Swal.fire("¡Los cambios fueron aplicados!");
      navigate("/SeeQuestions");
      setData(res);
    });
  };

  useEffect(() => {
    if (questionID) {
      Auth.fetch(`http://localhost:3001/api/question/${questionID}`).then(
        (res) => setData(res)
      );
    }
  }, []);

  return (
    <Layout>
      <QuestionForm
        onSubmit={saveData}
        onDelete={deleteHandle}
        onUpdate={updateHanddle}
        data={data}
        editMode={editMode}
      />
    </Layout>
  );
};

export default AddQuestion;
