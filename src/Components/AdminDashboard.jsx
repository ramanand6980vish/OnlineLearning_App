import React from "react";
import { useAuth } from "./AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AdminDashboard() {
  const { role } = useAuth();

  if (role !== "Admin") {
    return <div className="text-center mt-5">Access Denied</div>;
  }

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      {/* <div
        className="bg-dark text-white p-3"
        style={{ width: "220px", minHeight: "100vh" }}
      >
        <h4 className="text-center mb-4">{role} Panel</h4>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">
              Dashboard
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">
              Manage Users
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">
              Reports
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">
              Settings
            </a>
          </li>
        </ul>
      </div> */}

      {/* Main Content */}
      <div className="flex-grow-1 p-4" style={{ backgroundColor: "#f8f9fa" }}>
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Welcome, {role}</h2>
          <button className="btn btn-outline-primary">Notifications</button>
        </div>

        {/* Stats Cards */}
        <div className="row mb-4">
          <div className="col-md-3 mb-3">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title">Total Users</h5>
                <h3>1,245</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title">Active Courses</h5>
                <h3>56</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title">Teachers</h5>
                <h3>78</h3>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <h5 className="card-title">Pending Requests</h5>
                <h3 className="text-warning">12</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="card shadow-sm border-0">
          <div className="card-header bg-primary text-white">
            Manage Users
          </div>
          <div className="card-body p-0">
            <table className="table mb-0">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>john@example.com</td>
                  <td>Student</td>
                  <td>Active</td>
                  <td>
                    <button className="btn btn-sm btn-warning me-2">Edit</button>
                    <button className="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jane Smith</td>
                  <td>jane@example.com</td>
                  <td>Teacher</td>
                  <td>Active</td>
                  <td>
                    <button className="btn btn-sm btn-warning me-2">Edit</button>
                    <button className="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
                {/* Add more users dynamically */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
