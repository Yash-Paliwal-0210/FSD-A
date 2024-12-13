import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const DashBoard = ({ regDash }) => {
  return (
    <div className="container mt-5">
      <div className="jumbotron text-white" style={{ backgroundColor: "lightblue" }}>
        <div className="row">
          <div className="col-sm-12">
            <h1 className="text-center">User Dashboard</h1>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-8">
            <h2>Welcome, {regDash.name}</h2>
          </div>
          <div className="col-sm-4 text-end">
            <Link to="/logout" className="btn btn-danger btn-lg">
              Logout
            </Link>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm-12">
            <p>Your Login Email: <strong>{regDash.email}</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
