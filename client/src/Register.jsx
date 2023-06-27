import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Register = (props) => {

  const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData()

    for(let i = 0; i < e.target.elements.length -1 ; i++)
    {
      formData.append(e.target.elements[i].name, e.target.elements[i].value)
    }

    try{
       await axios.post(`${process.env.REACT_APP_BE_URL}/user/signup`, formData)
      e.target.reset()
      navigate("/login")
    }
    catch(err){
      setErrorMessage(err.request.response)
    }
  } 


  return (
    <div className="form-container">
      <div>
        <img src="/logo.png" alt="logo" />
      </div>
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label> Name</label>
        <input
         type="text"
          id="name"
          name="name"
          placeholder="full name"
          required
        ></input>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="your.email@gmail.com"
          id="email"
          name="email"
          required
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="*********"
          id="password"
          name="password"
          required
        ></input>
        <button type="submit">Register</button>
      </form>
      {
        errorMessage 
          && <p style={{color:'red'}}>{errorMessage}</p>          
      }
      <button className="r-btn" onClick={() => props.onFormSwitch("login")}>
        {" "}
        Already have an account? Login here.{" "}
      </button>
    </div>
  );
};
