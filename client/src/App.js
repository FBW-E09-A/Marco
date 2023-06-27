import React, { useState} from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./Login";
import { Register } from "./Register";


function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      <Routes>
        {currentForm === "login" ? (
          <Route path="/login" elements={<Login onFormSwitch={toggleForm} />} />
        ) : (
          <Route
            path="/register"
            elements={<Register onFormSwitch={toggleForm} />}
          />
        )}
      </Routes>
    </div>
  );
}

export default App;
