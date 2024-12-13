import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = ({ regData }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const data = { name, email, password };


  const handleregister = (e) => {
    e.preventDefault();
    alert("Register success");
    regData(data); 
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Register</h2>


      <div className="text-muted mb-3">
        <strong>Preview:</strong> {name} {email} {password}
      </div>

      <form onSubmit={handleregister}>
      
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group mt-3">
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
