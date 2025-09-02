import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Dashboard() {
  const [user] = useState({
    name: "Ramanand Vishwakarma",
    email: "ramanand.vi2011@gmail.com",
  });

  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
        <h4 className="text-center mb-4">Dashboard</h4>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">
              Home
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">
              My Courses
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">
              Profile
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">
              Settings
            </a>
          </li>
          <li className="nav-item mt-4">
            <a href="/signin" className="btn btn-danger w-100">
              Logout
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4 bg-light overflow-auto">
        {/* Welcome Section */}
        <div className="mb-4">
          <h2 className="fw-bold">Welcome back, {user.name} 👋</h2>
          <p className="text-muted">Here’s your learning dashboard overview.</p>
        </div>

        {/* Stats Cards */}
        <div className="row g-4 mb-4">
          <div className="col-md-4">
            <div className="card shadow border-0 p-3 text-center">
              <h5 className="fw-bold">Enrolled Courses</h5>
              <p className="fs-3 text-success">5</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow border-0 p-3 text-center">
              <h5 className="fw-bold">Completed</h5>
              <p className="fs-3 text-primary">2</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow border-0 p-3 text-center">
              <h5 className="fw-bold">Pending</h5>
              <p className="fs-3 text-danger">3</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card shadow border-0 p-4">
          <h5 className="fw-bold mb-3">Recent Activity</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Completed: Java Basics Course ✅</li>
            <li className="list-group-item">Enrolled: React.js Advanced 🚀</li>
            <li className="list-group-item">Profile Updated 📌</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
