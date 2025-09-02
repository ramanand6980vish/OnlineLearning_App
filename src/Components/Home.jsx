import pic1 from "../Assets/bg3.jpg";
import cor1 from "../Assets/core1.jpg";
import cor2 from "../Assets/core2.jpg";
import cor3 from "../Assets/core3.jpg";
import cor4 from "../Assets/core4.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const heroStyle = {
  backgroundImage: `url(${pic1})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "20px",
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section style={heroStyle}>
        <h1 className="fw-bold display-3">Welcome to EduLearn</h1>
        <p className="lead fs-4">
          Learn Anytime, Anywhere – With Expert Teachers & Interactive Courses
        </p>
        <a href="/courses" className="btn btn-primary btn-lg mt-3">
          Explore Courses
        </a>
      </section>

      {/* Carousel */}
      <div
        id="heroCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img
              src="./../Assets/bg2.jpg"
              className="d-block w-100"
              alt="Learn from anywhere"
              style={{ maxHeight: "70vh", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
              {/* <h3 className="fw-bold">Learn Anytime, Anywhere</h3> */}
              <p>High-quality video lectures from expert instructors.</p>
              <a href="/courses" className="btn btn-primary btn-sm">
                Explore Courses
              </a>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="5000">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600"
              className="d-block w-100"
              alt="Hands-on projects"
              style={{ maxHeight: "70vh", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h3 className="fw-bold">Hands-On Projects</h3>
              <p>Practice with real-world assignments and challenges.</p>
              <a href="/courses" className="btn btn-outline-light btn-sm">
                Get Started
              </a>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="5000">
            <img
              src={cor1}
              className="d-block w-100"
              alt="Community & mentors"
              style={{ maxHeight: "70vh", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h3 className="fw-bold">Mentors & Community</h3>
              <p>Get guidance from experienced teachers and peers.</p>
              <a href="/contact" className="btn btn-success btn-sm">
                Talk to Us
              </a>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* End Carousel */}

      {/* Highlights */}
      <section className="container text-center py-5">
        <h2 className="fw-bold mb-4">Why Choose Us?</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow border-0 p-4 h-100">
              <h4 className="fw-bold text-primary">🎥 Video Lectures</h4>
              <p>High-quality lectures that make learning easy and engaging.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow border-0 p-4 h-100">
              <h4 className="fw-bold text-success">👩‍🏫 Expert Teachers</h4>
              <p>Learn from industry professionals and experienced mentors.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow border-0 p-4 h-100">
              <h4 className="fw-bold text-danger">📚 Demo Classes</h4>
              <p>Free demo sessions to help you choose the right course.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Popular Courses</h2>
          <div className="row g-4">
            {[
              {
                title: "Full-Stack Web Development",
                desc: "Learn HTML, CSS, JavaScript, React & Node.js",
              },
              {
                title: "Data Science",
                desc: "Master Python, Machine Learning, and AI concepts.",
              },
              {
                title: "Digital Marketing",
                desc: "SEO, SEM, Social Media & Content Marketing.",
              },
              {
                title: "App Development",
                desc: "Build Android & iOS apps using React Native & Flutter.",
              },
            ].map((course, i) => (
              <div className="col-md-3" key={i}>
                <div className="card shadow border-0 h-100">
                  <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text">{course.desc}</p>
                    <a href="/courses" className="btn btn-outline-primary">
                      Enroll Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
    </div>
  );
}
