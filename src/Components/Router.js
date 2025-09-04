
import { Link, Outlet, Route, Routes } from "react-router";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import PageNOtFound from "./PageNotFound";
import Home from "./Home";
import Courses from "./Courses";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import TDashboard from "./TDashboard";
import AdminDashboard from "./AdminDashboard";



export default function Router() {


    return (
        <div>
            <Routes>

                <Route element={<Navbar />}>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/tdashboard" element={<TDashboard />} />
                    <Route path="/admindashboard" element={<AdminDashboard />} />

                    

                    {/* <Route path="/colleges" element={<Colleges />} >
                        <Route index element={<RanchiUniversity />} />
                        <Route path="nirmalacollege" element={<NirmalaCollege />} />
                        <Route path="dspmu" element={<DSPMU />} />
                    </Route> */}
                    
                    <Route path="/*" element={<PageNOtFound />} />

                </Route>



                <Route path="/*" element={<PageNOtFound />} />
             </Routes>

        </div>
    )
}