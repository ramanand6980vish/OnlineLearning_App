import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router";
import { useAuth } from "./AuthContext";
import { useEffect, useState } from "react";



export default function TDashboard() {


  const navigate = useNavigate();
  const { isSuccess, setIsSuccess } = useAuth();
  // const { isSuccess, setIsSuccess, role } = useAuth(); // ✅ get role
  const [role, setRole] = useState("");

  useEffect(() => {
    const storedRole = localStorage.getItem("userRole");
    if (storedRole) setRole(storedRole)
  }, [])
  console.log('role: ', role);


  const handleLogout = () => {
    setTimeout(() => {
      setIsSuccess(false);
      localStorage.removeItem("IsSuccess");
      navigate("/signin");
    }, 1000);
  }
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      {/* <div
        className="bg-dark text-white p-3"
        style={{ width: "250px", minHeight: "100vh" }}
      >
        <h4 className="text-center mb-4">{role}  Panel</h4>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">
              📊 Dashboard    
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">
              👩‍🎓 Students
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">
              📚 Courses
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">
              📝 Assignments
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              ⚙ Settings
            </a>
          </li>
        </ul>
      </div> */}

      {/* Main Content */}
      <div className="flex-grow-1 bg-light">
        {/* Topbar */}
        <nav className="navbar navbar-light bg-white shadow-sm px-4">
          <span className="navbar-brand mb-0 h5">Welcome, Teacher 👋</span>
          <button onClick={handleLogout} className="btn btn-outline-danger btn-sm">Logout</button>
        </nav>

        {/* Dashboard Content */}
        <div className="container py-4">
          <h2 className="mb-4">Dashboard Overview</h2>

          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="card shadow-sm p-3">
                <h5>Total Students</h5>
                <p className="fs-3 fw-bold text-primary">120</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="card shadow-sm p-3">
                <h5>Active Courses</h5>
                <p className="fs-3 fw-bold text-success">8</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="card shadow-sm p-3">
                <h5>Pending Assignments</h5>
                <p className="fs-3 fw-bold text-danger">15</p>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="card shadow-sm p-3 mt-4">
            <h5 className="mb-3">Recent Activity</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">📌 New student registered: Rishu Kumar</li>
              <li className="list-group-item">📌 New student registered: Ramanand Vishwakarma</li>
              <li className="list-group-item">📌 Assignment submitted in Math</li>
              <li className="list-group-item">📌 Course "Science Basics" updated</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
