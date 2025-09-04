import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "./AuthContext";
import googleIcon from "../Assets/goole-icon.jpg";
import gmailIcon from  '../Assets/gmail-icon.png';
 
export default function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const { isSuccess, setIsSuccess, setRole } = useAuth();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email === "test@gmail.com" && formData.password === "123456") {
      setMessage("Login Successful ✅");
      setIsSuccess(true);
      setRole("Student"); // ✅ set role to student

      setTimeout(() => navigate("/dashboard"), 2000);
    }
    else if (formData.email === "teacher@gmail.com" && formData.password === "123456") {
      setMessage("Login Successful ✅");
      setIsSuccess(true);

      setRole("Teacher"); 

      setTimeout(() => navigate("/tdashboard"), 2000);
    }
    else if (formData.email === "admin@gmail.com" && formData.password === "123456") {
      setMessage("Login Successful ✅");
      setIsSuccess(true);

      setRole("Admin");

      setTimeout(() => navigate("/admindashboard"), 2000);
    }
    else {
      setMessage("Invalid email or password ❌");
      setIsSuccess(false);

      // Hide message after 2 seconds
      setTimeout(() => setMessage(""), 2000);
    }
  };

  const alternateLogin = {
    textAlign:'center',
    alignContent:'center',
    borderRadius:'8px',
    border:'1px solid',
    height:'34px',
    marginBottom:'5px',
    cursor : 'pointer',
    
  }

  const iconImg = {
    height:'19px',
  }

  const handleGoogle = () => {
    alert("Google login clicked\nThis feature is under development");
  }

  const handleEmail = () => {
    alert("Gmail login clicked\nThis feature is under development");
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light position-relative">

      {/* Notification */}
      {message && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            left: "55%",
            transform: "translateX(-50%)",
            padding: "15px 25px",
            borderRadius: "12px",
            backgroundColor: isSuccess ? "#28a745" : "#dc3545",
            color: "white",
            fontWeight: "bold",
            boxShadow: "0px 4px 15px rgba(0,0,0,0.3)",
            textAlign: "center",
            zIndex: 1050,
            minWidth: "300px",
          }}
        >
          {/* Displaying  notification here */}
          {message}     
        </div>
      )}

      <div className="card shadow-lg p-4" style={{ width: "100%", maxWidth: "400px", position: "relative" }}>
        <h2 className="text-center text-primary mb-4">Sign In</h2>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Sign In
          </button>
        </form>

        <p className="text-center mt-3">
          Don’t have an account?{" "}
          <a href="/signup" className="text-decoration-none">
            Sign Up
          </a>
        </p>
        <div style={{textAlign:'center', fontWeight:'bold'}}>OR
          <div onClick={handleGoogle} style={alternateLogin}> <img src={googleIcon} style={iconImg} /> Login with Google</div>
          <div onClick={handleEmail} style={alternateLogin}><img src={gmailIcon} style={iconImg} />Login with Gmail</div>
        </div>

        
      </div>
    </div>
  );
}
