import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Play from "./pages/Play";
import Main from "./pages/Main";
import AddQuestion from "./pages/AddQuestion";
import EditQuestion from "./pages/EditQuestion";
import Login from "./pages/Login";
import Ranking from "./pages/Ranking";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Play" element={<Play />} />
        <Route path="/Ranking" element={<Ranking />} />
        <Route path="/AddQuestion" element={<AddQuestion />} />
        <Route
          path="/EditQuestion/:questionID"
          element={<AddQuestion editMode={true} />}
        />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SeeQuestions" element={<EditQuestion />} />
      </Routes>
    </Router>
  );
}

export default App;
