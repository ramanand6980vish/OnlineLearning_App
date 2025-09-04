import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import googleIcon from "../Assets/goole-icon.jpg";
import gmailIcon from "../Assets/gmail-icon.png";

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Sign Up Data:", formData);

    const phoneRegex = /^\d+$/;
    if (
      !phoneRegex.test(formData.phoneNumber) ||
      formData.phoneNumber.length < 10
    ) {
      alert("Please enter a valid phone number!");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }
  };

  const alternateLogin = {
    textAlign: "center",
    alignContent: "center",
    borderRadius: "8px",
    border: "1px solid",
    height: "38px",
    marginBottom: "10px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
  };

  const iconImg = {
    height: "19px",
  };

  const handleGoogle = () => {
    alert("Google login clicked\nThis feature is under development");
  };

 

  return (
    <div className="d-flex justify-content-center align-items-center pt-5 bg-light">
      <div
        className="card shadow-lg p-4"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h2 className="text-center text-success mb-4">Sign Up</h2>

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Enter your full name"
            />
          </div>

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

          {/* Phone Number */}
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Enter your Phone Number"
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
              placeholder="Create a password"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Re-enter your password"
            />
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-success w-100 mb-3">
            Sign Up
          </button>
        </form>

        <p className="text-center mb-3">
          Already have an account?{" "}
          <a href="/signin" className="text-decoration-none">
            Sign In
          </a>
        </p>

        {/* OR section */}
        <div className="text-center fw-bold mb-2">OR</div>

        {/* Alternate login */}
        <div onClick={handleGoogle} style={alternateLogin}>
          <img src={googleIcon} alt="Google" style={iconImg} /> SignUp with Google
        </div>
       
      </div>
    </div>
  );
}
