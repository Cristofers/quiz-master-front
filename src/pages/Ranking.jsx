import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import RankingList from "../components/Ranking";
import AuthService from "../AuthService";

const Ranking = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Auth.fetch("http://localhost:3001/api/score").then((res) => {
      res.sort((value1, value2) => {
        if (parseInt(value2.Score) < parseInt(value1.Score)) {
          return parseInt(value2.Score) - parseInt(value1.Score);
        }
      });
      setData(res);
    }, []);
  }, []);

  const Auth = new AuthService();
  return (
    <Layout>
      <RankingList data={data} />
    </Layout>
  );
};

export default Ranking;
