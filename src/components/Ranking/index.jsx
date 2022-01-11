import React, { Fragment, useEffect, useState } from "react";
import { RankingContainer, RankingList } from "./style";
import AuthService from "../../AuthService";
import PointBox from "../PointBox";

const AddQuestion = ({ data }) => {
  const [points, setPoitns] = useState(0);
  const Auth = new AuthService();

  useEffect(() => {
    setPoitns(parseInt(Auth.getProfile().score));
  }, []);
  return (
    <Fragment>
      <PointBox points={points} />
      <RankingContainer>
        <h1>Most active Players</h1>
        <RankingList>
          {data.map((player) => (
            <li key={player.ID}>
              <mark>{player.Username}</mark>
              <small>{player.Score}</small>
            </li>
          ))}
        </RankingList>
      </RankingContainer>
    </Fragment>
  );
};

export default AddQuestion;
