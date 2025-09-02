import "bootstrap/dist/css/bootstrap.min.css";

export default function About() {
  return (
    <div className="container py-5">
      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">About Us</h1>
        <p className="text-muted fs-5 mt-3">
          Welcome to <strong>EduLearn</strong>, your trusted platform for online learning.  
          We provide high-quality courses, interactive video lectures, and expert mentorship 
          to help you achieve your career and academic goals.
        </p>
      </div>

      {/* Features Section */}
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-body text-center">
              <i className="bi bi-play-circle text-primary fs-1 mb-3"></i>
              <h5 className="card-title">Video Lectures</h5>
              <p className="card-text text-muted">
                Learn anytime, anywhere with our structured video lectures designed by professionals.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-body text-center">
              <i className="bi bi-people text-success fs-1 mb-3"></i>
              <h5 className="card-title">Expert Teachers</h5>
              <p className="card-text text-muted">
                Our well-trained and experienced teachers ensure high-quality education tailored for you.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-body text-center">
              <i className="bi bi-easel text-warning fs-1 mb-3"></i>
              <h5 className="card-title">Demo Classes</h5>
              <p className="card-text text-muted">
                Try our free demo classes to experience interactive learning before enrolling.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-body text-center">
              <i className="bi bi-journal-bookmark text-danger fs-1 mb-3"></i>
              <h5 className="card-title">Various Courses</h5>
              <p className="card-text text-muted">
                From programming to business skills, we offer a wide variety of courses to choose from.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-body text-center">
              <i className="bi bi-laptop text-info fs-1 mb-3"></i>
              <h5 className="card-title">Interactive Learning</h5>
              <p className="card-text text-muted">
                Learn through quizzes, assignments, and real-world projects with expert feedback.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-body text-center">
              <i className="bi bi-award text-secondary fs-1 mb-3"></i>
              <h5 className="card-title">Career Growth</h5>
              <p className="card-text text-muted">
                Boost your skills, earn certifications, and take the next step in your career.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-5">
        <h4 className="fw-bold">Start Learning Today!</h4>
        <p className="text-muted">Join thousands of students already building their future with EduLearn.</p>
        <a href="/courses" className="btn btn-primary btn-lg mt-2">
          Explore Courses
        </a>
      </div>
    </div>
  );
}
