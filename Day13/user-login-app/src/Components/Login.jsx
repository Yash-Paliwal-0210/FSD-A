import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Login = ({ regLogin }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();


  const handlelogin = (e) => {
    e.preventDefault();

    if (regLogin?.email === email && regLogin?.password === password) {
      alert("Login Successful!");
      navigateTo("/dashboard"); 
    } else {
      alert("Login Failed! Please check your credentials.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Login</h2>
      <form onSubmit={handlelogin}>

        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

   
        <div className="form-group mt-3">
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="text-center mt-4">
          <button type="submit" className="btn btn-success">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
