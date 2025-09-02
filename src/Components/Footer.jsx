import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-4 mt-5" style={{paddingLeft:'180px'}}>
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">EduLearn</h5>
            <p>
              EduLearn is your trusted online learning platform offering
              interactive video lectures, expert instructors, and a wide variety
              of courses for your career growth.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="/courses" className="text-light text-decoration-none">
                  Courses
                </a>
              </li>
              <li>
                <a href="/contact" className="text-light text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Contact Us</h5>
            <p>Email: support@edulearn.com</p>
            <p>Phone: +91 9876543210</p>
            <p>Location: Phagwara, Punjab, India</p>
          </div>
        </div>

        <hr className="bg-light" />
        <p className="text-center mb-0">
          © {new Date().getFullYear()} EduLearn | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
