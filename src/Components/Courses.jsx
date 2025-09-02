import "bootstrap/dist/css/bootstrap.min.css";
import web from '../Assets/web.jpg';
import python from '../Assets/python.jpg';
import java from '../Assets/java_card.webp';
import data from '../Assets/datasciene_card.webp';

export default function Courses() {
  // Sample course data (20+ courses)
  const courses = [
    { title: "Full-Stack Web Development", desc: "Learn HTML, CSS, JS, React, Node.js & more.", img: web },
    { title: "Python for Beginners", desc: "Start coding with Python from scratch.", img: python },
    { title: "Data Science & Machine Learning", desc: "Hands-on with ML, Pandas, NumPy & Scikit-Learn.", img: data },
    { title: "Java Programming Masterclass", desc: "Master Java from basics to advanced concepts.", img: java },
    { title: "C++ with DSA", desc: "Deep dive into C++ and data structures.", img: "https://source.unsplash.com/400x250/?c++,coding" },
    { title: "Android App Development", desc: "Build Android apps using Java & Kotlin.", img: "https://source.unsplash.com/400x250/?android,app" },
    { title: "iOS App Development", desc: "Learn Swift & build iOS applications.", img: "https://source.unsplash.com/400x250/?ios,swift" },
    { title: "Artificial Intelligence", desc: "Explore AI concepts with real-world projects.", img: "https://source.unsplash.com/400x250/?ai,robotics" },
    { title: "Cloud Computing (AWS, Azure)", desc: "Master cloud infrastructure and services.", img: "https://source.unsplash.com/400x250/?cloud,technology" },
    { title: "Cybersecurity Basics", desc: "Learn ethical hacking & security fundamentals.", img: "https://source.unsplash.com/400x250/?cybersecurity,hacking" },
    { title: "Blockchain & Web3", desc: "Understand blockchain, crypto, and smart contracts.", img: "https://source.unsplash.com/400x250/?blockchain,crypto" },
    { title: "UI/UX Design", desc: "Design beautiful interfaces with Figma & XD.", img: "https://source.unsplash.com/400x250/?design,uiux" },
    { title: "Game Development with Unity", desc: "Build 2D/3D games with Unity engine.", img: "https://source.unsplash.com/400x250/?game,unity" },
    { title: "Data Analytics with Excel & Power BI", desc: "Data visualization & dashboards.", img: "https://source.unsplash.com/400x250/?excel,data" },
    { title: "SQL & Databases", desc: "Work with MySQL, PostgreSQL & MSSQL.", img: "https://source.unsplash.com/400x250/?database,sql" },
    { title: "DevOps (Docker, Kubernetes)", desc: "CI/CD pipelines & container management.", img: "https://source.unsplash.com/400x250/?devops,docker" },
    { title: "Artificial Neural Networks", desc: "Deep learning using TensorFlow & Keras.", img: "https://source.unsplash.com/400x250/?neural,deep-learning" },
    { title: "Business & Marketing", desc: "Grow your business with digital marketing.", img: "https://source.unsplash.com/400x250/?business,marketing" },
    { title: "Photography Masterclass", desc: "Learn professional photography techniques.", img: "https://source.unsplash.com/400x250/?photography,camera" },
    { title: "Communication & Soft Skills", desc: "Improve public speaking & professional skills.", img: "https://source.unsplash.com/400x250/?communication,skills" },
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
