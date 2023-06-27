import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

 /*  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }; */

  return (
    <div className="form-container">
      <div>
        <img src="/logo.png" alt="logo" />
      </div>
      <h2>Login</h2>
      <form className="login-form" /* onSubmit={handleSubmit} */>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="your.email@gmail.com"
          id="email"
          name="email"
        ></input>
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="*********"
          id="password"
          name="password"
        ></input>
        <button type="submit">Log in</button>
      </form>
      <button className="l-btn" onClick={() => props.onFormSwitch("Register")}>
        {" "}
        Join us. Register here!{" "}
      </button>
    </div>
  );
};
