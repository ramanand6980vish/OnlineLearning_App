import { Link, Outlet } from "react-router";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { isSuccess, setIsSuccess, role } = useAuth(); // ✅ include role
  const navigate = useNavigate();

  const handleLogout = () => {
    setTimeout(() => {
      setIsSuccess(false);
      localStorage.removeItem("IsSuccess");
      localStorage.removeItem("role"); // remove role on logout
      navigate("/signin");
    }, 1000);
  };

  return (
    <div>
      <div className="d-flex">
        {/* Sidebar */}
        {!isSuccess ? (
          <div className="bg-info text-center text-white fw-bold fs-4  top-0" style={{ width: "180px", height: "100vh", borderRadius: "3px" }}>
            <div className="d-flex flex-column pt-3">
              <Link to="/" className="text-decoration-none text-dark py-2 border-bottom border-primary">Home</Link>
              <Link to="/about" className="text-decoration-none text-dark py-2 border-bottom border-primary">About</Link>
              <Link to="/contact" className="text-decoration-none text-dark py-2 border-bottom border-primary">Contact Us</Link>
              <Link to="/courses" className="text-decoration-none text-dark py-2">Courses</Link>
            </div>
          </div>
        ) : role === "Student" ? (
          <div className="bg-info text-white p-3 overflow-auto" style={{ width: "180px", height: "100vh" }}>
            <h4 className="text-center mb-4">Dashboard ({role})</h4>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link text-white">Dashboard</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link text-white">My Courses</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link text-white">Profile</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link text-white">Live Classes</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link text-white">Settings</a></li>
              <li className="nav-item mt-4">
                <button onClick={handleLogout} className="btn btn-danger w-100">Logout</button>
              </li>
            </ul>
          </div>
        )
        : role === "Teacher" ? (
          <div className="bg-info text-white p-3 overflow-auto" style={{ width: "180px", height: "100vh" }}>
            <h4 className="text-center mb-4">Dashboard ({role})</h4>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link text-white">📊Dashboard</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link text-white">👩‍🎓Students</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link text-white">📚Courses</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link text-white">📝Assignments</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link text-white">⚙Settings</a></li>
              <li className="nav-item mt-4">
                <button onClick={handleLogout} className="btn btn-danger w-100">Logout</button>
              </li>
            </ul>
          </div>
        )
        
        : role === "Admin" ? (
          <div className="bg-info text-white p-3 overflow-auto" style={{ width: "180px", height: "100vh" }}>
            <h4 className="text-center mb-4">Dashboard ({role})</h4>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link text-white">Dashboard</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link text-white">Manage Users</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link text-white">Reports</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link text-white">Settings</a></li>
              <li className="nav-item mt-4">
                <button onClick={handleLogout} className="btn btn-danger w-100">Logout</button>
              </li>
            </ul>
          </div>
        ) : null}

        {/* Sign In Button */}
        {!isSuccess && (
          <div className="position-fixed top-0 end-0 m-3" style={{ zIndex: 1050 }}>
            <Link to="/signin" className="btn btn-outline-primary rounded-pill shadow px-4 fw-bold" style={{ backgroundColor: "green", color: "white" }}>
              Sign In
            </Link>
          </div> 
        )}

        {/* Body Area */}
        <div className="flex-grow-1 p-3" style={{minHeight: "100vh", paddingLeft: isSuccess?"0px":"180px" }}>
          <Outlet />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
