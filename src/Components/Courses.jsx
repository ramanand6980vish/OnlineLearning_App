import "bootstrap/dist/css/bootstrap.min.css";
import web from '../Assets/web.jpg';
import python from '../Assets/python.jpg';
import java from '../Assets/java_card.webp';
import data from '../Assets/datasciene_card.webp';
import java1 from '../Assets/Java.webp';
import sql from '../Assets/sql.png';
import block from '../Assets/Blockchain-Tutorial.jpg';
import AI from '../Assets/AI.webp';
import android from '../Assets/android.webp';

export default function Courses() {
  // Sample course data (20+ courses)
  const courses = [
    { title: "Full-Stack Web Development", desc: "Learn HTML, CSS, JS, React, Node.js & more.", img: web },
    { title: "Python for Beginners", desc: "Start coding with Python from scratch.", img: python },
    { title: "Data Science & Machine Learning", desc: "Hands-on with ML, Pandas, NumPy & Scikit-Learn.", img: data },
    { title: "Java Programming Masterclass", desc: "Master Java from basics to advanced concepts.", img: java1 },
    { title: "Android App Development", desc: "Build Android apps using Java & Kotlin.", img: android },
     { title: "Artificial Intelligence", desc: "Explore AI concepts with real-world projects.", img: AI },
    { title: "Blockchain & Web3", desc: "Understand blockchain, crypto, and smart contracts.", img: block },
     { title: "SQL & Databases", desc: "Work with MySQL, PostgreSQL & MSSQL.", img: sql },
       ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">Our Courses</h1>
        <p className="text-muted fs-5">Explore our wide range of professional courses designed for your career growth.</p>
      </div>

      <div className="row g-4">
        {courses.map((course, index) => (
          <div className="col-md-6 col-lg-4 col-xl-3" key={index}>
            <div className="card h-100 shadow-sm border-0">
              <img src={course.img} className="card-img-top" alt={course.title} />
              <div className="card-body text-center">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text text-muted">{course.desc}</p>
                <a href="/enroll" className="btn btn-primary btn-sm">
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
