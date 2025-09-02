import { Link, Outlet } from "react-router";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";



export default function Navbar() {
    return (
        <div>
            <div className="d-flex">
                {/* Sidebar */}
                <div
                    className="bg-info text-center text-white fw-bold fs-4 position-fixed top-0"
                    style={{ width: "180px", height: "100vh", borderRadius: "3px" }}
                >
                    <div className="d-flex flex-column pt-3">
                        <Link to="/" className="text-decoration-none text-dark py-2 border-bottom border-primary">
                            Home
                        </Link>
                        <Link to="/about" className="text-decoration-none text-dark py-2 border-bottom border-primary">
                            About
                        </Link>
                        <Link to="/contact" className="text-decoration-none text-dark py-2 border-bottom border-primary">
                            Contact Us
                        </Link>
                        <Link to="/courses" className="text-decoration-none text-dark py-2">
                            Courses
                        </Link>
                    </div>
                </div>

                {/* Sign In Button */}
                <div className="position-fixed top-0 end-0 m-3" style={{ zIndex: 1050}}>
                    <Link
                        to="/signin"
                        className="btn btn-outline-primary rounded-pill shadow px-4 fw-bold" style={{backgroundColor: "green", color: "white"}}
                    >
                        Sign In
                    </Link>
                </div>

                {/* Body Area */}
                <div className="flex-grow-1" style={{ paddingLeft: "180px", minHeight: "600px" }}>
                    <Outlet />
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
