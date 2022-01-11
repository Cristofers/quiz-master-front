import React, { useEffect, useState } from "react";
import { useInputValue } from "../../hooks/iseInputValue";
import { Container, Form, FormContainer, FormTitle } from "./style";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddQuestion = ({ onSubmit, onUpdate, onDelete, data, editMode }) => {
  const question = useInputValue("");
  const image = useInputValue("");
  const answer1 = useInputValue("");
  const answer2 = useInputValue("");
  const answer3 = useInputValue("");
  const answer4 = useInputValue("");
  const navigate = new useNavigate();

  const saveHanddle = (e) => {
    e.preventdefault();
    const answers = [answer1.value, answer2.value];
    if (answer3.value != "") {
      answers.push(answer3.value);
    }
    if (answer4.value != "") {
      answers.push(answer4.value);
    }
    onSubmit({
      Content: question.value,
      ImageUrl: image.value,
      Answers: answers,
    });
  };

  const updateHanddle = (e) => {
    e.preventDefault();
    const answers = [answer1.value, answer2.value];
    if (answer3.value != "") {
      answers.push(answer3.value);
    }
    if (answer4.value != "") {
      answers.push(answer4.value);
    }
    onUpdate(data.ID, {
      Content: question.value,
      ImageUrl: image.value,
      Answers: answers,
    });
  };

  const deleteHandle = () => {
    onDelete(data.ID);
    Swal.fire("Eliminado Correctamente");
    navigate("/");
  };

  useEffect(() => {
    if (data) {
      question.setForceValue(data.Content);
      image.setForceValue(data.ImageUrl);

      if (data.Answers) {
        answer1.setForceValue(data.Answers[0]);
        answer2.setForceValue(data.Answers[1]);
        if (data.Answers.length > 1) {
          answer3.setForceValue(data.Answers[2]);
        }
        if (data.Answers.length > 2) {
          answer4.setForceValue(data.Answers[3]);
        }
      }
    }
    return () => {
      question.setForceValue("");
      image.setForceValue("");
      answer1.setForceValue("");
      answer2.setForceValue("");
      answer3.setForceValue("");
      answer4.setForceValue("");
    };
  }, [data]);

  return (
    <Container image={image.value}>
      <FormContainer>
        <FormTitle>Agregar pregunta</FormTitle>
        <Form>
          <label>
            Pregunta:
            <input
              type="text"
              name="question"
              autoComplete="off"
              required
              value={question.value}
              onChange={(e) => question.onChange(e)}
            />
          </label>
          <label>
            Imagen:
            <input
              type="url"
              name="image"
              autoComplete="off"
              required
              value={image.value}
              onChange={(e) => image.onChange(e)}
            />
          </label>
          <label>
            Respuesta Correcta:
            <input
              type="text"
              name="answer1"
              autoComplete="off"
              required
              value={answer1.value}
              onChange={(e) => answer1.onChange(e)}
            />
          </label>
          <label>
            Respuesta 2:
            <input
              type="text"
              name="answer2"
              autoComplete="off"
              required
              value={answer2.value}
              onChange={(e) => answer2.onChange(e)}
            />
          </label>
          <label>
            Respuesta 3:
            <input
              type="text"
              name="answer3"
              autoComplete="off"
              value={answer3.value}
              onChange={(e) => answer3.onChange(e)}
            />
          </label>
          <label>
            Respuesta 4:
            <input
              type="text"
              name="answer4"
              autoComplete="off"
              value={answer4.value}
              onChange={(e) => answer4.onChange(e)}
            />
          </label>
          {editMode ? (
            <div className="button_container">
              <button onClick={(e) => updateHanddle(e)}>Guardar Cambios</button>
              <button onClick={() => deleteHandle()}>Eliminar</button>
            </div>
          ) : (
            <button onClick={(e) => saveHanddle(e)}>Guardar</button>
          )}
        </Form>
      </FormContainer>
    </Container>
  );
};

export default AddQuestion;
