import React from "react";
import { Card, CardImage } from "./style";
import { Link } from "react-router-dom";

const QuestionData = ({ data }) => {
  return (
    <Link to={`/EditQuestion/${data.ID}`}>
      <Card>
        <div className="card__header">
          {data.ImageUrl != "" && (
            <CardImage
              src={data.ImageUrl}
              alt="card__image"
              className="card__image"
            />
          )}
        </div>
        <div className="card__body">
          <h4>{data.Content}</h4>
          {/* <p></p> */}
        </div>
        {/* <div className="card__answers"></div> */}
      </Card>
    </Link>
  );
};

export default QuestionData;
