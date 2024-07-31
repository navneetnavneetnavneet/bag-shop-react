import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./components/register/Register.jsx";
import Login from "./components/login/Login.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
