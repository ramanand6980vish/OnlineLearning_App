import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Data:", formData);
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" }); // clear form
  };

  return (
    <div className="container py-5">
      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">Contact Us</h1>
        <p className="text-muted fs-5">
          Have questions or need help? Get in touch with us.
        </p>
      </div>

      <div className="row g-4">
        {/* Contact Form */}
        <div className="col-md-7">
          <div className="card shadow-sm p-4 border-0">
            <h4 className="mb-4 text-secondary">Send Us a Message</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>

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

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="form-control"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="col-md-5">
          <div className="card shadow-sm p-4 border-0 h-100">
            <h4 className="mb-4 text-secondary">Get in Touch</h4>
            <p>
              <strong>Email:</strong> support@edulearn.com
            </p>
            <p>
              <strong>Phone:</strong> +91 90608 43210
            </p>
            <p>
              <strong>Address:</strong> EduLearn Pvt. Ltd., Phagwara, Punjab,
              India
            </p>
            <hr />
            <p className="text-muted">
              Our support team is available 24/7 to assist you with any
              questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
